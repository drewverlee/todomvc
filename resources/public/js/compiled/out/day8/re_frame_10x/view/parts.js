// Compiled by ClojureScript 1.10.238 {}
goog.provide('day8.re_frame_10x.view.parts');
goog.require('cljs.core');
goog.require('day8.re_frame_10x.utils.re_com');
goog.require('re_frame.registrar');
goog.require('re_frame.events');
goog.require('re_frame.subs');
goog.require('re_frame.fx');
goog.require('re_frame.cofx');
goog.require('day8.re_frame_10x.common_styles');
day8.re_frame_10x.view.parts.render_registered = (function day8$re_frame_10x$view$parts$render_registered(kind){
var iter__4292__auto__ = (function day8$re_frame_10x$view$parts$render_registered_$_iter__34003(s__34004){
return (new cljs.core.LazySeq(null,(function (){
var s__34004__$1 = s__34004;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__34004__$1);
if(temp__4657__auto__){
var s__34004__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34004__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__34004__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__34006 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__34005 = (0);
while(true){
if((i__34005 < size__4291__auto__)){
var vec__34007 = cljs.core._nth.call(null,c__4290__auto__,i__34005);
var k = cljs.core.nth.call(null,vec__34007,(0),null);
var v = cljs.core.nth.call(null,vec__34007,(1),null);
cljs.core.chunk_append.call(null,b__34006,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"border","border",1444987323),"1px black solid",new cljs.core.Keyword(null,"padding","padding",1660304693),"10px",new cljs.core.Keyword(null,"margin-right","margin-right",809689658),"10px"], null)], null),cljs.core.prn_str.call(null,k)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(kind),"|",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join('')], null)));

var G__34013 = (i__34005 + (1));
i__34005 = G__34013;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34006),day8$re_frame_10x$view$parts$render_registered_$_iter__34003.call(null,cljs.core.chunk_rest.call(null,s__34004__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34006),null);
}
} else {
var vec__34010 = cljs.core.first.call(null,s__34004__$2);
var k = cljs.core.nth.call(null,vec__34010,(0),null);
var v = cljs.core.nth.call(null,vec__34010,(1),null);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"border","border",1444987323),"1px black solid",new cljs.core.Keyword(null,"padding","padding",1660304693),"10px",new cljs.core.Keyword(null,"margin-right","margin-right",809689658),"10px"], null)], null),cljs.core.prn_str.call(null,k)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(kind),"|",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join('')], null)),day8$re_frame_10x$view$parts$render_registered_$_iter__34003.call(null,cljs.core.rest.call(null,s__34004__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4292__auto__.call(null,cljs.core.sort_by.call(null,cljs.core.key,cljs.core.get.call(null,cljs.core.deref.call(null,re_frame.registrar.kind__GT_id__GT_handler),kind)));
});
day8.re_frame_10x.view.parts.render_subs = (function day8$re_frame_10x$view$parts$render_subs(kind){
var iter__4292__auto__ = (function day8$re_frame_10x$view$parts$render_subs_$_iter__34014(s__34015){
return (new cljs.core.LazySeq(null,(function (){
var s__34015__$1 = s__34015;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__34015__$1);
if(temp__4657__auto__){
var s__34015__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34015__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__34015__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__34017 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__34016 = (0);
while(true){
if((i__34016 < size__4291__auto__)){
var vec__34018 = cljs.core._nth.call(null,c__4290__auto__,i__34016);
var k = cljs.core.nth.call(null,vec__34018,(0),null);
var v = cljs.core.nth.call(null,vec__34018,(1),null);
cljs.core.chunk_append.call(null,b__34017,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"border","border",1444987323),"1px black solid",new cljs.core.Keyword(null,"padding","padding",1660304693),"10px",new cljs.core.Keyword(null,"margin-right","margin-right",809689658),"10px"], null)], null),cljs.core.prn_str.call(null,k)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(kind),"|",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join('')], null)));

var G__34024 = (i__34016 + (1));
i__34016 = G__34024;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34017),day8$re_frame_10x$view$parts$render_subs_$_iter__34014.call(null,cljs.core.chunk_rest.call(null,s__34015__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34017),null);
}
} else {
var vec__34021 = cljs.core.first.call(null,s__34015__$2);
var k = cljs.core.nth.call(null,vec__34021,(0),null);
var v = cljs.core.nth.call(null,vec__34021,(1),null);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"border","border",1444987323),"1px black solid",new cljs.core.Keyword(null,"padding","padding",1660304693),"10px",new cljs.core.Keyword(null,"margin-right","margin-right",809689658),"10px"], null)], null),cljs.core.prn_str.call(null,k)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(kind),"|",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join('')], null)),day8$re_frame_10x$view$parts$render_subs_$_iter__34014.call(null,cljs.core.rest.call(null,s__34015__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4292__auto__.call(null,cljs.core.sort_by.call(null,cljs.core.key,cljs.core.get.call(null,cljs.core.deref.call(null,re_frame.registrar.kind__GT_id__GT_handler),kind)));
});
day8.re_frame_10x.view.parts.render = (function day8$re_frame_10x$view$parts$render(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.v_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Events"], null),day8.re_frame_10x.view.parts.render_registered.call(null,re_frame.events.kind),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Subscriptions"], null),day8.re_frame_10x.view.parts.render_subs.call(null,re_frame.subs.kind),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"FX"], null),day8.re_frame_10x.view.parts.render_registered.call(null,re_frame.fx.kind),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"co-fx"], null),day8.re_frame_10x.view.parts.render_registered.call(null,re_frame.cofx.kind),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.gap_f,new cljs.core.Keyword(null,"size","size",1098693007),day8.re_frame_10x.common_styles.gs_19s], null)], null)], null);
});

//# sourceMappingURL=parts.js.map?rel=1530661651922
