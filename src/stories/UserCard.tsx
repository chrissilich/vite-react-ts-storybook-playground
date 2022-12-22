import React from 'react'
import styles from './UserCard.module.scss'
import { DummyJsonUserDataInterface, DummyJsonUserInterface } from './DummyJsonInterfaces'

interface UserCardProps {
	/**
	 * The data for a user, in the model provided by the dummyjson.com API
	 */
	user: DummyJsonUserInterface
}
export const UserCard = ({ user, ...props }: UserCardProps) => {
	return (
		<div className={styles.userCard}>
			<img className={styles.userIcon} src={user.image} />
			<h3>
				{user.firstName} {user.lastName}
			</h3>
			<ul>
				<li>
					<h4>Email: </h4>
					<p>{user.email}</p>
				</li>
				<li>
					<h4>School: </h4>
					<p>{user.university}</p>
				</li>
				<li>
					<h4>Address: </h4>
					<p>
						{user.address.address}
						<br />
						{user.address.city} {user.address.state}
						{user.address.postalCode}
					</p>
				</li>
			</ul>
			<a className={styles.emailButton} href={`mailto: ${user.email}`}>
				Contact {user.firstName}
			</a>
		</div>
	)
}

// export default UserCard
