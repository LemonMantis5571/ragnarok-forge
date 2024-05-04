import type { Enchants, Status } from "@prisma/client";
import { NextResponse } from "next/server";
import { getServerAuthSession } from "~/server/auth";
import { db } from "~/server/db";

type UpdateCraftingOrder = {
    item: string;
    quantity: number;
    details: string;
    enchant: keyof typeof Enchants;
    status: keyof typeof Status;
}

interface Iparams {
    craftingId?: string;
}

export async function POST(req: Request, { params }: { params: Iparams }) {
    const data = await getServerAuthSession();

    const { craftingId } = params;



    if (!data) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

    }

    if (data.user.role !== "admin") {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await req.json() as UpdateCraftingOrder;

    const {
        enchant,
        status
    } = body;

    const blacksmithingOrder = await db.craftingOrder.findUnique({
        where: {
            id: craftingId,
        }
    });

    if (!blacksmithingOrder) {
        return NextResponse.json({ error: 'Order not found' }, { status: 404 });
    }

    const updateBlackmithingOrder = await db.craftingOrder.update({
        where: {
            id: blacksmithingOrder.id,
        },
        data: {
            status: status,
            Enchants: enchant
        }
    });

    return NextResponse.json(updateBlackmithingOrder);
}