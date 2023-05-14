import { auth, currentUser } from '@clerk/nextjs'
import styles from './layout.module.css'
import Link from 'next/link'
import { TweetButton } from '@/components/TweetButton'

type Props = {
  children: React.ReactNode
}

const menus: {
  name: string
  path: (userId: string) => string
  icon: string
}[] = [
  {
    name: 'ホーム',
    path: () => '/home',
    icon: 'home',
  },
  {
    name: 'プロフィール',
    path: (userId: string) => `/users/${userId}`,
    icon: 'user',
  },
]

export default async function ApplicationLayout({ children }: Props) {
  const user = await currentUser()

  if (!user) {
    throw new Error('ユーザーを取得できませんでした')
  }

  return (
    <div className={styles.applicationLayout}>
      <nav className={styles.sidebar}>
        {menus.map((menu) => (
          <Link key={menu.name} href={menu.path(user.id)}>
            {menu.name}
          </Link>
        ))}
        <TweetButton />
      </nav>
      <main className={styles.content}>{children}</main>
    </div>
  )
}
