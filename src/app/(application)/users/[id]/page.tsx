import { Loading } from '@/components/ui/Loading'
import { Profile } from '@/models/profile/components/Profile'
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
      {/* Suspenseで囲うとStreaming SSRになる */}
      <Suspense fallback={<Loading />}>
        {/* @ts-ignore */}
        <Profile userId={id} />
      </Suspense>
    </div>
  )
}
