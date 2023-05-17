import { UserButton, getAuthenticatedUser } from '@/libs/auth'
import styles from './layout.module.css'
import { TweetButton } from '@/models/tweet/components/TweetButton'
import { LinkButton } from '@/components/ui/Button'
import { UserUsecase } from '@/models/user/usecase'

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
  const { clerkUserId } = await getAuthenticatedUser()

  const userUsecase = new UserUsecase()
  const user = await userUsecase.getUserByClerkUserId(clerkUserId)

  if (!user) {
    throw new Error('ユーザーが存在しません。')
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
