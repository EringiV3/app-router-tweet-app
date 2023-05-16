import { getAuthenticatedUser } from '@/lib/auth'
import { redirect } from 'next/navigation'
import { UserUsecase } from '@/models/user/usecase'

export default async function Page() {
  const userUsecase = new UserUsecase()
  const { clerkUserId } = await getAuthenticatedUser()

  await userUsecase.registerUser({ clerkUserId })

  redirect('/')
}
