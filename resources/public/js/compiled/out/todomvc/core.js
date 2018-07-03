// Compiled by ClojureScript 1.10.238 {}
goog.provide('todomvc.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('re_posh.core');
goog.require('todomvc.events');
goog.require('todomvc.subs');
goog.require('todomvc.views');
goog.require('todomvc.config');
todomvc.core.dev_setup = (function todomvc$core$dev_setup(){
if(todomvc.config.debug_QMARK_){
cljs.core.enable_console_print_BANG_.call(null);

return cljs.core.println.call(null,"dev mode");
} else {
return null;
}
});
todomvc.core.mount_root = (function todomvc$core$mount_root(){
return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [todomvc.views.main_panel], null),document.getElementById("app"));
});
todomvc.core.init = (function todomvc$core$init(){
re_posh.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("todomvc.events","initialize-db","todomvc.events/initialize-db",-1124970039)], null));

todomvc.core.dev_setup.call(null);

return todomvc.core.mount_root.call(null);
});
goog.exportSymbol('todomvc.core.init', todomvc.core.init);

//# sourceMappingURL=core.js.map?rel=1530661632777
