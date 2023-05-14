import { prisma } from '@/lib/db'

type Props = {
  params: {
    id: string
  }
}

export default async function Page({ params }: Props) {
  const { id } = params

  const profile = await prisma.profile.findUnique({
    where: {
      userId: id,
    },
  })

  if (!profile) {
    throw new Error('profileが取得できません')
  }

  return <div>{JSON.stringify({ profile })}</div>
}
