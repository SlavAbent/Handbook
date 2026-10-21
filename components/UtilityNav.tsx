'use client'

import { usePathname } from 'next/navigation'
import { utilityTypes } from './utilityTypes'

export function UtilityNav() {
  const pathname = usePathname()

  if (pathname !== '/utility-types' && !pathname.startsWith('/utility-types/')) {
    return null
  }

  return (
    <nav className="utility-nav" aria-label="Список Utility Types">
      <p>Utility Types</p>
      <div>
        {utilityTypes.map(item => {
          const href = `/utility-types/${item.slug}`
          const active = pathname === href || pathname === `${href}/`
          return (
            <a key={item.slug} href={href} aria-current={active ? 'page' : undefined}>
              {item.name}
            </a>
          )
        })}
      </div>
    </nav>
  )
}
