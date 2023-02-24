import spinner from './../../assets/spinner.gif'
import style from './Spinner.module.sass'

export const Spinner = () => {
    return (
        <div className={style.container}>
            <img
                src={spinner}
                alt="spinner"
                className={style.container_image}
            />
            <h6 className={style.container_subtitle}>Идет загрузка...</h6>
        </div>
    )
}
