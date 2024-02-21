'use client';
import type { IcraftingOrder } from '~/lib/Itemstypes';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table'
import type { FC } from 'react';

interface CurrentOrders {
    Orders: IcraftingOrder['Orders'];
}

const MiniInventory: FC<CurrentOrders> = ({
    Orders
}) => {

    return (
        <div className="mt-8 bg-card rounded-xl shadow-md p-6 mb-4">
            <h2 className="text-2xl font-bold mb-4">Order Status</h2>
            <Table className='font-semibold'>
                <TableHeader>
                    <TableRow>
                        <TableHead>Item</TableHead>
                        <TableHead>Quantity</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Details</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {Orders?.map((order) => {
                        return (
                            <TableRow key={order.id}>
                                <TableCell className='text-purple-600 font-bold'>{order.item?.name}</TableCell>
                                <TableCell>{order.quantity}</TableCell>
                                <TableCell className={order.status === "PENDING" ? 'text-yellow-400' : 'text-green-500'}>{order.status}</TableCell>
                                <TableCell>{order.details}</TableCell>
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </div>
    )
}

export default MiniInventory