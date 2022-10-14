// datastore.js
// import Vue from "vue"

import appPrototype from './../main';

import Datastore from 'nedb-promises'

const { app } = require('@electron/remote');

const basePath = app.getPath('userData');

// 创建一个表
const db = {
    todoItem: new Datastore({
        autoload: true,
        filename: basePath + '/nedb/todo-item'
    })
}


let timer = setTimeout(() => {
    if (!appPrototype || !appPrototype.config) return;
    // 挂载到vue上
    appPrototype && (appPrototype.config.globalProperties.$db = db);

    clearTimeout(timer);
}, 3000)

