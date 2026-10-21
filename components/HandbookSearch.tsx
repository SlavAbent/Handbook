'use client'

import { useId, useMemo, useState } from 'react'
import { handbookEntries } from './handbookEntries'

export function HandbookSearch() {
  const [query, setQuery] = useState('')
  const listId = useId()
  const normalizedQuery = query.trim().toLocaleLowerCase('ru')
  const results = useMemo(() => {
    if (!normalizedQuery) return []
    return handbookEntries.filter(({ name, description, technology, group }) =>
      `${name} ${description} ${technology} ${group}`.toLocaleLowerCase('ru').includes(normalizedQuery)
    )
  }, [normalizedQuery])

  return (
    <div className="utility-search">
      <label className="sr-only" htmlFor={`${listId}-input`}>Поиск по книге</label>
      <input
        id={`${listId}-input`}
        type="search"
        role="combobox"
        value={query}
        onChange={event => setQuery(event.target.value)}
        placeholder="Найти в книге…"
        autoComplete="off"
        aria-controls={listId}
        aria-expanded={Boolean(normalizedQuery)}
        aria-autocomplete="list"
      />
      {normalizedQuery && (
        <div className="utility-search-results" id={listId} role="listbox">
          {results.length ? results.map(item => (
            <a
              key={item.href}
              href={item.href}
              role="option"
              aria-selected="false"
              onClick={() => setQuery('')}
            >
              <span className="search-result-copy">
                <code>{item.name}</code>
                <span>{item.description}</span>
              </span>
              <small>{item.technology} · {item.group}</small>
            </a>
          )) : <p>Ничего не найдено</p>}
        </div>
      )}
    </div>
  )
}
