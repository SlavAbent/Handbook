import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { HandbookNav } from './HandbookNav'

const usePathname = vi.fn()

vi.mock('next/navigation', () => ({ usePathname: () => usePathname() }))

afterEach(cleanup)

describe('HandbookNav', () => {
  it('shows React hooks and marks the current page', () => {
    usePathname.mockReturnValue('/react/react-hooks/effects/use-effect')
    render(<HandbookNav />)

    expect(screen.getByRole('navigation', { name: 'Список React Hooks' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'useEffect' })).toHaveAttribute('aria-current', 'page')
    expect(screen.getByRole('link', { name: 'useState' })).not.toHaveAttribute('aria-current')
  })

  it('shows React DOM hooks', () => {
    usePathname.mockReturnValue('/react/react-dom-hooks/forms/use-form-status')
    render(<HandbookNav />)

    expect(screen.getByRole('navigation', { name: 'Список React DOM Hooks' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'useFormStatus' })).toHaveAttribute('aria-current', 'page')
  })

  it('preserves the Utility Types navigation', () => {
    usePathname.mockReturnValue('/utility-types/pick')
    render(<HandbookNav />)

    expect(screen.getByRole('navigation', { name: 'Список Utility Types' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Pick' })).toHaveAttribute('aria-current', 'page')
  })

  it('renders nothing outside catalog pages', () => {
    usePathname.mockReturnValue('/react')
    const { container } = render(<HandbookNav />)
    expect(container).toBeEmptyDOMElement()
  })
})
