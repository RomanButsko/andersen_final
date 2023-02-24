import { MouseEvent } from 'react'

export const getFormattedDate = (date: Date): string => {
    const oldDate = new Date(date)
    const UTC3 = 3
    const newDate = new Date(oldDate.getTime() + UTC3 * 60 * 60 * 1000)
    return `${newDate
        .toISOString()
        .slice(0, 10)
        .split('-')
        .reverse()
        .join('/')} ${newDate.toISOString().slice(10, 16)}`.replace('T', ' ')
}

export const handleListClick = (event: MouseEvent<HTMLUListElement>) => {
    event.stopPropagation()
}

export const handleModal = (
    setIsShow: (value: boolean) => void,
    setShowModal: (value: boolean) => void
) => {
    setIsShow(false)
    setShowModal(true)
}

export const handleCloseModal = (
    setIsShow: (value: boolean) => void,
    setShowModal: (value: boolean) => void
) => {
    setIsShow(false)
    setShowModal(false)
}

export const handleEdit = (
    setIsShow: (value: boolean) => void,
    setEditText: (value: boolean) => void
) => {
    setIsShow(false)
    setEditText(true)
}
