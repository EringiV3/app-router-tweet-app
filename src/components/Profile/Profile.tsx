import { prisma } from '@/lib/db'
import { currentUser } from '@clerk/nextjs'
import { Avatar } from '@/components/Avatar'
import styles from './Profile.module.css'

type Props = {
  userId: string
}

export const Profile = async ({ userId }: Props) => {
  const [user, profile] = await Promise.all([
    currentUser(),
    prisma.profile.findUnique({
      where: {
        userId,
      },
    }),
  ])

  if (!user || !profile) {
    throw new Error('profileが取得できません')
  }

  return (
    <div className={styles.profile}>
      <div className={styles.avatar}>
        <Avatar
          imageUrl={user.profileImageUrl}
          alt={`${user.lastName}のプロフィール画像`}
          size={100}
        />
      </div>
      <h1 className={styles.name}>{`${user.lastName} ${user.firstName}`}</h1>
      <p>{profile.bio}</p>
    </div>
  )
}
