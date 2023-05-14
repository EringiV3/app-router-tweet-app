import { clsx } from 'clsx'
import styles from './Button.module.css'

type Props = React.ComponentProps<'button'> & {
  variant?: 'primary' | 'secondary'
}

export const Button = ({ variant = 'primary', ...props }: Props) => {
  return (
    <button
      className={clsx(styles.button, {
        [styles.primary]: variant === 'primary',
        [styles.secondary]: variant === 'secondary',
      })}
      {...props}
    >
      {props.children}
    </button>
  )
}
