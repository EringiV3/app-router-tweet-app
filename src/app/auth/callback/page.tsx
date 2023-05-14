import { prisma } from '@/lib/db'
import { auth } from '@clerk/nextjs'
import { redirect } from 'next/navigation'

export default async function Page() {
  const { userId } = auth()

  if (!userId) {
    throw new Error('userIdが取得できません')
  }

  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  })

  // ユーザーが未作成の場合UserとProfileを作成する
  if (!user) {
    await prisma.user.create({
      data: {
        id: userId,
        profile: {
          create: {
            bio: '',
          },
        },
      },
    })
  }

  redirect('/')
}
