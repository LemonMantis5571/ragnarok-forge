/* eslint-disable @next/next/no-img-element */

import MiniInventory from "./MiniInventory"
import { Button } from "./ui/button"
import { Label } from "./ui/label"

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "./ui/select"
import { Textarea } from "./ui/textarea"


const Crafting = () => {
    return (
        <div className="container mx-auto">
            <div className="grid gap-8 md:grid-cols-2 py-6 px-4">
                <div className="bg-card rounded-xl shadow-md p-6">
                    <h2 className="text-2xl font-bold mb-4">Crafting Order</h2>
                    <form className="flex flex-col space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="item">Craftable Items</Label>
                            <Select name="item">
                                <SelectTrigger className="w-full rounded">
                                    <SelectValue placeholder="Select an item" />
                                </SelectTrigger>
                                <SelectContent className="space-y-2 rounded">
                                    <SelectGroup className="rounded">
                                        <SelectItem value="Vshield" className="font-semibold">
                                            <img src="https://rune-nifelheim.com/db/items/img/2115.gif" alt="Valkyrja&apos;s Shield" className="inline-block h-4 w-4 me-2" />
                                            Valkyrja&apos;s Shield</SelectItem>
                                        <SelectItem value="Varmor">
                                            <img src="https://rune-nifelheim.com/db/items/img/2357.gif" alt="Valkyrja&apos;s Armor" className="inline-block h-4 w-4 me-2" />
                                            Valkyrian Armor</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="Enchants">Enchants</Label>
                            <Select name="Enchants">
                                <SelectTrigger className="w-full rounded">
                                    <SelectValue placeholder="Select an item" />
                                </SelectTrigger>
                                <SelectContent className="space-y-2 rounded">
                                    <SelectGroup className="rounded">
                                        <SelectItem value="HP">HP+3</SelectItem>
                                        <SelectItem value="ATK">ATK+3</SelectItem>
                                        <SelectItem value="AGI">AGI+3</SelectItem>
                                        <SelectItem value="VIT">VIT+3</SelectItem>
                                        <SelectItem value="INT">INT+3</SelectItem>
                                        <SelectItem value="DEX">DEX+3</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="space-y-4">
                            <Label htmlFor="Details">Additional Details</Label>
                            <Textarea name="Details" className="rounded" placeholder="Additional Details" />
                            <Button className="rounded font-semibold text-neutral-100">Submit Order</Button>
                        </div>
                    </form>
                </div>
                <div className="bg-card rounded-xl shadow-md p-6">
                    <h2 className="text-2xl font-extrabold mb-4">Inventory</h2>
                    <div className="grid gap-2 font-semibold">
                        <div className="flex justify-between">
                            <span>Iron Ingots</span>
                            <span>12</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Leather Strips</span>
                            <span>8</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Enchanted Gems</span>
                            <span>3</span>
                        </div>
                    </div>
                </div>
            </div>
            <MiniInventory />
        </div>

    )
}

export default Crafting