'use client'

import styles from './Button.module.css'
import Link from 'next/link'
import { cx } from '@/libs/utils'

type Props = Omit<React.ComponentProps<'a'>, 'href' | 'ref'> & {
  className?: string
  variant?: 'primary' | 'secondary' | 'transparent'
  href: string
}

export const LinkButton = ({
  className,
  variant = 'primary',
  href,
  children,
  ...props
}: Props) => {
  return (
    <Link
      href={href}
      className={cx(styles.button, styles.linkButton, className, {
        [styles.primary]: variant === 'primary',
        [styles.secondary]: variant === 'secondary',
        [styles.transparent]: variant === 'transparent',
      })}
      {...props}
    >
      {children}
    </Link>
  )
}
