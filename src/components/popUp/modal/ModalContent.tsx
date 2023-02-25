import { FC } from 'react'
import { IModalPopUp } from '../popUp.interface'
import { getFormattedDate, handleCloseModal } from './../popUp.utils'
import style from './../popUp.module.sass'
import { Button } from '../../../ui/button/Button'
import { useDeleteTaskMutation } from '../../../store/api/api'

export const ModalContent: FC<IModalPopUp> = ({
    id,
    text,
    createdAt,
    setIsShow,
    setShowModal,
}) => {
    const [removeTask] = useDeleteTaskMutation()
    const handleRemove = () => removeTask(id)
    return (
        <>
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
        </>
    )
}
