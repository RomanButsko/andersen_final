import { ITask } from '../../types/Tasks'

export const filterTasks = (tasks: ITask[], type: string): ITask[] => {
    switch (type) {
        case 'isCompleted':
            return tasks.filter((task) => task.isCompleted)
        case 'active':
            return tasks.filter((task) => !task.isCompleted)
        case 'isFavourite':
            return tasks.filter((task) => task.isFavourite && !task.isCompleted)
        default:
            return tasks
    }
}
