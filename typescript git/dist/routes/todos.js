"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
//1)
//what is type casting
//Type Casting is the process where we override the
// type of a variable so that it satisfies the TypeScript Compiler for the time being
//Example -: const x: Array<any> = [10, 15, 20, 25, 30];
//const y: Array<number> = x as Array<number>; 
//dyan se dekho x array any hai per jab hmne y mein pa kia to hmne as array number kia
//kyuki hme pehle se pta hai ki us array mein number he hongay otherwise error hoga
//2)as we have input(typescript files) and output(javascript files) are together , we only need to work in typescript files and run nodejs 
//on javascript files ,so to makr things clean we seperated input and output files in diffrent folder
//we solve this problem by converging all output files to dist folder, make a dist folder and go to config.json
// "outDir": "./dist",    do this
//make all input typescript files to src folder and then go to config.json and "rootDir": "./src",
//3) at last go to package.json and "start":"node ./dist/app.js" 
const router = (0, express_1.Router)();
let todos = [];
router.get('/', (req, res, next) => {
    res.status(200).json({ todos: todos });
});
router.post('/todo', (req, res, next) => {
    const body = req.body;
    const newTodo = {
        id: new Date().toISOString(),
        text: body.text
    };
    todos.push(newTodo);
    res.status(201).json({ message: 'Added Todo', todo: newTodo, todos: todos });
});
router.put('/todo/:todoId', (req, res, next) => {
    const params = req.params;
    const tid = params.todoId;
    const body = req.body;
    const todoIndex = todos.findIndex((todoItem) => todoItem.id === tid);
    if (todoIndex >= 0) {
        todos[todoIndex] = { id: todos[todoIndex].id, text: body.text };
        return res.status(200).json({ message: 'Updated todo', todos: todos });
    }
    res.status(404).json({ message: 'Could not find todo for this id.' });
});
router.delete('/todo/:todoId', (req, res, next) => {
    const params = req.params;
    todos = todos.filter((todoItem) => todoItem.id !== params.todoId);
    res.status(200).json({ message: 'Deleted todo', todos: todos });
});
exports.default = router;
