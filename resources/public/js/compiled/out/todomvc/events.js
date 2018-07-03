// Compiled by ClojureScript 1.10.238 {}
goog.provide('todomvc.events');
goog.require('cljs.core');
goog.require('re_posh.core');
goog.require('todomvc.db');
re_posh.core.reg_event_ds.call(null,new cljs.core.Keyword("todomvc.events","initialize-db","todomvc.events/initialize-db",-1124970039),(function (_,___$1){
return todomvc.db.initial_db;
}));
re_posh.core.reg_event_ds.call(null,new cljs.core.Keyword("todomvc.events","set-task-status","todomvc.events/set-task-status",233835432),(function (_,p__25717){
var vec__25718 = p__25717;
var ___$1 = cljs.core.nth.call(null,vec__25718,(0),null);
var id = cljs.core.nth.call(null,vec__25718,(1),null);
var status = cljs.core.nth.call(null,vec__25718,(2),null);
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),id,new cljs.core.Keyword("task","done?","task/done?",-1853689835),status], null)], null);
}));
re_posh.core.reg_event_ds.call(null,new cljs.core.Keyword("todomvc.events","set-todo-form-title","todomvc.events/set-todo-form-title",-1848231498),(function (_,p__25721){
var vec__25722 = p__25721;
var ___$1 = cljs.core.nth.call(null,vec__25722,(0),null);
var id = cljs.core.nth.call(null,vec__25722,(1),null);
var value = cljs.core.nth.call(null,vec__25722,(2),null);
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),id,new cljs.core.Keyword("create-todo-form","title","create-todo-form/title",-1486760831),value], null)], null);
}));
re_posh.core.reg_event_ds.call(null,new cljs.core.Keyword("todomvc.events","create-todo","todomvc.events/create-todo",-303435807),(function (_,p__25725){
var vec__25726 = p__25725;
var ___$1 = cljs.core.nth.call(null,vec__25726,(0),null);
var id = cljs.core.nth.call(null,vec__25726,(1),null);
var value = cljs.core.nth.call(null,vec__25726,(2),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),id,new cljs.core.Keyword("create-todo-form","title","create-todo-form/title",-1486760831),""], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("db","id","db/id",-1388397098),(-1),new cljs.core.Keyword("app","type","app/type",1175537581),new cljs.core.Keyword("type","task","type/task",-1539067719),new cljs.core.Keyword("task","title","task/title",628775788),value,new cljs.core.Keyword("task","done?","task/done?",-1853689835),false], null)], null);
}));

//# sourceMappingURL=events.js.map?rel=1530661632711
