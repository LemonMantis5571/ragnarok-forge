import Link from 'next/link'
import type { FC } from 'react'
import { Icons } from '~/components/Icons'
import { Button } from '~/components/ui/button'



const page: FC = ({ }) => {
    return (<div className="flex flex-col items-center justify-center min-h-screen bg-red-500">
        <Icons.lock className="h-12 w-12 text-white" />
        <h1 className="text-3xl font-bold text-white mt-4">Access Denied</h1>
        <Button className="mt-8" variant="outline">
            <Link href={'/'}>Go Back</Link>
        </Button>
    </div>)
}

export default page