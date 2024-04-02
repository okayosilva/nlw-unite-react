import { ComponentProps } from 'react'

interface TableProps extends ComponentProps<'table'> {}

export function Table({ ...rest }: TableProps) {
  return (
    <div className="rounded-lg border border-white/10">
      <table {...rest} className="w-full" />
    </div>
  )
}
