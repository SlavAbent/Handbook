'use client'

export function ThemeToggle() {
  function toggleTheme() {
    const root = document.documentElement
    const followsDarkSystem = !root.classList.contains('light') && window.matchMedia('(prefers-color-scheme: dark)').matches
    const nextTheme = root.classList.contains('dark') || followsDarkSystem ? 'light' : 'dark'

    root.classList.remove('light', 'dark')
    root.classList.add(nextTheme)
    root.style.colorScheme = nextTheme
    localStorage.setItem('theme', nextTheme)
  }

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label="Переключить светлую и тёмную тему"
      title="Переключить тему"
    >
      <span aria-hidden="true">◐</span>
      <span className="theme-name" aria-hidden="true" />
    </button>
  )
}
