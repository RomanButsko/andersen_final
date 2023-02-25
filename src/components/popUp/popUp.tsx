import { FC } from 'react'
import { useOutside } from '../../hooks/useOutside'
import { IPopUp } from './popUp.interface'
import menu from './../../assets/menu.svg'
import style from './popUp.module.sass'
import { PopUpModal } from './modal/PopUpModal'
import { PopUpMenu } from './menu/popUpMenu'

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

    return (
        <div
            className={style.container}
            ref={containerRef}
            onClick={() => setIsShow(!isShow)}
        >
            <img src={menu} alt="menuLogo" className={style.container_logo} />
            {isShow && (
                <PopUpMenu
                    id={id}
                    isCompleted={isCompleted}
                    isFavourite={isFavourite}
                    setEditText={setEditText}
                    setIsShow={setIsShow}
                    setShowModal={setShowModal}
                />
            )}
            {showModal && (
                <PopUpModal
                    id={id}
                    text={text}
                    createdAt={createdAt}
                    refModal={refModal}
                    showModal={showModal}
                    setIsShow={setIsShow}
                    setShowModal={setShowModal}
                />
            )}
        </div>
    )
}
