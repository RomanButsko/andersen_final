import { PopUpItem } from './popUpItem'
import style from './../popUp.module.sass'
import { handleEdit, handleListClick, handleModal } from '../popUp.utils'
import { FC } from 'react'
import { IPopUpMenu } from '../popUp.interface'
import {
    useChangeCompletedMutation,
    useChangeFavouriteMutation,
} from '../../../store/api/api'

export const PopUpMenu: FC<IPopUpMenu> = ({
    setEditText,
    setIsShow,
    setShowModal,
    isFavourite,
    isCompleted,
    id,
}) => {
    const [changeFavourite, { isLoading: isLoadingFavour }] =
        useChangeFavouriteMutation()
    const [changeCompleted, { isLoading: isLoadingCompleted }] =
        useChangeCompletedMutation()

    const handleFavourite = () => {
        setIsShow(false)
        changeFavourite({ id, isFavourite: !isFavourite })
    }

    const handleCompleted = () => {
        setIsShow(false)
        changeCompleted({ id, isCompleted: !isCompleted })
    }
    return (
        <ul
            className={style.container_lists}
            onClick={(event) => handleListClick(event)}
        >
            <PopUpItem
                onClick={handleCompleted}
                text={isCompleted ? 'Вернуть в работу' : 'Выполнено'}
                isLoading={isLoadingCompleted}
            />
            <PopUpItem
                onClick={handleFavourite}
                text={isFavourite ? 'Убрать из избранного' : 'В избранное'}
                isLoading={isLoadingFavour}
            />
            <li onClick={() => handleEdit(setIsShow, setEditText)}>
                Редактировать
            </li>
            <li onClick={() => handleModal(setIsShow, setShowModal)}>
                Удалить
            </li>
        </ul>
    )
}
