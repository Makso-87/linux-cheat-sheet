# Linux Cheat Sheet

Стартовый проект на React, TypeScript, Vite и SCSS Modules.

## Запуск

Используй Node.js 24 и npm.

```sh
npm ci
npm run dev
```

## Команды

| Команда                | Назначение                               |
| ---------------------- | ---------------------------------------- |
| `npm run dev`          | Сервер разработки                        |
| `npm run typecheck`    | Проверка типов TypeScript                |
| `npm run lint`         | Проверка ESLint без предупреждений       |
| `npm run lint:fix`     | Автоматическое исправление ошибок ESLint |
| `npm run format`       | Форматирование Prettier                  |
| `npm run format:check` | Проверка форматирования                  |
| `npm run build`        | Проверка типов и сборка в `dist/`        |
| `npm run preview`      | Локальный просмотр сборки                |

## Стили и качество кода

Стили компонентов размещай в файлах `*.module.scss` и импортируй как объект:

```tsx
import styles from './App.module.scss';

<main className={styles.page}>...</main>;
```

Глобальные стили находятся в `src/index.scss`. Sass установлен.

В TypeScript включён `strict`. ESLint использует flat config, правила TypeScript,
React Hooks и React Refresh. Prettier запускается отдельно;
`eslint-config-prettier` отключает конфликтующие правила форматирования.

Тестовый фреймворк пока не подключён.

Документация: [Vite](https://vite.dev/guide/),
[ESLint](https://eslint.org/docs/latest/use/configure/),
[Prettier](https://prettier.io/docs/integrating-with-linters).
