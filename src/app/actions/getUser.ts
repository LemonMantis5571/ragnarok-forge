import { db } from "~/server/db";

export default async function getUser(id: string) {
    try {
        const user = await db.user.findUnique({
            where: {
                id: id
            }
        });

        if (!user) {
            return null;
        }

        return {
            name: user.name,
        }

    } catch (error) {
        console.log(error);
        return null;
    }
}