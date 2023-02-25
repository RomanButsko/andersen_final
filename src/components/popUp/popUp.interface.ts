export interface IPopUp {
    id: number
    isCompleted: boolean
    isFavourite: boolean
    text: string
    createdAt: Date
    setEditText: (value: boolean) => void
}

export interface IPopUpItem {
    text: string
    isLoading: boolean
    onClick: () => void
}

export interface IModalPopUp {
    id: number
    text: string
    createdAt: Date
    refModal: any
    showModal: boolean
    setIsShow(value: boolean): void
    setShowModal(value: boolean): void
}

export interface IPopUpMenu {
    id: number
    isCompleted: boolean
    isFavourite: boolean
    setIsShow: (value: boolean) => void
    setShowModal: (value: boolean) => void
    setEditText: (value: boolean) => void
}
