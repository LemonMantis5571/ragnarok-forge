/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { getServerAuthSession } from '~/server/auth';
import SessionComponent from './SessionComponent';



const Navbar = async () => {
    const data = await getServerAuthSession();
    return (<nav className='sticky top-0 inset-x-0 h-fit bg-background border-b z-[10] py-1'>
        <div className='container max-w-full h-full mx-auto flex'>
            <div className='flex items-center w-full gap-8'>
                <Link href={'/'} className='flex  gap-2 items-center'>
                    <img src='/logo.png' alt='logo' className='w-20 h-20' />
                    <p className='hidden text-sm font-medium md:block'>
                        Ragnarok Forge Online
                    </p>
                </Link>
            </div>
            <SessionComponent data={data} />
        </div>
    </nav>)
}

export default Navbar