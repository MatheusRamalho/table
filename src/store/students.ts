import { Student } from '@/types/Student'

import avatarImg from '@/assets/avatar.png'

export const students: Student[] = [
    {
        id: 1,
        active: true,
        name: 'Fulano de Tal',
        email: 'fulano@escola.com.br',
        avatar: avatarImg,
        grade1: 7.3,
        grade2: 8.1,
    },
    {
        id: 2,
        active: true,
        name: 'Ciclano Silva',
        email: 'ciclano.silva@escola.com.br',
        avatar: avatarImg,
        grade1: 2.9,
        grade2: 8.7,
    },
    {
        id: 3,
        active: false,
        name: 'Beltrano Matheus',
        email: 'beltrano.matheus@escola.com.br',
        avatar: avatarImg,
        grade1: 8.3,
        grade2: 6.4,
    },
    {
        id: 4,
        active: true,
        name: 'Zuflano Caxias',
        email: 'zuflano.caxias@escola.com.br',
        avatar: avatarImg,
        grade1: 9,
        grade2: 8.1,
    },
    {
        id: 5,
        active: true,
        name: 'Turano Pires',
        email: 'turano.pires@escola.com.br',
        avatar: avatarImg,
        grade1: 10,
        grade2: 9.7,
    },
    {
        id: 6,
        active: false,
        name: 'Voltano Augusto',
        email: 'voltano.augusto@escola.com.br',
        avatar: avatarImg,
        grade1: 5.5,
        grade2: 6.2,
    },
]
