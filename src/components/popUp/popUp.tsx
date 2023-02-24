import { FC, useRef } from 'react'
import { useOutside } from '../../hooks/useOutside'
import { IPopUp } from './popUp.interface'
import menu from './../../assets/menu.svg'
import style from './popUp.module.sass'
import {
    useChangeCompletedMutation,
    useChangeFavouriteMutation,
    useDeleteTaskMutation,
} from '../../store/api/api'
import { Modal } from '../../ui/modal/Modal'
import { Button } from '../../ui/button/Button'
import spinner from './../../assets/menu_spinner.gif'
import { getFormattedDate, handleCloseModal, handleEdit, handleListClick, handleModal } from './popUp.utils'

export const PopUp: FC<IPopUp> = ({
    id,
    isCompleted,
    isFavourite,
    setEditText,
    createdAt,
    text,
}) => {
    const { ref: containerRef, isShow, setIsShow } = useOutside(false)
    const {
        ref: refModal,
        isShow: showModal,
        setIsShow: setShowModal,
    } = useOutside(false)

    const listRef = useRef<HTMLUListElement>(null)

    const [removeTask] = useDeleteTaskMutation()
    const [changeFavourite, { isLoading: isLoadingFavour }] =
        useChangeFavouriteMutation()
    const [changeCompleted, { isLoading: isLoadingCompleted }] =
        useChangeCompletedMutation()

    const handleRemove = () => removeTask(id)

    const handleFavourite = () => {
        setIsShow(false)
        changeFavourite({ id, isFavourite: !isFavourite })
    }

    const handleCompleted = () => {
        setIsShow(false)
        changeCompleted({ id, isCompleted: !isCompleted })
    }

    return (
        <div
            className={style.container}
            ref={containerRef}
            onClick={() => setIsShow(!isShow)}
        >
            <img src={menu} alt="menuLogo" className={style.container_logo} />
            {isShow && (
                <ul
                    className={style.container_lists}
                    ref={listRef}
                    onClick={(event) => handleListClick(event)}
                >
                    <li onClick={handleCompleted}>
                        {isCompleted ? 'Вернуть в работу' : 'Выполнено'}
                        {isLoadingCompleted && (
                            <img
                                src={spinner}
                                className={style.container_lists__spinner}
                                alt="spinner"
                            />
                        )}
                    </li>
                    <li onClick={handleFavourite}>
                        {isFavourite ? 'Убрать из избранного' : 'В избранное'}
                        {isLoadingFavour && (
                            <img
                                src={spinner}
                                className={style.container_lists__spinner}
                                alt="spinner"
                            />
                        )}
                    </li>
                    <li onClick={() => handleEdit(setIsShow, setEditText)}>Редактировать</li>
                    <li onClick={(() => handleModal(setIsShow, setShowModal))}>Удалить</li>
                </ul>
            )}
            {showModal && (
                <Modal
                    show={showModal}
                    onClose={setShowModal}
                    ref={refModal}
                    title={'Удалить'}
                >
                    <div className={style.container_modalInfo}>
                        <span className={style.container_subtitle}>{text}</span>
                        <span>{getFormattedDate(createdAt)}</span>
                    </div>
                    <div className={style.container_btn}>
                        <Button
                            className={style.container_btn__close}
                            onClick={() => handleCloseModal(setIsShow, setShowModal)}
                        >
                            Отменить
                        </Button>
                        <Button
                            className={style.container_btn__submit}
                            onClick={handleRemove}
                        >
                            Да, удалить                    
                        </Button>
                    </div>
                </Modal>
            )}
        </div>
    )
}
