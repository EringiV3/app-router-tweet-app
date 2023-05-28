'use client'
import { Button } from '@/components/ui/Button'
import { Modal } from '@/components/ui/Modal'
import { cx } from '@/libs/utils'
import styles from './TweetModal.module.css'
import { useCallback, useTransition } from 'react'
import { createTweet } from '@/models/tweet/actions'

type Props = {
  className?: string
  isOpen: boolean
  onClose: () => void
}

export const TweetModal = ({ className, isOpen, onClose }: Props) => {
  const [isPending, startTransition] = useTransition()

  const handleClickTweet = useCallback(() => {
    startTransition(() => {
      createTweet('hoge')
    })
  }, [])

  console.log({ isPending })

  return (
    <Modal
      className={cx(styles.tweetModal, className)}
      isOpen={isOpen}
      onClose={onClose}
    >
      <div>モーダル</div>

      <div className={styles.buttons}>
        <Button variant="secondary" onClick={onClose}>
          キャンセル
        </Button>
        <Button onClick={handleClickTweet}>ツイートする</Button>
      </div>
    </Modal>
  )
}
