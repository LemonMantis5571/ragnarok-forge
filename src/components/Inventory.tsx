/* eslint-disable @next/next/no-img-element */
import Link from "next/link"
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "./ui/table"

import type { FC } from 'react'
import { Button } from "./ui/button"
import { Icons } from "./Icons"


const Inventory: FC = () => {
    return (
        <div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr]">
            <div className="hidden border-r bg-card lg:block dark:bg-gray-800/40">
                <div className="flex h-full max-h-screen flex-col gap-2">
                    <div className="flex h-[60px] items-center border-b px-6">
                        <Link className="flex items-center gap-2 font-semibold" href="#">
                            <Icons.home className="h-4 w-4" />
                            <span className="">User&apos;s Inventory</span>
                        </Link>
                    </div>
                    <div className="flex-1 overflow-auto py-2">
                        <nav className="grid items-start px-4 text-sm font-medium">
                            <Link
                                className="flex items-center gap-3 rounded-lg px-3 py-2  transition-all hover:text-muted dark:text-gray-400 dark:hover:text-gray-50"
                                href="#"
                            >
                                <Icons.home className="h-2 w-2" />
                                Home
                            </Link>
                            <Link
                                className="flex items-center gap-3 rounded-lg px-3 py-2  transition-all hover:text-muted dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50"
                                href="#"
                            >
                                <img src="/inventoryIcon.webp" alt="craft" className="h-4 w-4" />
                                Items
                            </Link>
                            <Link
                                className="flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-muted dark:text-gray-400 dark:hover:text-gray-50"
                                href="#"
                            >
                                <img src="/card.png" alt="card" className="h-4 w-4" />
                                Cards
                            </Link>
                        </nav>
                    </div>
                </div>
            </div>
            <div className="flex flex-col">
                <header className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-card  px-6 dark:bg-gray-800/40">
                    <Link className="lg:hidden" href="#">
                        <Icons.home className="h-6 w-6" />
                        <span className="sr-only">Home</span>
                    </Link>
                </header>
                <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
                    <div className="flex items-center">
                        <h1 className="font-semibold text-lg md:text-2xl">Items</h1>
                        <Button className="ml-auto rounded" size="sm">
                            Add Item
                        </Button>
                    </div>
                    <div className="border shadow-sm rounded-lg">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="w-[80px]">Image</TableHead>
                                    <TableHead className="max-w-[150px]">Name</TableHead>
                                    <TableHead className="hidden md:table-cell">Description</TableHead>
                                    <TableHead className="hidden md:table-cell">Rarity</TableHead>
                                    <TableHead>Attributes</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                <TableRow>
                                    <TableCell>
                                        <img
                                            alt="Item image"
                                            className="aspect-square rounded-md object-cover"
                                            height="64"
                                            src="https://rune-nifelheim.com/db/items/img/2115.gif"
                                        />
                                    </TableCell>
                                    <TableCell className="font-medium">Valkyrja&apos;s Shield</TableCell>
                                    <TableCell className="hidden md:table-cell">
                                        A shield used by Gna,
                                        messenger of Freyja,
                                        when she served as
                                        a Valkyrie. Adds 20%
                                        resistance to Water,
                                        Fire, Undead and
                                        Shadow properties.
                                    </TableCell>
                                    <TableCell>Rare</TableCell>
                                    <TableCell className="hidden md:table-cell">MDEF +5</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>
                                        <img
                                            alt="Item image"
                                            className="aspect-square rounded-md object-cover"
                                            height="64"
                                            src="https://rune-nifelheim.com/db/items/img/2357.gif"
                                        />
                                    </TableCell>
                                    <TableCell className="font-medium">Valkyrian Armor</TableCell>
                                    <TableCell className="hidden md:table-cell">A set of shining white
                                        armor worn by Valkyries, the battle maidens that
                                        serve the god Odin.
                                        Increases resistance
                                        to Mute status when
                                        worn by Mage, Archer,
                                        and Acolyte Classes.
                                        Increases resistance
                                        to Stun status when
                                        worn by Swordman,
                                        Merchant, and Thief
                                        Classes. Cannot be
                                        destroyed in battle.</TableCell>
                                    <TableCell>Super Rare</TableCell>
                                    <TableCell className="hidden md:table-cell">All stats +1</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </div>
                    <div className="flex items-center mt-8">
                        <h1 className="font-semibold text-lg md:text-2xl">Cards</h1>
                        <Button className="ml-auto rounded" size="sm">
                            Add Card
                        </Button>
                    </div>
                    <div className="border shadow-sm rounded-lg">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="w-[80px]">Image</TableHead>
                                    <TableHead className="max-w-[150px]">Name</TableHead>
                                    <TableHead className="hidden md:table-cell">Description</TableHead>
                                    <TableHead className="hidden md:table-cell">Rarity</TableHead>
                                    <TableHead>Attributes</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                <TableRow>
                                    <TableCell>
                                        <img
                                            alt="Card image"
                                            className="aspect-square rounded-md object-cover"
                                            height="64"
                                            src="/placeholder.svg"
                                            width="64"
                                        />
                                    </TableCell>
                                    <TableCell className="font-medium">Dragon&apos;s Roar</TableCell>
                                    <TableCell className="hidden md:table-cell">A card that summons a powerful dragon.</TableCell>
                                    <TableCell>Legendary</TableCell>
                                    <TableCell className="hidden md:table-cell">Attack +30, Defense +10</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>
                                        <img
                                            alt="Card image"
                                            className="aspect-square rounded-md object-cover"
                                            height="64"
                                            src="/placeholder.svg"
                                            width="64"
                                        />
                                    </TableCell>
                                    <TableCell className="font-medium">Healing Light</TableCell>
                                    <TableCell className="hidden md:table-cell">A card that heals all allies.</TableCell>
                                    <TableCell>Common</TableCell>
                                    <TableCell className="hidden md:table-cell">Heal +20</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </div>
                </main>
            </div>
        </div>)
}

export default Inventory

