
import type { FC } from 'react'
import getOrders from '../actions/getOrders'
import BlacksmithingTable from '~/components/blacksmithing/BlacksmithingTable'

const page: FC = async () => {

    const orders = await getOrders({ all: true });

    return (
        <BlacksmithingTable Orders={orders} />
    )
}

export default page