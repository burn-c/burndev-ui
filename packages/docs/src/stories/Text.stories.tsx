import { Text, TextProps } from '@burndev-ui/react'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam corrupti quod, explicabo dolores nostrum porro assumenda deleniti id impedit ipsum error vel qui velit nesciunt eveniet obcaecati hic dolore sapiente!',
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text.',
    as: 'strong',
  },
}
