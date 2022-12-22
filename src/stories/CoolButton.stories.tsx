import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import CoolButton from './CoolButton'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'Chris/Cool Button',
	component: CoolButton,
	// argTypes: {
	//   backgroundColor: { control: 'color' },
	// },
} as ComponentMeta<typeof CoolButton>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CoolButton> = (args) => <CoolButton {...args} />

export const Primary = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
	text: 'Button',
}

export const Long = Template.bind({})
Long.args = {
	text: 'Button Text is Really Long for some reason',
}

export const Small = Template.bind({})
Small.args = {
	text: 'Click me',
	size: 'small',
}
export const tiny = Template.bind({})
tiny.args = {
	text: 'Click me',
	size: 'tiny',
}
