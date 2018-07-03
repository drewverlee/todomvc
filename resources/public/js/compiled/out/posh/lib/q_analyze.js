// Compiled by ClojureScript 1.10.238 {}
goog.provide('posh.lib.q_analyze');
goog.require('cljs.core');
goog.require('posh.lib.util');
goog.require('datascript.core');
goog.require('posh.lib.datom_matcher');
goog.require('posh.lib.pull_analyze');
goog.require('cljs.core.match');
posh.lib.q_analyze.take_until = (function posh$lib$q_analyze$take_until(stop_at_QMARK_,ls){
if(cljs.core.truth_((function (){var or__3922__auto__ = cljs.core.empty_QMARK_.call(null,ls);
if(or__3922__auto__){
return or__3922__auto__;
} else {
return stop_at_QMARK_.call(null,cljs.core.first.call(null,ls));
}
})())){
return cljs.core.PersistentVector.EMPTY;
} else {
return cljs.core.cons.call(null,cljs.core.first.call(null,ls),posh.lib.q_analyze.take_until.call(null,stop_at_QMARK_,cljs.core.rest.call(null,ls)));
}
});
posh.lib.q_analyze.rest_at = (function posh$lib$q_analyze$rest_at(rest_at_QMARK_,ls){
while(true){
if(cljs.core.truth_((function (){var or__3922__auto__ = cljs.core.empty_QMARK_.call(null,ls);
if(or__3922__auto__){
return or__3922__auto__;
} else {
return rest_at_QMARK_.call(null,cljs.core.first.call(null,ls));
}
})())){
return ls;
} else {
var G__24519 = rest_at_QMARK_;
var G__24520 = cljs.core.rest.call(null,ls);
rest_at_QMARK_ = G__24519;
ls = G__24520;
continue;
}
break;
}
});
posh.lib.q_analyze.split_list_at = (function posh$lib$q_analyze$split_list_at(split_at_QMARK_,ls){
if(cljs.core.empty_QMARK_.call(null,ls)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.merge.call(null,cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first.call(null,ls),posh.lib.q_analyze.take_until.call(null,split_at_QMARK_,posh.lib.q_analyze.take_until.call(null,split_at_QMARK_,cljs.core.rest.call(null,ls)))]),posh.lib.q_analyze.split_list_at.call(null,split_at_QMARK_,posh.lib.q_analyze.rest_at.call(null,split_at_QMARK_,cljs.core.rest.call(null,ls))));
}
});
posh.lib.q_analyze.query_to_map = (function posh$lib$q_analyze$query_to_map(query){
if(!(cljs.core.map_QMARK_.call(null,query))){
return posh.lib.q_analyze.split_list_at.call(null,cljs.core.keyword_QMARK_,query);
} else {
return query;
}
});
posh.lib.q_analyze.dbvar_QMARK_ = (function posh$lib$q_analyze$dbvar_QMARK_(x){
return (((x instanceof cljs.core.Symbol)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('')),"$")));
});
posh.lib.q_analyze.qvar_QMARK_ = (function posh$lib$q_analyze$qvar_QMARK_(x){
return (((x instanceof cljs.core.Symbol)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('')),"?")));
});
posh.lib.q_analyze.get_all_vars = (function posh$lib$q_analyze$get_all_vars(query){
if(cljs.core.empty_QMARK_.call(null,query)){
return cljs.core.PersistentHashSet.EMPTY;
} else {
if(cljs.core.coll_QMARK_.call(null,cljs.core.first.call(null,query))){
return clojure.set.union.call(null,posh.lib.q_analyze.get_all_vars.call(null,cljs.core.first.call(null,query)),posh.lib.q_analyze.get_all_vars.call(null,cljs.core.rest.call(null,query)));
} else {
if(cljs.core.truth_(posh.lib.q_analyze.qvar_QMARK_.call(null,cljs.core.first.call(null,query)))){
return cljs.core.conj.call(null,posh.lib.q_analyze.get_all_vars.call(null,cljs.core.rest.call(null,query)),cljs.core.first.call(null,query));
} else {
return posh.lib.q_analyze.get_all_vars.call(null,cljs.core.rest.call(null,query));

}
}
}
});
posh.lib.q_analyze.qvar_gen = (function (){var qvar_count = cljs.core.atom.call(null,(3284832));
return ((function (qvar_count){
return (function (){
return cljs.core.symbol.call(null,["?var",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.swap_BANG_.call(null,qvar_count,cljs.core.inc))].join(''));
});
;})(qvar_count))
})();
posh.lib.q_analyze.eav_QMARK_ = (function posh$lib$q_analyze$eav_QMARK_(v){
return ((cljs.core.vector_QMARK_.call(null,v)) && (cljs.core.not.call(null,cljs.core.some.call(null,cljs.core.coll_QMARK_,v))));
});
posh.lib.q_analyze.wildcard_QMARK_ = (function posh$lib$q_analyze$wildcard_QMARK_(s){
return cljs.core._EQ_.call(null,s,new cljs.core.Symbol(null,"_","_",-1201019570,null));
});
posh.lib.q_analyze.normalize_eav_helper = (function posh$lib$q_analyze$normalize_eav_helper(eav,n,neweav,vars){
if(cljs.core._EQ_.call(null,n,(0))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"eav","eav",-1118737308),neweav,new cljs.core.Keyword(null,"vars","vars",-2046957217),vars], null);
} else {
if(cljs.core.truth_((function (){var and__3911__auto__ = cljs.core.first.call(null,eav);
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not.call(null,posh.lib.q_analyze.wildcard_QMARK_.call(null,cljs.core.first.call(null,eav)));
} else {
return and__3911__auto__;
}
})())){
return posh.lib.q_analyze.normalize_eav_helper.call(null,cljs.core.rest.call(null,eav),(n - (1)),cljs.core.conj.call(null,neweav,cljs.core.first.call(null,eav)),vars);
} else {
var var$ = posh.lib.q_analyze.qvar_gen.call(null);
return posh.lib.q_analyze.normalize_eav_helper.call(null,cljs.core.rest.call(null,eav),(n - (1)),cljs.core.conj.call(null,neweav,var$),cljs.core.conj.call(null,vars,var$));
}
}
});
posh.lib.q_analyze.normalize_eav = (function posh$lib$q_analyze$normalize_eav(eav){
var dbeav = (cljs.core.truth_(posh.lib.q_analyze.dbvar_QMARK_.call(null,cljs.core.first.call(null,eav)))?eav:cljs.core.cons.call(null,cljs.core.symbol.call(null,"$"),eav));
return cljs.core.vec.call(null,cljs.core.cons.call(null,cljs.core.first.call(null,dbeav),cljs.core.concat.call(null,new cljs.core.Keyword(null,"eav","eav",-1118737308).cljs$core$IFn$_invoke$arity$1(posh.lib.q_analyze.normalize_eav_helper.call(null,cljs.core.rest.call(null,dbeav),(3),cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY)),cljs.core.drop.call(null,(4),dbeav))));
});
posh.lib.q_analyze.normalize_all_eavs = (function posh$lib$q_analyze$normalize_all_eavs(where){
if(cljs.core.empty_QMARK_.call(null,where)){
return cljs.core.PersistentVector.EMPTY;
} else {
if(cljs.core.list_QMARK_.call(null,where)){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.first.call(null,where)]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"or-join","or-join",591375469,null),new cljs.core.Symbol(null,"not-join","not-join",-645515756,null)], null)))){
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,where),cljs.core.second.call(null,where)], null),posh.lib.q_analyze.normalize_all_eavs.call(null,cljs.core.vec.call(null,cljs.core.drop.call(null,(2),where))));
} else {
return cljs.core.cons.call(null,cljs.core.first.call(null,where),posh.lib.q_analyze.normalize_all_eavs.call(null,cljs.core.vec.call(null,cljs.core.rest.call(null,where))));
}
} else {
if(cljs.core.truth_(posh.lib.q_analyze.eav_QMARK_.call(null,where))){
return posh.lib.q_analyze.normalize_eav.call(null,where);
} else {
if(((cljs.core.vector_QMARK_.call(null,where)) && (cljs.core.list_QMARK_.call(null,cljs.core.first.call(null,where))))){
return where;
} else {
if(cljs.core.coll_QMARK_.call(null,where)){
return cljs.core.vec.call(null,cljs.core.map.call(null,posh.lib.q_analyze.normalize_all_eavs,where));
} else {
return where;

}
}
}
}
}
});
posh.lib.q_analyze.get_eavs = (function posh$lib$q_analyze$get_eavs(where){
if(cljs.core.empty_QMARK_.call(null,where)){
return cljs.core.PersistentVector.EMPTY;
} else {
var item = cljs.core.first.call(null,where);
if(cljs.core.seq_QMARK_.call(null,item)){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.first.call(null,item)]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"or-join","or-join",591375469,null),new cljs.core.Symbol(null,"not-join","not-join",-645515756,null)], null)))){
return cljs.core.concat.call(null,posh.lib.q_analyze.get_eavs.call(null,cljs.core.vec.call(null,cljs.core.rest.call(null,where))),posh.lib.q_analyze.get_eavs.call(null,cljs.core.vec.call(null,cljs.core.drop.call(null,(2),item))));
} else {
return cljs.core.concat.call(null,posh.lib.q_analyze.get_eavs.call(null,cljs.core.vec.call(null,cljs.core.rest.call(null,where))),posh.lib.q_analyze.get_eavs.call(null,cljs.core.vec.call(null,cljs.core.rest.call(null,item))));
}
} else {
if(cljs.core.truth_(posh.lib.q_analyze.eav_QMARK_.call(null,item))){
return cljs.core.cons.call(null,item,posh.lib.q_analyze.get_eavs.call(null,cljs.core.rest.call(null,where)));
} else {
if(((cljs.core.vector_QMARK_.call(null,item)) && (cljs.core.seq_QMARK_.call(null,cljs.core.first.call(null,item))))){
var ocr_24521 = cljs.core.vec.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vec.call(null,cljs.core.first.call(null,item))], null),cljs.core.rest.call(null,item)));
try{if(((cljs.core.vector_QMARK_.call(null,ocr_24521)) && ((cljs.core.count.call(null,ocr_24521) === 2)))){
try{var ocr_24521_0__24524 = cljs.core.nth.call(null,ocr_24521,(0));
if(((cljs.core.vector_QMARK_.call(null,ocr_24521_0__24524)) && ((cljs.core.count.call(null,ocr_24521_0__24524) === 5)))){
try{var ocr_24521_0__24524_0__24526 = cljs.core.nth.call(null,ocr_24521_0__24524,(0));
if(cljs.core._EQ_.call(null,ocr_24521_0__24524_0__24526,new cljs.core.Symbol(null,"get-else","get-else",1312024065,null))){
var db = cljs.core.nth.call(null,ocr_24521_0__24524,(1));
var e = cljs.core.nth.call(null,ocr_24521_0__24524,(2));
var a = cljs.core.nth.call(null,ocr_24521_0__24524,(3));
var v = cljs.core.nth.call(null,ocr_24521,(1));
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [db,e,a,v], null)], null),posh.lib.q_analyze.get_eavs.call(null,cljs.core.vec.call(null,cljs.core.rest.call(null,where))));
} else {
throw cljs.core.match.backtrack;

}
}catch (e24533){if((e24533 instanceof Error)){
var e__23725__auto__ = e24533;
if((e__23725__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23725__auto__;
}
} else {
throw e24533;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e24532){if((e24532 instanceof Error)){
var e__23725__auto__ = e24532;
if((e__23725__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23725__auto__;
}
} else {
throw e24532;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e24531){if((e24531 instanceof Error)){
var e__23725__auto__ = e24531;
if((e__23725__auto__ === cljs.core.match.backtrack)){
return posh.lib.q_analyze.get_eavs.call(null,cljs.core.vec.call(null,cljs.core.rest.call(null,where)));
} else {
throw e__23725__auto__;
}
} else {
throw e24531;

}
}} else {
return posh.lib.q_analyze.get_eavs.call(null,cljs.core.vec.call(null,cljs.core.rest.call(null,where)));

}
}
}
}
});
posh.lib.q_analyze.qm_to_query = (function posh$lib$q_analyze$qm_to_query(qm){
return cljs.core.reduce.call(null,(function (xs,p__24534){
var vec__24535 = p__24534;
var k = cljs.core.nth.call(null,vec__24535,(0),null);
var v = cljs.core.nth.call(null,vec__24535,(1),null);
return cljs.core.concat.call(null,xs,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null),v);
}),cljs.core.PersistentVector.EMPTY,qm);
});
posh.lib.q_analyze.create_q_datoms = (function posh$lib$q_analyze$create_q_datoms(results,eavs,vars){
return cljs.core.set.call(null,cljs.core.mapcat.call(null,(function (r){
var vs = cljs.core.zipmap.call(null,vars,r);
return cljs.core.map.call(null,((function (vs){
return (function (eav){
return cljs.core.vec.call(null,cljs.core.map.call(null,((function (vs){
return (function (p1__24538_SHARP_){
if(cljs.core.truth_(posh.lib.q_analyze.qvar_QMARK_.call(null,p1__24538_SHARP_))){
return cljs.core.get.call(null,vs,p1__24538_SHARP_);
} else {
return p1__24538_SHARP_;
}
});})(vs))
,eav));
});})(vs))
,eavs);
}),results));
});
posh.lib.q_analyze.count_qvars = (function posh$lib$q_analyze$count_qvars(xs){
if(cljs.core.empty_QMARK_.call(null,xs)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
if(cljs.core.coll_QMARK_.call(null,cljs.core.first.call(null,xs))){
return cljs.core.merge_with.call(null,cljs.core._PLUS_,posh.lib.q_analyze.count_qvars.call(null,cljs.core.first.call(null,xs)),posh.lib.q_analyze.count_qvars.call(null,cljs.core.rest.call(null,xs)));
} else {
return cljs.core.merge_with.call(null,cljs.core._PLUS_,(cljs.core.truth_(posh.lib.q_analyze.qvar_QMARK_.call(null,cljs.core.first.call(null,xs)))?cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first.call(null,xs),(1)]):null),posh.lib.q_analyze.count_qvars.call(null,cljs.core.rest.call(null,xs)));

}
}
});
posh.lib.q_analyze.fill_qvar_set = (function posh$lib$q_analyze$fill_qvar_set(qvar,results,where){
var iter__4292__auto__ = (function posh$lib$q_analyze$fill_qvar_set_$_iter__24539(s__24540){
return (new cljs.core.LazySeq(null,(function (){
var s__24540__$1 = s__24540;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__24540__$1);
if(temp__4657__auto__){
var s__24540__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__24540__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__24540__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__24542 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__24541 = (0);
while(true){
if((i__24541 < size__4291__auto__)){
var r = cljs.core._nth.call(null,c__4290__auto__,i__24541);
cljs.core.chunk_append.call(null,b__24542,(function (){var vars = cljs.core.zipmap.call(null,where,r);
return cljs.core.get.call(null,vars,qvar);
})());

var G__24543 = (i__24541 + (1));
i__24541 = G__24543;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24542),posh$lib$q_analyze$fill_qvar_set_$_iter__24539.call(null,cljs.core.chunk_rest.call(null,s__24540__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24542),null);
}
} else {
var r = cljs.core.first.call(null,s__24540__$2);
return cljs.core.cons.call(null,(function (){var vars = cljs.core.zipmap.call(null,where,r);
return cljs.core.get.call(null,vars,qvar);
})(),posh$lib$q_analyze$fill_qvar_set_$_iter__24539.call(null,cljs.core.rest.call(null,s__24540__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4292__auto__.call(null,results);
});
posh.lib.q_analyze.seq_merge_with = (function posh$lib$q_analyze$seq_merge_with(f,seq1,seq2){
if(cljs.core.empty_QMARK_.call(null,seq1)){
return cljs.core.PersistentVector.EMPTY;
} else {
return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,seq1),cljs.core.first.call(null,seq2)),posh.lib.q_analyze.seq_merge_with.call(null,f,cljs.core.rest.call(null,seq1),cljs.core.rest.call(null,seq2)));
}
});
posh.lib.q_analyze.stack_vectors = (function posh$lib$q_analyze$stack_vectors(vs){
return cljs.core.reduce.call(null,(function (stacked,eav){
return posh.lib.q_analyze.seq_merge_with.call(null,cljs.core.conj,stacked,eav);
}),cljs.core.take.call(null,cljs.core.count.call(null,cljs.core.first.call(null,vs)),cljs.core.repeat.call(null,cljs.core.PersistentHashSet.EMPTY)),vs);
});
posh.lib.q_analyze.pattern_from_eav__old = (function posh$lib$q_analyze$pattern_from_eav__old(vars,p__24546){
var vec__24547 = p__24546;
var e = cljs.core.nth.call(null,vec__24547,(0),null);
var a = cljs.core.nth.call(null,vec__24547,(1),null);
var v = cljs.core.nth.call(null,vec__24547,(2),null);
var eav = vec__24547;
var vec__24550 = cljs.core.map.call(null,posh.lib.q_analyze.qvar_QMARK_,eav);
var qe = cljs.core.nth.call(null,vec__24550,(0),null);
var qa = cljs.core.nth.call(null,vec__24550,(1),null);
var qv = cljs.core.nth.call(null,vec__24550,(2),null);
var iter__4292__auto__ = ((function (vec__24550,qe,qa,qv,vec__24547,e,a,v,eav){
return (function posh$lib$q_analyze$pattern_from_eav__old_$_iter__24553(s__24554){
return (new cljs.core.LazySeq(null,((function (vec__24550,qe,qa,qv,vec__24547,e,a,v,eav){
return (function (){
var s__24554__$1 = s__24554;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__24554__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var ee = cljs.core.first.call(null,xs__5205__auto__);
var iterys__4288__auto__ = ((function (s__24554__$1,ee,xs__5205__auto__,temp__4657__auto__,vec__24550,qe,qa,qv,vec__24547,e,a,v,eav){
return (function posh$lib$q_analyze$pattern_from_eav__old_$_iter__24553_$_iter__24555(s__24556){
return (new cljs.core.LazySeq(null,((function (s__24554__$1,ee,xs__5205__auto__,temp__4657__auto__,vec__24550,qe,qa,qv,vec__24547,e,a,v,eav){
return (function (){
var s__24556__$1 = s__24556;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__24556__$1);
if(temp__4657__auto____$1){
var xs__5205__auto____$1 = temp__4657__auto____$1;
var aa = cljs.core.first.call(null,xs__5205__auto____$1);
var iterys__4288__auto__ = ((function (s__24556__$1,s__24554__$1,aa,xs__5205__auto____$1,temp__4657__auto____$1,ee,xs__5205__auto__,temp__4657__auto__,vec__24550,qe,qa,qv,vec__24547,e,a,v,eav){
return (function posh$lib$q_analyze$pattern_from_eav__old_$_iter__24553_$_iter__24555_$_iter__24557(s__24558){
return (new cljs.core.LazySeq(null,((function (s__24556__$1,s__24554__$1,aa,xs__5205__auto____$1,temp__4657__auto____$1,ee,xs__5205__auto__,temp__4657__auto__,vec__24550,qe,qa,qv,vec__24547,e,a,v,eav){
return (function (){
var s__24558__$1 = s__24558;
while(true){
var temp__4657__auto____$2 = cljs.core.seq.call(null,s__24558__$1);
if(temp__4657__auto____$2){
var s__24558__$2 = temp__4657__auto____$2;
if(cljs.core.chunked_seq_QMARK_.call(null,s__24558__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__24558__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__24560 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__24559 = (0);
while(true){
if((i__24559 < size__4291__auto__)){
var vv = cljs.core._nth.call(null,c__4290__auto__,i__24559);
if((function (){var wildcard_count = cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,((function (i__24559,s__24558__$1,s__24556__$1,s__24554__$1,vv,c__4290__auto__,size__4291__auto__,b__24560,s__24558__$2,temp__4657__auto____$2,aa,xs__5205__auto____$1,temp__4657__auto____$1,ee,xs__5205__auto__,temp__4657__auto__,vec__24550,qe,qa,qv,vec__24547,e,a,v,eav){
return (function (p1__24544_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"_","_",-1201019570,null),p1__24544_SHARP_)){
return (1);
} else {
return (0);
}
});})(i__24559,s__24558__$1,s__24556__$1,s__24554__$1,vv,c__4290__auto__,size__4291__auto__,b__24560,s__24558__$2,temp__4657__auto____$2,aa,xs__5205__auto____$1,temp__4657__auto____$1,ee,xs__5205__auto__,temp__4657__auto__,vec__24550,qe,qa,qv,vec__24547,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ee,aa,vv], null)));
var exposed_qvars = cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,((function (i__24559,s__24558__$1,s__24556__$1,s__24554__$1,wildcard_count,vv,c__4290__auto__,size__4291__auto__,b__24560,s__24558__$2,temp__4657__auto____$2,aa,xs__5205__auto____$1,temp__4657__auto____$1,ee,xs__5205__auto__,temp__4657__auto__,vec__24550,qe,qa,qv,vec__24547,e,a,v,eav){
return (function (p__24561){
var vec__24562 = p__24561;
var var_QMARK_ = cljs.core.nth.call(null,vec__24562,(0),null);
var val = cljs.core.nth.call(null,vec__24562,(1),null);
if(cljs.core.truth_((function (){var and__3911__auto__ = var_QMARK_;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not_EQ_.call(null,val,new cljs.core.Symbol(null,"_","_",-1201019570,null));
} else {
return and__3911__auto__;
}
})())){
return (1);
} else {
return (0);
}
});})(i__24559,s__24558__$1,s__24556__$1,s__24554__$1,wildcard_count,vv,c__4290__auto__,size__4291__auto__,b__24560,s__24558__$2,temp__4657__auto____$2,aa,xs__5205__auto____$1,temp__4657__auto____$1,ee,xs__5205__auto__,temp__4657__auto__,vec__24550,qe,qa,qv,vec__24547,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qe,ee], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qa,aa], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qv,vv], null)], null)));
var qvar_count = cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,((function (i__24559,s__24558__$1,s__24556__$1,s__24554__$1,wildcard_count,exposed_qvars,vv,c__4290__auto__,size__4291__auto__,b__24560,s__24558__$2,temp__4657__auto____$2,aa,xs__5205__auto____$1,temp__4657__auto____$1,ee,xs__5205__auto__,temp__4657__auto__,vec__24550,qe,qa,qv,vec__24547,e,a,v,eav){
return (function (p1__24545_SHARP_){
if(cljs.core.truth_(p1__24545_SHARP_)){
return (1);
} else {
return (0);
}
});})(i__24559,s__24558__$1,s__24556__$1,s__24554__$1,wildcard_count,exposed_qvars,vv,c__4290__auto__,size__4291__auto__,b__24560,s__24558__$2,temp__4657__auto____$2,aa,xs__5205__auto____$1,temp__4657__auto____$1,ee,xs__5205__auto__,temp__4657__auto__,vec__24550,qe,qa,qv,vec__24547,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [qe,qa,qv], null)));
return (((wildcard_count >= (1))) && ((((((qvar_count > (1))) && (cljs.core._EQ_.call(null,(1),exposed_qvars)))) || ((qvar_count <= (1))))) && ((wildcard_count <= qvar_count)));
})()){
cljs.core.chunk_append.call(null,b__24560,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ee,aa,vv], null));

var G__24569 = (i__24559 + (1));
i__24559 = G__24569;
continue;
} else {
var G__24570 = (i__24559 + (1));
i__24559 = G__24570;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24560),posh$lib$q_analyze$pattern_from_eav__old_$_iter__24553_$_iter__24555_$_iter__24557.call(null,cljs.core.chunk_rest.call(null,s__24558__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24560),null);
}
} else {
var vv = cljs.core.first.call(null,s__24558__$2);
if((function (){var wildcard_count = cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,((function (s__24558__$1,s__24556__$1,s__24554__$1,vv,s__24558__$2,temp__4657__auto____$2,aa,xs__5205__auto____$1,temp__4657__auto____$1,ee,xs__5205__auto__,temp__4657__auto__,vec__24550,qe,qa,qv,vec__24547,e,a,v,eav){
return (function (p1__24544_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"_","_",-1201019570,null),p1__24544_SHARP_)){
return (1);
} else {
return (0);
}
});})(s__24558__$1,s__24556__$1,s__24554__$1,vv,s__24558__$2,temp__4657__auto____$2,aa,xs__5205__auto____$1,temp__4657__auto____$1,ee,xs__5205__auto__,temp__4657__auto__,vec__24550,qe,qa,qv,vec__24547,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ee,aa,vv], null)));
var exposed_qvars = cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,((function (s__24558__$1,s__24556__$1,s__24554__$1,wildcard_count,vv,s__24558__$2,temp__4657__auto____$2,aa,xs__5205__auto____$1,temp__4657__auto____$1,ee,xs__5205__auto__,temp__4657__auto__,vec__24550,qe,qa,qv,vec__24547,e,a,v,eav){
return (function (p__24565){
var vec__24566 = p__24565;
var var_QMARK_ = cljs.core.nth.call(null,vec__24566,(0),null);
var val = cljs.core.nth.call(null,vec__24566,(1),null);
if(cljs.core.truth_((function (){var and__3911__auto__ = var_QMARK_;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not_EQ_.call(null,val,new cljs.core.Symbol(null,"_","_",-1201019570,null));
} else {
return and__3911__auto__;
}
})())){
return (1);
} else {
return (0);
}
});})(s__24558__$1,s__24556__$1,s__24554__$1,wildcard_count,vv,s__24558__$2,temp__4657__auto____$2,aa,xs__5205__auto____$1,temp__4657__auto____$1,ee,xs__5205__auto__,temp__4657__auto__,vec__24550,qe,qa,qv,vec__24547,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qe,ee], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qa,aa], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qv,vv], null)], null)));
var qvar_count = cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,((function (s__24558__$1,s__24556__$1,s__24554__$1,wildcard_count,exposed_qvars,vv,s__24558__$2,temp__4657__auto____$2,aa,xs__5205__auto____$1,temp__4657__auto____$1,ee,xs__5205__auto__,temp__4657__auto__,vec__24550,qe,qa,qv,vec__24547,e,a,v,eav){
return (function (p1__24545_SHARP_){
if(cljs.core.truth_(p1__24545_SHARP_)){
return (1);
} else {
return (0);
}
});})(s__24558__$1,s__24556__$1,s__24554__$1,wildcard_count,exposed_qvars,vv,s__24558__$2,temp__4657__auto____$2,aa,xs__5205__auto____$1,temp__4657__auto____$1,ee,xs__5205__auto__,temp__4657__auto__,vec__24550,qe,qa,qv,vec__24547,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [qe,qa,qv], null)));
return (((wildcard_count >= (1))) && ((((((qvar_count > (1))) && (cljs.core._EQ_.call(null,(1),exposed_qvars)))) || ((qvar_count <= (1))))) && ((wildcard_count <= qvar_count)));
})()){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ee,aa,vv], null),posh$lib$q_analyze$pattern_from_eav__old_$_iter__24553_$_iter__24555_$_iter__24557.call(null,cljs.core.rest.call(null,s__24558__$2)));
} else {
var G__24571 = cljs.core.rest.call(null,s__24558__$2);
s__24558__$1 = G__24571;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__24556__$1,s__24554__$1,aa,xs__5205__auto____$1,temp__4657__auto____$1,ee,xs__5205__auto__,temp__4657__auto__,vec__24550,qe,qa,qv,vec__24547,e,a,v,eav))
,null,null));
});})(s__24556__$1,s__24554__$1,aa,xs__5205__auto____$1,temp__4657__auto____$1,ee,xs__5205__auto__,temp__4657__auto__,vec__24550,qe,qa,qv,vec__24547,e,a,v,eav))
;
var fs__4289__auto__ = cljs.core.seq.call(null,iterys__4288__auto__.call(null,(cljs.core.truth_(qv)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),cljs.core.get.call(null,vars,v)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v], null))));
if(fs__4289__auto__){
return cljs.core.concat.call(null,fs__4289__auto__,posh$lib$q_analyze$pattern_from_eav__old_$_iter__24553_$_iter__24555.call(null,cljs.core.rest.call(null,s__24556__$1)));
} else {
var G__24572 = cljs.core.rest.call(null,s__24556__$1);
s__24556__$1 = G__24572;
continue;
}
} else {
return null;
}
break;
}
});})(s__24554__$1,ee,xs__5205__auto__,temp__4657__auto__,vec__24550,qe,qa,qv,vec__24547,e,a,v,eav))
,null,null));
});})(s__24554__$1,ee,xs__5205__auto__,temp__4657__auto__,vec__24550,qe,qa,qv,vec__24547,e,a,v,eav))
;
var fs__4289__auto__ = cljs.core.seq.call(null,iterys__4288__auto__.call(null,(cljs.core.truth_(qa)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),cljs.core.get.call(null,vars,a)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [a], null))));
if(fs__4289__auto__){
return cljs.core.concat.call(null,fs__4289__auto__,posh$lib$q_analyze$pattern_from_eav__old_$_iter__24553.call(null,cljs.core.rest.call(null,s__24554__$1)));
} else {
var G__24573 = cljs.core.rest.call(null,s__24554__$1);
s__24554__$1 = G__24573;
continue;
}
} else {
return null;
}
break;
}
});})(vec__24550,qe,qa,qv,vec__24547,e,a,v,eav))
,null,null));
});})(vec__24550,qe,qa,qv,vec__24547,e,a,v,eav))
;
return iter__4292__auto__.call(null,(cljs.core.truth_(qe)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),cljs.core.get.call(null,vars,e)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [e], null)));
});
posh.lib.q_analyze.get_ = (function posh$lib$q_analyze$get_(m,k){

var or__3922__auto__ = cljs.core.get.call(null,m,k);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return new cljs.core.Symbol(null,"_","_",-1201019570,null);
}
});
posh.lib.q_analyze.pattern_from_eav = (function posh$lib$q_analyze$pattern_from_eav(vars,eav){
var ocr_24574 = cljs.core.vec.call(null,eav);
var ocr_24575 = cljs.core.vec.call(null,cljs.core.map.call(null,posh.lib.q_analyze.qvar_QMARK_,eav));
try{if(((cljs.core.vector_QMARK_.call(null,ocr_24574)) && ((cljs.core.count.call(null,ocr_24574) === 3)))){
try{var ocr_24574_0__24603 = cljs.core.nth.call(null,ocr_24574,(0));
if(cljs.core._EQ_.call(null,ocr_24574_0__24603,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_24574_1__24604 = cljs.core.nth.call(null,ocr_24574,(1));
if(cljs.core._EQ_.call(null,ocr_24574_1__24604,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_24574_2__24605 = cljs.core.nth.call(null,ocr_24574,(2));
if(cljs.core._EQ_.call(null,ocr_24574_2__24605,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e24679){if((e24679 instanceof Error)){
var e__23725__auto__ = e24679;
if((e__23725__auto__ === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_.call(null,ocr_24575)) && ((cljs.core.count.call(null,ocr_24575) === 3)))){
try{var ocr_24575_2__24608 = cljs.core.nth.call(null,ocr_24575,(2));
if((ocr_24575_2__24608 === false)){
var v = cljs.core.nth.call(null,ocr_24574,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e24681){if((e24681 instanceof Error)){
var e__23725__auto____$1 = e24681;
if((e__23725__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_24575_2__24608 = cljs.core.nth.call(null,ocr_24575,(2));
if((ocr_24575_2__24608 === true)){
var v = cljs.core.nth.call(null,ocr_24574,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_.call(null,vars,v)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e24682){if((e24682 instanceof Error)){
var e__23725__auto____$2 = e24682;
if((e__23725__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23725__auto____$2;
}
} else {
throw e24682;

}
}} else {
throw e__23725__auto____$1;
}
} else {
throw e24681;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e24680){if((e24680 instanceof Error)){
var e__23725__auto____$1 = e24680;
if((e__23725__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23725__auto____$1;
}
} else {
throw e24680;

}
}} else {
throw e__23725__auto__;
}
} else {
throw e24679;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e24674){if((e24674 instanceof Error)){
var e__23725__auto__ = e24674;
if((e__23725__auto__ === cljs.core.match.backtrack)){
try{var ocr_24574_2__24605 = cljs.core.nth.call(null,ocr_24574,(2));
if(cljs.core._EQ_.call(null,ocr_24574_2__24605,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{if(((cljs.core.vector_QMARK_.call(null,ocr_24575)) && ((cljs.core.count.call(null,ocr_24575) === 3)))){
try{var ocr_24575_1__24610 = cljs.core.nth.call(null,ocr_24575,(1));
if((ocr_24575_1__24610 === false)){
var a = cljs.core.nth.call(null,ocr_24574,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e24677){if((e24677 instanceof Error)){
var e__23725__auto____$1 = e24677;
if((e__23725__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_24575_1__24610 = cljs.core.nth.call(null,ocr_24575,(1));
if((ocr_24575_1__24610 === true)){
var a = cljs.core.nth.call(null,ocr_24574,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_.call(null,vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e24678){if((e24678 instanceof Error)){
var e__23725__auto____$2 = e24678;
if((e__23725__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23725__auto____$2;
}
} else {
throw e24678;

}
}} else {
throw e__23725__auto____$1;
}
} else {
throw e24677;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e24676){if((e24676 instanceof Error)){
var e__23725__auto____$1 = e24676;
if((e__23725__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23725__auto____$1;
}
} else {
throw e24676;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e24675){if((e24675 instanceof Error)){
var e__23725__auto____$1 = e24675;
if((e__23725__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23725__auto____$1;
}
} else {
throw e24675;

}
}} else {
throw e__23725__auto__;
}
} else {
throw e24674;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e24616){if((e24616 instanceof Error)){
var e__23725__auto__ = e24616;
if((e__23725__auto__ === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_.call(null,ocr_24575)) && ((cljs.core.count.call(null,ocr_24575) === 3)))){
try{var ocr_24575_0__24612 = cljs.core.nth.call(null,ocr_24575,(0));
if((ocr_24575_0__24612 === false)){
try{var ocr_24574_1__24604 = cljs.core.nth.call(null,ocr_24574,(1));
if(cljs.core._EQ_.call(null,ocr_24574_1__24604,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_24574_2__24605 = cljs.core.nth.call(null,ocr_24574,(2));
if(cljs.core._EQ_.call(null,ocr_24574_2__24605,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.call(null,ocr_24574,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e24673){if((e24673 instanceof Error)){
var e__23725__auto____$1 = e24673;
if((e__23725__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23725__auto____$1;
}
} else {
throw e24673;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e24672){if((e24672 instanceof Error)){
var e__23725__auto____$1 = e24672;
if((e__23725__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23725__auto____$1;
}
} else {
throw e24672;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e24618){if((e24618 instanceof Error)){
var e__23725__auto____$1 = e24618;
if((e__23725__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_24575_0__24612 = cljs.core.nth.call(null,ocr_24575,(0));
if((ocr_24575_0__24612 === true)){
try{var ocr_24574_2__24605 = cljs.core.nth.call(null,ocr_24574,(2));
if(cljs.core._EQ_.call(null,ocr_24574_2__24605,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_24574_1__24604 = cljs.core.nth.call(null,ocr_24574,(1));
if(cljs.core._EQ_.call(null,ocr_24574_1__24604,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.call(null,ocr_24574,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_.call(null,vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e24669){if((e24669 instanceof Error)){
var e__23725__auto____$2 = e24669;
if((e__23725__auto____$2 === cljs.core.match.backtrack)){
try{var ocr_24575_1__24613 = cljs.core.nth.call(null,ocr_24575,(1));
if((ocr_24575_1__24613 === true)){
var a = cljs.core.nth.call(null,ocr_24574,(1));
var e = cljs.core.nth.call(null,ocr_24574,(0));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_.call(null,vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_.call(null,vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e24670){if((e24670 instanceof Error)){
var e__23725__auto____$3 = e24670;
if((e__23725__auto____$3 === cljs.core.match.backtrack)){
try{var ocr_24575_1__24613 = cljs.core.nth.call(null,ocr_24575,(1));
if((ocr_24575_1__24613 === false)){
var a = cljs.core.nth.call(null,ocr_24574,(1));
var e = cljs.core.nth.call(null,ocr_24574,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_.call(null,vars,e),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e24671){if((e24671 instanceof Error)){
var e__23725__auto____$4 = e24671;
if((e__23725__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23725__auto____$4;
}
} else {
throw e24671;

}
}} else {
throw e__23725__auto____$3;
}
} else {
throw e24670;

}
}} else {
throw e__23725__auto____$2;
}
} else {
throw e24669;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e24668){if((e24668 instanceof Error)){
var e__23725__auto____$2 = e24668;
if((e__23725__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23725__auto____$2;
}
} else {
throw e24668;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e24619){if((e24619 instanceof Error)){
var e__23725__auto____$2 = e24619;
if((e__23725__auto____$2 === cljs.core.match.backtrack)){
try{var ocr_24575_0__24612 = cljs.core.nth.call(null,ocr_24575,(0));
if((ocr_24575_0__24612 === false)){
try{var ocr_24575_1__24613 = cljs.core.nth.call(null,ocr_24575,(1));
if((ocr_24575_1__24613 === true)){
try{var ocr_24574_2__24605 = cljs.core.nth.call(null,ocr_24574,(2));
if(cljs.core._EQ_.call(null,ocr_24574_2__24605,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.call(null,ocr_24574,(0));
var a = cljs.core.nth.call(null,ocr_24574,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,posh.lib.q_analyze.get_.call(null,vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e24667){if((e24667 instanceof Error)){
var e__23725__auto____$3 = e24667;
if((e__23725__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23725__auto____$3;
}
} else {
throw e24667;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e24664){if((e24664 instanceof Error)){
var e__23725__auto____$3 = e24664;
if((e__23725__auto____$3 === cljs.core.match.backtrack)){
try{var ocr_24575_1__24613 = cljs.core.nth.call(null,ocr_24575,(1));
if((ocr_24575_1__24613 === false)){
try{var ocr_24574_2__24605 = cljs.core.nth.call(null,ocr_24574,(2));
if(cljs.core._EQ_.call(null,ocr_24574_2__24605,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.call(null,ocr_24574,(0));
var a = cljs.core.nth.call(null,ocr_24574,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e24666){if((e24666 instanceof Error)){
var e__23725__auto____$4 = e24666;
if((e__23725__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23725__auto____$4;
}
} else {
throw e24666;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e24665){if((e24665 instanceof Error)){
var e__23725__auto____$4 = e24665;
if((e__23725__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23725__auto____$4;
}
} else {
throw e24665;

}
}} else {
throw e__23725__auto____$3;
}
} else {
throw e24664;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e24620){if((e24620 instanceof Error)){
var e__23725__auto____$3 = e24620;
if((e__23725__auto____$3 === cljs.core.match.backtrack)){
try{var ocr_24575_2__24614 = cljs.core.nth.call(null,ocr_24575,(2));
if((ocr_24575_2__24614 === true)){
try{var ocr_24575_0__24612 = cljs.core.nth.call(null,ocr_24575,(0));
if((ocr_24575_0__24612 === true)){
try{var ocr_24574_1__24604 = cljs.core.nth.call(null,ocr_24574,(1));
if(cljs.core._EQ_.call(null,ocr_24574_1__24604,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.call(null,ocr_24574,(0));
var v = cljs.core.nth.call(null,ocr_24574,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_.call(null,vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_.call(null,vars,v)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e24663){if((e24663 instanceof Error)){
var e__23725__auto____$4 = e24663;
if((e__23725__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23725__auto____$4;
}
} else {
throw e24663;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e24662){if((e24662 instanceof Error)){
var e__23725__auto____$4 = e24662;
if((e__23725__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23725__auto____$4;
}
} else {
throw e24662;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e24621){if((e24621 instanceof Error)){
var e__23725__auto____$4 = e24621;
if((e__23725__auto____$4 === cljs.core.match.backtrack)){
try{var ocr_24575_2__24614 = cljs.core.nth.call(null,ocr_24575,(2));
if((ocr_24575_2__24614 === false)){
try{var ocr_24575_0__24612 = cljs.core.nth.call(null,ocr_24575,(0));
if((ocr_24575_0__24612 === true)){
try{var ocr_24574_1__24604 = cljs.core.nth.call(null,ocr_24574,(1));
if(cljs.core._EQ_.call(null,ocr_24574_1__24604,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.call(null,ocr_24574,(0));
var v = cljs.core.nth.call(null,ocr_24574,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_.call(null,vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e24661){if((e24661 instanceof Error)){
var e__23725__auto____$5 = e24661;
if((e__23725__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23725__auto____$5;
}
} else {
throw e24661;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e24660){if((e24660 instanceof Error)){
var e__23725__auto____$5 = e24660;
if((e__23725__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23725__auto____$5;
}
} else {
throw e24660;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e24622){if((e24622 instanceof Error)){
var e__23725__auto____$5 = e24622;
if((e__23725__auto____$5 === cljs.core.match.backtrack)){
try{var ocr_24575_2__24614 = cljs.core.nth.call(null,ocr_24575,(2));
if((ocr_24575_2__24614 === true)){
try{var ocr_24575_0__24612 = cljs.core.nth.call(null,ocr_24575,(0));
if((ocr_24575_0__24612 === false)){
try{var ocr_24574_1__24604 = cljs.core.nth.call(null,ocr_24574,(1));
if(cljs.core._EQ_.call(null,ocr_24574_1__24604,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.call(null,ocr_24574,(0));
var v = cljs.core.nth.call(null,ocr_24574,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_.call(null,vars,v)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e24659){if((e24659 instanceof Error)){
var e__23725__auto____$6 = e24659;
if((e__23725__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23725__auto____$6;
}
} else {
throw e24659;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e24658){if((e24658 instanceof Error)){
var e__23725__auto____$6 = e24658;
if((e__23725__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23725__auto____$6;
}
} else {
throw e24658;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e24623){if((e24623 instanceof Error)){
var e__23725__auto____$6 = e24623;
if((e__23725__auto____$6 === cljs.core.match.backtrack)){
try{var ocr_24575_2__24614 = cljs.core.nth.call(null,ocr_24575,(2));
if((ocr_24575_2__24614 === false)){
try{var ocr_24575_0__24612 = cljs.core.nth.call(null,ocr_24575,(0));
if((ocr_24575_0__24612 === false)){
try{var ocr_24574_1__24604 = cljs.core.nth.call(null,ocr_24574,(1));
if(cljs.core._EQ_.call(null,ocr_24574_1__24604,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.call(null,ocr_24574,(0));
var v = cljs.core.nth.call(null,ocr_24574,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e24657){if((e24657 instanceof Error)){
var e__23725__auto____$7 = e24657;
if((e__23725__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23725__auto____$7;
}
} else {
throw e24657;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e24656){if((e24656 instanceof Error)){
var e__23725__auto____$7 = e24656;
if((e__23725__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23725__auto____$7;
}
} else {
throw e24656;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e24624){if((e24624 instanceof Error)){
var e__23725__auto____$7 = e24624;
if((e__23725__auto____$7 === cljs.core.match.backtrack)){
try{var ocr_24575_2__24614 = cljs.core.nth.call(null,ocr_24575,(2));
if((ocr_24575_2__24614 === true)){
try{var ocr_24575_1__24613 = cljs.core.nth.call(null,ocr_24575,(1));
if((ocr_24575_1__24613 === true)){
try{var ocr_24574_0__24603 = cljs.core.nth.call(null,ocr_24574,(0));
if(cljs.core._EQ_.call(null,ocr_24574_0__24603,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.call(null,ocr_24574,(1));
var v = cljs.core.nth.call(null,ocr_24574,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_.call(null,vars,v)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_.call(null,vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e24655){if((e24655 instanceof Error)){
var e__23725__auto____$8 = e24655;
if((e__23725__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23725__auto____$8;
}
} else {
throw e24655;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e24654){if((e24654 instanceof Error)){
var e__23725__auto____$8 = e24654;
if((e__23725__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23725__auto____$8;
}
} else {
throw e24654;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e24625){if((e24625 instanceof Error)){
var e__23725__auto____$8 = e24625;
if((e__23725__auto____$8 === cljs.core.match.backtrack)){
try{var ocr_24575_2__24614 = cljs.core.nth.call(null,ocr_24575,(2));
if((ocr_24575_2__24614 === false)){
try{var ocr_24575_1__24613 = cljs.core.nth.call(null,ocr_24575,(1));
if((ocr_24575_1__24613 === true)){
try{var ocr_24574_0__24603 = cljs.core.nth.call(null,ocr_24574,(0));
if(cljs.core._EQ_.call(null,ocr_24574_0__24603,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.call(null,ocr_24574,(1));
var v = cljs.core.nth.call(null,ocr_24574,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_.call(null,vars,a),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e24653){if((e24653 instanceof Error)){
var e__23725__auto____$9 = e24653;
if((e__23725__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23725__auto____$9;
}
} else {
throw e24653;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e24652){if((e24652 instanceof Error)){
var e__23725__auto____$9 = e24652;
if((e__23725__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23725__auto____$9;
}
} else {
throw e24652;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e24626){if((e24626 instanceof Error)){
var e__23725__auto____$9 = e24626;
if((e__23725__auto____$9 === cljs.core.match.backtrack)){
try{var ocr_24575_2__24614 = cljs.core.nth.call(null,ocr_24575,(2));
if((ocr_24575_2__24614 === true)){
try{var ocr_24575_1__24613 = cljs.core.nth.call(null,ocr_24575,(1));
if((ocr_24575_1__24613 === false)){
try{var ocr_24574_0__24603 = cljs.core.nth.call(null,ocr_24574,(0));
if(cljs.core._EQ_.call(null,ocr_24574_0__24603,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.call(null,ocr_24574,(1));
var v = cljs.core.nth.call(null,ocr_24574,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,posh.lib.q_analyze.get_.call(null,vars,v)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e24651){if((e24651 instanceof Error)){
var e__23725__auto____$10 = e24651;
if((e__23725__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23725__auto____$10;
}
} else {
throw e24651;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e24650){if((e24650 instanceof Error)){
var e__23725__auto____$10 = e24650;
if((e__23725__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23725__auto____$10;
}
} else {
throw e24650;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e24627){if((e24627 instanceof Error)){
var e__23725__auto____$10 = e24627;
if((e__23725__auto____$10 === cljs.core.match.backtrack)){
try{var ocr_24575_2__24614 = cljs.core.nth.call(null,ocr_24575,(2));
if((ocr_24575_2__24614 === false)){
try{var ocr_24575_1__24613 = cljs.core.nth.call(null,ocr_24575,(1));
if((ocr_24575_1__24613 === false)){
try{var ocr_24574_0__24603 = cljs.core.nth.call(null,ocr_24574,(0));
if(cljs.core._EQ_.call(null,ocr_24574_0__24603,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.call(null,ocr_24574,(1));
var v = cljs.core.nth.call(null,ocr_24574,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e24649){if((e24649 instanceof Error)){
var e__23725__auto____$11 = e24649;
if((e__23725__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23725__auto____$11;
}
} else {
throw e24649;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e24648){if((e24648 instanceof Error)){
var e__23725__auto____$11 = e24648;
if((e__23725__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23725__auto____$11;
}
} else {
throw e24648;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e24628){if((e24628 instanceof Error)){
var e__23725__auto____$11 = e24628;
if((e__23725__auto____$11 === cljs.core.match.backtrack)){
try{var ocr_24575_2__24614 = cljs.core.nth.call(null,ocr_24575,(2));
if((ocr_24575_2__24614 === true)){
try{var ocr_24575_0__24612 = cljs.core.nth.call(null,ocr_24575,(0));
if((ocr_24575_0__24612 === true)){
try{var ocr_24575_1__24613 = cljs.core.nth.call(null,ocr_24575,(1));
if((ocr_24575_1__24613 === true)){
var e = cljs.core.nth.call(null,ocr_24574,(0));
var a = cljs.core.nth.call(null,ocr_24574,(1));
var v = cljs.core.nth.call(null,ocr_24574,(2));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_.call(null,vars,v)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_.call(null,vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_.call(null,vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e24647){if((e24647 instanceof Error)){
var e__23725__auto____$12 = e24647;
if((e__23725__auto____$12 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23725__auto____$12;
}
} else {
throw e24647;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e24642){if((e24642 instanceof Error)){
var e__23725__auto____$12 = e24642;
if((e__23725__auto____$12 === cljs.core.match.backtrack)){
try{var ocr_24575_0__24612 = cljs.core.nth.call(null,ocr_24575,(0));
if((ocr_24575_0__24612 === false)){
try{var ocr_24575_1__24613 = cljs.core.nth.call(null,ocr_24575,(1));
if((ocr_24575_1__24613 === true)){
var e = cljs.core.nth.call(null,ocr_24574,(0));
var a = cljs.core.nth.call(null,ocr_24574,(1));
var v = cljs.core.nth.call(null,ocr_24574,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_.call(null,vars,v)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,posh.lib.q_analyze.get_.call(null,vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e24646){if((e24646 instanceof Error)){
var e__23725__auto____$13 = e24646;
if((e__23725__auto____$13 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23725__auto____$13;
}
} else {
throw e24646;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e24643){if((e24643 instanceof Error)){
var e__23725__auto____$13 = e24643;
if((e__23725__auto____$13 === cljs.core.match.backtrack)){
try{var ocr_24575_0__24612 = cljs.core.nth.call(null,ocr_24575,(0));
if((ocr_24575_0__24612 === true)){
try{var ocr_24575_1__24613 = cljs.core.nth.call(null,ocr_24575,(1));
if((ocr_24575_1__24613 === false)){
var e = cljs.core.nth.call(null,ocr_24574,(0));
var a = cljs.core.nth.call(null,ocr_24574,(1));
var v = cljs.core.nth.call(null,ocr_24574,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,posh.lib.q_analyze.get_.call(null,vars,v)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_.call(null,vars,e),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e24645){if((e24645 instanceof Error)){
var e__23725__auto____$14 = e24645;
if((e__23725__auto____$14 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23725__auto____$14;
}
} else {
throw e24645;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e24644){if((e24644 instanceof Error)){
var e__23725__auto____$14 = e24644;
if((e__23725__auto____$14 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23725__auto____$14;
}
} else {
throw e24644;

}
}} else {
throw e__23725__auto____$13;
}
} else {
throw e24643;

}
}} else {
throw e__23725__auto____$12;
}
} else {
throw e24642;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e24629){if((e24629 instanceof Error)){
var e__23725__auto____$12 = e24629;
if((e__23725__auto____$12 === cljs.core.match.backtrack)){
try{var ocr_24575_2__24614 = cljs.core.nth.call(null,ocr_24575,(2));
if((ocr_24575_2__24614 === false)){
try{var ocr_24575_0__24612 = cljs.core.nth.call(null,ocr_24575,(0));
if((ocr_24575_0__24612 === true)){
try{var ocr_24575_1__24613 = cljs.core.nth.call(null,ocr_24575,(1));
if((ocr_24575_1__24613 === true)){
var e = cljs.core.nth.call(null,ocr_24574,(0));
var a = cljs.core.nth.call(null,ocr_24574,(1));
var v = cljs.core.nth.call(null,ocr_24574,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_.call(null,vars,a),v], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_.call(null,vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e24641){if((e24641 instanceof Error)){
var e__23725__auto____$13 = e24641;
if((e__23725__auto____$13 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23725__auto____$13;
}
} else {
throw e24641;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e24640){if((e24640 instanceof Error)){
var e__23725__auto____$13 = e24640;
if((e__23725__auto____$13 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23725__auto____$13;
}
} else {
throw e24640;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e24630){if((e24630 instanceof Error)){
var e__23725__auto____$13 = e24630;
if((e__23725__auto____$13 === cljs.core.match.backtrack)){
try{var ocr_24575_2__24614 = cljs.core.nth.call(null,ocr_24575,(2));
if((ocr_24575_2__24614 === true)){
try{var ocr_24575_0__24612 = cljs.core.nth.call(null,ocr_24575,(0));
if((ocr_24575_0__24612 === false)){
try{var ocr_24575_1__24613 = cljs.core.nth.call(null,ocr_24575,(1));
if((ocr_24575_1__24613 === false)){
var e = cljs.core.nth.call(null,ocr_24574,(0));
var a = cljs.core.nth.call(null,ocr_24574,(1));
var v = cljs.core.nth.call(null,ocr_24574,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e24639){if((e24639 instanceof Error)){
var e__23725__auto____$14 = e24639;
if((e__23725__auto____$14 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23725__auto____$14;
}
} else {
throw e24639;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e24638){if((e24638 instanceof Error)){
var e__23725__auto____$14 = e24638;
if((e__23725__auto____$14 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23725__auto____$14;
}
} else {
throw e24638;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e24631){if((e24631 instanceof Error)){
var e__23725__auto____$14 = e24631;
if((e__23725__auto____$14 === cljs.core.match.backtrack)){
try{var ocr_24575_2__24614 = cljs.core.nth.call(null,ocr_24575,(2));
if((ocr_24575_2__24614 === false)){
try{var ocr_24575_0__24612 = cljs.core.nth.call(null,ocr_24575,(0));
if((ocr_24575_0__24612 === true)){
try{var ocr_24575_1__24613 = cljs.core.nth.call(null,ocr_24575,(1));
if((ocr_24575_1__24613 === false)){
var e = cljs.core.nth.call(null,ocr_24574,(0));
var a = cljs.core.nth.call(null,ocr_24574,(1));
var v = cljs.core.nth.call(null,ocr_24574,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e24637){if((e24637 instanceof Error)){
var e__23725__auto____$15 = e24637;
if((e__23725__auto____$15 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23725__auto____$15;
}
} else {
throw e24637;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e24633){if((e24633 instanceof Error)){
var e__23725__auto____$15 = e24633;
if((e__23725__auto____$15 === cljs.core.match.backtrack)){
try{var ocr_24575_0__24612 = cljs.core.nth.call(null,ocr_24575,(0));
if((ocr_24575_0__24612 === false)){
try{var ocr_24575_1__24613 = cljs.core.nth.call(null,ocr_24575,(1));
if((ocr_24575_1__24613 === true)){
var e = cljs.core.nth.call(null,ocr_24574,(0));
var a = cljs.core.nth.call(null,ocr_24574,(1));
var v = cljs.core.nth.call(null,ocr_24574,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e24635){if((e24635 instanceof Error)){
var e__23725__auto____$16 = e24635;
if((e__23725__auto____$16 === cljs.core.match.backtrack)){
try{var ocr_24575_1__24613 = cljs.core.nth.call(null,ocr_24575,(1));
if((ocr_24575_1__24613 === false)){
var e = cljs.core.nth.call(null,ocr_24574,(0));
var a = cljs.core.nth.call(null,ocr_24574,(1));
var v = cljs.core.nth.call(null,ocr_24574,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a,v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e24636){if((e24636 instanceof Error)){
var e__23725__auto____$17 = e24636;
if((e__23725__auto____$17 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23725__auto____$17;
}
} else {
throw e24636;

}
}} else {
throw e__23725__auto____$16;
}
} else {
throw e24635;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e24634){if((e24634 instanceof Error)){
var e__23725__auto____$16 = e24634;
if((e__23725__auto____$16 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23725__auto____$16;
}
} else {
throw e24634;

}
}} else {
throw e__23725__auto____$15;
}
} else {
throw e24633;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e24632){if((e24632 instanceof Error)){
var e__23725__auto____$15 = e24632;
if((e__23725__auto____$15 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23725__auto____$15;
}
} else {
throw e24632;

}
}} else {
throw e__23725__auto____$14;
}
} else {
throw e24631;

}
}} else {
throw e__23725__auto____$13;
}
} else {
throw e24630;

}
}} else {
throw e__23725__auto____$12;
}
} else {
throw e24629;

}
}} else {
throw e__23725__auto____$11;
}
} else {
throw e24628;

}
}} else {
throw e__23725__auto____$10;
}
} else {
throw e24627;

}
}} else {
throw e__23725__auto____$9;
}
} else {
throw e24626;

}
}} else {
throw e__23725__auto____$8;
}
} else {
throw e24625;

}
}} else {
throw e__23725__auto____$7;
}
} else {
throw e24624;

}
}} else {
throw e__23725__auto____$6;
}
} else {
throw e24623;

}
}} else {
throw e__23725__auto____$5;
}
} else {
throw e24622;

}
}} else {
throw e__23725__auto____$4;
}
} else {
throw e24621;

}
}} else {
throw e__23725__auto____$3;
}
} else {
throw e24620;

}
}} else {
throw e__23725__auto____$2;
}
} else {
throw e24619;

}
}} else {
throw e__23725__auto____$1;
}
} else {
throw e24618;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e24617){if((e24617 instanceof Error)){
var e__23725__auto____$1 = e24617;
if((e__23725__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23725__auto____$1;
}
} else {
throw e24617;

}
}} else {
throw e__23725__auto__;
}
} else {
throw e24616;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e24615){if((e24615 instanceof Error)){
var e__23725__auto__ = e24615;
if((e__23725__auto__ === cljs.core.match.backtrack)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null);
} else {
throw e__23725__auto__;
}
} else {
throw e24615;

}
}});
posh.lib.q_analyze.filter_pattern_from_eav = (function posh$lib$q_analyze$filter_pattern_from_eav(vars,eav){
var ocr_24683 = cljs.core.vec.call(null,eav);
var ocr_24684 = cljs.core.vec.call(null,cljs.core.map.call(null,posh.lib.q_analyze.qvar_QMARK_,eav));
try{if(((cljs.core.vector_QMARK_.call(null,ocr_24683)) && ((cljs.core.count.call(null,ocr_24683) === 3)))){
try{var ocr_24683_0__24709 = cljs.core.nth.call(null,ocr_24683,(0));
if(cljs.core._EQ_.call(null,ocr_24683_0__24709,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_24683_1__24710 = cljs.core.nth.call(null,ocr_24683,(1));
if(cljs.core._EQ_.call(null,ocr_24683_1__24710,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_24683_2__24711 = cljs.core.nth.call(null,ocr_24683,(2));
if(cljs.core._EQ_.call(null,ocr_24683_2__24711,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
return cljs.core.PersistentVector.EMPTY;
} else {
throw cljs.core.match.backtrack;

}
}catch (e24773){if((e24773 instanceof Error)){
var e__23725__auto__ = e24773;
if((e__23725__auto__ === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_.call(null,ocr_24684)) && ((cljs.core.count.call(null,ocr_24684) === 3)))){
try{var ocr_24684_2__24714 = cljs.core.nth.call(null,ocr_24684,(2));
if((ocr_24684_2__24714 === false)){
var v = cljs.core.nth.call(null,ocr_24683,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e24775){if((e24775 instanceof Error)){
var e__23725__auto____$1 = e24775;
if((e__23725__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_24684_2__24714 = cljs.core.nth.call(null,ocr_24684,(2));
if((ocr_24684_2__24714 === true)){
var v = cljs.core.nth.call(null,ocr_24683,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),vars.call(null,v)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e24776){if((e24776 instanceof Error)){
var e__23725__auto____$2 = e24776;
if((e__23725__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23725__auto____$2;
}
} else {
throw e24776;

}
}} else {
throw e__23725__auto____$1;
}
} else {
throw e24775;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e24774){if((e24774 instanceof Error)){
var e__23725__auto____$1 = e24774;
if((e__23725__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23725__auto____$1;
}
} else {
throw e24774;

}
}} else {
throw e__23725__auto__;
}
} else {
throw e24773;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e24768){if((e24768 instanceof Error)){
var e__23725__auto__ = e24768;
if((e__23725__auto__ === cljs.core.match.backtrack)){
try{var ocr_24683_2__24711 = cljs.core.nth.call(null,ocr_24683,(2));
if(cljs.core._EQ_.call(null,ocr_24683_2__24711,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{if(((cljs.core.vector_QMARK_.call(null,ocr_24684)) && ((cljs.core.count.call(null,ocr_24684) === 3)))){
try{var ocr_24684_1__24716 = cljs.core.nth.call(null,ocr_24684,(1));
if((ocr_24684_1__24716 === false)){
var a = cljs.core.nth.call(null,ocr_24683,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e24771){if((e24771 instanceof Error)){
var e__23725__auto____$1 = e24771;
if((e__23725__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_24684_1__24716 = cljs.core.nth.call(null,ocr_24684,(1));
if((ocr_24684_1__24716 === true)){
var a = cljs.core.nth.call(null,ocr_24683,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),vars.call(null,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e24772){if((e24772 instanceof Error)){
var e__23725__auto____$2 = e24772;
if((e__23725__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23725__auto____$2;
}
} else {
throw e24772;

}
}} else {
throw e__23725__auto____$1;
}
} else {
throw e24771;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e24770){if((e24770 instanceof Error)){
var e__23725__auto____$1 = e24770;
if((e__23725__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23725__auto____$1;
}
} else {
throw e24770;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e24769){if((e24769 instanceof Error)){
var e__23725__auto____$1 = e24769;
if((e__23725__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23725__auto____$1;
}
} else {
throw e24769;

}
}} else {
throw e__23725__auto__;
}
} else {
throw e24768;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e24722){if((e24722 instanceof Error)){
var e__23725__auto__ = e24722;
if((e__23725__auto__ === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_.call(null,ocr_24684)) && ((cljs.core.count.call(null,ocr_24684) === 3)))){
try{var ocr_24684_0__24718 = cljs.core.nth.call(null,ocr_24684,(0));
if((ocr_24684_0__24718 === false)){
try{var ocr_24683_1__24710 = cljs.core.nth.call(null,ocr_24683,(1));
if(cljs.core._EQ_.call(null,ocr_24683_1__24710,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_24683_2__24711 = cljs.core.nth.call(null,ocr_24683,(2));
if(cljs.core._EQ_.call(null,ocr_24683_2__24711,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.call(null,ocr_24683,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e24767){if((e24767 instanceof Error)){
var e__23725__auto____$1 = e24767;
if((e__23725__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23725__auto____$1;
}
} else {
throw e24767;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e24766){if((e24766 instanceof Error)){
var e__23725__auto____$1 = e24766;
if((e__23725__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23725__auto____$1;
}
} else {
throw e24766;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e24724){if((e24724 instanceof Error)){
var e__23725__auto____$1 = e24724;
if((e__23725__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_24684_0__24718 = cljs.core.nth.call(null,ocr_24684,(0));
if((ocr_24684_0__24718 === true)){
try{var ocr_24683_2__24711 = cljs.core.nth.call(null,ocr_24683,(2));
if(cljs.core._EQ_.call(null,ocr_24683_2__24711,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_24683_1__24710 = cljs.core.nth.call(null,ocr_24683,(1));
if(cljs.core._EQ_.call(null,ocr_24683_1__24710,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.call(null,ocr_24683,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [vars.call(null,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e24763){if((e24763 instanceof Error)){
var e__23725__auto____$2 = e24763;
if((e__23725__auto____$2 === cljs.core.match.backtrack)){
try{var ocr_24684_1__24719 = cljs.core.nth.call(null,ocr_24684,(1));
if((ocr_24684_1__24719 === true)){
var a = cljs.core.nth.call(null,ocr_24683,(1));
var e = cljs.core.nth.call(null,ocr_24683,(0));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [vars.call(null,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),vars.call(null,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e24764){if((e24764 instanceof Error)){
var e__23725__auto____$3 = e24764;
if((e__23725__auto____$3 === cljs.core.match.backtrack)){
try{var ocr_24684_1__24719 = cljs.core.nth.call(null,ocr_24684,(1));
if((ocr_24684_1__24719 === false)){
var a = cljs.core.nth.call(null,ocr_24683,(1));
var e = cljs.core.nth.call(null,ocr_24683,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [vars.call(null,e),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e24765){if((e24765 instanceof Error)){
var e__23725__auto____$4 = e24765;
if((e__23725__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23725__auto____$4;
}
} else {
throw e24765;

}
}} else {
throw e__23725__auto____$3;
}
} else {
throw e24764;

}
}} else {
throw e__23725__auto____$2;
}
} else {
throw e24763;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e24762){if((e24762 instanceof Error)){
var e__23725__auto____$2 = e24762;
if((e__23725__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23725__auto____$2;
}
} else {
throw e24762;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e24725){if((e24725 instanceof Error)){
var e__23725__auto____$2 = e24725;
if((e__23725__auto____$2 === cljs.core.match.backtrack)){
try{var ocr_24684_0__24718 = cljs.core.nth.call(null,ocr_24684,(0));
if((ocr_24684_0__24718 === false)){
try{var ocr_24684_1__24719 = cljs.core.nth.call(null,ocr_24684,(1));
if((ocr_24684_1__24719 === true)){
try{var ocr_24683_2__24711 = cljs.core.nth.call(null,ocr_24683,(2));
if(cljs.core._EQ_.call(null,ocr_24683_2__24711,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.call(null,ocr_24683,(0));
var a = cljs.core.nth.call(null,ocr_24683,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,vars.call(null,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e24761){if((e24761 instanceof Error)){
var e__23725__auto____$3 = e24761;
if((e__23725__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23725__auto____$3;
}
} else {
throw e24761;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e24760){if((e24760 instanceof Error)){
var e__23725__auto____$3 = e24760;
if((e__23725__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23725__auto____$3;
}
} else {
throw e24760;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e24726){if((e24726 instanceof Error)){
var e__23725__auto____$3 = e24726;
if((e__23725__auto____$3 === cljs.core.match.backtrack)){
try{var ocr_24684_2__24720 = cljs.core.nth.call(null,ocr_24684,(2));
if((ocr_24684_2__24720 === true)){
try{var ocr_24684_0__24718 = cljs.core.nth.call(null,ocr_24684,(0));
if((ocr_24684_0__24718 === true)){
try{var ocr_24683_1__24710 = cljs.core.nth.call(null,ocr_24683,(1));
if(cljs.core._EQ_.call(null,ocr_24683_1__24710,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.call(null,ocr_24683,(0));
var v = cljs.core.nth.call(null,ocr_24683,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [vars.call(null,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),vars.call(null,v)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e24759){if((e24759 instanceof Error)){
var e__23725__auto____$4 = e24759;
if((e__23725__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23725__auto____$4;
}
} else {
throw e24759;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e24758){if((e24758 instanceof Error)){
var e__23725__auto____$4 = e24758;
if((e__23725__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23725__auto____$4;
}
} else {
throw e24758;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e24727){if((e24727 instanceof Error)){
var e__23725__auto____$4 = e24727;
if((e__23725__auto____$4 === cljs.core.match.backtrack)){
try{var ocr_24684_2__24720 = cljs.core.nth.call(null,ocr_24684,(2));
if((ocr_24684_2__24720 === false)){
try{var ocr_24684_0__24718 = cljs.core.nth.call(null,ocr_24684,(0));
if((ocr_24684_0__24718 === true)){
try{var ocr_24683_1__24710 = cljs.core.nth.call(null,ocr_24683,(1));
if(cljs.core._EQ_.call(null,ocr_24683_1__24710,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.call(null,ocr_24683,(0));
var v = cljs.core.nth.call(null,ocr_24683,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [vars.call(null,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e24757){if((e24757 instanceof Error)){
var e__23725__auto____$5 = e24757;
if((e__23725__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23725__auto____$5;
}
} else {
throw e24757;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e24756){if((e24756 instanceof Error)){
var e__23725__auto____$5 = e24756;
if((e__23725__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23725__auto____$5;
}
} else {
throw e24756;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e24728){if((e24728 instanceof Error)){
var e__23725__auto____$5 = e24728;
if((e__23725__auto____$5 === cljs.core.match.backtrack)){
try{var ocr_24684_2__24720 = cljs.core.nth.call(null,ocr_24684,(2));
if((ocr_24684_2__24720 === true)){
try{var ocr_24684_0__24718 = cljs.core.nth.call(null,ocr_24684,(0));
if((ocr_24684_0__24718 === false)){
try{var ocr_24683_1__24710 = cljs.core.nth.call(null,ocr_24683,(1));
if(cljs.core._EQ_.call(null,ocr_24683_1__24710,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.call(null,ocr_24683,(0));
var v = cljs.core.nth.call(null,ocr_24683,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),vars.call(null,v)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e24755){if((e24755 instanceof Error)){
var e__23725__auto____$6 = e24755;
if((e__23725__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23725__auto____$6;
}
} else {
throw e24755;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e24752){if((e24752 instanceof Error)){
var e__23725__auto____$6 = e24752;
if((e__23725__auto____$6 === cljs.core.match.backtrack)){
try{var ocr_24684_1__24719 = cljs.core.nth.call(null,ocr_24684,(1));
if((ocr_24684_1__24719 === true)){
try{var ocr_24683_0__24709 = cljs.core.nth.call(null,ocr_24683,(0));
if(cljs.core._EQ_.call(null,ocr_24683_0__24709,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.call(null,ocr_24683,(1));
var v = cljs.core.nth.call(null,ocr_24683,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),vars.call(null,v)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),vars.call(null,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e24754){if((e24754 instanceof Error)){
var e__23725__auto____$7 = e24754;
if((e__23725__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23725__auto____$7;
}
} else {
throw e24754;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e24753){if((e24753 instanceof Error)){
var e__23725__auto____$7 = e24753;
if((e__23725__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23725__auto____$7;
}
} else {
throw e24753;

}
}} else {
throw e__23725__auto____$6;
}
} else {
throw e24752;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e24729){if((e24729 instanceof Error)){
var e__23725__auto____$6 = e24729;
if((e__23725__auto____$6 === cljs.core.match.backtrack)){
try{var ocr_24684_2__24720 = cljs.core.nth.call(null,ocr_24684,(2));
if((ocr_24684_2__24720 === false)){
try{var ocr_24684_1__24719 = cljs.core.nth.call(null,ocr_24684,(1));
if((ocr_24684_1__24719 === true)){
try{var ocr_24683_0__24709 = cljs.core.nth.call(null,ocr_24683,(0));
if(cljs.core._EQ_.call(null,ocr_24683_0__24709,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.call(null,ocr_24683,(1));
var v = cljs.core.nth.call(null,ocr_24683,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),vars.call(null,a),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e24751){if((e24751 instanceof Error)){
var e__23725__auto____$7 = e24751;
if((e__23725__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23725__auto____$7;
}
} else {
throw e24751;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e24750){if((e24750 instanceof Error)){
var e__23725__auto____$7 = e24750;
if((e__23725__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23725__auto____$7;
}
} else {
throw e24750;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e24730){if((e24730 instanceof Error)){
var e__23725__auto____$7 = e24730;
if((e__23725__auto____$7 === cljs.core.match.backtrack)){
try{var ocr_24684_2__24720 = cljs.core.nth.call(null,ocr_24684,(2));
if((ocr_24684_2__24720 === true)){
try{var ocr_24684_1__24719 = cljs.core.nth.call(null,ocr_24684,(1));
if((ocr_24684_1__24719 === false)){
try{var ocr_24683_0__24709 = cljs.core.nth.call(null,ocr_24683,(0));
if(cljs.core._EQ_.call(null,ocr_24683_0__24709,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.call(null,ocr_24683,(1));
var v = cljs.core.nth.call(null,ocr_24683,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,vars.call(null,v)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e24749){if((e24749 instanceof Error)){
var e__23725__auto____$8 = e24749;
if((e__23725__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23725__auto____$8;
}
} else {
throw e24749;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e24743){if((e24743 instanceof Error)){
var e__23725__auto____$8 = e24743;
if((e__23725__auto____$8 === cljs.core.match.backtrack)){
try{var ocr_24684_1__24719 = cljs.core.nth.call(null,ocr_24684,(1));
if((ocr_24684_1__24719 === true)){
try{var ocr_24684_0__24718 = cljs.core.nth.call(null,ocr_24684,(0));
if((ocr_24684_0__24718 === true)){
var e = cljs.core.nth.call(null,ocr_24683,(0));
var a = cljs.core.nth.call(null,ocr_24683,(1));
var v = cljs.core.nth.call(null,ocr_24683,(2));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),vars.call(null,v)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),vars.call(null,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [vars.call(null,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e24747){if((e24747 instanceof Error)){
var e__23725__auto____$9 = e24747;
if((e__23725__auto____$9 === cljs.core.match.backtrack)){
try{var ocr_24684_0__24718 = cljs.core.nth.call(null,ocr_24684,(0));
if((ocr_24684_0__24718 === false)){
var e = cljs.core.nth.call(null,ocr_24683,(0));
var a = cljs.core.nth.call(null,ocr_24683,(1));
var v = cljs.core.nth.call(null,ocr_24683,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),vars.call(null,v)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,vars.call(null,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e24748){if((e24748 instanceof Error)){
var e__23725__auto____$10 = e24748;
if((e__23725__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23725__auto____$10;
}
} else {
throw e24748;

}
}} else {
throw e__23725__auto____$9;
}
} else {
throw e24747;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e24744){if((e24744 instanceof Error)){
var e__23725__auto____$9 = e24744;
if((e__23725__auto____$9 === cljs.core.match.backtrack)){
try{var ocr_24684_1__24719 = cljs.core.nth.call(null,ocr_24684,(1));
if((ocr_24684_1__24719 === false)){
try{var ocr_24684_0__24718 = cljs.core.nth.call(null,ocr_24684,(0));
if((ocr_24684_0__24718 === true)){
var e = cljs.core.nth.call(null,ocr_24683,(0));
var a = cljs.core.nth.call(null,ocr_24683,(1));
var v = cljs.core.nth.call(null,ocr_24683,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,vars.call(null,v)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [vars.call(null,e),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e24746){if((e24746 instanceof Error)){
var e__23725__auto____$10 = e24746;
if((e__23725__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23725__auto____$10;
}
} else {
throw e24746;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e24745){if((e24745 instanceof Error)){
var e__23725__auto____$10 = e24745;
if((e__23725__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23725__auto____$10;
}
} else {
throw e24745;

}
}} else {
throw e__23725__auto____$9;
}
} else {
throw e24744;

}
}} else {
throw e__23725__auto____$8;
}
} else {
throw e24743;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e24731){if((e24731 instanceof Error)){
var e__23725__auto____$8 = e24731;
if((e__23725__auto____$8 === cljs.core.match.backtrack)){
try{var ocr_24684_2__24720 = cljs.core.nth.call(null,ocr_24684,(2));
if((ocr_24684_2__24720 === false)){
try{var ocr_24684_0__24718 = cljs.core.nth.call(null,ocr_24684,(0));
if((ocr_24684_0__24718 === true)){
try{var ocr_24684_1__24719 = cljs.core.nth.call(null,ocr_24684,(1));
if((ocr_24684_1__24719 === true)){
var e = cljs.core.nth.call(null,ocr_24683,(0));
var a = cljs.core.nth.call(null,ocr_24683,(1));
var v = cljs.core.nth.call(null,ocr_24683,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),vars.call(null,a),v], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [vars.call(null,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e24742){if((e24742 instanceof Error)){
var e__23725__auto____$9 = e24742;
if((e__23725__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23725__auto____$9;
}
} else {
throw e24742;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e24741){if((e24741 instanceof Error)){
var e__23725__auto____$9 = e24741;
if((e__23725__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23725__auto____$9;
}
} else {
throw e24741;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e24732){if((e24732 instanceof Error)){
var e__23725__auto____$9 = e24732;
if((e__23725__auto____$9 === cljs.core.match.backtrack)){
try{var ocr_24684_2__24720 = cljs.core.nth.call(null,ocr_24684,(2));
if((ocr_24684_2__24720 === true)){
try{var ocr_24684_0__24718 = cljs.core.nth.call(null,ocr_24684,(0));
if((ocr_24684_0__24718 === false)){
try{var ocr_24684_1__24719 = cljs.core.nth.call(null,ocr_24684,(1));
if((ocr_24684_1__24719 === false)){
var e = cljs.core.nth.call(null,ocr_24683,(0));
var a = cljs.core.nth.call(null,ocr_24683,(1));
var v = cljs.core.nth.call(null,ocr_24683,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e24740){if((e24740 instanceof Error)){
var e__23725__auto____$10 = e24740;
if((e__23725__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23725__auto____$10;
}
} else {
throw e24740;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e24739){if((e24739 instanceof Error)){
var e__23725__auto____$10 = e24739;
if((e__23725__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23725__auto____$10;
}
} else {
throw e24739;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e24733){if((e24733 instanceof Error)){
var e__23725__auto____$10 = e24733;
if((e__23725__auto____$10 === cljs.core.match.backtrack)){
try{var ocr_24684_2__24720 = cljs.core.nth.call(null,ocr_24684,(2));
if((ocr_24684_2__24720 === false)){
try{var ocr_24684_0__24718 = cljs.core.nth.call(null,ocr_24684,(0));
if((ocr_24684_0__24718 === true)){
try{var ocr_24684_1__24719 = cljs.core.nth.call(null,ocr_24684,(1));
if((ocr_24684_1__24719 === false)){
var e = cljs.core.nth.call(null,ocr_24683,(0));
var a = cljs.core.nth.call(null,ocr_24683,(1));
var v = cljs.core.nth.call(null,ocr_24683,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e24738){if((e24738 instanceof Error)){
var e__23725__auto____$11 = e24738;
if((e__23725__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23725__auto____$11;
}
} else {
throw e24738;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e24735){if((e24735 instanceof Error)){
var e__23725__auto____$11 = e24735;
if((e__23725__auto____$11 === cljs.core.match.backtrack)){
try{var ocr_24684_0__24718 = cljs.core.nth.call(null,ocr_24684,(0));
if((ocr_24684_0__24718 === false)){
try{var ocr_24684_1__24719 = cljs.core.nth.call(null,ocr_24684,(1));
if((ocr_24684_1__24719 === true)){
var e = cljs.core.nth.call(null,ocr_24683,(0));
var a = cljs.core.nth.call(null,ocr_24683,(1));
var v = cljs.core.nth.call(null,ocr_24683,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e24737){if((e24737 instanceof Error)){
var e__23725__auto____$12 = e24737;
if((e__23725__auto____$12 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23725__auto____$12;
}
} else {
throw e24737;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e24736){if((e24736 instanceof Error)){
var e__23725__auto____$12 = e24736;
if((e__23725__auto____$12 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23725__auto____$12;
}
} else {
throw e24736;

}
}} else {
throw e__23725__auto____$11;
}
} else {
throw e24735;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e24734){if((e24734 instanceof Error)){
var e__23725__auto____$11 = e24734;
if((e__23725__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23725__auto____$11;
}
} else {
throw e24734;

}
}} else {
throw e__23725__auto____$10;
}
} else {
throw e24733;

}
}} else {
throw e__23725__auto____$9;
}
} else {
throw e24732;

}
}} else {
throw e__23725__auto____$8;
}
} else {
throw e24731;

}
}} else {
throw e__23725__auto____$7;
}
} else {
throw e24730;

}
}} else {
throw e__23725__auto____$6;
}
} else {
throw e24729;

}
}} else {
throw e__23725__auto____$5;
}
} else {
throw e24728;

}
}} else {
throw e__23725__auto____$4;
}
} else {
throw e24727;

}
}} else {
throw e__23725__auto____$3;
}
} else {
throw e24726;

}
}} else {
throw e__23725__auto____$2;
}
} else {
throw e24725;

}
}} else {
throw e__23725__auto____$1;
}
} else {
throw e24724;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e24723){if((e24723 instanceof Error)){
var e__23725__auto____$1 = e24723;
if((e__23725__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__23725__auto____$1;
}
} else {
throw e24723;

}
}} else {
throw e__23725__auto__;
}
} else {
throw e24722;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e24721){if((e24721 instanceof Error)){
var e__23725__auto__ = e24721;
if((e__23725__auto__ === cljs.core.match.backtrack)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null);
} else {
throw e__23725__auto__;
}
} else {
throw e24721;

}
}});
posh.lib.q_analyze.patterns_from_eavs = (function posh$lib$q_analyze$patterns_from_eavs(dbvarmap,vars,patterns){
return cljs.core.apply.call(null,cljs.core.merge,cljs.core.map.call(null,(function (p__24778){
var vec__24779 = p__24778;
var k = cljs.core.nth.call(null,vec__24779,(0),null);
var v = cljs.core.nth.call(null,vec__24779,(1),null);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"db-id","db-id",747248515).cljs$core$IFn$_invoke$arity$1(dbvarmap.call(null,k)),cljs.core.mapcat.call(null,((function (vec__24779,k,v){
return (function (p1__24777_SHARP_){
return posh.lib.q_analyze.pattern_from_eav.call(null,vars,cljs.core.rest.call(null,p1__24777_SHARP_));
});})(vec__24779,k,v))
,v)]);
}),cljs.core.group_by.call(null,cljs.core.first,patterns)));
});
posh.lib.q_analyze.filter_patterns_from_eavs = (function posh$lib$q_analyze$filter_patterns_from_eavs(dbvarmap,vars,patterns){
return cljs.core.apply.call(null,cljs.core.merge,cljs.core.map.call(null,(function (p__24783){
var vec__24784 = p__24783;
var k = cljs.core.nth.call(null,vec__24784,(0),null);
var v = cljs.core.nth.call(null,vec__24784,(1),null);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"db-id","db-id",747248515).cljs$core$IFn$_invoke$arity$1(dbvarmap.call(null,k)),cljs.core.mapcat.call(null,((function (vec__24784,k,v){
return (function (p1__24782_SHARP_){
return posh.lib.q_analyze.filter_pattern_from_eav.call(null,vars,cljs.core.rest.call(null,p1__24782_SHARP_));
});})(vec__24784,k,v))
,v)]);
}),cljs.core.group_by.call(null,cljs.core.first,patterns)));
});
posh.lib.q_analyze.just_qvars = (function posh$lib$q_analyze$just_qvars(ins,args){
if(cljs.core.empty_QMARK_.call(null,ins)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.merge.call(null,(((((cljs.core.first.call(null,ins) instanceof cljs.core.Symbol)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,ins))].join('')),"$"))))?null:cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first.call(null,ins),cljs.core.first.call(null,args)])),posh.lib.q_analyze.just_qvars.call(null,cljs.core.rest.call(null,ins),cljs.core.rest.call(null,args)));
}
});
posh.lib.q_analyze.get_input_sets = (function posh$lib$q_analyze$get_input_sets(ins,args){
var varmap = posh.lib.q_analyze.just_qvars.call(null,ins,args);
if(!(cljs.core.empty_QMARK_.call(null,varmap))){
var qvars = cljs.core.vec.call(null,posh.lib.q_analyze.get_all_vars.call(null,cljs.core.keys.call(null,varmap)));
var varvals = cljs.core.apply.call(null,cljs.core.partial.call(null,datascript.core.q,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"find","find",496279456),qvars,new cljs.core.Keyword(null,"in","in",-1531184865),cljs.core.keys.call(null,varmap)], null)),cljs.core.vals.call(null,varmap));
var varsets = cljs.core.reduce.call(null,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.conj),cljs.core.zipmap.call(null,qvars,cljs.core.repeat.call(null,cljs.core.PersistentHashSet.EMPTY)),cljs.core.map.call(null,((function (qvars,varvals,varmap){
return (function (p1__24787_SHARP_){
return cljs.core.zipmap.call(null,qvars,p1__24787_SHARP_);
});})(qvars,varvals,varmap))
,varvals));
return varsets;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
posh.lib.q_analyze.pull_pattern_QMARK_ = (function posh$lib$q_analyze$pull_pattern_QMARK_(x){
return ((cljs.core.coll_QMARK_.call(null,x)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,x),new cljs.core.Symbol(null,"pull","pull",779986722,null))) && (cljs.core._EQ_.call(null,(3),cljs.core.count.call(null,x))));
});
posh.lib.q_analyze.replace_find_pulls = (function posh$lib$q_analyze$replace_find_pulls(qfind){

return clojure.walk.postwalk.call(null,(function (x){
if(cljs.core.truth_(posh.lib.q_analyze.pull_pattern_QMARK_.call(null,x))){
return cljs.core.second.call(null,x);
} else {
return x;
}
}),qfind);
});
posh.lib.q_analyze.get_pull_var_pairs = (function posh$lib$q_analyze$get_pull_var_pairs(qfind){

if(cljs.core.coll_QMARK_.call(null,qfind)){
if(cljs.core.empty_QMARK_.call(null,qfind)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
if(cljs.core.truth_(posh.lib.q_analyze.pull_pattern_QMARK_.call(null,qfind))){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.second.call(null,qfind),cljs.core.nth.call(null,qfind,(2))]);
} else {
return cljs.core.apply.call(null,cljs.core.merge,cljs.core.map.call(null,posh.lib.q_analyze.get_pull_var_pairs,qfind));

}
}
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
posh.lib.q_analyze.match_var_to_db = (function posh$lib$q_analyze$match_var_to_db(var$,dbvarmap,dbeavs){
while(true){
if(cljs.core.empty_QMARK_.call(null,dbeavs)){
return null;
} else {
var vec__24788 = cljs.core.first.call(null,dbeavs);
var db = cljs.core.nth.call(null,vec__24788,(0),null);
var e = cljs.core.nth.call(null,vec__24788,(1),null);
var a = cljs.core.nth.call(null,vec__24788,(2),null);
var v = cljs.core.nth.call(null,vec__24788,(3),null);
if(cljs.core.truth_((function (){var or__3922__auto__ = cljs.core._EQ_.call(null,var$,e);
if(or__3922__auto__){
return or__3922__auto__;
} else {
var and__3911__auto__ = cljs.core._EQ_.call(null,var$,v);
if(and__3911__auto__){
return posh.lib.pull_analyze.ref_QMARK_.call(null,new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(dbvarmap.call(null,db)),a);
} else {
return and__3911__auto__;
}
}
})())){
return dbvarmap.call(null,db);
} else {
var G__24791 = var$;
var G__24792 = dbvarmap;
var G__24793 = cljs.core.rest.call(null,dbeavs);
var$ = G__24791;
dbvarmap = G__24792;
dbeavs = G__24793;
continue;
}
}
break;
}
});
posh.lib.q_analyze.match_vars_to_dbs = (function posh$lib$q_analyze$match_vars_to_dbs(vars,dbvarmap,dbeavs){
if(cljs.core.empty_QMARK_.call(null,vars)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.merge.call(null,cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first.call(null,vars),posh.lib.q_analyze.match_var_to_db.call(null,cljs.core.first.call(null,vars),dbvarmap,dbeavs)]),posh.lib.q_analyze.match_vars_to_dbs.call(null,cljs.core.rest.call(null,vars),dbvarmap,dbeavs));
}
});
posh.lib.q_analyze.index_of = (function posh$lib$q_analyze$index_of(xs,x){
var n = (0);
var xs__$1 = xs;
while(true){
if(cljs.core.empty_QMARK_.call(null,xs__$1)){
return null;
} else {
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__$1),x)){
return n;
} else {
var G__24794 = (n + (1));
var G__24795 = cljs.core.rest.call(null,xs__$1);
n = G__24794;
xs__$1 = G__24795;
continue;

}
}
break;
}
});
posh.lib.q_analyze.db_arg_QMARK_ = (function posh$lib$q_analyze$db_arg_QMARK_(arg){
var and__3911__auto__ = cljs.core.map_QMARK_.call(null,arg);
if(and__3911__auto__){
var and__3911__auto____$1 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(arg);
if(cljs.core.truth_(and__3911__auto____$1)){
return new cljs.core.Keyword(null,"conn","conn",278309663).cljs$core$IFn$_invoke$arity$1(arg);
} else {
return and__3911__auto____$1;
}
} else {
return and__3911__auto__;
}
});
posh.lib.q_analyze.convert_args_to = (function posh$lib$q_analyze$convert_args_to(type,args){
return cljs.core.map.call(null,(function (p1__24796_SHARP_){
if(cljs.core.truth_(posh.lib.q_analyze.db_arg_QMARK_.call(null,p1__24796_SHARP_))){
return type.call(null,p1__24796_SHARP_);
} else {
return p1__24796_SHARP_;
}
}),args);
});
posh.lib.q_analyze.make_dbarg_map = (function posh$lib$q_analyze$make_dbarg_map(ins,args){
if(cljs.core.empty_QMARK_.call(null,ins)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.merge.call(null,(cljs.core.truth_(posh.lib.q_analyze.dbvar_QMARK_.call(null,cljs.core.first.call(null,ins)))?cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first.call(null,ins),cljs.core.first.call(null,args)]):null),posh.lib.q_analyze.make_dbarg_map.call(null,cljs.core.rest.call(null,ins),cljs.core.rest.call(null,args)));
}
});
posh.lib.q_analyze.split_datoms = (function posh$lib$q_analyze$split_datoms(datoms){
return cljs.core.apply.call(null,cljs.core.merge,cljs.core.map.call(null,(function (p__24797){
var vec__24798 = p__24797;
var db_sym = cljs.core.nth.call(null,vec__24798,(0),null);
var db_datoms = cljs.core.nth.call(null,vec__24798,(1),null);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([db_sym,cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.vec,cljs.core.rest),db_datoms)]);
}),cljs.core.group_by.call(null,cljs.core.first,datoms)));
});
posh.lib.q_analyze.resolve_any_idents = (function posh$lib$q_analyze$resolve_any_idents(entid_fn,db,input_set){
return cljs.core.set.call(null,(function (){var iter__4292__auto__ = (function posh$lib$q_analyze$resolve_any_idents_$_iter__24801(s__24802){
return (new cljs.core.LazySeq(null,(function (){
var s__24802__$1 = s__24802;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__24802__$1);
if(temp__4657__auto__){
var s__24802__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__24802__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__24802__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__24804 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__24803 = (0);
while(true){
if((i__24803 < size__4291__auto__)){
var x = cljs.core._nth.call(null,c__4290__auto__,i__24803);
cljs.core.chunk_append.call(null,b__24804,((cljs.core.coll_QMARK_.call(null,x))?entid_fn.call(null,db,x):x));

var G__24805 = (i__24803 + (1));
i__24803 = G__24805;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24804),posh$lib$q_analyze$resolve_any_idents_$_iter__24801.call(null,cljs.core.chunk_rest.call(null,s__24802__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24804),null);
}
} else {
var x = cljs.core.first.call(null,s__24802__$2);
return cljs.core.cons.call(null,((cljs.core.coll_QMARK_.call(null,x))?entid_fn.call(null,db,x):x),posh$lib$q_analyze$resolve_any_idents_$_iter__24801.call(null,cljs.core.rest.call(null,s__24802__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4292__auto__.call(null,input_set);
})());
});
posh.lib.q_analyze.q_analyze = (function posh$lib$q_analyze$q_analyze(dcfg,retrieve,query,args){
var qm = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1580747756,null)], null)], null),posh.lib.q_analyze.query_to_map.call(null,query));
var where = posh.lib.q_analyze.normalize_all_eavs.call(null,cljs.core.vec.call(null,new cljs.core.Keyword(null,"where","where",-2044795965).cljs$core$IFn$_invoke$arity$1(qm)));
var eavs = posh.lib.q_analyze.get_eavs.call(null,where);
var vars = cljs.core.vec.call(null,posh.lib.q_analyze.get_all_vars.call(null,eavs));
var newqm = cljs.core.merge.call(null,qm,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"find","find",496279456),vars,new cljs.core.Keyword(null,"where","where",-2044795965),where], null));
var dbvarmap = posh.lib.q_analyze.make_dbarg_map.call(null,new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(qm),args);
var fixed_args = cljs.core.map.call(null,((function (qm,where,eavs,vars,newqm,dbvarmap){
return (function (p__24811){
var vec__24812 = p__24811;
var sym = cljs.core.nth.call(null,vec__24812,(0),null);
var arg = cljs.core.nth.call(null,vec__24812,(1),null);
var or__3922__auto__ = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,dbvarmap,sym));
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return arg;
}
});})(qm,where,eavs,vars,newqm,dbvarmap))
,cljs.core.zipmap.call(null,new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(qm),args));
var r = cljs.core.apply.call(null,cljs.core.partial.call(null,new cljs.core.Keyword(null,"q","q",689001697).cljs$core$IFn$_invoke$arity$1(dcfg),newqm),fixed_args);
var lookup_ref_patterns = cljs.core.map.call(null,((function (qm,where,eavs,vars,newqm,dbvarmap,fixed_args,r){
return (function (p__24815){
var vec__24816 = p__24815;
var a = cljs.core.nth.call(null,vec__24816,(0),null);
var v = cljs.core.nth.call(null,vec__24816,(1),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),a,v], null);
});})(qm,where,eavs,vars,newqm,dbvarmap,fixed_args,r))
,cljs.core.filter.call(null,cljs.core.every_pred.call(null,cljs.core.vector_QMARK_,cljs.core.comp.call(null,cljs.core.keyword_QMARK_,cljs.core.first),cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core._EQ_,(2)),cljs.core.count)),args));
return cljs.core.merge.call(null,(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"datoms-t","datoms-t",1641690868),null,new cljs.core.Keyword(null,"datoms","datoms",-290874434),null], null), null),retrieve))?(function (){var datoms = posh.lib.q_analyze.split_datoms.call(null,posh.lib.q_analyze.create_q_datoms.call(null,r,eavs,vars));
return cljs.core.merge.call(null,(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"datoms","datoms",-290874434),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"datoms","datoms",-290874434),cljs.core.apply.call(null,cljs.core.merge,cljs.core.map.call(null,((function (datoms,qm,where,eavs,vars,newqm,dbvarmap,fixed_args,r,lookup_ref_patterns){
return (function (p__24819){
var vec__24820 = p__24819;
var db_sym = cljs.core.nth.call(null,vec__24820,(0),null);
var db_datoms = cljs.core.nth.call(null,vec__24820,(1),null);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"db-id","db-id",747248515).cljs$core$IFn$_invoke$arity$1(dbvarmap.call(null,db_sym)),db_datoms]);
});})(datoms,qm,where,eavs,vars,newqm,dbvarmap,fixed_args,r,lookup_ref_patterns))
,datoms))], null):null),(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"datoms-t","datoms-t",1641690868),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"datoms-t","datoms-t",1641690868),cljs.core.apply.call(null,cljs.core.merge,cljs.core.map.call(null,((function (datoms,qm,where,eavs,vars,newqm,dbvarmap,fixed_args,r,lookup_ref_patterns){
return (function (p__24823){
var vec__24824 = p__24823;
var db_sym = cljs.core.nth.call(null,vec__24824,(0),null);
var db_datoms = cljs.core.nth.call(null,vec__24824,(1),null);
var db = dbvarmap.call(null,db_sym);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"db-id","db-id",747248515).cljs$core$IFn$_invoke$arity$1(db),posh.lib.util.t_for_datoms.call(null,new cljs.core.Keyword(null,"q","q",689001697).cljs$core$IFn$_invoke$arity$1(dcfg),new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(db),db_datoms)]);
});})(datoms,qm,where,eavs,vars,newqm,dbvarmap,fixed_args,r,lookup_ref_patterns))
,datoms))], null):null));
})():null),(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"results","results",-1134170113),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"results","results",-1134170113),datascript.core.q.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"find","find",496279456),cljs.core.vec.call(null,new cljs.core.Keyword(null,"find","find",496279456).cljs$core$IFn$_invoke$arity$1(qm)),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [vars,new cljs.core.Symbol(null,"...","...",-1926939749,null)], null)], null)], null),cljs.core.vec.call(null,r))], null):null),(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"filter-patterns","filter-patterns",-1388353466),null,new cljs.core.Keyword(null,"patterns","patterns",1164082024),null,new cljs.core.Keyword(null,"simple-patterns","simple-patterns",788142763),null], null), null),retrieve))?(function (){var in_vars = posh.lib.q_analyze.get_input_sets.call(null,new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(qm),args);
var eavs_ins = cljs.core.map.call(null,((function (in_vars,qm,where,eavs,vars,newqm,dbvarmap,fixed_args,r,lookup_ref_patterns){
return (function (p__24827){
var vec__24828 = p__24827;
var seq__24829 = cljs.core.seq.call(null,vec__24828);
var first__24830 = cljs.core.first.call(null,seq__24829);
var seq__24829__$1 = cljs.core.next.call(null,seq__24829);
var db = first__24830;
var eav = seq__24829__$1;
return cljs.core.vec.call(null,cljs.core.cons.call(null,db,cljs.core.map.call(null,((function (vec__24828,seq__24829,first__24830,seq__24829__$1,db,eav,in_vars,qm,where,eavs,vars,newqm,dbvarmap,fixed_args,r,lookup_ref_patterns){
return (function (p1__24808_SHARP_){
var temp__4655__auto__ = in_vars.call(null,p1__24808_SHARP_);
if(cljs.core.truth_(temp__4655__auto__)){
var v = temp__4655__auto__;
return posh.lib.q_analyze.resolve_any_idents.call(null,new cljs.core.Keyword(null,"entid","entid",1720688982).cljs$core$IFn$_invoke$arity$1(dcfg),new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,dbvarmap,db)),v);
} else {
return p1__24808_SHARP_;
}
});})(vec__24828,seq__24829,first__24830,seq__24829__$1,db,eav,in_vars,qm,where,eavs,vars,newqm,dbvarmap,fixed_args,r,lookup_ref_patterns))
,eav)));
});})(in_vars,qm,where,eavs,vars,newqm,dbvarmap,fixed_args,r,lookup_ref_patterns))
,cljs.core.concat.call(null,lookup_ref_patterns,eavs));
var qvar_count = posh.lib.q_analyze.count_qvars.call(null,eavs_ins);
var linked_qvars = cljs.core.set.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,((function (in_vars,eavs_ins,qvar_count,qm,where,eavs,vars,newqm,dbvarmap,fixed_args,r,lookup_ref_patterns){
return (function (p__24831){
var vec__24832 = p__24831;
var k = cljs.core.nth.call(null,vec__24832,(0),null);
var v = cljs.core.nth.call(null,vec__24832,(1),null);
if((v > (1))){
return k;
} else {
return null;
}
});})(in_vars,eavs_ins,qvar_count,qm,where,eavs,vars,newqm,dbvarmap,fixed_args,r,lookup_ref_patterns))
,qvar_count)));
var rvars = cljs.core.zipmap.call(null,vars,posh.lib.q_analyze.stack_vectors.call(null,r));
var prepped_eavs = clojure.walk.postwalk.call(null,((function (in_vars,eavs_ins,qvar_count,linked_qvars,rvars,qm,where,eavs,vars,newqm,dbvarmap,fixed_args,r,lookup_ref_patterns){
return (function (p1__24809_SHARP_){
if(cljs.core.truth_((function (){var and__3911__auto__ = posh.lib.q_analyze.qvar_QMARK_.call(null,p1__24809_SHARP_);
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not.call(null,linked_qvars.call(null,p1__24809_SHARP_));
} else {
return and__3911__auto__;
}
})())){
return new cljs.core.Symbol(null,"_","_",-1201019570,null);
} else {
return p1__24809_SHARP_;
}
});})(in_vars,eavs_ins,qvar_count,linked_qvars,rvars,qm,where,eavs,vars,newqm,dbvarmap,fixed_args,r,lookup_ref_patterns))
,eavs_ins);
return cljs.core.merge.call(null,(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"simple-patterns","simple-patterns",788142763),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"patterns","patterns",1164082024),posh.lib.q_analyze.patterns_from_eavs.call(null,dbvarmap,rvars,clojure.walk.postwalk.call(null,((function (in_vars,eavs_ins,qvar_count,linked_qvars,rvars,prepped_eavs,qm,where,eavs,vars,newqm,dbvarmap,fixed_args,r,lookup_ref_patterns){
return (function (p1__24810_SHARP_){
if(cljs.core.truth_(posh.lib.q_analyze.qvar_QMARK_.call(null,p1__24810_SHARP_))){
return new cljs.core.Symbol(null,"_","_",-1201019570,null);
} else {
return p1__24810_SHARP_;
}
});})(in_vars,eavs_ins,qvar_count,linked_qvars,rvars,prepped_eavs,qm,where,eavs,vars,newqm,dbvarmap,fixed_args,r,lookup_ref_patterns))
,eavs_ins))], null):null),(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"patterns","patterns",1164082024),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"patterns","patterns",1164082024),posh.lib.q_analyze.patterns_from_eavs.call(null,dbvarmap,rvars,prepped_eavs),new cljs.core.Keyword(null,"linked","linked",-1703156372),linked_qvars], null):null),(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"filter-patterns","filter-patterns",-1388353466),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"filter-patterns","filter-patterns",-1388353466),posh.lib.q_analyze.filter_patterns_from_eavs.call(null,dbvarmap,rvars,prepped_eavs)], null):null));
})():null));
});

//# sourceMappingURL=q_analyze.js.map?rel=1530661630939
