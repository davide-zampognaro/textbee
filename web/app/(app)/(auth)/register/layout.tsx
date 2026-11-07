import { redirect } from 'next/navigation'
import { PropsWithChildren } from 'react'

import { Routes } from '@/config/routes'

// Public sign-up can be switched off for private installs. The API enforces
// the same flag; this only keeps visitors off a form that cannot succeed.
export default function RegisterLayout({ children }: PropsWithChildren) {
  if (process.env.NEXT_PUBLIC_DISABLE_REGISTRATION === 'true') {
    redirect(Routes.login)
  }
  return <>{children}</>
}
