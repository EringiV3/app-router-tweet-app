import { UserButton, auth, currentUser } from '@clerk/nextjs'
import styles from './layout.module.css'
import { TweetButton } from '@/components/TweetButton'
import { LinkButton } from '@/components/Button'

type Props = {
  children: React.ReactNode
}

const menus: {
  name: string
  path: (userId: string) => string
}[] = [
  {
    name: 'ホーム',
    path: () => '/home',
  },
  {
    name: 'プロフィール',
    path: (userId: string) => `/users/${userId}`,
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
          <LinkButton
            key={menu.name}
            href={menu.path(user.id)}
            variant="transparent"
          >
            {menu.name}
          </LinkButton>
        ))}
        <TweetButton />
        <div className={styles.userButton}>
          <UserButton afterSignOutUrl="/sign-in" />
        </div>
      </nav>
      <main className={styles.content}>{children}</main>
    </div>
  )
}
