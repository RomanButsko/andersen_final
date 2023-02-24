import { FC } from 'react'
import { Spinner } from '../spinner/Spinner'
import { IPopUpItem } from './popUp.interface'
import style from './popUp.module.sass'

export const PopUpItem: FC<IPopUpItem> = ({ text, isLoading, onClick }) => {
    return (
        <li onClick={onClick}>
            {text}
            {isLoading && (
                <Spinner
                    subtitle={false}
                    className={style.container_lists__spinner}
                />
            )}
        </li>
    )
}
