Задание: "Верстка лендинг страницы"
---

## Цель задания:
- Сформировать понимание о связи HTML и CSS
- Сформировать знание о том, как создавать стили и анимации
- Научиться создавать лендинги без использования JS
- Научиться делать мобильную верстку сайта


## Часть 1: Вёрстка лендинга
Открыть макет лендинга по ссылке из репозитория с ДЗ. Там будет изображен дизайн лендинга, который вам и предстоит сверстать с помощью HTML & CSS.
[Ссылка на макет](https://www.figma.com/design/Nl19TVilxAGwdhGdBejGNZ/VK-Frontend-HW2?node-id=58-165&t=FZSt4rPP7UUpjxkF-1)

Открыть файл index.html из репозитория. Это шаблон для страницы, наполняйте его в соответствии с макетом. Код для header, footer и разных секций должен находиться в соответствующих тегах. Это нужно для автоматической проверки.
Не забывать про семантику, кнопки должны быть &lt;button&gt;, а не &lt;div&gt; и пр.

Написать  стили в соответствии с макетом, прикрепленным в репозитории.
Верстку делать под ширину из макета (1440px), можно воспользоваться DevTools для задания этой ширины в браузере. Тесты будут только на указанной ширине.

В этой части достаточно, чтобы скриншотные тесты проходили, то есть вёрстка статическая, без анимаций.

## Часть 2: Адаптив и анимации
1) Адаптируйте страницу полученную в части 1 задания под мобильные устройства.
(только для заданной ширины, резиновость вёрстки не требуется).
Для этого не нужно писать новый HTML, а нужно оперировать медиа-запросами для адаптивности.
Ваша страница должна изменять свой внешний в соответствии с дизайном из страницы "Часть 2" в Макете.
2) Добавить ховеры на элементы в соответствии с дизайном
3) Добавьте анимации из макета:
  * При наведении курсора на карточки в секции "Надежность VK Cloud" в соответствии дизайном
  * При наведении курсора на кнопки в соответствии с дизайном
  * Бегущей строки в соответствии с дизайном

Если в макете будет чего-то не хватать, либо пишите в чат и постараемся добавить, либо делайте на свое усмотрение.


## Что должно получиться
Готовый лендинг, соответствующий макету под размеры десктопа (1440px) и мобильного устройства (376px).
В нём должны быть примеры семантической верстки, а также интерактив в виде анимаций.
В CSS должны быть вынесены переменные для используемых цветов и шрифтов. JS быть не должно.

## Критерии оценивания

### Тест на соответствие
Тестирование производится методом снепшот-скриншот тестирования.
Результирующие скриншоты должны совпадать с теми что у преподавателей.
Исходный код тестов можно посмотреть [тут](./.github/tests/tests.spec.ts)

На каждый раздел для мобильной и браузерной версии существует отдельный тест.

> **За каждый пройденный тест из раздела screenshot - 1 балл (в сумме 10).**

### Функциональность
Проверяется так же Наличие ховеров и анимаций.

- Все ховеры и анимации присутствуют - 4 балла
- Большинство ховеров и анимаций присутствует - 3 балла
- Присутствуют ховеры и практически нет анимации - 1 балл
- Практически отсутствуют ховеры и анимации - 0 баллов

> **Максимум 4 балла**

### Критерий на исползьование css для адаптива
Адаптивность для мобильных устройств должна быть сделана исключительно используя css

- Адаптив сделан через CSS - 3 балла
- Адаптив в основном сделан через CSS, но с применением разного HTML - 2 балла
- Для адаптива в большинстве случаем использовался разный HTML - 0 баллов

> **Максимум 3 балла**


### Опрятность кода
Вынесение переменных и осмысленное именование классов (например, не .elem123, а .products–item)

Для всех цветов и шрифтов используются переменные и классы названы осмысленно - 2 балла
Есть некоторые использования переменных и большая часть классов названа подходящими именами  - 1 балл
Практически отсутствуют переменные и названия классов не отражают их суть - 0 баллов

> **Максимум 2 балла**

### Семантика верстки (использование правильных тегов для элементов)
Тэги семантически корректны, то есть:
- кнопки:  `<button>`
- списки `<ul>/<ol>`, а их элементы `<li>`
- заголовки `<h1>`, `<h2>` и тд

> **1 балл, иначе 0**
