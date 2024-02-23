import type { FC } from 'react'
import { Button } from '~/components/ui/button'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '~/components/ui/table'

const page: FC = () => {
    return (<div className='grid min-h-screen lg:grid-cols-[280px_1fr] w-full'>
        <div className='bg-card bg-cover bg-center'>
            <ul className='flex items-start p-4 flex-col gap-4 mt-2 font-bold text-sm'>
                <li className='transition-all hover:text-muted cursor-pointer'>
                    Pending
                </li>
                <li className='transition-all hover:text-muted cursor-pointer' >
                    Completed
                </li>
                <li className='transition-all hover:text-muted cursor-pointer'>
                    All
                </li>
            </ul>
        </div>
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>Item</TableHead>
                    <TableHead>Quantity</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Details</TableHead>
                    <TableHead>Actions</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                <TableRow>
                    <TableCell className='text-purple-600 font-bold'>Item</TableCell>
                    <TableCell>Quantity</TableCell>
                    <TableCell className='text-yellow-400'>Pending</TableCell>
                    <TableCell>Details</TableCell>
                    <TableCell>
                        <Button variant={'outline'} className='rounded text-neutral-100 text-sm'>
                            CRAFTING OPTIONS
                        </Button>
                    </TableCell>
                </TableRow>
            </TableBody>
        </Table>
    </div>)
}

export default page