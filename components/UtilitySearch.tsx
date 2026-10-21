'use client'

import { useId, useMemo, useState } from 'react'
import { utilityTypes } from './utilityTypes'

export function UtilitySearch() {
  const [query, setQuery] = useState('')
  const listId = useId()
  const normalizedQuery = query.trim().toLocaleLowerCase('ru')
  const results = useMemo(() => {
    if (!normalizedQuery) return []
    return utilityTypes.filter(({ name, description }) =>
      `${name} ${description}`.toLocaleLowerCase('ru').includes(normalizedQuery)
    )
  }, [normalizedQuery])

  return (
    <div className="utility-search">
      <label className="sr-only" htmlFor={`${listId}-input`}>Поиск</label>
      <input
        id={`${listId}-input`}
        type="search"
        role="combobox"
        value={query}
        onChange={event => setQuery(event.target.value)}
        placeholder="Найти…"
        autoComplete="off"
        aria-controls={listId}
        aria-expanded={Boolean(normalizedQuery)}
        aria-autocomplete="list"
      />
      {normalizedQuery && (
        <div className="utility-search-results" id={listId} role="listbox">
          {results.length ? results.map(item => (
            <a
              key={item.slug}
              href={`/utility-types/${item.slug}`}
              role="option"
              aria-selected="false"
              onClick={() => setQuery('')}
            >
              <code>{item.name}</code>
              <span>{item.description}</span>
            </a>
          )) : <p>Ничего не найдено</p>}
        </div>
      )}
    </div>
  )
}
