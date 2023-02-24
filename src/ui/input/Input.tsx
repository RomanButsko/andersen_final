import { forwardRef } from 'react'
import { IField } from './input.interface'
import styles from './Input.module.sass'

export const Field = forwardRef<HTMLInputElement, IField>(
    ({ error, type = 'text', placeholder, className, ...rest }, ref) => {
        return (
            <div className={styles.container}>
                <input
                    ref={ref}
                    type={type}
                    placeholder={placeholder}
                    {...rest}
                    className={`${styles.container_input} ${className}`}
                />
                {error && <span className={styles.required}>{error}</span>}
            </div>
        )
    }
)
