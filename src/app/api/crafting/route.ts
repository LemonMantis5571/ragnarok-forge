import { NextResponse } from "next/server";
import { getServerAuthSession } from "~/server/auth";
import { db } from "~/server/db";

type CrafingOrder = {
    item: string;
    quantity: number;
    details: string;
    enchant: string;
}

export async function POST(
    request: Request
) {
    const data = await getServerAuthSession();

    if (!data) {
        return NextResponse.redirect("/auth/signin");
    }

    const body = await request.json() as CrafingOrder;

    const {
        item,
        quantity,
        details,
        enchant
    } = body;

    const orderItem = await db.item.findUnique({
        where: {
            id: parseInt(item)
        }

    });

    if (!orderItem) {
        return null;
    }

    const order = await db.craftingOrder.create({
        data: {
            userId: data.user.id,
            quantity,
            details,
            itemsId: orderItem?.id
        }
    });


    return NextResponse.json(order);
}