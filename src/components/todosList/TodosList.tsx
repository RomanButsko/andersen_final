import { FC, useState } from 'react'
import { useChangeFavouriteMutation } from '../../store/api/api'
import { ITask } from '../../types/Tasks'
import favorite from './../../assets/favorite.svg'
import { PopUp } from '../popUp/popUp'

import style from './TodosList.module.sass'
import {EditTodo} from './editTodo/EditTodo'

export const TodosList: FC<ITask> = (props) => {
    const { id, text, isCompleted, isFavourite } = props
    const [editText, setEditText] = useState<boolean>(false)
    const [changeFavourite] = useChangeFavouriteMutation()

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
                <EditTodo id={id} text={text} setEditText={setEditText} />
            )}
            <PopUp setEditText={setEditText} {...props} />
        </div>
    )
}
