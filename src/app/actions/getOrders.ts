import { getServerAuthSession } from "~/server/auth";
import { db } from "~/server/db";

export default async function getOrders() {

    const user = await getServerAuthSession();

    try {
        const orders = await db.craftingOrder.findMany({
            where: {
                userId: user?.user.id

            },
            include: {
                item: true
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