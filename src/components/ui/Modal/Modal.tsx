'use client'

import React, { useCallback, useEffect, useRef } from 'react'
import styles from './Modal.module.css'
import { cx } from '@/libs/utils'

type Props = {
  className?: string
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
}

export const Modal = ({ className, isOpen, onClose, children }: Props) => {
  const ref = useRef<HTMLDialogElement>(null)

  const open = useCallback(() => {
    if (ref.current && !ref.current.open) {
      ref.current.showModal()
    }
  }, [])

  const close = useCallback(() => {
    if (ref.current && ref.current.open) {
      ref.current.close()
    }
  }, [])

  const handleClickBackdrop = useCallback(
    (e: React.MouseEvent<HTMLDialogElement>) => {
      if (e.target === e.currentTarget) {
        onClose()
      }
    },
    [onClose]
  )

  useEffect(() => {
    if (isOpen) {
      open()
    } else {
      close()
    }
  }, [close, isOpen, open])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [onClose])

  if (!isOpen) {
    return null
  }

  return (
    <dialog
      className={cx(styles.modal, className)}
      ref={ref}
      open={isOpen}
      onClose={onClose}
      onClick={handleClickBackdrop}
    >
      <div className={styles.content}>{children}</div>
    </dialog>
  )
}
