// Compiled by ClojureScript 1.10.238 {}
goog.provide('posh.lib.datom_matcher');
goog.require('cljs.core');
goog.require('clojure.set');
posh.lib.datom_matcher.datom_match_pattern_QMARK_ = (function posh$lib$datom_matcher$datom_match_pattern_QMARK_(pattern,datom){
while(true){
if(cljs.core.empty_QMARK_.call(null,pattern)){
return true;
} else {
if(cljs.core.truth_((function (){var p = cljs.core.first.call(null,pattern);
var or__3922__auto__ = cljs.core._EQ_.call(null,p,new cljs.core.Symbol(null,"_","_",-1201019570,null));
if(or__3922__auto__){
return or__3922__auto__;
} else {
var or__3922__auto____$1 = (function (){var and__3911__auto__ = cljs.core.set_QMARK_.call(null,p);
if(and__3911__auto__){
return p.call(null,cljs.core.first.call(null,datom));
} else {
return and__3911__auto__;
}
})();
if(cljs.core.truth_(or__3922__auto____$1)){
return or__3922__auto____$1;
} else {
return cljs.core._EQ_.call(null,p,cljs.core.first.call(null,datom));
}
}
})())){
var G__21187 = cljs.core.rest.call(null,pattern);
var G__21188 = cljs.core.rest.call(null,datom);
pattern = G__21187;
datom = G__21188;
continue;
} else {
return null;
}
}
break;
}
});
posh.lib.datom_matcher.datom_match_QMARK_ = (function posh$lib$datom_matcher$datom_match_QMARK_(patterns,datom){
return cljs.core.some.call(null,(function (p1__21189_SHARP_){
return posh.lib.datom_matcher.datom_match_pattern_QMARK_.call(null,p1__21189_SHARP_,datom);
}),patterns);
});
posh.lib.datom_matcher.any_datoms_match_QMARK_ = (function posh$lib$datom_matcher$any_datoms_match_QMARK_(patterns,datoms){
var G__21191 = patterns;
if(cljs.core._EQ_.call(null,null,G__21191)){
return null;
} else {
if(cljs.core._EQ_.call(null,cljs.core.PersistentVector.EMPTY,G__21191)){
return null;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null),G__21191)){
return true;
} else {
return cljs.core.some.call(null,((function (G__21191){
return (function (p1__21190_SHARP_){
return posh.lib.datom_matcher.datom_match_QMARK_.call(null,patterns,p1__21190_SHARP_);
});})(G__21191))
,datoms);

}
}
}
});
posh.lib.datom_matcher.matching_datoms = (function posh$lib$datom_matcher$matching_datoms(patterns,datoms){
var G__21193 = patterns;
if(cljs.core._EQ_.call(null,cljs.core.PersistentVector.EMPTY,G__21193)){
return datoms;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null),G__21193)){
return datoms;
} else {
if(cljs.core._EQ_.call(null,null,G__21193)){
return null;
} else {
return cljs.core.filter.call(null,((function (G__21193){
return (function (p1__21192_SHARP_){
return posh.lib.datom_matcher.datom_match_QMARK_.call(null,patterns,p1__21192_SHARP_);
});})(G__21193))
,datoms);

}
}
}
});
posh.lib.datom_matcher.combine_entids = (function posh$lib$datom_matcher$combine_entids(entids,rest_datom,patterns,new_patterns,leftover_patterns){
while(true){
if(cljs.core.empty_QMARK_.call(null,patterns)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"new-patterns","new-patterns",404552774),cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,entids,rest_datom)),new_patterns),new cljs.core.Keyword(null,"leftover-patterns","leftover-patterns",377032963),leftover_patterns], null);
} else {
if(cljs.core._EQ_.call(null,rest_datom,cljs.core.rest.call(null,cljs.core.first.call(null,patterns)))){
var G__21194 = clojure.set.union.call(null,entids,((cljs.core.set_QMARK_.call(null,cljs.core.ffirst.call(null,patterns)))?cljs.core.ffirst.call(null,patterns):cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.ffirst.call(null,patterns)], null))));
var G__21195 = rest_datom;
var G__21196 = cljs.core.rest.call(null,patterns);
var G__21197 = new_patterns;
var G__21198 = leftover_patterns;
entids = G__21194;
rest_datom = G__21195;
patterns = G__21196;
new_patterns = G__21197;
leftover_patterns = G__21198;
continue;
} else {
var G__21199 = entids;
var G__21200 = rest_datom;
var G__21201 = cljs.core.rest.call(null,patterns);
var G__21202 = new_patterns;
var G__21203 = cljs.core.cons.call(null,cljs.core.first.call(null,patterns),leftover_patterns);
entids = G__21199;
rest_datom = G__21200;
patterns = G__21201;
new_patterns = G__21202;
leftover_patterns = G__21203;
continue;
}
}
break;
}
});
posh.lib.datom_matcher.reduce_patterns = (function posh$lib$datom_matcher$reduce_patterns(patterns){
var new_patterns = cljs.core.PersistentVector.EMPTY;
var leftover_patterns = patterns;
while(true){
if(cljs.core.empty_QMARK_.call(null,leftover_patterns)){
return new_patterns;
} else {
if((function (){var id = cljs.core.ffirst.call(null,leftover_patterns);
return ((cljs.core.set_QMARK_.call(null,id)) || (typeof id === 'number'));
})()){
var r = posh.lib.datom_matcher.combine_entids.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.rest.call(null,cljs.core.first.call(null,leftover_patterns)),leftover_patterns,new_patterns,cljs.core.PersistentVector.EMPTY);
var G__21204 = new cljs.core.Keyword(null,"new-patterns","new-patterns",404552774).cljs$core$IFn$_invoke$arity$1(r);
var G__21205 = new cljs.core.Keyword(null,"leftover-patterns","leftover-patterns",377032963).cljs$core$IFn$_invoke$arity$1(r);
new_patterns = G__21204;
leftover_patterns = G__21205;
continue;
} else {
var G__21206 = cljs.core.cons.call(null,cljs.core.first.call(null,leftover_patterns),new_patterns);
var G__21207 = cljs.core.rest.call(null,leftover_patterns);
new_patterns = G__21206;
leftover_patterns = G__21207;
continue;
}
}
break;
}
});

//# sourceMappingURL=datom_matcher.js.map?rel=1530661622868
