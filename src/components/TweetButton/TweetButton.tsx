'use client'

import { Button } from '@/components/Button'
import styles from './TweetButton.module.css'
import { clsx } from 'clsx'

type Props = {
  className?: string
}

export const TweetButton = ({ className }: Props) => {
  return (
    <div className={clsx(styles.tweetButton, className)}>
      <Button>ツイートする</Button>
    </div>
  )
}
