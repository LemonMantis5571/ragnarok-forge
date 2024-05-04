import { getServerAuthSession } from "~/server/auth";
import { db } from "~/server/db";

interface GetOrdersOptions {
    all?: boolean;
}

export default async function getOrders(options: GetOrdersOptions = {}) {

    const user = await getServerAuthSession();

    try {

        if (options.all) {
            const orders = await db.craftingOrder.findMany({
                include: {
                    item: true,
                    user: {
                        select: {
                            name: true
                        }
                    }
                }
            });

            if (!orders) {
                return null;
            }

            return orders;
        }

        const orders = await db.craftingOrder.findMany({
            where: {
                userId: user?.user.id
            },
            include: {
                item: true,
                user: {
                    select: {
                        name: true
                    }
                }
            }
        });

        if (!orders) {
            return null;
        }

        return orders;

    } catch (error) {
        console.log(error);
        return null;
    }

}