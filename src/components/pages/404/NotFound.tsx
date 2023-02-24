import style from './../404/NotFound.module.sass'

export const NotFound = () => {
    return (
        <div className={style.container}>
            <h1>404</h1>
            <span>Page not found</span>
        </div>
    )
}
