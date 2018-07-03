// Compiled by ClojureScript 1.10.238 {}
goog.provide('rewrite_clj.zip.move');
goog.require('cljs.core');
goog.require('rewrite_clj.zip.whitespace');
goog.require('clojure.zip');
/**
 * Move right to next non-whitespace/non-comment location.
 */
rewrite_clj.zip.move.right = (function rewrite_clj$zip$move$right(zloc){
var G__31224 = zloc;
var G__31224__$1 = (((G__31224 == null))?null:clojure.zip.right.call(null,G__31224));
if((G__31224__$1 == null)){
return null;
} else {
return rewrite_clj.zip.whitespace.skip_whitespace.call(null,G__31224__$1);
}
});
/**
 * Move left to next non-whitespace/non-comment location.
 */
rewrite_clj.zip.move.left = (function rewrite_clj$zip$move$left(zloc){
var G__31225 = zloc;
var G__31225__$1 = (((G__31225 == null))?null:clojure.zip.left.call(null,G__31225));
if((G__31225__$1 == null)){
return null;
} else {
return rewrite_clj.zip.whitespace.skip_whitespace_left.call(null,G__31225__$1);
}
});
/**
 * Move down to next non-whitespace/non-comment location.
 */
rewrite_clj.zip.move.down = (function rewrite_clj$zip$move$down(zloc){
var G__31226 = zloc;
var G__31226__$1 = (((G__31226 == null))?null:clojure.zip.down.call(null,G__31226));
if((G__31226__$1 == null)){
return null;
} else {
return rewrite_clj.zip.whitespace.skip_whitespace.call(null,G__31226__$1);
}
});
/**
 * Move up to next non-whitespace/non-comment location.
 */
rewrite_clj.zip.move.up = (function rewrite_clj$zip$move$up(zloc){
var G__31227 = zloc;
var G__31227__$1 = (((G__31227 == null))?null:clojure.zip.up.call(null,G__31227));
if((G__31227__$1 == null)){
return null;
} else {
return rewrite_clj.zip.whitespace.skip_whitespace_left.call(null,G__31227__$1);
}
});
/**
 * Move to the next non-whitespace/non-comment location in a depth-first manner.
 */
rewrite_clj.zip.move.next = (function rewrite_clj$zip$move$next(zloc){
if(cljs.core.truth_(zloc)){
var or__3922__auto__ = (function (){var G__31229 = zloc;
var G__31229__$1 = (((G__31229 == null))?null:clojure.zip.next.call(null,G__31229));
if((G__31229__$1 == null)){
return null;
} else {
return rewrite_clj.zip.whitespace.skip_whitespace.call(null,clojure.zip.next,G__31229__$1);
}
})();
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.vary_meta.call(null,zloc,cljs.core.assoc,new cljs.core.Keyword("rewrite-clj.zip.move","end?","rewrite-clj.zip.move/end?",891526475),true);
}
} else {
return null;
}
});
/**
 * Check whether the given node is at the end of the depth-first traversal.
 */
rewrite_clj.zip.move.end_QMARK_ = (function rewrite_clj$zip$move$end_QMARK_(zloc){
var or__3922__auto__ = cljs.core.not.call(null,zloc);
if(or__3922__auto__){
return or__3922__auto__;
} else {
var or__3922__auto____$1 = clojure.zip.end_QMARK_.call(null,zloc);
if(cljs.core.truth_(or__3922__auto____$1)){
return or__3922__auto____$1;
} else {
return new cljs.core.Keyword("rewrite-clj.zip.move","end?","rewrite-clj.zip.move/end?",891526475).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,zloc));
}
}
});
/**
 * Check if the given location represents the leftmost non-whitespace/
 * non-comment one.
 */
rewrite_clj.zip.move.rightmost_QMARK_ = (function rewrite_clj$zip$move$rightmost_QMARK_(zloc){
return (rewrite_clj.zip.whitespace.skip_whitespace.call(null,clojure.zip.right.call(null,zloc)) == null);
});
/**
 * Check if the given location represents the leftmost non-whitespace/
 * non-comment one.
 */
rewrite_clj.zip.move.leftmost_QMARK_ = (function rewrite_clj$zip$move$leftmost_QMARK_(zloc){
return (rewrite_clj.zip.whitespace.skip_whitespace_left.call(null,clojure.zip.left.call(null,zloc)) == null);
});
/**
 * Move to the next non-whitespace/non-comment location in a depth-first manner.
 */
rewrite_clj.zip.move.prev = (function rewrite_clj$zip$move$prev(zloc){
var G__31230 = zloc;
var G__31230__$1 = (((G__31230 == null))?null:clojure.zip.prev.call(null,G__31230));
if((G__31230__$1 == null)){
return null;
} else {
return rewrite_clj.zip.whitespace.skip_whitespace.call(null,clojure.zip.prev,G__31230__$1);
}
});
/**
 * Move to the leftmost non-whitespace/non-comment location.
 */
rewrite_clj.zip.move.leftmost = (function rewrite_clj$zip$move$leftmost(zloc){
var G__31231 = zloc;
var G__31231__$1 = (((G__31231 == null))?null:clojure.zip.leftmost.call(null,G__31231));
if((G__31231__$1 == null)){
return null;
} else {
return rewrite_clj.zip.whitespace.skip_whitespace.call(null,G__31231__$1);
}
});
/**
 * Move to the rightmost non-whitespace/non-comment location.
 */
rewrite_clj.zip.move.rightmost = (function rewrite_clj$zip$move$rightmost(zloc){
var G__31232 = zloc;
var G__31232__$1 = (((G__31232 == null))?null:clojure.zip.rightmost.call(null,G__31232));
if((G__31232__$1 == null)){
return null;
} else {
return rewrite_clj.zip.whitespace.skip_whitespace_left.call(null,G__31232__$1);
}
});

//# sourceMappingURL=move.js.map?rel=1530661644298
