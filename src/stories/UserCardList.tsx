import React from 'react'
import styles from './UserCardList.module.scss'

import { UserCard } from './UserCard'
import { UserCardPlaceholder } from './UserCardPlaceholder'
import { DummyJsonUserDataInterface, DummyJsonUserInterface } from './DummyJsonInterfaces'

interface UserCardListProps {
	/**
	 * The data for an array of users, in the model provided by the dummyjson.com API
	 */
	users: DummyJsonUserInterface[] | undefined
}
export const UserCardList = ({ users, ...props }: UserCardListProps) => {
	return (
		<ul className={styles.userCardList}>
			{!users && Array(10).fill(<UserCardPlaceholder />)}
			{users?.length && users.map((user) => <UserCard user={user} />)}
		</ul>
	)
}

// export default UserCard
