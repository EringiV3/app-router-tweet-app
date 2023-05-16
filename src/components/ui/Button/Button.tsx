'use client'

import styles from './Button.module.css'
import { cx } from '@/libs/utils'

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
      className={cx(styles.button, className, {
        [styles.primary]: variant === 'primary',
        [styles.secondary]: variant === 'secondary',
      })}
      {...props}
    >
      {children}
    </button>
  )
}
