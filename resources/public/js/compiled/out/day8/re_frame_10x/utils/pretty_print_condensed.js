// Compiled by ClojureScript 1.10.238 {}
goog.provide('day8.re_frame_10x.utils.pretty_print_condensed');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('goog.string.StringBuffer');

/**
 * @interface
 */
day8.re_frame_10x.utils.pretty_print_condensed.ILimited = function(){};

day8.re_frame_10x.utils.pretty_print_condensed._limited_QMARK_ = (function day8$re_frame_10x$utils$pretty_print_condensed$_limited_QMARK_(x){
if(((!((x == null))) && (!((x.day8$re_frame_10x$utils$pretty_print_condensed$ILimited$_limited_QMARK_$arity$1 == null))))){
return x.day8$re_frame_10x$utils$pretty_print_condensed$ILimited$_limited_QMARK_$arity$1(x);
} else {
var x__4211__auto__ = (((x == null))?null:x);
var m__4212__auto__ = (day8.re_frame_10x.utils.pretty_print_condensed._limited_QMARK_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,x);
} else {
var m__4212__auto____$1 = (day8.re_frame_10x.utils.pretty_print_condensed._limited_QMARK_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,x);
} else {
throw cljs.core.missing_protocol.call(null,"ILimited.-limited?",x);
}
}
}
});

/**
 * Truncate a string to length `n`.
 * 
 *   Removal occurs at `cut-from`, which may be :start, :end, or :middle.
 * 
 *   Truncation is indicated by `…` at start/end, or `...` at middle, for readability. 
 */
day8.re_frame_10x.utils.pretty_print_condensed.truncate_string = (function day8$re_frame_10x$utils$pretty_print_condensed$truncate_string(var_args){
var G__33916 = arguments.length;
switch (G__33916) {
case 2:
return day8.re_frame_10x.utils.pretty_print_condensed.truncate_string.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return day8.re_frame_10x.utils.pretty_print_condensed.truncate_string.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

day8.re_frame_10x.utils.pretty_print_condensed.truncate_string.cljs$core$IFn$_invoke$arity$2 = (function (n,string){
return day8.re_frame_10x.utils.pretty_print_condensed.truncate_string.call(null,n,new cljs.core.Keyword(null,"end","end",-268185958),string);
});

day8.re_frame_10x.utils.pretty_print_condensed.truncate_string.cljs$core$IFn$_invoke$arity$3 = (function (n,cut_from,string){
var c = cljs.core.count.call(null,string);
if((c > n)){
var G__33917 = cut_from;
var G__33917__$1 = (((G__33917 instanceof cljs.core.Keyword))?G__33917.fqn:null);
switch (G__33917__$1) {
case "start":
return ["\u2026",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.call(null,string,(c - (n - (1))),c))].join('');

break;
case "end":
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.call(null,string,(0),(n - (1)))),"\u2026"].join('');

break;
case "middle":
var G__33918 = n;
switch (G__33918) {
case (1):
return "\u2026";

break;
case (2):
return day8.re_frame_10x.utils.pretty_print_condensed.truncate_string.call(null,n,new cljs.core.Keyword(null,"start","start",-355208981),string);

break;
case (3):
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.call(null,string,(0),(1))),"\u2026",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.call(null,string,(c - (1)),c))].join('');

break;
default:
var content_budget = (n - (2));
var per_side_budget = Math.floor((content_budget / (2)));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.call(null,string,(0),(function (){var G__33919 = per_side_budget;
if(cljs.core.even_QMARK_.call(null,content_budget)){
return (G__33919 - (1));
} else {
return G__33919;
}
})())),"...",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.call(null,string,(c - per_side_budget),c))].join('');

}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__33917__$1)].join('')));

}
} else {
return string;
}
});

day8.re_frame_10x.utils.pretty_print_condensed.truncate_string.cljs$lang$maxFixedArity = 3;

day8.re_frame_10x.utils.pretty_print_condensed.truncate_segments = (function day8$re_frame_10x$utils$pretty_print_condensed$truncate_segments(var_args){
var G__33924 = arguments.length;
switch (G__33924) {
case 2:
return day8.re_frame_10x.utils.pretty_print_condensed.truncate_segments.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return day8.re_frame_10x.utils.pretty_print_condensed.truncate_segments.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

day8.re_frame_10x.utils.pretty_print_condensed.truncate_segments.cljs$core$IFn$_invoke$arity$2 = (function (s,limit){
return day8.re_frame_10x.utils.pretty_print_condensed.truncate_segments.call(null,s,limit,/^[^.]+\./,"\u2026");
});

day8.re_frame_10x.utils.pretty_print_condensed.truncate_segments.cljs$core$IFn$_invoke$arity$4 = (function (s,limit,match,trunc_prefix){
while(true){
if((cljs.core.count.call(null,s) <= limit)){
return s;
} else {
var rep = clojure.string.replace.call(null,s,match,trunc_prefix);
if(cljs.core._EQ_.call(null,rep,s)){
return trunc_prefix;
} else {
var G__33926 = clojure.string.replace.call(null,s,match,trunc_prefix);
var G__33927 = limit;
var G__33928 = match;
var G__33929 = trunc_prefix;
s = G__33926;
limit = G__33927;
match = G__33928;
trunc_prefix = G__33929;
continue;
}
}
break;
}
});

day8.re_frame_10x.utils.pretty_print_condensed.truncate_segments.cljs$lang$maxFixedArity = 4;

/**
 * Truncates `named`, which must satisfy INamed protocol, to within `n`
 * characters, cutting from beginning. Adds a `…` prefix to indicate where
 * cutting has occurred.
 */
day8.re_frame_10x.utils.pretty_print_condensed.truncate_named = (function day8$re_frame_10x$utils$pretty_print_condensed$truncate_named(n,named){
var the_ns = cljs.core.namespace.call(null,named);
var the_name = cljs.core.name.call(null,named);
var kw_QMARK_ = (named instanceof cljs.core.Keyword);
var ns_prefix_size = ((kw_QMARK_)?(3):(2));
if((((cljs.core.count.call(null,the_name) > (cljs.core.truth_(the_ns)?(n - ns_prefix_size):n))) || ((the_ns == null)))){
var prefix = (function (){var G__33930 = ((kw_QMARK_)?":":"");
if(cljs.core.truth_(the_ns)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__33930),"\u2026/"].join('');
} else {
return G__33930;
}
})();
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix),cljs.core.str.cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.utils.pretty_print_condensed.truncate_string.call(null,(n - cljs.core.count.call(null,prefix)),new cljs.core.Keyword(null,"start","start",-355208981),the_name))].join('');
} else {
var end = ["/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(the_name)].join('');
var prefix = ((kw_QMARK_)?":":"");
var ns_budget = ((n - cljs.core.count.call(null,end)) - cljs.core.count.call(null,prefix));
var ns_string = day8.re_frame_10x.utils.pretty_print_condensed.truncate_segments.call(null,the_ns,ns_budget);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix),cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns_string),cljs.core.str.cljs$core$IFn$_invoke$arity$1(end)].join('');
}
});
if(cljs.core._EQ_.call(null,day8.re_frame_10x.utils.pretty_print_condensed.truncate_named.call(null,(12),new cljs.core.Keyword("city","saskatoon","city/saskatoon",2120611420)),":\u2026/saskatoon")){
} else {
throw (new Error("Assert failed: (= (truncate-named 12 :city/saskatoon) \":\u2026/saskatoon\")"));
}
day8.re_frame_10x.utils.pretty_print_condensed.truncate = (function day8$re_frame_10x$utils$pretty_print_condensed$truncate(n,location,param){
if(((!((param == null)))?(((((param.cljs$lang$protocol_mask$partition1$ & (4096))) || ((cljs.core.PROTOCOL_SENTINEL === param.cljs$core$INamed$))))?true:(((!param.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.INamed,param):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.INamed,param))){
return day8.re_frame_10x.utils.pretty_print_condensed.truncate_named.call(null,n,param);
} else {
return day8.re_frame_10x.utils.pretty_print_condensed.truncate_string.call(null,n,location,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(param)].join(''));
}
});
day8.re_frame_10x.utils.pretty_print_condensed.str__GT_namespaced_sym = (function day8$re_frame_10x$utils$pretty_print_condensed$str__GT_namespaced_sym(s){
if(typeof s === 'string'){
var name = cljs.core.second.call(null,cljs.core.re_find.call(null,/\.([^.]+)$/,s));
if(cljs.core.truth_(name)){
return cljs.core.symbol.call(null,cljs.core.subs.call(null,s,(0),((cljs.core.count.call(null,s) - cljs.core.count.call(null,name)) - (1))),name);
} else {
return cljs.core.symbol.call(null,s);
}
} else {
return s;
}
});
/**
 * Return left and right edges of a collection (eg. brackets plus prefixes), defaults to [< >].
 */
day8.re_frame_10x.utils.pretty_print_condensed.edges = (function day8$re_frame_10x$utils$pretty_print_condensed$edges(coll){
if(cljs.core.map_QMARK_.call(null,coll)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["{","}"], null);
} else {
if(cljs.core.vector_QMARK_.call(null,coll)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[","]"], null);
} else {
if(cljs.core.set_QMARK_.call(null,coll)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#{","}"], null);
} else {
if(((cljs.core.list_QMARK_.call(null,coll)) || (cljs.core.seq_QMARK_.call(null,coll)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(",")"], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["<",">"], null);

}
}
}
}
});
/**
 * Wrap `value` with edges of `coll`
 */
day8.re_frame_10x.utils.pretty_print_condensed.with_edges = (function day8$re_frame_10x$utils$pretty_print_condensed$with_edges(coll,value){
var vec__33932 = day8.re_frame_10x.utils.pretty_print_condensed.edges.call(null,coll);
var left = cljs.core.nth.call(null,vec__33932,(0),null);
var right = cljs.core.nth.call(null,vec__33932,(1),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(left),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),cljs.core.str.cljs$core$IFn$_invoke$arity$1(right)].join('');
});
/**
 * Render form in abbreviated form, showing content only for keywords/strings/symbols and entering collections to a depth of 1.
 */
day8.re_frame_10x.utils.pretty_print_condensed.pretty_condensed = (function day8$re_frame_10x$utils$pretty_print_condensed$pretty_condensed(var_args){
var G__33936 = arguments.length;
switch (G__33936) {
case 1:
return day8.re_frame_10x.utils.pretty_print_condensed.pretty_condensed.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 4:
return day8.re_frame_10x.utils.pretty_print_condensed.pretty_condensed.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

day8.re_frame_10x.utils.pretty_print_condensed.pretty_condensed.cljs$core$IFn$_invoke$arity$1 = (function (form){
return day8.re_frame_10x.utils.pretty_print_condensed.pretty_condensed.call(null,(0),cljs.core.coll_QMARK_,(1),form);
});

day8.re_frame_10x.utils.pretty_print_condensed.pretty_condensed.cljs$core$IFn$_invoke$arity$4 = (function (depth,enter_pred,max_depth,form){
if(((!((form == null)))?(((((form.cljs$lang$protocol_mask$partition1$ & (4096))) || ((cljs.core.PROTOCOL_SENTINEL === form.cljs$core$INamed$))))?true:(((!form.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.INamed,form):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.INamed,form))){
return day8.re_frame_10x.utils.pretty_print_condensed.truncate_named.call(null,(16),form);
} else {
if(typeof form === 'string'){
return day8.re_frame_10x.utils.pretty_print_condensed.truncate_string.call(null,(16),new cljs.core.Keyword(null,"middle","middle",-701029031),form);
} else {
if(cljs.core.fn_QMARK_.call(null,form)){
var or__3922__auto__ = (function (){var G__33939 = form.name;
if((G__33939 == null)){
return null;
} else {
return clojure.string.replace.call(null,G__33939,/(^.*\$)(.*)/,"$2");
}
})();
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return "\u0192";
}
} else {
if(typeof form === 'number'){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(form)].join('');
} else {
if(cljs.core.truth_((function (){var and__3911__auto__ = enter_pred.call(null,form);
if(cljs.core.truth_(and__3911__auto__)){
return (depth < max_depth);
} else {
return and__3911__auto__;
}
})())){
return day8.re_frame_10x.utils.pretty_print_condensed.with_edges.call(null,form,clojure.string.join.call(null,", ",cljs.core.mapv.call(null,cljs.core.partial.call(null,day8.re_frame_10x.utils.pretty_print_condensed.pretty_condensed,(depth + (1)),enter_pred,max_depth),form)));
} else {
return day8.re_frame_10x.utils.pretty_print_condensed.with_edges.call(null,form,"\u2026");

}
}
}
}
}
});

day8.re_frame_10x.utils.pretty_print_condensed.pretty_condensed.cljs$lang$maxFixedArity = 4;

day8.re_frame_10x.utils.pretty_print_condensed.pr_writer_impl = (function day8$re_frame_10x$utils$pretty_print_condensed$pr_writer_impl(obj,writer,opts){
if(cljs.core.truth_(day8.re_frame_10x.utils.pretty_print_condensed._limited_QMARK_.call(null,writer))){
return writer;
} else {
return cljs.core.pr_writer_impl.call(null,obj,writer,opts);
}
});
/**
 * Prefer this to pr-seq, because it makes the printing function
 * configurable, allowing efficient implementations such as appending
 * to a StringBuffer.
 */
day8.re_frame_10x.utils.pretty_print_condensed.pr_writer = (function day8$re_frame_10x$utils$pretty_print_condensed$pr_writer(obj,writer,opts){
var temp__4655__auto__ = new cljs.core.Keyword(null,"alt-impl","alt-impl",670969595).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__4655__auto__)){
var alt_impl = temp__4655__auto__;
return alt_impl.call(null,obj,writer,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"fallback-impl","fallback-impl",-1501286995),day8.re_frame_10x.utils.pretty_print_condensed.pr_writer_impl));
} else {
return day8.re_frame_10x.utils.pretty_print_condensed.pr_writer_impl.call(null,obj,writer,opts);
}
});
day8.re_frame_10x.utils.pretty_print_condensed.pr_seq_writer = (function day8$re_frame_10x$utils$pretty_print_condensed$pr_seq_writer(objs,writer,opts){
day8.re_frame_10x.utils.pretty_print_condensed.pr_writer.call(null,cljs.core.first.call(null,objs),writer,opts);

var seq__33941 = cljs.core.seq.call(null,cljs.core.next.call(null,objs));
var chunk__33942 = null;
var count__33943 = (0);
var i__33944 = (0);
while(true){
if((i__33944 < count__33943)){
var obj = cljs.core._nth.call(null,chunk__33942,i__33944);
cljs.core._write.call(null,writer," ");

day8.re_frame_10x.utils.pretty_print_condensed.pr_writer.call(null,obj,writer,opts);


var G__33945 = seq__33941;
var G__33946 = chunk__33942;
var G__33947 = count__33943;
var G__33948 = (i__33944 + (1));
seq__33941 = G__33945;
chunk__33942 = G__33946;
count__33943 = G__33947;
i__33944 = G__33948;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__33941);
if(temp__4657__auto__){
var seq__33941__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33941__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__33941__$1);
var G__33949 = cljs.core.chunk_rest.call(null,seq__33941__$1);
var G__33950 = c__4319__auto__;
var G__33951 = cljs.core.count.call(null,c__4319__auto__);
var G__33952 = (0);
seq__33941 = G__33949;
chunk__33942 = G__33950;
count__33943 = G__33951;
i__33944 = G__33952;
continue;
} else {
var obj = cljs.core.first.call(null,seq__33941__$1);
cljs.core._write.call(null,writer," ");

day8.re_frame_10x.utils.pretty_print_condensed.pr_writer.call(null,obj,writer,opts);


var G__33953 = cljs.core.next.call(null,seq__33941__$1);
var G__33954 = null;
var G__33955 = (0);
var G__33956 = (0);
seq__33941 = G__33953;
chunk__33942 = G__33954;
count__33943 = G__33955;
i__33944 = G__33956;
continue;
}
} else {
return null;
}
}
break;
}
});
day8.re_frame_10x.utils.pretty_print_condensed.string_print = (function day8$re_frame_10x$utils$pretty_print_condensed$string_print(x){
cljs.core._STAR_print_fn_STAR_.call(null,x);

return null;
});

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.ICounted}
 * @implements {day8.re_frame_10x.utils.pretty_print_condensed.ILimited}
*/
day8.re_frame_10x.utils.pretty_print_condensed.LimitedStringBufferWriter = (function (sb,max_string_length,over_limit_QMARK_){
this.sb = sb;
this.max_string_length = max_string_length;
this.over_limit_QMARK_ = over_limit_QMARK_;
this.cljs$lang$protocol_mask$partition0$ = 1073741826;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
day8.re_frame_10x.utils.pretty_print_condensed.LimitedStringBufferWriter.prototype.cljs$core$IWriter$_write$arity$2 = (function (_,s){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.over_limit_QMARK_)){
} else {
if((self__.max_string_length <= self__.sb.getLength())){
self__.over_limit_QMARK_ = true;
} else {
self__.sb.append(s);
}
}

return self__.sb;
});

day8.re_frame_10x.utils.pretty_print_condensed.LimitedStringBufferWriter.prototype.cljs$core$IWriter$_flush$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return null;
});

day8.re_frame_10x.utils.pretty_print_condensed.LimitedStringBufferWriter.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.sb.getLength();
});

day8.re_frame_10x.utils.pretty_print_condensed.LimitedStringBufferWriter.prototype.day8$re_frame_10x$utils$pretty_print_condensed$ILimited$ = cljs.core.PROTOCOL_SENTINEL;

day8.re_frame_10x.utils.pretty_print_condensed.LimitedStringBufferWriter.prototype.day8$re_frame_10x$utils$pretty_print_condensed$ILimited$_limited_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.over_limit_QMARK_;
});

day8.re_frame_10x.utils.pretty_print_condensed.LimitedStringBufferWriter.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sb","sb",-1249746442,null),new cljs.core.Symbol(null,"max-string-length","max-string-length",1209706837,null),cljs.core.with_meta(new cljs.core.Symbol(null,"over-limit?","over-limit?",-259661935,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

day8.re_frame_10x.utils.pretty_print_condensed.LimitedStringBufferWriter.cljs$lang$type = true;

day8.re_frame_10x.utils.pretty_print_condensed.LimitedStringBufferWriter.cljs$lang$ctorStr = "day8.re-frame-10x.utils.pretty-print-condensed/LimitedStringBufferWriter";

day8.re_frame_10x.utils.pretty_print_condensed.LimitedStringBufferWriter.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"day8.re-frame-10x.utils.pretty-print-condensed/LimitedStringBufferWriter");
});

/**
 * Positional factory function for day8.re-frame-10x.utils.pretty-print-condensed/LimitedStringBufferWriter.
 */
day8.re_frame_10x.utils.pretty_print_condensed.__GT_LimitedStringBufferWriter = (function day8$re_frame_10x$utils$pretty_print_condensed$__GT_LimitedStringBufferWriter(sb,max_string_length,over_limit_QMARK_){
return (new day8.re_frame_10x.utils.pretty_print_condensed.LimitedStringBufferWriter(sb,max_string_length,over_limit_QMARK_));
});

day8.re_frame_10x.utils.pretty_print_condensed.pr_sb_with_opts = (function day8$re_frame_10x$utils$pretty_print_condensed$pr_sb_with_opts(objs,opts){
var sb = (new goog.string.StringBuffer());
var writer = (new day8.re_frame_10x.utils.pretty_print_condensed.LimitedStringBufferWriter(sb,new cljs.core.Keyword("debux","max-string-length","debux/max-string-length",-318600534).cljs$core$IFn$_invoke$arity$2(opts,(72)),false));
day8.re_frame_10x.utils.pretty_print_condensed.pr_seq_writer.call(null,objs,writer,opts);

cljs.core._flush.call(null,writer);

return sb;
});
/**
 * Prints a sequence of objects to a string, observing all the
 *   options given in opts
 */
day8.re_frame_10x.utils.pretty_print_condensed.pr_str_with_opts = (function day8$re_frame_10x$utils$pretty_print_condensed$pr_str_with_opts(objs,opts){
if(cljs.core.empty_QMARK_.call(null,objs)){
return "";
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.utils.pretty_print_condensed.pr_sb_with_opts.call(null,objs,opts))].join('');
}
});
day8.re_frame_10x.utils.pretty_print_condensed.pr_opts = (function day8$re_frame_10x$utils$pretty_print_condensed$pr_opts(){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"flush-on-newline","flush-on-newline",-151457939),cljs.core._STAR_flush_on_newline_STAR_,new cljs.core.Keyword(null,"readably","readably",1129599760),cljs.core._STAR_print_readably_STAR_,new cljs.core.Keyword(null,"meta","meta",1499536964),cljs.core._STAR_print_meta_STAR_,new cljs.core.Keyword(null,"dup","dup",556298533),cljs.core._STAR_print_dup_STAR_,new cljs.core.Keyword(null,"print-length","print-length",1931866356),cljs.core._STAR_print_length_STAR_], null);
});
/**
 * Like pr, but truncates output at n characters. Use for efficient printing where
 *   you don't want to pay the cost of printing the (possibly large) data structure.
 */
day8.re_frame_10x.utils.pretty_print_condensed.pr_str_truncated = (function day8$re_frame_10x$utils$pretty_print_condensed$pr_str_truncated(var_args){
var args__4502__auto__ = [];
var len__4499__auto___33959 = arguments.length;
var i__4500__auto___33960 = (0);
while(true){
if((i__4500__auto___33960 < len__4499__auto___33959)){
args__4502__auto__.push((arguments[i__4500__auto___33960]));

var G__33961 = (i__4500__auto___33960 + (1));
i__4500__auto___33960 = G__33961;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return day8.re_frame_10x.utils.pretty_print_condensed.pr_str_truncated.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

day8.re_frame_10x.utils.pretty_print_condensed.pr_str_truncated.cljs$core$IFn$_invoke$arity$variadic = (function (n,objs){
var opts = day8.re_frame_10x.utils.pretty_print_condensed.pr_opts.call(null);
return day8.re_frame_10x.utils.pretty_print_condensed.truncate_string.call(null,n,day8.re_frame_10x.utils.pretty_print_condensed.pr_str_with_opts.call(null,objs,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"print-length","print-length",1931866356),(n / (2)),new cljs.core.Keyword(null,"more-marker","more-marker",-14717935),"\u2026",new cljs.core.Keyword("debux","max-string-length","debux/max-string-length",-318600534),(n + (1)),new cljs.core.Keyword(null,"alt-impl","alt-impl",670969595),day8.re_frame_10x.utils.pretty_print_condensed.pr_writer_impl)));
});

day8.re_frame_10x.utils.pretty_print_condensed.pr_str_truncated.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
day8.re_frame_10x.utils.pretty_print_condensed.pr_str_truncated.cljs$lang$applyTo = (function (seq33957){
var G__33958 = cljs.core.first.call(null,seq33957);
var seq33957__$1 = cljs.core.next.call(null,seq33957);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33958,seq33957__$1);
});


//# sourceMappingURL=pretty_print_condensed.js.map?rel=1530661651478
