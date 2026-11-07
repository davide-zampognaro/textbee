import { BrandIcon, BRAND_NAME } from '@/components/shared/brand-mark'

// Slim footer: brand and year only. The upstream project's links (docs,
// community, policies, status page) were removed for this private install.
export default function Footer() {
  return (
    <footer className='border-t border-border bg-shell/60'>
      <div className='mx-auto flex max-w-7xl items-center gap-2 px-4 py-6 sm:px-6 lg:px-8'>
        <BrandIcon className='h-5 w-5 rounded-md' iconClassName='h-3 w-3' />
        <span className='text-sm text-muted-foreground'>
          © {new Date().getFullYear()} {BRAND_NAME}
        </span>
      </div>
    </footer>
  )
}
