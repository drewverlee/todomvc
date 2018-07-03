// Compiled by ClojureScript 1.10.238 {}
goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.trace');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.fx.kind))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
/**
 * Register the given effect `handler` for the given `id`.
 * 
 *   `id` is keyword, often namespaced.
 *   `handler` is a side-effecting function which takes a single argument and whose return
 *   value is ignored.
 * 
 *   Example Use
 *   -----------
 * 
 *   First, registration ... associate `:effect2` with a handler.
 * 
 *   (reg-fx
 *   :effect2
 *   (fn [value]
 *      ... do something side-effect-y))
 * 
 *   Then, later, if an event handler were to return this effects map ...
 * 
 *   {...
 * :effect2  [1 2]}
 * 
 * ... then the `handler` `fn` we registered previously, using `reg-fx`, will be
 * called with an argument of `[1 2]`.
 */
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler.call(null,re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_25360 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));

try{try{var seq__25361 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__25362 = null;
var count__25363 = (0);
var i__25364 = (0);
while(true){
if((i__25364 < count__25363)){
var vec__25365 = cljs.core._nth.call(null,chunk__25362,i__25364);
var effect_key = cljs.core.nth.call(null,vec__25365,(0),null);
var effect_value = cljs.core.nth.call(null,vec__25365,(1),null);
var temp__4655__auto___25381 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___25381)){
var effect_fn_25382 = temp__4655__auto___25381;
effect_fn_25382.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__25383 = seq__25361;
var G__25384 = chunk__25362;
var G__25385 = count__25363;
var G__25386 = (i__25364 + (1));
seq__25361 = G__25383;
chunk__25362 = G__25384;
count__25363 = G__25385;
i__25364 = G__25386;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__25361);
if(temp__4657__auto__){
var seq__25361__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25361__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__25361__$1);
var G__25387 = cljs.core.chunk_rest.call(null,seq__25361__$1);
var G__25388 = c__4319__auto__;
var G__25389 = cljs.core.count.call(null,c__4319__auto__);
var G__25390 = (0);
seq__25361 = G__25387;
chunk__25362 = G__25388;
count__25363 = G__25389;
i__25364 = G__25390;
continue;
} else {
var vec__25368 = cljs.core.first.call(null,seq__25361__$1);
var effect_key = cljs.core.nth.call(null,vec__25368,(0),null);
var effect_value = cljs.core.nth.call(null,vec__25368,(1),null);
var temp__4655__auto___25391 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___25391)){
var effect_fn_25392 = temp__4655__auto___25391;
effect_fn_25392.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__25393 = cljs.core.next.call(null,seq__25361__$1);
var G__25394 = null;
var G__25395 = (0);
var G__25396 = (0);
seq__25361 = G__25393;
chunk__25362 = G__25394;
count__25363 = G__25395;
i__25364 = G__25396;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__25200__auto___25397 = re_frame.interop.now.call(null);
var duration__25201__auto___25398 = (end__25200__auto___25397 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.call(null,re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__25201__auto___25398,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null)));

re_frame.trace.run_tracing_callbacks_BANG_.call(null,end__25200__auto___25397);
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_25360;
}} else {
var seq__25371 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__25372 = null;
var count__25373 = (0);
var i__25374 = (0);
while(true){
if((i__25374 < count__25373)){
var vec__25375 = cljs.core._nth.call(null,chunk__25372,i__25374);
var effect_key = cljs.core.nth.call(null,vec__25375,(0),null);
var effect_value = cljs.core.nth.call(null,vec__25375,(1),null);
var temp__4655__auto___25399 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___25399)){
var effect_fn_25400 = temp__4655__auto___25399;
effect_fn_25400.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__25401 = seq__25371;
var G__25402 = chunk__25372;
var G__25403 = count__25373;
var G__25404 = (i__25374 + (1));
seq__25371 = G__25401;
chunk__25372 = G__25402;
count__25373 = G__25403;
i__25374 = G__25404;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__25371);
if(temp__4657__auto__){
var seq__25371__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25371__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__25371__$1);
var G__25405 = cljs.core.chunk_rest.call(null,seq__25371__$1);
var G__25406 = c__4319__auto__;
var G__25407 = cljs.core.count.call(null,c__4319__auto__);
var G__25408 = (0);
seq__25371 = G__25405;
chunk__25372 = G__25406;
count__25373 = G__25407;
i__25374 = G__25408;
continue;
} else {
var vec__25378 = cljs.core.first.call(null,seq__25371__$1);
var effect_key = cljs.core.nth.call(null,vec__25378,(0),null);
var effect_value = cljs.core.nth.call(null,vec__25378,(1),null);
var temp__4655__auto___25409 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___25409)){
var effect_fn_25410 = temp__4655__auto___25409;
effect_fn_25410.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__25411 = cljs.core.next.call(null,seq__25371__$1);
var G__25412 = null;
var G__25413 = (0);
var G__25414 = (0);
seq__25371 = G__25411;
chunk__25372 = G__25412;
count__25373 = G__25413;
i__25374 = G__25414;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__25415 = cljs.core.seq.call(null,value);
var chunk__25416 = null;
var count__25417 = (0);
var i__25418 = (0);
while(true){
if((i__25418 < count__25417)){
var map__25419 = cljs.core._nth.call(null,chunk__25416,i__25418);
var map__25419__$1 = ((((!((map__25419 == null)))?(((((map__25419.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25419.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25419):map__25419);
var effect = map__25419__$1;
var ms = cljs.core.get.call(null,map__25419__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__25419__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number')))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__25415,chunk__25416,count__25417,i__25418,map__25419,map__25419__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__25415,chunk__25416,count__25417,i__25418,map__25419,map__25419__$1,effect,ms,dispatch))
,ms);
}


var G__25423 = seq__25415;
var G__25424 = chunk__25416;
var G__25425 = count__25417;
var G__25426 = (i__25418 + (1));
seq__25415 = G__25423;
chunk__25416 = G__25424;
count__25417 = G__25425;
i__25418 = G__25426;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__25415);
if(temp__4657__auto__){
var seq__25415__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25415__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__25415__$1);
var G__25427 = cljs.core.chunk_rest.call(null,seq__25415__$1);
var G__25428 = c__4319__auto__;
var G__25429 = cljs.core.count.call(null,c__4319__auto__);
var G__25430 = (0);
seq__25415 = G__25427;
chunk__25416 = G__25428;
count__25417 = G__25429;
i__25418 = G__25430;
continue;
} else {
var map__25421 = cljs.core.first.call(null,seq__25415__$1);
var map__25421__$1 = ((((!((map__25421 == null)))?(((((map__25421.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25421.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25421):map__25421);
var effect = map__25421__$1;
var ms = cljs.core.get.call(null,map__25421__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__25421__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number')))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__25415,chunk__25416,count__25417,i__25418,map__25421,map__25421__$1,effect,ms,dispatch,seq__25415__$1,temp__4657__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__25415,chunk__25416,count__25417,i__25418,map__25421,map__25421__$1,effect,ms,dispatch,seq__25415__$1,temp__4657__auto__))
,ms);
}


var G__25431 = cljs.core.next.call(null,seq__25415__$1);
var G__25432 = null;
var G__25433 = (0);
var G__25434 = (0);
seq__25415 = G__25431;
chunk__25416 = G__25432;
count__25417 = G__25433;
i__25418 = G__25434;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if(!(cljs.core.vector_QMARK_.call(null,value))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value);
} else {
return re_frame.router.dispatch.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if(!(cljs.core.sequential_QMARK_.call(null,value))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-n value. Expected a collection, got got:",value);
} else {
var seq__25435 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__25436 = null;
var count__25437 = (0);
var i__25438 = (0);
while(true){
if((i__25438 < count__25437)){
var event = cljs.core._nth.call(null,chunk__25436,i__25438);
re_frame.router.dispatch.call(null,event);


var G__25439 = seq__25435;
var G__25440 = chunk__25436;
var G__25441 = count__25437;
var G__25442 = (i__25438 + (1));
seq__25435 = G__25439;
chunk__25436 = G__25440;
count__25437 = G__25441;
i__25438 = G__25442;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__25435);
if(temp__4657__auto__){
var seq__25435__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25435__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__25435__$1);
var G__25443 = cljs.core.chunk_rest.call(null,seq__25435__$1);
var G__25444 = c__4319__auto__;
var G__25445 = cljs.core.count.call(null,c__4319__auto__);
var G__25446 = (0);
seq__25435 = G__25443;
chunk__25436 = G__25444;
count__25437 = G__25445;
i__25438 = G__25446;
continue;
} else {
var event = cljs.core.first.call(null,seq__25435__$1);
re_frame.router.dispatch.call(null,event);


var G__25447 = cljs.core.next.call(null,seq__25435__$1);
var G__25448 = null;
var G__25449 = (0);
var G__25450 = (0);
seq__25435 = G__25447;
chunk__25436 = G__25448;
count__25437 = G__25449;
i__25438 = G__25450;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.call(null,re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_.call(null,value)){
var seq__25451 = cljs.core.seq.call(null,value);
var chunk__25452 = null;
var count__25453 = (0);
var i__25454 = (0);
while(true){
if((i__25454 < count__25453)){
var event = cljs.core._nth.call(null,chunk__25452,i__25454);
clear_event.call(null,event);


var G__25455 = seq__25451;
var G__25456 = chunk__25452;
var G__25457 = count__25453;
var G__25458 = (i__25454 + (1));
seq__25451 = G__25455;
chunk__25452 = G__25456;
count__25453 = G__25457;
i__25454 = G__25458;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__25451);
if(temp__4657__auto__){
var seq__25451__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25451__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__25451__$1);
var G__25459 = cljs.core.chunk_rest.call(null,seq__25451__$1);
var G__25460 = c__4319__auto__;
var G__25461 = cljs.core.count.call(null,c__4319__auto__);
var G__25462 = (0);
seq__25451 = G__25459;
chunk__25452 = G__25460;
count__25453 = G__25461;
i__25454 = G__25462;
continue;
} else {
var event = cljs.core.first.call(null,seq__25451__$1);
clear_event.call(null,event);


var G__25463 = cljs.core.next.call(null,seq__25451__$1);
var G__25464 = null;
var G__25465 = (0);
var G__25466 = (0);
seq__25451 = G__25463;
chunk__25452 = G__25464;
count__25453 = G__25465;
i__25454 = G__25466;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if(!((cljs.core.deref.call(null,re_frame.db.app_db) === value))){
return cljs.core.reset_BANG_.call(null,re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=fx.js.map?rel=1530661632031
