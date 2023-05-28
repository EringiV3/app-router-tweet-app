'use client'
import { Button } from '@/components/ui/Button'
import { Modal } from '@/components/ui/Modal'
import { cx } from '@/libs/utils'
import styles from './TweetModal.module.css'
import { useCallback, useTransition } from 'react'
import { createTweet } from '@/models/tweet/actions'
import { getAuthenticatedUser } from '@/libs/auth'

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

  const handleClickTweet = useCallback(async () => {
    startTransition(() => {
      onSubmit('hoge')
    })
  }, [onSubmit])

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
        <Button onClick={handleClickTweet} disabled={isPending}>
          ツイートする
        </Button>
      </div>
    </Modal>
  )
}
