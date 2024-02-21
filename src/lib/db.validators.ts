import { z } from "zod";

export const orderSchema = z.object({
    item: z.string({ required_error: "Item is required" }).min(1),
    quantity: z.number(),
    details: z.string({ required_error: "Please provide any details" }).min(5).max(100),
    enchant: z.string({ required_error: "Please select an enchant" }).min(1)
});


export type OrderRequest = z.infer<typeof orderSchema>;