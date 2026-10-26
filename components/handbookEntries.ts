export type HandbookEntry = {
  name: string
  slug: string
  href: string
  description: string
  technology: 'React' | 'React DOM' | 'TypeScript' | 'Docker'
  group: string
}

const reactHook = (
  name: string,
  slug: string,
  description: string,
  group: string,
  groupSlug: string
): HandbookEntry => ({
  name,
  slug,
  description,
  group,
  technology: 'React',
  href: `/react/react-hooks/${groupSlug}/${slug}`
})

export const reactHooks: HandbookEntry[] = [
  reactHook('useState', 'use-state', 'Локальное состояние компонента', 'Состояние', 'state'),
  reactHook('useReducer', 'use-reducer', 'Состояние со сложной логикой обновления', 'Состояние', 'state'),
  reactHook('useContext', 'use-context', 'Чтение и подписка на контекст', 'Контекст', 'context'),
  reactHook('useRef', 'use-ref', 'Изменяемое значение без повторного рендера', 'Ссылки', 'refs'),
  reactHook('useImperativeHandle', 'use-imperative-handle', 'Настройка значения, доступного через ref', 'Ссылки', 'refs'),
  reactHook('useEffect', 'use-effect', 'Синхронизация с внешними системами', 'Эффекты', 'effects'),
  reactHook('useEffectEvent', 'use-effect-event', 'Нереактивное событие внутри эффекта', 'Эффекты', 'effects'),
  reactHook('useLayoutEffect', 'use-layout-effect', 'Эффект до перерисовки браузера', 'Эффекты', 'effects'),
  reactHook('useInsertionEffect', 'use-insertion-effect', 'Вставка динамических стилей библиотекой', 'Эффекты', 'effects'),
  reactHook('useMemo', 'use-memo', 'Кэширование результата вычисления', 'Производительность', 'performance'),
  reactHook('useCallback', 'use-callback', 'Кэширование функции между рендерами', 'Производительность', 'performance'),
  reactHook('useTransition', 'use-transition', 'Неблокирующее обновление интерфейса', 'Производительность', 'performance'),
  reactHook('useDeferredValue', 'use-deferred-value', 'Отложенное обновление части интерфейса', 'Производительность', 'performance'),
  reactHook('useActionState', 'use-action-state', 'Состояние результата Action', 'Actions и формы', 'actions'),
  reactHook('useOptimistic', 'use-optimistic', 'Оптимистичное состояние во время Action', 'Actions и формы', 'actions'),
  reactHook('useDebugValue', 'use-debug-value', 'Подпись пользовательского хука в DevTools', 'Служебные', 'utilities'),
  reactHook('useId', 'use-id', 'Стабильный идентификатор для доступности', 'Служебные', 'utilities'),
  reactHook('useSyncExternalStore', 'use-sync-external-store', 'Подписка на внешнее хранилище', 'Служебные', 'utilities')
]

export const reactDomHooks: HandbookEntry[] = [
  {
    name: 'useFormStatus',
    slug: 'use-form-status',
    href: '/react/react-dom-hooks/forms/use-form-status',
    description: 'Состояние отправки родительской формы',
    technology: 'React DOM',
    group: 'Формы'
  }
]

const utilityType = (name: string, slug: string, description: string): HandbookEntry => ({
  name,
  slug,
  description,
  href: `/utility-types/${slug}`,
  technology: 'TypeScript',
  group: 'Utility Types'
})

export const utilityTypes: HandbookEntry[] = [
  utilityType('Partial', 'partial', 'Необязательные свойства'),
  utilityType('Required', 'required', 'Обязательные свойства'),
  utilityType('Readonly', 'readonly', 'Свойства только для чтения'),
  utilityType('Record', 'record', 'Типизированный словарь'),
  utilityType('Pick', 'pick', 'Выбор свойств'),
  utilityType('Omit', 'omit', 'Исключение свойств'),
  utilityType('Exclude', 'exclude', 'Исключение из объединения'),
  utilityType('Extract', 'extract', 'Выбор из объединения'),
  utilityType('NonNullable', 'non-nullable', 'Удаление null и undefined'),
  utilityType('Parameters', 'parameters', 'Параметры функции'),
  utilityType('ReturnType', 'return-type', 'Результат функции'),
  utilityType('ConstructorParameters', 'constructor-parameters', 'Параметры конструктора'),
  utilityType('InstanceType', 'instance-type', 'Экземпляр конструктора'),
  utilityType('ThisParameterType', 'this-parameter-type', 'Тип параметра this'),
  utilityType('OmitThisParameter', 'omit-this-parameter', 'Удаление параметра this'),
  utilityType('ThisType', 'this-type', 'Контекстный this'),
  utilityType('Uppercase', 'uppercase', 'Верхний регистр'),
  utilityType('Lowercase', 'lowercase', 'Нижний регистр'),
  utilityType('Capitalize', 'capitalize', 'Прописной первый символ'),
  utilityType('Uncapitalize', 'uncapitalize', 'Строчный первый символ'),
  utilityType('Awaited', 'awaited', 'Результат Promise'),
  utilityType('NoInfer', 'no-infer', 'Управление выводом типа')
]

const dockerEntry = (
  name: string,
  slug: string,
  description: string,
  group: string,
  groupSlug: string
): HandbookEntry => ({
  name,
  slug,
  description,
  group,
  technology: 'Docker',
  href: `/docker/${groupSlug}/${slug}`
})

export const dockerEntries: HandbookEntry[] = [
  dockerEntry('Зачем нужен Docker', 'why-docker', 'Проблемы, которые решают контейнеры', 'Основы', 'fundamentals'),
  dockerEntry('Установка Docker', 'installation', 'Docker Desktop и Docker Engine', 'Основы', 'fundamentals'),
  dockerEntry('Первый контейнер', 'first-container', 'Запуск hello-world и Nginx', 'Основы', 'fundamentals'),
  dockerEntry('Образы и контейнеры', 'images-and-containers', 'Разница между образом и контейнером', 'Основы', 'fundamentals'),
  dockerEntry('Docker CLI', 'cli', 'Основные команды управления Docker', 'Основы', 'fundamentals'),
  dockerEntry('Первое Node.js-приложение', 'node-app', 'Минимальный сервер перед упаковкой', 'Основы', 'fundamentals'),
  dockerEntry('Dockerfile', 'dockerfile', 'Сборка собственного образа', 'Сборка образов', 'build'),
  dockerEntry('.dockerignore', 'dockerignore', 'Исключение файлов из контекста сборки', 'Сборка образов', 'build'),
  dockerEntry('Volumes и bind mounts', 'volumes', 'Постоянные данные и локальные файлы', 'Хранение и сети', 'storage-and-networking'),
  dockerEntry('Сети и порты', 'networks-and-ports', 'Связь контейнеров и публикация портов', 'Хранение и сети', 'storage-and-networking'),
  dockerEntry('Docker Compose', 'docker-compose', 'Описание многоконтейнерного приложения', 'Docker Compose', 'compose'),
  dockerEntry('Next.js и PostgreSQL', 'nextjs-and-postgres', 'Практический стек из двух сервисов', 'Docker Compose', 'compose'),
  dockerEntry('Переменные окружения', 'environment-variables', 'Конфигурация сервисов и интерполяция', 'Docker Compose', 'compose'),
  dockerEntry('Secrets', 'secrets', 'Безопасная передача чувствительных значений', 'Docker Compose', 'compose'),
  dockerEntry('Healthcheck и зависимости', 'healthchecks', 'Проверка готовности и порядок запуска', 'Docker Compose', 'compose'),
  dockerEntry('Multi-stage builds', 'multi-stage-builds', 'Компактные production-образы', 'Production', 'build'),
  dockerEntry('Диагностика', 'debugging', 'Логи, exec, inspect и статистика', 'Эксплуатация', 'operations'),
  dockerEntry('Безопасность и production', 'security', 'Минимальные привилегии и безопасные образы', 'Эксплуатация', 'operations')
]

export const handbookEntries = [...reactHooks, ...reactDomHooks, ...utilityTypes, ...dockerEntries]
