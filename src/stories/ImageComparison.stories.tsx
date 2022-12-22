import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ImageComparison } from './ImageComparison'

export default {
	title: 'Chris/ImageComparison',
	component: ImageComparison,
} as ComponentMeta<typeof ImageComparison>

export const Default = () => (
	<ImageComparison
		imageRight="https://picsum.photos/id/242/800/400?grayscale&blur=4"
		imageLeft="https://picsum.photos/id/242/800/400"
		altRight="Blurry grayscale railroad at night"
		altLeft="Railroad at night"
	/>
)

export const Huge = () => (
	<ImageComparison
		imageRight="https://picsum.photos/id/242/2000/1500?grayscale&blur=4"
		imageLeft="https://picsum.photos/id/242/2000/1500"
		altRight="Blurry grayscale railroad at night"
		altLeft="Railroad at night"
	/>
)

export const MismatchedSize = () => (
	<ImageComparison
		imageRight="https://picsum.photos/id/242/800/400?grayscale&blur=4"
		imageLeft="https://picsum.photos/id/242/800/200"
		altRight="Blurry grayscale railroad at night"
		altLeft="Railroad at night"
	/>
)

export const NoDrag = () => (
	<ImageComparison
		imageRight="https://picsum.photos/id/242/800/400?grayscale&blur=4"
		imageLeft="https://picsum.photos/id/242/800/400"
		altRight="Blurry grayscale railroad at night"
		altLeft="Railroad at night"
		drag={false}
	/>
)

export const NoHandleNoDrag = () => (
	<ImageComparison
		imageRight="https://picsum.photos/id/242/800/400?grayscale&blur=4"
		imageLeft="https://picsum.photos/id/242/800/400"
		altRight="Blurry grayscale railroad at night"
		altLeft="Railroad at night"
		drag={false}
		handle={false}
	/>
)
export const NoHandle = () => (
	<ImageComparison
		imageRight="https://picsum.photos/id/242/800/400?grayscale&blur=4"
		imageLeft="https://picsum.photos/id/242/800/400"
		altRight="Blurry grayscale railroad at night"
		altLeft="Railroad at night"
		handle={false}
	/>
)

export const NoLine = () => (
	<ImageComparison
		imageRight="https://picsum.photos/id/242/800/400?grayscale&blur=4"
		imageLeft="https://picsum.photos/id/242/800/400"
		altRight="Blurry grayscale railroad at night"
		altLeft="Railroad at night"
		line={false}
	/>
)

export const NoLineOrHandle = () => (
	<ImageComparison
		imageRight="https://picsum.photos/id/242/800/400?grayscale&blur=4"
		imageLeft="https://picsum.photos/id/242/800/400"
		altRight="Blurry grayscale railroad at night"
		altLeft="Railroad at night"
		handle={false}
		line={false}
	/>
)
