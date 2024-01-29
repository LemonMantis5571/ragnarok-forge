'use client';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table'


const MiniInventory = () => {
    return (
        <div className="mt-8 bg-card rounded-xl shadow-md p-6 mb-4">
            <h2 className="text-2xl font-bold mb-4">Order Status</h2>
            <Table className='font-semibold'>
                <TableHeader>
                    <TableRow>
                        <TableHead>Item</TableHead>
                        <TableHead>Quantity</TableHead>
                        <TableHead>Status</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                        <TableCell>Sword</TableCell>
                        <TableCell>1</TableCell>
                        <TableCell className='text-yellow-400'>In Progress</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Potion</TableCell>
                        <TableCell>3</TableCell>
                        <TableCell className='text-green-500'>Completed</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </div>
    )
}

export default MiniInventory