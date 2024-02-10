import { ReactNode } from 'react'

interface TableTdProps {
    children: ReactNode
}

export const TableTd = ({ children }: TableTdProps) => {
    return (
        <td className="p-4 border-t-4 border-gray-800 text-md leading-relaxed first:w-1/2 pl-6 last:pr-6 text-gray-400">
            {' '}
            {children}{' '}
        </td>
    )
}
