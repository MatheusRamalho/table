interface BadgeProps {
    text: string
    color: 'green' | 'red'
}

export const Badge = ({ text, color }: BadgeProps) => {
    const green = 'border-green-700 bg-green-500'
    const red = 'border-red-800 bg-red-600'

    return (
        <span
            className={`py-1 px-3 rounded-md border text-white ${
                color === 'green' ? green : red
            }`}
        >
            {text}
        </span>
    )
}
