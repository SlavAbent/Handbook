'use client'

import { usePathname } from 'next/navigation'
import { reactDomHooks, reactHooks, utilityTypes } from './handbookEntries'

export function HandbookNav() {
  const pathname = usePathname()
  const items = pathname.startsWith('/react/react-hooks')
    ? reactHooks
    : pathname.startsWith('/react/react-dom-hooks')
      ? reactDomHooks
      : pathname === '/utility-types' || pathname.startsWith('/utility-types/')
        ? utilityTypes
        : []

  if (!items.length) return null

  const label = items[0].technology === 'TypeScript' ? 'Utility Types' : `${items[0].technology} Hooks`

  return (
    <nav className="utility-nav" aria-label={`Список ${label}`}>
      <p>{label}</p>
      <div>
        {items.map(item => {
          const active = pathname === item.href || pathname === `${item.href}/`
          return (
            <a key={item.href} href={item.href} aria-current={active ? 'page' : undefined}>
              {item.name}
            </a>
          )
        })}
      </div>
    </nav>
  )
}
