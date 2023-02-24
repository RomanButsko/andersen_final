import { Button } from '../../ui/button/Button'
import { filters } from './filterItems'
import style from './Filter.module.sass'
import { FC } from 'react'

type IFilter = {
    setType: (value: string) => void
    type: string
}

export const FilterTodos: FC<IFilter> = ({ setType, type }) => {
    const handleButtonClick = (status: string) =>
        type === status ? setType('all') : setType(status)

    return (
        <div className={style.container}>
            {filters.map((filter) => (
                <Button
                    key={filter.id}
                    onClick={() => handleButtonClick(filter.status)}
                    className={`${style.container_btn} ${
                        type === filter.status && style.container_btn__active
                    }`}
                >
                    {filter.name}
                </Button>
            ))}
        </div>
    )
}
