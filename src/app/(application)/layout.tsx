import { UserButton, getAuthenticatedUser } from '@/libs/auth'
import styles from './layout.module.css'
import { TweetButton } from '@/models/tweet/components/TweetButton'
import { LinkButton } from '@/components/ui/Button'

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
  const user = await getAuthenticatedUser()

  return (
    <div className={styles.applicationLayout}>
      <nav className={styles.sidebar}>
        {menus.map((menu) => (
          <LinkButton
            key={menu.name}
            href={menu.path(user.clerkUserId)}
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
