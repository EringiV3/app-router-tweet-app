import { prisma } from '@/lib/db'

type Props = {
  userId: string
}

export const Profile = async ({ userId }: Props) => {
  await sleep(3000)

  const profile = await prisma.profile.findUnique({
    where: {
      userId,
    },
  })

  if (!profile) {
    throw new Error('profileが取得できません')
  }

  return <div>Profile: {userId}</div>
}

const sleep = (ms: number) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(null)
    }, ms)
  })
}
