import { UserButton, auth, currentUser } from '@clerk/nextjs'

export default async function Home() {
  const { userId } = auth()
  const user = await currentUser()

  console.log({ userId, user })

  return (
    <div>
      <UserButton afterSignOutUrl="/sign-in" />
    </div>
  )
}
