// Compiled by ClojureScript 1.10.238 {}
goog.provide('datascript.parser');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('datascript.db');




/**
 * @interface
 */
datascript.parser.ITraversable = function(){};

datascript.parser._collect = (function datascript$parser$_collect(_,pred,acc){
if(((!((_ == null))) && (!((_.datascript$parser$ITraversable$_collect$arity$3 == null))))){
return _.datascript$parser$ITraversable$_collect$arity$3(_,pred,acc);
} else {
var x__4211__auto__ = (((_ == null))?null:_);
var m__4212__auto__ = (datascript.parser._collect[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,_,pred,acc);
} else {
var m__4212__auto____$1 = (datascript.parser._collect["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,_,pred,acc);
} else {
throw cljs.core.missing_protocol.call(null,"ITraversable.-collect",_);
}
}
}
});

datascript.parser._collect_vars = (function datascript$parser$_collect_vars(_,acc){
if(((!((_ == null))) && (!((_.datascript$parser$ITraversable$_collect_vars$arity$2 == null))))){
return _.datascript$parser$ITraversable$_collect_vars$arity$2(_,acc);
} else {
var x__4211__auto__ = (((_ == null))?null:_);
var m__4212__auto__ = (datascript.parser._collect_vars[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,_,acc);
} else {
var m__4212__auto____$1 = (datascript.parser._collect_vars["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,_,acc);
} else {
throw cljs.core.missing_protocol.call(null,"ITraversable.-collect-vars",_);
}
}
}
});

datascript.parser._postwalk = (function datascript$parser$_postwalk(_,f){
if(((!((_ == null))) && (!((_.datascript$parser$ITraversable$_postwalk$arity$2 == null))))){
return _.datascript$parser$ITraversable$_postwalk$arity$2(_,f);
} else {
var x__4211__auto__ = (((_ == null))?null:_);
var m__4212__auto__ = (datascript.parser._postwalk[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,_,f);
} else {
var m__4212__auto____$1 = (datascript.parser._postwalk["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,_,f);
} else {
throw cljs.core.missing_protocol.call(null,"ITraversable.-postwalk",_);
}
}
}
});

datascript.parser.of_size_QMARK_ = (function datascript$parser$of_size_QMARK_(form,size){
return ((cljs.core.sequential_QMARK_.call(null,form)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,form),size)));
});
datascript.parser.parse_seq = (function datascript$parser$parse_seq(parse_el,form){
if(cljs.core.sequential_QMARK_.call(null,form)){
return cljs.core.reduce.call(null,(function (p1__21579_SHARP_,p2__21578_SHARP_){
var temp__4655__auto__ = parse_el.call(null,p2__21578_SHARP_);
if(cljs.core.truth_(temp__4655__auto__)){
var parsed = temp__4655__auto__;
return cljs.core.conj.call(null,p1__21579_SHARP_,parsed);
} else {
return cljs.core.reduced.call(null,null);
}
}),cljs.core.PersistentVector.EMPTY,form);
} else {
return null;
}
});
datascript.parser.collect = (function datascript$parser$collect(var_args){
var G__21581 = arguments.length;
switch (G__21581) {
case 2:
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

datascript.parser.collect.cljs$core$IFn$_invoke$arity$2 = (function (pred,form){
return datascript.parser.collect.call(null,pred,form,cljs.core.PersistentVector.EMPTY);
});

datascript.parser.collect.cljs$core$IFn$_invoke$arity$3 = (function (pred,form,acc){
if(cljs.core.truth_(pred.call(null,form))){
return cljs.core.conj.call(null,acc,form);
} else {
if(((!((form == null)))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === form.datascript$parser$ITraversable$))))?true:(((!form.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,datascript.parser.ITraversable,form):false)):cljs.core.native_satisfies_QMARK_.call(null,datascript.parser.ITraversable,form))){
return datascript.parser._collect.call(null,form,pred,acc);
} else {
if(datascript.db.seqable_QMARK_.call(null,form)){
return cljs.core.reduce.call(null,(function (acc__$1,form__$1){
return datascript.parser.collect.call(null,pred,form__$1,acc__$1);
}),acc,form);
} else {
return acc;

}
}
}
});

datascript.parser.collect.cljs$lang$maxFixedArity = 3;

datascript.parser.distinct_QMARK_ = (function datascript$parser$distinct_QMARK_(coll){
var or__3922__auto__ = cljs.core.empty_QMARK_.call(null,coll);
if(or__3922__auto__){
return or__3922__auto__;
} else {
return cljs.core.apply.call(null,cljs.core.distinct_QMARK_,coll);
}
});
datascript.parser.postwalk = (function datascript$parser$postwalk(form,f){
if(((!((form == null)))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === form.datascript$parser$ITraversable$))))?true:(((!form.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,datascript.parser.ITraversable,form):false)):cljs.core.native_satisfies_QMARK_.call(null,datascript.parser.ITraversable,form))){
return f.call(null,datascript.parser._postwalk.call(null,form,f));
} else {
if(cljs.core.map_QMARK_.call(null,form)){
return f.call(null,cljs.core.reduce.call(null,(function (form__$1,p__21587){
var vec__21588 = p__21587;
var k = cljs.core.nth.call(null,vec__21588,(0),null);
var v = cljs.core.nth.call(null,vec__21588,(1),null);
return cljs.core.assoc.call(null,form__$1,k,datascript.parser.postwalk.call(null,v,f));
}),form,form));
} else {
if(cljs.core.seq_QMARK_.call(null,form)){
return f.call(null,cljs.core.map.call(null,(function (p1__21584_SHARP_){
return datascript.parser.postwalk.call(null,p1__21584_SHARP_,f);
}),form));
} else {
if(cljs.core.coll_QMARK_.call(null,form)){
return f.call(null,cljs.core.into.call(null,cljs.core.empty.call(null,form),cljs.core.map.call(null,(function (p1__21585_SHARP_){
return datascript.parser.postwalk.call(null,p1__21585_SHARP_,f);
}),form)));
} else {
return f.call(null,form);

}
}
}
}
});
datascript.parser.with_source = (function datascript$parser$with_source(obj,source){
return cljs.core.with_meta.call(null,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"source","source",-433931539),source], null));
});
datascript.parser.source = (function datascript$parser$source(obj){
var or__3922__auto__ = new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,obj));
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return obj;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Placeholder = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
datascript.parser.Placeholder.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4172__auto__,k__4173__auto__){
var self__ = this;
var this__4172__auto____$1 = this;
return this__4172__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4173__auto__,null);
});

datascript.parser.Placeholder.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4174__auto__,k21595,else__4175__auto__){
var self__ = this;
var this__4174__auto____$1 = this;
var G__21599 = k21595;
switch (G__21599) {
default:
return cljs.core.get.call(null,self__.__extmap,k21595,else__4175__auto__);

}
});

datascript.parser.Placeholder.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4186__auto__,writer__4187__auto__,opts__4188__auto__){
var self__ = this;
var this__4186__auto____$1 = this;
var pr_pair__4189__auto__ = ((function (this__4186__auto____$1){
return (function (keyval__4190__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4187__auto__,cljs.core.pr_writer,""," ","",opts__4188__auto__,keyval__4190__auto__);
});})(this__4186__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4187__auto__,pr_pair__4189__auto__,"#datascript.parser.Placeholder{",", ","}",opts__4188__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

datascript.parser.Placeholder.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__21594){
var self__ = this;
var G__21594__$1 = this;
return (new cljs.core.RecordIter((0),G__21594__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

datascript.parser.Placeholder.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4170__auto__){
var self__ = this;
var this__4170__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Placeholder.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4167__auto__){
var self__ = this;
var this__4167__auto____$1 = this;
return (new datascript.parser.Placeholder(self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Placeholder.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4176__auto__){
var self__ = this;
var this__4176__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.Placeholder.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4168__auto__){
var self__ = this;
var this__4168__auto____$1 = this;
var h__4030__auto__ = self__.__hash;
if(!((h__4030__auto__ == null))){
return h__4030__auto__;
} else {
var h__4030__auto____$1 = ((function (h__4030__auto__,this__4168__auto____$1){
return (function (coll__4169__auto__){
return (-528488587 ^ cljs.core.hash_unordered_coll.call(null,coll__4169__auto__));
});})(h__4030__auto__,this__4168__auto____$1))
.call(null,this__4168__auto____$1);
self__.__hash = h__4030__auto____$1;

return h__4030__auto____$1;
}
});

datascript.parser.Placeholder.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this21596,other21597){
var self__ = this;
var this21596__$1 = this;
return ((!((other21597 == null))) && ((this21596__$1.constructor === other21597.constructor)) && (cljs.core._EQ_.call(null,this21596__$1.__extmap,other21597.__extmap)));
});

datascript.parser.Placeholder.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4181__auto__,k__4182__auto__){
var self__ = this;
var this__4181__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__4182__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4181__auto____$1),self__.__meta),k__4182__auto__);
} else {
return (new datascript.parser.Placeholder(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4182__auto__)),null));
}
});

datascript.parser.Placeholder.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4179__auto__,k__4180__auto__,G__21594){
var self__ = this;
var this__4179__auto____$1 = this;
var pred__21600 = cljs.core.keyword_identical_QMARK_;
var expr__21601 = k__4180__auto__;
return (new datascript.parser.Placeholder(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4180__auto__,G__21594),null));
});

datascript.parser.Placeholder.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4184__auto__){
var self__ = this;
var this__4184__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

datascript.parser.Placeholder.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4171__auto__,G__21594){
var self__ = this;
var this__4171__auto____$1 = this;
return (new datascript.parser.Placeholder(G__21594,self__.__extmap,self__.__hash));
});

datascript.parser.Placeholder.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4177__auto__,entry__4178__auto__){
var self__ = this;
var this__4177__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4178__auto__)){
return this__4177__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4178__auto__,(0)),cljs.core._nth.call(null,entry__4178__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4177__auto____$1,entry__4178__auto__);
}
});

datascript.parser.Placeholder.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.Placeholder.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__1261__auto__,f21591){
var self__ = this;
var this__1261__auto____$1 = this;
var new__1262__auto__ = (new datascript.parser.Placeholder(null,null,null));
var temp__4655__auto__ = cljs.core.meta.call(null,this__1261__auto____$1);
if(cljs.core.truth_(temp__4655__auto__)){
var meta__1263__auto__ = temp__4655__auto__;
return cljs.core.with_meta.call(null,new__1262__auto__,meta__1263__auto__);
} else {
return new__1262__auto__;
}
});

datascript.parser.Placeholder.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___1264__auto__,pred21592,acc21593){
var self__ = this;
var ___1264__auto____$1 = this;
return acc21593;
});

datascript.parser.Placeholder.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___1264__auto__,acc21593){
var self__ = this;
var ___1264__auto____$1 = this;
return acc21593;
});

datascript.parser.Placeholder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

datascript.parser.Placeholder.cljs$lang$type = true;

datascript.parser.Placeholder.cljs$lang$ctorPrSeq = (function (this__4208__auto__){
return (new cljs.core.List(null,"datascript.parser/Placeholder",null,(1),null));
});

datascript.parser.Placeholder.cljs$lang$ctorPrWriter = (function (this__4208__auto__,writer__4209__auto__){
return cljs.core._write.call(null,writer__4209__auto__,"datascript.parser/Placeholder");
});

/**
 * Positional factory function for datascript.parser/Placeholder.
 */
datascript.parser.__GT_Placeholder = (function datascript$parser$__GT_Placeholder(){
return (new datascript.parser.Placeholder(null,null,null));
});

/**
 * Factory function for datascript.parser/Placeholder, taking a map of keywords to field values.
 */
datascript.parser.map__GT_Placeholder = (function datascript$parser$map__GT_Placeholder(G__21598){
return (new datascript.parser.Placeholder(null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__21598)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Variable = (function (symbol,__meta,__extmap,__hash){
this.symbol = symbol;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
datascript.parser.Variable.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4172__auto__,k__4173__auto__){
var self__ = this;
var this__4172__auto____$1 = this;
return this__4172__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4173__auto__,null);
});

datascript.parser.Variable.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4174__auto__,k21608,else__4175__auto__){
var self__ = this;
var this__4174__auto____$1 = this;
var G__21612 = k21608;
var G__21612__$1 = (((G__21612 instanceof cljs.core.Keyword))?G__21612.fqn:null);
switch (G__21612__$1) {
case "symbol":
return self__.symbol;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k21608,else__4175__auto__);

}
});

datascript.parser.Variable.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4186__auto__,writer__4187__auto__,opts__4188__auto__){
var self__ = this;
var this__4186__auto____$1 = this;
var pr_pair__4189__auto__ = ((function (this__4186__auto____$1){
return (function (keyval__4190__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4187__auto__,cljs.core.pr_writer,""," ","",opts__4188__auto__,keyval__4190__auto__);
});})(this__4186__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4187__auto__,pr_pair__4189__auto__,"#datascript.parser.Variable{",", ","}",opts__4188__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"symbol","symbol",-1038572696),self__.symbol],null))], null),self__.__extmap));
});

datascript.parser.Variable.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__21607){
var self__ = this;
var G__21607__$1 = this;
return (new cljs.core.RecordIter((0),G__21607__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"symbol","symbol",-1038572696)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

datascript.parser.Variable.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4170__auto__){
var self__ = this;
var this__4170__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Variable.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4167__auto__){
var self__ = this;
var this__4167__auto____$1 = this;
return (new datascript.parser.Variable(self__.symbol,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Variable.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4176__auto__){
var self__ = this;
var this__4176__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.Variable.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4168__auto__){
var self__ = this;
var this__4168__auto____$1 = this;
var h__4030__auto__ = self__.__hash;
if(!((h__4030__auto__ == null))){
return h__4030__auto__;
} else {
var h__4030__auto____$1 = ((function (h__4030__auto__,this__4168__auto____$1){
return (function (coll__4169__auto__){
return (736891289 ^ cljs.core.hash_unordered_coll.call(null,coll__4169__auto__));
});})(h__4030__auto__,this__4168__auto____$1))
.call(null,this__4168__auto____$1);
self__.__hash = h__4030__auto____$1;

return h__4030__auto____$1;
}
});

datascript.parser.Variable.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this21609,other21610){
var self__ = this;
var this21609__$1 = this;
return ((!((other21610 == null))) && ((this21609__$1.constructor === other21610.constructor)) && (cljs.core._EQ_.call(null,this21609__$1.symbol,other21610.symbol)) && (cljs.core._EQ_.call(null,this21609__$1.__extmap,other21610.__extmap)));
});

datascript.parser.Variable.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4181__auto__,k__4182__auto__){
var self__ = this;
var this__4181__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"symbol","symbol",-1038572696),null], null), null),k__4182__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4181__auto____$1),self__.__meta),k__4182__auto__);
} else {
return (new datascript.parser.Variable(self__.symbol,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4182__auto__)),null));
}
});

datascript.parser.Variable.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4179__auto__,k__4180__auto__,G__21607){
var self__ = this;
var this__4179__auto____$1 = this;
var pred__21613 = cljs.core.keyword_identical_QMARK_;
var expr__21614 = k__4180__auto__;
if(cljs.core.truth_(pred__21613.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),expr__21614))){
return (new datascript.parser.Variable(G__21607,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Variable(self__.symbol,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4180__auto__,G__21607),null));
}
});

datascript.parser.Variable.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4184__auto__){
var self__ = this;
var this__4184__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"symbol","symbol",-1038572696),self__.symbol,null))], null),self__.__extmap));
});

datascript.parser.Variable.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4171__auto__,G__21607){
var self__ = this;
var this__4171__auto____$1 = this;
return (new datascript.parser.Variable(self__.symbol,G__21607,self__.__extmap,self__.__hash));
});

datascript.parser.Variable.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4177__auto__,entry__4178__auto__){
var self__ = this;
var this__4177__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4178__auto__)){
return this__4177__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4178__auto__,(0)),cljs.core._nth.call(null,entry__4178__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4177__auto____$1,entry__4178__auto__);
}
});

datascript.parser.Variable.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.Variable.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__1261__auto__,f21604){
var self__ = this;
var this__1261__auto____$1 = this;
var new__1262__auto__ = (new datascript.parser.Variable(datascript.parser.postwalk.call(null,self__.symbol,f21604),null,null,null));
var temp__4655__auto__ = cljs.core.meta.call(null,this__1261__auto____$1);
if(cljs.core.truth_(temp__4655__auto__)){
var meta__1263__auto__ = temp__4655__auto__;
return cljs.core.with_meta.call(null,new__1262__auto__,meta__1263__auto__);
} else {
return new__1262__auto__;
}
});

datascript.parser.Variable.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___1264__auto__,pred21605,acc21606){
var self__ = this;
var ___1264__auto____$1 = this;
return datascript.parser.collect.call(null,pred21605,self__.symbol,acc21606);
});

datascript.parser.Variable.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___1264__auto__,acc21606){
var self__ = this;
var ___1264__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc21606,self__.symbol);
});

datascript.parser.Variable.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"symbol","symbol",601958831,null)], null);
});

datascript.parser.Variable.cljs$lang$type = true;

datascript.parser.Variable.cljs$lang$ctorPrSeq = (function (this__4208__auto__){
return (new cljs.core.List(null,"datascript.parser/Variable",null,(1),null));
});

datascript.parser.Variable.cljs$lang$ctorPrWriter = (function (this__4208__auto__,writer__4209__auto__){
return cljs.core._write.call(null,writer__4209__auto__,"datascript.parser/Variable");
});

/**
 * Positional factory function for datascript.parser/Variable.
 */
datascript.parser.__GT_Variable = (function datascript$parser$__GT_Variable(symbol){
return (new datascript.parser.Variable(symbol,null,null,null));
});

/**
 * Factory function for datascript.parser/Variable, taking a map of keywords to field values.
 */
datascript.parser.map__GT_Variable = (function datascript$parser$map__GT_Variable(G__21611){
return (new datascript.parser.Variable(new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(G__21611),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__21611,new cljs.core.Keyword(null,"symbol","symbol",-1038572696))),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.SrcVar = (function (symbol,__meta,__extmap,__hash){
this.symbol = symbol;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
datascript.parser.SrcVar.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4172__auto__,k__4173__auto__){
var self__ = this;
var this__4172__auto____$1 = this;
return this__4172__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4173__auto__,null);
});

datascript.parser.SrcVar.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4174__auto__,k21621,else__4175__auto__){
var self__ = this;
var this__4174__auto____$1 = this;
var G__21625 = k21621;
var G__21625__$1 = (((G__21625 instanceof cljs.core.Keyword))?G__21625.fqn:null);
switch (G__21625__$1) {
case "symbol":
return self__.symbol;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k21621,else__4175__auto__);

}
});

datascript.parser.SrcVar.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4186__auto__,writer__4187__auto__,opts__4188__auto__){
var self__ = this;
var this__4186__auto____$1 = this;
var pr_pair__4189__auto__ = ((function (this__4186__auto____$1){
return (function (keyval__4190__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4187__auto__,cljs.core.pr_writer,""," ","",opts__4188__auto__,keyval__4190__auto__);
});})(this__4186__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4187__auto__,pr_pair__4189__auto__,"#datascript.parser.SrcVar{",", ","}",opts__4188__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"symbol","symbol",-1038572696),self__.symbol],null))], null),self__.__extmap));
});

datascript.parser.SrcVar.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__21620){
var self__ = this;
var G__21620__$1 = this;
return (new cljs.core.RecordIter((0),G__21620__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"symbol","symbol",-1038572696)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

datascript.parser.SrcVar.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4170__auto__){
var self__ = this;
var this__4170__auto____$1 = this;
return self__.__meta;
});

datascript.parser.SrcVar.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4167__auto__){
var self__ = this;
var this__4167__auto____$1 = this;
return (new datascript.parser.SrcVar(self__.symbol,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.SrcVar.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4176__auto__){
var self__ = this;
var this__4176__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.SrcVar.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4168__auto__){
var self__ = this;
var this__4168__auto____$1 = this;
var h__4030__auto__ = self__.__hash;
if(!((h__4030__auto__ == null))){
return h__4030__auto__;
} else {
var h__4030__auto____$1 = ((function (h__4030__auto__,this__4168__auto____$1){
return (function (coll__4169__auto__){
return (-1648766309 ^ cljs.core.hash_unordered_coll.call(null,coll__4169__auto__));
});})(h__4030__auto__,this__4168__auto____$1))
.call(null,this__4168__auto____$1);
self__.__hash = h__4030__auto____$1;

return h__4030__auto____$1;
}
});

datascript.parser.SrcVar.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this21622,other21623){
var self__ = this;
var this21622__$1 = this;
return ((!((other21623 == null))) && ((this21622__$1.constructor === other21623.constructor)) && (cljs.core._EQ_.call(null,this21622__$1.symbol,other21623.symbol)) && (cljs.core._EQ_.call(null,this21622__$1.__extmap,other21623.__extmap)));
});

datascript.parser.SrcVar.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4181__auto__,k__4182__auto__){
var self__ = this;
var this__4181__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"symbol","symbol",-1038572696),null], null), null),k__4182__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4181__auto____$1),self__.__meta),k__4182__auto__);
} else {
return (new datascript.parser.SrcVar(self__.symbol,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4182__auto__)),null));
}
});

datascript.parser.SrcVar.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4179__auto__,k__4180__auto__,G__21620){
var self__ = this;
var this__4179__auto____$1 = this;
var pred__21626 = cljs.core.keyword_identical_QMARK_;
var expr__21627 = k__4180__auto__;
if(cljs.core.truth_(pred__21626.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),expr__21627))){
return (new datascript.parser.SrcVar(G__21620,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.SrcVar(self__.symbol,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4180__auto__,G__21620),null));
}
});

datascript.parser.SrcVar.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4184__auto__){
var self__ = this;
var this__4184__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"symbol","symbol",-1038572696),self__.symbol,null))], null),self__.__extmap));
});

datascript.parser.SrcVar.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4171__auto__,G__21620){
var self__ = this;
var this__4171__auto____$1 = this;
return (new datascript.parser.SrcVar(self__.symbol,G__21620,self__.__extmap,self__.__hash));
});

datascript.parser.SrcVar.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4177__auto__,entry__4178__auto__){
var self__ = this;
var this__4177__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4178__auto__)){
return this__4177__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4178__auto__,(0)),cljs.core._nth.call(null,entry__4178__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4177__auto____$1,entry__4178__auto__);
}
});

datascript.parser.SrcVar.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.SrcVar.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__1261__auto__,f21617){
var self__ = this;
var this__1261__auto____$1 = this;
var new__1262__auto__ = (new datascript.parser.SrcVar(datascript.parser.postwalk.call(null,self__.symbol,f21617),null,null,null));
var temp__4655__auto__ = cljs.core.meta.call(null,this__1261__auto____$1);
if(cljs.core.truth_(temp__4655__auto__)){
var meta__1263__auto__ = temp__4655__auto__;
return cljs.core.with_meta.call(null,new__1262__auto__,meta__1263__auto__);
} else {
return new__1262__auto__;
}
});

datascript.parser.SrcVar.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___1264__auto__,pred21618,acc21619){
var self__ = this;
var ___1264__auto____$1 = this;
return datascript.parser.collect.call(null,pred21618,self__.symbol,acc21619);
});

datascript.parser.SrcVar.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___1264__auto__,acc21619){
var self__ = this;
var ___1264__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc21619,self__.symbol);
});

datascript.parser.SrcVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"symbol","symbol",601958831,null)], null);
});

datascript.parser.SrcVar.cljs$lang$type = true;

datascript.parser.SrcVar.cljs$lang$ctorPrSeq = (function (this__4208__auto__){
return (new cljs.core.List(null,"datascript.parser/SrcVar",null,(1),null));
});

datascript.parser.SrcVar.cljs$lang$ctorPrWriter = (function (this__4208__auto__,writer__4209__auto__){
return cljs.core._write.call(null,writer__4209__auto__,"datascript.parser/SrcVar");
});

/**
 * Positional factory function for datascript.parser/SrcVar.
 */
datascript.parser.__GT_SrcVar = (function datascript$parser$__GT_SrcVar(symbol){
return (new datascript.parser.SrcVar(symbol,null,null,null));
});

/**
 * Factory function for datascript.parser/SrcVar, taking a map of keywords to field values.
 */
datascript.parser.map__GT_SrcVar = (function datascript$parser$map__GT_SrcVar(G__21624){
return (new datascript.parser.SrcVar(new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(G__21624),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__21624,new cljs.core.Keyword(null,"symbol","symbol",-1038572696))),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.DefaultSrc = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
datascript.parser.DefaultSrc.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4172__auto__,k__4173__auto__){
var self__ = this;
var this__4172__auto____$1 = this;
return this__4172__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4173__auto__,null);
});

datascript.parser.DefaultSrc.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4174__auto__,k21634,else__4175__auto__){
var self__ = this;
var this__4174__auto____$1 = this;
var G__21638 = k21634;
switch (G__21638) {
default:
return cljs.core.get.call(null,self__.__extmap,k21634,else__4175__auto__);

}
});

datascript.parser.DefaultSrc.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4186__auto__,writer__4187__auto__,opts__4188__auto__){
var self__ = this;
var this__4186__auto____$1 = this;
var pr_pair__4189__auto__ = ((function (this__4186__auto____$1){
return (function (keyval__4190__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4187__auto__,cljs.core.pr_writer,""," ","",opts__4188__auto__,keyval__4190__auto__);
});})(this__4186__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4187__auto__,pr_pair__4189__auto__,"#datascript.parser.DefaultSrc{",", ","}",opts__4188__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

datascript.parser.DefaultSrc.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__21633){
var self__ = this;
var G__21633__$1 = this;
return (new cljs.core.RecordIter((0),G__21633__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

datascript.parser.DefaultSrc.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4170__auto__){
var self__ = this;
var this__4170__auto____$1 = this;
return self__.__meta;
});

datascript.parser.DefaultSrc.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4167__auto__){
var self__ = this;
var this__4167__auto____$1 = this;
return (new datascript.parser.DefaultSrc(self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.DefaultSrc.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4176__auto__){
var self__ = this;
var this__4176__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.DefaultSrc.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4168__auto__){
var self__ = this;
var this__4168__auto____$1 = this;
var h__4030__auto__ = self__.__hash;
if(!((h__4030__auto__ == null))){
return h__4030__auto__;
} else {
var h__4030__auto____$1 = ((function (h__4030__auto__,this__4168__auto____$1){
return (function (coll__4169__auto__){
return (-350962559 ^ cljs.core.hash_unordered_coll.call(null,coll__4169__auto__));
});})(h__4030__auto__,this__4168__auto____$1))
.call(null,this__4168__auto____$1);
self__.__hash = h__4030__auto____$1;

return h__4030__auto____$1;
}
});

datascript.parser.DefaultSrc.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this21635,other21636){
var self__ = this;
var this21635__$1 = this;
return ((!((other21636 == null))) && ((this21635__$1.constructor === other21636.constructor)) && (cljs.core._EQ_.call(null,this21635__$1.__extmap,other21636.__extmap)));
});

datascript.parser.DefaultSrc.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4181__auto__,k__4182__auto__){
var self__ = this;
var this__4181__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__4182__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4181__auto____$1),self__.__meta),k__4182__auto__);
} else {
return (new datascript.parser.DefaultSrc(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4182__auto__)),null));
}
});

datascript.parser.DefaultSrc.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4179__auto__,k__4180__auto__,G__21633){
var self__ = this;
var this__4179__auto____$1 = this;
var pred__21639 = cljs.core.keyword_identical_QMARK_;
var expr__21640 = k__4180__auto__;
return (new datascript.parser.DefaultSrc(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4180__auto__,G__21633),null));
});

datascript.parser.DefaultSrc.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4184__auto__){
var self__ = this;
var this__4184__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

datascript.parser.DefaultSrc.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4171__auto__,G__21633){
var self__ = this;
var this__4171__auto____$1 = this;
return (new datascript.parser.DefaultSrc(G__21633,self__.__extmap,self__.__hash));
});

datascript.parser.DefaultSrc.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4177__auto__,entry__4178__auto__){
var self__ = this;
var this__4177__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4178__auto__)){
return this__4177__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4178__auto__,(0)),cljs.core._nth.call(null,entry__4178__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4177__auto____$1,entry__4178__auto__);
}
});

datascript.parser.DefaultSrc.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.DefaultSrc.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__1261__auto__,f21630){
var self__ = this;
var this__1261__auto____$1 = this;
var new__1262__auto__ = (new datascript.parser.DefaultSrc(null,null,null));
var temp__4655__auto__ = cljs.core.meta.call(null,this__1261__auto____$1);
if(cljs.core.truth_(temp__4655__auto__)){
var meta__1263__auto__ = temp__4655__auto__;
return cljs.core.with_meta.call(null,new__1262__auto__,meta__1263__auto__);
} else {
return new__1262__auto__;
}
});

datascript.parser.DefaultSrc.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___1264__auto__,pred21631,acc21632){
var self__ = this;
var ___1264__auto____$1 = this;
return acc21632;
});

datascript.parser.DefaultSrc.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___1264__auto__,acc21632){
var self__ = this;
var ___1264__auto____$1 = this;
return acc21632;
});

datascript.parser.DefaultSrc.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

datascript.parser.DefaultSrc.cljs$lang$type = true;

datascript.parser.DefaultSrc.cljs$lang$ctorPrSeq = (function (this__4208__auto__){
return (new cljs.core.List(null,"datascript.parser/DefaultSrc",null,(1),null));
});

datascript.parser.DefaultSrc.cljs$lang$ctorPrWriter = (function (this__4208__auto__,writer__4209__auto__){
return cljs.core._write.call(null,writer__4209__auto__,"datascript.parser/DefaultSrc");
});

/**
 * Positional factory function for datascript.parser/DefaultSrc.
 */
datascript.parser.__GT_DefaultSrc = (function datascript$parser$__GT_DefaultSrc(){
return (new datascript.parser.DefaultSrc(null,null,null));
});

/**
 * Factory function for datascript.parser/DefaultSrc, taking a map of keywords to field values.
 */
datascript.parser.map__GT_DefaultSrc = (function datascript$parser$map__GT_DefaultSrc(G__21637){
return (new datascript.parser.DefaultSrc(null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__21637)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.RulesVar = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
datascript.parser.RulesVar.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4172__auto__,k__4173__auto__){
var self__ = this;
var this__4172__auto____$1 = this;
return this__4172__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4173__auto__,null);
});

datascript.parser.RulesVar.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4174__auto__,k21647,else__4175__auto__){
var self__ = this;
var this__4174__auto____$1 = this;
var G__21651 = k21647;
switch (G__21651) {
default:
return cljs.core.get.call(null,self__.__extmap,k21647,else__4175__auto__);

}
});

datascript.parser.RulesVar.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4186__auto__,writer__4187__auto__,opts__4188__auto__){
var self__ = this;
var this__4186__auto____$1 = this;
var pr_pair__4189__auto__ = ((function (this__4186__auto____$1){
return (function (keyval__4190__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4187__auto__,cljs.core.pr_writer,""," ","",opts__4188__auto__,keyval__4190__auto__);
});})(this__4186__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4187__auto__,pr_pair__4189__auto__,"#datascript.parser.RulesVar{",", ","}",opts__4188__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

datascript.parser.RulesVar.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__21646){
var self__ = this;
var G__21646__$1 = this;
return (new cljs.core.RecordIter((0),G__21646__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

datascript.parser.RulesVar.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4170__auto__){
var self__ = this;
var this__4170__auto____$1 = this;
return self__.__meta;
});

datascript.parser.RulesVar.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4167__auto__){
var self__ = this;
var this__4167__auto____$1 = this;
return (new datascript.parser.RulesVar(self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.RulesVar.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4176__auto__){
var self__ = this;
var this__4176__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.RulesVar.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4168__auto__){
var self__ = this;
var this__4168__auto____$1 = this;
var h__4030__auto__ = self__.__hash;
if(!((h__4030__auto__ == null))){
return h__4030__auto__;
} else {
var h__4030__auto____$1 = ((function (h__4030__auto__,this__4168__auto____$1){
return (function (coll__4169__auto__){
return (-1504050517 ^ cljs.core.hash_unordered_coll.call(null,coll__4169__auto__));
});})(h__4030__auto__,this__4168__auto____$1))
.call(null,this__4168__auto____$1);
self__.__hash = h__4030__auto____$1;

return h__4030__auto____$1;
}
});

datascript.parser.RulesVar.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this21648,other21649){
var self__ = this;
var this21648__$1 = this;
return ((!((other21649 == null))) && ((this21648__$1.constructor === other21649.constructor)) && (cljs.core._EQ_.call(null,this21648__$1.__extmap,other21649.__extmap)));
});

datascript.parser.RulesVar.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4181__auto__,k__4182__auto__){
var self__ = this;
var this__4181__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__4182__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4181__auto____$1),self__.__meta),k__4182__auto__);
} else {
return (new datascript.parser.RulesVar(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4182__auto__)),null));
}
});

datascript.parser.RulesVar.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4179__auto__,k__4180__auto__,G__21646){
var self__ = this;
var this__4179__auto____$1 = this;
var pred__21652 = cljs.core.keyword_identical_QMARK_;
var expr__21653 = k__4180__auto__;
return (new datascript.parser.RulesVar(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4180__auto__,G__21646),null));
});

datascript.parser.RulesVar.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4184__auto__){
var self__ = this;
var this__4184__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

datascript.parser.RulesVar.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4171__auto__,G__21646){
var self__ = this;
var this__4171__auto____$1 = this;
return (new datascript.parser.RulesVar(G__21646,self__.__extmap,self__.__hash));
});

datascript.parser.RulesVar.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4177__auto__,entry__4178__auto__){
var self__ = this;
var this__4177__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4178__auto__)){
return this__4177__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4178__auto__,(0)),cljs.core._nth.call(null,entry__4178__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4177__auto____$1,entry__4178__auto__);
}
});

datascript.parser.RulesVar.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.RulesVar.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__1261__auto__,f21643){
var self__ = this;
var this__1261__auto____$1 = this;
var new__1262__auto__ = (new datascript.parser.RulesVar(null,null,null));
var temp__4655__auto__ = cljs.core.meta.call(null,this__1261__auto____$1);
if(cljs.core.truth_(temp__4655__auto__)){
var meta__1263__auto__ = temp__4655__auto__;
return cljs.core.with_meta.call(null,new__1262__auto__,meta__1263__auto__);
} else {
return new__1262__auto__;
}
});

datascript.parser.RulesVar.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___1264__auto__,pred21644,acc21645){
var self__ = this;
var ___1264__auto____$1 = this;
return acc21645;
});

datascript.parser.RulesVar.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___1264__auto__,acc21645){
var self__ = this;
var ___1264__auto____$1 = this;
return acc21645;
});

datascript.parser.RulesVar.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

datascript.parser.RulesVar.cljs$lang$type = true;

datascript.parser.RulesVar.cljs$lang$ctorPrSeq = (function (this__4208__auto__){
return (new cljs.core.List(null,"datascript.parser/RulesVar",null,(1),null));
});

datascript.parser.RulesVar.cljs$lang$ctorPrWriter = (function (this__4208__auto__,writer__4209__auto__){
return cljs.core._write.call(null,writer__4209__auto__,"datascript.parser/RulesVar");
});

/**
 * Positional factory function for datascript.parser/RulesVar.
 */
datascript.parser.__GT_RulesVar = (function datascript$parser$__GT_RulesVar(){
return (new datascript.parser.RulesVar(null,null,null));
});

/**
 * Factory function for datascript.parser/RulesVar, taking a map of keywords to field values.
 */
datascript.parser.map__GT_RulesVar = (function datascript$parser$map__GT_RulesVar(G__21650){
return (new datascript.parser.RulesVar(null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__21650)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Constant = (function (value,__meta,__extmap,__hash){
this.value = value;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
datascript.parser.Constant.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4172__auto__,k__4173__auto__){
var self__ = this;
var this__4172__auto____$1 = this;
return this__4172__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4173__auto__,null);
});

datascript.parser.Constant.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4174__auto__,k21660,else__4175__auto__){
var self__ = this;
var this__4174__auto____$1 = this;
var G__21664 = k21660;
var G__21664__$1 = (((G__21664 instanceof cljs.core.Keyword))?G__21664.fqn:null);
switch (G__21664__$1) {
case "value":
return self__.value;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k21660,else__4175__auto__);

}
});

datascript.parser.Constant.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4186__auto__,writer__4187__auto__,opts__4188__auto__){
var self__ = this;
var this__4186__auto____$1 = this;
var pr_pair__4189__auto__ = ((function (this__4186__auto____$1){
return (function (keyval__4190__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4187__auto__,cljs.core.pr_writer,""," ","",opts__4188__auto__,keyval__4190__auto__);
});})(this__4186__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4187__auto__,pr_pair__4189__auto__,"#datascript.parser.Constant{",", ","}",opts__4188__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null))], null),self__.__extmap));
});

datascript.parser.Constant.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__21659){
var self__ = this;
var G__21659__$1 = this;
return (new cljs.core.RecordIter((0),G__21659__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

datascript.parser.Constant.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4170__auto__){
var self__ = this;
var this__4170__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Constant.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4167__auto__){
var self__ = this;
var this__4167__auto____$1 = this;
return (new datascript.parser.Constant(self__.value,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Constant.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4176__auto__){
var self__ = this;
var this__4176__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.Constant.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4168__auto__){
var self__ = this;
var this__4168__auto____$1 = this;
var h__4030__auto__ = self__.__hash;
if(!((h__4030__auto__ == null))){
return h__4030__auto__;
} else {
var h__4030__auto____$1 = ((function (h__4030__auto__,this__4168__auto____$1){
return (function (coll__4169__auto__){
return (-812884714 ^ cljs.core.hash_unordered_coll.call(null,coll__4169__auto__));
});})(h__4030__auto__,this__4168__auto____$1))
.call(null,this__4168__auto____$1);
self__.__hash = h__4030__auto____$1;

return h__4030__auto____$1;
}
});

datascript.parser.Constant.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this21661,other21662){
var self__ = this;
var this21661__$1 = this;
return ((!((other21662 == null))) && ((this21661__$1.constructor === other21662.constructor)) && (cljs.core._EQ_.call(null,this21661__$1.value,other21662.value)) && (cljs.core._EQ_.call(null,this21661__$1.__extmap,other21662.__extmap)));
});

datascript.parser.Constant.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4181__auto__,k__4182__auto__){
var self__ = this;
var this__4181__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),null], null), null),k__4182__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4181__auto____$1),self__.__meta),k__4182__auto__);
} else {
return (new datascript.parser.Constant(self__.value,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4182__auto__)),null));
}
});

datascript.parser.Constant.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4179__auto__,k__4180__auto__,G__21659){
var self__ = this;
var this__4179__auto____$1 = this;
var pred__21665 = cljs.core.keyword_identical_QMARK_;
var expr__21666 = k__4180__auto__;
if(cljs.core.truth_(pred__21665.call(null,new cljs.core.Keyword(null,"value","value",305978217),expr__21666))){
return (new datascript.parser.Constant(G__21659,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Constant(self__.value,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4180__auto__,G__21659),null));
}
});

datascript.parser.Constant.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4184__auto__){
var self__ = this;
var this__4184__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"value","value",305978217),self__.value,null))], null),self__.__extmap));
});

datascript.parser.Constant.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4171__auto__,G__21659){
var self__ = this;
var this__4171__auto____$1 = this;
return (new datascript.parser.Constant(self__.value,G__21659,self__.__extmap,self__.__hash));
});

datascript.parser.Constant.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4177__auto__,entry__4178__auto__){
var self__ = this;
var this__4177__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4178__auto__)){
return this__4177__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4178__auto__,(0)),cljs.core._nth.call(null,entry__4178__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4177__auto____$1,entry__4178__auto__);
}
});

datascript.parser.Constant.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.Constant.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__1261__auto__,f21656){
var self__ = this;
var this__1261__auto____$1 = this;
var new__1262__auto__ = (new datascript.parser.Constant(datascript.parser.postwalk.call(null,self__.value,f21656),null,null,null));
var temp__4655__auto__ = cljs.core.meta.call(null,this__1261__auto____$1);
if(cljs.core.truth_(temp__4655__auto__)){
var meta__1263__auto__ = temp__4655__auto__;
return cljs.core.with_meta.call(null,new__1262__auto__,meta__1263__auto__);
} else {
return new__1262__auto__;
}
});

datascript.parser.Constant.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___1264__auto__,pred21657,acc21658){
var self__ = this;
var ___1264__auto____$1 = this;
return datascript.parser.collect.call(null,pred21657,self__.value,acc21658);
});

datascript.parser.Constant.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___1264__auto__,acc21658){
var self__ = this;
var ___1264__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc21658,self__.value);
});

datascript.parser.Constant.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",1946509744,null)], null);
});

datascript.parser.Constant.cljs$lang$type = true;

datascript.parser.Constant.cljs$lang$ctorPrSeq = (function (this__4208__auto__){
return (new cljs.core.List(null,"datascript.parser/Constant",null,(1),null));
});

datascript.parser.Constant.cljs$lang$ctorPrWriter = (function (this__4208__auto__,writer__4209__auto__){
return cljs.core._write.call(null,writer__4209__auto__,"datascript.parser/Constant");
});

/**
 * Positional factory function for datascript.parser/Constant.
 */
datascript.parser.__GT_Constant = (function datascript$parser$__GT_Constant(value){
return (new datascript.parser.Constant(value,null,null,null));
});

/**
 * Factory function for datascript.parser/Constant, taking a map of keywords to field values.
 */
datascript.parser.map__GT_Constant = (function datascript$parser$map__GT_Constant(G__21663){
return (new datascript.parser.Constant(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(G__21663),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__21663,new cljs.core.Keyword(null,"value","value",305978217))),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.PlainSymbol = (function (symbol,__meta,__extmap,__hash){
this.symbol = symbol;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
datascript.parser.PlainSymbol.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4172__auto__,k__4173__auto__){
var self__ = this;
var this__4172__auto____$1 = this;
return this__4172__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4173__auto__,null);
});

datascript.parser.PlainSymbol.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4174__auto__,k21673,else__4175__auto__){
var self__ = this;
var this__4174__auto____$1 = this;
var G__21677 = k21673;
var G__21677__$1 = (((G__21677 instanceof cljs.core.Keyword))?G__21677.fqn:null);
switch (G__21677__$1) {
case "symbol":
return self__.symbol;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k21673,else__4175__auto__);

}
});

datascript.parser.PlainSymbol.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4186__auto__,writer__4187__auto__,opts__4188__auto__){
var self__ = this;
var this__4186__auto____$1 = this;
var pr_pair__4189__auto__ = ((function (this__4186__auto____$1){
return (function (keyval__4190__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4187__auto__,cljs.core.pr_writer,""," ","",opts__4188__auto__,keyval__4190__auto__);
});})(this__4186__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4187__auto__,pr_pair__4189__auto__,"#datascript.parser.PlainSymbol{",", ","}",opts__4188__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"symbol","symbol",-1038572696),self__.symbol],null))], null),self__.__extmap));
});

datascript.parser.PlainSymbol.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__21672){
var self__ = this;
var G__21672__$1 = this;
return (new cljs.core.RecordIter((0),G__21672__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"symbol","symbol",-1038572696)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

datascript.parser.PlainSymbol.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4170__auto__){
var self__ = this;
var this__4170__auto____$1 = this;
return self__.__meta;
});

datascript.parser.PlainSymbol.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4167__auto__){
var self__ = this;
var this__4167__auto____$1 = this;
return (new datascript.parser.PlainSymbol(self__.symbol,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.PlainSymbol.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4176__auto__){
var self__ = this;
var this__4176__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.PlainSymbol.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4168__auto__){
var self__ = this;
var this__4168__auto____$1 = this;
var h__4030__auto__ = self__.__hash;
if(!((h__4030__auto__ == null))){
return h__4030__auto__;
} else {
var h__4030__auto____$1 = ((function (h__4030__auto__,this__4168__auto____$1){
return (function (coll__4169__auto__){
return (1509921913 ^ cljs.core.hash_unordered_coll.call(null,coll__4169__auto__));
});})(h__4030__auto__,this__4168__auto____$1))
.call(null,this__4168__auto____$1);
self__.__hash = h__4030__auto____$1;

return h__4030__auto____$1;
}
});

datascript.parser.PlainSymbol.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this21674,other21675){
var self__ = this;
var this21674__$1 = this;
return ((!((other21675 == null))) && ((this21674__$1.constructor === other21675.constructor)) && (cljs.core._EQ_.call(null,this21674__$1.symbol,other21675.symbol)) && (cljs.core._EQ_.call(null,this21674__$1.__extmap,other21675.__extmap)));
});

datascript.parser.PlainSymbol.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4181__auto__,k__4182__auto__){
var self__ = this;
var this__4181__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"symbol","symbol",-1038572696),null], null), null),k__4182__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4181__auto____$1),self__.__meta),k__4182__auto__);
} else {
return (new datascript.parser.PlainSymbol(self__.symbol,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4182__auto__)),null));
}
});

datascript.parser.PlainSymbol.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4179__auto__,k__4180__auto__,G__21672){
var self__ = this;
var this__4179__auto____$1 = this;
var pred__21678 = cljs.core.keyword_identical_QMARK_;
var expr__21679 = k__4180__auto__;
if(cljs.core.truth_(pred__21678.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),expr__21679))){
return (new datascript.parser.PlainSymbol(G__21672,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.PlainSymbol(self__.symbol,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4180__auto__,G__21672),null));
}
});

datascript.parser.PlainSymbol.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4184__auto__){
var self__ = this;
var this__4184__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"symbol","symbol",-1038572696),self__.symbol,null))], null),self__.__extmap));
});

datascript.parser.PlainSymbol.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4171__auto__,G__21672){
var self__ = this;
var this__4171__auto____$1 = this;
return (new datascript.parser.PlainSymbol(self__.symbol,G__21672,self__.__extmap,self__.__hash));
});

datascript.parser.PlainSymbol.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4177__auto__,entry__4178__auto__){
var self__ = this;
var this__4177__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4178__auto__)){
return this__4177__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4178__auto__,(0)),cljs.core._nth.call(null,entry__4178__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4177__auto____$1,entry__4178__auto__);
}
});

datascript.parser.PlainSymbol.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.PlainSymbol.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__1261__auto__,f21669){
var self__ = this;
var this__1261__auto____$1 = this;
var new__1262__auto__ = (new datascript.parser.PlainSymbol(datascript.parser.postwalk.call(null,self__.symbol,f21669),null,null,null));
var temp__4655__auto__ = cljs.core.meta.call(null,this__1261__auto____$1);
if(cljs.core.truth_(temp__4655__auto__)){
var meta__1263__auto__ = temp__4655__auto__;
return cljs.core.with_meta.call(null,new__1262__auto__,meta__1263__auto__);
} else {
return new__1262__auto__;
}
});

datascript.parser.PlainSymbol.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___1264__auto__,pred21670,acc21671){
var self__ = this;
var ___1264__auto____$1 = this;
return datascript.parser.collect.call(null,pred21670,self__.symbol,acc21671);
});

datascript.parser.PlainSymbol.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___1264__auto__,acc21671){
var self__ = this;
var ___1264__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc21671,self__.symbol);
});

datascript.parser.PlainSymbol.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"symbol","symbol",601958831,null)], null);
});

datascript.parser.PlainSymbol.cljs$lang$type = true;

datascript.parser.PlainSymbol.cljs$lang$ctorPrSeq = (function (this__4208__auto__){
return (new cljs.core.List(null,"datascript.parser/PlainSymbol",null,(1),null));
});

datascript.parser.PlainSymbol.cljs$lang$ctorPrWriter = (function (this__4208__auto__,writer__4209__auto__){
return cljs.core._write.call(null,writer__4209__auto__,"datascript.parser/PlainSymbol");
});

/**
 * Positional factory function for datascript.parser/PlainSymbol.
 */
datascript.parser.__GT_PlainSymbol = (function datascript$parser$__GT_PlainSymbol(symbol){
return (new datascript.parser.PlainSymbol(symbol,null,null,null));
});

/**
 * Factory function for datascript.parser/PlainSymbol, taking a map of keywords to field values.
 */
datascript.parser.map__GT_PlainSymbol = (function datascript$parser$map__GT_PlainSymbol(G__21676){
return (new datascript.parser.PlainSymbol(new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(G__21676),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__21676,new cljs.core.Keyword(null,"symbol","symbol",-1038572696))),null));
});

datascript.parser.parse_placeholder = (function datascript$parser$parse_placeholder(form){
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"_","_",-1201019570,null),form)){
return (new datascript.parser.Placeholder(null,null,null));
} else {
return null;
}
});
datascript.parser.parse_variable = (function datascript$parser$parse_variable(form){
if((((form instanceof cljs.core.Symbol)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,cljs.core.name.call(null,form)),"?")))){
return (new datascript.parser.Variable(form,null,null,null));
} else {
return null;
}
});
datascript.parser.parse_src_var = (function datascript$parser$parse_src_var(form){
if((((form instanceof cljs.core.Symbol)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,cljs.core.name.call(null,form)),"$")))){
return (new datascript.parser.SrcVar(form,null,null,null));
} else {
return null;
}
});
datascript.parser.parse_rules_var = (function datascript$parser$parse_rules_var(form){
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"%","%",-950237169,null),form)){
return (new datascript.parser.RulesVar(null,null,null));
} else {
return null;
}
});
datascript.parser.parse_constant = (function datascript$parser$parse_constant(form){
if(!((form instanceof cljs.core.Symbol))){
return (new datascript.parser.Constant(form,null,null,null));
} else {
return null;
}
});
datascript.parser.parse_plain_symbol = (function datascript$parser$parse_plain_symbol(form){
if((((form instanceof cljs.core.Symbol)) && (cljs.core.not.call(null,datascript.parser.parse_variable.call(null,form))) && (cljs.core.not.call(null,datascript.parser.parse_src_var.call(null,form))) && (cljs.core.not.call(null,datascript.parser.parse_rules_var.call(null,form))) && (cljs.core.not.call(null,datascript.parser.parse_placeholder.call(null,form))))){
return (new datascript.parser.PlainSymbol(form,null,null,null));
} else {
return null;
}
});
datascript.parser.parse_plain_variable = (function datascript$parser$parse_plain_variable(form){
if(cljs.core.truth_(datascript.parser.parse_plain_symbol.call(null,form))){
return (new datascript.parser.Variable(form,null,null,null));
} else {
return null;
}
});
datascript.parser.parse_fn_arg = (function datascript$parser$parse_fn_arg(form){
var or__3922__auto__ = datascript.parser.parse_variable.call(null,form);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
var or__3922__auto____$1 = datascript.parser.parse_constant.call(null,form);
if(cljs.core.truth_(or__3922__auto____$1)){
return or__3922__auto____$1;
} else {
return datascript.parser.parse_src_var.call(null,form);
}
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.RuleVars = (function (required,free,__meta,__extmap,__hash){
this.required = required;
this.free = free;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
datascript.parser.RuleVars.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4172__auto__,k__4173__auto__){
var self__ = this;
var this__4172__auto____$1 = this;
return this__4172__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4173__auto__,null);
});

datascript.parser.RuleVars.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4174__auto__,k21686,else__4175__auto__){
var self__ = this;
var this__4174__auto____$1 = this;
var G__21690 = k21686;
var G__21690__$1 = (((G__21690 instanceof cljs.core.Keyword))?G__21690.fqn:null);
switch (G__21690__$1) {
case "required":
return self__.required;

break;
case "free":
return self__.free;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k21686,else__4175__auto__);

}
});

datascript.parser.RuleVars.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4186__auto__,writer__4187__auto__,opts__4188__auto__){
var self__ = this;
var this__4186__auto____$1 = this;
var pr_pair__4189__auto__ = ((function (this__4186__auto____$1){
return (function (keyval__4190__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4187__auto__,cljs.core.pr_writer,""," ","",opts__4188__auto__,keyval__4190__auto__);
});})(this__4186__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4187__auto__,pr_pair__4189__auto__,"#datascript.parser.RuleVars{",", ","}",opts__4188__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"required","required",1807647006),self__.required],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"free","free",801364328),self__.free],null))], null),self__.__extmap));
});

datascript.parser.RuleVars.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__21685){
var self__ = this;
var G__21685__$1 = this;
return (new cljs.core.RecordIter((0),G__21685__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"required","required",1807647006),new cljs.core.Keyword(null,"free","free",801364328)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

datascript.parser.RuleVars.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4170__auto__){
var self__ = this;
var this__4170__auto____$1 = this;
return self__.__meta;
});

datascript.parser.RuleVars.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4167__auto__){
var self__ = this;
var this__4167__auto____$1 = this;
return (new datascript.parser.RuleVars(self__.required,self__.free,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.RuleVars.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4176__auto__){
var self__ = this;
var this__4176__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.RuleVars.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4168__auto__){
var self__ = this;
var this__4168__auto____$1 = this;
var h__4030__auto__ = self__.__hash;
if(!((h__4030__auto__ == null))){
return h__4030__auto__;
} else {
var h__4030__auto____$1 = ((function (h__4030__auto__,this__4168__auto____$1){
return (function (coll__4169__auto__){
return (892963297 ^ cljs.core.hash_unordered_coll.call(null,coll__4169__auto__));
});})(h__4030__auto__,this__4168__auto____$1))
.call(null,this__4168__auto____$1);
self__.__hash = h__4030__auto____$1;

return h__4030__auto____$1;
}
});

datascript.parser.RuleVars.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this21687,other21688){
var self__ = this;
var this21687__$1 = this;
return ((!((other21688 == null))) && ((this21687__$1.constructor === other21688.constructor)) && (cljs.core._EQ_.call(null,this21687__$1.required,other21688.required)) && (cljs.core._EQ_.call(null,this21687__$1.free,other21688.free)) && (cljs.core._EQ_.call(null,this21687__$1.__extmap,other21688.__extmap)));
});

datascript.parser.RuleVars.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4181__auto__,k__4182__auto__){
var self__ = this;
var this__4181__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"free","free",801364328),null,new cljs.core.Keyword(null,"required","required",1807647006),null], null), null),k__4182__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4181__auto____$1),self__.__meta),k__4182__auto__);
} else {
return (new datascript.parser.RuleVars(self__.required,self__.free,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4182__auto__)),null));
}
});

datascript.parser.RuleVars.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4179__auto__,k__4180__auto__,G__21685){
var self__ = this;
var this__4179__auto____$1 = this;
var pred__21691 = cljs.core.keyword_identical_QMARK_;
var expr__21692 = k__4180__auto__;
if(cljs.core.truth_(pred__21691.call(null,new cljs.core.Keyword(null,"required","required",1807647006),expr__21692))){
return (new datascript.parser.RuleVars(G__21685,self__.free,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__21691.call(null,new cljs.core.Keyword(null,"free","free",801364328),expr__21692))){
return (new datascript.parser.RuleVars(self__.required,G__21685,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.RuleVars(self__.required,self__.free,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4180__auto__,G__21685),null));
}
}
});

datascript.parser.RuleVars.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4184__auto__){
var self__ = this;
var this__4184__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"required","required",1807647006),self__.required,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"free","free",801364328),self__.free,null))], null),self__.__extmap));
});

datascript.parser.RuleVars.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4171__auto__,G__21685){
var self__ = this;
var this__4171__auto____$1 = this;
return (new datascript.parser.RuleVars(self__.required,self__.free,G__21685,self__.__extmap,self__.__hash));
});

datascript.parser.RuleVars.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4177__auto__,entry__4178__auto__){
var self__ = this;
var this__4177__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4178__auto__)){
return this__4177__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4178__auto__,(0)),cljs.core._nth.call(null,entry__4178__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4177__auto____$1,entry__4178__auto__);
}
});

datascript.parser.RuleVars.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.RuleVars.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__1261__auto__,f21682){
var self__ = this;
var this__1261__auto____$1 = this;
var new__1262__auto__ = (new datascript.parser.RuleVars(datascript.parser.postwalk.call(null,self__.required,f21682),datascript.parser.postwalk.call(null,self__.free,f21682),null,null,null));
var temp__4655__auto__ = cljs.core.meta.call(null,this__1261__auto____$1);
if(cljs.core.truth_(temp__4655__auto__)){
var meta__1263__auto__ = temp__4655__auto__;
return cljs.core.with_meta.call(null,new__1262__auto__,meta__1263__auto__);
} else {
return new__1262__auto__;
}
});

datascript.parser.RuleVars.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___1264__auto__,pred21683,acc21684){
var self__ = this;
var ___1264__auto____$1 = this;
return datascript.parser.collect.call(null,pred21683,self__.free,datascript.parser.collect.call(null,pred21683,self__.required,acc21684));
});

datascript.parser.RuleVars.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___1264__auto__,acc21684){
var self__ = this;
var ___1264__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc21684,self__.required),self__.free);
});

datascript.parser.RuleVars.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"required","required",-846788763,null),new cljs.core.Symbol(null,"free","free",-1853071441,null)], null);
});

datascript.parser.RuleVars.cljs$lang$type = true;

datascript.parser.RuleVars.cljs$lang$ctorPrSeq = (function (this__4208__auto__){
return (new cljs.core.List(null,"datascript.parser/RuleVars",null,(1),null));
});

datascript.parser.RuleVars.cljs$lang$ctorPrWriter = (function (this__4208__auto__,writer__4209__auto__){
return cljs.core._write.call(null,writer__4209__auto__,"datascript.parser/RuleVars");
});

/**
 * Positional factory function for datascript.parser/RuleVars.
 */
datascript.parser.__GT_RuleVars = (function datascript$parser$__GT_RuleVars(required,free){
return (new datascript.parser.RuleVars(required,free,null,null,null));
});

/**
 * Factory function for datascript.parser/RuleVars, taking a map of keywords to field values.
 */
datascript.parser.map__GT_RuleVars = (function datascript$parser$map__GT_RuleVars(G__21689){
return (new datascript.parser.RuleVars(new cljs.core.Keyword(null,"required","required",1807647006).cljs$core$IFn$_invoke$arity$1(G__21689),new cljs.core.Keyword(null,"free","free",801364328).cljs$core$IFn$_invoke$arity$1(G__21689),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__21689,new cljs.core.Keyword(null,"required","required",1807647006),new cljs.core.Keyword(null,"free","free",801364328))),null));
});

datascript.parser.parse_rule_vars = (function datascript$parser$parse_rule_vars(form){
if(cljs.core.sequential_QMARK_.call(null,form)){
var vec__21695 = ((cljs.core.sequential_QMARK_.call(null,cljs.core.first.call(null,form)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,form),cljs.core.next.call(null,form)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,form], null));
var required = cljs.core.nth.call(null,vec__21695,(0),null);
var rest = cljs.core.nth.call(null,vec__21695,(1),null);
var required_STAR_ = datascript.parser.parse_seq.call(null,datascript.parser.parse_variable,required);
var free_STAR_ = datascript.parser.parse_seq.call(null,datascript.parser.parse_variable,rest);
if(((cljs.core.empty_QMARK_.call(null,required_STAR_)) && (cljs.core.empty_QMARK_.call(null,free_STAR_)))){
throw cljs.core.ex_info.call(null,["Cannot parse rule-vars, expected [ variable+ | ([ variable+ ] variable*) ]"].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","rule-vars","parser/rule-vars",-1493174969),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
} else {
}

if(cljs.core.truth_(datascript.parser.distinct_QMARK_.call(null,cljs.core.concat.call(null,required_STAR_,free_STAR_)))){
} else {
throw cljs.core.ex_info.call(null,["Rule variables should be distinct"].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","rule-vars","parser/rule-vars",-1493174969),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}

return (new datascript.parser.RuleVars(required_STAR_,free_STAR_,null,null,null));
} else {
throw cljs.core.ex_info.call(null,["Cannot parse rule-vars, expected [ variable+ | ([ variable+ ] variable*) ]"].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","rule-vars","parser/rule-vars",-1493174969),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
});
datascript.parser.flatten_rule_vars = (function datascript$parser$flatten_rule_vars(rule_vars){
return cljs.core.concat.call(null,(cljs.core.truth_(new cljs.core.Keyword(null,"required","required",1807647006).cljs$core$IFn$_invoke$arity$1(rule_vars))?(function (){
new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.mapv.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),new cljs.core.Keyword(null,"required","required",1807647006).cljs$core$IFn$_invoke$arity$1(rule_vars))], null);

return cljs.core.mapv.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),new cljs.core.Keyword(null,"free","free",801364328).cljs$core$IFn$_invoke$arity$1(rule_vars));
})()
:null));
});
datascript.parser.rule_vars_arity = (function datascript$parser$rule_vars_arity(rule_vars){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.count.call(null,new cljs.core.Keyword(null,"required","required",1807647006).cljs$core$IFn$_invoke$arity$1(rule_vars)),cljs.core.count.call(null,new cljs.core.Keyword(null,"free","free",801364328).cljs$core$IFn$_invoke$arity$1(rule_vars))], null);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.BindIgnore = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
datascript.parser.BindIgnore.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4172__auto__,k__4173__auto__){
var self__ = this;
var this__4172__auto____$1 = this;
return this__4172__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4173__auto__,null);
});

datascript.parser.BindIgnore.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4174__auto__,k21702,else__4175__auto__){
var self__ = this;
var this__4174__auto____$1 = this;
var G__21706 = k21702;
switch (G__21706) {
default:
return cljs.core.get.call(null,self__.__extmap,k21702,else__4175__auto__);

}
});

datascript.parser.BindIgnore.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4186__auto__,writer__4187__auto__,opts__4188__auto__){
var self__ = this;
var this__4186__auto____$1 = this;
var pr_pair__4189__auto__ = ((function (this__4186__auto____$1){
return (function (keyval__4190__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4187__auto__,cljs.core.pr_writer,""," ","",opts__4188__auto__,keyval__4190__auto__);
});})(this__4186__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4187__auto__,pr_pair__4189__auto__,"#datascript.parser.BindIgnore{",", ","}",opts__4188__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

datascript.parser.BindIgnore.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__21701){
var self__ = this;
var G__21701__$1 = this;
return (new cljs.core.RecordIter((0),G__21701__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

datascript.parser.BindIgnore.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4170__auto__){
var self__ = this;
var this__4170__auto____$1 = this;
return self__.__meta;
});

datascript.parser.BindIgnore.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4167__auto__){
var self__ = this;
var this__4167__auto____$1 = this;
return (new datascript.parser.BindIgnore(self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.BindIgnore.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4176__auto__){
var self__ = this;
var this__4176__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.BindIgnore.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4168__auto__){
var self__ = this;
var this__4168__auto____$1 = this;
var h__4030__auto__ = self__.__hash;
if(!((h__4030__auto__ == null))){
return h__4030__auto__;
} else {
var h__4030__auto____$1 = ((function (h__4030__auto__,this__4168__auto____$1){
return (function (coll__4169__auto__){
return (-890522983 ^ cljs.core.hash_unordered_coll.call(null,coll__4169__auto__));
});})(h__4030__auto__,this__4168__auto____$1))
.call(null,this__4168__auto____$1);
self__.__hash = h__4030__auto____$1;

return h__4030__auto____$1;
}
});

datascript.parser.BindIgnore.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this21703,other21704){
var self__ = this;
var this21703__$1 = this;
return ((!((other21704 == null))) && ((this21703__$1.constructor === other21704.constructor)) && (cljs.core._EQ_.call(null,this21703__$1.__extmap,other21704.__extmap)));
});

datascript.parser.BindIgnore.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4181__auto__,k__4182__auto__){
var self__ = this;
var this__4181__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__4182__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4181__auto____$1),self__.__meta),k__4182__auto__);
} else {
return (new datascript.parser.BindIgnore(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4182__auto__)),null));
}
});

datascript.parser.BindIgnore.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4179__auto__,k__4180__auto__,G__21701){
var self__ = this;
var this__4179__auto____$1 = this;
var pred__21707 = cljs.core.keyword_identical_QMARK_;
var expr__21708 = k__4180__auto__;
return (new datascript.parser.BindIgnore(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4180__auto__,G__21701),null));
});

datascript.parser.BindIgnore.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4184__auto__){
var self__ = this;
var this__4184__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

datascript.parser.BindIgnore.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4171__auto__,G__21701){
var self__ = this;
var this__4171__auto____$1 = this;
return (new datascript.parser.BindIgnore(G__21701,self__.__extmap,self__.__hash));
});

datascript.parser.BindIgnore.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4177__auto__,entry__4178__auto__){
var self__ = this;
var this__4177__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4178__auto__)){
return this__4177__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4178__auto__,(0)),cljs.core._nth.call(null,entry__4178__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4177__auto____$1,entry__4178__auto__);
}
});

datascript.parser.BindIgnore.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.BindIgnore.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__1261__auto__,f21698){
var self__ = this;
var this__1261__auto____$1 = this;
var new__1262__auto__ = (new datascript.parser.BindIgnore(null,null,null));
var temp__4655__auto__ = cljs.core.meta.call(null,this__1261__auto____$1);
if(cljs.core.truth_(temp__4655__auto__)){
var meta__1263__auto__ = temp__4655__auto__;
return cljs.core.with_meta.call(null,new__1262__auto__,meta__1263__auto__);
} else {
return new__1262__auto__;
}
});

datascript.parser.BindIgnore.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___1264__auto__,pred21699,acc21700){
var self__ = this;
var ___1264__auto____$1 = this;
return acc21700;
});

datascript.parser.BindIgnore.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___1264__auto__,acc21700){
var self__ = this;
var ___1264__auto____$1 = this;
return acc21700;
});

datascript.parser.BindIgnore.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

datascript.parser.BindIgnore.cljs$lang$type = true;

datascript.parser.BindIgnore.cljs$lang$ctorPrSeq = (function (this__4208__auto__){
return (new cljs.core.List(null,"datascript.parser/BindIgnore",null,(1),null));
});

datascript.parser.BindIgnore.cljs$lang$ctorPrWriter = (function (this__4208__auto__,writer__4209__auto__){
return cljs.core._write.call(null,writer__4209__auto__,"datascript.parser/BindIgnore");
});

/**
 * Positional factory function for datascript.parser/BindIgnore.
 */
datascript.parser.__GT_BindIgnore = (function datascript$parser$__GT_BindIgnore(){
return (new datascript.parser.BindIgnore(null,null,null));
});

/**
 * Factory function for datascript.parser/BindIgnore, taking a map of keywords to field values.
 */
datascript.parser.map__GT_BindIgnore = (function datascript$parser$map__GT_BindIgnore(G__21705){
return (new datascript.parser.BindIgnore(null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__21705)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.BindScalar = (function (variable,__meta,__extmap,__hash){
this.variable = variable;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
datascript.parser.BindScalar.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4172__auto__,k__4173__auto__){
var self__ = this;
var this__4172__auto____$1 = this;
return this__4172__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4173__auto__,null);
});

datascript.parser.BindScalar.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4174__auto__,k21715,else__4175__auto__){
var self__ = this;
var this__4174__auto____$1 = this;
var G__21719 = k21715;
var G__21719__$1 = (((G__21719 instanceof cljs.core.Keyword))?G__21719.fqn:null);
switch (G__21719__$1) {
case "variable":
return self__.variable;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k21715,else__4175__auto__);

}
});

datascript.parser.BindScalar.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4186__auto__,writer__4187__auto__,opts__4188__auto__){
var self__ = this;
var this__4186__auto____$1 = this;
var pr_pair__4189__auto__ = ((function (this__4186__auto____$1){
return (function (keyval__4190__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4187__auto__,cljs.core.pr_writer,""," ","",opts__4188__auto__,keyval__4190__auto__);
});})(this__4186__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4187__auto__,pr_pair__4189__auto__,"#datascript.parser.BindScalar{",", ","}",opts__4188__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"variable","variable",-281346492),self__.variable],null))], null),self__.__extmap));
});

datascript.parser.BindScalar.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__21714){
var self__ = this;
var G__21714__$1 = this;
return (new cljs.core.RecordIter((0),G__21714__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"variable","variable",-281346492)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

datascript.parser.BindScalar.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4170__auto__){
var self__ = this;
var this__4170__auto____$1 = this;
return self__.__meta;
});

datascript.parser.BindScalar.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4167__auto__){
var self__ = this;
var this__4167__auto____$1 = this;
return (new datascript.parser.BindScalar(self__.variable,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.BindScalar.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4176__auto__){
var self__ = this;
var this__4176__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.BindScalar.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4168__auto__){
var self__ = this;
var this__4168__auto____$1 = this;
var h__4030__auto__ = self__.__hash;
if(!((h__4030__auto__ == null))){
return h__4030__auto__;
} else {
var h__4030__auto____$1 = ((function (h__4030__auto__,this__4168__auto____$1){
return (function (coll__4169__auto__){
return (-1522792445 ^ cljs.core.hash_unordered_coll.call(null,coll__4169__auto__));
});})(h__4030__auto__,this__4168__auto____$1))
.call(null,this__4168__auto____$1);
self__.__hash = h__4030__auto____$1;

return h__4030__auto____$1;
}
});

datascript.parser.BindScalar.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this21716,other21717){
var self__ = this;
var this21716__$1 = this;
return ((!((other21717 == null))) && ((this21716__$1.constructor === other21717.constructor)) && (cljs.core._EQ_.call(null,this21716__$1.variable,other21717.variable)) && (cljs.core._EQ_.call(null,this21716__$1.__extmap,other21717.__extmap)));
});

datascript.parser.BindScalar.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4181__auto__,k__4182__auto__){
var self__ = this;
var this__4181__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"variable","variable",-281346492),null], null), null),k__4182__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4181__auto____$1),self__.__meta),k__4182__auto__);
} else {
return (new datascript.parser.BindScalar(self__.variable,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4182__auto__)),null));
}
});

datascript.parser.BindScalar.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4179__auto__,k__4180__auto__,G__21714){
var self__ = this;
var this__4179__auto____$1 = this;
var pred__21720 = cljs.core.keyword_identical_QMARK_;
var expr__21721 = k__4180__auto__;
if(cljs.core.truth_(pred__21720.call(null,new cljs.core.Keyword(null,"variable","variable",-281346492),expr__21721))){
return (new datascript.parser.BindScalar(G__21714,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.BindScalar(self__.variable,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4180__auto__,G__21714),null));
}
});

datascript.parser.BindScalar.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4184__auto__){
var self__ = this;
var this__4184__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"variable","variable",-281346492),self__.variable,null))], null),self__.__extmap));
});

datascript.parser.BindScalar.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4171__auto__,G__21714){
var self__ = this;
var this__4171__auto____$1 = this;
return (new datascript.parser.BindScalar(self__.variable,G__21714,self__.__extmap,self__.__hash));
});

datascript.parser.BindScalar.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4177__auto__,entry__4178__auto__){
var self__ = this;
var this__4177__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4178__auto__)){
return this__4177__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4178__auto__,(0)),cljs.core._nth.call(null,entry__4178__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4177__auto____$1,entry__4178__auto__);
}
});

datascript.parser.BindScalar.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.BindScalar.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__1261__auto__,f21711){
var self__ = this;
var this__1261__auto____$1 = this;
var new__1262__auto__ = (new datascript.parser.BindScalar(datascript.parser.postwalk.call(null,self__.variable,f21711),null,null,null));
var temp__4655__auto__ = cljs.core.meta.call(null,this__1261__auto____$1);
if(cljs.core.truth_(temp__4655__auto__)){
var meta__1263__auto__ = temp__4655__auto__;
return cljs.core.with_meta.call(null,new__1262__auto__,meta__1263__auto__);
} else {
return new__1262__auto__;
}
});

datascript.parser.BindScalar.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___1264__auto__,pred21712,acc21713){
var self__ = this;
var ___1264__auto____$1 = this;
return datascript.parser.collect.call(null,pred21712,self__.variable,acc21713);
});

datascript.parser.BindScalar.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___1264__auto__,acc21713){
var self__ = this;
var ___1264__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc21713,self__.variable);
});

datascript.parser.BindScalar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"variable","variable",1359185035,null)], null);
});

datascript.parser.BindScalar.cljs$lang$type = true;

datascript.parser.BindScalar.cljs$lang$ctorPrSeq = (function (this__4208__auto__){
return (new cljs.core.List(null,"datascript.parser/BindScalar",null,(1),null));
});

datascript.parser.BindScalar.cljs$lang$ctorPrWriter = (function (this__4208__auto__,writer__4209__auto__){
return cljs.core._write.call(null,writer__4209__auto__,"datascript.parser/BindScalar");
});

/**
 * Positional factory function for datascript.parser/BindScalar.
 */
datascript.parser.__GT_BindScalar = (function datascript$parser$__GT_BindScalar(variable){
return (new datascript.parser.BindScalar(variable,null,null,null));
});

/**
 * Factory function for datascript.parser/BindScalar, taking a map of keywords to field values.
 */
datascript.parser.map__GT_BindScalar = (function datascript$parser$map__GT_BindScalar(G__21718){
return (new datascript.parser.BindScalar(new cljs.core.Keyword(null,"variable","variable",-281346492).cljs$core$IFn$_invoke$arity$1(G__21718),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__21718,new cljs.core.Keyword(null,"variable","variable",-281346492))),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.BindTuple = (function (bindings,__meta,__extmap,__hash){
this.bindings = bindings;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
datascript.parser.BindTuple.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4172__auto__,k__4173__auto__){
var self__ = this;
var this__4172__auto____$1 = this;
return this__4172__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4173__auto__,null);
});

datascript.parser.BindTuple.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4174__auto__,k21728,else__4175__auto__){
var self__ = this;
var this__4174__auto____$1 = this;
var G__21732 = k21728;
var G__21732__$1 = (((G__21732 instanceof cljs.core.Keyword))?G__21732.fqn:null);
switch (G__21732__$1) {
case "bindings":
return self__.bindings;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k21728,else__4175__auto__);

}
});

datascript.parser.BindTuple.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4186__auto__,writer__4187__auto__,opts__4188__auto__){
var self__ = this;
var this__4186__auto____$1 = this;
var pr_pair__4189__auto__ = ((function (this__4186__auto____$1){
return (function (keyval__4190__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4187__auto__,cljs.core.pr_writer,""," ","",opts__4188__auto__,keyval__4190__auto__);
});})(this__4186__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4187__auto__,pr_pair__4189__auto__,"#datascript.parser.BindTuple{",", ","}",opts__4188__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"bindings","bindings",1271397192),self__.bindings],null))], null),self__.__extmap));
});

datascript.parser.BindTuple.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__21727){
var self__ = this;
var G__21727__$1 = this;
return (new cljs.core.RecordIter((0),G__21727__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bindings","bindings",1271397192)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

datascript.parser.BindTuple.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4170__auto__){
var self__ = this;
var this__4170__auto____$1 = this;
return self__.__meta;
});

datascript.parser.BindTuple.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4167__auto__){
var self__ = this;
var this__4167__auto____$1 = this;
return (new datascript.parser.BindTuple(self__.bindings,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.BindTuple.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4176__auto__){
var self__ = this;
var this__4176__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.BindTuple.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4168__auto__){
var self__ = this;
var this__4168__auto____$1 = this;
var h__4030__auto__ = self__.__hash;
if(!((h__4030__auto__ == null))){
return h__4030__auto__;
} else {
var h__4030__auto____$1 = ((function (h__4030__auto__,this__4168__auto____$1){
return (function (coll__4169__auto__){
return (-1637239347 ^ cljs.core.hash_unordered_coll.call(null,coll__4169__auto__));
});})(h__4030__auto__,this__4168__auto____$1))
.call(null,this__4168__auto____$1);
self__.__hash = h__4030__auto____$1;

return h__4030__auto____$1;
}
});

datascript.parser.BindTuple.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this21729,other21730){
var self__ = this;
var this21729__$1 = this;
return ((!((other21730 == null))) && ((this21729__$1.constructor === other21730.constructor)) && (cljs.core._EQ_.call(null,this21729__$1.bindings,other21730.bindings)) && (cljs.core._EQ_.call(null,this21729__$1.__extmap,other21730.__extmap)));
});

datascript.parser.BindTuple.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4181__auto__,k__4182__auto__){
var self__ = this;
var this__4181__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),null], null), null),k__4182__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4181__auto____$1),self__.__meta),k__4182__auto__);
} else {
return (new datascript.parser.BindTuple(self__.bindings,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4182__auto__)),null));
}
});

datascript.parser.BindTuple.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4179__auto__,k__4180__auto__,G__21727){
var self__ = this;
var this__4179__auto____$1 = this;
var pred__21733 = cljs.core.keyword_identical_QMARK_;
var expr__21734 = k__4180__auto__;
if(cljs.core.truth_(pred__21733.call(null,new cljs.core.Keyword(null,"bindings","bindings",1271397192),expr__21734))){
return (new datascript.parser.BindTuple(G__21727,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.BindTuple(self__.bindings,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4180__auto__,G__21727),null));
}
});

datascript.parser.BindTuple.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4184__auto__){
var self__ = this;
var this__4184__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"bindings","bindings",1271397192),self__.bindings,null))], null),self__.__extmap));
});

datascript.parser.BindTuple.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4171__auto__,G__21727){
var self__ = this;
var this__4171__auto____$1 = this;
return (new datascript.parser.BindTuple(self__.bindings,G__21727,self__.__extmap,self__.__hash));
});

datascript.parser.BindTuple.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4177__auto__,entry__4178__auto__){
var self__ = this;
var this__4177__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4178__auto__)){
return this__4177__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4178__auto__,(0)),cljs.core._nth.call(null,entry__4178__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4177__auto____$1,entry__4178__auto__);
}
});

datascript.parser.BindTuple.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.BindTuple.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__1261__auto__,f21724){
var self__ = this;
var this__1261__auto____$1 = this;
var new__1262__auto__ = (new datascript.parser.BindTuple(datascript.parser.postwalk.call(null,self__.bindings,f21724),null,null,null));
var temp__4655__auto__ = cljs.core.meta.call(null,this__1261__auto____$1);
if(cljs.core.truth_(temp__4655__auto__)){
var meta__1263__auto__ = temp__4655__auto__;
return cljs.core.with_meta.call(null,new__1262__auto__,meta__1263__auto__);
} else {
return new__1262__auto__;
}
});

datascript.parser.BindTuple.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___1264__auto__,pred21725,acc21726){
var self__ = this;
var ___1264__auto____$1 = this;
return datascript.parser.collect.call(null,pred21725,self__.bindings,acc21726);
});

datascript.parser.BindTuple.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___1264__auto__,acc21726){
var self__ = this;
var ___1264__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc21726,self__.bindings);
});

datascript.parser.BindTuple.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"bindings","bindings",-1383038577,null)], null);
});

datascript.parser.BindTuple.cljs$lang$type = true;

datascript.parser.BindTuple.cljs$lang$ctorPrSeq = (function (this__4208__auto__){
return (new cljs.core.List(null,"datascript.parser/BindTuple",null,(1),null));
});

datascript.parser.BindTuple.cljs$lang$ctorPrWriter = (function (this__4208__auto__,writer__4209__auto__){
return cljs.core._write.call(null,writer__4209__auto__,"datascript.parser/BindTuple");
});

/**
 * Positional factory function for datascript.parser/BindTuple.
 */
datascript.parser.__GT_BindTuple = (function datascript$parser$__GT_BindTuple(bindings){
return (new datascript.parser.BindTuple(bindings,null,null,null));
});

/**
 * Factory function for datascript.parser/BindTuple, taking a map of keywords to field values.
 */
datascript.parser.map__GT_BindTuple = (function datascript$parser$map__GT_BindTuple(G__21731){
return (new datascript.parser.BindTuple(new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$1(G__21731),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__21731,new cljs.core.Keyword(null,"bindings","bindings",1271397192))),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.BindColl = (function (binding,__meta,__extmap,__hash){
this.binding = binding;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
datascript.parser.BindColl.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4172__auto__,k__4173__auto__){
var self__ = this;
var this__4172__auto____$1 = this;
return this__4172__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4173__auto__,null);
});

datascript.parser.BindColl.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4174__auto__,k21741,else__4175__auto__){
var self__ = this;
var this__4174__auto____$1 = this;
var G__21745 = k21741;
var G__21745__$1 = (((G__21745 instanceof cljs.core.Keyword))?G__21745.fqn:null);
switch (G__21745__$1) {
case "binding":
return self__.binding;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k21741,else__4175__auto__);

}
});

datascript.parser.BindColl.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4186__auto__,writer__4187__auto__,opts__4188__auto__){
var self__ = this;
var this__4186__auto____$1 = this;
var pr_pair__4189__auto__ = ((function (this__4186__auto____$1){
return (function (keyval__4190__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4187__auto__,cljs.core.pr_writer,""," ","",opts__4188__auto__,keyval__4190__auto__);
});})(this__4186__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4187__auto__,pr_pair__4189__auto__,"#datascript.parser.BindColl{",", ","}",opts__4188__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"binding","binding",539932593),self__.binding],null))], null),self__.__extmap));
});

datascript.parser.BindColl.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__21740){
var self__ = this;
var G__21740__$1 = this;
return (new cljs.core.RecordIter((0),G__21740__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"binding","binding",539932593)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

datascript.parser.BindColl.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4170__auto__){
var self__ = this;
var this__4170__auto____$1 = this;
return self__.__meta;
});

datascript.parser.BindColl.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4167__auto__){
var self__ = this;
var this__4167__auto____$1 = this;
return (new datascript.parser.BindColl(self__.binding,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.BindColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4176__auto__){
var self__ = this;
var this__4176__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.BindColl.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4168__auto__){
var self__ = this;
var this__4168__auto____$1 = this;
var h__4030__auto__ = self__.__hash;
if(!((h__4030__auto__ == null))){
return h__4030__auto__;
} else {
var h__4030__auto____$1 = ((function (h__4030__auto__,this__4168__auto____$1){
return (function (coll__4169__auto__){
return (-1930368089 ^ cljs.core.hash_unordered_coll.call(null,coll__4169__auto__));
});})(h__4030__auto__,this__4168__auto____$1))
.call(null,this__4168__auto____$1);
self__.__hash = h__4030__auto____$1;

return h__4030__auto____$1;
}
});

datascript.parser.BindColl.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this21742,other21743){
var self__ = this;
var this21742__$1 = this;
return ((!((other21743 == null))) && ((this21742__$1.constructor === other21743.constructor)) && (cljs.core._EQ_.call(null,this21742__$1.binding,other21743.binding)) && (cljs.core._EQ_.call(null,this21742__$1.__extmap,other21743.__extmap)));
});

datascript.parser.BindColl.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4181__auto__,k__4182__auto__){
var self__ = this;
var this__4181__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"binding","binding",539932593),null], null), null),k__4182__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4181__auto____$1),self__.__meta),k__4182__auto__);
} else {
return (new datascript.parser.BindColl(self__.binding,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4182__auto__)),null));
}
});

datascript.parser.BindColl.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4179__auto__,k__4180__auto__,G__21740){
var self__ = this;
var this__4179__auto____$1 = this;
var pred__21746 = cljs.core.keyword_identical_QMARK_;
var expr__21747 = k__4180__auto__;
if(cljs.core.truth_(pred__21746.call(null,new cljs.core.Keyword(null,"binding","binding",539932593),expr__21747))){
return (new datascript.parser.BindColl(G__21740,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.BindColl(self__.binding,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4180__auto__,G__21740),null));
}
});

datascript.parser.BindColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4184__auto__){
var self__ = this;
var this__4184__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"binding","binding",539932593),self__.binding,null))], null),self__.__extmap));
});

datascript.parser.BindColl.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4171__auto__,G__21740){
var self__ = this;
var this__4171__auto____$1 = this;
return (new datascript.parser.BindColl(self__.binding,G__21740,self__.__extmap,self__.__hash));
});

datascript.parser.BindColl.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4177__auto__,entry__4178__auto__){
var self__ = this;
var this__4177__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4178__auto__)){
return this__4177__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4178__auto__,(0)),cljs.core._nth.call(null,entry__4178__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4177__auto____$1,entry__4178__auto__);
}
});

datascript.parser.BindColl.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.BindColl.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__1261__auto__,f21737){
var self__ = this;
var this__1261__auto____$1 = this;
var new__1262__auto__ = (new datascript.parser.BindColl(datascript.parser.postwalk.call(null,self__.binding,f21737),null,null,null));
var temp__4655__auto__ = cljs.core.meta.call(null,this__1261__auto____$1);
if(cljs.core.truth_(temp__4655__auto__)){
var meta__1263__auto__ = temp__4655__auto__;
return cljs.core.with_meta.call(null,new__1262__auto__,meta__1263__auto__);
} else {
return new__1262__auto__;
}
});

datascript.parser.BindColl.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___1264__auto__,pred21738,acc21739){
var self__ = this;
var ___1264__auto____$1 = this;
return datascript.parser.collect.call(null,pred21738,self__.binding,acc21739);
});

datascript.parser.BindColl.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___1264__auto__,acc21739){
var self__ = this;
var ___1264__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc21739,self__.binding);
});

datascript.parser.BindColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"binding","binding",-2114503176,null)], null);
});

datascript.parser.BindColl.cljs$lang$type = true;

datascript.parser.BindColl.cljs$lang$ctorPrSeq = (function (this__4208__auto__){
return (new cljs.core.List(null,"datascript.parser/BindColl",null,(1),null));
});

datascript.parser.BindColl.cljs$lang$ctorPrWriter = (function (this__4208__auto__,writer__4209__auto__){
return cljs.core._write.call(null,writer__4209__auto__,"datascript.parser/BindColl");
});

/**
 * Positional factory function for datascript.parser/BindColl.
 */
datascript.parser.__GT_BindColl = (function datascript$parser$__GT_BindColl(binding){
return (new datascript.parser.BindColl(binding,null,null,null));
});

/**
 * Factory function for datascript.parser/BindColl, taking a map of keywords to field values.
 */
datascript.parser.map__GT_BindColl = (function datascript$parser$map__GT_BindColl(G__21744){
return (new datascript.parser.BindColl(new cljs.core.Keyword(null,"binding","binding",539932593).cljs$core$IFn$_invoke$arity$1(G__21744),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__21744,new cljs.core.Keyword(null,"binding","binding",539932593))),null));
});

datascript.parser.parse_bind_ignore = (function datascript$parser$parse_bind_ignore(form){
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"_","_",-1201019570,null),form)){
return datascript.parser.with_source.call(null,(new datascript.parser.BindIgnore(null,null,null)),form);
} else {
return null;
}
});
datascript.parser.parse_bind_scalar = (function datascript$parser$parse_bind_scalar(form){
var temp__4657__auto__ = datascript.parser.parse_variable.call(null,form);
if(cljs.core.truth_(temp__4657__auto__)){
var var$ = temp__4657__auto__;
return datascript.parser.with_source.call(null,(new datascript.parser.BindScalar(var$,null,null,null)),form);
} else {
return null;
}
});
datascript.parser.parse_bind_coll = (function datascript$parser$parse_bind_coll(form){
if(cljs.core.truth_((function (){var and__3911__auto__ = datascript.parser.of_size_QMARK_.call(null,form,(2));
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core._EQ_.call(null,cljs.core.second.call(null,form),new cljs.core.Symbol(null,"...","...",-1926939749,null));
} else {
return and__3911__auto__;
}
})())){
var temp__4655__auto__ = datascript.parser.parse_binding.call(null,cljs.core.first.call(null,form));
if(cljs.core.truth_(temp__4655__auto__)){
var sub_bind = temp__4655__auto__;
return datascript.parser.with_source.call(null,(new datascript.parser.BindColl(sub_bind,null,null,null)),form);
} else {
throw cljs.core.ex_info.call(null,["Cannot parse collection binding"].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","binding","parser/binding",-346395752),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
} else {
return null;
}
});
datascript.parser.parse_tuple_el = (function datascript$parser$parse_tuple_el(form){
var or__3922__auto__ = datascript.parser.parse_bind_ignore.call(null,form);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return datascript.parser.parse_binding.call(null,form);
}
});
datascript.parser.parse_bind_tuple = (function datascript$parser$parse_bind_tuple(form){
var temp__4657__auto__ = datascript.parser.parse_seq.call(null,datascript.parser.parse_tuple_el,form);
if(cljs.core.truth_(temp__4657__auto__)){
var sub_bindings = temp__4657__auto__;
if(!(cljs.core.empty_QMARK_.call(null,sub_bindings))){
return datascript.parser.with_source.call(null,(new datascript.parser.BindTuple(sub_bindings,null,null,null)),form);
} else {
throw cljs.core.ex_info.call(null,["Tuple binding cannot be empty"].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","binding","parser/binding",-346395752),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
} else {
return null;
}
});
datascript.parser.parse_bind_rel = (function datascript$parser$parse_bind_rel(form){
if(cljs.core.truth_((function (){var and__3911__auto__ = datascript.parser.of_size_QMARK_.call(null,form,(1));
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.sequential_QMARK_.call(null,cljs.core.first.call(null,form));
} else {
return and__3911__auto__;
}
})())){
return datascript.parser.with_source.call(null,(new datascript.parser.BindColl(datascript.parser.parse_bind_tuple.call(null,cljs.core.first.call(null,form)),null,null,null)),form);
} else {
return null;
}
});
datascript.parser.parse_binding = (function datascript$parser$parse_binding(form){
var or__3922__auto__ = datascript.parser.parse_bind_coll.call(null,form);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
var or__3922__auto____$1 = datascript.parser.parse_bind_rel.call(null,form);
if(cljs.core.truth_(or__3922__auto____$1)){
return or__3922__auto____$1;
} else {
var or__3922__auto____$2 = datascript.parser.parse_bind_tuple.call(null,form);
if(cljs.core.truth_(or__3922__auto____$2)){
return or__3922__auto____$2;
} else {
var or__3922__auto____$3 = datascript.parser.parse_bind_ignore.call(null,form);
if(cljs.core.truth_(or__3922__auto____$3)){
return or__3922__auto____$3;
} else {
var or__3922__auto____$4 = datascript.parser.parse_bind_scalar.call(null,form);
if(cljs.core.truth_(or__3922__auto____$4)){
return or__3922__auto____$4;
} else {
throw cljs.core.ex_info.call(null,["Cannot parse binding, expected (bind-scalar | bind-tuple | bind-coll | bind-rel)"].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","binding","parser/binding",-346395752),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
}
}
}
}
});

/**
 * @interface
 */
datascript.parser.IFindVars = function(){};

datascript.parser._find_vars = (function datascript$parser$_find_vars(this$){
if(((!((this$ == null))) && (!((this$.datascript$parser$IFindVars$_find_vars$arity$1 == null))))){
return this$.datascript$parser$IFindVars$_find_vars$arity$1(this$);
} else {
var x__4211__auto__ = (((this$ == null))?null:this$);
var m__4212__auto__ = (datascript.parser._find_vars[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,this$);
} else {
var m__4212__auto____$1 = (datascript.parser._find_vars["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IFindVars.-find-vars",this$);
}
}
}
});

datascript.parser.Variable.prototype.datascript$parser$IFindVars$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.Variable.prototype.datascript$parser$IFindVars$_find_vars$arity$1 = (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1.symbol], null);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {datascript.parser.IFindVars}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Aggregate = (function (fn,args,__meta,__extmap,__hash){
this.fn = fn;
this.args = args;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
datascript.parser.Aggregate.prototype.datascript$parser$IFindVars$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.Aggregate.prototype.datascript$parser$IFindVars$_find_vars$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return datascript.parser._find_vars.call(null,cljs.core.last.call(null,self__.args));
});

datascript.parser.Aggregate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4172__auto__,k__4173__auto__){
var self__ = this;
var this__4172__auto____$1 = this;
return this__4172__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4173__auto__,null);
});

datascript.parser.Aggregate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4174__auto__,k21754,else__4175__auto__){
var self__ = this;
var this__4174__auto____$1 = this;
var G__21758 = k21754;
var G__21758__$1 = (((G__21758 instanceof cljs.core.Keyword))?G__21758.fqn:null);
switch (G__21758__$1) {
case "fn":
return self__.fn;

break;
case "args":
return self__.args;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k21754,else__4175__auto__);

}
});

datascript.parser.Aggregate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4186__auto__,writer__4187__auto__,opts__4188__auto__){
var self__ = this;
var this__4186__auto____$1 = this;
var pr_pair__4189__auto__ = ((function (this__4186__auto____$1){
return (function (keyval__4190__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4187__auto__,cljs.core.pr_writer,""," ","",opts__4188__auto__,keyval__4190__auto__);
});})(this__4186__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4187__auto__,pr_pair__4189__auto__,"#datascript.parser.Aggregate{",", ","}",opts__4188__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null))], null),self__.__extmap));
});

datascript.parser.Aggregate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__21753){
var self__ = this;
var G__21753__$1 = this;
return (new cljs.core.RecordIter((0),G__21753__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"args","args",1315556576)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

datascript.parser.Aggregate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4170__auto__){
var self__ = this;
var this__4170__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Aggregate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4167__auto__){
var self__ = this;
var this__4167__auto____$1 = this;
return (new datascript.parser.Aggregate(self__.fn,self__.args,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Aggregate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4176__auto__){
var self__ = this;
var this__4176__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.Aggregate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4168__auto__){
var self__ = this;
var this__4168__auto____$1 = this;
var h__4030__auto__ = self__.__hash;
if(!((h__4030__auto__ == null))){
return h__4030__auto__;
} else {
var h__4030__auto____$1 = ((function (h__4030__auto__,this__4168__auto____$1){
return (function (coll__4169__auto__){
return (-91097383 ^ cljs.core.hash_unordered_coll.call(null,coll__4169__auto__));
});})(h__4030__auto__,this__4168__auto____$1))
.call(null,this__4168__auto____$1);
self__.__hash = h__4030__auto____$1;

return h__4030__auto____$1;
}
});

datascript.parser.Aggregate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this21755,other21756){
var self__ = this;
var this21755__$1 = this;
return ((!((other21756 == null))) && ((this21755__$1.constructor === other21756.constructor)) && (cljs.core._EQ_.call(null,this21755__$1.fn,other21756.fn)) && (cljs.core._EQ_.call(null,this21755__$1.args,other21756.args)) && (cljs.core._EQ_.call(null,this21755__$1.__extmap,other21756.__extmap)));
});

datascript.parser.Aggregate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4181__auto__,k__4182__auto__){
var self__ = this;
var this__4181__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"args","args",1315556576),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null], null), null),k__4182__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4181__auto____$1),self__.__meta),k__4182__auto__);
} else {
return (new datascript.parser.Aggregate(self__.fn,self__.args,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4182__auto__)),null));
}
});

datascript.parser.Aggregate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4179__auto__,k__4180__auto__,G__21753){
var self__ = this;
var this__4179__auto____$1 = this;
var pred__21759 = cljs.core.keyword_identical_QMARK_;
var expr__21760 = k__4180__auto__;
if(cljs.core.truth_(pred__21759.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__21760))){
return (new datascript.parser.Aggregate(G__21753,self__.args,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__21759.call(null,new cljs.core.Keyword(null,"args","args",1315556576),expr__21760))){
return (new datascript.parser.Aggregate(self__.fn,G__21753,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Aggregate(self__.fn,self__.args,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4180__auto__,G__21753),null));
}
}
});

datascript.parser.Aggregate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4184__auto__){
var self__ = this;
var this__4184__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"args","args",1315556576),self__.args,null))], null),self__.__extmap));
});

datascript.parser.Aggregate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4171__auto__,G__21753){
var self__ = this;
var this__4171__auto____$1 = this;
return (new datascript.parser.Aggregate(self__.fn,self__.args,G__21753,self__.__extmap,self__.__hash));
});

datascript.parser.Aggregate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4177__auto__,entry__4178__auto__){
var self__ = this;
var this__4177__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4178__auto__)){
return this__4177__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4178__auto__,(0)),cljs.core._nth.call(null,entry__4178__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4177__auto____$1,entry__4178__auto__);
}
});

datascript.parser.Aggregate.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.Aggregate.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__1261__auto__,f21750){
var self__ = this;
var this__1261__auto____$1 = this;
var new__1262__auto__ = (new datascript.parser.Aggregate(datascript.parser.postwalk.call(null,self__.fn,f21750),datascript.parser.postwalk.call(null,self__.args,f21750),null,null,null));
var temp__4655__auto__ = cljs.core.meta.call(null,this__1261__auto____$1);
if(cljs.core.truth_(temp__4655__auto__)){
var meta__1263__auto__ = temp__4655__auto__;
return cljs.core.with_meta.call(null,new__1262__auto__,meta__1263__auto__);
} else {
return new__1262__auto__;
}
});

datascript.parser.Aggregate.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___1264__auto__,pred21751,acc21752){
var self__ = this;
var ___1264__auto____$1 = this;
return datascript.parser.collect.call(null,pred21751,self__.args,datascript.parser.collect.call(null,pred21751,self__.fn,acc21752));
});

datascript.parser.Aggregate.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___1264__auto__,acc21752){
var self__ = this;
var ___1264__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc21752,self__.fn),self__.args);
});

datascript.parser.Aggregate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)], null);
});

datascript.parser.Aggregate.cljs$lang$type = true;

datascript.parser.Aggregate.cljs$lang$ctorPrSeq = (function (this__4208__auto__){
return (new cljs.core.List(null,"datascript.parser/Aggregate",null,(1),null));
});

datascript.parser.Aggregate.cljs$lang$ctorPrWriter = (function (this__4208__auto__,writer__4209__auto__){
return cljs.core._write.call(null,writer__4209__auto__,"datascript.parser/Aggregate");
});

/**
 * Positional factory function for datascript.parser/Aggregate.
 */
datascript.parser.__GT_Aggregate = (function datascript$parser$__GT_Aggregate(fn,args){
return (new datascript.parser.Aggregate(fn,args,null,null,null));
});

/**
 * Factory function for datascript.parser/Aggregate, taking a map of keywords to field values.
 */
datascript.parser.map__GT_Aggregate = (function datascript$parser$map__GT_Aggregate(G__21757){
return (new datascript.parser.Aggregate(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__21757),new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(G__21757),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__21757,new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"args","args",1315556576))),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {datascript.parser.IFindVars}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Pull = (function (source,variable,pattern,__meta,__extmap,__hash){
this.source = source;
this.variable = variable;
this.pattern = pattern;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
datascript.parser.Pull.prototype.datascript$parser$IFindVars$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.Pull.prototype.datascript$parser$IFindVars$_find_vars$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return datascript.parser._find_vars.call(null,self__.variable);
});

datascript.parser.Pull.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4172__auto__,k__4173__auto__){
var self__ = this;
var this__4172__auto____$1 = this;
return this__4172__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4173__auto__,null);
});

datascript.parser.Pull.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4174__auto__,k21767,else__4175__auto__){
var self__ = this;
var this__4174__auto____$1 = this;
var G__21771 = k21767;
var G__21771__$1 = (((G__21771 instanceof cljs.core.Keyword))?G__21771.fqn:null);
switch (G__21771__$1) {
case "source":
return self__.source;

break;
case "variable":
return self__.variable;

break;
case "pattern":
return self__.pattern;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k21767,else__4175__auto__);

}
});

datascript.parser.Pull.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4186__auto__,writer__4187__auto__,opts__4188__auto__){
var self__ = this;
var this__4186__auto____$1 = this;
var pr_pair__4189__auto__ = ((function (this__4186__auto____$1){
return (function (keyval__4190__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4187__auto__,cljs.core.pr_writer,""," ","",opts__4188__auto__,keyval__4190__auto__);
});})(this__4186__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4187__auto__,pr_pair__4189__auto__,"#datascript.parser.Pull{",", ","}",opts__4188__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source","source",-433931539),self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"variable","variable",-281346492),self__.variable],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pattern","pattern",242135423),self__.pattern],null))], null),self__.__extmap));
});

datascript.parser.Pull.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__21766){
var self__ = this;
var G__21766__$1 = this;
return (new cljs.core.RecordIter((0),G__21766__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"variable","variable",-281346492),new cljs.core.Keyword(null,"pattern","pattern",242135423)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

datascript.parser.Pull.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4170__auto__){
var self__ = this;
var this__4170__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Pull.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4167__auto__){
var self__ = this;
var this__4167__auto____$1 = this;
return (new datascript.parser.Pull(self__.source,self__.variable,self__.pattern,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Pull.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4176__auto__){
var self__ = this;
var this__4176__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.Pull.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4168__auto__){
var self__ = this;
var this__4168__auto____$1 = this;
var h__4030__auto__ = self__.__hash;
if(!((h__4030__auto__ == null))){
return h__4030__auto__;
} else {
var h__4030__auto____$1 = ((function (h__4030__auto__,this__4168__auto____$1){
return (function (coll__4169__auto__){
return (-2108867663 ^ cljs.core.hash_unordered_coll.call(null,coll__4169__auto__));
});})(h__4030__auto__,this__4168__auto____$1))
.call(null,this__4168__auto____$1);
self__.__hash = h__4030__auto____$1;

return h__4030__auto____$1;
}
});

datascript.parser.Pull.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this21768,other21769){
var self__ = this;
var this21768__$1 = this;
return ((!((other21769 == null))) && ((this21768__$1.constructor === other21769.constructor)) && (cljs.core._EQ_.call(null,this21768__$1.source,other21769.source)) && (cljs.core._EQ_.call(null,this21768__$1.variable,other21769.variable)) && (cljs.core._EQ_.call(null,this21768__$1.pattern,other21769.pattern)) && (cljs.core._EQ_.call(null,this21768__$1.__extmap,other21769.__extmap)));
});

datascript.parser.Pull.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4181__auto__,k__4182__auto__){
var self__ = this;
var this__4181__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"variable","variable",-281346492),null,new cljs.core.Keyword(null,"source","source",-433931539),null,new cljs.core.Keyword(null,"pattern","pattern",242135423),null], null), null),k__4182__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4181__auto____$1),self__.__meta),k__4182__auto__);
} else {
return (new datascript.parser.Pull(self__.source,self__.variable,self__.pattern,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4182__auto__)),null));
}
});

datascript.parser.Pull.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4179__auto__,k__4180__auto__,G__21766){
var self__ = this;
var this__4179__auto____$1 = this;
var pred__21772 = cljs.core.keyword_identical_QMARK_;
var expr__21773 = k__4180__auto__;
if(cljs.core.truth_(pred__21772.call(null,new cljs.core.Keyword(null,"source","source",-433931539),expr__21773))){
return (new datascript.parser.Pull(G__21766,self__.variable,self__.pattern,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__21772.call(null,new cljs.core.Keyword(null,"variable","variable",-281346492),expr__21773))){
return (new datascript.parser.Pull(self__.source,G__21766,self__.pattern,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__21772.call(null,new cljs.core.Keyword(null,"pattern","pattern",242135423),expr__21773))){
return (new datascript.parser.Pull(self__.source,self__.variable,G__21766,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Pull(self__.source,self__.variable,self__.pattern,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4180__auto__,G__21766),null));
}
}
}
});

datascript.parser.Pull.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4184__auto__){
var self__ = this;
var this__4184__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"source","source",-433931539),self__.source,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"variable","variable",-281346492),self__.variable,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"pattern","pattern",242135423),self__.pattern,null))], null),self__.__extmap));
});

datascript.parser.Pull.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4171__auto__,G__21766){
var self__ = this;
var this__4171__auto____$1 = this;
return (new datascript.parser.Pull(self__.source,self__.variable,self__.pattern,G__21766,self__.__extmap,self__.__hash));
});

datascript.parser.Pull.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4177__auto__,entry__4178__auto__){
var self__ = this;
var this__4177__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4178__auto__)){
return this__4177__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4178__auto__,(0)),cljs.core._nth.call(null,entry__4178__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4177__auto____$1,entry__4178__auto__);
}
});

datascript.parser.Pull.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.Pull.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__1261__auto__,f21763){
var self__ = this;
var this__1261__auto____$1 = this;
var new__1262__auto__ = (new datascript.parser.Pull(datascript.parser.postwalk.call(null,self__.source,f21763),datascript.parser.postwalk.call(null,self__.variable,f21763),datascript.parser.postwalk.call(null,self__.pattern,f21763),null,null,null));
var temp__4655__auto__ = cljs.core.meta.call(null,this__1261__auto____$1);
if(cljs.core.truth_(temp__4655__auto__)){
var meta__1263__auto__ = temp__4655__auto__;
return cljs.core.with_meta.call(null,new__1262__auto__,meta__1263__auto__);
} else {
return new__1262__auto__;
}
});

datascript.parser.Pull.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___1264__auto__,pred21764,acc21765){
var self__ = this;
var ___1264__auto____$1 = this;
return datascript.parser.collect.call(null,pred21764,self__.pattern,datascript.parser.collect.call(null,pred21764,self__.variable,datascript.parser.collect.call(null,pred21764,self__.source,acc21765)));
});

datascript.parser.Pull.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___1264__auto__,acc21765){
var self__ = this;
var ___1264__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc21765,self__.source),self__.variable),self__.pattern);
});

datascript.parser.Pull.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"source","source",1206599988,null),new cljs.core.Symbol(null,"variable","variable",1359185035,null),new cljs.core.Symbol(null,"pattern","pattern",1882666950,null)], null);
});

datascript.parser.Pull.cljs$lang$type = true;

datascript.parser.Pull.cljs$lang$ctorPrSeq = (function (this__4208__auto__){
return (new cljs.core.List(null,"datascript.parser/Pull",null,(1),null));
});

datascript.parser.Pull.cljs$lang$ctorPrWriter = (function (this__4208__auto__,writer__4209__auto__){
return cljs.core._write.call(null,writer__4209__auto__,"datascript.parser/Pull");
});

/**
 * Positional factory function for datascript.parser/Pull.
 */
datascript.parser.__GT_Pull = (function datascript$parser$__GT_Pull(source,variable,pattern){
return (new datascript.parser.Pull(source,variable,pattern,null,null,null));
});

/**
 * Factory function for datascript.parser/Pull, taking a map of keywords to field values.
 */
datascript.parser.map__GT_Pull = (function datascript$parser$map__GT_Pull(G__21770){
return (new datascript.parser.Pull(new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(G__21770),new cljs.core.Keyword(null,"variable","variable",-281346492).cljs$core$IFn$_invoke$arity$1(G__21770),new cljs.core.Keyword(null,"pattern","pattern",242135423).cljs$core$IFn$_invoke$arity$1(G__21770),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__21770,new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"variable","variable",-281346492),new cljs.core.Keyword(null,"pattern","pattern",242135423))),null));
});


/**
 * @interface
 */
datascript.parser.IFindElements = function(){};

datascript.parser.find_elements = (function datascript$parser$find_elements(this$){
if(((!((this$ == null))) && (!((this$.datascript$parser$IFindElements$find_elements$arity$1 == null))))){
return this$.datascript$parser$IFindElements$find_elements$arity$1(this$);
} else {
var x__4211__auto__ = (((this$ == null))?null:this$);
var m__4212__auto__ = (datascript.parser.find_elements[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,this$);
} else {
var m__4212__auto____$1 = (datascript.parser.find_elements["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IFindElements.find-elements",this$);
}
}
}
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {datascript.parser.IFindElements}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.FindRel = (function (elements,__meta,__extmap,__hash){
this.elements = elements;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
datascript.parser.FindRel.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4172__auto__,k__4173__auto__){
var self__ = this;
var this__4172__auto____$1 = this;
return this__4172__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4173__auto__,null);
});

datascript.parser.FindRel.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4174__auto__,k21780,else__4175__auto__){
var self__ = this;
var this__4174__auto____$1 = this;
var G__21784 = k21780;
var G__21784__$1 = (((G__21784 instanceof cljs.core.Keyword))?G__21784.fqn:null);
switch (G__21784__$1) {
case "elements":
return self__.elements;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k21780,else__4175__auto__);

}
});

datascript.parser.FindRel.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4186__auto__,writer__4187__auto__,opts__4188__auto__){
var self__ = this;
var this__4186__auto____$1 = this;
var pr_pair__4189__auto__ = ((function (this__4186__auto____$1){
return (function (keyval__4190__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4187__auto__,cljs.core.pr_writer,""," ","",opts__4188__auto__,keyval__4190__auto__);
});})(this__4186__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4187__auto__,pr_pair__4189__auto__,"#datascript.parser.FindRel{",", ","}",opts__4188__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"elements","elements",657646735),self__.elements],null))], null),self__.__extmap));
});

datascript.parser.FindRel.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__21779){
var self__ = this;
var G__21779__$1 = this;
return (new cljs.core.RecordIter((0),G__21779__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"elements","elements",657646735)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

datascript.parser.FindRel.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4170__auto__){
var self__ = this;
var this__4170__auto____$1 = this;
return self__.__meta;
});

datascript.parser.FindRel.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4167__auto__){
var self__ = this;
var this__4167__auto____$1 = this;
return (new datascript.parser.FindRel(self__.elements,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.FindRel.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4176__auto__){
var self__ = this;
var this__4176__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.FindRel.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4168__auto__){
var self__ = this;
var this__4168__auto____$1 = this;
var h__4030__auto__ = self__.__hash;
if(!((h__4030__auto__ == null))){
return h__4030__auto__;
} else {
var h__4030__auto____$1 = ((function (h__4030__auto__,this__4168__auto____$1){
return (function (coll__4169__auto__){
return (744809563 ^ cljs.core.hash_unordered_coll.call(null,coll__4169__auto__));
});})(h__4030__auto__,this__4168__auto____$1))
.call(null,this__4168__auto____$1);
self__.__hash = h__4030__auto____$1;

return h__4030__auto____$1;
}
});

datascript.parser.FindRel.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this21781,other21782){
var self__ = this;
var this21781__$1 = this;
return ((!((other21782 == null))) && ((this21781__$1.constructor === other21782.constructor)) && (cljs.core._EQ_.call(null,this21781__$1.elements,other21782.elements)) && (cljs.core._EQ_.call(null,this21781__$1.__extmap,other21782.__extmap)));
});

datascript.parser.FindRel.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4181__auto__,k__4182__auto__){
var self__ = this;
var this__4181__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"elements","elements",657646735),null], null), null),k__4182__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4181__auto____$1),self__.__meta),k__4182__auto__);
} else {
return (new datascript.parser.FindRel(self__.elements,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4182__auto__)),null));
}
});

datascript.parser.FindRel.prototype.datascript$parser$IFindElements$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.FindRel.prototype.datascript$parser$IFindElements$find_elements$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.elements;
});

datascript.parser.FindRel.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4179__auto__,k__4180__auto__,G__21779){
var self__ = this;
var this__4179__auto____$1 = this;
var pred__21785 = cljs.core.keyword_identical_QMARK_;
var expr__21786 = k__4180__auto__;
if(cljs.core.truth_(pred__21785.call(null,new cljs.core.Keyword(null,"elements","elements",657646735),expr__21786))){
return (new datascript.parser.FindRel(G__21779,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.FindRel(self__.elements,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4180__auto__,G__21779),null));
}
});

datascript.parser.FindRel.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4184__auto__){
var self__ = this;
var this__4184__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"elements","elements",657646735),self__.elements,null))], null),self__.__extmap));
});

datascript.parser.FindRel.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4171__auto__,G__21779){
var self__ = this;
var this__4171__auto____$1 = this;
return (new datascript.parser.FindRel(self__.elements,G__21779,self__.__extmap,self__.__hash));
});

datascript.parser.FindRel.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4177__auto__,entry__4178__auto__){
var self__ = this;
var this__4177__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4178__auto__)){
return this__4177__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4178__auto__,(0)),cljs.core._nth.call(null,entry__4178__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4177__auto____$1,entry__4178__auto__);
}
});

datascript.parser.FindRel.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.FindRel.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__1261__auto__,f21776){
var self__ = this;
var this__1261__auto____$1 = this;
var new__1262__auto__ = (new datascript.parser.FindRel(datascript.parser.postwalk.call(null,self__.elements,f21776),null,null,null));
var temp__4655__auto__ = cljs.core.meta.call(null,this__1261__auto____$1);
if(cljs.core.truth_(temp__4655__auto__)){
var meta__1263__auto__ = temp__4655__auto__;
return cljs.core.with_meta.call(null,new__1262__auto__,meta__1263__auto__);
} else {
return new__1262__auto__;
}
});

datascript.parser.FindRel.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___1264__auto__,pred21777,acc21778){
var self__ = this;
var ___1264__auto____$1 = this;
return datascript.parser.collect.call(null,pred21777,self__.elements,acc21778);
});

datascript.parser.FindRel.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___1264__auto__,acc21778){
var self__ = this;
var ___1264__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc21778,self__.elements);
});

datascript.parser.FindRel.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"elements","elements",-1996789034,null)], null);
});

datascript.parser.FindRel.cljs$lang$type = true;

datascript.parser.FindRel.cljs$lang$ctorPrSeq = (function (this__4208__auto__){
return (new cljs.core.List(null,"datascript.parser/FindRel",null,(1),null));
});

datascript.parser.FindRel.cljs$lang$ctorPrWriter = (function (this__4208__auto__,writer__4209__auto__){
return cljs.core._write.call(null,writer__4209__auto__,"datascript.parser/FindRel");
});

/**
 * Positional factory function for datascript.parser/FindRel.
 */
datascript.parser.__GT_FindRel = (function datascript$parser$__GT_FindRel(elements){
return (new datascript.parser.FindRel(elements,null,null,null));
});

/**
 * Factory function for datascript.parser/FindRel, taking a map of keywords to field values.
 */
datascript.parser.map__GT_FindRel = (function datascript$parser$map__GT_FindRel(G__21783){
return (new datascript.parser.FindRel(new cljs.core.Keyword(null,"elements","elements",657646735).cljs$core$IFn$_invoke$arity$1(G__21783),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__21783,new cljs.core.Keyword(null,"elements","elements",657646735))),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {datascript.parser.IFindElements}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.FindColl = (function (element,__meta,__extmap,__hash){
this.element = element;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
datascript.parser.FindColl.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4172__auto__,k__4173__auto__){
var self__ = this;
var this__4172__auto____$1 = this;
return this__4172__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4173__auto__,null);
});

datascript.parser.FindColl.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4174__auto__,k21793,else__4175__auto__){
var self__ = this;
var this__4174__auto____$1 = this;
var G__21797 = k21793;
var G__21797__$1 = (((G__21797 instanceof cljs.core.Keyword))?G__21797.fqn:null);
switch (G__21797__$1) {
case "element":
return self__.element;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k21793,else__4175__auto__);

}
});

datascript.parser.FindColl.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4186__auto__,writer__4187__auto__,opts__4188__auto__){
var self__ = this;
var this__4186__auto____$1 = this;
var pr_pair__4189__auto__ = ((function (this__4186__auto____$1){
return (function (keyval__4190__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4187__auto__,cljs.core.pr_writer,""," ","",opts__4188__auto__,keyval__4190__auto__);
});})(this__4186__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4187__auto__,pr_pair__4189__auto__,"#datascript.parser.FindColl{",", ","}",opts__4188__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"element","element",1974019749),self__.element],null))], null),self__.__extmap));
});

datascript.parser.FindColl.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__21792){
var self__ = this;
var G__21792__$1 = this;
return (new cljs.core.RecordIter((0),G__21792__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"element","element",1974019749)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

datascript.parser.FindColl.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4170__auto__){
var self__ = this;
var this__4170__auto____$1 = this;
return self__.__meta;
});

datascript.parser.FindColl.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4167__auto__){
var self__ = this;
var this__4167__auto____$1 = this;
return (new datascript.parser.FindColl(self__.element,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.FindColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4176__auto__){
var self__ = this;
var this__4176__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.FindColl.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4168__auto__){
var self__ = this;
var this__4168__auto____$1 = this;
var h__4030__auto__ = self__.__hash;
if(!((h__4030__auto__ == null))){
return h__4030__auto__;
} else {
var h__4030__auto____$1 = ((function (h__4030__auto__,this__4168__auto____$1){
return (function (coll__4169__auto__){
return (124241361 ^ cljs.core.hash_unordered_coll.call(null,coll__4169__auto__));
});})(h__4030__auto__,this__4168__auto____$1))
.call(null,this__4168__auto____$1);
self__.__hash = h__4030__auto____$1;

return h__4030__auto____$1;
}
});

datascript.parser.FindColl.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this21794,other21795){
var self__ = this;
var this21794__$1 = this;
return ((!((other21795 == null))) && ((this21794__$1.constructor === other21795.constructor)) && (cljs.core._EQ_.call(null,this21794__$1.element,other21795.element)) && (cljs.core._EQ_.call(null,this21794__$1.__extmap,other21795.__extmap)));
});

datascript.parser.FindColl.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4181__auto__,k__4182__auto__){
var self__ = this;
var this__4181__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"element","element",1974019749),null], null), null),k__4182__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4181__auto____$1),self__.__meta),k__4182__auto__);
} else {
return (new datascript.parser.FindColl(self__.element,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4182__auto__)),null));
}
});

datascript.parser.FindColl.prototype.datascript$parser$IFindElements$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.FindColl.prototype.datascript$parser$IFindElements$find_elements$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.element], null);
});

datascript.parser.FindColl.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4179__auto__,k__4180__auto__,G__21792){
var self__ = this;
var this__4179__auto____$1 = this;
var pred__21798 = cljs.core.keyword_identical_QMARK_;
var expr__21799 = k__4180__auto__;
if(cljs.core.truth_(pred__21798.call(null,new cljs.core.Keyword(null,"element","element",1974019749),expr__21799))){
return (new datascript.parser.FindColl(G__21792,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.FindColl(self__.element,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4180__auto__,G__21792),null));
}
});

datascript.parser.FindColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4184__auto__){
var self__ = this;
var this__4184__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"element","element",1974019749),self__.element,null))], null),self__.__extmap));
});

datascript.parser.FindColl.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4171__auto__,G__21792){
var self__ = this;
var this__4171__auto____$1 = this;
return (new datascript.parser.FindColl(self__.element,G__21792,self__.__extmap,self__.__hash));
});

datascript.parser.FindColl.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4177__auto__,entry__4178__auto__){
var self__ = this;
var this__4177__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4178__auto__)){
return this__4177__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4178__auto__,(0)),cljs.core._nth.call(null,entry__4178__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4177__auto____$1,entry__4178__auto__);
}
});

datascript.parser.FindColl.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.FindColl.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__1261__auto__,f21789){
var self__ = this;
var this__1261__auto____$1 = this;
var new__1262__auto__ = (new datascript.parser.FindColl(datascript.parser.postwalk.call(null,self__.element,f21789),null,null,null));
var temp__4655__auto__ = cljs.core.meta.call(null,this__1261__auto____$1);
if(cljs.core.truth_(temp__4655__auto__)){
var meta__1263__auto__ = temp__4655__auto__;
return cljs.core.with_meta.call(null,new__1262__auto__,meta__1263__auto__);
} else {
return new__1262__auto__;
}
});

datascript.parser.FindColl.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___1264__auto__,pred21790,acc21791){
var self__ = this;
var ___1264__auto____$1 = this;
return datascript.parser.collect.call(null,pred21790,self__.element,acc21791);
});

datascript.parser.FindColl.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___1264__auto__,acc21791){
var self__ = this;
var ___1264__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc21791,self__.element);
});

datascript.parser.FindColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"element","element",-680416020,null)], null);
});

datascript.parser.FindColl.cljs$lang$type = true;

datascript.parser.FindColl.cljs$lang$ctorPrSeq = (function (this__4208__auto__){
return (new cljs.core.List(null,"datascript.parser/FindColl",null,(1),null));
});

datascript.parser.FindColl.cljs$lang$ctorPrWriter = (function (this__4208__auto__,writer__4209__auto__){
return cljs.core._write.call(null,writer__4209__auto__,"datascript.parser/FindColl");
});

/**
 * Positional factory function for datascript.parser/FindColl.
 */
datascript.parser.__GT_FindColl = (function datascript$parser$__GT_FindColl(element){
return (new datascript.parser.FindColl(element,null,null,null));
});

/**
 * Factory function for datascript.parser/FindColl, taking a map of keywords to field values.
 */
datascript.parser.map__GT_FindColl = (function datascript$parser$map__GT_FindColl(G__21796){
return (new datascript.parser.FindColl(new cljs.core.Keyword(null,"element","element",1974019749).cljs$core$IFn$_invoke$arity$1(G__21796),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__21796,new cljs.core.Keyword(null,"element","element",1974019749))),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {datascript.parser.IFindElements}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.FindScalar = (function (element,__meta,__extmap,__hash){
this.element = element;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
datascript.parser.FindScalar.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4172__auto__,k__4173__auto__){
var self__ = this;
var this__4172__auto____$1 = this;
return this__4172__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4173__auto__,null);
});

datascript.parser.FindScalar.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4174__auto__,k21806,else__4175__auto__){
var self__ = this;
var this__4174__auto____$1 = this;
var G__21810 = k21806;
var G__21810__$1 = (((G__21810 instanceof cljs.core.Keyword))?G__21810.fqn:null);
switch (G__21810__$1) {
case "element":
return self__.element;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k21806,else__4175__auto__);

}
});

datascript.parser.FindScalar.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4186__auto__,writer__4187__auto__,opts__4188__auto__){
var self__ = this;
var this__4186__auto____$1 = this;
var pr_pair__4189__auto__ = ((function (this__4186__auto____$1){
return (function (keyval__4190__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4187__auto__,cljs.core.pr_writer,""," ","",opts__4188__auto__,keyval__4190__auto__);
});})(this__4186__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4187__auto__,pr_pair__4189__auto__,"#datascript.parser.FindScalar{",", ","}",opts__4188__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"element","element",1974019749),self__.element],null))], null),self__.__extmap));
});

datascript.parser.FindScalar.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__21805){
var self__ = this;
var G__21805__$1 = this;
return (new cljs.core.RecordIter((0),G__21805__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"element","element",1974019749)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

datascript.parser.FindScalar.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4170__auto__){
var self__ = this;
var this__4170__auto____$1 = this;
return self__.__meta;
});

datascript.parser.FindScalar.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4167__auto__){
var self__ = this;
var this__4167__auto____$1 = this;
return (new datascript.parser.FindScalar(self__.element,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.FindScalar.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4176__auto__){
var self__ = this;
var this__4176__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.FindScalar.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4168__auto__){
var self__ = this;
var this__4168__auto____$1 = this;
var h__4030__auto__ = self__.__hash;
if(!((h__4030__auto__ == null))){
return h__4030__auto__;
} else {
var h__4030__auto____$1 = ((function (h__4030__auto__,this__4168__auto____$1){
return (function (coll__4169__auto__){
return (-661542332 ^ cljs.core.hash_unordered_coll.call(null,coll__4169__auto__));
});})(h__4030__auto__,this__4168__auto____$1))
.call(null,this__4168__auto____$1);
self__.__hash = h__4030__auto____$1;

return h__4030__auto____$1;
}
});

datascript.parser.FindScalar.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this21807,other21808){
var self__ = this;
var this21807__$1 = this;
return ((!((other21808 == null))) && ((this21807__$1.constructor === other21808.constructor)) && (cljs.core._EQ_.call(null,this21807__$1.element,other21808.element)) && (cljs.core._EQ_.call(null,this21807__$1.__extmap,other21808.__extmap)));
});

datascript.parser.FindScalar.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4181__auto__,k__4182__auto__){
var self__ = this;
var this__4181__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"element","element",1974019749),null], null), null),k__4182__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4181__auto____$1),self__.__meta),k__4182__auto__);
} else {
return (new datascript.parser.FindScalar(self__.element,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4182__auto__)),null));
}
});

datascript.parser.FindScalar.prototype.datascript$parser$IFindElements$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.FindScalar.prototype.datascript$parser$IFindElements$find_elements$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.element], null);
});

datascript.parser.FindScalar.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4179__auto__,k__4180__auto__,G__21805){
var self__ = this;
var this__4179__auto____$1 = this;
var pred__21811 = cljs.core.keyword_identical_QMARK_;
var expr__21812 = k__4180__auto__;
if(cljs.core.truth_(pred__21811.call(null,new cljs.core.Keyword(null,"element","element",1974019749),expr__21812))){
return (new datascript.parser.FindScalar(G__21805,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.FindScalar(self__.element,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4180__auto__,G__21805),null));
}
});

datascript.parser.FindScalar.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4184__auto__){
var self__ = this;
var this__4184__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"element","element",1974019749),self__.element,null))], null),self__.__extmap));
});

datascript.parser.FindScalar.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4171__auto__,G__21805){
var self__ = this;
var this__4171__auto____$1 = this;
return (new datascript.parser.FindScalar(self__.element,G__21805,self__.__extmap,self__.__hash));
});

datascript.parser.FindScalar.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4177__auto__,entry__4178__auto__){
var self__ = this;
var this__4177__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4178__auto__)){
return this__4177__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4178__auto__,(0)),cljs.core._nth.call(null,entry__4178__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4177__auto____$1,entry__4178__auto__);
}
});

datascript.parser.FindScalar.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.FindScalar.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__1261__auto__,f21802){
var self__ = this;
var this__1261__auto____$1 = this;
var new__1262__auto__ = (new datascript.parser.FindScalar(datascript.parser.postwalk.call(null,self__.element,f21802),null,null,null));
var temp__4655__auto__ = cljs.core.meta.call(null,this__1261__auto____$1);
if(cljs.core.truth_(temp__4655__auto__)){
var meta__1263__auto__ = temp__4655__auto__;
return cljs.core.with_meta.call(null,new__1262__auto__,meta__1263__auto__);
} else {
return new__1262__auto__;
}
});

datascript.parser.FindScalar.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___1264__auto__,pred21803,acc21804){
var self__ = this;
var ___1264__auto____$1 = this;
return datascript.parser.collect.call(null,pred21803,self__.element,acc21804);
});

datascript.parser.FindScalar.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___1264__auto__,acc21804){
var self__ = this;
var ___1264__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc21804,self__.element);
});

datascript.parser.FindScalar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"element","element",-680416020,null)], null);
});

datascript.parser.FindScalar.cljs$lang$type = true;

datascript.parser.FindScalar.cljs$lang$ctorPrSeq = (function (this__4208__auto__){
return (new cljs.core.List(null,"datascript.parser/FindScalar",null,(1),null));
});

datascript.parser.FindScalar.cljs$lang$ctorPrWriter = (function (this__4208__auto__,writer__4209__auto__){
return cljs.core._write.call(null,writer__4209__auto__,"datascript.parser/FindScalar");
});

/**
 * Positional factory function for datascript.parser/FindScalar.
 */
datascript.parser.__GT_FindScalar = (function datascript$parser$__GT_FindScalar(element){
return (new datascript.parser.FindScalar(element,null,null,null));
});

/**
 * Factory function for datascript.parser/FindScalar, taking a map of keywords to field values.
 */
datascript.parser.map__GT_FindScalar = (function datascript$parser$map__GT_FindScalar(G__21809){
return (new datascript.parser.FindScalar(new cljs.core.Keyword(null,"element","element",1974019749).cljs$core$IFn$_invoke$arity$1(G__21809),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__21809,new cljs.core.Keyword(null,"element","element",1974019749))),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {datascript.parser.IFindElements}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.FindTuple = (function (elements,__meta,__extmap,__hash){
this.elements = elements;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
datascript.parser.FindTuple.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4172__auto__,k__4173__auto__){
var self__ = this;
var this__4172__auto____$1 = this;
return this__4172__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4173__auto__,null);
});

datascript.parser.FindTuple.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4174__auto__,k21819,else__4175__auto__){
var self__ = this;
var this__4174__auto____$1 = this;
var G__21823 = k21819;
var G__21823__$1 = (((G__21823 instanceof cljs.core.Keyword))?G__21823.fqn:null);
switch (G__21823__$1) {
case "elements":
return self__.elements;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k21819,else__4175__auto__);

}
});

datascript.parser.FindTuple.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4186__auto__,writer__4187__auto__,opts__4188__auto__){
var self__ = this;
var this__4186__auto____$1 = this;
var pr_pair__4189__auto__ = ((function (this__4186__auto____$1){
return (function (keyval__4190__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4187__auto__,cljs.core.pr_writer,""," ","",opts__4188__auto__,keyval__4190__auto__);
});})(this__4186__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4187__auto__,pr_pair__4189__auto__,"#datascript.parser.FindTuple{",", ","}",opts__4188__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"elements","elements",657646735),self__.elements],null))], null),self__.__extmap));
});

datascript.parser.FindTuple.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__21818){
var self__ = this;
var G__21818__$1 = this;
return (new cljs.core.RecordIter((0),G__21818__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"elements","elements",657646735)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

datascript.parser.FindTuple.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4170__auto__){
var self__ = this;
var this__4170__auto____$1 = this;
return self__.__meta;
});

datascript.parser.FindTuple.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4167__auto__){
var self__ = this;
var this__4167__auto____$1 = this;
return (new datascript.parser.FindTuple(self__.elements,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.FindTuple.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4176__auto__){
var self__ = this;
var this__4176__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.FindTuple.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4168__auto__){
var self__ = this;
var this__4168__auto____$1 = this;
var h__4030__auto__ = self__.__hash;
if(!((h__4030__auto__ == null))){
return h__4030__auto__;
} else {
var h__4030__auto____$1 = ((function (h__4030__auto__,this__4168__auto____$1){
return (function (coll__4169__auto__){
return (681530371 ^ cljs.core.hash_unordered_coll.call(null,coll__4169__auto__));
});})(h__4030__auto__,this__4168__auto____$1))
.call(null,this__4168__auto____$1);
self__.__hash = h__4030__auto____$1;

return h__4030__auto____$1;
}
});

datascript.parser.FindTuple.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this21820,other21821){
var self__ = this;
var this21820__$1 = this;
return ((!((other21821 == null))) && ((this21820__$1.constructor === other21821.constructor)) && (cljs.core._EQ_.call(null,this21820__$1.elements,other21821.elements)) && (cljs.core._EQ_.call(null,this21820__$1.__extmap,other21821.__extmap)));
});

datascript.parser.FindTuple.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4181__auto__,k__4182__auto__){
var self__ = this;
var this__4181__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"elements","elements",657646735),null], null), null),k__4182__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4181__auto____$1),self__.__meta),k__4182__auto__);
} else {
return (new datascript.parser.FindTuple(self__.elements,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4182__auto__)),null));
}
});

datascript.parser.FindTuple.prototype.datascript$parser$IFindElements$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.FindTuple.prototype.datascript$parser$IFindElements$find_elements$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.elements;
});

datascript.parser.FindTuple.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4179__auto__,k__4180__auto__,G__21818){
var self__ = this;
var this__4179__auto____$1 = this;
var pred__21824 = cljs.core.keyword_identical_QMARK_;
var expr__21825 = k__4180__auto__;
if(cljs.core.truth_(pred__21824.call(null,new cljs.core.Keyword(null,"elements","elements",657646735),expr__21825))){
return (new datascript.parser.FindTuple(G__21818,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.FindTuple(self__.elements,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4180__auto__,G__21818),null));
}
});

datascript.parser.FindTuple.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4184__auto__){
var self__ = this;
var this__4184__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"elements","elements",657646735),self__.elements,null))], null),self__.__extmap));
});

datascript.parser.FindTuple.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4171__auto__,G__21818){
var self__ = this;
var this__4171__auto____$1 = this;
return (new datascript.parser.FindTuple(self__.elements,G__21818,self__.__extmap,self__.__hash));
});

datascript.parser.FindTuple.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4177__auto__,entry__4178__auto__){
var self__ = this;
var this__4177__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4178__auto__)){
return this__4177__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4178__auto__,(0)),cljs.core._nth.call(null,entry__4178__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4177__auto____$1,entry__4178__auto__);
}
});

datascript.parser.FindTuple.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.FindTuple.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__1261__auto__,f21815){
var self__ = this;
var this__1261__auto____$1 = this;
var new__1262__auto__ = (new datascript.parser.FindTuple(datascript.parser.postwalk.call(null,self__.elements,f21815),null,null,null));
var temp__4655__auto__ = cljs.core.meta.call(null,this__1261__auto____$1);
if(cljs.core.truth_(temp__4655__auto__)){
var meta__1263__auto__ = temp__4655__auto__;
return cljs.core.with_meta.call(null,new__1262__auto__,meta__1263__auto__);
} else {
return new__1262__auto__;
}
});

datascript.parser.FindTuple.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___1264__auto__,pred21816,acc21817){
var self__ = this;
var ___1264__auto____$1 = this;
return datascript.parser.collect.call(null,pred21816,self__.elements,acc21817);
});

datascript.parser.FindTuple.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___1264__auto__,acc21817){
var self__ = this;
var ___1264__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc21817,self__.elements);
});

datascript.parser.FindTuple.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"elements","elements",-1996789034,null)], null);
});

datascript.parser.FindTuple.cljs$lang$type = true;

datascript.parser.FindTuple.cljs$lang$ctorPrSeq = (function (this__4208__auto__){
return (new cljs.core.List(null,"datascript.parser/FindTuple",null,(1),null));
});

datascript.parser.FindTuple.cljs$lang$ctorPrWriter = (function (this__4208__auto__,writer__4209__auto__){
return cljs.core._write.call(null,writer__4209__auto__,"datascript.parser/FindTuple");
});

/**
 * Positional factory function for datascript.parser/FindTuple.
 */
datascript.parser.__GT_FindTuple = (function datascript$parser$__GT_FindTuple(elements){
return (new datascript.parser.FindTuple(elements,null,null,null));
});

/**
 * Factory function for datascript.parser/FindTuple, taking a map of keywords to field values.
 */
datascript.parser.map__GT_FindTuple = (function datascript$parser$map__GT_FindTuple(G__21822){
return (new datascript.parser.FindTuple(new cljs.core.Keyword(null,"elements","elements",657646735).cljs$core$IFn$_invoke$arity$1(G__21822),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__21822,new cljs.core.Keyword(null,"elements","elements",657646735))),null));
});

datascript.parser.find_vars = (function datascript$parser$find_vars(find){
return cljs.core.mapcat.call(null,datascript.parser._find_vars,datascript.parser.find_elements.call(null,find));
});
datascript.parser.aggregate_QMARK_ = (function datascript$parser$aggregate_QMARK_(element){
return (element instanceof datascript.parser.Aggregate);
});
datascript.parser.pull_QMARK_ = (function datascript$parser$pull_QMARK_(element){
return (element instanceof datascript.parser.Pull);
});
datascript.parser.parse_aggregate = (function datascript$parser$parse_aggregate(form){
if(((cljs.core.sequential_QMARK_.call(null,form)) && ((cljs.core.count.call(null,form) >= (2))))){
var vec__21828 = form;
var seq__21829 = cljs.core.seq.call(null,vec__21828);
var first__21830 = cljs.core.first.call(null,seq__21829);
var seq__21829__$1 = cljs.core.next.call(null,seq__21829);
var fn = first__21830;
var args = seq__21829__$1;
var fn_STAR_ = datascript.parser.parse_plain_symbol.call(null,fn);
var args_STAR_ = datascript.parser.parse_seq.call(null,datascript.parser.parse_fn_arg,args);
if(cljs.core.truth_((function (){var and__3911__auto__ = fn_STAR_;
if(cljs.core.truth_(and__3911__auto__)){
return args_STAR_;
} else {
return and__3911__auto__;
}
})())){
return (new datascript.parser.Aggregate(fn_STAR_,args_STAR_,null,null,null));
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.parse_aggregate_custom = (function datascript$parser$parse_aggregate_custom(form){
if(((cljs.core.sequential_QMARK_.call(null,form)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,form),new cljs.core.Symbol(null,"aggregate","aggregate",-1142967327,null))))){
if((cljs.core.count.call(null,form) >= (3))){
var vec__21831 = form;
var seq__21832 = cljs.core.seq.call(null,vec__21831);
var first__21833 = cljs.core.first.call(null,seq__21832);
var seq__21832__$1 = cljs.core.next.call(null,seq__21832);
var _ = first__21833;
var first__21833__$1 = cljs.core.first.call(null,seq__21832__$1);
var seq__21832__$2 = cljs.core.next.call(null,seq__21832__$1);
var fn = first__21833__$1;
var args = seq__21832__$2;
var fn_STAR_ = datascript.parser.parse_variable.call(null,fn);
var args_STAR_ = datascript.parser.parse_seq.call(null,datascript.parser.parse_fn_arg,args);
if(cljs.core.truth_((function (){var and__3911__auto__ = fn_STAR_;
if(cljs.core.truth_(and__3911__auto__)){
return args_STAR_;
} else {
return and__3911__auto__;
}
})())){
return (new datascript.parser.Aggregate(fn_STAR_,args_STAR_,null,null,null));
} else {
throw cljs.core.ex_info.call(null,["Cannot parse custom aggregate call, expect ['aggregate' variable fn-arg+]"].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","find","parser/find",-801023103),new cljs.core.Keyword(null,"fragment","fragment",826775688),form], null));
}
} else {
throw cljs.core.ex_info.call(null,["Cannot parse custom aggregate call, expect ['aggregate' variable fn-arg+]"].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","find","parser/find",-801023103),new cljs.core.Keyword(null,"fragment","fragment",826775688),form], null));
}
} else {
return null;
}
});
datascript.parser.parse_pull_expr = (function datascript$parser$parse_pull_expr(form){
if(((cljs.core.sequential_QMARK_.call(null,form)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,form),new cljs.core.Symbol(null,"pull","pull",779986722,null))))){
if(((((3) <= cljs.core.count.call(null,form))) && ((cljs.core.count.call(null,form) <= (4))))){
var long_QMARK_ = cljs.core._EQ_.call(null,cljs.core.count.call(null,form),(4));
var src = ((long_QMARK_)?cljs.core.nth.call(null,form,(1)):new cljs.core.Symbol(null,"$","$",-1580747756,null));
var vec__21834 = ((long_QMARK_)?cljs.core.nnext.call(null,form):cljs.core.next.call(null,form));
var var$ = cljs.core.nth.call(null,vec__21834,(0),null);
var pattern = cljs.core.nth.call(null,vec__21834,(1),null);
var src_STAR_ = datascript.parser.parse_src_var.call(null,src);
var var_STAR_ = datascript.parser.parse_variable.call(null,var$);
var pattern_STAR_ = (function (){var or__3922__auto__ = datascript.parser.parse_variable.call(null,pattern);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
var or__3922__auto____$1 = datascript.parser.parse_plain_variable.call(null,pattern);
if(cljs.core.truth_(or__3922__auto____$1)){
return or__3922__auto____$1;
} else {
return datascript.parser.parse_constant.call(null,pattern);
}
}
})();
if(cljs.core.truth_((function (){var and__3911__auto__ = src_STAR_;
if(cljs.core.truth_(and__3911__auto__)){
var and__3911__auto____$1 = var_STAR_;
if(cljs.core.truth_(and__3911__auto____$1)){
return pattern_STAR_;
} else {
return and__3911__auto____$1;
}
} else {
return and__3911__auto__;
}
})())){
return (new datascript.parser.Pull(src_STAR_,var_STAR_,pattern_STAR_,null,null,null));
} else {
throw cljs.core.ex_info.call(null,["Cannot parse pull expression, expect ['pull' src-var? variable (constant | variable | plain-symbol)]"].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","find","parser/find",-801023103),new cljs.core.Keyword(null,"fragment","fragment",826775688),form], null));
}
} else {
throw cljs.core.ex_info.call(null,["Cannot parse pull expression, expect ['pull' src-var? variable (constant | variable | plain-symbol)]"].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","find","parser/find",-801023103),new cljs.core.Keyword(null,"fragment","fragment",826775688),form], null));
}
} else {
return null;
}
});
datascript.parser.parse_find_elem = (function datascript$parser$parse_find_elem(form){
var or__3922__auto__ = datascript.parser.parse_variable.call(null,form);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
var or__3922__auto____$1 = datascript.parser.parse_pull_expr.call(null,form);
if(cljs.core.truth_(or__3922__auto____$1)){
return or__3922__auto____$1;
} else {
var or__3922__auto____$2 = datascript.parser.parse_aggregate_custom.call(null,form);
if(cljs.core.truth_(or__3922__auto____$2)){
return or__3922__auto____$2;
} else {
return datascript.parser.parse_aggregate.call(null,form);
}
}
}
});
datascript.parser.parse_find_rel = (function datascript$parser$parse_find_rel(form){
var G__21837 = datascript.parser.parse_seq.call(null,datascript.parser.parse_find_elem,form);
if((G__21837 == null)){
return null;
} else {
return (new datascript.parser.FindRel(G__21837,null,null,null));
}
});
datascript.parser.parse_find_coll = (function datascript$parser$parse_find_coll(form){
if(((cljs.core.sequential_QMARK_.call(null,form)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,form),(1))))){
var inner = cljs.core.first.call(null,form);
if(((cljs.core.sequential_QMARK_.call(null,inner)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,inner),(2))) && (cljs.core._EQ_.call(null,cljs.core.second.call(null,inner),new cljs.core.Symbol(null,"...","...",-1926939749,null))))){
var G__21838 = datascript.parser.parse_find_elem.call(null,cljs.core.first.call(null,inner));
if((G__21838 == null)){
return null;
} else {
return (new datascript.parser.FindColl(G__21838,null,null,null));
}
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.parse_find_scalar = (function datascript$parser$parse_find_scalar(form){
if(((cljs.core.sequential_QMARK_.call(null,form)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,form),(2))) && (cljs.core._EQ_.call(null,cljs.core.second.call(null,form),new cljs.core.Symbol(null,".",".",1975675962,null))))){
var G__21839 = datascript.parser.parse_find_elem.call(null,cljs.core.first.call(null,form));
if((G__21839 == null)){
return null;
} else {
return (new datascript.parser.FindScalar(G__21839,null,null,null));
}
} else {
return null;
}
});
datascript.parser.parse_find_tuple = (function datascript$parser$parse_find_tuple(form){
if(((cljs.core.sequential_QMARK_.call(null,form)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,form),(1))))){
var inner = cljs.core.first.call(null,form);
var G__21840 = datascript.parser.parse_seq.call(null,datascript.parser.parse_find_elem,inner);
if((G__21840 == null)){
return null;
} else {
return (new datascript.parser.FindTuple(G__21840,null,null,null));
}
} else {
return null;
}
});
datascript.parser.parse_find = (function datascript$parser$parse_find(form){
var or__3922__auto__ = datascript.parser.parse_find_rel.call(null,form);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
var or__3922__auto____$1 = datascript.parser.parse_find_coll.call(null,form);
if(cljs.core.truth_(or__3922__auto____$1)){
return or__3922__auto____$1;
} else {
var or__3922__auto____$2 = datascript.parser.parse_find_scalar.call(null,form);
if(cljs.core.truth_(or__3922__auto____$2)){
return or__3922__auto____$2;
} else {
var or__3922__auto____$3 = datascript.parser.parse_find_tuple.call(null,form);
if(cljs.core.truth_(or__3922__auto____$3)){
return or__3922__auto____$3;
} else {
throw cljs.core.ex_info.call(null,["Cannot parse :find, expected: (find-rel | find-coll | find-tuple | find-scalar)"].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","find","parser/find",-801023103),new cljs.core.Keyword(null,"fragment","fragment",826775688),form], null));
}
}
}
}
});
datascript.parser.parse_with = (function datascript$parser$parse_with(form){
var or__3922__auto__ = datascript.parser.parse_seq.call(null,datascript.parser.parse_variable,form);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
throw cljs.core.ex_info.call(null,["Cannot parse :with clause, expected [ variable+ ]"].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","with","parser/with",-386255821),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
});
datascript.parser.parse_in_binding = (function datascript$parser$parse_in_binding(form){
var temp__4655__auto__ = (function (){var or__3922__auto__ = datascript.parser.parse_src_var.call(null,form);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
var or__3922__auto____$1 = datascript.parser.parse_rules_var.call(null,form);
if(cljs.core.truth_(or__3922__auto____$1)){
return or__3922__auto____$1;
} else {
return datascript.parser.parse_plain_variable.call(null,form);
}
}
})();
if(cljs.core.truth_(temp__4655__auto__)){
var var$ = temp__4655__auto__;
return datascript.parser.with_source.call(null,(new datascript.parser.BindScalar(var$,null,null,null)),form);
} else {
return datascript.parser.parse_binding.call(null,form);
}
});
datascript.parser.parse_in = (function datascript$parser$parse_in(form){
var or__3922__auto__ = datascript.parser.parse_seq.call(null,datascript.parser.parse_in_binding,form);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
throw cljs.core.ex_info.call(null,["Cannot parse :in clause, expected (src-var | % | plain-symbol | bind-scalar | bind-tuple | bind-coll | bind-rel)"].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","in","parser/in",1617442048),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Pattern = (function (source,pattern,__meta,__extmap,__hash){
this.source = source;
this.pattern = pattern;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
datascript.parser.Pattern.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4172__auto__,k__4173__auto__){
var self__ = this;
var this__4172__auto____$1 = this;
return this__4172__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4173__auto__,null);
});

datascript.parser.Pattern.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4174__auto__,k21845,else__4175__auto__){
var self__ = this;
var this__4174__auto____$1 = this;
var G__21849 = k21845;
var G__21849__$1 = (((G__21849 instanceof cljs.core.Keyword))?G__21849.fqn:null);
switch (G__21849__$1) {
case "source":
return self__.source;

break;
case "pattern":
return self__.pattern;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k21845,else__4175__auto__);

}
});

datascript.parser.Pattern.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4186__auto__,writer__4187__auto__,opts__4188__auto__){
var self__ = this;
var this__4186__auto____$1 = this;
var pr_pair__4189__auto__ = ((function (this__4186__auto____$1){
return (function (keyval__4190__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4187__auto__,cljs.core.pr_writer,""," ","",opts__4188__auto__,keyval__4190__auto__);
});})(this__4186__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4187__auto__,pr_pair__4189__auto__,"#datascript.parser.Pattern{",", ","}",opts__4188__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source","source",-433931539),self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pattern","pattern",242135423),self__.pattern],null))], null),self__.__extmap));
});

datascript.parser.Pattern.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__21844){
var self__ = this;
var G__21844__$1 = this;
return (new cljs.core.RecordIter((0),G__21844__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"pattern","pattern",242135423)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

datascript.parser.Pattern.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4170__auto__){
var self__ = this;
var this__4170__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Pattern.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4167__auto__){
var self__ = this;
var this__4167__auto____$1 = this;
return (new datascript.parser.Pattern(self__.source,self__.pattern,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Pattern.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4176__auto__){
var self__ = this;
var this__4176__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.Pattern.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4168__auto__){
var self__ = this;
var this__4168__auto____$1 = this;
var h__4030__auto__ = self__.__hash;
if(!((h__4030__auto__ == null))){
return h__4030__auto__;
} else {
var h__4030__auto____$1 = ((function (h__4030__auto__,this__4168__auto____$1){
return (function (coll__4169__auto__){
return (575220587 ^ cljs.core.hash_unordered_coll.call(null,coll__4169__auto__));
});})(h__4030__auto__,this__4168__auto____$1))
.call(null,this__4168__auto____$1);
self__.__hash = h__4030__auto____$1;

return h__4030__auto____$1;
}
});

datascript.parser.Pattern.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this21846,other21847){
var self__ = this;
var this21846__$1 = this;
return ((!((other21847 == null))) && ((this21846__$1.constructor === other21847.constructor)) && (cljs.core._EQ_.call(null,this21846__$1.source,other21847.source)) && (cljs.core._EQ_.call(null,this21846__$1.pattern,other21847.pattern)) && (cljs.core._EQ_.call(null,this21846__$1.__extmap,other21847.__extmap)));
});

datascript.parser.Pattern.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4181__auto__,k__4182__auto__){
var self__ = this;
var this__4181__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"source","source",-433931539),null,new cljs.core.Keyword(null,"pattern","pattern",242135423),null], null), null),k__4182__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4181__auto____$1),self__.__meta),k__4182__auto__);
} else {
return (new datascript.parser.Pattern(self__.source,self__.pattern,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4182__auto__)),null));
}
});

datascript.parser.Pattern.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4179__auto__,k__4180__auto__,G__21844){
var self__ = this;
var this__4179__auto____$1 = this;
var pred__21850 = cljs.core.keyword_identical_QMARK_;
var expr__21851 = k__4180__auto__;
if(cljs.core.truth_(pred__21850.call(null,new cljs.core.Keyword(null,"source","source",-433931539),expr__21851))){
return (new datascript.parser.Pattern(G__21844,self__.pattern,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__21850.call(null,new cljs.core.Keyword(null,"pattern","pattern",242135423),expr__21851))){
return (new datascript.parser.Pattern(self__.source,G__21844,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Pattern(self__.source,self__.pattern,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4180__auto__,G__21844),null));
}
}
});

datascript.parser.Pattern.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4184__auto__){
var self__ = this;
var this__4184__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"source","source",-433931539),self__.source,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"pattern","pattern",242135423),self__.pattern,null))], null),self__.__extmap));
});

datascript.parser.Pattern.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4171__auto__,G__21844){
var self__ = this;
var this__4171__auto____$1 = this;
return (new datascript.parser.Pattern(self__.source,self__.pattern,G__21844,self__.__extmap,self__.__hash));
});

datascript.parser.Pattern.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4177__auto__,entry__4178__auto__){
var self__ = this;
var this__4177__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4178__auto__)){
return this__4177__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4178__auto__,(0)),cljs.core._nth.call(null,entry__4178__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4177__auto____$1,entry__4178__auto__);
}
});

datascript.parser.Pattern.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.Pattern.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__1261__auto__,f21841){
var self__ = this;
var this__1261__auto____$1 = this;
var new__1262__auto__ = (new datascript.parser.Pattern(datascript.parser.postwalk.call(null,self__.source,f21841),datascript.parser.postwalk.call(null,self__.pattern,f21841),null,null,null));
var temp__4655__auto__ = cljs.core.meta.call(null,this__1261__auto____$1);
if(cljs.core.truth_(temp__4655__auto__)){
var meta__1263__auto__ = temp__4655__auto__;
return cljs.core.with_meta.call(null,new__1262__auto__,meta__1263__auto__);
} else {
return new__1262__auto__;
}
});

datascript.parser.Pattern.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___1264__auto__,pred21842,acc21843){
var self__ = this;
var ___1264__auto____$1 = this;
return datascript.parser.collect.call(null,pred21842,self__.pattern,datascript.parser.collect.call(null,pred21842,self__.source,acc21843));
});

datascript.parser.Pattern.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___1264__auto__,acc21843){
var self__ = this;
var ___1264__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc21843,self__.source),self__.pattern);
});

datascript.parser.Pattern.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"source","source",1206599988,null),new cljs.core.Symbol(null,"pattern","pattern",1882666950,null)], null);
});

datascript.parser.Pattern.cljs$lang$type = true;

datascript.parser.Pattern.cljs$lang$ctorPrSeq = (function (this__4208__auto__){
return (new cljs.core.List(null,"datascript.parser/Pattern",null,(1),null));
});

datascript.parser.Pattern.cljs$lang$ctorPrWriter = (function (this__4208__auto__,writer__4209__auto__){
return cljs.core._write.call(null,writer__4209__auto__,"datascript.parser/Pattern");
});

/**
 * Positional factory function for datascript.parser/Pattern.
 */
datascript.parser.__GT_Pattern = (function datascript$parser$__GT_Pattern(source,pattern){
return (new datascript.parser.Pattern(source,pattern,null,null,null));
});

/**
 * Factory function for datascript.parser/Pattern, taking a map of keywords to field values.
 */
datascript.parser.map__GT_Pattern = (function datascript$parser$map__GT_Pattern(G__21848){
return (new datascript.parser.Pattern(new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(G__21848),new cljs.core.Keyword(null,"pattern","pattern",242135423).cljs$core$IFn$_invoke$arity$1(G__21848),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__21848,new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"pattern","pattern",242135423))),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Predicate = (function (fn,args,__meta,__extmap,__hash){
this.fn = fn;
this.args = args;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
datascript.parser.Predicate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4172__auto__,k__4173__auto__){
var self__ = this;
var this__4172__auto____$1 = this;
return this__4172__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4173__auto__,null);
});

datascript.parser.Predicate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4174__auto__,k21858,else__4175__auto__){
var self__ = this;
var this__4174__auto____$1 = this;
var G__21862 = k21858;
var G__21862__$1 = (((G__21862 instanceof cljs.core.Keyword))?G__21862.fqn:null);
switch (G__21862__$1) {
case "fn":
return self__.fn;

break;
case "args":
return self__.args;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k21858,else__4175__auto__);

}
});

datascript.parser.Predicate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4186__auto__,writer__4187__auto__,opts__4188__auto__){
var self__ = this;
var this__4186__auto____$1 = this;
var pr_pair__4189__auto__ = ((function (this__4186__auto____$1){
return (function (keyval__4190__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4187__auto__,cljs.core.pr_writer,""," ","",opts__4188__auto__,keyval__4190__auto__);
});})(this__4186__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4187__auto__,pr_pair__4189__auto__,"#datascript.parser.Predicate{",", ","}",opts__4188__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null))], null),self__.__extmap));
});

datascript.parser.Predicate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__21857){
var self__ = this;
var G__21857__$1 = this;
return (new cljs.core.RecordIter((0),G__21857__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"args","args",1315556576)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

datascript.parser.Predicate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4170__auto__){
var self__ = this;
var this__4170__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Predicate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4167__auto__){
var self__ = this;
var this__4167__auto____$1 = this;
return (new datascript.parser.Predicate(self__.fn,self__.args,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Predicate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4176__auto__){
var self__ = this;
var this__4176__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.Predicate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4168__auto__){
var self__ = this;
var this__4168__auto____$1 = this;
var h__4030__auto__ = self__.__hash;
if(!((h__4030__auto__ == null))){
return h__4030__auto__;
} else {
var h__4030__auto____$1 = ((function (h__4030__auto__,this__4168__auto____$1){
return (function (coll__4169__auto__){
return (-1523376880 ^ cljs.core.hash_unordered_coll.call(null,coll__4169__auto__));
});})(h__4030__auto__,this__4168__auto____$1))
.call(null,this__4168__auto____$1);
self__.__hash = h__4030__auto____$1;

return h__4030__auto____$1;
}
});

datascript.parser.Predicate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this21859,other21860){
var self__ = this;
var this21859__$1 = this;
return ((!((other21860 == null))) && ((this21859__$1.constructor === other21860.constructor)) && (cljs.core._EQ_.call(null,this21859__$1.fn,other21860.fn)) && (cljs.core._EQ_.call(null,this21859__$1.args,other21860.args)) && (cljs.core._EQ_.call(null,this21859__$1.__extmap,other21860.__extmap)));
});

datascript.parser.Predicate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4181__auto__,k__4182__auto__){
var self__ = this;
var this__4181__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"args","args",1315556576),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null], null), null),k__4182__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4181__auto____$1),self__.__meta),k__4182__auto__);
} else {
return (new datascript.parser.Predicate(self__.fn,self__.args,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4182__auto__)),null));
}
});

datascript.parser.Predicate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4179__auto__,k__4180__auto__,G__21857){
var self__ = this;
var this__4179__auto____$1 = this;
var pred__21863 = cljs.core.keyword_identical_QMARK_;
var expr__21864 = k__4180__auto__;
if(cljs.core.truth_(pred__21863.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__21864))){
return (new datascript.parser.Predicate(G__21857,self__.args,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__21863.call(null,new cljs.core.Keyword(null,"args","args",1315556576),expr__21864))){
return (new datascript.parser.Predicate(self__.fn,G__21857,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Predicate(self__.fn,self__.args,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4180__auto__,G__21857),null));
}
}
});

datascript.parser.Predicate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4184__auto__){
var self__ = this;
var this__4184__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"args","args",1315556576),self__.args,null))], null),self__.__extmap));
});

datascript.parser.Predicate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4171__auto__,G__21857){
var self__ = this;
var this__4171__auto____$1 = this;
return (new datascript.parser.Predicate(self__.fn,self__.args,G__21857,self__.__extmap,self__.__hash));
});

datascript.parser.Predicate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4177__auto__,entry__4178__auto__){
var self__ = this;
var this__4177__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4178__auto__)){
return this__4177__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4178__auto__,(0)),cljs.core._nth.call(null,entry__4178__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4177__auto____$1,entry__4178__auto__);
}
});

datascript.parser.Predicate.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.Predicate.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__1261__auto__,f21854){
var self__ = this;
var this__1261__auto____$1 = this;
var new__1262__auto__ = (new datascript.parser.Predicate(datascript.parser.postwalk.call(null,self__.fn,f21854),datascript.parser.postwalk.call(null,self__.args,f21854),null,null,null));
var temp__4655__auto__ = cljs.core.meta.call(null,this__1261__auto____$1);
if(cljs.core.truth_(temp__4655__auto__)){
var meta__1263__auto__ = temp__4655__auto__;
return cljs.core.with_meta.call(null,new__1262__auto__,meta__1263__auto__);
} else {
return new__1262__auto__;
}
});

datascript.parser.Predicate.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___1264__auto__,pred21855,acc21856){
var self__ = this;
var ___1264__auto____$1 = this;
return datascript.parser.collect.call(null,pred21855,self__.args,datascript.parser.collect.call(null,pred21855,self__.fn,acc21856));
});

datascript.parser.Predicate.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___1264__auto__,acc21856){
var self__ = this;
var ___1264__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc21856,self__.fn),self__.args);
});

datascript.parser.Predicate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)], null);
});

datascript.parser.Predicate.cljs$lang$type = true;

datascript.parser.Predicate.cljs$lang$ctorPrSeq = (function (this__4208__auto__){
return (new cljs.core.List(null,"datascript.parser/Predicate",null,(1),null));
});

datascript.parser.Predicate.cljs$lang$ctorPrWriter = (function (this__4208__auto__,writer__4209__auto__){
return cljs.core._write.call(null,writer__4209__auto__,"datascript.parser/Predicate");
});

/**
 * Positional factory function for datascript.parser/Predicate.
 */
datascript.parser.__GT_Predicate = (function datascript$parser$__GT_Predicate(fn,args){
return (new datascript.parser.Predicate(fn,args,null,null,null));
});

/**
 * Factory function for datascript.parser/Predicate, taking a map of keywords to field values.
 */
datascript.parser.map__GT_Predicate = (function datascript$parser$map__GT_Predicate(G__21861){
return (new datascript.parser.Predicate(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__21861),new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(G__21861),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__21861,new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"args","args",1315556576))),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Function = (function (fn,args,binding,__meta,__extmap,__hash){
this.fn = fn;
this.args = args;
this.binding = binding;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
datascript.parser.Function.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4172__auto__,k__4173__auto__){
var self__ = this;
var this__4172__auto____$1 = this;
return this__4172__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4173__auto__,null);
});

datascript.parser.Function.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4174__auto__,k21871,else__4175__auto__){
var self__ = this;
var this__4174__auto____$1 = this;
var G__21875 = k21871;
var G__21875__$1 = (((G__21875 instanceof cljs.core.Keyword))?G__21875.fqn:null);
switch (G__21875__$1) {
case "fn":
return self__.fn;

break;
case "args":
return self__.args;

break;
case "binding":
return self__.binding;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k21871,else__4175__auto__);

}
});

datascript.parser.Function.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4186__auto__,writer__4187__auto__,opts__4188__auto__){
var self__ = this;
var this__4186__auto____$1 = this;
var pr_pair__4189__auto__ = ((function (this__4186__auto____$1){
return (function (keyval__4190__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4187__auto__,cljs.core.pr_writer,""," ","",opts__4188__auto__,keyval__4190__auto__);
});})(this__4186__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4187__auto__,pr_pair__4189__auto__,"#datascript.parser.Function{",", ","}",opts__4188__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"binding","binding",539932593),self__.binding],null))], null),self__.__extmap));
});

datascript.parser.Function.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__21870){
var self__ = this;
var G__21870__$1 = this;
return (new cljs.core.RecordIter((0),G__21870__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"binding","binding",539932593)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

datascript.parser.Function.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4170__auto__){
var self__ = this;
var this__4170__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Function.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4167__auto__){
var self__ = this;
var this__4167__auto____$1 = this;
return (new datascript.parser.Function(self__.fn,self__.args,self__.binding,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Function.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4176__auto__){
var self__ = this;
var this__4176__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.Function.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4168__auto__){
var self__ = this;
var this__4168__auto____$1 = this;
var h__4030__auto__ = self__.__hash;
if(!((h__4030__auto__ == null))){
return h__4030__auto__;
} else {
var h__4030__auto____$1 = ((function (h__4030__auto__,this__4168__auto____$1){
return (function (coll__4169__auto__){
return (589494199 ^ cljs.core.hash_unordered_coll.call(null,coll__4169__auto__));
});})(h__4030__auto__,this__4168__auto____$1))
.call(null,this__4168__auto____$1);
self__.__hash = h__4030__auto____$1;

return h__4030__auto____$1;
}
});

datascript.parser.Function.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this21872,other21873){
var self__ = this;
var this21872__$1 = this;
return ((!((other21873 == null))) && ((this21872__$1.constructor === other21873.constructor)) && (cljs.core._EQ_.call(null,this21872__$1.fn,other21873.fn)) && (cljs.core._EQ_.call(null,this21872__$1.args,other21873.args)) && (cljs.core._EQ_.call(null,this21872__$1.binding,other21873.binding)) && (cljs.core._EQ_.call(null,this21872__$1.__extmap,other21873.__extmap)));
});

datascript.parser.Function.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4181__auto__,k__4182__auto__){
var self__ = this;
var this__4181__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"args","args",1315556576),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"binding","binding",539932593),null], null), null),k__4182__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4181__auto____$1),self__.__meta),k__4182__auto__);
} else {
return (new datascript.parser.Function(self__.fn,self__.args,self__.binding,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4182__auto__)),null));
}
});

datascript.parser.Function.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4179__auto__,k__4180__auto__,G__21870){
var self__ = this;
var this__4179__auto____$1 = this;
var pred__21876 = cljs.core.keyword_identical_QMARK_;
var expr__21877 = k__4180__auto__;
if(cljs.core.truth_(pred__21876.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__21877))){
return (new datascript.parser.Function(G__21870,self__.args,self__.binding,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__21876.call(null,new cljs.core.Keyword(null,"args","args",1315556576),expr__21877))){
return (new datascript.parser.Function(self__.fn,G__21870,self__.binding,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__21876.call(null,new cljs.core.Keyword(null,"binding","binding",539932593),expr__21877))){
return (new datascript.parser.Function(self__.fn,self__.args,G__21870,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Function(self__.fn,self__.args,self__.binding,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4180__auto__,G__21870),null));
}
}
}
});

datascript.parser.Function.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4184__auto__){
var self__ = this;
var this__4184__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"args","args",1315556576),self__.args,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"binding","binding",539932593),self__.binding,null))], null),self__.__extmap));
});

datascript.parser.Function.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4171__auto__,G__21870){
var self__ = this;
var this__4171__auto____$1 = this;
return (new datascript.parser.Function(self__.fn,self__.args,self__.binding,G__21870,self__.__extmap,self__.__hash));
});

datascript.parser.Function.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4177__auto__,entry__4178__auto__){
var self__ = this;
var this__4177__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4178__auto__)){
return this__4177__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4178__auto__,(0)),cljs.core._nth.call(null,entry__4178__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4177__auto____$1,entry__4178__auto__);
}
});

datascript.parser.Function.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.Function.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__1261__auto__,f21867){
var self__ = this;
var this__1261__auto____$1 = this;
var new__1262__auto__ = (new datascript.parser.Function(datascript.parser.postwalk.call(null,self__.fn,f21867),datascript.parser.postwalk.call(null,self__.args,f21867),datascript.parser.postwalk.call(null,self__.binding,f21867),null,null,null));
var temp__4655__auto__ = cljs.core.meta.call(null,this__1261__auto____$1);
if(cljs.core.truth_(temp__4655__auto__)){
var meta__1263__auto__ = temp__4655__auto__;
return cljs.core.with_meta.call(null,new__1262__auto__,meta__1263__auto__);
} else {
return new__1262__auto__;
}
});

datascript.parser.Function.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___1264__auto__,pred21868,acc21869){
var self__ = this;
var ___1264__auto____$1 = this;
return datascript.parser.collect.call(null,pred21868,self__.binding,datascript.parser.collect.call(null,pred21868,self__.args,datascript.parser.collect.call(null,pred21868,self__.fn,acc21869)));
});

datascript.parser.Function.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___1264__auto__,acc21869){
var self__ = this;
var ___1264__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc21869,self__.fn),self__.args),self__.binding);
});

datascript.parser.Function.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"args","args",-1338879193,null),new cljs.core.Symbol(null,"binding","binding",-2114503176,null)], null);
});

datascript.parser.Function.cljs$lang$type = true;

datascript.parser.Function.cljs$lang$ctorPrSeq = (function (this__4208__auto__){
return (new cljs.core.List(null,"datascript.parser/Function",null,(1),null));
});

datascript.parser.Function.cljs$lang$ctorPrWriter = (function (this__4208__auto__,writer__4209__auto__){
return cljs.core._write.call(null,writer__4209__auto__,"datascript.parser/Function");
});

/**
 * Positional factory function for datascript.parser/Function.
 */
datascript.parser.__GT_Function = (function datascript$parser$__GT_Function(fn,args,binding){
return (new datascript.parser.Function(fn,args,binding,null,null,null));
});

/**
 * Factory function for datascript.parser/Function, taking a map of keywords to field values.
 */
datascript.parser.map__GT_Function = (function datascript$parser$map__GT_Function(G__21874){
return (new datascript.parser.Function(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__21874),new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(G__21874),new cljs.core.Keyword(null,"binding","binding",539932593).cljs$core$IFn$_invoke$arity$1(G__21874),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__21874,new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"binding","binding",539932593))),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.RuleExpr = (function (source,name,args,__meta,__extmap,__hash){
this.source = source;
this.name = name;
this.args = args;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
datascript.parser.RuleExpr.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4172__auto__,k__4173__auto__){
var self__ = this;
var this__4172__auto____$1 = this;
return this__4172__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4173__auto__,null);
});

datascript.parser.RuleExpr.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4174__auto__,k21884,else__4175__auto__){
var self__ = this;
var this__4174__auto____$1 = this;
var G__21888 = k21884;
var G__21888__$1 = (((G__21888 instanceof cljs.core.Keyword))?G__21888.fqn:null);
switch (G__21888__$1) {
case "source":
return self__.source;

break;
case "name":
return self__.name;

break;
case "args":
return self__.args;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k21884,else__4175__auto__);

}
});

datascript.parser.RuleExpr.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4186__auto__,writer__4187__auto__,opts__4188__auto__){
var self__ = this;
var this__4186__auto____$1 = this;
var pr_pair__4189__auto__ = ((function (this__4186__auto____$1){
return (function (keyval__4190__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4187__auto__,cljs.core.pr_writer,""," ","",opts__4188__auto__,keyval__4190__auto__);
});})(this__4186__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4187__auto__,pr_pair__4189__auto__,"#datascript.parser.RuleExpr{",", ","}",opts__4188__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source","source",-433931539),self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null))], null),self__.__extmap));
});

datascript.parser.RuleExpr.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__21883){
var self__ = this;
var G__21883__$1 = this;
return (new cljs.core.RecordIter((0),G__21883__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"args","args",1315556576)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

datascript.parser.RuleExpr.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4170__auto__){
var self__ = this;
var this__4170__auto____$1 = this;
return self__.__meta;
});

datascript.parser.RuleExpr.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4167__auto__){
var self__ = this;
var this__4167__auto____$1 = this;
return (new datascript.parser.RuleExpr(self__.source,self__.name,self__.args,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.RuleExpr.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4176__auto__){
var self__ = this;
var this__4176__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.RuleExpr.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4168__auto__){
var self__ = this;
var this__4168__auto____$1 = this;
var h__4030__auto__ = self__.__hash;
if(!((h__4030__auto__ == null))){
return h__4030__auto__;
} else {
var h__4030__auto____$1 = ((function (h__4030__auto__,this__4168__auto____$1){
return (function (coll__4169__auto__){
return (-444662011 ^ cljs.core.hash_unordered_coll.call(null,coll__4169__auto__));
});})(h__4030__auto__,this__4168__auto____$1))
.call(null,this__4168__auto____$1);
self__.__hash = h__4030__auto____$1;

return h__4030__auto____$1;
}
});

datascript.parser.RuleExpr.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this21885,other21886){
var self__ = this;
var this21885__$1 = this;
return ((!((other21886 == null))) && ((this21885__$1.constructor === other21886.constructor)) && (cljs.core._EQ_.call(null,this21885__$1.source,other21886.source)) && (cljs.core._EQ_.call(null,this21885__$1.name,other21886.name)) && (cljs.core._EQ_.call(null,this21885__$1.args,other21886.args)) && (cljs.core._EQ_.call(null,this21885__$1.__extmap,other21886.__extmap)));
});

datascript.parser.RuleExpr.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4181__auto__,k__4182__auto__){
var self__ = this;
var this__4181__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"args","args",1315556576),null,new cljs.core.Keyword(null,"name","name",1843675177),null,new cljs.core.Keyword(null,"source","source",-433931539),null], null), null),k__4182__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4181__auto____$1),self__.__meta),k__4182__auto__);
} else {
return (new datascript.parser.RuleExpr(self__.source,self__.name,self__.args,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4182__auto__)),null));
}
});

datascript.parser.RuleExpr.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4179__auto__,k__4180__auto__,G__21883){
var self__ = this;
var this__4179__auto____$1 = this;
var pred__21889 = cljs.core.keyword_identical_QMARK_;
var expr__21890 = k__4180__auto__;
if(cljs.core.truth_(pred__21889.call(null,new cljs.core.Keyword(null,"source","source",-433931539),expr__21890))){
return (new datascript.parser.RuleExpr(G__21883,self__.name,self__.args,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__21889.call(null,new cljs.core.Keyword(null,"name","name",1843675177),expr__21890))){
return (new datascript.parser.RuleExpr(self__.source,G__21883,self__.args,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__21889.call(null,new cljs.core.Keyword(null,"args","args",1315556576),expr__21890))){
return (new datascript.parser.RuleExpr(self__.source,self__.name,G__21883,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.RuleExpr(self__.source,self__.name,self__.args,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4180__auto__,G__21883),null));
}
}
}
});

datascript.parser.RuleExpr.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4184__auto__){
var self__ = this;
var this__4184__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"source","source",-433931539),self__.source,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"name","name",1843675177),self__.name,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"args","args",1315556576),self__.args,null))], null),self__.__extmap));
});

datascript.parser.RuleExpr.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4171__auto__,G__21883){
var self__ = this;
var this__4171__auto____$1 = this;
return (new datascript.parser.RuleExpr(self__.source,self__.name,self__.args,G__21883,self__.__extmap,self__.__hash));
});

datascript.parser.RuleExpr.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4177__auto__,entry__4178__auto__){
var self__ = this;
var this__4177__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4178__auto__)){
return this__4177__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4178__auto__,(0)),cljs.core._nth.call(null,entry__4178__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4177__auto____$1,entry__4178__auto__);
}
});

datascript.parser.RuleExpr.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.RuleExpr.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__1261__auto__,f21880){
var self__ = this;
var this__1261__auto____$1 = this;
var new__1262__auto__ = (new datascript.parser.RuleExpr(datascript.parser.postwalk.call(null,self__.source,f21880),datascript.parser.postwalk.call(null,self__.name,f21880),datascript.parser.postwalk.call(null,self__.args,f21880),null,null,null));
var temp__4655__auto__ = cljs.core.meta.call(null,this__1261__auto____$1);
if(cljs.core.truth_(temp__4655__auto__)){
var meta__1263__auto__ = temp__4655__auto__;
return cljs.core.with_meta.call(null,new__1262__auto__,meta__1263__auto__);
} else {
return new__1262__auto__;
}
});

datascript.parser.RuleExpr.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___1264__auto__,pred21881,acc21882){
var self__ = this;
var ___1264__auto____$1 = this;
return datascript.parser.collect.call(null,pred21881,self__.args,datascript.parser.collect.call(null,pred21881,self__.name,datascript.parser.collect.call(null,pred21881,self__.source,acc21882)));
});

datascript.parser.RuleExpr.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___1264__auto__,acc21882){
var self__ = this;
var ___1264__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc21882,self__.source),self__.name),self__.args);
});

datascript.parser.RuleExpr.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"source","source",1206599988,null),new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)], null);
});

datascript.parser.RuleExpr.cljs$lang$type = true;

datascript.parser.RuleExpr.cljs$lang$ctorPrSeq = (function (this__4208__auto__){
return (new cljs.core.List(null,"datascript.parser/RuleExpr",null,(1),null));
});

datascript.parser.RuleExpr.cljs$lang$ctorPrWriter = (function (this__4208__auto__,writer__4209__auto__){
return cljs.core._write.call(null,writer__4209__auto__,"datascript.parser/RuleExpr");
});

/**
 * Positional factory function for datascript.parser/RuleExpr.
 */
datascript.parser.__GT_RuleExpr = (function datascript$parser$__GT_RuleExpr(source,name,args){
return (new datascript.parser.RuleExpr(source,name,args,null,null,null));
});

/**
 * Factory function for datascript.parser/RuleExpr, taking a map of keywords to field values.
 */
datascript.parser.map__GT_RuleExpr = (function datascript$parser$map__GT_RuleExpr(G__21887){
return (new datascript.parser.RuleExpr(new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(G__21887),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(G__21887),new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(G__21887),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__21887,new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"args","args",1315556576))),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Not = (function (source,vars,clauses,__meta,__extmap,__hash){
this.source = source;
this.vars = vars;
this.clauses = clauses;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
datascript.parser.Not.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4172__auto__,k__4173__auto__){
var self__ = this;
var this__4172__auto____$1 = this;
return this__4172__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4173__auto__,null);
});

datascript.parser.Not.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4174__auto__,k21897,else__4175__auto__){
var self__ = this;
var this__4174__auto____$1 = this;
var G__21901 = k21897;
var G__21901__$1 = (((G__21901 instanceof cljs.core.Keyword))?G__21901.fqn:null);
switch (G__21901__$1) {
case "source":
return self__.source;

break;
case "vars":
return self__.vars;

break;
case "clauses":
return self__.clauses;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k21897,else__4175__auto__);

}
});

datascript.parser.Not.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4186__auto__,writer__4187__auto__,opts__4188__auto__){
var self__ = this;
var this__4186__auto____$1 = this;
var pr_pair__4189__auto__ = ((function (this__4186__auto____$1){
return (function (keyval__4190__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4187__auto__,cljs.core.pr_writer,""," ","",opts__4188__auto__,keyval__4190__auto__);
});})(this__4186__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4187__auto__,pr_pair__4189__auto__,"#datascript.parser.Not{",", ","}",opts__4188__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source","source",-433931539),self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vars","vars",-2046957217),self__.vars],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"clauses","clauses",1454841241),self__.clauses],null))], null),self__.__extmap));
});

datascript.parser.Not.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__21896){
var self__ = this;
var G__21896__$1 = this;
return (new cljs.core.RecordIter((0),G__21896__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"vars","vars",-2046957217),new cljs.core.Keyword(null,"clauses","clauses",1454841241)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

datascript.parser.Not.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4170__auto__){
var self__ = this;
var this__4170__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Not.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4167__auto__){
var self__ = this;
var this__4167__auto____$1 = this;
return (new datascript.parser.Not(self__.source,self__.vars,self__.clauses,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Not.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4176__auto__){
var self__ = this;
var this__4176__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.Not.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4168__auto__){
var self__ = this;
var this__4168__auto____$1 = this;
var h__4030__auto__ = self__.__hash;
if(!((h__4030__auto__ == null))){
return h__4030__auto__;
} else {
var h__4030__auto____$1 = ((function (h__4030__auto__,this__4168__auto____$1){
return (function (coll__4169__auto__){
return (1394671061 ^ cljs.core.hash_unordered_coll.call(null,coll__4169__auto__));
});})(h__4030__auto__,this__4168__auto____$1))
.call(null,this__4168__auto____$1);
self__.__hash = h__4030__auto____$1;

return h__4030__auto____$1;
}
});

datascript.parser.Not.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this21898,other21899){
var self__ = this;
var this21898__$1 = this;
return ((!((other21899 == null))) && ((this21898__$1.constructor === other21899.constructor)) && (cljs.core._EQ_.call(null,this21898__$1.source,other21899.source)) && (cljs.core._EQ_.call(null,this21898__$1.vars,other21899.vars)) && (cljs.core._EQ_.call(null,this21898__$1.clauses,other21899.clauses)) && (cljs.core._EQ_.call(null,this21898__$1.__extmap,other21899.__extmap)));
});

datascript.parser.Not.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4181__auto__,k__4182__auto__){
var self__ = this;
var this__4181__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"source","source",-433931539),null,new cljs.core.Keyword(null,"clauses","clauses",1454841241),null,new cljs.core.Keyword(null,"vars","vars",-2046957217),null], null), null),k__4182__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4181__auto____$1),self__.__meta),k__4182__auto__);
} else {
return (new datascript.parser.Not(self__.source,self__.vars,self__.clauses,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4182__auto__)),null));
}
});

datascript.parser.Not.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4179__auto__,k__4180__auto__,G__21896){
var self__ = this;
var this__4179__auto____$1 = this;
var pred__21902 = cljs.core.keyword_identical_QMARK_;
var expr__21903 = k__4180__auto__;
if(cljs.core.truth_(pred__21902.call(null,new cljs.core.Keyword(null,"source","source",-433931539),expr__21903))){
return (new datascript.parser.Not(G__21896,self__.vars,self__.clauses,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__21902.call(null,new cljs.core.Keyword(null,"vars","vars",-2046957217),expr__21903))){
return (new datascript.parser.Not(self__.source,G__21896,self__.clauses,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__21902.call(null,new cljs.core.Keyword(null,"clauses","clauses",1454841241),expr__21903))){
return (new datascript.parser.Not(self__.source,self__.vars,G__21896,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Not(self__.source,self__.vars,self__.clauses,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4180__auto__,G__21896),null));
}
}
}
});

datascript.parser.Not.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4184__auto__){
var self__ = this;
var this__4184__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"source","source",-433931539),self__.source,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"vars","vars",-2046957217),self__.vars,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"clauses","clauses",1454841241),self__.clauses,null))], null),self__.__extmap));
});

datascript.parser.Not.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4171__auto__,G__21896){
var self__ = this;
var this__4171__auto____$1 = this;
return (new datascript.parser.Not(self__.source,self__.vars,self__.clauses,G__21896,self__.__extmap,self__.__hash));
});

datascript.parser.Not.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4177__auto__,entry__4178__auto__){
var self__ = this;
var this__4177__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4178__auto__)){
return this__4177__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4178__auto__,(0)),cljs.core._nth.call(null,entry__4178__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4177__auto____$1,entry__4178__auto__);
}
});

datascript.parser.Not.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.Not.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__1261__auto__,f21893){
var self__ = this;
var this__1261__auto____$1 = this;
var new__1262__auto__ = (new datascript.parser.Not(datascript.parser.postwalk.call(null,self__.source,f21893),datascript.parser.postwalk.call(null,self__.vars,f21893),datascript.parser.postwalk.call(null,self__.clauses,f21893),null,null,null));
var temp__4655__auto__ = cljs.core.meta.call(null,this__1261__auto____$1);
if(cljs.core.truth_(temp__4655__auto__)){
var meta__1263__auto__ = temp__4655__auto__;
return cljs.core.with_meta.call(null,new__1262__auto__,meta__1263__auto__);
} else {
return new__1262__auto__;
}
});

datascript.parser.Not.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___1264__auto__,pred21894,acc21895){
var self__ = this;
var ___1264__auto____$1 = this;
return datascript.parser.collect.call(null,pred21894,self__.clauses,datascript.parser.collect.call(null,pred21894,self__.vars,datascript.parser.collect.call(null,pred21894,self__.source,acc21895)));
});

datascript.parser.Not.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___1264__auto__,acc21895){
var self__ = this;
var ___1264__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc21895,self__.source),self__.vars),self__.clauses);
});

datascript.parser.Not.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"source","source",1206599988,null),new cljs.core.Symbol(null,"vars","vars",-406425690,null),new cljs.core.Symbol(null,"clauses","clauses",-1199594528,null)], null);
});

datascript.parser.Not.cljs$lang$type = true;

datascript.parser.Not.cljs$lang$ctorPrSeq = (function (this__4208__auto__){
return (new cljs.core.List(null,"datascript.parser/Not",null,(1),null));
});

datascript.parser.Not.cljs$lang$ctorPrWriter = (function (this__4208__auto__,writer__4209__auto__){
return cljs.core._write.call(null,writer__4209__auto__,"datascript.parser/Not");
});

/**
 * Positional factory function for datascript.parser/Not.
 */
datascript.parser.__GT_Not = (function datascript$parser$__GT_Not(source,vars,clauses){
return (new datascript.parser.Not(source,vars,clauses,null,null,null));
});

/**
 * Factory function for datascript.parser/Not, taking a map of keywords to field values.
 */
datascript.parser.map__GT_Not = (function datascript$parser$map__GT_Not(G__21900){
return (new datascript.parser.Not(new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(G__21900),new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(G__21900),new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(G__21900),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__21900,new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"vars","vars",-2046957217),new cljs.core.Keyword(null,"clauses","clauses",1454841241))),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Or = (function (source,rule_vars,clauses,__meta,__extmap,__hash){
this.source = source;
this.rule_vars = rule_vars;
this.clauses = clauses;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
datascript.parser.Or.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4172__auto__,k__4173__auto__){
var self__ = this;
var this__4172__auto____$1 = this;
return this__4172__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4173__auto__,null);
});

datascript.parser.Or.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4174__auto__,k21910,else__4175__auto__){
var self__ = this;
var this__4174__auto____$1 = this;
var G__21914 = k21910;
var G__21914__$1 = (((G__21914 instanceof cljs.core.Keyword))?G__21914.fqn:null);
switch (G__21914__$1) {
case "source":
return self__.source;

break;
case "rule-vars":
return self__.rule_vars;

break;
case "clauses":
return self__.clauses;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k21910,else__4175__auto__);

}
});

datascript.parser.Or.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4186__auto__,writer__4187__auto__,opts__4188__auto__){
var self__ = this;
var this__4186__auto____$1 = this;
var pr_pair__4189__auto__ = ((function (this__4186__auto____$1){
return (function (keyval__4190__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4187__auto__,cljs.core.pr_writer,""," ","",opts__4188__auto__,keyval__4190__auto__);
});})(this__4186__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4187__auto__,pr_pair__4189__auto__,"#datascript.parser.Or{",", ","}",opts__4188__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source","source",-433931539),self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rule-vars","rule-vars",1665972520),self__.rule_vars],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"clauses","clauses",1454841241),self__.clauses],null))], null),self__.__extmap));
});

datascript.parser.Or.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__21909){
var self__ = this;
var G__21909__$1 = this;
return (new cljs.core.RecordIter((0),G__21909__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"rule-vars","rule-vars",1665972520),new cljs.core.Keyword(null,"clauses","clauses",1454841241)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

datascript.parser.Or.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4170__auto__){
var self__ = this;
var this__4170__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Or.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4167__auto__){
var self__ = this;
var this__4167__auto____$1 = this;
return (new datascript.parser.Or(self__.source,self__.rule_vars,self__.clauses,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Or.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4176__auto__){
var self__ = this;
var this__4176__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.Or.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4168__auto__){
var self__ = this;
var this__4168__auto____$1 = this;
var h__4030__auto__ = self__.__hash;
if(!((h__4030__auto__ == null))){
return h__4030__auto__;
} else {
var h__4030__auto____$1 = ((function (h__4030__auto__,this__4168__auto____$1){
return (function (coll__4169__auto__){
return (1461934571 ^ cljs.core.hash_unordered_coll.call(null,coll__4169__auto__));
});})(h__4030__auto__,this__4168__auto____$1))
.call(null,this__4168__auto____$1);
self__.__hash = h__4030__auto____$1;

return h__4030__auto____$1;
}
});

datascript.parser.Or.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this21911,other21912){
var self__ = this;
var this21911__$1 = this;
return ((!((other21912 == null))) && ((this21911__$1.constructor === other21912.constructor)) && (cljs.core._EQ_.call(null,this21911__$1.source,other21912.source)) && (cljs.core._EQ_.call(null,this21911__$1.rule_vars,other21912.rule_vars)) && (cljs.core._EQ_.call(null,this21911__$1.clauses,other21912.clauses)) && (cljs.core._EQ_.call(null,this21911__$1.__extmap,other21912.__extmap)));
});

datascript.parser.Or.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4181__auto__,k__4182__auto__){
var self__ = this;
var this__4181__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"rule-vars","rule-vars",1665972520),null,new cljs.core.Keyword(null,"source","source",-433931539),null,new cljs.core.Keyword(null,"clauses","clauses",1454841241),null], null), null),k__4182__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4181__auto____$1),self__.__meta),k__4182__auto__);
} else {
return (new datascript.parser.Or(self__.source,self__.rule_vars,self__.clauses,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4182__auto__)),null));
}
});

datascript.parser.Or.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4179__auto__,k__4180__auto__,G__21909){
var self__ = this;
var this__4179__auto____$1 = this;
var pred__21915 = cljs.core.keyword_identical_QMARK_;
var expr__21916 = k__4180__auto__;
if(cljs.core.truth_(pred__21915.call(null,new cljs.core.Keyword(null,"source","source",-433931539),expr__21916))){
return (new datascript.parser.Or(G__21909,self__.rule_vars,self__.clauses,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__21915.call(null,new cljs.core.Keyword(null,"rule-vars","rule-vars",1665972520),expr__21916))){
return (new datascript.parser.Or(self__.source,G__21909,self__.clauses,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__21915.call(null,new cljs.core.Keyword(null,"clauses","clauses",1454841241),expr__21916))){
return (new datascript.parser.Or(self__.source,self__.rule_vars,G__21909,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Or(self__.source,self__.rule_vars,self__.clauses,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4180__auto__,G__21909),null));
}
}
}
});

datascript.parser.Or.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4184__auto__){
var self__ = this;
var this__4184__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"source","source",-433931539),self__.source,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"rule-vars","rule-vars",1665972520),self__.rule_vars,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"clauses","clauses",1454841241),self__.clauses,null))], null),self__.__extmap));
});

datascript.parser.Or.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4171__auto__,G__21909){
var self__ = this;
var this__4171__auto____$1 = this;
return (new datascript.parser.Or(self__.source,self__.rule_vars,self__.clauses,G__21909,self__.__extmap,self__.__hash));
});

datascript.parser.Or.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4177__auto__,entry__4178__auto__){
var self__ = this;
var this__4177__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4178__auto__)){
return this__4177__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4178__auto__,(0)),cljs.core._nth.call(null,entry__4178__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4177__auto____$1,entry__4178__auto__);
}
});

datascript.parser.Or.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.Or.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__1261__auto__,f21906){
var self__ = this;
var this__1261__auto____$1 = this;
var new__1262__auto__ = (new datascript.parser.Or(datascript.parser.postwalk.call(null,self__.source,f21906),datascript.parser.postwalk.call(null,self__.rule_vars,f21906),datascript.parser.postwalk.call(null,self__.clauses,f21906),null,null,null));
var temp__4655__auto__ = cljs.core.meta.call(null,this__1261__auto____$1);
if(cljs.core.truth_(temp__4655__auto__)){
var meta__1263__auto__ = temp__4655__auto__;
return cljs.core.with_meta.call(null,new__1262__auto__,meta__1263__auto__);
} else {
return new__1262__auto__;
}
});

datascript.parser.Or.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___1264__auto__,pred21907,acc21908){
var self__ = this;
var ___1264__auto____$1 = this;
return datascript.parser.collect.call(null,pred21907,self__.clauses,datascript.parser.collect.call(null,pred21907,self__.rule_vars,datascript.parser.collect.call(null,pred21907,self__.source,acc21908)));
});

datascript.parser.Or.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___1264__auto__,acc21908){
var self__ = this;
var ___1264__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc21908,self__.source),self__.rule_vars),self__.clauses);
});

datascript.parser.Or.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"source","source",1206599988,null),new cljs.core.Symbol(null,"rule-vars","rule-vars",-988463249,null),new cljs.core.Symbol(null,"clauses","clauses",-1199594528,null)], null);
});

datascript.parser.Or.cljs$lang$type = true;

datascript.parser.Or.cljs$lang$ctorPrSeq = (function (this__4208__auto__){
return (new cljs.core.List(null,"datascript.parser/Or",null,(1),null));
});

datascript.parser.Or.cljs$lang$ctorPrWriter = (function (this__4208__auto__,writer__4209__auto__){
return cljs.core._write.call(null,writer__4209__auto__,"datascript.parser/Or");
});

/**
 * Positional factory function for datascript.parser/Or.
 */
datascript.parser.__GT_Or = (function datascript$parser$__GT_Or(source,rule_vars,clauses){
return (new datascript.parser.Or(source,rule_vars,clauses,null,null,null));
});

/**
 * Factory function for datascript.parser/Or, taking a map of keywords to field values.
 */
datascript.parser.map__GT_Or = (function datascript$parser$map__GT_Or(G__21913){
return (new datascript.parser.Or(new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(G__21913),new cljs.core.Keyword(null,"rule-vars","rule-vars",1665972520).cljs$core$IFn$_invoke$arity$1(G__21913),new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(G__21913),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__21913,new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"rule-vars","rule-vars",1665972520),new cljs.core.Keyword(null,"clauses","clauses",1454841241))),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.And = (function (clauses,__meta,__extmap,__hash){
this.clauses = clauses;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
datascript.parser.And.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4172__auto__,k__4173__auto__){
var self__ = this;
var this__4172__auto____$1 = this;
return this__4172__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4173__auto__,null);
});

datascript.parser.And.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4174__auto__,k21923,else__4175__auto__){
var self__ = this;
var this__4174__auto____$1 = this;
var G__21927 = k21923;
var G__21927__$1 = (((G__21927 instanceof cljs.core.Keyword))?G__21927.fqn:null);
switch (G__21927__$1) {
case "clauses":
return self__.clauses;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k21923,else__4175__auto__);

}
});

datascript.parser.And.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4186__auto__,writer__4187__auto__,opts__4188__auto__){
var self__ = this;
var this__4186__auto____$1 = this;
var pr_pair__4189__auto__ = ((function (this__4186__auto____$1){
return (function (keyval__4190__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4187__auto__,cljs.core.pr_writer,""," ","",opts__4188__auto__,keyval__4190__auto__);
});})(this__4186__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4187__auto__,pr_pair__4189__auto__,"#datascript.parser.And{",", ","}",opts__4188__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"clauses","clauses",1454841241),self__.clauses],null))], null),self__.__extmap));
});

datascript.parser.And.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__21922){
var self__ = this;
var G__21922__$1 = this;
return (new cljs.core.RecordIter((0),G__21922__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clauses","clauses",1454841241)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

datascript.parser.And.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4170__auto__){
var self__ = this;
var this__4170__auto____$1 = this;
return self__.__meta;
});

datascript.parser.And.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4167__auto__){
var self__ = this;
var this__4167__auto____$1 = this;
return (new datascript.parser.And(self__.clauses,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.And.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4176__auto__){
var self__ = this;
var this__4176__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.And.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4168__auto__){
var self__ = this;
var this__4168__auto____$1 = this;
var h__4030__auto__ = self__.__hash;
if(!((h__4030__auto__ == null))){
return h__4030__auto__;
} else {
var h__4030__auto____$1 = ((function (h__4030__auto__,this__4168__auto____$1){
return (function (coll__4169__auto__){
return (-131856804 ^ cljs.core.hash_unordered_coll.call(null,coll__4169__auto__));
});})(h__4030__auto__,this__4168__auto____$1))
.call(null,this__4168__auto____$1);
self__.__hash = h__4030__auto____$1;

return h__4030__auto____$1;
}
});

datascript.parser.And.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this21924,other21925){
var self__ = this;
var this21924__$1 = this;
return ((!((other21925 == null))) && ((this21924__$1.constructor === other21925.constructor)) && (cljs.core._EQ_.call(null,this21924__$1.clauses,other21925.clauses)) && (cljs.core._EQ_.call(null,this21924__$1.__extmap,other21925.__extmap)));
});

datascript.parser.And.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4181__auto__,k__4182__auto__){
var self__ = this;
var this__4181__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"clauses","clauses",1454841241),null], null), null),k__4182__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4181__auto____$1),self__.__meta),k__4182__auto__);
} else {
return (new datascript.parser.And(self__.clauses,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4182__auto__)),null));
}
});

datascript.parser.And.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4179__auto__,k__4180__auto__,G__21922){
var self__ = this;
var this__4179__auto____$1 = this;
var pred__21928 = cljs.core.keyword_identical_QMARK_;
var expr__21929 = k__4180__auto__;
if(cljs.core.truth_(pred__21928.call(null,new cljs.core.Keyword(null,"clauses","clauses",1454841241),expr__21929))){
return (new datascript.parser.And(G__21922,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.And(self__.clauses,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4180__auto__,G__21922),null));
}
});

datascript.parser.And.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4184__auto__){
var self__ = this;
var this__4184__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"clauses","clauses",1454841241),self__.clauses,null))], null),self__.__extmap));
});

datascript.parser.And.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4171__auto__,G__21922){
var self__ = this;
var this__4171__auto____$1 = this;
return (new datascript.parser.And(self__.clauses,G__21922,self__.__extmap,self__.__hash));
});

datascript.parser.And.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4177__auto__,entry__4178__auto__){
var self__ = this;
var this__4177__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4178__auto__)){
return this__4177__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4178__auto__,(0)),cljs.core._nth.call(null,entry__4178__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4177__auto____$1,entry__4178__auto__);
}
});

datascript.parser.And.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.And.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__1261__auto__,f21919){
var self__ = this;
var this__1261__auto____$1 = this;
var new__1262__auto__ = (new datascript.parser.And(datascript.parser.postwalk.call(null,self__.clauses,f21919),null,null,null));
var temp__4655__auto__ = cljs.core.meta.call(null,this__1261__auto____$1);
if(cljs.core.truth_(temp__4655__auto__)){
var meta__1263__auto__ = temp__4655__auto__;
return cljs.core.with_meta.call(null,new__1262__auto__,meta__1263__auto__);
} else {
return new__1262__auto__;
}
});

datascript.parser.And.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___1264__auto__,pred21920,acc21921){
var self__ = this;
var ___1264__auto____$1 = this;
return datascript.parser.collect.call(null,pred21920,self__.clauses,acc21921);
});

datascript.parser.And.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___1264__auto__,acc21921){
var self__ = this;
var ___1264__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc21921,self__.clauses);
});

datascript.parser.And.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"clauses","clauses",-1199594528,null)], null);
});

datascript.parser.And.cljs$lang$type = true;

datascript.parser.And.cljs$lang$ctorPrSeq = (function (this__4208__auto__){
return (new cljs.core.List(null,"datascript.parser/And",null,(1),null));
});

datascript.parser.And.cljs$lang$ctorPrWriter = (function (this__4208__auto__,writer__4209__auto__){
return cljs.core._write.call(null,writer__4209__auto__,"datascript.parser/And");
});

/**
 * Positional factory function for datascript.parser/And.
 */
datascript.parser.__GT_And = (function datascript$parser$__GT_And(clauses){
return (new datascript.parser.And(clauses,null,null,null));
});

/**
 * Factory function for datascript.parser/And, taking a map of keywords to field values.
 */
datascript.parser.map__GT_And = (function datascript$parser$map__GT_And(G__21926){
return (new datascript.parser.And(new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(G__21926),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__21926,new cljs.core.Keyword(null,"clauses","clauses",1454841241))),null));
});

datascript.parser.parse_pattern_el = (function datascript$parser$parse_pattern_el(form){
var or__3922__auto__ = datascript.parser.parse_placeholder.call(null,form);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
var or__3922__auto____$1 = datascript.parser.parse_variable.call(null,form);
if(cljs.core.truth_(or__3922__auto____$1)){
return or__3922__auto____$1;
} else {
return datascript.parser.parse_constant.call(null,form);
}
}
});
datascript.parser.take_source = (function datascript$parser$take_source(form){
if(cljs.core.sequential_QMARK_.call(null,form)){
var temp__4655__auto__ = datascript.parser.parse_src_var.call(null,cljs.core.first.call(null,form));
if(cljs.core.truth_(temp__4655__auto__)){
var source_STAR_ = temp__4655__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [source_STAR_,cljs.core.next.call(null,form)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new datascript.parser.DefaultSrc(null,null,null)),form], null);
}
} else {
return null;
}
});
datascript.parser.parse_pattern = (function datascript$parser$parse_pattern(form){
var temp__4657__auto__ = datascript.parser.take_source.call(null,form);
if(cljs.core.truth_(temp__4657__auto__)){
var vec__21932 = temp__4657__auto__;
var source_STAR_ = cljs.core.nth.call(null,vec__21932,(0),null);
var next_form = cljs.core.nth.call(null,vec__21932,(1),null);
var temp__4657__auto____$1 = datascript.parser.parse_seq.call(null,datascript.parser.parse_pattern_el,next_form);
if(cljs.core.truth_(temp__4657__auto____$1)){
var pattern_STAR_ = temp__4657__auto____$1;
if(!(cljs.core.empty_QMARK_.call(null,pattern_STAR_))){
return datascript.parser.with_source.call(null,(new datascript.parser.Pattern(source_STAR_,pattern_STAR_,null,null,null)),form);
} else {
throw cljs.core.ex_info.call(null,["Pattern could not be empty"].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.parse_call = (function datascript$parser$parse_call(form){
if(cljs.core.sequential_QMARK_.call(null,form)){
var vec__21935 = form;
var seq__21936 = cljs.core.seq.call(null,vec__21935);
var first__21937 = cljs.core.first.call(null,seq__21936);
var seq__21936__$1 = cljs.core.next.call(null,seq__21936);
var fn = first__21937;
var args = seq__21936__$1;
var args__$1 = (((args == null))?cljs.core.PersistentVector.EMPTY:args);
var fn_STAR_ = (function (){var or__3922__auto__ = datascript.parser.parse_plain_symbol.call(null,fn);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return datascript.parser.parse_variable.call(null,fn);
}
})();
var args_STAR_ = datascript.parser.parse_seq.call(null,datascript.parser.parse_fn_arg,args__$1);
if(cljs.core.truth_((function (){var and__3911__auto__ = fn_STAR_;
if(cljs.core.truth_(and__3911__auto__)){
return args_STAR_;
} else {
return and__3911__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fn_STAR_,args_STAR_], null);
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.parse_pred = (function datascript$parser$parse_pred(form){
if(cljs.core.truth_(datascript.parser.of_size_QMARK_.call(null,form,(1)))){
var temp__4657__auto__ = datascript.parser.parse_call.call(null,cljs.core.first.call(null,form));
if(cljs.core.truth_(temp__4657__auto__)){
var vec__21938 = temp__4657__auto__;
var fn_STAR_ = cljs.core.nth.call(null,vec__21938,(0),null);
var args_STAR_ = cljs.core.nth.call(null,vec__21938,(1),null);
return datascript.parser.with_source.call(null,(new datascript.parser.Predicate(fn_STAR_,args_STAR_,null,null,null)),form);
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.parse_fn = (function datascript$parser$parse_fn(form){
if(cljs.core.truth_(datascript.parser.of_size_QMARK_.call(null,form,(2)))){
var vec__21941 = form;
var call = cljs.core.nth.call(null,vec__21941,(0),null);
var binding = cljs.core.nth.call(null,vec__21941,(1),null);
var temp__4657__auto__ = datascript.parser.parse_call.call(null,call);
if(cljs.core.truth_(temp__4657__auto__)){
var vec__21944 = temp__4657__auto__;
var fn_STAR_ = cljs.core.nth.call(null,vec__21944,(0),null);
var args_STAR_ = cljs.core.nth.call(null,vec__21944,(1),null);
var temp__4657__auto____$1 = datascript.parser.parse_binding.call(null,binding);
if(cljs.core.truth_(temp__4657__auto____$1)){
var binding_STAR_ = temp__4657__auto____$1;
return datascript.parser.with_source.call(null,(new datascript.parser.Function(fn_STAR_,args_STAR_,binding_STAR_,null,null,null)),form);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.parse_rule_expr = (function datascript$parser$parse_rule_expr(form){
var temp__4657__auto__ = datascript.parser.take_source.call(null,form);
if(cljs.core.truth_(temp__4657__auto__)){
var vec__21947 = temp__4657__auto__;
var source_STAR_ = cljs.core.nth.call(null,vec__21947,(0),null);
var next_form = cljs.core.nth.call(null,vec__21947,(1),null);
var vec__21950 = next_form;
var seq__21951 = cljs.core.seq.call(null,vec__21950);
var first__21952 = cljs.core.first.call(null,seq__21951);
var seq__21951__$1 = cljs.core.next.call(null,seq__21951);
var name = first__21952;
var args = seq__21951__$1;
var name_STAR_ = datascript.parser.parse_plain_symbol.call(null,name);
var args_STAR_ = datascript.parser.parse_seq.call(null,datascript.parser.parse_pattern_el,args);
if(cljs.core.truth_(name_STAR_)){
if(cljs.core.empty_QMARK_.call(null,args)){
throw cljs.core.ex_info.call(null,["rule-expr requires at least one argument"].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
} else {
if((args_STAR_ == null)){
throw cljs.core.ex_info.call(null,["Cannot parse rule-expr arguments, expected [ (variable | constant | '_')+ ]"].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
} else {
return (new datascript.parser.RuleExpr(source_STAR_,name_STAR_,args_STAR_,null,null,null));

}
}
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.collect_vars_acc = (function datascript$parser$collect_vars_acc(acc,form){
if((form instanceof datascript.parser.Variable)){
return cljs.core.conj.call(null,acc,form);
} else {
if((form instanceof datascript.parser.Not)){
return cljs.core.into.call(null,acc,new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(form));
} else {
if((form instanceof datascript.parser.Or)){
return datascript.parser.collect_vars_acc.call(null,acc,new cljs.core.Keyword(null,"rule-vars","rule-vars",1665972520).cljs$core$IFn$_invoke$arity$1(form));
} else {
if(((!((form == null)))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === form.datascript$parser$ITraversable$))))?true:(((!form.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,datascript.parser.ITraversable,form):false)):cljs.core.native_satisfies_QMARK_.call(null,datascript.parser.ITraversable,form))){
return datascript.parser._collect_vars.call(null,form,acc);
} else {
if(cljs.core.sequential_QMARK_.call(null,form)){
return cljs.core.reduce.call(null,datascript.parser.collect_vars_acc,acc,form);
} else {
return acc;

}
}
}
}
}
});
datascript.parser.collect_vars = (function datascript$parser$collect_vars(form){
return datascript.parser.collect_vars_acc.call(null,cljs.core.PersistentVector.EMPTY,form);
});
datascript.parser.collect_vars_distinct = (function datascript$parser$collect_vars_distinct(form){
return cljs.core.vec.call(null,cljs.core.distinct.call(null,datascript.parser.collect_vars.call(null,form)));
});
datascript.parser.validate_join_vars = (function datascript$parser$validate_join_vars(vars,clauses,form){
var undeclared_21954 = clojure.set.difference.call(null,cljs.core.set.call(null,vars),cljs.core.set.call(null,datascript.parser.collect_vars.call(null,clauses)));
if(cljs.core.empty_QMARK_.call(null,undeclared_21954)){
} else {
throw cljs.core.ex_info.call(null,["Join variable not declared inside clauses: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.mapv.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),undeclared_21954)))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}

if(cljs.core.empty_QMARK_.call(null,vars)){
throw cljs.core.ex_info.call(null,["Join variables should not be empty"].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
} else {
return null;
}
});
datascript.parser.validate_not = (function datascript$parser$validate_not(clause,form){
datascript.parser.validate_join_vars.call(null,new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(clause),new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(clause),form);

return clause;
});
datascript.parser.parse_not = (function datascript$parser$parse_not(form){
var temp__4657__auto__ = datascript.parser.take_source.call(null,form);
if(cljs.core.truth_(temp__4657__auto__)){
var vec__21955 = temp__4657__auto__;
var source_STAR_ = cljs.core.nth.call(null,vec__21955,(0),null);
var next_form = cljs.core.nth.call(null,vec__21955,(1),null);
var vec__21958 = next_form;
var seq__21959 = cljs.core.seq.call(null,vec__21958);
var first__21960 = cljs.core.first.call(null,seq__21959);
var seq__21959__$1 = cljs.core.next.call(null,seq__21959);
var sym = first__21960;
var clauses = seq__21959__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"not","not",1044554643,null),sym)){
var temp__4655__auto__ = datascript.parser.parse_clauses.call(null,clauses);
if(cljs.core.truth_(temp__4655__auto__)){
var clauses_STAR_ = temp__4655__auto__;
return datascript.parser.validate_not.call(null,datascript.parser.with_source.call(null,(new datascript.parser.Not(source_STAR_,datascript.parser.collect_vars_distinct.call(null,clauses_STAR_),clauses_STAR_,null,null,null)),form),form);
} else {
throw cljs.core.ex_info.call(null,["Cannot parse 'not' clause, expected [ src-var? 'not' clause+ ]"].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.parse_not_join = (function datascript$parser$parse_not_join(form){
var temp__4657__auto__ = datascript.parser.take_source.call(null,form);
if(cljs.core.truth_(temp__4657__auto__)){
var vec__21961 = temp__4657__auto__;
var source_STAR_ = cljs.core.nth.call(null,vec__21961,(0),null);
var next_form = cljs.core.nth.call(null,vec__21961,(1),null);
var vec__21964 = next_form;
var seq__21965 = cljs.core.seq.call(null,vec__21964);
var first__21966 = cljs.core.first.call(null,seq__21965);
var seq__21965__$1 = cljs.core.next.call(null,seq__21965);
var sym = first__21966;
var first__21966__$1 = cljs.core.first.call(null,seq__21965__$1);
var seq__21965__$2 = cljs.core.next.call(null,seq__21965__$1);
var vars = first__21966__$1;
var clauses = seq__21965__$2;
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"not-join","not-join",-645515756,null),sym)){
var vars_STAR_ = datascript.parser.parse_seq.call(null,datascript.parser.parse_variable,vars);
var clauses_STAR_ = datascript.parser.parse_clauses.call(null,clauses);
if(cljs.core.truth_((function (){var and__3911__auto__ = vars_STAR_;
if(cljs.core.truth_(and__3911__auto__)){
return clauses_STAR_;
} else {
return and__3911__auto__;
}
})())){
return datascript.parser.validate_not.call(null,datascript.parser.with_source.call(null,(new datascript.parser.Not(source_STAR_,vars_STAR_,clauses_STAR_,null,null,null)),form),form);
} else {
throw cljs.core.ex_info.call(null,["Cannot parse 'not-join' clause, expected [ src-var? 'not-join' [variable+] clause+ ]"].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.validate_or = (function datascript$parser$validate_or(clause,form){
var map__21967 = clause;
var map__21967__$1 = ((((!((map__21967 == null)))?(((((map__21967.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21967.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21967):map__21967);
var map__21968 = cljs.core.get.call(null,map__21967__$1,new cljs.core.Keyword(null,"rule-vars","rule-vars",1665972520));
var map__21968__$1 = ((((!((map__21968 == null)))?(((((map__21968.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21968.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21968):map__21968);
var required = cljs.core.get.call(null,map__21968__$1,new cljs.core.Keyword(null,"required","required",1807647006));
var free = cljs.core.get.call(null,map__21968__$1,new cljs.core.Keyword(null,"free","free",801364328));
var clauses = cljs.core.get.call(null,map__21967__$1,new cljs.core.Keyword(null,"clauses","clauses",1454841241));
var vars = cljs.core.concat.call(null,required,free);
var seq__21971_21975 = cljs.core.seq.call(null,clauses);
var chunk__21972_21976 = null;
var count__21973_21977 = (0);
var i__21974_21978 = (0);
while(true){
if((i__21974_21978 < count__21973_21977)){
var clause_21979__$1 = cljs.core._nth.call(null,chunk__21972_21976,i__21974_21978);
datascript.parser.validate_join_vars.call(null,vars,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause_21979__$1], null),form);


var G__21980 = seq__21971_21975;
var G__21981 = chunk__21972_21976;
var G__21982 = count__21973_21977;
var G__21983 = (i__21974_21978 + (1));
seq__21971_21975 = G__21980;
chunk__21972_21976 = G__21981;
count__21973_21977 = G__21982;
i__21974_21978 = G__21983;
continue;
} else {
var temp__4657__auto___21984 = cljs.core.seq.call(null,seq__21971_21975);
if(temp__4657__auto___21984){
var seq__21971_21985__$1 = temp__4657__auto___21984;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21971_21985__$1)){
var c__4319__auto___21986 = cljs.core.chunk_first.call(null,seq__21971_21985__$1);
var G__21987 = cljs.core.chunk_rest.call(null,seq__21971_21985__$1);
var G__21988 = c__4319__auto___21986;
var G__21989 = cljs.core.count.call(null,c__4319__auto___21986);
var G__21990 = (0);
seq__21971_21975 = G__21987;
chunk__21972_21976 = G__21988;
count__21973_21977 = G__21989;
i__21974_21978 = G__21990;
continue;
} else {
var clause_21991__$1 = cljs.core.first.call(null,seq__21971_21985__$1);
datascript.parser.validate_join_vars.call(null,vars,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause_21991__$1], null),form);


var G__21992 = cljs.core.next.call(null,seq__21971_21985__$1);
var G__21993 = null;
var G__21994 = (0);
var G__21995 = (0);
seq__21971_21975 = G__21992;
chunk__21972_21976 = G__21993;
count__21973_21977 = G__21994;
i__21974_21978 = G__21995;
continue;
}
} else {
}
}
break;
}

return clause;
});
datascript.parser.parse_and = (function datascript$parser$parse_and(form){
if(((cljs.core.sequential_QMARK_.call(null,form)) && (cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.first.call(null,form))))){
var clauses_STAR_ = datascript.parser.parse_clauses.call(null,cljs.core.next.call(null,form));
if(cljs.core.truth_(cljs.core.not_empty.call(null,clauses_STAR_))){
return (new datascript.parser.And(clauses_STAR_,null,null,null));
} else {
throw cljs.core.ex_info.call(null,["Cannot parse 'and' clause, expected [ 'and' clause+ ]"].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
} else {
return null;
}
});
datascript.parser.parse_or = (function datascript$parser$parse_or(form){
var temp__4657__auto__ = datascript.parser.take_source.call(null,form);
if(cljs.core.truth_(temp__4657__auto__)){
var vec__21996 = temp__4657__auto__;
var source_STAR_ = cljs.core.nth.call(null,vec__21996,(0),null);
var next_form = cljs.core.nth.call(null,vec__21996,(1),null);
var vec__21999 = next_form;
var seq__22000 = cljs.core.seq.call(null,vec__21999);
var first__22001 = cljs.core.first.call(null,seq__22000);
var seq__22000__$1 = cljs.core.next.call(null,seq__22000);
var sym = first__22001;
var clauses = seq__22000__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"or","or",1876275696,null),sym)){
var temp__4655__auto__ = datascript.parser.parse_seq.call(null,cljs.core.some_fn.call(null,datascript.parser.parse_and,datascript.parser.parse_clause),clauses);
if(cljs.core.truth_(temp__4655__auto__)){
var clauses_STAR_ = temp__4655__auto__;
return datascript.parser.validate_or.call(null,datascript.parser.with_source.call(null,(new datascript.parser.Or(source_STAR_,(new datascript.parser.RuleVars(null,datascript.parser.collect_vars_distinct.call(null,clauses_STAR_),null,null,null)),clauses_STAR_,null,null,null)),form),form);
} else {
throw cljs.core.ex_info.call(null,["Cannot parse 'or' clause, expected [ src-var? 'or' clause+ ]"].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.parse_or_join = (function datascript$parser$parse_or_join(form){
var temp__4657__auto__ = datascript.parser.take_source.call(null,form);
if(cljs.core.truth_(temp__4657__auto__)){
var vec__22002 = temp__4657__auto__;
var source_STAR_ = cljs.core.nth.call(null,vec__22002,(0),null);
var next_form = cljs.core.nth.call(null,vec__22002,(1),null);
var vec__22005 = next_form;
var seq__22006 = cljs.core.seq.call(null,vec__22005);
var first__22007 = cljs.core.first.call(null,seq__22006);
var seq__22006__$1 = cljs.core.next.call(null,seq__22006);
var sym = first__22007;
var first__22007__$1 = cljs.core.first.call(null,seq__22006__$1);
var seq__22006__$2 = cljs.core.next.call(null,seq__22006__$1);
var vars = first__22007__$1;
var clauses = seq__22006__$2;
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"or-join","or-join",591375469,null),sym)){
var vars_STAR_ = datascript.parser.parse_rule_vars.call(null,vars);
var clauses_STAR_ = datascript.parser.parse_seq.call(null,cljs.core.some_fn.call(null,datascript.parser.parse_and,datascript.parser.parse_clause),clauses);
if(cljs.core.truth_((function (){var and__3911__auto__ = vars_STAR_;
if(cljs.core.truth_(and__3911__auto__)){
return clauses_STAR_;
} else {
return and__3911__auto__;
}
})())){
return datascript.parser.validate_or.call(null,datascript.parser.with_source.call(null,(new datascript.parser.Or(source_STAR_,vars_STAR_,clauses_STAR_,null,null,null)),form),form);
} else {
throw cljs.core.ex_info.call(null,["Cannot parse 'or-join' clause, expected [ src-var? 'or-join' [variable+] clause+ ]"].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.parse_clause = (function datascript$parser$parse_clause(form){
var or__3922__auto__ = datascript.parser.parse_not.call(null,form);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
var or__3922__auto____$1 = datascript.parser.parse_not_join.call(null,form);
if(cljs.core.truth_(or__3922__auto____$1)){
return or__3922__auto____$1;
} else {
var or__3922__auto____$2 = datascript.parser.parse_or.call(null,form);
if(cljs.core.truth_(or__3922__auto____$2)){
return or__3922__auto____$2;
} else {
var or__3922__auto____$3 = datascript.parser.parse_or_join.call(null,form);
if(cljs.core.truth_(or__3922__auto____$3)){
return or__3922__auto____$3;
} else {
var or__3922__auto____$4 = datascript.parser.parse_pred.call(null,form);
if(cljs.core.truth_(or__3922__auto____$4)){
return or__3922__auto____$4;
} else {
var or__3922__auto____$5 = datascript.parser.parse_fn.call(null,form);
if(cljs.core.truth_(or__3922__auto____$5)){
return or__3922__auto____$5;
} else {
var or__3922__auto____$6 = datascript.parser.parse_rule_expr.call(null,form);
if(cljs.core.truth_(or__3922__auto____$6)){
return or__3922__auto____$6;
} else {
var or__3922__auto____$7 = datascript.parser.parse_pattern.call(null,form);
if(cljs.core.truth_(or__3922__auto____$7)){
return or__3922__auto____$7;
} else {
throw cljs.core.ex_info.call(null,["Cannot parse clause, expected (data-pattern | pred-expr | fn-expr | rule-expr | not-clause | not-join-clause | or-clause | or-join-clause)"].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
}
}
}
}
}
}
}
});
datascript.parser.parse_clauses = (function datascript$parser$parse_clauses(clauses){
return datascript.parser.parse_seq.call(null,datascript.parser.parse_clause,clauses);
});
datascript.parser.parse_where = (function datascript$parser$parse_where(form){
var or__3922__auto__ = datascript.parser.parse_clauses.call(null,form);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
throw cljs.core.ex_info.call(null,["Cannot parse :where clause, expected [clause+]"].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.RuleBranch = (function (vars,clauses,__meta,__extmap,__hash){
this.vars = vars;
this.clauses = clauses;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
datascript.parser.RuleBranch.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4172__auto__,k__4173__auto__){
var self__ = this;
var this__4172__auto____$1 = this;
return this__4172__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4173__auto__,null);
});

datascript.parser.RuleBranch.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4174__auto__,k22013,else__4175__auto__){
var self__ = this;
var this__4174__auto____$1 = this;
var G__22017 = k22013;
var G__22017__$1 = (((G__22017 instanceof cljs.core.Keyword))?G__22017.fqn:null);
switch (G__22017__$1) {
case "vars":
return self__.vars;

break;
case "clauses":
return self__.clauses;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k22013,else__4175__auto__);

}
});

datascript.parser.RuleBranch.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4186__auto__,writer__4187__auto__,opts__4188__auto__){
var self__ = this;
var this__4186__auto____$1 = this;
var pr_pair__4189__auto__ = ((function (this__4186__auto____$1){
return (function (keyval__4190__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4187__auto__,cljs.core.pr_writer,""," ","",opts__4188__auto__,keyval__4190__auto__);
});})(this__4186__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4187__auto__,pr_pair__4189__auto__,"#datascript.parser.RuleBranch{",", ","}",opts__4188__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vars","vars",-2046957217),self__.vars],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"clauses","clauses",1454841241),self__.clauses],null))], null),self__.__extmap));
});

datascript.parser.RuleBranch.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__22012){
var self__ = this;
var G__22012__$1 = this;
return (new cljs.core.RecordIter((0),G__22012__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vars","vars",-2046957217),new cljs.core.Keyword(null,"clauses","clauses",1454841241)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

datascript.parser.RuleBranch.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4170__auto__){
var self__ = this;
var this__4170__auto____$1 = this;
return self__.__meta;
});

datascript.parser.RuleBranch.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4167__auto__){
var self__ = this;
var this__4167__auto____$1 = this;
return (new datascript.parser.RuleBranch(self__.vars,self__.clauses,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.RuleBranch.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4176__auto__){
var self__ = this;
var this__4176__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.RuleBranch.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4168__auto__){
var self__ = this;
var this__4168__auto____$1 = this;
var h__4030__auto__ = self__.__hash;
if(!((h__4030__auto__ == null))){
return h__4030__auto__;
} else {
var h__4030__auto____$1 = ((function (h__4030__auto__,this__4168__auto____$1){
return (function (coll__4169__auto__){
return (1024755006 ^ cljs.core.hash_unordered_coll.call(null,coll__4169__auto__));
});})(h__4030__auto__,this__4168__auto____$1))
.call(null,this__4168__auto____$1);
self__.__hash = h__4030__auto____$1;

return h__4030__auto____$1;
}
});

datascript.parser.RuleBranch.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this22014,other22015){
var self__ = this;
var this22014__$1 = this;
return ((!((other22015 == null))) && ((this22014__$1.constructor === other22015.constructor)) && (cljs.core._EQ_.call(null,this22014__$1.vars,other22015.vars)) && (cljs.core._EQ_.call(null,this22014__$1.clauses,other22015.clauses)) && (cljs.core._EQ_.call(null,this22014__$1.__extmap,other22015.__extmap)));
});

datascript.parser.RuleBranch.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4181__auto__,k__4182__auto__){
var self__ = this;
var this__4181__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"clauses","clauses",1454841241),null,new cljs.core.Keyword(null,"vars","vars",-2046957217),null], null), null),k__4182__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4181__auto____$1),self__.__meta),k__4182__auto__);
} else {
return (new datascript.parser.RuleBranch(self__.vars,self__.clauses,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4182__auto__)),null));
}
});

datascript.parser.RuleBranch.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4179__auto__,k__4180__auto__,G__22012){
var self__ = this;
var this__4179__auto____$1 = this;
var pred__22018 = cljs.core.keyword_identical_QMARK_;
var expr__22019 = k__4180__auto__;
if(cljs.core.truth_(pred__22018.call(null,new cljs.core.Keyword(null,"vars","vars",-2046957217),expr__22019))){
return (new datascript.parser.RuleBranch(G__22012,self__.clauses,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__22018.call(null,new cljs.core.Keyword(null,"clauses","clauses",1454841241),expr__22019))){
return (new datascript.parser.RuleBranch(self__.vars,G__22012,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.RuleBranch(self__.vars,self__.clauses,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4180__auto__,G__22012),null));
}
}
});

datascript.parser.RuleBranch.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4184__auto__){
var self__ = this;
var this__4184__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"vars","vars",-2046957217),self__.vars,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"clauses","clauses",1454841241),self__.clauses,null))], null),self__.__extmap));
});

datascript.parser.RuleBranch.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4171__auto__,G__22012){
var self__ = this;
var this__4171__auto____$1 = this;
return (new datascript.parser.RuleBranch(self__.vars,self__.clauses,G__22012,self__.__extmap,self__.__hash));
});

datascript.parser.RuleBranch.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4177__auto__,entry__4178__auto__){
var self__ = this;
var this__4177__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4178__auto__)){
return this__4177__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4178__auto__,(0)),cljs.core._nth.call(null,entry__4178__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4177__auto____$1,entry__4178__auto__);
}
});

datascript.parser.RuleBranch.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.RuleBranch.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__1261__auto__,f22009){
var self__ = this;
var this__1261__auto____$1 = this;
var new__1262__auto__ = (new datascript.parser.RuleBranch(datascript.parser.postwalk.call(null,self__.vars,f22009),datascript.parser.postwalk.call(null,self__.clauses,f22009),null,null,null));
var temp__4655__auto__ = cljs.core.meta.call(null,this__1261__auto____$1);
if(cljs.core.truth_(temp__4655__auto__)){
var meta__1263__auto__ = temp__4655__auto__;
return cljs.core.with_meta.call(null,new__1262__auto__,meta__1263__auto__);
} else {
return new__1262__auto__;
}
});

datascript.parser.RuleBranch.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___1264__auto__,pred22010,acc22011){
var self__ = this;
var ___1264__auto____$1 = this;
return datascript.parser.collect.call(null,pred22010,self__.clauses,datascript.parser.collect.call(null,pred22010,self__.vars,acc22011));
});

datascript.parser.RuleBranch.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___1264__auto__,acc22011){
var self__ = this;
var ___1264__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc22011,self__.vars),self__.clauses);
});

datascript.parser.RuleBranch.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"vars","vars",-406425690,null),new cljs.core.Symbol(null,"clauses","clauses",-1199594528,null)], null);
});

datascript.parser.RuleBranch.cljs$lang$type = true;

datascript.parser.RuleBranch.cljs$lang$ctorPrSeq = (function (this__4208__auto__){
return (new cljs.core.List(null,"datascript.parser/RuleBranch",null,(1),null));
});

datascript.parser.RuleBranch.cljs$lang$ctorPrWriter = (function (this__4208__auto__,writer__4209__auto__){
return cljs.core._write.call(null,writer__4209__auto__,"datascript.parser/RuleBranch");
});

/**
 * Positional factory function for datascript.parser/RuleBranch.
 */
datascript.parser.__GT_RuleBranch = (function datascript$parser$__GT_RuleBranch(vars,clauses){
return (new datascript.parser.RuleBranch(vars,clauses,null,null,null));
});

/**
 * Factory function for datascript.parser/RuleBranch, taking a map of keywords to field values.
 */
datascript.parser.map__GT_RuleBranch = (function datascript$parser$map__GT_RuleBranch(G__22016){
return (new datascript.parser.RuleBranch(new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(G__22016),new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(G__22016),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__22016,new cljs.core.Keyword(null,"vars","vars",-2046957217),new cljs.core.Keyword(null,"clauses","clauses",1454841241))),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Rule = (function (name,branches,__meta,__extmap,__hash){
this.name = name;
this.branches = branches;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
datascript.parser.Rule.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4172__auto__,k__4173__auto__){
var self__ = this;
var this__4172__auto____$1 = this;
return this__4172__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4173__auto__,null);
});

datascript.parser.Rule.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4174__auto__,k22026,else__4175__auto__){
var self__ = this;
var this__4174__auto____$1 = this;
var G__22030 = k22026;
var G__22030__$1 = (((G__22030 instanceof cljs.core.Keyword))?G__22030.fqn:null);
switch (G__22030__$1) {
case "name":
return self__.name;

break;
case "branches":
return self__.branches;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k22026,else__4175__auto__);

}
});

datascript.parser.Rule.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4186__auto__,writer__4187__auto__,opts__4188__auto__){
var self__ = this;
var this__4186__auto____$1 = this;
var pr_pair__4189__auto__ = ((function (this__4186__auto____$1){
return (function (keyval__4190__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4187__auto__,cljs.core.pr_writer,""," ","",opts__4188__auto__,keyval__4190__auto__);
});})(this__4186__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4187__auto__,pr_pair__4189__auto__,"#datascript.parser.Rule{",", ","}",opts__4188__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"branches","branches",-1240337268),self__.branches],null))], null),self__.__extmap));
});

datascript.parser.Rule.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__22025){
var self__ = this;
var G__22025__$1 = this;
return (new cljs.core.RecordIter((0),G__22025__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"branches","branches",-1240337268)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

datascript.parser.Rule.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4170__auto__){
var self__ = this;
var this__4170__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Rule.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4167__auto__){
var self__ = this;
var this__4167__auto____$1 = this;
return (new datascript.parser.Rule(self__.name,self__.branches,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Rule.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4176__auto__){
var self__ = this;
var this__4176__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.Rule.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4168__auto__){
var self__ = this;
var this__4168__auto____$1 = this;
var h__4030__auto__ = self__.__hash;
if(!((h__4030__auto__ == null))){
return h__4030__auto__;
} else {
var h__4030__auto____$1 = ((function (h__4030__auto__,this__4168__auto____$1){
return (function (coll__4169__auto__){
return (-900273052 ^ cljs.core.hash_unordered_coll.call(null,coll__4169__auto__));
});})(h__4030__auto__,this__4168__auto____$1))
.call(null,this__4168__auto____$1);
self__.__hash = h__4030__auto____$1;

return h__4030__auto____$1;
}
});

datascript.parser.Rule.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this22027,other22028){
var self__ = this;
var this22027__$1 = this;
return ((!((other22028 == null))) && ((this22027__$1.constructor === other22028.constructor)) && (cljs.core._EQ_.call(null,this22027__$1.name,other22028.name)) && (cljs.core._EQ_.call(null,this22027__$1.branches,other22028.branches)) && (cljs.core._EQ_.call(null,this22027__$1.__extmap,other22028.__extmap)));
});

datascript.parser.Rule.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4181__auto__,k__4182__auto__){
var self__ = this;
var this__4181__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),null,new cljs.core.Keyword(null,"branches","branches",-1240337268),null], null), null),k__4182__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4181__auto____$1),self__.__meta),k__4182__auto__);
} else {
return (new datascript.parser.Rule(self__.name,self__.branches,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4182__auto__)),null));
}
});

datascript.parser.Rule.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4179__auto__,k__4180__auto__,G__22025){
var self__ = this;
var this__4179__auto____$1 = this;
var pred__22031 = cljs.core.keyword_identical_QMARK_;
var expr__22032 = k__4180__auto__;
if(cljs.core.truth_(pred__22031.call(null,new cljs.core.Keyword(null,"name","name",1843675177),expr__22032))){
return (new datascript.parser.Rule(G__22025,self__.branches,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__22031.call(null,new cljs.core.Keyword(null,"branches","branches",-1240337268),expr__22032))){
return (new datascript.parser.Rule(self__.name,G__22025,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Rule(self__.name,self__.branches,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4180__auto__,G__22025),null));
}
}
});

datascript.parser.Rule.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4184__auto__){
var self__ = this;
var this__4184__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"name","name",1843675177),self__.name,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"branches","branches",-1240337268),self__.branches,null))], null),self__.__extmap));
});

datascript.parser.Rule.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4171__auto__,G__22025){
var self__ = this;
var this__4171__auto____$1 = this;
return (new datascript.parser.Rule(self__.name,self__.branches,G__22025,self__.__extmap,self__.__hash));
});

datascript.parser.Rule.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4177__auto__,entry__4178__auto__){
var self__ = this;
var this__4177__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4178__auto__)){
return this__4177__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4178__auto__,(0)),cljs.core._nth.call(null,entry__4178__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4177__auto____$1,entry__4178__auto__);
}
});

datascript.parser.Rule.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.Rule.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__1261__auto__,f22022){
var self__ = this;
var this__1261__auto____$1 = this;
var new__1262__auto__ = (new datascript.parser.Rule(datascript.parser.postwalk.call(null,self__.name,f22022),datascript.parser.postwalk.call(null,self__.branches,f22022),null,null,null));
var temp__4655__auto__ = cljs.core.meta.call(null,this__1261__auto____$1);
if(cljs.core.truth_(temp__4655__auto__)){
var meta__1263__auto__ = temp__4655__auto__;
return cljs.core.with_meta.call(null,new__1262__auto__,meta__1263__auto__);
} else {
return new__1262__auto__;
}
});

datascript.parser.Rule.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___1264__auto__,pred22023,acc22024){
var self__ = this;
var ___1264__auto____$1 = this;
return datascript.parser.collect.call(null,pred22023,self__.branches,datascript.parser.collect.call(null,pred22023,self__.name,acc22024));
});

datascript.parser.Rule.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___1264__auto__,acc22024){
var self__ = this;
var ___1264__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc22024,self__.name),self__.branches);
});

datascript.parser.Rule.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"branches","branches",400194259,null)], null);
});

datascript.parser.Rule.cljs$lang$type = true;

datascript.parser.Rule.cljs$lang$ctorPrSeq = (function (this__4208__auto__){
return (new cljs.core.List(null,"datascript.parser/Rule",null,(1),null));
});

datascript.parser.Rule.cljs$lang$ctorPrWriter = (function (this__4208__auto__,writer__4209__auto__){
return cljs.core._write.call(null,writer__4209__auto__,"datascript.parser/Rule");
});

/**
 * Positional factory function for datascript.parser/Rule.
 */
datascript.parser.__GT_Rule = (function datascript$parser$__GT_Rule(name,branches){
return (new datascript.parser.Rule(name,branches,null,null,null));
});

/**
 * Factory function for datascript.parser/Rule, taking a map of keywords to field values.
 */
datascript.parser.map__GT_Rule = (function datascript$parser$map__GT_Rule(G__22029){
return (new datascript.parser.Rule(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(G__22029),new cljs.core.Keyword(null,"branches","branches",-1240337268).cljs$core$IFn$_invoke$arity$1(G__22029),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__22029,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"branches","branches",-1240337268))),null));
});

datascript.parser.validate_vars = (function datascript$parser$validate_vars(vars,clauses,form){
var declared_vars = datascript.parser.collect.call(null,(function (p1__22035_SHARP_){
return (p1__22035_SHARP_ instanceof datascript.parser.Variable);
}),vars,cljs.core.PersistentHashSet.EMPTY);
var used_vars = datascript.parser.collect.call(null,((function (declared_vars){
return (function (p1__22036_SHARP_){
return (p1__22036_SHARP_ instanceof datascript.parser.Variable);
});})(declared_vars))
,clauses,cljs.core.PersistentHashSet.EMPTY);
var undeclared_vars = clojure.set.difference.call(null,used_vars,declared_vars);
if(cljs.core.empty_QMARK_.call(null,undeclared_vars)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Reference to the unknown variables: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),undeclared_vars)))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","rule","parser/rule",-464044566),new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"vars","vars",-2046957217),undeclared_vars], null));
}
});
datascript.parser.parse_rule = (function datascript$parser$parse_rule(form){
if(cljs.core.sequential_QMARK_.call(null,form)){
var vec__22037 = form;
var seq__22038 = cljs.core.seq.call(null,vec__22037);
var first__22039 = cljs.core.first.call(null,seq__22038);
var seq__22038__$1 = cljs.core.next.call(null,seq__22038);
var head = first__22039;
var clauses = seq__22038__$1;
if(cljs.core.sequential_QMARK_.call(null,head)){
var vec__22040 = head;
var seq__22041 = cljs.core.seq.call(null,vec__22040);
var first__22042 = cljs.core.first.call(null,seq__22041);
var seq__22041__$1 = cljs.core.next.call(null,seq__22041);
var name = first__22042;
var vars = seq__22041__$1;
var name_STAR_ = (function (){var or__3922__auto__ = datascript.parser.parse_plain_symbol.call(null,name);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
throw cljs.core.ex_info.call(null,["Cannot parse rule name, expected plain-symbol"].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","rule","parser/rule",-464044566),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
})();
var vars_STAR_ = datascript.parser.parse_rule_vars.call(null,vars);
var clauses_STAR_ = (function (){var or__3922__auto__ = cljs.core.not_empty.call(null,datascript.parser.parse_clauses.call(null,clauses));
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
throw cljs.core.ex_info.call(null,["Rule branch should have clauses"].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","rule","parser/rule",-464044566),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
})();
datascript.parser.validate_vars.call(null,vars_STAR_,clauses_STAR_,form);

return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),name_STAR_,new cljs.core.Keyword(null,"vars","vars",-2046957217),vars_STAR_,new cljs.core.Keyword(null,"clauses","clauses",1454841241),clauses_STAR_], null);
} else {
throw cljs.core.ex_info.call(null,["Cannot parse rule head, expected [rule-name rule-vars]"].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","rule","parser/rule",-464044566),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
} else {
throw cljs.core.ex_info.call(null,["Cannot parse rule, expected [rule-head clause+]"].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","rule","parser/rule",-464044566),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
});
datascript.parser.validate_arity = (function datascript$parser$validate_arity(name,branches){
var vars0 = new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,branches));
var arity0 = datascript.parser.rule_vars_arity.call(null,vars0);
var seq__22043 = cljs.core.seq.call(null,cljs.core.next.call(null,branches));
var chunk__22045 = null;
var count__22046 = (0);
var i__22047 = (0);
while(true){
if((i__22047 < count__22046)){
var b = cljs.core._nth.call(null,chunk__22045,i__22047);
var vars_22049 = new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(b);
if(cljs.core.not_EQ_.call(null,arity0,datascript.parser.rule_vars_arity.call(null,vars_22049))){
throw cljs.core.ex_info.call(null,["Arity mismatch for rule '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(name))),"': ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,datascript.parser.flatten_rule_vars.call(null,vars0)))," vs. ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,datascript.parser.flatten_rule_vars.call(null,vars_22049)))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","rule","parser/rule",-464044566),new cljs.core.Keyword(null,"rule","rule",729973257),name], null));
} else {
}


var G__22050 = seq__22043;
var G__22051 = chunk__22045;
var G__22052 = count__22046;
var G__22053 = (i__22047 + (1));
seq__22043 = G__22050;
chunk__22045 = G__22051;
count__22046 = G__22052;
i__22047 = G__22053;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__22043);
if(temp__4657__auto__){
var seq__22043__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22043__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__22043__$1);
var G__22054 = cljs.core.chunk_rest.call(null,seq__22043__$1);
var G__22055 = c__4319__auto__;
var G__22056 = cljs.core.count.call(null,c__4319__auto__);
var G__22057 = (0);
seq__22043 = G__22054;
chunk__22045 = G__22055;
count__22046 = G__22056;
i__22047 = G__22057;
continue;
} else {
var b = cljs.core.first.call(null,seq__22043__$1);
var vars_22058 = new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(b);
if(cljs.core.not_EQ_.call(null,arity0,datascript.parser.rule_vars_arity.call(null,vars_22058))){
throw cljs.core.ex_info.call(null,["Arity mismatch for rule '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(name))),"': ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,datascript.parser.flatten_rule_vars.call(null,vars0)))," vs. ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,datascript.parser.flatten_rule_vars.call(null,vars_22058)))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","rule","parser/rule",-464044566),new cljs.core.Keyword(null,"rule","rule",729973257),name], null));
} else {
}


var G__22059 = cljs.core.next.call(null,seq__22043__$1);
var G__22060 = null;
var G__22061 = (0);
var G__22062 = (0);
seq__22043 = G__22059;
chunk__22045 = G__22060;
count__22046 = G__22061;
i__22047 = G__22062;
continue;
}
} else {
return null;
}
}
break;
}
});
datascript.parser.parse_rules = (function datascript$parser$parse_rules(form){
return cljs.core.vec.call(null,(function (){var iter__4292__auto__ = (function datascript$parser$parse_rules_$_iter__22064(s__22065){
return (new cljs.core.LazySeq(null,(function (){
var s__22065__$1 = s__22065;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__22065__$1);
if(temp__4657__auto__){
var s__22065__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__22065__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__22065__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__22067 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__22066 = (0);
while(true){
if((i__22066 < size__4291__auto__)){
var vec__22068 = cljs.core._nth.call(null,c__4290__auto__,i__22066);
var name = cljs.core.nth.call(null,vec__22068,(0),null);
var branches = cljs.core.nth.call(null,vec__22068,(1),null);
var branches__$1 = cljs.core.mapv.call(null,((function (i__22066,vec__22068,name,branches,c__4290__auto__,size__4291__auto__,b__22067,s__22065__$2,temp__4657__auto__){
return (function (p1__22063_SHARP_){
return (new datascript.parser.RuleBranch(new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(p1__22063_SHARP_),new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(p1__22063_SHARP_),null,null,null));
});})(i__22066,vec__22068,name,branches,c__4290__auto__,size__4291__auto__,b__22067,s__22065__$2,temp__4657__auto__))
,branches);
cljs.core.chunk_append.call(null,b__22067,(function (){
datascript.parser.validate_arity.call(null,name,branches__$1);

return (new datascript.parser.Rule(name,branches__$1,null,null,null));
})()
);

var G__22074 = (i__22066 + (1));
i__22066 = G__22074;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22067),datascript$parser$parse_rules_$_iter__22064.call(null,cljs.core.chunk_rest.call(null,s__22065__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22067),null);
}
} else {
var vec__22071 = cljs.core.first.call(null,s__22065__$2);
var name = cljs.core.nth.call(null,vec__22071,(0),null);
var branches = cljs.core.nth.call(null,vec__22071,(1),null);
var branches__$1 = cljs.core.mapv.call(null,((function (vec__22071,name,branches,s__22065__$2,temp__4657__auto__){
return (function (p1__22063_SHARP_){
return (new datascript.parser.RuleBranch(new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(p1__22063_SHARP_),new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(p1__22063_SHARP_),null,null,null));
});})(vec__22071,name,branches,s__22065__$2,temp__4657__auto__))
,branches);
return cljs.core.cons.call(null,(function (){
datascript.parser.validate_arity.call(null,name,branches__$1);

return (new datascript.parser.Rule(name,branches__$1,null,null,null));
})()
,datascript$parser$parse_rules_$_iter__22064.call(null,cljs.core.rest.call(null,s__22065__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4292__auto__.call(null,cljs.core.group_by.call(null,new cljs.core.Keyword(null,"name","name",1843675177),datascript.parser.parse_seq.call(null,datascript.parser.parse_rule,form)));
})());
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Query = (function (qfind,qwith,qin,qwhere,__meta,__extmap,__hash){
this.qfind = qfind;
this.qwith = qwith;
this.qin = qin;
this.qwhere = qwhere;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
datascript.parser.Query.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4172__auto__,k__4173__auto__){
var self__ = this;
var this__4172__auto____$1 = this;
return this__4172__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4173__auto__,null);
});

datascript.parser.Query.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4174__auto__,k22079,else__4175__auto__){
var self__ = this;
var this__4174__auto____$1 = this;
var G__22083 = k22079;
var G__22083__$1 = (((G__22083 instanceof cljs.core.Keyword))?G__22083.fqn:null);
switch (G__22083__$1) {
case "qfind":
return self__.qfind;

break;
case "qwith":
return self__.qwith;

break;
case "qin":
return self__.qin;

break;
case "qwhere":
return self__.qwhere;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k22079,else__4175__auto__);

}
});

datascript.parser.Query.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4186__auto__,writer__4187__auto__,opts__4188__auto__){
var self__ = this;
var this__4186__auto____$1 = this;
var pr_pair__4189__auto__ = ((function (this__4186__auto____$1){
return (function (keyval__4190__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4187__auto__,cljs.core.pr_writer,""," ","",opts__4188__auto__,keyval__4190__auto__);
});})(this__4186__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4187__auto__,pr_pair__4189__auto__,"#datascript.parser.Query{",", ","}",opts__4188__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"qfind","qfind",1529332972),self__.qfind],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"qwith","qwith",-45809392),self__.qwith],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"qin","qin",1372651151),self__.qin],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"qwhere","qwhere",-1645067378),self__.qwhere],null))], null),self__.__extmap));
});

datascript.parser.Query.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__22078){
var self__ = this;
var G__22078__$1 = this;
return (new cljs.core.RecordIter((0),G__22078__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"qfind","qfind",1529332972),new cljs.core.Keyword(null,"qwith","qwith",-45809392),new cljs.core.Keyword(null,"qin","qin",1372651151),new cljs.core.Keyword(null,"qwhere","qwhere",-1645067378)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

datascript.parser.Query.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4170__auto__){
var self__ = this;
var this__4170__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Query.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4167__auto__){
var self__ = this;
var this__4167__auto____$1 = this;
return (new datascript.parser.Query(self__.qfind,self__.qwith,self__.qin,self__.qwhere,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Query.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4176__auto__){
var self__ = this;
var this__4176__auto____$1 = this;
return (4 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.Query.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4168__auto__){
var self__ = this;
var this__4168__auto____$1 = this;
var h__4030__auto__ = self__.__hash;
if(!((h__4030__auto__ == null))){
return h__4030__auto__;
} else {
var h__4030__auto____$1 = ((function (h__4030__auto__,this__4168__auto____$1){
return (function (coll__4169__auto__){
return (181307977 ^ cljs.core.hash_unordered_coll.call(null,coll__4169__auto__));
});})(h__4030__auto__,this__4168__auto____$1))
.call(null,this__4168__auto____$1);
self__.__hash = h__4030__auto____$1;

return h__4030__auto____$1;
}
});

datascript.parser.Query.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this22080,other22081){
var self__ = this;
var this22080__$1 = this;
return ((!((other22081 == null))) && ((this22080__$1.constructor === other22081.constructor)) && (cljs.core._EQ_.call(null,this22080__$1.qfind,other22081.qfind)) && (cljs.core._EQ_.call(null,this22080__$1.qwith,other22081.qwith)) && (cljs.core._EQ_.call(null,this22080__$1.qin,other22081.qin)) && (cljs.core._EQ_.call(null,this22080__$1.qwhere,other22081.qwhere)) && (cljs.core._EQ_.call(null,this22080__$1.__extmap,other22081.__extmap)));
});

datascript.parser.Query.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4181__auto__,k__4182__auto__){
var self__ = this;
var this__4181__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"qfind","qfind",1529332972),null,new cljs.core.Keyword(null,"qwhere","qwhere",-1645067378),null,new cljs.core.Keyword(null,"qin","qin",1372651151),null,new cljs.core.Keyword(null,"qwith","qwith",-45809392),null], null), null),k__4182__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4181__auto____$1),self__.__meta),k__4182__auto__);
} else {
return (new datascript.parser.Query(self__.qfind,self__.qwith,self__.qin,self__.qwhere,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4182__auto__)),null));
}
});

datascript.parser.Query.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4179__auto__,k__4180__auto__,G__22078){
var self__ = this;
var this__4179__auto____$1 = this;
var pred__22084 = cljs.core.keyword_identical_QMARK_;
var expr__22085 = k__4180__auto__;
if(cljs.core.truth_(pred__22084.call(null,new cljs.core.Keyword(null,"qfind","qfind",1529332972),expr__22085))){
return (new datascript.parser.Query(G__22078,self__.qwith,self__.qin,self__.qwhere,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__22084.call(null,new cljs.core.Keyword(null,"qwith","qwith",-45809392),expr__22085))){
return (new datascript.parser.Query(self__.qfind,G__22078,self__.qin,self__.qwhere,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__22084.call(null,new cljs.core.Keyword(null,"qin","qin",1372651151),expr__22085))){
return (new datascript.parser.Query(self__.qfind,self__.qwith,G__22078,self__.qwhere,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__22084.call(null,new cljs.core.Keyword(null,"qwhere","qwhere",-1645067378),expr__22085))){
return (new datascript.parser.Query(self__.qfind,self__.qwith,self__.qin,G__22078,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Query(self__.qfind,self__.qwith,self__.qin,self__.qwhere,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4180__auto__,G__22078),null));
}
}
}
}
});

datascript.parser.Query.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4184__auto__){
var self__ = this;
var this__4184__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"qfind","qfind",1529332972),self__.qfind,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"qwith","qwith",-45809392),self__.qwith,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"qin","qin",1372651151),self__.qin,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"qwhere","qwhere",-1645067378),self__.qwhere,null))], null),self__.__extmap));
});

datascript.parser.Query.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4171__auto__,G__22078){
var self__ = this;
var this__4171__auto____$1 = this;
return (new datascript.parser.Query(self__.qfind,self__.qwith,self__.qin,self__.qwhere,G__22078,self__.__extmap,self__.__hash));
});

datascript.parser.Query.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4177__auto__,entry__4178__auto__){
var self__ = this;
var this__4177__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4178__auto__)){
return this__4177__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4178__auto__,(0)),cljs.core._nth.call(null,entry__4178__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4177__auto____$1,entry__4178__auto__);
}
});

datascript.parser.Query.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.Query.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__1261__auto__,f22075){
var self__ = this;
var this__1261__auto____$1 = this;
var new__1262__auto__ = (new datascript.parser.Query(datascript.parser.postwalk.call(null,self__.qfind,f22075),datascript.parser.postwalk.call(null,self__.qwith,f22075),datascript.parser.postwalk.call(null,self__.qin,f22075),datascript.parser.postwalk.call(null,self__.qwhere,f22075),null,null,null));
var temp__4655__auto__ = cljs.core.meta.call(null,this__1261__auto____$1);
if(cljs.core.truth_(temp__4655__auto__)){
var meta__1263__auto__ = temp__4655__auto__;
return cljs.core.with_meta.call(null,new__1262__auto__,meta__1263__auto__);
} else {
return new__1262__auto__;
}
});

datascript.parser.Query.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___1264__auto__,pred22076,acc22077){
var self__ = this;
var ___1264__auto____$1 = this;
return datascript.parser.collect.call(null,pred22076,self__.qwhere,datascript.parser.collect.call(null,pred22076,self__.qin,datascript.parser.collect.call(null,pred22076,self__.qwith,datascript.parser.collect.call(null,pred22076,self__.qfind,acc22077))));
});

datascript.parser.Query.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___1264__auto__,acc22077){
var self__ = this;
var ___1264__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc22077,self__.qfind),self__.qwith),self__.qin),self__.qwhere);
});

datascript.parser.Query.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"qfind","qfind",-1125102797,null),new cljs.core.Symbol(null,"qwith","qwith",1594722135,null),new cljs.core.Symbol(null,"qin","qin",-1281784618,null),new cljs.core.Symbol(null,"qwhere","qwhere",-4535851,null)], null);
});

datascript.parser.Query.cljs$lang$type = true;

datascript.parser.Query.cljs$lang$ctorPrSeq = (function (this__4208__auto__){
return (new cljs.core.List(null,"datascript.parser/Query",null,(1),null));
});

datascript.parser.Query.cljs$lang$ctorPrWriter = (function (this__4208__auto__,writer__4209__auto__){
return cljs.core._write.call(null,writer__4209__auto__,"datascript.parser/Query");
});

/**
 * Positional factory function for datascript.parser/Query.
 */
datascript.parser.__GT_Query = (function datascript$parser$__GT_Query(qfind,qwith,qin,qwhere){
return (new datascript.parser.Query(qfind,qwith,qin,qwhere,null,null,null));
});

/**
 * Factory function for datascript.parser/Query, taking a map of keywords to field values.
 */
datascript.parser.map__GT_Query = (function datascript$parser$map__GT_Query(G__22082){
return (new datascript.parser.Query(new cljs.core.Keyword(null,"qfind","qfind",1529332972).cljs$core$IFn$_invoke$arity$1(G__22082),new cljs.core.Keyword(null,"qwith","qwith",-45809392).cljs$core$IFn$_invoke$arity$1(G__22082),new cljs.core.Keyword(null,"qin","qin",1372651151).cljs$core$IFn$_invoke$arity$1(G__22082),new cljs.core.Keyword(null,"qwhere","qwhere",-1645067378).cljs$core$IFn$_invoke$arity$1(G__22082),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__22082,new cljs.core.Keyword(null,"qfind","qfind",1529332972),new cljs.core.Keyword(null,"qwith","qwith",-45809392),new cljs.core.Keyword(null,"qin","qin",1372651151),new cljs.core.Keyword(null,"qwhere","qwhere",-1645067378))),null));
});

datascript.parser.query__GT_map = (function datascript$parser$query__GT_map(query){
var parsed = cljs.core.PersistentArrayMap.EMPTY;
var key = null;
var qs = query;
while(true){
var temp__4655__auto__ = cljs.core.first.call(null,qs);
if(cljs.core.truth_(temp__4655__auto__)){
var q = temp__4655__auto__;
if((q instanceof cljs.core.Keyword)){
var G__22088 = parsed;
var G__22089 = q;
var G__22090 = cljs.core.next.call(null,qs);
parsed = G__22088;
key = G__22089;
qs = G__22090;
continue;
} else {
var G__22091 = cljs.core.update_in.call(null,parsed,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),q);
var G__22092 = key;
var G__22093 = cljs.core.next.call(null,qs);
parsed = G__22091;
key = G__22092;
qs = G__22093;
continue;
}
} else {
return parsed;
}
break;
}
});
datascript.parser.validate_query = (function datascript$parser$validate_query(q,form){
var find_vars_22100 = cljs.core.set.call(null,datascript.parser.collect_vars.call(null,new cljs.core.Keyword(null,"qfind","qfind",1529332972).cljs$core$IFn$_invoke$arity$1(q)));
var with_vars_22101 = cljs.core.set.call(null,new cljs.core.Keyword(null,"qwith","qwith",-45809392).cljs$core$IFn$_invoke$arity$1(q));
var in_vars_22102 = cljs.core.set.call(null,datascript.parser.collect_vars.call(null,new cljs.core.Keyword(null,"qin","qin",1372651151).cljs$core$IFn$_invoke$arity$1(q)));
var where_vars_22103 = cljs.core.set.call(null,datascript.parser.collect_vars.call(null,new cljs.core.Keyword(null,"qwhere","qwhere",-1645067378).cljs$core$IFn$_invoke$arity$1(q)));
var unknown_22104 = clojure.set.difference.call(null,clojure.set.union.call(null,find_vars_22100,with_vars_22101),clojure.set.union.call(null,where_vars_22103,in_vars_22102));
var shared_22105 = clojure.set.intersection.call(null,find_vars_22100,with_vars_22101);
if(cljs.core.empty_QMARK_.call(null,unknown_22104)){
} else {
throw cljs.core.ex_info.call(null,["Query for unknown vars: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.mapv.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),unknown_22104)))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","query","parser/query",1877320671),new cljs.core.Keyword(null,"vars","vars",-2046957217),unknown_22104,new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}

if(cljs.core.empty_QMARK_.call(null,shared_22105)){
} else {
throw cljs.core.ex_info.call(null,[":in and :with should not use same variables: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.mapv.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),shared_22105)))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","query","parser/query",1877320671),new cljs.core.Keyword(null,"vars","vars",-2046957217),shared_22105,new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}

var in_vars_22106 = datascript.parser.collect_vars.call(null,new cljs.core.Keyword(null,"qin","qin",1372651151).cljs$core$IFn$_invoke$arity$1(q));
var in_sources_22107 = datascript.parser.collect.call(null,((function (in_vars_22106){
return (function (p1__22094_SHARP_){
return (p1__22094_SHARP_ instanceof datascript.parser.SrcVar);
});})(in_vars_22106))
,new cljs.core.Keyword(null,"qin","qin",1372651151).cljs$core$IFn$_invoke$arity$1(q));
var in_rules_22108 = datascript.parser.collect.call(null,((function (in_vars_22106,in_sources_22107){
return (function (p1__22095_SHARP_){
return (p1__22095_SHARP_ instanceof datascript.parser.RulesVar);
});})(in_vars_22106,in_sources_22107))
,new cljs.core.Keyword(null,"qin","qin",1372651151).cljs$core$IFn$_invoke$arity$1(q));
if(cljs.core.truth_((function (){var and__3911__auto__ = datascript.parser.distinct_QMARK_.call(null,in_vars_22106);
if(cljs.core.truth_(and__3911__auto__)){
var and__3911__auto____$1 = datascript.parser.distinct_QMARK_.call(null,in_sources_22107);
if(cljs.core.truth_(and__3911__auto____$1)){
return datascript.parser.distinct_QMARK_.call(null,in_rules_22108);
} else {
return and__3911__auto____$1;
}
} else {
return and__3911__auto__;
}
})())){
} else {
throw cljs.core.ex_info.call(null,["Vars used in :in should be distinct"].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","query","parser/query",1877320671),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}

var with_vars_22109 = datascript.parser.collect_vars.call(null,new cljs.core.Keyword(null,"qwith","qwith",-45809392).cljs$core$IFn$_invoke$arity$1(q));
if(cljs.core.truth_(datascript.parser.distinct_QMARK_.call(null,with_vars_22109))){
} else {
throw cljs.core.ex_info.call(null,["Vars used in :with should be distinct"].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","query","parser/query",1877320671),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}

var in_sources_22110 = datascript.parser.collect.call(null,(function (p1__22096_SHARP_){
return (p1__22096_SHARP_ instanceof datascript.parser.SrcVar);
}),new cljs.core.Keyword(null,"qin","qin",1372651151).cljs$core$IFn$_invoke$arity$1(q),cljs.core.PersistentHashSet.EMPTY);
var where_sources_22111 = datascript.parser.collect.call(null,((function (in_sources_22110){
return (function (p1__22097_SHARP_){
return (p1__22097_SHARP_ instanceof datascript.parser.SrcVar);
});})(in_sources_22110))
,new cljs.core.Keyword(null,"qwhere","qwhere",-1645067378).cljs$core$IFn$_invoke$arity$1(q),cljs.core.PersistentHashSet.EMPTY);
var unknown_22112 = clojure.set.difference.call(null,where_sources_22111,in_sources_22110);
if(cljs.core.empty_QMARK_.call(null,unknown_22112)){
} else {
throw cljs.core.ex_info.call(null,["Where uses unknown source vars: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.mapv.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),unknown_22112)))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","query","parser/query",1877320671),new cljs.core.Keyword(null,"vars","vars",-2046957217),unknown_22112,new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}

var rule_exprs = datascript.parser.collect.call(null,(function (p1__22098_SHARP_){
return (p1__22098_SHARP_ instanceof datascript.parser.RuleExpr);
}),new cljs.core.Keyword(null,"qwhere","qwhere",-1645067378).cljs$core$IFn$_invoke$arity$1(q));
var rules_vars = datascript.parser.collect.call(null,((function (rule_exprs){
return (function (p1__22099_SHARP_){
return (p1__22099_SHARP_ instanceof datascript.parser.RulesVar);
});})(rule_exprs))
,new cljs.core.Keyword(null,"qin","qin",1372651151).cljs$core$IFn$_invoke$arity$1(q));
if(((!(cljs.core.empty_QMARK_.call(null,rule_exprs))) && (cljs.core.empty_QMARK_.call(null,rules_vars)))){
throw cljs.core.ex_info.call(null,["Missing rules var '%' in :in"].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","query","parser/query",1877320671),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
} else {
return null;
}
});
datascript.parser.parse_query = (function datascript$parser$parse_query(q){
var qm = ((cljs.core.map_QMARK_.call(null,q))?q:((cljs.core.sequential_QMARK_.call(null,q))?datascript.parser.query__GT_map.call(null,q):(function(){throw cljs.core.ex_info.call(null,["Query should be a vector or a map"].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","query","parser/query",1877320671),new cljs.core.Keyword(null,"form","form",-1624062471),q], null))})()
));
var res = datascript.parser.map__GT_Query.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"qfind","qfind",1529332972),datascript.parser.parse_find.call(null,new cljs.core.Keyword(null,"find","find",496279456).cljs$core$IFn$_invoke$arity$1(qm)),new cljs.core.Keyword(null,"qwith","qwith",-45809392),(function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(qm);
if(cljs.core.truth_(temp__4657__auto__)){
var with$ = temp__4657__auto__;
return datascript.parser.parse_with.call(null,with$);
} else {
return null;
}
})(),new cljs.core.Keyword(null,"qin","qin",1372651151),datascript.parser.parse_in.call(null,new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$2(qm,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1580747756,null)], null))),new cljs.core.Keyword(null,"qwhere","qwhere",-1645067378),datascript.parser.parse_where.call(null,new cljs.core.Keyword(null,"where","where",-2044795965).cljs$core$IFn$_invoke$arity$2(qm,cljs.core.PersistentVector.EMPTY))], null));
datascript.parser.validate_query.call(null,res,q);

return res;
});

//# sourceMappingURL=parser.js.map?rel=1530661625757
