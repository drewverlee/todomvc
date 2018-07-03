// Compiled by ClojureScript 1.10.238 {}
goog.provide('mranderson048.reagent.v0v7v0.reagent.debug');
goog.require('cljs.core');
mranderson048.reagent.v0v7v0.reagent.debug.has_console = typeof console !== 'undefined';
mranderson048.reagent.v0v7v0.reagent.debug.tracking = false;
if(typeof mranderson048.reagent.v0v7v0.reagent.debug.warnings !== 'undefined'){
} else {
mranderson048.reagent.v0v7v0.reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof mranderson048.reagent.v0v7v0.reagent.debug.track_console !== 'undefined'){
} else {
mranderson048.reagent.v0v7v0.reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__28834__delegate = function (args){
return cljs.core.swap_BANG_.call(null,mranderson048.reagent.v0v7v0.reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__28834 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28835__i = 0, G__28835__a = new Array(arguments.length -  0);
while (G__28835__i < G__28835__a.length) {G__28835__a[G__28835__i] = arguments[G__28835__i + 0]; ++G__28835__i;}
  args = new cljs.core.IndexedSeq(G__28835__a,0,null);
} 
return G__28834__delegate.call(this,args);};
G__28834.cljs$lang$maxFixedArity = 0;
G__28834.cljs$lang$applyTo = (function (arglist__28836){
var args = cljs.core.seq(arglist__28836);
return G__28834__delegate(args);
});
G__28834.cljs$core$IFn$_invoke$arity$variadic = G__28834__delegate;
return G__28834;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__28837__delegate = function (args){
return cljs.core.swap_BANG_.call(null,mranderson048.reagent.v0v7v0.reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__28837 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28838__i = 0, G__28838__a = new Array(arguments.length -  0);
while (G__28838__i < G__28838__a.length) {G__28838__a[G__28838__i] = arguments[G__28838__i + 0]; ++G__28838__i;}
  args = new cljs.core.IndexedSeq(G__28838__a,0,null);
} 
return G__28837__delegate.call(this,args);};
G__28837.cljs$lang$maxFixedArity = 0;
G__28837.cljs$lang$applyTo = (function (arglist__28839){
var args = cljs.core.seq(arglist__28839);
return G__28837__delegate(args);
});
G__28837.cljs$core$IFn$_invoke$arity$variadic = G__28837__delegate;
return G__28837;
})()
;})(o))
;

return o;
})();
}
mranderson048.reagent.v0v7v0.reagent.debug.track_warnings = (function mranderson048$reagent$v0v7v0$reagent$debug$track_warnings(f){
mranderson048.reagent.v0v7v0.reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,mranderson048.reagent.v0v7v0.reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,mranderson048.reagent.v0v7v0.reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,mranderson048.reagent.v0v7v0.reagent.debug.warnings,null);

mranderson048.reagent.v0v7v0.reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map?rel=1530661638924
