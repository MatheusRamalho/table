import Image from 'next/image'

import { students } from '@/store/students'

import { Badge } from '@/components/Badge'
import { Table } from '@/components/Table'

export default function Home() {
    return (
        <div className="flex container mx-auto">
            <Table.Root>
                <Table.Head>
                    <Table.Tr>
                        <Table.Th name="Estudante" />
                        <Table.Th name="Status" />
                        <Table.Th name="Grade 1" />
                        <Table.Th name="Grade 2" />
                        <Table.Th name="Final grade" />
                    </Table.Tr>
                </Table.Head>

                <Table.Body>
                    {students.map((student) => {
                        return (
                            <Table.Tr key={student.id}>
                                <Table.Td>
                                    <div className="flex items-center gap-4">
                                        <Image
                                            width={50}
                                            height={50}
                                            className="rounded-full"
                                            src={student.avatar}
                                            alt=""
                                        />

                                        <div className="flex flex-col">
                                            <span className="text-gray-100">
                                                {' '}
                                                <strong>
                                                    {' '}
                                                    {student.name}{' '}
                                                </strong>{' '}
                                            </span>
                                            <span className="text-gray-400">
                                                {' '}
                                                {student.email}{' '}
                                            </span>
                                        </div>
                                    </div>
                                </Table.Td>

                                <Table.Td>
                                    {student.active && (
                                        <Badge color="green" text="Active" />
                                    )}
                                    {!student.active && (
                                        <Badge color="red" text="Inactive" />
                                    )}
                                </Table.Td>

                                <Table.Td>
                                    {' '}
                                    {student.grade1.toFixed(1)}{' '}
                                </Table.Td>
                                <Table.Td>
                                    {' '}
                                    {student.grade2.toFixed(1)}{' '}
                                </Table.Td>

                                <Table.Td>
                                    {' '}
                                    {student.active
                                        ? (
                                              (student.grade1 +
                                                  student.grade2) /
                                              2
                                          ).toFixed(1)
                                        : '--'}{' '}
                                </Table.Td>
                            </Table.Tr>
                        )
                    })}
                </Table.Body>
            </Table.Root>
        </div>
    )
}
