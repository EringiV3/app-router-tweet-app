'use client'
import { Button } from '@/components/ui/Button'
import { Modal } from '@/components/ui/Modal'
import { cx } from '@/libs/utils'
import styles from './TweetModal.module.css'
import { useCallback, useState, useTransition } from 'react'
import { createTweet } from '@/models/tweet/actions'

type Props = {
  className?: string
  isOpen: boolean
  onClose: () => void
  onSubmit: typeof createTweet
}

/**
 * @note
 * Client Componentから内部で認証処理を行うServer Actionsを呼び出すには、ヘッダーにアクセスできる必要がある。
 * そのため、Server ComponentでServer Actionsをimportして対象のClient Componentまでprop drillingで渡す。
 *
 * @see https://clerk.com/docs/nextjs/server-actions#with-client-components
 */
export const TweetModal = ({ className, isOpen, onClose, onSubmit }: Props) => {
  const [isPending, startTransition] = useTransition()

  const [text, setText] = useState<string>('')

  const handleClose = useCallback(() => {
    setText('')
    onClose()
  }, [onClose])

  const handleChangeText = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setText(e.target.value)
    },
    []
  )

  const handleClickTweet = useCallback(async () => {
    startTransition(async () => {
      await onSubmit(text)
      handleClose()
    })
  }, [handleClose, onSubmit, text])

  return (
    <Modal
      className={cx(styles.tweetModal, className)}
      isOpen={isOpen}
      onClose={handleClose}
    >
      <div>
        <textarea
          className={styles.textarea}
          placeholder="いまどうしてる？"
          rows={10}
          autoFocus
          value={text}
          onChange={handleChangeText}
        />
      </div>

      <div className={styles.buttons}>
        <Button variant="secondary" onClick={handleClose}>
          キャンセル
        </Button>
        <Button onClick={handleClickTweet} disabled={isPending}>
          ツイートする
        </Button>
      </div>
    </Modal>
  )
}
