import { ReactNode } from 'react'

interface TableRootProps {
    children: ReactNode
}

export const TableRoot = ({ children }: TableRootProps) => {
    return (
        <div className="flex-1 overflow-auto mt-8">
            <table className="w-full min-w-[600px] border-collapse">
                {' '}
                {children}{' '}
            </table>
        </div>
    )
}
