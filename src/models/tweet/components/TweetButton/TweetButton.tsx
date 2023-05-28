'use client'

import { Button } from '@/components/ui/Button'
import styles from './TweetButton.module.css'
import { cx } from '@/libs/utils'
import { useCallback, useState } from 'react'
import { TweetModal } from '@/models/tweet/components/TweetModal'
import { createTweet } from '@/models/tweet/actions'

type Props = {
  className?: string
  onSubmit: typeof createTweet
}

export const TweetButton = ({ className, onSubmit }: Props) => {
  const [isOpenModal, setIsOpenModal] = useState(false)

  const handleClose = useCallback(() => {
    setIsOpenModal(false)
  }, [])

  const handleClick = useCallback(() => {
    setIsOpenModal(true)
  }, [])

  return (
    <>
      <Button
        className={cx(styles.tweetButton, className)}
        onClick={handleClick}
      >
        ツイートする
      </Button>
      <TweetModal
        isOpen={isOpenModal}
        onClose={handleClose}
        onSubmit={onSubmit}
      />
    </>
  )
}
