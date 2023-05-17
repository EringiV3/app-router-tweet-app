import { cx } from '@/libs/utils'
import styles from './NotFound.module.css'

type Props = {
  message?: string
  className?: string
}

export const NotFound = ({ message, className }: Props) => {
  return (
    <div className={cx(styles.notFound, className)}>
      <h2>{message ? message : 'お探しのコンテンツは存在しません。'}</h2>
    </div>
  )
}
