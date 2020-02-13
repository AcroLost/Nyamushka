# Запуск
1. npm i
2. gulp

# Ответы
### 1. Расскажите, чем, на ваш взгляд, отличается хорошая верстка от плохой с точки зрения:

 Пользователя: скорость загрузки страницы и быстрый отклик на действия пользователя , интуитивно понятный интерфейс, плавная анимация, а также сайт должен быть просто удобен для просмотра (с какого бы устройства/браузера не зашел бы пользователь).
 
 Менеджера проекта: гибкость вёрстки для быстроты внесения правок и внедрения нового контента без дополнительных трудозатрат (после добавления которого вёрстка не развалится). Все выполнено в поставленные сроки.
 
 Дизайнера: вёрстка и её поведение, должны полностью соответствовать макету. 
 
 Верстальщика: гибкость для дальнейшего переиспользования классов. Читаемость кода, разметки, стилей (чтобы человек, который приступит к проекту не был напуган и растерян). Код выполнен по общепринятым правилам команды. 
 
 Клиентского программиста: подготовленная верстка, не нуждающаяся в правках при добавлении скриптов.   
 
 Серверного программиста: верстка не должна нагружать сервер. 
 
### 2. Опишите основные особенности верстки крупных многостраничных сайтов, дизайн которых может меняться в процессе реализации и поддержки. Расскажите о своем опыте верстки подобных сайтов: какие методологии, инструменты и технологии вы применяли на практике. 
 Опыта в разработке подобных сайтов пока нет, но из общих впечатлений это использование БЭМ методологии, которая уменьшает усилия для изменения кода. Также считаю, что было бы целесообразно разбить повторяющиеся элементы разметки в отдельные файлы (такие как header, sidebar, footer). Придерживаться общепринятых правил в команде.
 
### 3. Опишите основные особенности верстки сайтов, которые должны одинаково хорошо отображаться как на любом современном компьютере, так и на смартфонах и планшетах под управлением iOS и Android. Расскажите о своем опыте верстки подобных сайтов: какие инструменты и технологии вы применяли, как проверяли результат на различных устройствах, какие именно устройства требовалось поддерживать.
 
 1.	Метатэги (viewport, http-equiv);
 2.	media-запросы, flex, grid, bootstrap; 
 3.	Плагин gulp-autoprefixer, для добавления префиксов;
 4.	Использование сервисов эмуляции различных браузеров и устройств (BrowserStack, lambdatest).

### 4. Расскажите, какие инструменты помогают вам экономить время в процессе написания, проверки и отладки кода.

 1.	SCSS c миксинами и переменными;
 2.	Сборщик Gulp; 
 3.	VSCode c огромным набором расширений (ESLint и т.д.);
 4.	Инструменты разработчика; 
 5.	Сервисы эмуляции браузеров/устройств;
 6.	Расширение PixelPerfect. 

### 5. Вам нужно понять, почему страница отображается некорректно в Safari на iOS и в IE на Windows. Код писали не вы, доступа к исходникам у вас нет. Ваши действия? Сталкивались ли вы с подобными проблемами на практике?
 
 Запускаем сайт например в BrowserStack, открываем инструменты разработчика и проверяем стили у элементов которые некорректно отображаются, после чего обращаемся к документации, чтобы проверить поддерживаются ли данные стили браузером. На практике с подобными проблемами не сталкивался.
 
### 6. Дизайнер отдал вам макет, в котором не показано, как должны выглядеть интерактивные элементы при наведении мыши. Ваши действия?
 Если имеется связь с дизайнером, то можно попросить непосредственно его внести изменения в макет. В целом, лучше всего будет уточнить у менеджера проекта дальнейший план действий.
 
### 7. Какие ресурсы вы используете для развития в профессиональной сфере? Приведите несколько конкретных примеров (сайты, блоги и так далее). Какое направление развития вам более близко: JS-программирование, HTML/CSS- верстка или и то, и другое? Какие ещё области знаний, кроме тех, что непосредственно относятся к работе, вам интересны?
 
 Телеграм-каналы: forwebdev, webstandards_ru. Сайты: learn.javascript, habr, stackoverflow, tproger. 
 
 На данный момент мне импонируют как верстка, так и JS. Что будет дальше покажет время.
 
 В целом люблю почитать интересные статьи про космос, да и вообще про современные технологии.

### 8. Расскажите нам о себе и предоставьте несколько ссылок на последние работы, выполненные вами.
 
 Зовут Евгений, мне 21 год. Обучаюсь на 4-м курсе в УГАТУ по специальности "Геоинформационные системы и технологии". На данный момент изучаю React.
 
### Работы
1. https://acrolost.github.io/TopTrans/
2. https://acrolost.github.io/Gipsolite/
3. https://acrolost.github.io/CSS-Generator/ - простенький генератор CSS
4. https://acrolost.github.io/ToDo-List/ - список дел с использованием localStorage
