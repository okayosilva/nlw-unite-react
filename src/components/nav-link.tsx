import { ComponentProps, ReactNode } from 'react'
import { tv } from 'tailwind-variants'

interface NavLinkProps extends ComponentProps<'a'> {
  children: ReactNode
  isActive?: boolean
}

const textNav = tv({
  base: 'text-sm font-medium text-zinc-300',
  variants: {
    enable: {
      true: 'text-white',
    },
  },
})

export function NavLink({ children, isActive = false, ...rest }: NavLinkProps) {
  return (
    <a {...rest} className={textNav({ enable: isActive })}>
      {children}
    </a>
  )
}
