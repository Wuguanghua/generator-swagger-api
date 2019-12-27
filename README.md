# generator-swagger-api-tool [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Coverage percentage][coveralls-image]][coveralls-url]
> 

## 安装依赖

First, install [Yeoman](http://yeoman.io) and generator-swagger-api using [npm](https://www.npmjs.com/)

```bash
npm install -g yo
npm install -g generator-swagger-api
```

Then generate your new project:

```bash
yo swagger-api
```

## 介绍

- 支持 `js.ejs` 和 `ts.ejs` 两种模板文件，(推荐使用 ts.ejs);
- 可以自定义 `className`， `OutPutFile`;

## 如何使用

 1. 从服务端人员获得`xxx.yaml` 文件，导入[editor.swagger.io](http://editor.swagger.io/) 生成 `swagger.json` 文件；
 2. 命令行输入`yo swagger-api`，按照提示操作；
  

```bash
 yo swagger-api

     _-----_     ╭──────────────────────────╮
    |       |    │ Welcome to the beautiful │
    |--(o)--|    │   generator-swagger-api  │
   `---------´   │        generator!        │
    ( _´U`_ )    ╰──────────────────────────╯
    /___A___\   /
     |  ~  |     
   __'.___.'__   
 ´   `  |° ´ Y ` 

? 请输入生成器 className Api
? 请选择模板文件 ts.ejs
? 请输入输出文件名(没有文件后缀) api
? 请把 swagger.json 文件拖拽到这里 /Users/***/generators/swagger.json
   create api.ts
```


## 引用
- [swagger-js-codegen](https://github.com/wcandillon/swagger-js-codegen)
- [generator-swagger-2-ts](https://github.com/jadepeng/generator-swagger-2-ts)

## 了解 Yeoman

 Feel free to [learn more about Yeoman](http://yeoman.io/).

## License

ISC © [guanghua]()


[npm-image]: https://badge.fury.io/js/generator-swagger-api.svg
[npm-url]: https://npmjs.org/package/generator-swagger-api
[travis-image]: https://travis-ci.com//generator-swagger-api.svg?branch=master
[travis-url]: https://travis-ci.com//generator-swagger-api
[daviddm-image]: https://david-dm.org//generator-swagger-api.svg?theme=shields.io
[daviddm-url]: https://david-dm.org//generator-swagger-api
[coveralls-image]: https://coveralls.io/repos//generator-swagger-api/badge.svg
[coveralls-url]: https://coveralls.io/r//generator-swagger-api
