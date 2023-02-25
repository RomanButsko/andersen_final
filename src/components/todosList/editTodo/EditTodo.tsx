import { FC, KeyboardEvent, useState } from 'react'
import {
    useChangeTaskMutation,
    useDeleteTaskMutation,
} from '../../../store/api/api'
import style from './../TodosList.module.sass'

type IEditTodo = {
    id: number
    text: string
    setEditText: (value: boolean) => void
}

export const EditTodo: FC<IEditTodo> = ({ id, text, setEditText }) => {
    const [newTaskName, setNewTaskName] = useState<string>(text)
    const [changeText] = useChangeTaskMutation()
    const [removeTask] = useDeleteTaskMutation()

    const handleEditInputChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setNewTaskName(event.target.value)
    }

    const handleEditInputKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            if (newTaskName.trim()) {
                changeText({ id, text: newTaskName })
            } else {
                removeTask(id)
            }
            setEditText(false)
        }
    }

    return (
        <input
            type="text"
            defaultValue={text}
            autoFocus
            onChange={handleEditInputChange}
            onKeyDown={handleEditInputKeyDown}
            className={style.container_edit}
        />
    )
}