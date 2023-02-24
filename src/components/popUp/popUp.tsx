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
import { handleEdit, handleListClick, handleModal } from './popUp.utils'
import { ModalBtns } from './ModalBtns'
import { PopUpItem } from './popUpItem'

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
                    <PopUpItem
                        onClick={handleCompleted}
                        text={isCompleted ? 'Вернуть в работу' : 'Выполнено'}
                        isLoading={isLoadingCompleted}
                    />
                    <PopUpItem
                        onClick={handleFavourite}
                        text={
                            isFavourite ? 'Убрать из избранного' : 'В избранное'
                        }
                        isLoading={isLoadingFavour}
                    />
                    <li onClick={() => handleEdit(setIsShow, setEditText)}>
                        Редактировать
                    </li>
                    <li onClick={() => handleModal(setIsShow, setShowModal)}>
                        Удалить
                    </li>
                </ul>
            )}
            {showModal && (
                <Modal
                    show={showModal}
                    onClose={setShowModal}
                    ref={refModal}
                    title={'Удалить'}
                >
                    <ModalBtns
                        text={text}
                        createdAt={createdAt}
                        setIsShow={setIsShow}
                        setShowModal={setShowModal}
                        handleRemove={handleRemove}
                    />
                </Modal>
            )}
        </div>
    )
}
