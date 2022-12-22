import React from 'react'
import './CoolButton.scss'

interface CoolButtonProps {
	/**
	 * Here's something
	 */
	size?: 'huge' | 'normal' | 'small' | 'tiny'
	/**
	 * What should it say though?
	 */
	text?: string
}

function CoolButton({
	text = "Why didn't you change this?",
	size = 'normal',
	...props
}: CoolButtonProps) {
	return <button>{text}</button>
}

export default CoolButton
