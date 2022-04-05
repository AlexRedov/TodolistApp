# ToDo App

Этот проект создан в рамках обучающего вебинара по React от Skillfactory

## Как работать с приложением

### Разработка

`npm start`
Запускает приложение в режиме разработки\
Откройте [http://localhost:3000](http://localhost:3000), чтобы увидеть приложение в браузере.\
Страница будет перезагружаться каждый раз при внесении правок.

### Тестирование

`npm test`
Запускает тесты. В исходном состоянии в приложении нет тестов, но вы можете их добавить (см. раздел Домашнее задание)

### Сборка

`npm run build`
Запускает сборку. Все собранные файлы будут находиться в папке `build`.\
Все файлы будут автоматически минифицированы и в названия файлов будут добавлены хэши.

## Домашнее задание

Вы можете доработать приложение, чтобы отточить свои навыки работы с React. Ниже будут предложены некоторые предложения по доработкам, отсортированные по уровню сложности, но вы можете придумать и свои доработки.

### Легко 🤓

- добавить анимацию (анимация при наведении на активные элементы, анимированное раскрытие формы)
- подключить препроцессор Sass
- дописать адаптивные стили для мобильных устройств

### Средне 😎

- при валидации выводить сообщение об ошибке (или выделять цветом) только те инпуты, в которых есть ошибка
- добавить возможность удаления карточек
- перенести форму добавления карточки во всплывающее окно
- добавить Unit-тесты. Подробнее о том, как тестировать React-компоненты, можно прочитать [здесь](https://jestjs.io/ru/docs/tutorial-react)

### Сложно 🤩

- добавить возможность отредактировать карточку (поменять заголовок, удалить/добавить пункты)
- провести рефакторинг компонентов согласно принципам SOLID
- добавить E2E тесты (можно использовать библиотеку [cypress](https://www.cypress.io/))
