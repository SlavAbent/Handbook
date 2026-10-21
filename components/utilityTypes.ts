export type UtilityTypeItem = {
  name: string
  slug: string
  description: string
}

export const utilityTypes: UtilityTypeItem[] = [
  { name: 'Partial', slug: 'partial', description: 'Необязательные свойства' },
  { name: 'Required', slug: 'required', description: 'Обязательные свойства' },
  { name: 'Readonly', slug: 'readonly', description: 'Свойства только для чтения' },
  { name: 'Record', slug: 'record', description: 'Типизированный словарь' },
  { name: 'Pick', slug: 'pick', description: 'Выбор свойств' },
  { name: 'Omit', slug: 'omit', description: 'Исключение свойств' },
  { name: 'Exclude', slug: 'exclude', description: 'Исключение из объединения' },
  { name: 'Extract', slug: 'extract', description: 'Выбор из объединения' },
  { name: 'NonNullable', slug: 'non-nullable', description: 'Удаление null и undefined' },
  { name: 'Parameters', slug: 'parameters', description: 'Параметры функции' },
  { name: 'ReturnType', slug: 'return-type', description: 'Результат функции' },
  { name: 'ConstructorParameters', slug: 'constructor-parameters', description: 'Параметры конструктора' },
  { name: 'InstanceType', slug: 'instance-type', description: 'Экземпляр конструктора' },
  { name: 'ThisParameterType', slug: 'this-parameter-type', description: 'Тип параметра this' },
  { name: 'OmitThisParameter', slug: 'omit-this-parameter', description: 'Удаление параметра this' },
  { name: 'ThisType', slug: 'this-type', description: 'Контекстный this' },
  { name: 'Uppercase', slug: 'uppercase', description: 'Верхний регистр' },
  { name: 'Lowercase', slug: 'lowercase', description: 'Нижний регистр' },
  { name: 'Capitalize', slug: 'capitalize', description: 'Прописной первый символ' },
  { name: 'Uncapitalize', slug: 'uncapitalize', description: 'Строчный первый символ' },
  { name: 'Awaited', slug: 'awaited', description: 'Результат Promise' },
  { name: 'NoInfer', slug: 'no-infer', description: 'Управление выводом типа' }
]
