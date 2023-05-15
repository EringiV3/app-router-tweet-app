import { prisma } from '@/lib/db'
import { getAuthenticatedUser } from '@/lib/auth'
import { redirect } from 'next/navigation'

export default async function Page() {
  const { clerkUserId } = await getAuthenticatedUser()

  const user = await prisma.user.findUnique({
    where: {
      id: clerkUserId,
    },
  })

  // ユーザーが未作成の場合UserとProfileを作成する
  if (!user) {
    await prisma.user.create({
      data: {
        id: clerkUserId,
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
