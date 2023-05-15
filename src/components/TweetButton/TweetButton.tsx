'use client'

import { Button } from '@/components/Button'
import styles from './TweetButton.module.css'
import { cx } from '@/lib/utils'

type Props = {
  className?: string
}

export const TweetButton = ({ className }: Props) => {
  return (
    <div className={cx(styles.tweetButton, className)}>
      <Button>ツイートする</Button>
    </div>
  )
}
