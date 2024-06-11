'use client'
import React from 'react'
import {
	Navbar as Nav,
	NavbarContent,
	NavbarItem,
	NavbarMenuToggle,
	NavbarMenu,
	NavbarMenuItem,
	Link,
	Button
} from '@nextui-org/react'
import Image from 'next/image'
import NextLink from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
	const [isMenuOpen, setIsMenuOpen] = React.useState(false)

	const menuItems = ['Home', 'Courses', 'About us', 'Contact']
	const pathname = usePathname().substring(1)

	return (
		<Nav
			onMenuOpenChange={setIsMenuOpen}
			maxWidth='full'
			height='6rem'
			className='lg:px-28'
			id='navbar'
		>
			<NavbarContent>
				<NavbarMenuToggle
					aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
					className='sm:hidden'
				/>
				<div className='pr-12'>
					<Image
						width={130}
						height={40}
						src={'/images/youcode-logo-light.svg'}
						alt='Youcode'
						className='min-w-28'
					/>
				</div>
				<div className='hidden sm:flex gap-4'>
					{menuItems.map(item => {
						const i = item === 'Home' ? '/' : item
						return (
							<NavbarItem
								key={item}
								isActive={
									(i === '/' && pathname === '') ||
									pathname.toLowerCase() === i.toLowerCase()
								}
							>
								<Link
									color={
										(i === '/' && pathname === '') ||
										pathname.toLowerCase() === i.toLowerCase()
											? 'primary'
											: 'foreground'
									}
									as={NextLink}
									href={`/${i.toLowerCase()}`}
								>
									{item}
								</Link>
							</NavbarItem>
						)
					})}
				</div>
			</NavbarContent>
			<NavbarContent justify='end'>
				<NavbarItem>
					<Button
						as={Link}
						color='primary'
						href='#'
						variant='flat'
					>
						Sign Up
					</Button>
				</NavbarItem>
			</NavbarContent>
			<NavbarMenu>
				{menuItems.map((item, index) => (
					<NavbarMenuItem key={`${item}-${index}`}>
						<Link
							color={
								index === 2
									? 'primary'
									: index === menuItems.length - 1
										? 'danger'
										: 'foreground'
							}
							className='w-full'
							href='#'
							size='lg'
						>
							{item}
						</Link>
					</NavbarMenuItem>
				))}
			</NavbarMenu>
		</Nav>
	)
}
