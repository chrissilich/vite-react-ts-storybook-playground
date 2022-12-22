import React from 'react'
import styles from './ImageComparison.module.scss'

interface ImageComparisonProps {
	/* The URL of the image you want shown on the left */
	imageLeft: string

	// The URL of the image you want shown on the right
	imageRight: string

	// The alt text for the left image
	altLeft: string

	// The alt text for the right image
	altRight: string

	// What should the css mouse pointer value be?
	cursor?: string

	// Whether the handle should show
	handle?: boolean

	// Whether the line should show
	line?: boolean

	// Require drag
	drag?: boolean

	// Amount of sloppiness in the animation. Uses CSS transition-duration. 0 is no sloppiness, 1 is a lot of sloppiness.
	sloppy?: number
}

export const ImageComparison = ({
	imageRight,
	imageLeft,
	altLeft,
	altRight,
	cursor = 'ew-resize',
	line = true,
	handle = true,
	drag = true,
	...props
}: ImageComparisonProps) => {
	let [xPercent, setXPercent] = React.useState(50)

	const handleDrag = (e: React.MouseEvent) => {
		e.stopPropagation()
		e.preventDefault()
		if (drag && e.buttons === 0) return
		let distanceX: number =
			((e.clientX - e.currentTarget.getBoundingClientRect().left) /
				e.currentTarget.getBoundingClientRect().width) *
			100
		if (distanceX > 100) distanceX = 100
		if (distanceX < 0) distanceX = 0
		// console.log('distance as percent', distanceX)
		setXPercent(distanceX)
	}

	return (
		<div onMouseMove={handleDrag} className={styles.imageComparison}>
			<img src={imageRight} title={altRight} alt={altRight} />
			<figure style={{ width: `${xPercent}%` }}>
				<img src={imageLeft} title={altLeft} alt={altLeft} />
			</figure>
			<div style={{ left: `${xPercent}%`, cursor }}>
				<div className={handle ? '' : styles.hide}>↔</div>
				<div className={line ? '' : styles.hide}></div>
			</div>
		</div>
	)
}
