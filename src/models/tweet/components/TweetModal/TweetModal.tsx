'use client'
import { Button } from '@/components/ui/Button'
import { Modal } from '@/components/ui/Modal'
import { cx } from '@/libs/utils'
import styles from './TweetModal.module.css'

type Props = {
  className?: string
  isOpen: boolean
  onClose: () => void
}

export const TweetModal = ({ className, isOpen, onClose }: Props) => {
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
        <Button>ツイートする</Button>
      </div>
    </Modal>
  )
}
