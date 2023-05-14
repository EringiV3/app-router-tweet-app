import { Profile } from '@/components/Profile'
import { Suspense } from 'react'

type Props = {
  params: {
    id: string
  }
}

export default async function Page({ params }: Props) {
  const { id } = params

  return (
    <div>
      <Suspense fallback={<div>loading...</div>}>
        {/* @ts-ignore */}
        <Profile userId={id} />{' '}
      </Suspense>
    </div>
  )
}
