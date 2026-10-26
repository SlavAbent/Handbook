import { PwaRegister } from '@/components/PwaRegister'
import { ThemeToggle } from '@/components/ThemeToggle'
import { UtilityNav } from '@/components/UtilityNav'
import { UtilitySearch } from '@/components/UtilitySearch'
import type { Metadata, Viewport } from 'next'
import { Layout, Navbar } from 'nextra-theme-docs'
import 'nextra-theme-docs/style.css'
import { getPageMap } from 'nextra/page-map'
import './styles.css'

export const metadata: Metadata = {
  title: { default: 'Карманная книга разработчика', template: '%s — Карманная книга разработчика' },
  description: 'Практический русскоязычный справочник по React, React DOM, TypeScript и Docker.',
  applicationName: 'Карманная книга разработчика',
  manifest: '/manifest.webmanifest',
  appleWebApp: { capable: true, title: 'Карманная книга', statusBarStyle: 'default' },
  icons: { apple: '/icons/apple-touch-icon.png', icon: '/icons/icon.svg' }
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f7f2e8' },
    { media: '(prefers-color-scheme: dark)', color: '#171a20' }
  ]
}

const navbar = (
  <Navbar logo={<span className="brand"><span className="brandMark">DEV</span><span>Карманная книга</span></span>}>
    <ThemeToggle />
  </Navbar>
)

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru" dir="ltr" suppressHydrationWarning>
      <body>
        <Layout
          navbar={navbar}
          pageMap={await getPageMap()}
          search={<UtilitySearch />}
          sidebar={{ autoCollapse: true, defaultMenuCollapseLevel: 1, toggleButton: true }}
          toc={{ title: 'На этой странице', backToTop: false, extraContent: <UtilityNav /> }}
          darkMode={false}
          editLink={null}
          feedback={{ content: null }}
          themeSwitch={{ dark: 'Тёмная', light: 'Светлая', system: 'Системная' }}
          navigation={{ prev: true, next: true }}
        >
          {children}
        </Layout>
        <PwaRegister />
      </body>
    </html>
  )
}
