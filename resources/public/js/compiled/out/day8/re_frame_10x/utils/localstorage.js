// Compiled by ClojureScript 1.10.238 {}
goog.provide('day8.re_frame_10x.utils.localstorage');
goog.require('cljs.core');
goog.require('goog.storage.Storage');
goog.require('goog.storage.mechanism.HTML5LocalStorage');
goog.require('cljs.reader');
goog.require('clojure.string');
day8.re_frame_10x.utils.localstorage.storage = (new goog.storage.Storage((new goog.storage.mechanism.HTML5LocalStorage())));
day8.re_frame_10x.utils.localstorage.safe_prefix = "day8.re-frame-10x.";
day8.re_frame_10x.utils.localstorage.safe_key = (function day8$re_frame_10x$utils$localstorage$safe_key(key){

return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.utils.localstorage.safe_prefix),cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)].join('');
});
/**
 * Gets a re-frame-10x value from local storage.
 */
day8.re_frame_10x.utils.localstorage.get = (function day8$re_frame_10x$utils$localstorage$get(var_args){
var G__33806 = arguments.length;
switch (G__33806) {
case 1:
return day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$1 = (function (key){
return day8.re_frame_10x.utils.localstorage.get.call(null,key,null);
});

day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$2 = (function (key,not_found){
var value = day8.re_frame_10x.utils.localstorage.storage.get(day8.re_frame_10x.utils.localstorage.safe_key.call(null,key));
if((void 0 === value)){
return not_found;
} else {
return cljs.reader.read_string.call(null,value);
}
});

day8.re_frame_10x.utils.localstorage.get.cljs$lang$maxFixedArity = 2;

/**
 * Saves a re-frame-10x value to local storage.
 */
day8.re_frame_10x.utils.localstorage.save_BANG_ = (function day8$re_frame_10x$utils$localstorage$save_BANG_(key,value){
return day8.re_frame_10x.utils.localstorage.storage.set(day8.re_frame_10x.utils.localstorage.safe_key.call(null,key),cljs.core.pr_str.call(null,value));
});
/**
 * Deletes all re-frame-10x config keys
 */
day8.re_frame_10x.utils.localstorage.delete_all_keys_BANG_ = (function day8$re_frame_10x$utils$localstorage$delete_all_keys_BANG_(){
var seq__33808 = cljs.core.seq.call(null,Object.keys(localStorage));
var chunk__33809 = null;
var count__33810 = (0);
var i__33811 = (0);
while(true){
if((i__33811 < count__33810)){
var k = cljs.core._nth.call(null,chunk__33809,i__33811);
if(clojure.string.starts_with_QMARK_.call(null,k,day8.re_frame_10x.utils.localstorage.safe_prefix)){
day8.re_frame_10x.utils.localstorage.storage.remove(k);
} else {
}


var G__33812 = seq__33808;
var G__33813 = chunk__33809;
var G__33814 = count__33810;
var G__33815 = (i__33811 + (1));
seq__33808 = G__33812;
chunk__33809 = G__33813;
count__33810 = G__33814;
i__33811 = G__33815;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__33808);
if(temp__4657__auto__){
var seq__33808__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33808__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__33808__$1);
var G__33816 = cljs.core.chunk_rest.call(null,seq__33808__$1);
var G__33817 = c__4319__auto__;
var G__33818 = cljs.core.count.call(null,c__4319__auto__);
var G__33819 = (0);
seq__33808 = G__33816;
chunk__33809 = G__33817;
count__33810 = G__33818;
i__33811 = G__33819;
continue;
} else {
var k = cljs.core.first.call(null,seq__33808__$1);
if(clojure.string.starts_with_QMARK_.call(null,k,day8.re_frame_10x.utils.localstorage.safe_prefix)){
day8.re_frame_10x.utils.localstorage.storage.remove(k);
} else {
}


var G__33820 = cljs.core.next.call(null,seq__33808__$1);
var G__33821 = null;
var G__33822 = (0);
var G__33823 = (0);
seq__33808 = G__33820;
chunk__33809 = G__33821;
count__33810 = G__33822;
i__33811 = G__33823;
continue;
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=localstorage.js.map?rel=1530661650541
