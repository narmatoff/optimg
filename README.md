# OPTIMG - Оптимизатор картинок в "один клик".

__Поддерживаемые форматы: __
*jpg
*png
*gif
*svg

### Зависимости
Перед использованием необходимо установить [node-js](http://nodejs.org/)

### Подготовка

После установки node-js

#### 1. Установка gulp глобально:

__Если gulp уже установлен то необходимо удалить, `npm rm --global gulp`
что бы избежать конфликты с gulp-cli.__

```sh
$ npm install --global gulp-cli
```

#### 2. Инициализыция:

```sh
$ npm init
```

####  Install gulp in your project devDependencies:
#### 3. Установка gulp и плагинов.
```sh
$ npm install --save-dev gulp gulp-imagemin imagemin-gifsicle imagemin-jpegtran imagemin-optipng imagemin-svgo
```

#### 4. Создайте файл `gulpfile.js` в корне:

```js
var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var optipng = require('imagemin-optipng');
var jpegtran = require('imagemin-jpegtran');
var gifsicle = require('imagemin-gifsicle');
var svgo = require('imagemin-svgo');


gulp.task('default', () =>
    gulp.src('src/images/**/*')
    .pipe(imagemin(
    	{ progressive: true },
			[
				imagemin.gifsicle(), 
				imagemin.jpegtran(), 
				imagemin.optipng(), 
				imagemin.svgo()
			]
    	))
    .pipe(gulp.dest('dist/images'))
);
```
#### 5. Поместите в папку src/images ваши картинки. Помещать можно папкой с поддиректориями и сторонними файлами(не картинками, в таком случае они будут перезалиты без изменений).

#### 6. Запустите gulp:

```sh
$ gulp
```

__После окончания задачи, результаты будут скопированы в папку dist/images полностью повторяя структуру исходной папки с картинками. __

## И что же дальше?

__Можно запустить другую задачу с другими картинками, для этого надо почистить папки `dist/images` и `src/images` и повторить команду `gulp` __