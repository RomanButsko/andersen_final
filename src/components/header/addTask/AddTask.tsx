import { ChangeEvent, useRef, useState } from 'react'
import { Button } from '../../../ui/button/Button'
import { Field } from '../../../ui/input/Input'
import { useAddTaskMutation } from './../../../store/api/api'
import { createBaseTask, maxSymbols } from './addTask.helper'
import style from './Search.module.sass'

export const AddTask = () => {
    const [error, setError] = useState<string>('')
    const ref = useRef<HTMLInputElement>(null)
    const [addTask] = useAddTaskMutation()

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { length } = event.target.value
        length > maxSymbols
            ? setError(`Превышен лимит символов на ${length - maxSymbols}`)
            : setError('')
    }

    const handleAddTask = () => {
        if (ref.current?.value) {
            addTask(createBaseTask(ref.current.value))
            ref.current.value = ''
        }
    }

    return (
        <>
            <Field
                placeholder="Название новой задачи"
                onChange={handleInputChange}
                ref={ref}
                error={error}
                className={style.field}
            />
            <Button
                onClick={handleAddTask}
                className={style.btn}
                disabled={!!error}
            >
                Добавить
            </Button>
        </>
    )
}
