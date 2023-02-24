import { FC } from 'react'
import spinner from './../../assets/spinner.gif'
import { ISpinner } from './spinner.interface'
import style from './Spinner.module.sass'

export const Spinner: FC<ISpinner> = ({ subtitle, className }) => {
    return (
        <>
            <img
                src={spinner}
                alt="spinner"
                className={`${style.container_image} ${className}`}
            />
            {subtitle && (
                <h6 className={style.container_subtitle}>Идет загрузка...</h6>
            )}
        </>
    )
}
