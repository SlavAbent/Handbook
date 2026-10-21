import { render } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { PwaRegister } from './PwaRegister'

describe('PwaRegister', () => {
  afterEach(() => vi.restoreAllMocks())

  it('does not render visible content', () => {
    const { container } = render(<PwaRegister />)
    expect(container).toBeEmptyDOMElement()
  })
})
