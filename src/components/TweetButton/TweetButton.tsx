'use client'
import { Button } from '@/components/Button'
import styles from './TweetButton.module.css'

export const TweetButton = () => {
  return (
    <div className={styles.tweetButton}>
      <Button>ツイートする</Button>
    </div>
  )
}
