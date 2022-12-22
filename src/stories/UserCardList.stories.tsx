import React, { useEffect, useState } from 'react'
import { DummyJsonUserDataInterface } from './DummyJsonInterfaces'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { UserCardList } from './UserCardList'

export default {
	title: 'Chris/UserCardList',
} as ComponentMeta<typeof UserCardList>

const Template: ComponentStory<typeof UserCardList> = (args) => {
	const [userData, setUserData] =
		useState<DummyJsonUserDataInterface | undefined>(undefined)

	useEffect(() => {
		fetch('https://dummyjson.com/users')
			.then((res) => res.json())
			.then((resJson) => {
				console.log('resJson', resJson)
				setUserData(resJson)
			})
	}, [])
	return <UserCardList {...args} users={userData?.users} />
}

export const Default = Template.bind({})
Default.args = {}

export const SlowNetwork: ComponentStory<typeof UserCardList> = (args) => {
	const [userData, setUserData] =
		useState<DummyJsonUserDataInterface | undefined>(undefined)

	useEffect(() => {
		fetch('https://dummyjson.com/users')
			.then((res) => res.json())
			.then((resJson) => {
				console.log('resJson', resJson)
				setTimeout(() => {
					setUserData(resJson)
				}, 10000)
			})
	}, [])
	return <UserCardList {...args} users={userData?.users} />
}
