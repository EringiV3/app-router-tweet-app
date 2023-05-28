import { auth, currentUser } from '@clerk/nextjs'

export {
  authMiddleware,
  ClerkProvider,
  UserButton,
  SignIn,
  SignUp,
} from '@clerk/nextjs'

export const getClerkUserId = async () => {
  const { userId } = auth()

  if (!userId) {
    throw new Error('userIdが取得できませんでした。')
  }

  return userId
}

export const getAuthenticatedUser = async () => {
  const user = await currentUser()

  if (!user) {
    throw new Error('userが取得できませんでした。')
  }

  return {
    clerkUserId: user.id,
    profileImageUrl: user.profileImageUrl,
    lastName: user.lastName,
    firstName: user.firstName,
  }
}

export const isAuthenticated = () => {
  const { userId } = auth()
  return userId !== null
}
