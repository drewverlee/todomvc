// Compiled by ClojureScript 1.10.238 {}
goog.provide('posh.core');
goog.require('cljs.core');
goog.require('posh.lib.util');
goog.require('posh.lib.datom_matcher');
goog.require('posh.lib.pull_analyze');
goog.require('posh.lib.q_analyze');
goog.require('posh.lib.update');
goog.require('posh.lib.db');
goog.require('posh.lib.graph');
posh.core.empty_tree = (function posh$core$empty_tree(p__24872,retrieve){
var map__24873 = p__24872;
var map__24873__$1 = ((((!((map__24873 == null)))?(((((map__24873.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24873.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24873):map__24873);
var dcfg = map__24873__$1;
var q = cljs.core.get.call(null,map__24873__$1,new cljs.core.Keyword(null,"q","q",689001697));
var pull = cljs.core.get.call(null,map__24873__$1,new cljs.core.Keyword(null,"pull","pull",-860544805));
var filter = cljs.core.get.call(null,map__24873__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));
var entid = cljs.core.get.call(null,map__24873__$1,new cljs.core.Keyword(null,"entid","entid",1720688982));
var db = cljs.core.get.call(null,map__24873__$1,new cljs.core.Keyword(null,"db","db",993250759));
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"filters","filters",974726919),new cljs.core.Keyword(null,"retrieve","retrieve",-657129560),new cljs.core.Keyword(null,"txs","txs",2056038378),new cljs.core.Keyword(null,"cache","cache",-1237023054),new cljs.core.Keyword(null,"dbs","dbs",1889628467),new cljs.core.Keyword(null,"schemas","schemas",575070579),new cljs.core.Keyword(null,"graph","graph",1558099509),new cljs.core.Keyword(null,"dcfg","dcfg",-880371016),new cljs.core.Keyword(null,"conns","conns",-1475268193)],[cljs.core.PersistentArrayMap.EMPTY,retrieve,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,dcfg,cljs.core.PersistentArrayMap.EMPTY]);
});
posh.core.add_db = (function posh$core$add_db(var_args){
var G__24876 = arguments.length;
switch (G__24876) {
case 4:
return posh.core.add_db.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return posh.core.add_db.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

posh.core.add_db.cljs$core$IFn$_invoke$arity$4 = (function (posh_tree,db_id,conn,schema){
return posh.core.add_db.call(null,posh_tree,db_id,conn,schema,null);
});

posh.core.add_db.cljs$core$IFn$_invoke$arity$5 = (function (p__24877,db_id,conn,schema,base_filters){
var map__24878 = p__24877;
var map__24878__$1 = ((((!((map__24878 == null)))?(((((map__24878.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24878.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24878):map__24878);
var posh_tree = map__24878__$1;
var dcfg = cljs.core.get.call(null,map__24878__$1,new cljs.core.Keyword(null,"dcfg","dcfg",-880371016));
var conns = cljs.core.get.call(null,map__24878__$1,new cljs.core.Keyword(null,"conns","conns",-1475268193));
var schemas = cljs.core.get.call(null,map__24878__$1,new cljs.core.Keyword(null,"schemas","schemas",575070579));
var dbs = cljs.core.get.call(null,map__24878__$1,new cljs.core.Keyword(null,"dbs","dbs",1889628467));
var cache = cljs.core.get.call(null,map__24878__$1,new cljs.core.Keyword(null,"cache","cache",-1237023054));
var graph = cljs.core.get.call(null,map__24878__$1,new cljs.core.Keyword(null,"graph","graph",1558099509));
var storage_key = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db","db",993250759),db_id], null);
return cljs.core.merge.call(null,posh_tree,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"conns","conns",-1475268193),cljs.core.assoc.call(null,conns,db_id,conn),new cljs.core.Keyword(null,"schemas","schemas",575070579),cljs.core.assoc.call(null,schemas,db_id,schema),new cljs.core.Keyword(null,"filters","filters",974726919),cljs.core.assoc.call(null,new cljs.core.Keyword(null,"filters","filters",974726919).cljs$core$IFn$_invoke$arity$1(posh_tree),db_id,base_filters),new cljs.core.Keyword(null,"return","return",-1891502105),storage_key,new cljs.core.Keyword(null,"dbs","dbs",1889628467),cljs.core.assoc.call(null,dbs,db_id,posh.lib.db.generate_initial_db.call(null,dcfg,conn,base_filters)),new cljs.core.Keyword(null,"cache","cache",-1237023054),cljs.core.merge.call(null,cache,cljs.core.PersistentArrayMap.createAsIfByAssoc([storage_key,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pass-patterns","pass-patterns",1090887263),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null)], null)])),new cljs.core.Keyword(null,"graph","graph",1558099509),posh.lib.graph.add_item_full.call(null,graph,storage_key,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY)], null));
});

posh.core.add_db.cljs$lang$maxFixedArity = 5;

posh.core.set_db = (function posh$core$set_db(var_args){
var G__24882 = arguments.length;
switch (G__24882) {
case 3:
return posh.core.set_db.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return posh.core.set_db.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

posh.core.set_db.cljs$core$IFn$_invoke$arity$3 = (function (posh_tree,db_id,db){
return posh.core.set_db.call(null,posh_tree,db_id,db,null);
});

posh.core.set_db.cljs$core$IFn$_invoke$arity$4 = (function (p__24883,db_id,db,filter_pred){
var map__24884 = p__24883;
var map__24884__$1 = ((((!((map__24884 == null)))?(((((map__24884.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24884.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24884):map__24884);
var posh_tree = map__24884__$1;
var dbs = cljs.core.get.call(null,map__24884__$1,new cljs.core.Keyword(null,"dbs","dbs",1889628467));
var graph = cljs.core.get.call(null,map__24884__$1,new cljs.core.Keyword(null,"graph","graph",1558099509));
var cache = cljs.core.get.call(null,map__24884__$1,new cljs.core.Keyword(null,"cache","cache",-1237023054));
var storage_key = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db","db",993250759),db_id], null);
return cljs.core.merge.call(null,posh_tree,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dbs","dbs",1889628467),cljs.core.assoc.call(null,dbs,db_id,db),new cljs.core.Keyword(null,"cache","cache",-1237023054),cljs.core.merge.call(null,cache,cljs.core.PersistentArrayMap.createAsIfByAssoc([storage_key,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pass-patterns","pass-patterns",1090887263),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null)], null)])),new cljs.core.Keyword(null,"graph","graph",1558099509),posh.lib.graph.add_item_full.call(null,graph,storage_key,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY)], null));
});

posh.core.set_db.cljs$lang$maxFixedArity = 4;

posh.core.add_filter_tx = (function posh$core$add_filter_tx(p__24887,poshdb,tx_patterns){
var map__24888 = p__24887;
var map__24888__$1 = ((((!((map__24888 == null)))?(((((map__24888.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24888.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24888):map__24888);
var posh_tree = map__24888__$1;
var cache = cljs.core.get.call(null,map__24888__$1,new cljs.core.Keyword(null,"cache","cache",-1237023054));
var graph = cljs.core.get.call(null,map__24888__$1,new cljs.core.Keyword(null,"graph","graph",1558099509));
var storage_key = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-tx","filter-tx",-1870604812),poshdb,tx_patterns], null);
var cached = cljs.core.get.call(null,cache,storage_key);
return cljs.core.assoc.call(null,(cljs.core.truth_(cached)?posh_tree:cljs.core.merge.call(null,posh_tree,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"graph","graph",1558099509),posh.lib.graph.add_item_connect.call(null,graph,storage_key,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [poshdb], null)),new cljs.core.Keyword(null,"cache","cache",-1237023054),cljs.core.assoc.call(null,cache,storage_key,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pass-patterns","pass-patterns",1090887263),tx_patterns], null))], null))),new cljs.core.Keyword(null,"return","return",-1891502105),storage_key);
});
posh.core.add_filter_pull = (function posh$core$add_filter_pull(p__24890,poshdb,pull_pattern,eid){
var map__24891 = p__24890;
var map__24891__$1 = ((((!((map__24891 == null)))?(((((map__24891.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24891.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24891):map__24891);
var posh_tree = map__24891__$1;
var cache = cljs.core.get.call(null,map__24891__$1,new cljs.core.Keyword(null,"cache","cache",-1237023054));
var graph = cljs.core.get.call(null,map__24891__$1,new cljs.core.Keyword(null,"graph","graph",1558099509));
var dcfg = cljs.core.get.call(null,map__24891__$1,new cljs.core.Keyword(null,"dcfg","dcfg",-880371016));
var conns = cljs.core.get.call(null,map__24891__$1,new cljs.core.Keyword(null,"conns","conns",-1475268193));
var conns_by_id = cljs.core.get.call(null,map__24891__$1,new cljs.core.Keyword(null,"conns-by-id","conns-by-id",-369445996));
var storage_key = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-pull","filter-pull",-32246001),poshdb,pull_pattern,eid], null);
var cached = cljs.core.get.call(null,cache,storage_key);
return cljs.core.assoc.call(null,(cljs.core.truth_(cached)?posh_tree:cljs.core.merge.call(null,posh_tree,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"graph","graph",1558099509),posh.lib.graph.add_item_connect.call(null,graph,storage_key,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [poshdb], null)),new cljs.core.Keyword(null,"cache","cache",-1237023054),cljs.core.assoc.call(null,cache,storage_key,posh.lib.update.update_filter_pull.call(null,posh_tree,storage_key))], null))),new cljs.core.Keyword(null,"return","return",-1891502105),storage_key);
});
posh.core.add_filter_q = (function posh$core$add_filter_q(var_args){
var args__4502__auto__ = [];
var len__4499__auto___24901 = arguments.length;
var i__4500__auto___24902 = (0);
while(true){
if((i__4500__auto___24902 < len__4499__auto___24901)){
args__4502__auto__.push((arguments[i__4500__auto___24902]));

var G__24903 = (i__4500__auto___24902 + (1));
i__4500__auto___24902 = G__24903;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((2) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((2)),(0),null)):null);
return posh.core.add_filter_q.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4503__auto__);
});

posh.core.add_filter_q.cljs$core$IFn$_invoke$arity$variadic = (function (p__24896,query,args){
var map__24897 = p__24896;
var map__24897__$1 = ((((!((map__24897 == null)))?(((((map__24897.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24897.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24897):map__24897);
var posh_tree = map__24897__$1;
var graph = cljs.core.get.call(null,map__24897__$1,new cljs.core.Keyword(null,"graph","graph",1558099509));
var cache = cljs.core.get.call(null,map__24897__$1,new cljs.core.Keyword(null,"cache","cache",-1237023054));
var dcfg = cljs.core.get.call(null,map__24897__$1,new cljs.core.Keyword(null,"dcfg","dcfg",-880371016));
var retrieve = cljs.core.get.call(null,map__24897__$1,new cljs.core.Keyword(null,"retrieve","retrieve",-657129560));
var conns = cljs.core.get.call(null,map__24897__$1,new cljs.core.Keyword(null,"conns","conns",-1475268193));
var conns_by_id = cljs.core.get.call(null,map__24897__$1,new cljs.core.Keyword(null,"conns-by-id","conns-by-id",-369445996));
var storage_key = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-q","filter-q",538431954),query,args], null);
var cached = cljs.core.get.call(null,cache,storage_key);
return cljs.core.assoc.call(null,(cljs.core.truth_(cached)?posh_tree:(function (){var map__24899 = posh.lib.update.update_q_with_dbvarmap.call(null,posh_tree,storage_key);
var map__24899__$1 = ((((!((map__24899 == null)))?(((((map__24899.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24899.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24899):map__24899);
var analysis = cljs.core.get.call(null,map__24899__$1,new cljs.core.Keyword(null,"analysis","analysis",-1362593389));
var dbvarmap = cljs.core.get.call(null,map__24899__$1,new cljs.core.Keyword(null,"dbvarmap","dbvarmap",491069137));
return cljs.core.merge.call(null,posh_tree,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"graph","graph",1558099509),posh.lib.graph.add_item_connect.call(null,graph,storage_key,cljs.core.vals.call(null,dbvarmap)),new cljs.core.Keyword(null,"cache","cache",-1237023054),cljs.core.assoc.call(null,cache,storage_key,posh.lib.update.filter_q_transform_analysis.call(null,analysis))], null));
})()),new cljs.core.Keyword(null,"return","return",-1891502105),storage_key);
});

posh.core.add_filter_q.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
posh.core.add_filter_q.cljs$lang$applyTo = (function (seq24893){
var G__24894 = cljs.core.first.call(null,seq24893);
var seq24893__$1 = cljs.core.next.call(null,seq24893);
var G__24895 = cljs.core.first.call(null,seq24893__$1);
var seq24893__$2 = cljs.core.next.call(null,seq24893__$1);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24894,G__24895,seq24893__$2);
});

posh.core.add_pull = (function posh$core$add_pull(p__24904,poshdb,pull_pattern,eid){
var map__24905 = p__24904;
var map__24905__$1 = ((((!((map__24905 == null)))?(((((map__24905.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24905.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24905):map__24905);
var posh_tree = map__24905__$1;
var graph = cljs.core.get.call(null,map__24905__$1,new cljs.core.Keyword(null,"graph","graph",1558099509));
var cache = cljs.core.get.call(null,map__24905__$1,new cljs.core.Keyword(null,"cache","cache",-1237023054));
var dcfg = cljs.core.get.call(null,map__24905__$1,new cljs.core.Keyword(null,"dcfg","dcfg",-880371016));
var conns = cljs.core.get.call(null,map__24905__$1,new cljs.core.Keyword(null,"conns","conns",-1475268193));
var conns_by_id = cljs.core.get.call(null,map__24905__$1,new cljs.core.Keyword(null,"conns-by-id","conns-by-id",-369445996));
var retrieve = cljs.core.get.call(null,map__24905__$1,new cljs.core.Keyword(null,"retrieve","retrieve",-657129560));
var storage_key = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pull","pull",-860544805),poshdb,pull_pattern,eid], null);
var cached = cljs.core.get.call(null,cache,storage_key);
return cljs.core.assoc.call(null,(cljs.core.truth_(cached)?posh_tree:(function (){var analysis = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tx-t","tx-t",-1302353112),(0)], null),posh.lib.update.update_pull.call(null,posh_tree,storage_key));
return cljs.core.merge.call(null,posh_tree,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"graph","graph",1558099509),posh.lib.graph.add_item_connect.call(null,graph,storage_key,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [poshdb], null)),new cljs.core.Keyword(null,"cache","cache",-1237023054),cljs.core.assoc.call(null,cache,storage_key,analysis)], null));
})()),new cljs.core.Keyword(null,"return","return",-1891502105),storage_key);
});
posh.core.add_q = (function posh$core$add_q(var_args){
var args__4502__auto__ = [];
var len__4499__auto___24915 = arguments.length;
var i__4500__auto___24916 = (0);
while(true){
if((i__4500__auto___24916 < len__4499__auto___24915)){
args__4502__auto__.push((arguments[i__4500__auto___24916]));

var G__24917 = (i__4500__auto___24916 + (1));
i__4500__auto___24916 = G__24917;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((2) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((2)),(0),null)):null);
return posh.core.add_q.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4503__auto__);
});

posh.core.add_q.cljs$core$IFn$_invoke$arity$variadic = (function (p__24910,query,args){
var map__24911 = p__24910;
var map__24911__$1 = ((((!((map__24911 == null)))?(((((map__24911.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24911.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24911):map__24911);
var posh_tree = map__24911__$1;
var cache = cljs.core.get.call(null,map__24911__$1,new cljs.core.Keyword(null,"cache","cache",-1237023054));
var graph = cljs.core.get.call(null,map__24911__$1,new cljs.core.Keyword(null,"graph","graph",1558099509));
var dcfg = cljs.core.get.call(null,map__24911__$1,new cljs.core.Keyword(null,"dcfg","dcfg",-880371016));
var conns = cljs.core.get.call(null,map__24911__$1,new cljs.core.Keyword(null,"conns","conns",-1475268193));
var retrieve = cljs.core.get.call(null,map__24911__$1,new cljs.core.Keyword(null,"retrieve","retrieve",-657129560));
var storage_key = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"q","q",689001697),query,args], null);
var cached = cljs.core.get.call(null,cache,storage_key);
return cljs.core.assoc.call(null,(function (){var or__3922__auto__ = cached;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
var map__24913 = posh.lib.update.update_q_with_dbvarmap.call(null,posh_tree,storage_key);
var map__24913__$1 = ((((!((map__24913 == null)))?(((((map__24913.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24913.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24913):map__24913);
var analysis = cljs.core.get.call(null,map__24913__$1,new cljs.core.Keyword(null,"analysis","analysis",-1362593389));
var dbvarmap = cljs.core.get.call(null,map__24913__$1,new cljs.core.Keyword(null,"dbvarmap","dbvarmap",491069137));
return cljs.core.merge.call(null,posh_tree,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"graph","graph",1558099509),posh.lib.graph.add_item_connect.call(null,graph,storage_key,cljs.core.vals.call(null,dbvarmap)),new cljs.core.Keyword(null,"cache","cache",-1237023054),cljs.core.assoc.call(null,cache,storage_key,analysis)], null));
}
})(),new cljs.core.Keyword(null,"return","return",-1891502105),storage_key);
});

posh.core.add_q.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
posh.core.add_q.cljs$lang$applyTo = (function (seq24907){
var G__24908 = cljs.core.first.call(null,seq24907);
var seq24907__$1 = cljs.core.next.call(null,seq24907);
var G__24909 = cljs.core.first.call(null,seq24907__$1);
var seq24907__$2 = cljs.core.next.call(null,seq24907__$1);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24908,G__24909,seq24907__$2);
});

posh.core.remove_item = (function posh$core$remove_item(p__24918,storage_key){
var map__24919 = p__24918;
var map__24919__$1 = ((((!((map__24919 == null)))?(((((map__24919.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24919.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24919):map__24919);
var posh_tree = map__24919__$1;
var graph = cljs.core.get.call(null,map__24919__$1,new cljs.core.Keyword(null,"graph","graph",1558099509));
var cache = cljs.core.get.call(null,map__24919__$1,new cljs.core.Keyword(null,"cache","cache",-1237023054));
return cljs.core.assoc.call(null,posh_tree,new cljs.core.Keyword(null,"graph","graph",1558099509),posh.lib.graph.remove_item.call(null,graph,storage_key),new cljs.core.Keyword(null,"cache","cache",-1237023054),cljs.core.dissoc.call(null,cache,storage_key));
});
posh.core.cache_changes = (function posh$core$cache_changes(p__24921,db_id,tx,new_cache,storage_key){
var map__24922 = p__24921;
var map__24922__$1 = ((((!((map__24922 == null)))?(((((map__24922.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24922.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24922):map__24922);
var posh_tree = map__24922__$1;
var graph = cljs.core.get.call(null,map__24922__$1,new cljs.core.Keyword(null,"graph","graph",1558099509));
var cache = cljs.core.get.call(null,map__24922__$1,new cljs.core.Keyword(null,"cache","cache",-1237023054));
if(cljs.core.truth_(cljs.core.get.call(null,new_cache,storage_key))){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
var current_analysis = cljs.core.get.call(null,cache,storage_key);
var reloaded = (cljs.core.truth_(posh.lib.datom_matcher.any_datoms_match_QMARK_.call(null,cljs.core.get.call(null,new cljs.core.Keyword(null,"reload-patterns","reload-patterns",-1261746666).cljs$core$IFn$_invoke$arity$1(current_analysis),db_id),tx))?new cljs.core.Keyword(null,"reload-fn","reload-fn",-1150160860).cljs$core$IFn$_invoke$arity$1(current_analysis).call(null,posh_tree,storage_key):null);
var analysis = (function (){var or__3922__auto__ = reloaded;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return current_analysis;
}
})();
var map__24924 = cljs.core.get.call(null,graph,storage_key);
var map__24924__$1 = ((((!((map__24924 == null)))?(((((map__24924.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24924.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24924):map__24924);
var outputs = cljs.core.get.call(null,map__24924__$1,new cljs.core.Keyword(null,"outputs","outputs",-1896513034));
var children_cache = (function (){var temp__4657__auto__ = (function (){var and__3911__auto__ = !(cljs.core.empty_QMARK_.call(null,outputs));
if(and__3911__auto__){
var and__3911__auto____$1 = new cljs.core.Keyword(null,"pass-patterns","pass-patterns",1090887263).cljs$core$IFn$_invoke$arity$1(analysis);
if(cljs.core.truth_(and__3911__auto____$1)){
return posh.lib.datom_matcher.matching_datoms.call(null,new cljs.core.Keyword(null,"pass-patterns","pass-patterns",1090887263).cljs$core$IFn$_invoke$arity$1(analysis),tx);
} else {
return and__3911__auto____$1;
}
} else {
return and__3911__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var pass_tx = temp__4657__auto__;
return cljs.core.reduce.call(null,((function (pass_tx,temp__4657__auto__,current_analysis,reloaded,analysis,map__24924,map__24924__$1,outputs,map__24922,map__24922__$1,posh_tree,graph,cache){
return (function (acc,k){
return cljs.core.merge.call(null,acc,posh.core.cache_changes.call(null,posh_tree,db_id,pass_tx,acc,k));
});})(pass_tx,temp__4657__auto__,current_analysis,reloaded,analysis,map__24924,map__24924__$1,outputs,map__24922,map__24922__$1,posh_tree,graph,cache))
,new_cache,outputs);
} else {
return null;
}
})();
return cljs.core.merge.call(null,children_cache,(cljs.core.truth_(reloaded)?cljs.core.PersistentArrayMap.createAsIfByAssoc([storage_key,reloaded]):null),cljs.core.PersistentArrayMap.EMPTY);
}
});
posh.core.merge_txs = (function posh$core$merge_txs(oldtx,newtx){
return cljs.core.concat.call(null,newtx,oldtx);
});
posh.core.add_tx = (function posh$core$add_tx(p__24926,poshdb,tx){
var map__24927 = p__24926;
var map__24927__$1 = ((((!((map__24927 == null)))?(((((map__24927.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24927.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24927):map__24927);
var posh_tree = map__24927__$1;
var txs = cljs.core.get.call(null,map__24927__$1,new cljs.core.Keyword(null,"txs","txs",2056038378));
var conns = cljs.core.get.call(null,map__24927__$1,new cljs.core.Keyword(null,"conns","conns",-1475268193));
var conn = cljs.core.get.call(null,conns,posh.lib.db.poshdb__GT_db_id.call(null,poshdb));
return cljs.core.assoc.call(null,posh_tree,new cljs.core.Keyword(null,"txs","txs",2056038378),cljs.core.assoc.call(null,txs,conn,posh.core.merge_txs.call(null,cljs.core.get.call(null,txs,conn),tx)));
});
posh.core.group_db_ids_by_conn = (function posh$core$group_db_ids_by_conn(conns){
return cljs.core.reduce_kv.call(null,(function (m,k,v){
return cljs.core.assoc.call(null,m,k,cljs.core.map.call(null,cljs.core.first,v));
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.group_by.call(null,cljs.core.second,conns));
});
posh.core.after_transact = (function posh$core$after_transact(p__24929,conns_results){
var map__24930 = p__24929;
var map__24930__$1 = ((((!((map__24930 == null)))?(((((map__24930.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24930.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24930):map__24930);
var posh_tree = map__24930__$1;
var conns = cljs.core.get.call(null,map__24930__$1,new cljs.core.Keyword(null,"conns","conns",-1475268193));
var dcfg = cljs.core.get.call(null,map__24930__$1,new cljs.core.Keyword(null,"dcfg","dcfg",-880371016));
var dbs = cljs.core.get.call(null,map__24930__$1,new cljs.core.Keyword(null,"dbs","dbs",1889628467));
var filters = cljs.core.get.call(null,map__24930__$1,new cljs.core.Keyword(null,"filters","filters",974726919));
var cache = cljs.core.get.call(null,map__24930__$1,new cljs.core.Keyword(null,"cache","cache",-1237023054));
var new_dbs = cljs.core.apply.call(null,cljs.core.merge,(function (){var iter__4292__auto__ = ((function (map__24930,map__24930__$1,posh_tree,conns,dcfg,dbs,filters,cache){
return (function posh$core$after_transact_$_iter__24932(s__24933){
return (new cljs.core.LazySeq(null,((function (map__24930,map__24930__$1,posh_tree,conns,dcfg,dbs,filters,cache){
return (function (){
var s__24933__$1 = s__24933;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__24933__$1);
if(temp__4657__auto__){
var s__24933__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__24933__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__24933__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__24935 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__24934 = (0);
while(true){
if((i__24934 < size__4291__auto__)){
var vec__24936 = cljs.core._nth.call(null,c__4290__auto__,i__24934);
var db_id = cljs.core.nth.call(null,vec__24936,(0),null);
var conn = cljs.core.nth.call(null,vec__24936,(1),null);
cljs.core.chunk_append.call(null,b__24935,(cljs.core.truth_(cljs.core.get.call(null,conns_results,conn))?cljs.core.PersistentArrayMap.createAsIfByAssoc([db_id,posh.lib.db.generate_initial_db.call(null,dcfg,conn,cljs.core.get.call(null,filters,db_id),new cljs.core.Keyword(null,"db-after","db-after",-571884666).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,conns_results,conn)))]):cljs.core.PersistentArrayMap.createAsIfByAssoc([db_id,cljs.core.get.call(null,dbs,db_id)])));

var G__24946 = (i__24934 + (1));
i__24934 = G__24946;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24935),posh$core$after_transact_$_iter__24932.call(null,cljs.core.chunk_rest.call(null,s__24933__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24935),null);
}
} else {
var vec__24939 = cljs.core.first.call(null,s__24933__$2);
var db_id = cljs.core.nth.call(null,vec__24939,(0),null);
var conn = cljs.core.nth.call(null,vec__24939,(1),null);
return cljs.core.cons.call(null,(cljs.core.truth_(cljs.core.get.call(null,conns_results,conn))?cljs.core.PersistentArrayMap.createAsIfByAssoc([db_id,posh.lib.db.generate_initial_db.call(null,dcfg,conn,cljs.core.get.call(null,filters,db_id),new cljs.core.Keyword(null,"db-after","db-after",-571884666).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,conns_results,conn)))]):cljs.core.PersistentArrayMap.createAsIfByAssoc([db_id,cljs.core.get.call(null,dbs,db_id)])),posh$core$after_transact_$_iter__24932.call(null,cljs.core.rest.call(null,s__24933__$2)));
}
} else {
return null;
}
break;
}
});})(map__24930,map__24930__$1,posh_tree,conns,dcfg,dbs,filters,cache))
,null,null));
});})(map__24930,map__24930__$1,posh_tree,conns,dcfg,dbs,filters,cache))
;
return iter__4292__auto__.call(null,conns);
})());
var new_posh_tree = cljs.core.assoc.call(null,posh_tree,new cljs.core.Keyword(null,"dbs","dbs",1889628467),new_dbs);
var changed_cache = cljs.core.reduce.call(null,((function (new_dbs,new_posh_tree,map__24930,map__24930__$1,posh_tree,conns,dcfg,dbs,filters,cache){
return (function (changed,p__24942){
var vec__24943 = p__24942;
var db_id = cljs.core.nth.call(null,vec__24943,(0),null);
var conn = cljs.core.nth.call(null,vec__24943,(1),null);
return cljs.core.merge.call(null,changed,posh.core.cache_changes.call(null,new_posh_tree,db_id,new cljs.core.Keyword(null,"tx-data","tx-data",934159761).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,conns_results,conn)),changed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db","db",993250759),db_id], null)));
});})(new_dbs,new_posh_tree,map__24930,map__24930__$1,posh_tree,conns,dcfg,dbs,filters,cache))
,cljs.core.PersistentArrayMap.EMPTY,conns);
var really_changed = cljs.core.reduce_kv.call(null,((function (new_dbs,new_posh_tree,changed_cache,map__24930,map__24930__$1,posh_tree,conns,dcfg,dbs,filters,cache){
return (function (m,k,v){
if(cljs.core.not_EQ_.call(null,v,cljs.core.get.call(null,cache,k))){
return cljs.core.assoc.call(null,m,k,v);
} else {
return m;
}
});})(new_dbs,new_posh_tree,changed_cache,map__24930,map__24930__$1,posh_tree,conns,dcfg,dbs,filters,cache))
,cljs.core.PersistentArrayMap.EMPTY,changed_cache);
return cljs.core.merge.call(null,new_posh_tree,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cache","cache",-1237023054),cljs.core.merge.call(null,cache,really_changed),new cljs.core.Keyword(null,"changed","changed",570724917),really_changed], null));
});
posh.core.process_tx_BANG_ = (function posh$core$process_tx_BANG_(p__24947){
var map__24948 = p__24947;
var map__24948__$1 = ((((!((map__24948 == null)))?(((((map__24948.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24948.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24948):map__24948);
var posh_tree = map__24948__$1;
var dcfg = cljs.core.get.call(null,map__24948__$1,new cljs.core.Keyword(null,"dcfg","dcfg",-880371016));
var txs = cljs.core.get.call(null,map__24948__$1,new cljs.core.Keyword(null,"txs","txs",2056038378));
var conns_results = cljs.core.reduce_kv.call(null,((function (map__24948,map__24948__$1,posh_tree,dcfg,txs){
return (function (m,conn,tx){
return cljs.core.assoc.call(null,m,conn,new cljs.core.Keyword(null,"transact!","transact!",-822725810).cljs$core$IFn$_invoke$arity$1(dcfg).call(null,conn,tx));
});})(map__24948,map__24948__$1,posh_tree,dcfg,txs))
,cljs.core.PersistentArrayMap.EMPTY,txs);
return posh.core.after_transact.call(null,cljs.core.assoc.call(null,posh_tree,new cljs.core.Keyword(null,"txs","txs",2056038378),cljs.core.PersistentArrayMap.EMPTY),conns_results);
});

//# sourceMappingURL=core.js.map?rel=1530661631233
