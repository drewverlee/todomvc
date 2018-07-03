// Compiled by ClojureScript 1.10.238 {}
goog.provide('todomvc.subs');
goog.require('cljs.core');
goog.require('re_posh.core');
re_posh.core.reg_sub.call(null,new cljs.core.Keyword("todomvc.subs","create-todo-form-id","todomvc.subs/create-todo-form-id",-197435414),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?id","?id",928433279,null),new cljs.core.Symbol(null,".",".",1975675962,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?id","?id",928433279,null),new cljs.core.Keyword("app","type","app/type",1175537581),new cljs.core.Keyword("type","create-todo-form","type/create-todo-form",-1005495771)], null)], null)], null);
}));
re_posh.core.reg_sub.call(null,new cljs.core.Keyword("todomvc.subs","create-todo-form","todomvc.subs/create-todo-form",-1365986454),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("todomvc.subs","create-todo-form-id","todomvc.subs/create-todo-form-id",-197435414)], null),(function (id,_){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pull","pull",-860544805),new cljs.core.Keyword(null,"pattern","pattern",242135423),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("create-todo-form","title","create-todo-form/title",-1486760831)], null),new cljs.core.Keyword(null,"id","id",-1388402092),id], null);
}));
re_posh.core.reg_sub.call(null,new cljs.core.Keyword("todomvc.subs","task-ids","todomvc.subs/task-ids",1291080050),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?tid","?tid",-69626177,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?tid","?tid",-69626177,null),new cljs.core.Keyword("app","type","app/type",1175537581),new cljs.core.Keyword("type","task","type/task",-1539067719)], null)], null)], null);
}));
re_posh.core.reg_sub.call(null,new cljs.core.Keyword("todomvc.subs","task","todomvc.subs/task",448796172),(function (_,p__25731){
var vec__25732 = p__25731;
var ___$1 = cljs.core.nth.call(null,vec__25732,(0),null);
var id = cljs.core.nth.call(null,vec__25732,(1),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pull","pull",-860544805),new cljs.core.Keyword(null,"pattern","pattern",242135423),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("task","done?","task/done?",-1853689835),new cljs.core.Keyword("task","title","task/title",628775788)], null),new cljs.core.Keyword(null,"id","id",-1388402092),id], null);
}));

//# sourceMappingURL=subs.js.map?rel=1530661632726
