'use client';

import type { Session } from 'next-auth'
import type { FC } from 'react'
import UserMenu from './UserMenu'
import { Icons } from './Icons'
import { signIn } from 'next-auth/react'

interface SessionComponentProps {
    data: Session | null
}

const SessionComponent: FC<SessionComponentProps> = ({ data }) => {
    return (<div className='flex justify-center sm:justify-end w-full items-center gap-4'>
        {data?.user ? null : <Icons.discord className='w-6 h-6' onClick={() => void signIn('discord')} />}
        {data && <span className='font-semibold capitalize text-md'>{data.user?.name}</span>}
        {data?.user ? (<UserMenu user={data?.user}></UserMenu>) : null}
    </div>)
}

export default SessionComponent