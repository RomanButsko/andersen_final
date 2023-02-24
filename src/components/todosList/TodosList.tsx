import { FC, KeyboardEvent, useState } from 'react'
import {
    useChangeFavouriteMutation,
    useChangeTaskMutation,
    useDeleteTaskMutation,
} from '../../store/api/api'
import { ITask } from '../../types/Tasks'
import favorite from './../../assets/favorite.svg'
import { PopUp } from '../popUp/popUp'

import style from './TodosList.module.sass'

export const TodosList: FC<ITask> = (props) => {
    const { id, text, isCompleted, isFavourite } = props
    const [editText, setEditText] = useState<boolean>(false)
    const [newTaskName, setNewTaskName] = useState<string>(text)
    const [changeFavourite] = useChangeFavouriteMutation()
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

    const handleFavourite = () =>
        changeFavourite({ id, isFavourite: !isFavourite })

    return (
        <div className={style.container}>
            {!editText ? (
                <div className={style.container_left}>
                    {isFavourite && (
                        <img
                            src={favorite}
                            alt="favorite"
                            onClick={handleFavourite}
                            className={style.container_favour}
                        />
                    )}
                    <span
                        className={style.container_title}
                        style={{
                            textDecoration: isCompleted
                                ? 'line-through'
                                : 'none',
                        }}
                    >
                        {text}
                    </span>
                </div>
            ) : (
                <input
                    type="text"
                    defaultValue={text}
                    autoFocus
                    onChange={handleEditInputChange}
                    onKeyDown={handleEditInputKeyDown}
                    className={style.container_edit}
                />
            )}
            <PopUp setEditText={setEditText} {...props} />
        </div>
    )
}
