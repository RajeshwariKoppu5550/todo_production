'use client';

import { usePathname } from 'next/navigation';

export default function Header() {
    const pathname = usePathname();

    if (pathname.startsWith('/contact_us')) {
        return null;
    }

    return <div className="bg-white shadow-md p-4">Header from main layout</div>;
}