import { StaticImageData } from 'next/image'

export interface Student {
    id: number
    active: boolean
    name: string
    email: string
    avatar: StaticImageData | string
    grade1: number
    grade2: number
}
