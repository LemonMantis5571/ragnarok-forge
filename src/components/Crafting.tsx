/* eslint-disable @next/next/no-img-element */
'use client';
import { type FC, useState } from "react"
import MiniInventory from "./MiniInventory"
import { Button } from "./ui/button"
import { Label } from "./ui/label"
import { type SubmitHandler, useForm } from 'react-hook-form';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "./ui/select"
import { Textarea } from "./ui/textarea"
import { type IcraftingOrder } from "~/lib/Itemstypes"
import CraftableItemsInfo from "./CraftableItemsInfo";
import { orderSchema, type OrderRequest } from "~/lib/db.validators";
import { Form, FormControl, FormField, FormItem, FormMessage } from "./ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useRouter } from "next/navigation";

const Crafting: FC<IcraftingOrder> = ({ Item, Orders }) => {
    const [selectedItem, setSelectedItem] = useState<string>('');
    const router = useRouter();

    const form = useForm<OrderRequest>({
        defaultValues: {
            item: '',
            enchant: '',
            details: '',
            quantity: 1,
        },
        resolver: zodResolver(orderSchema)
    });

    const Enchants = {
        STR: "STR",
        AGI: "AGI",
        VIT: "VIT",
        INT: "INT",
        DEX: "DEX",
        LUK: "LUK",
        ATK: "ATK",
        MATK: "MATK",
        DEF: "DEF",
        MDEF: "MDEF",
        HIT: "HIT",
        FLEE: "FLEE",
        CRIT: "CRIT",
        ASPD: "ASPD",
        HP: "HP",
        SP: "SP",
    }

    const onSubmit: SubmitHandler<OrderRequest> = async (data) => {
        try {
            await axios.post<OrderRequest>('/api/crafting', data);

        } catch (error) {
            console.log(error);
        }
        form.reset();
        router.refresh();
        setSelectedItem('');
    }

    const selected = Item?.find((item) => item.id === parseInt(selectedItem));
    return (
        <div className="container mx-auto">
            <div className="grid gap-8 md:grid-cols-2 py-6 px-4">
                <div className="bg-card rounded-xl shadow-md p-6">
                    <h2 className="text-2xl font-bold mb-4">Crafting Order</h2>
                    <Form {...form}>
                        <form className="flex flex-col space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
                            <FormField name='item' control={form.control} render={({ field }) => (
                                <FormItem>
                                    <div className="space-y-2">
                                        <Label htmlFor="item">Craftable Items</Label>
                                        <Select onValueChange={(value) => {
                                            setSelectedItem(value);
                                            field.onChange(value);
                                        }} value={field.value}>
                                            <FormControl>
                                                <SelectTrigger className="w-full rounded">
                                                    <SelectValue placeholder="Select an item" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent className="space-y-2 rounded">
                                                <SelectGroup className="rounded">
                                                    {Item?.map((item) => {
                                                        return (
                                                            <SelectItem
                                                                key={item.id}
                                                                value={item.id.toString()}
                                                                className="font-semibold"
                                                            >
                                                                <img src={item.Image} alt="Valkyrja&apos;s Shield" className="inline-block h-4 w-4 me-2" />
                                                                {item.name}
                                                            </SelectItem>
                                                        );
                                                    })}
                                                </SelectGroup>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <FormMessage />
                                </FormItem>
                            )} />
                            {selected &&
                                (<CraftableItemsInfo
                                    name={selected?.name}
                                    description={selected?.description}
                                    stats={selected?.Stats}
                                    Weight={selected?.weight}
                                    itemClass="Shield" />)
                            }
                            <FormField name='enchant' control={form.control} render={({ field }) => (
                                <FormItem >
                                    <div className="space-y-2">
                                        <Label htmlFor="Enchants">Enchants</Label>
                                        <Select onValueChange={field.onChange} value={field.value}>
                                            <FormControl>
                                                <SelectTrigger className="w-full rounded">
                                                    <SelectValue placeholder="Select an Enchant" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent className="space-y-2 rounded">
                                                <SelectGroup className="rounded">
                                                    {Object.keys(Enchants).map((enchant, index) => {
                                                        return (
                                                            <SelectItem
                                                                key={index}
                                                                value={enchant}
                                                                className="font-semibold"
                                                            >
                                                                {enchant}
                                                            </SelectItem>
                                                        );
                                                    })}
                                                </SelectGroup>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <FormMessage />
                                </FormItem>
                            )} />
                            <FormField name='details' control={form.control} render={({ field }) => (
                                <FormItem>
                                    <div className="space-y-4">
                                        <Label htmlFor="Details">Additional Details</Label>
                                        <Textarea className="rounded" placeholder="Additional Details" {...field} />
                                    </div>
                                    <FormMessage />
                                </FormItem>
                            )} />
                            <Button className="rounded font-semibold text-neutral-100" disabled={form.formState.isSubmitting} type="submit">Submit Order</Button>
                        </form>
                    </Form>
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
            <MiniInventory Orders={Orders} />
        </div>

    )
}

export default Crafting