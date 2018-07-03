// Compiled by ClojureScript 1.10.238 {}
goog.provide('figwheel.connect');
goog.require('cljs.core');
goog.require('figwheel.client');
figwheel.connect.start = (function figwheel$connect$start(){
var config = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__38997__delegate = function (x__38983__auto__){
if(cljs.core.truth_(todomvc.core.mount_root)){
return cljs.core.apply.call(null,todomvc.core.mount_root,x__38983__auto__);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),["Figwheel: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602))," hook '",cljs.core.str.cljs$core$IFn$_invoke$arity$1("todomvc.core/mount-root"),"' is missing"].join(''));
}
};
var G__38997 = function (var_args){
var x__38983__auto__ = null;
if (arguments.length > 0) {
var G__38998__i = 0, G__38998__a = new Array(arguments.length -  0);
while (G__38998__i < G__38998__a.length) {G__38998__a[G__38998__i] = arguments[G__38998__i + 0]; ++G__38998__i;}
  x__38983__auto__ = new cljs.core.IndexedSeq(G__38998__a,0,null);
} 
return G__38997__delegate.call(this,x__38983__auto__);};
G__38997.cljs$lang$maxFixedArity = 0;
G__38997.cljs$lang$applyTo = (function (arglist__38999){
var x__38983__auto__ = cljs.core.seq(arglist__38999);
return G__38997__delegate(x__38983__auto__);
});
G__38997.cljs$core$IFn$_invoke$arity$variadic = G__38997__delegate;
return G__38997;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null);
figwheel.client.start.call(null,config);

if(cljs.core.truth_(new cljs.core.Keyword(null,"devcards","devcards",365747130).cljs$core$IFn$_invoke$arity$1(config))){
return devcards.core.start_devcard_ui_BANG__STAR_();
} else {
return null;
}
});
goog.exportSymbol('figwheel.connect.start', figwheel.connect.start);

//# sourceMappingURL=connect.js.map?rel=1530661658925
