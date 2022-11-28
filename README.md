# 📦 VEZA 

### Rus 

## Используемый стек технологий: 

 - React 
 - Redux 
 - Redux Toolkit 
 - Typescript 
 - Next JS 
 - CSS Modules + SCSS 
 - Jest 

## Первичная установка и запуск: 

После клонирования репозитория **обязательно** необходимо выполнить команду, для успешной работы pre-commit hook: 
```bash 
npm run prepare 
``` 

Запуск сервера в режиме разработки: 
```bash 
npm run dev 
``` 

Сборка проекта: 
```bash 
npm run build 
``` 

Получение статичных HTML файлов проекта: 
```bash 
npm run export 
``` 

Запуск проверки синтаксиса через EsLint: 
```bash 
npm run lint 
``` 
с исправлением: 
```bash 
npm run lint:fix 
``` 

Запуск форматирования кода на основе правил через prettier: 

```bash 
npm run format 
``` 



### Структура проекта 

1. Папка /pages содержит файлы страниц веб приложения. Название файла/путь до файла учитывая 
    вложенность папок = получаемому url сайта после сборки. 

   - _app.tsx корневой файл, в котором подключаются все глобальные стили, store и тп. 
   - index.tsx файл корневой страницы проекта / 
   - _document используется библиотекой next для расширения тегов <html> и <body> 
   - 404 и прочие коды ошибок используются для отображения заглушки/страницы соответствующего кода ошибки 

   В данной папке разрешена любая вложенность необходимая для генерации целевого url на сайте. 

2. Папка /public содержит: 
   - /images - изображения (все изображения строго в данную папку согласно рекомендациям Next JS) 
   - /fonts - шрифты 
   - /locales - словари для работы с мультиязычными библиотеками 
   - любые другие данные, необходимые для проекта, но не являющиеся кодом 

3. /service - различные сервисы для работы с API, отправкой fetch запросов и тп. 
    Доступна любая разумная вложенность папок. 

4. /store - папка используется для подключения store и хранения кастомных/глобальных hooks. 
    Возможно расширение файловой структуры для hooks по необходимости. 

5. /styles - папка для хранения глобальных стилей и глобальных переменных. Только scss файлы. 
  - include хранит все глобальные файлы стилей, которые в последствии подключаются и собираются в файле template.scss 

6. /type - d.ts файлы для типизирования JS библиотек/модулей, которые не имеют 
собственных тайпингов. Прежде чем описывать такой тип, попытайтесь 
установить тайпинг через npm i @types/название_библиотеки 

  - собственные файлы типов касающиеся созданных components & features. Главным условием размещения файла типов в  
директории является необходимость использования интерфейса/типа в нескольких разных местах проекта, в разных компонентах.  
В случаях если созданный тип требуется только одному компоненту он размещается непосредственно в коде этого компонента. 

7. /utils - вспомогательные функции, которые можно использовать по всему 
проекту. Не глобальные функции необходимо хранить в месте применения. 

8. /components - глобальные переиспользуемые частички приложения. 
Не глобальные компоненты необходимо хранить в месте применения, чаще всего в features. 

   Для каждого компонента создается папка с его названием в PascalCase. Код 
   компонента описывается в файле, имеющем аналогичное название ExampleComponent.tsx Также создается файл index.tsx в  
   котором необходимо определить дефолтный/обычный экспорт, экспорт типов, любые экспорты необходимые для прямого доступа  
   к компоненту снаружи папки. 

   Эта папка может содержать стили, специфические для компонента хуки, вспомогательные 
   функции и т.д. 

   Эта папка использует бесконечную древовидную структуру. Любой из компонентов может иметь 
   дочерние компоненты, если это необходимо, однако разрастание вложенных папок должно быть минимально. В случае если  
   в компоненте появляется множественная вложенность или несколько разных папок это признак того, что данный компонент  
   претендует на папку в features, а его отдельные переиспользуемые куски кода могут быть оставленные в своих собственных  
   папка в components или также перенесены в features вместе со своим родителем. 

   В универсальных компонентах для хранения или работы со стейтом используются только встроенные react hooks (useState, useContext и тд). 
   В случае необходимости работы с Redux и глобальным state компонент должен быть превращен в модуль и перенесен в features. 

9. /features - модуль приложения, состоящий из одного или нескольких компонентов. Это могут быть как универсальные компоненты  
взятые из components и "склеенные" в одном контейнере, так и персональные компоненты созданные и размещенные в папке данного модуля. 

   Любая работа с Redux/Redux Toolkit, получение Selector's или использование Dispatch должна происходить в файлах, расположенных в модуле. 
   Создание и подключение slice также происходит внутри папки модуля. 

    Пример: 

    - /features 
        - /Book 
            - /components - специфические для модуля компоненты 
                - /Book.tsx - специфический для модуля компонент 
              Наличие папки components внутри модуля опционально,  
              при желании все компоненты могут размещать в корне модуля. 
        - bookSlice.ts - слайс. Структурная единица Redux Tookit. 
        Содержит в себе всю redux-логику модуля.        

      Слайсов в одном модуле может быть несколько для более 
      удобной декомпозиции
        - index.tsx 

      Входная точка, в которой можно получить дефолтный экспорт для  
      подключения модуля. 

### Eng

## The technology stack used:

 - React 
 - Redux 
 - Redux Toolkit 
 - Typescript 
 - Next JS 
 - CSS Modules + SCSS 
 - Jest 

## Initial installation and launch:

After cloning the repository, you must **mandatory ** to execute the command, for successful operation of the pre-commit hook
```bash
npm run prepare
```

Starting the server in development mode:
```bash
npm run dev
```

Building a project:
```bash
npm run build
```

Getting static HTML files of the project:
```bash
npm run export
```

Starting syntax checking via ESLint:
```bash
npm run lint
```
with the fix:
```bash
npm run lint:fix
```

Starting rule-based code formatting via prettier:

```bash
npm run format
```



### Project Structure

1. The /pages folder contains the files of the web application pages. File name/path to the file given
folder nesting = the resulting site url after the build.

- _app.tsx is the root file where all global styles, store, etc. are connected.
- index. tsx file of the project's root page /
- _document is used by the next library to extend the <html> and <body>tags
- 404 and other error codes are used to display the stub/page of the corresponding error code

Any nesting required for generating the target url on the site is allowed in this folder.

2. The /public folder contains:
- /images - images (all images are strictly in this folder according to the recommendations of Next JS)
- /fonts - fonts
- /locales - dictionaries for working with multilingual libraries
- any other data necessary for the project, but not the code

3. /service - various services for working with the API, sending fetch requests, etc.
Any reasonable nesting of folders is available.

4. /store-the folder is used to connect the store and store custom / global hooks.
It is possible to expand the file structure for hooks if necessary.

5. /styles - a folder for storing global styles and global variables. Only scss files.
- include stores all global style files, which are subsequently connected and assembled in the template.scss file

6. /type - d. ts files for typing JS libraries/modules that do not have their
own typings. Before describing this type, try
install typing via npm i @types/library name_

- custom files of types related to the created components & features. The main condition for placing a file of types in
the directory is the need to use the interface / type in several different places of the project, in different components.
In cases where the created type is required by only one component, it is placed directly in the code of this component.

7. /utils - auxiliary functions that can be used throughout the
project. Non-global functions must be stored in the application location.

8. /components - global reused parts of the application.
   Non-global components must be stored in the application location, most often in features.

   A folder with its name in PascalCase is created for each component. Code
   The component is described in a file with the same name ExampleComponent. tsx, an index file is also created.ts in
   where it is necessary to define the default / normal export, type export, any exports necessary for direct access
   to the component outside the folder.

   This folder can contain styles specific to the hooks component, auxiliary
   functions, etc.

   This folder uses an infinite tree structure. Any of the components can have
   child components, if necessary, but the expansion of subfolders should be minimal. If
   multiple nesting or several different folders appear in the component. this is an indication that this component
   it claims a folder in features, and its individual reused pieces of code can be left in their own
   a folder in components or also moved to features along with its parent.

   In universal components, only built-in react hooks (useState, useContext, etc.) are used for storing or working with the state.
   If it is necessary to work with Redux and the global state, the component should be turned into a module and moved to features.

9. /features - an application module consisting of one or more components. These can be either universal components
taken from components and "glued" in one container, or personal components created and placed in the folder of this module.

   Any work with Redux / Redux Toolkit, getting a Selector's or using Dispatch should occur in files located in the module.
   The creation and connection of slice also takes place inside the module folder.

    Example:

    - /features 
            - /Book 
                - /components - module-specific components
                    - /Book.tsx - module-specific component
    The presence of the components folder inside the module is optional,
    if desired, all components can be placed in the root of the module.
            - bookSlice.ts - slice. A structural unit of the Redux Toolkit.
    It contains all the redux logic of the module.     

      There can be several slices in one module for more
      convenient decomposition
    - index.tsx
    The input point at which you can get the default export for
    connecting the module.
 
 
 

 
