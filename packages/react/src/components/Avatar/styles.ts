import * as ReactAvatar from '@radix-ui/react-avatar'

import { styled } from '../../styles'

export const AvatarContainer = styled(ReactAvatar.Root, {
  borderRadius: '$full',
  display: 'inline-block',
  width: '$12',
  height: '$12',
  overflow: 'hidden',
})

export const AvatarImage = styled(ReactAvatar.Image, {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: 'inherit',
})

export const AvatarFallback = styled(ReactAvatar.Fallback, {
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '$gray600',
  color: '$gray800',

  svg: {
    width: '$6',
    height: '$6',
  },
})
