import { useEffect, useState } from 'react'
import CoolButton from './stories/CoolButton'
import reactLogo from './assets/react.svg'
import './App.css'
import { ImageComparison } from './stories/ImageComparison'
import { UserCardList } from './stories/UserCardList'
import {
	DummyJsonUserDataInterface,
	DummyJsonUserInterface,
} from './stories/DummyJsonInterfaces'

function App() {
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

	return (
		<div className="App">
			{/* <CoolButton text="Click me!" />
			<ImageComparison
				imageRight="https://picsum.photos/id/242/800/400?grayscale&blur=4"
				imageLeft="https://picsum.photos/id/242/800/400"
				altRight="Blurry grayscale railroad at night"
				altLeft="Railroad at night"
				handle={false}
				line={true}
				drag={false}
				cursor="grab"
			/> */}

			{userData?.users.length && <UserCardList users={userData?.users} />}
		</div>
	)
}

export default App
