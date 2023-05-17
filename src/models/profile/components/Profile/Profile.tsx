import { getAuthenticatedUser } from '@/libs/auth'
import { Avatar } from '@/components/ui/Avatar'
import styles from './Profile.module.css'
import { ProfileUsecase } from '@/models/profile/usecase'

type Props = {
  userId: string
}

export const Profile = async ({ userId }: Props) => {
  const profileUsecase = new ProfileUsecase()

  const [user, profile] = await Promise.all([
    getAuthenticatedUser(),
    profileUsecase.getProfileByUserId(userId),
  ])

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
