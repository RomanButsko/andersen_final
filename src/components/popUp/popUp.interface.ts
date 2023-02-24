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

export interface IModal {
    text: string
    createdAt: Date
    setIsShow(value: boolean): void
    setShowModal(value: boolean): void
    handleRemove: VoidFunction
}
