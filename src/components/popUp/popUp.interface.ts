export interface IPopUp {
    id: number
    isCompleted: boolean
    isFavourite: boolean
    text: string
    createdAt: Date
    setEditText: (value: boolean) => void
}
