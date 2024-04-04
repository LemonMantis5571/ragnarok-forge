/* eslint-disable @next/next/no-img-element */
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "../ui/dialog";

import React, { type FC } from 'react'
import { Button } from "../ui/button";
import { Icons } from "../Icons";


interface CraftModalProps {
    player: string | null;
    id: string;
    name: string | undefined;
    detaiils: string | null;
}



const CraftModal: FC<CraftModalProps> = ({ id, name, detaiils, player }) => {
    return (
        <Dialog>
            <DialogTrigger>
                <Button variant={'outline'} className='rounded text-neutral-100 text-xs gap-2' >
                    <Icons.hammer className='h-4 w-4' />
                    CRAFT
                </Button></DialogTrigger>
            <DialogContent className="w-50 sm:w-full !rounded">
                <DialogHeader>
                    <DialogTitle className="text-xs sm:flex gap-2 sm:text-base">Craft Order ID:
                        <p className="text-green-500">{id}</p>
                    </DialogTitle>
                    <DialogDescription className="flex flex-col gap-2 text-neutral-200">
                        <hr className="border-neutral-300" />
                        <div className="flex gap-2 capitalize">
                            <h1 className="font-bold ">Player:</h1>
                            {player}
                        </div>
                        <div className="flex gap-2">
                            <h1 className="font-bold">Item:</h1>
                            <p className="text-yellow-300">{name}</p>
                        </div>
                        <div className="flex gap-2">
                            <h1 className="font-bold">Details:</h1>
                            {detaiils}
                        </div>
                        <hr className="border-neutral-300" />
                        <div className="w-full flex flex-col justify-end items-end mt-2">
                            <img
                                src="https://zzfemgmhmqgjtpubtdql.supabase.co/storage/v1/object/public/sprites/NPCS/Refine_Master.png"
                                alt="Refine Master"
                                className="object-contain w-24 h-24" />
                            <Button variant="outline" className="w-full mt-2">Craft</Button>
                        </div>
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}

export default CraftModal;

