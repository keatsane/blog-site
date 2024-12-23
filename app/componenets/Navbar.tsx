'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export const Navbar = () => {
	const pathname = usePathname()

	return (
		<header className="bg-background border-b-2 border-tertiary text-secondary font-bold">
			<div className="hidden md:block">
				<nav>
					<Link
						href="/"
						className={`${
							pathname === '/' ? 'bg-foreground border-b-2' : 'hover:border-b-2'
						} px-3 py-3 border-secondary`}
					>
						Projects
					</Link>
					<Link
						href="/blog"
						className={`${
							pathname === '/blog' ? 'bg-foreground border-b-2' : 'hover:border-b-2'
						} px-3 py-3 border-secondary`}
					>
						Blog
					</Link>
					<Link
						href="/about"
						className={`${
							pathname === '/about' ? 'bg-foreground border-b-2' : 'hover:border-b-2'
						} px-3 py-3 border-secondary`}
					>
						About
					</Link>
				</nav>
			</div>
			<div className="md:hidden block"></div>
		</header>
	)
}
