import React from 'react'
import styles from './UserCard.module.scss'

export const UserCardPlaceholder = (props) => {
	return (
		<div className={styles.userCard + ' ' + styles.userCardPlaceholder}>
			<div className={styles.userIcon}></div>
			<h3></h3>
			<ul>
				<li>
					<h4>&nbsp;</h4>
					<p>&nbsp;</p>
				</li>
				<li>
					<h4>&nbsp;</h4>
					<p>&nbsp;</p>
				</li>
				<li>
					<h4>&nbsp;</h4>
					<p>
						&nbsp;
						<br />
						&nbsp;
					</p>
				</li>
			</ul>
			<a className={styles.emailButton} href="">
				&nbsp;
			</a>
		</div>
	)
}

// export default UserCard
