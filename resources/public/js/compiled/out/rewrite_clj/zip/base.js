// Compiled by ClojureScript 1.10.238 {}
goog.provide('rewrite_clj.zip.base');
goog.require('cljs.core');
goog.require('rewrite_clj.node');
goog.require('rewrite_clj.parser');
goog.require('rewrite_clj.zip.whitespace');
goog.require('clojure.zip');
/**
 * Create zipper over the given Clojure/EDN node.
 */
rewrite_clj.zip.base.edn_STAR_ = (function rewrite_clj$zip$base$edn_STAR_(node){
return clojure.zip.zipper.call(null,rewrite_clj.node.inner_QMARK_,cljs.core.comp.call(null,cljs.core.seq,rewrite_clj.node.children),rewrite_clj.node.replace_children,node);
});
/**
 * Create zipper over the given Clojure/EDN node and move
 * to the first non-whitespace/non-comment child.
 */
rewrite_clj.zip.base.edn = (function rewrite_clj$zip$base$edn(node){
while(true){
if(cljs.core._EQ_.call(null,rewrite_clj.node.tag.call(null,node),new cljs.core.Keyword(null,"forms","forms",2045992350))){
var top = rewrite_clj.zip.base.edn_STAR_.call(null,node);
var or__3922__auto__ = rewrite_clj.zip.whitespace.skip_whitespace.call(null,clojure.zip.down.call(null,top));
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return top;
}
} else {
var G__31265 = rewrite_clj.node.forms_node.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [node], null));
node = G__31265;
continue;
}
break;
}
});
/**
 * Get tag of node at the current zipper location.
 */
rewrite_clj.zip.base.tag = (function rewrite_clj$zip$base$tag(zloc){
var G__31266 = zloc;
var G__31266__$1 = (((G__31266 == null))?null:clojure.zip.node.call(null,G__31266));
if((G__31266__$1 == null)){
return null;
} else {
return rewrite_clj.node.tag.call(null,G__31266__$1);
}
});
/**
 * Get sexpr represented by the given node.
 */
rewrite_clj.zip.base.sexpr = (function rewrite_clj$zip$base$sexpr(zloc){
var G__31267 = zloc;
var G__31267__$1 = (((G__31267 == null))?null:clojure.zip.node.call(null,G__31267));
if((G__31267__$1 == null)){
return null;
} else {
return rewrite_clj.node.sexpr.call(null,G__31267__$1);
}
});
/**
 * Get children as s-expressions.
 */
rewrite_clj.zip.base.child_sexprs = (function rewrite_clj$zip$base$child_sexprs(zloc){
var G__31268 = zloc;
var G__31268__$1 = (((G__31268 == null))?null:clojure.zip.node.call(null,G__31268));
if((G__31268__$1 == null)){
return null;
} else {
return rewrite_clj.node.child_sexprs.call(null,G__31268__$1);
}
});
/**
 * Get length of printable string for the given zipper location.
 */
rewrite_clj.zip.base.length = (function rewrite_clj$zip$base$length(zloc){
var or__3922__auto__ = (function (){var G__31270 = zloc;
var G__31270__$1 = (((G__31270 == null))?null:clojure.zip.node.call(null,G__31270));
if((G__31270__$1 == null)){
return null;
} else {
return rewrite_clj.node.length.call(null,G__31270__$1);
}
})();
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return (0);
}
});
/**
 * Create zipper from String.
 */
rewrite_clj.zip.base.of_string = (function rewrite_clj$zip$base$of_string(s){
var G__31271 = s;
var G__31271__$1 = (((G__31271 == null))?null:rewrite_clj.parser.parse_string_all.call(null,G__31271));
if((G__31271__$1 == null)){
return null;
} else {
return rewrite_clj.zip.base.edn.call(null,G__31271__$1);
}
});
/**
 * Create string representing the current zipper location.
 */
rewrite_clj.zip.base.string = (function rewrite_clj$zip$base$string(zloc){
var G__31272 = zloc;
var G__31272__$1 = (((G__31272 == null))?null:clojure.zip.node.call(null,G__31272));
if((G__31272__$1 == null)){
return null;
} else {
return rewrite_clj.node.string.call(null,G__31272__$1);
}
});
/**
 * Create string representing the zipped-up zipper.
 */
rewrite_clj.zip.base.root_string = (function rewrite_clj$zip$base$root_string(zloc){
var G__31273 = zloc;
var G__31273__$1 = (((G__31273 == null))?null:clojure.zip.root.call(null,G__31273));
if((G__31273__$1 == null)){
return null;
} else {
return rewrite_clj.node.string.call(null,G__31273__$1);
}
});

//# sourceMappingURL=base.js.map?rel=1530661644404
