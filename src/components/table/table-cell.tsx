import { ComponentProps } from 'react'

interface TableCellProps extends ComponentProps<'td'> {}

export function TableCell({ ...rest }: TableCellProps) {
  return <td {...rest} className="px-4 py-3 text-sm text-zinc-300" />
}
