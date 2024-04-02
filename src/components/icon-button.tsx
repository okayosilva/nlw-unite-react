import { ComponentProps } from 'react'
import { tv, VariantProps } from 'tailwind-variants'

const buttonIcon = tv({
  base: 'rounded-md border border-white/10 p-1.5',
  variants: {
    variant: {
      primary: 'bg-white/10',
      transparent: 'bg-black/20',
      disabled: 'opacity-50 cursor-not-allowed',
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
})

type IconButtonProps = ComponentProps<'button'> &
  VariantProps<typeof buttonIcon>

export function IconButton({ variant, ...rest }: IconButtonProps) {
  return <button {...rest} className={buttonIcon({ variant })} />
}
