import Image from 'next/image'
import styles from './Avatar.module.css'
import clsx from 'clsx'

type Props = {
  className?: string
  imageUrl: string
  alt: string
  size?: number
}

export const Avatar = ({ className, imageUrl, alt, size = 50 }: Props) => {
  return (
    <div className={clsx(styles.avatar, className)}>
      <Image
        className={styles.image}
        src={imageUrl}
        alt={alt}
        width={size}
        height={size}
      />
    </div>
  )
}
