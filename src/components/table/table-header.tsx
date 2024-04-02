import { ComponentProps } from 'react'

interface TableHeaderProps extends ComponentProps<'th'> {}

export function TableHeader({ ...rest }: TableHeaderProps) {
  return <th {...rest} className="px-4 py-3 text-left text-sm font-semibold" />
}
