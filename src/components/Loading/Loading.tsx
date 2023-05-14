'use client'

import styles from './Loading.module.css'

interface Props {
  text?: string
}

const Loading = ({ text }: Props) => (
  <div className={styles.container}>
    <div className={styles.spinner} />
    <div className={styles.text}>{text}</div>
  </div>
)

export default Loading
