import { useState } from 'react'
import { useGetTasksQuery } from '../../store/api/api'
import { FilterTodos } from '../filterTodos/FilterTodos'
import { Spinner } from '../spinner/Spinner'
import { TodosList } from '../todosList/TodosList'
import { filterTasks } from './todosFilter'
import style from './Todos.module.sass'

export const Todos = () => {
    const [type, setType] = useState<string>('all')
    const { data, isLoading } = useGetTasksQuery()
    const filteredTasks = filterTasks(data || [], type)

    return (
        <>
            {isLoading && (
                <div className={style.spinner}>
                    <Spinner subtitle={true} />
                </div>
            )}
            <FilterTodos setType={setType} type={type} />
            {!filteredTasks.length && (
                <p style={{ textAlign: 'center', fontSize: '1rem' }}>
                    Пока что задач нет
                </p>
            )}
            {filteredTasks?.map((task) => (
                <TodosList key={task.id} {...task} />
            ))}
        </>
    )
}
