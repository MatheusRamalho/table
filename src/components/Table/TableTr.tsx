import { ReactNode } from 'react'

interface TableTrProps {
    children: ReactNode
}

export const TableTr = ({ children }: TableTrProps) => {
    return (
        <tr className="hover:cursor-pointer hover:bg-gray-800"> {children} </tr>
    )
}
