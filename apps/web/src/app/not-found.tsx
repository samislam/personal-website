import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button'
import { MotionDiv, MotionSpan, MotionPath } from '@/components/common/motion'

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-lg space-y-8 text-center">
        <MotionDiv
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-9xl font-extrabold text-gray-900">
            4
            <MotionSpan
              className="inline-block text-primary"
              animate={{
                rotate: [0, -20, 20, -20, 0],
                transition: { repeat: Infinity, duration: 2 },
              }}
            >
              0
            </MotionSpan>
            4
          </h1>
        </MotionDiv>
        <MotionDiv
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <p className="mb-6 text-2xl font-medium text-gray-600">
            Oops! The page you&apos;re looking for doesn&apos;t exist.
          </p>
          <div className="mt-5">
            <Link href="/" className={buttonVariants({ size: 'lg', className: 'font-semibold' })}>
              Return Home
            </Link>
          </div>
        </MotionDiv>
        <MotionDiv
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <svg
            className="mx-auto h-40 w-auto text-primary"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <MotionPath
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={0.5}
              d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 3, ease: 'easeInOut', repeat: Infinity }}
            />
          </svg>
        </MotionDiv>
      </div>
    </div>
  )
}
