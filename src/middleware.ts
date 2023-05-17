import { authMiddleware } from '@/libs/auth'

/**
 * @see https://clerk.com/docs/nextjs/middleware
 */
export default authMiddleware()

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/'],
}
