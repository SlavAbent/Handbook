import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { ThemeToggle } from './ThemeToggle'

afterEach(() => {
  cleanup()
  document.documentElement.classList.remove('light', 'dark')
  localStorage.clear()
  vi.restoreAllMocks()
})

describe('ThemeToggle', () => {
  it('switches from dark to light theme', () => {
    document.documentElement.classList.add('dark')
    vi.stubGlobal('matchMedia', vi.fn(() => ({ matches: true })))
    render(<ThemeToggle />)
    expect(document.querySelector('.theme-name')).toBeInTheDocument()
    fireEvent.click(screen.getByRole('button', { name: 'Переключить светлую и тёмную тему' }))

    expect(document.documentElement).toHaveClass('light')
    expect(localStorage.getItem('theme')).toBe('light')
  })
})
