import { Button, ButtonProps } from '@burndev-ui/react'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Form/Button',
  component: Button,
} as Meta

export const Primary: StoryObj<ButtonProps> = {
  args: {
    children: 'Primary',
  },
}

export const Secondary: StoryObj<ButtonProps> = {
  args: {
    children: 'Secondary',
    size: 'big',
  },
}
