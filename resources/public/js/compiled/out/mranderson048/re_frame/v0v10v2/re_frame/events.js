// Compiled by ClojureScript 1.10.238 {}
goog.provide('mranderson048.re_frame.v0v10v2.re_frame.events');
goog.require('cljs.core');
goog.require('mranderson048.re_frame.v0v10v2.re_frame.db');
goog.require('mranderson048.re_frame.v0v10v2.re_frame.utils');
goog.require('mranderson048.re_frame.v0v10v2.re_frame.interop');
goog.require('mranderson048.re_frame.v0v10v2.re_frame.registrar');
goog.require('mranderson048.re_frame.v0v10v2.re_frame.loggers');
goog.require('mranderson048.re_frame.v0v10v2.re_frame.interceptor');
goog.require('mranderson048.re_frame.v0v10v2.re_frame.trace');
mranderson048.re_frame.v0v10v2.re_frame.events.kind = new cljs.core.Keyword(null,"event","event",301435442);
if(cljs.core.truth_(mranderson048.re_frame.v0v10v2.re_frame.registrar.kinds.call(null,mranderson048.re_frame.v0v10v2.re_frame.events.kind))){
} else {
throw (new Error("Assert failed: (mranderson048.re-frame.v0v10v2.re-frame.registrar/kinds kind)"));
}
/**
 * `interceptors` might have nested collections, and contain nil elements.
 *   return a flat collection, with all nils removed.
 *   This function is 9/10 about giving good error messages.
 */
mranderson048.re_frame.v0v10v2.re_frame.events.flatten_and_remove_nils = (function mranderson048$re_frame$v0v10v2$re_frame$events$flatten_and_remove_nils(id,interceptors){
var make_chain = (function (p1__29388_SHARP_){
return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,p1__29388_SHARP_));
});
if(!(mranderson048.re_frame.v0v10v2.re_frame.interop.debug_enabled_QMARK_)){
return make_chain.call(null,interceptors);
} else {
if(cljs.core.coll_QMARK_.call(null,interceptors)){
} else {
mranderson048.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: when registering ",id,", expected a collection of interceptors, got: ",interceptors);
}

var chain = make_chain.call(null,interceptors);
if(cljs.core.empty_QMARK_.call(null,chain)){
mranderson048.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: when registering ",id,", given an empty interceptor chain");
} else {
}

var temp__4657__auto___29389 = cljs.core.first.call(null,cljs.core.remove.call(null,mranderson048.re_frame.v0v10v2.re_frame.interceptor.interceptor_QMARK_,chain));
if(cljs.core.truth_(temp__4657__auto___29389)){
var not_i_29390 = temp__4657__auto___29389;
if(cljs.core.fn_QMARK_.call(null,not_i_29390)){
mranderson048.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: when registering ",id,", got a function instead of an interceptor. Did you provide old style middleware by mistake? Got: ",not_i_29390);
} else {
mranderson048.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: when registering ",id,", expected interceptors, but got: ",not_i_29390);
}
} else {
}

return chain;
}
});
/**
 * Associate the given event `id` with the given collection of `interceptors`.
 * 
 * `interceptors` may contain nested collections and there may be nils
 * at any level,so process this structure into a simple, nil-less vector
 * before registration.
 * 
 * Typically, an `event handler` will be at the end of the chain (wrapped
 * in an interceptor).
 */
mranderson048.re_frame.v0v10v2.re_frame.events.register = (function mranderson048$re_frame$v0v10v2$re_frame$events$register(id,interceptors){
return mranderson048.re_frame.v0v10v2.re_frame.registrar.register_handler.call(null,mranderson048.re_frame.v0v10v2.re_frame.events.kind,id,mranderson048.re_frame.v0v10v2.re_frame.events.flatten_and_remove_nils.call(null,id,interceptors));
});
mranderson048.re_frame.v0v10v2.re_frame.events._STAR_handling_STAR_ = null;
/**
 * Given an event vector `event-v`, look up the associated interceptor chain, and execute it.
 */
mranderson048.re_frame.v0v10v2.re_frame.events.handle = (function mranderson048$re_frame$v0v10v2$re_frame$events$handle(event_v){
var event_id = mranderson048.re_frame.v0v10v2.re_frame.utils.first_in_vector.call(null,event_v);
var temp__4655__auto__ = mranderson048.re_frame.v0v10v2.re_frame.registrar.get_handler.call(null,mranderson048.re_frame.v0v10v2.re_frame.events.kind,event_id,true);
if(cljs.core.truth_(temp__4655__auto__)){
var interceptors = temp__4655__auto__;
if(cljs.core.truth_(mranderson048.re_frame.v0v10v2.re_frame.events._STAR_handling_STAR_)){
return mranderson048.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: while handling \"",mranderson048.re_frame.v0v10v2.re_frame.events._STAR_handling_STAR_,"\", dispatch-sync was called for \"",event_v,"\". You can't call dispatch-sync within an event handler.");
} else {
var _STAR_handling_STAR_29391 = mranderson048.re_frame.v0v10v2.re_frame.events._STAR_handling_STAR_;
mranderson048.re_frame.v0v10v2.re_frame.events._STAR_handling_STAR_ = event_v;

try{if(mranderson048.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_29392 = mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_;
mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = mranderson048.re_frame.v0v10v2.re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),event_id,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),mranderson048.re_frame.v0v10v2.re_frame.events.kind,new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event","event",301435442),event_v], null)], null));

try{try{return mranderson048.re_frame.v0v10v2.re_frame.interceptor.execute.call(null,event_v,interceptors);
}finally {if(mranderson048.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__29352__auto___29405 = mranderson048.re_frame.v0v10v2.re_frame.interop.now.call(null);
var duration__29353__auto___29406 = (end__29352__auto___29405 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_));
var seq__29393_29407 = cljs.core.seq.call(null,cljs.core.deref.call(null,mranderson048.re_frame.v0v10v2.re_frame.trace.trace_cbs));
var chunk__29394_29408 = null;
var count__29395_29409 = (0);
var i__29396_29410 = (0);
while(true){
if((i__29396_29410 < count__29395_29409)){
var vec__29397_29411 = cljs.core._nth.call(null,chunk__29394_29408,i__29396_29410);
var k__29354__auto___29412 = cljs.core.nth.call(null,vec__29397_29411,(0),null);
var cb__29355__auto___29413 = cljs.core.nth.call(null,vec__29397_29411,(1),null);
try{cb__29355__auto___29413.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__29353__auto___29406,new cljs.core.Keyword(null,"end","end",-268185958),mranderson048.re_frame.v0v10v2.re_frame.interop.now.call(null))], null));
}catch (e29400){if((e29400 instanceof java.lang.Exception)){
var e__29356__auto___29414 = e29400;
mranderson048.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__29354__auto___29412,"while storing",mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,e__29356__auto___29414);
} else {
throw e29400;

}
}

var G__29415 = seq__29393_29407;
var G__29416 = chunk__29394_29408;
var G__29417 = count__29395_29409;
var G__29418 = (i__29396_29410 + (1));
seq__29393_29407 = G__29415;
chunk__29394_29408 = G__29416;
count__29395_29409 = G__29417;
i__29396_29410 = G__29418;
continue;
} else {
var temp__4657__auto___29419 = cljs.core.seq.call(null,seq__29393_29407);
if(temp__4657__auto___29419){
var seq__29393_29420__$1 = temp__4657__auto___29419;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29393_29420__$1)){
var c__4319__auto___29421 = cljs.core.chunk_first.call(null,seq__29393_29420__$1);
var G__29422 = cljs.core.chunk_rest.call(null,seq__29393_29420__$1);
var G__29423 = c__4319__auto___29421;
var G__29424 = cljs.core.count.call(null,c__4319__auto___29421);
var G__29425 = (0);
seq__29393_29407 = G__29422;
chunk__29394_29408 = G__29423;
count__29395_29409 = G__29424;
i__29396_29410 = G__29425;
continue;
} else {
var vec__29401_29426 = cljs.core.first.call(null,seq__29393_29420__$1);
var k__29354__auto___29427 = cljs.core.nth.call(null,vec__29401_29426,(0),null);
var cb__29355__auto___29428 = cljs.core.nth.call(null,vec__29401_29426,(1),null);
try{cb__29355__auto___29428.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__29353__auto___29406,new cljs.core.Keyword(null,"end","end",-268185958),mranderson048.re_frame.v0v10v2.re_frame.interop.now.call(null))], null));
}catch (e29404){if((e29404 instanceof java.lang.Exception)){
var e__29356__auto___29429 = e29404;
mranderson048.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__29354__auto___29427,"while storing",mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,e__29356__auto___29429);
} else {
throw e29404;

}
}

var G__29430 = cljs.core.next.call(null,seq__29393_29420__$1);
var G__29431 = null;
var G__29432 = (0);
var G__29433 = (0);
seq__29393_29407 = G__29430;
chunk__29394_29408 = G__29431;
count__29395_29409 = G__29432;
i__29396_29410 = G__29433;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_29392;
}} else {
return mranderson048.re_frame.v0v10v2.re_frame.interceptor.execute.call(null,event_v,interceptors);
}
}finally {mranderson048.re_frame.v0v10v2.re_frame.events._STAR_handling_STAR_ = _STAR_handling_STAR_29391;
}}
} else {
return null;
}
});

//# sourceMappingURL=events.js.map?rel=1530661640363
