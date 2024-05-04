import { db } from "~/server/db";

export default async function getCraftableItems() {

    try {
        const craftableItems = await db.item.findMany({
            where: {
                craftable: true
            },
            include: {
                Stats: true
            }
        });

        if (!craftableItems) {
            return null;
        }

        return craftableItems;
    } catch (error) {
        console.log(error);
        return null;
    }
}