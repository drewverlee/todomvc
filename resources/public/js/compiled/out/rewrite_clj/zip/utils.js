// Compiled by ClojureScript 1.10.238 {}
goog.provide('rewrite_clj.zip.utils');
goog.require('cljs.core');
goog.require('clojure.zip');
rewrite_clj.zip.utils.update_in_path = (function rewrite_clj$zip$utils$update_in_path(p__31235,k,f){
var vec__31236 = p__31235;
var node = cljs.core.nth.call(null,vec__31236,(0),null);
var path = cljs.core.nth.call(null,vec__31236,(1),null);
var loc = vec__31236;
var v = cljs.core.get.call(null,path,k);
if(cljs.core.seq.call(null,v)){
return cljs.core.with_meta.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,cljs.core.assoc.call(null,path,k,f.call(null,v),new cljs.core.Keyword(null,"changed?","changed?",-437828330),true)], null),cljs.core.meta.call(null,loc));
} else {
return loc;
}
});
/**
 * Remove right sibling of the current node (if there is one).
 */
rewrite_clj.zip.utils.remove_right = (function rewrite_clj$zip$utils$remove_right(loc){
return rewrite_clj.zip.utils.update_in_path.call(null,loc,new cljs.core.Keyword(null,"r","r",-471384190),cljs.core.next);
});
/**
 * Remove left sibling of the current node (if there is one).
 */
rewrite_clj.zip.utils.remove_left = (function rewrite_clj$zip$utils$remove_left(loc){
return rewrite_clj.zip.utils.update_in_path.call(null,loc,new cljs.core.Keyword(null,"l","l",1395893423),cljs.core.pop);
});
rewrite_clj.zip.utils.remove_while = (function rewrite_clj$zip$utils$remove_while(zloc,p_QMARK_){

var zloc__$1 = zloc;
while(true){
var ploc = clojure.zip.prev.call(null,zloc__$1);
if(cljs.core.not.call(null,(function (){var and__3911__auto__ = ploc;
if(cljs.core.truth_(and__3911__auto__)){
return p_QMARK_.call(null,ploc);
} else {
return and__3911__auto__;
}
})())){
return zloc__$1;
} else {
var G__31239 = clojure.zip.remove.call(null,zloc__$1);
zloc__$1 = G__31239;
continue;
}
break;
}
});
/**
 * Remove elements to the right of the current zipper location as long as
 * the given predicate matches.
 */
rewrite_clj.zip.utils.remove_right_while = (function rewrite_clj$zip$utils$remove_right_while(zloc,p_QMARK_){
var zloc__$1 = zloc;
while(true){
var temp__4655__auto__ = clojure.zip.right.call(null,zloc__$1);
if(cljs.core.truth_(temp__4655__auto__)){
var rloc = temp__4655__auto__;
if(cljs.core.truth_(p_QMARK_.call(null,rloc))){
var G__31240 = rewrite_clj.zip.utils.remove_right.call(null,zloc__$1);
zloc__$1 = G__31240;
continue;
} else {
return zloc__$1;
}
} else {
return zloc__$1;
}
break;
}
});
/**
 * Remove elements to the left of the current zipper location as long as
 * the given predicate matches.
 */
rewrite_clj.zip.utils.remove_left_while = (function rewrite_clj$zip$utils$remove_left_while(zloc,p_QMARK_){
var zloc__$1 = zloc;
while(true){
var temp__4655__auto__ = clojure.zip.left.call(null,zloc__$1);
if(cljs.core.truth_(temp__4655__auto__)){
var lloc = temp__4655__auto__;
if(cljs.core.truth_(p_QMARK_.call(null,lloc))){
var G__31241 = rewrite_clj.zip.utils.remove_left.call(null,zloc__$1);
zloc__$1 = G__31241;
continue;
} else {
return zloc__$1;
}
} else {
return zloc__$1;
}
break;
}
});
/**
 * Remove current node and move left. If current node is at the leftmost
 * location, returns `nil`.
 */
rewrite_clj.zip.utils.remove_and_move_left = (function rewrite_clj$zip$utils$remove_and_move_left(p__31242){
var vec__31243 = p__31242;
var _ = cljs.core.nth.call(null,vec__31243,(0),null);
var map__31246 = cljs.core.nth.call(null,vec__31243,(1),null);
var map__31246__$1 = ((((!((map__31246 == null)))?(((((map__31246.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31246.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31246):map__31246);
var path = map__31246__$1;
var l = cljs.core.get.call(null,map__31246__$1,new cljs.core.Keyword(null,"l","l",1395893423));
var loc = vec__31243;
if(cljs.core.seq.call(null,l)){
return cljs.core.with_meta.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.peek.call(null,l),cljs.core.assoc.call(null,cljs.core.update_in.call(null,path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"l","l",1395893423)], null),cljs.core.pop),new cljs.core.Keyword(null,"changed?","changed?",-437828330),true)], null),cljs.core.meta.call(null,loc));
} else {
return null;
}
});
/**
 * Remove current node and move right. If current node is at the rightmost
 * location, returns `nil`.
 */
rewrite_clj.zip.utils.remove_and_move_right = (function rewrite_clj$zip$utils$remove_and_move_right(p__31248){
var vec__31249 = p__31248;
var _ = cljs.core.nth.call(null,vec__31249,(0),null);
var map__31252 = cljs.core.nth.call(null,vec__31249,(1),null);
var map__31252__$1 = ((((!((map__31252 == null)))?(((((map__31252.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31252.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31252):map__31252);
var path = map__31252__$1;
var r = cljs.core.get.call(null,map__31252__$1,new cljs.core.Keyword(null,"r","r",-471384190));
var loc = vec__31249;
if(cljs.core.seq.call(null,r)){
return cljs.core.with_meta.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,r),cljs.core.assoc.call(null,cljs.core.update_in.call(null,path,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"r","r",-471384190)], null),cljs.core.next),new cljs.core.Keyword(null,"changed?","changed?",-437828330),true)], null),cljs.core.meta.call(null,loc));
} else {
return null;
}
});
rewrite_clj.zip.utils.remove_and_move_up = (function rewrite_clj$zip$utils$remove_and_move_up(loc){
var vec__31254 = loc;
var node = cljs.core.nth.call(null,vec__31254,(0),null);
var map__31257 = cljs.core.nth.call(null,vec__31254,(1),null);
var map__31257__$1 = ((((!((map__31257 == null)))?(((((map__31257.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31257.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31257):map__31257);
var path = map__31257__$1;
var l = cljs.core.get.call(null,map__31257__$1,new cljs.core.Keyword(null,"l","l",1395893423));
var ppath = cljs.core.get.call(null,map__31257__$1,new cljs.core.Keyword(null,"ppath","ppath",-1758182784));
var pnodes = cljs.core.get.call(null,map__31257__$1,new cljs.core.Keyword(null,"pnodes","pnodes",1739080565));
var rs = cljs.core.get.call(null,map__31257__$1,new cljs.core.Keyword(null,"r","r",-471384190));
if((path == null)){
throw (new Error("Remove at top"));
} else {
if((cljs.core.count.call(null,l) > (0))){
return clojure.zip.up.call(null,cljs.core.with_meta.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.peek.call(null,l),cljs.core.assoc.call(null,path,new cljs.core.Keyword(null,"l","l",1395893423),cljs.core.pop.call(null,l),new cljs.core.Keyword(null,"changed?","changed?",-437828330),true)], null),cljs.core.meta.call(null,loc)));
} else {
return cljs.core.with_meta.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.zip.make_node.call(null,loc,cljs.core.peek.call(null,pnodes),rs),(function (){var and__3911__auto__ = ppath;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.assoc.call(null,ppath,new cljs.core.Keyword(null,"changed?","changed?",-437828330),true);
} else {
return and__3911__auto__;
}
})()], null),cljs.core.meta.call(null,loc));
}
}
});

//# sourceMappingURL=utils.js.map?rel=1530661644346
