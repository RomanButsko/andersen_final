export interface ITask {
    id: number
    text: string
    isFavourite: boolean
    isCompleted: boolean
    createdAt: Date
}

export type IChangeTask = Pick<ITask, 'id' | 'text'>

export type IChangeFavourite = Pick<ITask, 'id' | 'isFavourite'>

export type IChangeCompleted = Pick<ITask, 'id' | 'isCompleted'>
