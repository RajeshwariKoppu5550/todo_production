'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

type Props = {
    href: string;
    children: React.ReactNode;
    className?: string;
    exact?: boolean;
};

export default function ActiveLink({ href, children, className = '', exact = false }: Props) {
    const pathname = usePathname() || '';
    const normalizedHref = href.endsWith('/') && href !== '/' ? href.slice(0, -1) : href;
    const normalizedPath = pathname.endsWith('/') && pathname !== '/' ? pathname.slice(0, -1) : pathname;

    const isActive = exact ? normalizedPath === normalizedHref : normalizedPath === normalizedHref || normalizedPath.startsWith(normalizedHref + '/') || normalizedPath.startsWith(normalizedHref);

    const activeClass = 'underline font-semibold';

    return (
        <Link href={href} className={`${className} ${isActive ? activeClass : ''}`.trim()}>
            {children}
        </Link>
    );
}
