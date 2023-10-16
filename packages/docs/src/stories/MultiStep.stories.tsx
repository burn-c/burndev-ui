import { Box, MultiStep, MultiStepProps } from '@burndev-ui/react'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Form/MultiStep',
  component: MultiStep,
  args: {
    currentStep: 1,
    size: 4,
  },
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{
            display: 'flex',
            flexDirection: 'column',
            gap: '$2',
          }}
        >
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<MultiStepProps>

export const Primary: StoryObj<MultiStepProps> = {}

export const FullSteps: StoryObj<MultiStepProps> = {
  args: {
    currentStep: 4,
  },
}
