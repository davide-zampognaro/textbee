import { MessageSquareTextIcon } from 'lucide-react'

import { cn } from '@/lib/utils'

// Neutral, unbranded mark used in place of the upstream logo.
export function BrandIcon({
  className,
  iconClassName,
}: {
  className?: string
  iconClassName?: string
}) {
  return (
    <span
      aria-hidden='true'
      className={cn(
        'inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-sm',
        className
      )}
    >
      <MessageSquareTextIcon className={cn('h-4 w-4', iconClassName)} />
    </span>
  )
}

export const BRAND_NAME = 'SMS Gateway'
