import { useRouter } from 'next/router'
import React from 'react'
import styles from '../footer/Footer.module.scss'

const navItems = [
	{
		icon: 'home',
		link: '/'
	},
	{
		icon: 'explore',
		link: '/explore'
	},
	{
		icon: 'place',
		link: '/place'
	},
	{
		icon: 'person_outline',
		link: '/profile'
	}
]

export const Footer = () => {
	const {push, pathname} = useRouter()

	return (
		<footer className={styles.footer}>
			<nav>
				{navItems.map((item, index) => 
					<button
						className={pathname === item.link ? styles.active : ''} 
						onClick={() => push(item.link)} 
						key={item.index}
					>
						<span className='material-icons-outlined'>{item.icon}</span>
					</button>
				)}
			</nav>
		</footer>
	)
}
