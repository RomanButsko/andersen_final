import { FC } from 'react'
import { Button } from '../../ui/button/Button'
import { IModal } from './popUp.interface'
import style from './popUp.module.sass'
import { getFormattedDate, handleCloseModal } from './popUp.utils'

export const ModalBtns: FC<IModal> = ({
    text,
    createdAt,
    setIsShow,
    setShowModal,
    handleRemove,
}) => {
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
