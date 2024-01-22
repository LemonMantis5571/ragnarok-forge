/* eslint-disable @next/next/no-img-element */
import type { User } from 'next-auth'
import type { FC } from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "./ui/dropdown-menu"
// import Link from 'next/link';
import { signOut } from 'next-auth/react';

interface UserMenuProps {
    user: Pick<User, 'name' | 'email' | 'image' | 'role'>;
}

const UserMenu: FC<UserMenuProps> = ({ user }) => {
    return (<DropdownMenu >
        <DropdownMenuTrigger asChild className='hover:cursor-pointer'>
            {user?.image ? (
                <div>
                    <img
                        src={user?.image}
                        alt='User Image'
                        width={40}
                        height={40}
                        className='rounded-full'
                    />
                </div>
            ) : null}
        </DropdownMenuTrigger>
        <DropdownMenuContent className='rounded me-2'>
            <DropdownMenuLabel>{user?.name}</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem className='rounded' >{user?.email}</DropdownMenuItem>
            {/* <DropdownMenuItem><Link href={'/'}>Feed</Link></DropdownMenuItem> */}
            <DropdownMenuItem className='capitalize'>{user?.role}</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className='cursor-pointer rounded' onSelect={(e) => {
                e.preventDefault();
                void signOut({
                    callbackUrl: `${window.location.origin}/`
                });
            }}>
                Sign out
            </DropdownMenuItem>
        </DropdownMenuContent>
    </DropdownMenu>)
}

export default UserMenu