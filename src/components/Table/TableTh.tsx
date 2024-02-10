interface TableThProps {
    name: string
}

export const TableTh = ({ name }: TableThProps) => {
    return (
        <th className="p-4 text-left text-md first:pl-6 first:rounded-tl-lg last:pr-6 last:rounded-tr-lg text-white">
            {' '}
            {name}{' '}
        </th>
    )
}
