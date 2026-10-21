import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'
import { UtilitySearch } from './UtilitySearch'

afterEach(cleanup)

describe('UtilitySearch', () => {
  it('filters utility types by English name', () => {
    render(<UtilitySearch />)
    fireEvent.change(screen.getByRole('combobox'), { target: { value: 'pick' } })

    expect(screen.getByRole('option', { name: /Pick/ })).toHaveAttribute('href', '/utility-types/pick')
    expect(screen.queryByRole('option', { name: /Partial/ })).not.toBeInTheDocument()
  })

  it('filters utility types by Russian description', () => {
    render(<UtilitySearch />)
    fireEvent.change(screen.getByRole('combobox'), { target: { value: 'словарь' } })

    expect(screen.getByRole('option', { name: /Record/ })).toBeInTheDocument()
  })
})
