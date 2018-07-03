// Compiled by ClojureScript 1.10.238 {}
goog.provide('mranderson048.re_frame.v0v10v2.re_frame.fx');
goog.require('cljs.core');
goog.require('mranderson048.re_frame.v0v10v2.re_frame.router');
goog.require('mranderson048.re_frame.v0v10v2.re_frame.db');
goog.require('mranderson048.re_frame.v0v10v2.re_frame.interceptor');
goog.require('mranderson048.re_frame.v0v10v2.re_frame.interop');
goog.require('mranderson048.re_frame.v0v10v2.re_frame.events');
goog.require('mranderson048.re_frame.v0v10v2.re_frame.registrar');
goog.require('mranderson048.re_frame.v0v10v2.re_frame.loggers');
mranderson048.re_frame.v0v10v2.re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_(mranderson048.re_frame.v0v10v2.re_frame.registrar.kinds.call(null,mranderson048.re_frame.v0v10v2.re_frame.fx.kind))){
} else {
throw (new Error("Assert failed: (mranderson048.re-frame.v0v10v2.re-frame.registrar/kinds kind)"));
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
mranderson048.re_frame.v0v10v2.re_frame.fx.reg_fx = (function mranderson048$re_frame$v0v10v2$re_frame$fx$reg_fx(id,handler){
return mranderson048.re_frame.v0v10v2.re_frame.registrar.register_handler.call(null,mranderson048.re_frame.v0v10v2.re_frame.fx.kind,id,handler);
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
mranderson048.re_frame.v0v10v2.re_frame.fx.do_fx = mranderson048.re_frame.v0v10v2.re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function mranderson048$re_frame$v0v10v2$re_frame$fx$do_fx_after(context){
var seq__29798 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__29799 = null;
var count__29800 = (0);
var i__29801 = (0);
while(true){
if((i__29801 < count__29800)){
var vec__29802 = cljs.core._nth.call(null,chunk__29799,i__29801);
var effect_key = cljs.core.nth.call(null,vec__29802,(0),null);
var effect_value = cljs.core.nth.call(null,vec__29802,(1),null);
var temp__4655__auto___29808 = mranderson048.re_frame.v0v10v2.re_frame.registrar.get_handler.call(null,mranderson048.re_frame.v0v10v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___29808)){
var effect_fn_29809 = temp__4655__auto___29808;
effect_fn_29809.call(null,effect_value);
} else {
mranderson048.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect: \"",effect_key,"\". Ignoring.");
}


var G__29810 = seq__29798;
var G__29811 = chunk__29799;
var G__29812 = count__29800;
var G__29813 = (i__29801 + (1));
seq__29798 = G__29810;
chunk__29799 = G__29811;
count__29800 = G__29812;
i__29801 = G__29813;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__29798);
if(temp__4657__auto__){
var seq__29798__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29798__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__29798__$1);
var G__29814 = cljs.core.chunk_rest.call(null,seq__29798__$1);
var G__29815 = c__4319__auto__;
var G__29816 = cljs.core.count.call(null,c__4319__auto__);
var G__29817 = (0);
seq__29798 = G__29814;
chunk__29799 = G__29815;
count__29800 = G__29816;
i__29801 = G__29817;
continue;
} else {
var vec__29805 = cljs.core.first.call(null,seq__29798__$1);
var effect_key = cljs.core.nth.call(null,vec__29805,(0),null);
var effect_value = cljs.core.nth.call(null,vec__29805,(1),null);
var temp__4655__auto___29818 = mranderson048.re_frame.v0v10v2.re_frame.registrar.get_handler.call(null,mranderson048.re_frame.v0v10v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___29818)){
var effect_fn_29819 = temp__4655__auto___29818;
effect_fn_29819.call(null,effect_value);
} else {
mranderson048.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect: \"",effect_key,"\". Ignoring.");
}


var G__29820 = cljs.core.next.call(null,seq__29798__$1);
var G__29821 = null;
var G__29822 = (0);
var G__29823 = (0);
seq__29798 = G__29820;
chunk__29799 = G__29821;
count__29800 = G__29822;
i__29801 = G__29823;
continue;
}
} else {
return null;
}
}
break;
}
}));
mranderson048.re_frame.v0v10v2.re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__29824 = cljs.core.seq.call(null,value);
var chunk__29825 = null;
var count__29826 = (0);
var i__29827 = (0);
while(true){
if((i__29827 < count__29826)){
var map__29828 = cljs.core._nth.call(null,chunk__29825,i__29827);
var map__29828__$1 = ((((!((map__29828 == null)))?(((((map__29828.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29828.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29828):map__29828);
var effect = map__29828__$1;
var ms = cljs.core.get.call(null,map__29828__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__29828__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number')))){
mranderson048.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
mranderson048.re_frame.v0v10v2.re_frame.interop.set_timeout_BANG_.call(null,((function (seq__29824,chunk__29825,count__29826,i__29827,map__29828,map__29828__$1,effect,ms,dispatch){
return (function (){
return mranderson048.re_frame.v0v10v2.re_frame.router.dispatch.call(null,dispatch);
});})(seq__29824,chunk__29825,count__29826,i__29827,map__29828,map__29828__$1,effect,ms,dispatch))
,ms);
}


var G__29832 = seq__29824;
var G__29833 = chunk__29825;
var G__29834 = count__29826;
var G__29835 = (i__29827 + (1));
seq__29824 = G__29832;
chunk__29825 = G__29833;
count__29826 = G__29834;
i__29827 = G__29835;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__29824);
if(temp__4657__auto__){
var seq__29824__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29824__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__29824__$1);
var G__29836 = cljs.core.chunk_rest.call(null,seq__29824__$1);
var G__29837 = c__4319__auto__;
var G__29838 = cljs.core.count.call(null,c__4319__auto__);
var G__29839 = (0);
seq__29824 = G__29836;
chunk__29825 = G__29837;
count__29826 = G__29838;
i__29827 = G__29839;
continue;
} else {
var map__29830 = cljs.core.first.call(null,seq__29824__$1);
var map__29830__$1 = ((((!((map__29830 == null)))?(((((map__29830.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29830.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29830):map__29830);
var effect = map__29830__$1;
var ms = cljs.core.get.call(null,map__29830__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__29830__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number')))){
mranderson048.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
mranderson048.re_frame.v0v10v2.re_frame.interop.set_timeout_BANG_.call(null,((function (seq__29824,chunk__29825,count__29826,i__29827,map__29830,map__29830__$1,effect,ms,dispatch,seq__29824__$1,temp__4657__auto__){
return (function (){
return mranderson048.re_frame.v0v10v2.re_frame.router.dispatch.call(null,dispatch);
});})(seq__29824,chunk__29825,count__29826,i__29827,map__29830,map__29830__$1,effect,ms,dispatch,seq__29824__$1,temp__4657__auto__))
,ms);
}


var G__29840 = cljs.core.next.call(null,seq__29824__$1);
var G__29841 = null;
var G__29842 = (0);
var G__29843 = (0);
seq__29824 = G__29840;
chunk__29825 = G__29841;
count__29826 = G__29842;
i__29827 = G__29843;
continue;
}
} else {
return null;
}
}
break;
}
}));
mranderson048.re_frame.v0v10v2.re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if(!(cljs.core.vector_QMARK_.call(null,value))){
return mranderson048.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value);
} else {
return mranderson048.re_frame.v0v10v2.re_frame.router.dispatch.call(null,value);
}
}));
mranderson048.re_frame.v0v10v2.re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if(!(cljs.core.sequential_QMARK_.call(null,value))){
return mranderson048.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-n value. Expected a collection, got got:",value);
} else {
var seq__29844 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__29845 = null;
var count__29846 = (0);
var i__29847 = (0);
while(true){
if((i__29847 < count__29846)){
var event = cljs.core._nth.call(null,chunk__29845,i__29847);
mranderson048.re_frame.v0v10v2.re_frame.router.dispatch.call(null,event);


var G__29848 = seq__29844;
var G__29849 = chunk__29845;
var G__29850 = count__29846;
var G__29851 = (i__29847 + (1));
seq__29844 = G__29848;
chunk__29845 = G__29849;
count__29846 = G__29850;
i__29847 = G__29851;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__29844);
if(temp__4657__auto__){
var seq__29844__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29844__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__29844__$1);
var G__29852 = cljs.core.chunk_rest.call(null,seq__29844__$1);
var G__29853 = c__4319__auto__;
var G__29854 = cljs.core.count.call(null,c__4319__auto__);
var G__29855 = (0);
seq__29844 = G__29852;
chunk__29845 = G__29853;
count__29846 = G__29854;
i__29847 = G__29855;
continue;
} else {
var event = cljs.core.first.call(null,seq__29844__$1);
mranderson048.re_frame.v0v10v2.re_frame.router.dispatch.call(null,event);


var G__29856 = cljs.core.next.call(null,seq__29844__$1);
var G__29857 = null;
var G__29858 = (0);
var G__29859 = (0);
seq__29844 = G__29856;
chunk__29845 = G__29857;
count__29846 = G__29858;
i__29847 = G__29859;
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
mranderson048.re_frame.v0v10v2.re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.call(null,mranderson048.re_frame.v0v10v2.re_frame.registrar.clear_handlers,mranderson048.re_frame.v0v10v2.re_frame.events.kind);
if(cljs.core.sequential_QMARK_.call(null,value)){
var seq__29860 = cljs.core.seq.call(null,value);
var chunk__29861 = null;
var count__29862 = (0);
var i__29863 = (0);
while(true){
if((i__29863 < count__29862)){
var event = cljs.core._nth.call(null,chunk__29861,i__29863);
clear_event.call(null,event);


var G__29864 = seq__29860;
var G__29865 = chunk__29861;
var G__29866 = count__29862;
var G__29867 = (i__29863 + (1));
seq__29860 = G__29864;
chunk__29861 = G__29865;
count__29862 = G__29866;
i__29863 = G__29867;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__29860);
if(temp__4657__auto__){
var seq__29860__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29860__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__29860__$1);
var G__29868 = cljs.core.chunk_rest.call(null,seq__29860__$1);
var G__29869 = c__4319__auto__;
var G__29870 = cljs.core.count.call(null,c__4319__auto__);
var G__29871 = (0);
seq__29860 = G__29868;
chunk__29861 = G__29869;
count__29862 = G__29870;
i__29863 = G__29871;
continue;
} else {
var event = cljs.core.first.call(null,seq__29860__$1);
clear_event.call(null,event);


var G__29872 = cljs.core.next.call(null,seq__29860__$1);
var G__29873 = null;
var G__29874 = (0);
var G__29875 = (0);
seq__29860 = G__29872;
chunk__29861 = G__29873;
count__29862 = G__29874;
i__29863 = G__29875;
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
mranderson048.re_frame.v0v10v2.re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if(!((cljs.core.deref.call(null,mranderson048.re_frame.v0v10v2.re_frame.db.app_db) === value))){
return cljs.core.reset_BANG_.call(null,mranderson048.re_frame.v0v10v2.re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=fx.js.map?rel=1530661640882
