// Compiled by ClojureScript 1.10.238 {}
goog.provide('todomvc.views');
goog.require('cljs.core');
goog.require('re_posh.core');
goog.require('todomvc.subs');
goog.require('todomvc.events');
todomvc.views.render_create_todo_form = (function todomvc$views$render_create_todo_form(form){
var map__25738 = form;
var map__25738__$1 = ((((!((map__25738 == null)))?(((((map__25738.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25738.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25738):map__25738);
var id = cljs.core.get.call(null,map__25738__$1,new cljs.core.Keyword("db","id","db/id",-1388397098));
var title = cljs.core.get.call(null,map__25738__$1,new cljs.core.Keyword("create-todo-form","title","create-todo-form/title",-1486760831));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.create-tast-panel","div.create-tast-panel",-1529080379),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),title,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (map__25738,map__25738__$1,id,title){
return (function (p1__25737_SHARP_){
return re_posh.core.dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("todomvc.events","set-todo-form-title","todomvc.events/set-todo-form-title",-1848231498),id,p1__25737_SHARP_.target.value], null));
});})(map__25738,map__25738__$1,id,title))
], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.create-task-button","button.create-task-button",-226982486),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__25738,map__25738__$1,id,title){
return (function (){
return re_posh.core.dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("todomvc.events","create-todo","todomvc.events/create-todo",-303435807),id,title], null));
});})(map__25738,map__25738__$1,id,title))
], null),"Create"], null)], null);
});
todomvc.views.create_todo_form = (function todomvc$views$create_todo_form(){
var form = re_posh.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("todomvc.subs","create-todo-form","todomvc.subs/create-todo-form",-1365986454)], null));
return ((function (form){
return (function (){
return todomvc.views.render_create_todo_form.call(null,cljs.core.deref.call(null,form));
});
;})(form))
});
todomvc.views.render_task_list_item = (function todomvc$views$render_task_list_item(task){
var map__25740 = task;
var map__25740__$1 = ((((!((map__25740 == null)))?(((((map__25740.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25740.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25740):map__25740);
var id = cljs.core.get.call(null,map__25740__$1,new cljs.core.Keyword("db","id","db/id",-1388397098));
var done_QMARK_ = cljs.core.get.call(null,map__25740__$1,new cljs.core.Keyword("task","done?","task/done?",-1853689835));
var title = cljs.core.get.call(null,map__25740__$1,new cljs.core.Keyword("task","title","task/title",628775788));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.task-list-item","div.task-list-item",-13662087),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"ckecked","ckecked",-981315709),(cljs.core.truth_(done_QMARK_)?"true":null),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (map__25740,map__25740__$1,id,done_QMARK_,title){
return (function (){
return re_posh.core.dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("todomvc.events","set-task-status","todomvc.events/set-task-status",233835432),id,cljs.core.not.call(null,done_QMARK_)], null));
});})(map__25740,map__25740__$1,id,done_QMARK_,title))
], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),title], null)], null);
});
todomvc.views.task_list_item = (function todomvc$views$task_list_item(id){
var task = re_posh.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("todomvc.subs","task","todomvc.subs/task",448796172),id], null));
return ((function (task){
return (function (){
return todomvc.views.render_task_list_item.call(null,cljs.core.deref.call(null,task));
});
;})(task))
});
todomvc.views.task_list = (function todomvc$views$task_list(){
var task_ids = re_posh.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("todomvc.subs","task-ids","todomvc.subs/task-ids",1291080050)], null));
return ((function (task_ids){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.task-list","div.task-list",1871985110),(function (){var iter__4292__auto__ = ((function (task_ids){
return (function todomvc$views$task_list_$_iter__25742(s__25743){
return (new cljs.core.LazySeq(null,((function (task_ids){
return (function (){
var s__25743__$1 = s__25743;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__25743__$1);
if(temp__4657__auto__){
var s__25743__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__25743__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__25743__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__25745 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__25744 = (0);
while(true){
if((i__25744 < size__4291__auto__)){
var task_id = cljs.core._nth.call(null,c__4290__auto__,i__25744);
cljs.core.chunk_append.call(null,b__25745,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [todomvc.views.task_list_item,task_id], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),task_id], null)));

var G__25746 = (i__25744 + (1));
i__25744 = G__25746;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25745),todomvc$views$task_list_$_iter__25742.call(null,cljs.core.chunk_rest.call(null,s__25743__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25745),null);
}
} else {
var task_id = cljs.core.first.call(null,s__25743__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [todomvc.views.task_list_item,task_id], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),task_id], null)),todomvc$views$task_list_$_iter__25742.call(null,cljs.core.rest.call(null,s__25743__$2)));
}
} else {
return null;
}
break;
}
});})(task_ids))
,null,null));
});})(task_ids))
;
return iter__4292__auto__.call(null,cljs.core.deref.call(null,task_ids));
})()], null);
});
;})(task_ids))
});
todomvc.views.main_panel = (function todomvc$views$main_panel(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.main-panel","div.main-panel",-705688759),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"TodoMVC"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [todomvc.views.create_todo_form], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [todomvc.views.task_list], null)], null);
});

//# sourceMappingURL=views.js.map?rel=1530661632762
