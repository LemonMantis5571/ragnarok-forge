'use client'
/* eslint-disable @next/next/no-img-element */
import { useState, type FC } from 'react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '~/components/ui/table'
import type { BlacksmithingTableOrders } from '~/lib/Itemstypes'
import { Icons } from '../Icons'
import CraftModal from './CraftModal'


const BlacksmithingTable: FC<BlacksmithingTableOrders> = ({ Orders }) => {
    const [selectedFilter, setSelectedFilter] = useState<string>('PENDING')

    const filteredOrder = selectedFilter !== 'ALL' ? Orders?.filter((order) => order.status === selectedFilter) : Orders;

    return (
        <div className='grid h-full md:min-h-screen lg:grid-cols-[280px_1fr] w-full'>
            <div className='bg-card bg-cover bg-center'>
                <ul className='flex items-start p-4 justify-center md:flex-col gap-6 md:gap-4 mt-2 font-bold text-sm'>
                    <li className='flex items-center gap-2 transition-all hover:text-muted cursor-pointer' onClick={() => {
                        setSelectedFilter('PENDING');
                    }}>
                        <Icons.pending />
                        Pending
                    </li>
                    <li className='transition-all flex items-center gap-2 hover:text-muted cursor-pointer' onClick={() => {
                        setSelectedFilter('COMPLETED');
                    }}>
                        <Icons.completed />
                        Completed
                    </li>
                    <li className='transition-all  flex items-center gap-2 hover:text-muted cursor-pointer' onClick={() => {
                        setSelectedFilter('ALL');
                    }}>
                        <Icons.all />
                        All
                    </li>
                </ul>
            </div>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className='text-neutral-200'>
                            <div className='flex items-center gap-2'>
                                <img className='h-8 w-8' src='https://zzfemgmhmqgjtpubtdql.supabase.co/storage/v1/object/public/sprites/inventory/previewSprite.gif' alt='previewItem' />
                                Preview
                            </div>
                        </TableHead>
                        <TableHead className='text-neutral-200 flex items-center gap-2'>
                            <div className='flex items-center gap-2'>
                                <img className='h-8 w-8' src='https://zzfemgmhmqgjtpubtdql.supabase.co/storage/v1/object/public/sprites/inventory/shieldSprite.gif' alt='Item' />
                                Item
                            </div>
                        </TableHead>
                        <TableHead className='text-neutral-200'>Quantity</TableHead>
                        <TableHead className='text-neutral-200'>Status</TableHead>
                        <TableHead className='text-neutral-200'>Details</TableHead>
                        <TableHead className='text-neutral-200'>Requested By</TableHead>
                        <TableHead className='text-neutral-200'>Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {filteredOrder?.map((order) => {
                        return (
                            <TableRow key={order.id}>
                                <TableCell>
                                    <img src={order.item?.Image} className='h-6 w-6' alt='itemImg' />
                                </TableCell>
                                <TableCell className='text-purple-600 font-bold'>
                                    {order.item?.name}
                                </TableCell>
                                <TableCell>{order.quantity}</TableCell>
                                <TableCell className={order.status === "PENDING" ? 'text-yellow-400' : 'text-green-500'}>{order.status}</TableCell>
                                <TableCell>{order.details}</TableCell>
                                <TableCell className='capitalize'>{order.user.name}</TableCell>
                                <TableCell>
                                    <CraftModal player={order.user.name} id={order.id} name={order.item?.name} detaiils={order.details} />
                                </TableCell>
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </div>)
}

export default BlacksmithingTable