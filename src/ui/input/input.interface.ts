import { InputHTMLAttributes } from 'react'

export interface IFieldError {
    error?: string | null
}

type TypeInputPropsField = InputHTMLAttributes<HTMLInputElement> & IFieldError

export interface IField extends TypeInputPropsField {}
