# OMDB API Project

Этот проект демонстрирует использование OMDB API для поиска информации о фильмах. Он позволяет искать фильмы по названию, отображать результаты поиска, а также интегрировать внешние данные о фильмах.

## Функционал

- Поиск фильмов по названию.
- Отображение результатов поиска.
- Интеграция с [OMDB API](http://www.omdbapi.com/) для получения информации о фильмах.

## Установка

1. Клонируйте репозиторий:

   ```
   git clone https://github.com/Palady56/omdb-api.git
   ```

2. Перейдите в директорию проекта:
   ```
   cd omdb-api
   ```
   
3. Установите зависимости:
   ```
   npm i
   ```
## Конфигурация

Перед запуском проекта вам нужно добавить ваш API ключ OMDB API. Создайте переменную с ключом или файл .env в корне проекта и добавьте в него следующую строку:

    OMDB_API_KEY=ваш_ключ_от_omdb_api

## Использование
- Введите название фильма в форму поиска.
- Запрос автоматически отправится.
- Результаты поиска будут отображены на странице.
