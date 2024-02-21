import type { CraftingOrder, type Item } from "@prisma/client";

export interface IcraftableItems {
    Item: ({
        Stats: {
            id: number;
            str: number;
            agi: number;
            vit: number;
            int: number;
            dex: number;
            luk: number;
            atk: number;
            matk: number;
            def: number;
            mdef: number;
            hit: number;
            flee: number;
            crit: number;
            aspd: number;
            hp: number;
            sp: number;
        } | null
    } & Item)[] | null;
}

export interface IcraftingOrder {
    Item: ({
        Stats: {
            id: number;
            str: number;
            agi: number;
            vit: number;
            int: number;
            dex: number;
            luk: number;
            atk: number;
            matk: number;
            def: number;
            mdef: number;
            hit: number;
            flee: number;
            crit: number;
            aspd: number;
            hp: number;
            sp: number;
        } | null
    } & Item)[] | null;

    Orders: ({
        item: Item | null
    } & CraftingOrder)[] | null;
}