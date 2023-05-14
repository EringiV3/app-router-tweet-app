'use client'

import { clsx } from 'clsx'
import styles from './Button.module.css'

type Props = React.ComponentProps<'button'> & {
  className?: string
  variant?: 'primary' | 'secondary'
}

export const Button = ({
  className,
  variant = 'primary',
  children,
  ...props
}: Props) => {
  return (
    <button
      className={clsx(styles.button, className, {
        [styles.primary]: variant === 'primary',
        [styles.secondary]: variant === 'secondary',
      })}
      {...props}
    >
      {children}
    </button>
  )
}
