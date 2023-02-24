import { AddTask } from './addTask/AddTask'
import logo from './../../assets/logo.jpeg'
import style from './Header.module.sass'

export const Header = () => {
    return (
        <div className={style.container}>
            <a href="/">
                <img src={logo} alt="logo" className={style.container_logo} />
            </a>
            <div className={style.container_search}>
                <AddTask />
            </div>
        </div>
    )
}
