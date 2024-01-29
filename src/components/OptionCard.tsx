/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import type { FC } from 'react'

interface OptionCardProps {
    title: string;
    description: string;
    imageSrc: string;
    linkRef: string;
    buttonLabel: string;
}

const OptionCard: FC<OptionCardProps> = ({ title, description, imageSrc, linkRef, buttonLabel }) => {
    return (
        <div className="flex flex-col items-center gap-4 p-6 bg-card rounded-lg shadow-md dark:bg-gray-800">
            <h2 className="text-2xl font-bold  dark:text-gray-50">{title}</h2>
            <img src={imageSrc} alt="card" className="object-contain h-96 w-96" />
            <p className="text-gray-500 dark:text-gray-400">{description}</p>
            <Link
                className="mt-auto inline-flex h-10 items-center justify-center rounded-md bg-muted px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                href={linkRef}
            >
                {buttonLabel}
            </Link>
        </div>)
}

export default OptionCard