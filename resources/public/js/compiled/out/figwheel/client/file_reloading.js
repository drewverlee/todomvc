// Compiled by ClojureScript 1.10.238 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__3922__auto__ = ((cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && ((((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string'))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372))));
if(or__3922__auto__){
return or__3922__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__3922__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
var or__3922__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__3922__auto____$1)){
return or__3922__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__37530_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__37530_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__37531 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__37532 = null;
var count__37533 = (0);
var i__37534 = (0);
while(true){
if((i__37534 < count__37533)){
var n = cljs.core._nth.call(null,chunk__37532,i__37534);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__37535 = seq__37531;
var G__37536 = chunk__37532;
var G__37537 = count__37533;
var G__37538 = (i__37534 + (1));
seq__37531 = G__37535;
chunk__37532 = G__37536;
count__37533 = G__37537;
i__37534 = G__37538;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__37531);
if(temp__4657__auto__){
var seq__37531__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37531__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__37531__$1);
var G__37539 = cljs.core.chunk_rest.call(null,seq__37531__$1);
var G__37540 = c__4319__auto__;
var G__37541 = cljs.core.count.call(null,c__4319__auto__);
var G__37542 = (0);
seq__37531 = G__37539;
chunk__37532 = G__37540;
count__37533 = G__37541;
i__37534 = G__37542;
continue;
} else {
var n = cljs.core.first.call(null,seq__37531__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__37543 = cljs.core.next.call(null,seq__37531__$1);
var G__37544 = null;
var G__37545 = (0);
var G__37546 = (0);
seq__37531 = G__37543;
chunk__37532 = G__37544;
count__37533 = G__37545;
i__37534 = G__37546;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.in_upper_level_QMARK_ = (function figwheel$client$file_reloading$in_upper_level_QMARK_(topo_state,current_depth,dep){
return cljs.core.some.call(null,(function (p__37547){
var vec__37548 = p__37547;
var _ = cljs.core.nth.call(null,vec__37548,(0),null);
var v = cljs.core.nth.call(null,vec__37548,(1),null);
var and__3911__auto__ = v;
if(cljs.core.truth_(and__3911__auto__)){
return v.call(null,dep);
} else {
return and__3911__auto__;
}
}),cljs.core.filter.call(null,(function (p__37551){
var vec__37552 = p__37551;
var k = cljs.core.nth.call(null,vec__37552,(0),null);
var v = cljs.core.nth.call(null,vec__37552,(1),null);
return (k > current_depth);
}),topo_state));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__37564_37572 = cljs.core.seq.call(null,deps);
var chunk__37565_37573 = null;
var count__37566_37574 = (0);
var i__37567_37575 = (0);
while(true){
if((i__37567_37575 < count__37566_37574)){
var dep_37576 = cljs.core._nth.call(null,chunk__37565_37573,i__37567_37575);
if(cljs.core.truth_((function (){var and__3911__auto__ = dep_37576;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_37576));
} else {
return and__3911__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_37576,(depth + (1)),state);
} else {
}


var G__37577 = seq__37564_37572;
var G__37578 = chunk__37565_37573;
var G__37579 = count__37566_37574;
var G__37580 = (i__37567_37575 + (1));
seq__37564_37572 = G__37577;
chunk__37565_37573 = G__37578;
count__37566_37574 = G__37579;
i__37567_37575 = G__37580;
continue;
} else {
var temp__4657__auto___37581 = cljs.core.seq.call(null,seq__37564_37572);
if(temp__4657__auto___37581){
var seq__37564_37582__$1 = temp__4657__auto___37581;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37564_37582__$1)){
var c__4319__auto___37583 = cljs.core.chunk_first.call(null,seq__37564_37582__$1);
var G__37584 = cljs.core.chunk_rest.call(null,seq__37564_37582__$1);
var G__37585 = c__4319__auto___37583;
var G__37586 = cljs.core.count.call(null,c__4319__auto___37583);
var G__37587 = (0);
seq__37564_37572 = G__37584;
chunk__37565_37573 = G__37585;
count__37566_37574 = G__37586;
i__37567_37575 = G__37587;
continue;
} else {
var dep_37588 = cljs.core.first.call(null,seq__37564_37582__$1);
if(cljs.core.truth_((function (){var and__3911__auto__ = dep_37588;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_37588));
} else {
return and__3911__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_37588,(depth + (1)),state);
} else {
}


var G__37589 = cljs.core.next.call(null,seq__37564_37582__$1);
var G__37590 = null;
var G__37591 = (0);
var G__37592 = (0);
seq__37564_37572 = G__37589;
chunk__37565_37573 = G__37590;
count__37566_37574 = G__37591;
i__37567_37575 = G__37592;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__37568){
var vec__37569 = p__37568;
var seq__37570 = cljs.core.seq.call(null,vec__37569);
var first__37571 = cljs.core.first.call(null,seq__37570);
var seq__37570__$1 = cljs.core.next.call(null,seq__37570);
var x = first__37571;
var xs = seq__37570__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__37569,seq__37570,first__37571,seq__37570__$1,x,xs,get_deps__$1){
return (function (p1__37555_SHARP_){
return clojure.set.difference.call(null,p1__37555_SHARP_,x);
});})(vec__37569,seq__37570,first__37571,seq__37570__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__37593 = cljs.core.seq.call(null,provides);
var chunk__37594 = null;
var count__37595 = (0);
var i__37596 = (0);
while(true){
if((i__37596 < count__37595)){
var prov = cljs.core._nth.call(null,chunk__37594,i__37596);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__37597_37605 = cljs.core.seq.call(null,requires);
var chunk__37598_37606 = null;
var count__37599_37607 = (0);
var i__37600_37608 = (0);
while(true){
if((i__37600_37608 < count__37599_37607)){
var req_37609 = cljs.core._nth.call(null,chunk__37598_37606,i__37600_37608);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_37609,prov);


var G__37610 = seq__37597_37605;
var G__37611 = chunk__37598_37606;
var G__37612 = count__37599_37607;
var G__37613 = (i__37600_37608 + (1));
seq__37597_37605 = G__37610;
chunk__37598_37606 = G__37611;
count__37599_37607 = G__37612;
i__37600_37608 = G__37613;
continue;
} else {
var temp__4657__auto___37614 = cljs.core.seq.call(null,seq__37597_37605);
if(temp__4657__auto___37614){
var seq__37597_37615__$1 = temp__4657__auto___37614;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37597_37615__$1)){
var c__4319__auto___37616 = cljs.core.chunk_first.call(null,seq__37597_37615__$1);
var G__37617 = cljs.core.chunk_rest.call(null,seq__37597_37615__$1);
var G__37618 = c__4319__auto___37616;
var G__37619 = cljs.core.count.call(null,c__4319__auto___37616);
var G__37620 = (0);
seq__37597_37605 = G__37617;
chunk__37598_37606 = G__37618;
count__37599_37607 = G__37619;
i__37600_37608 = G__37620;
continue;
} else {
var req_37621 = cljs.core.first.call(null,seq__37597_37615__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_37621,prov);


var G__37622 = cljs.core.next.call(null,seq__37597_37615__$1);
var G__37623 = null;
var G__37624 = (0);
var G__37625 = (0);
seq__37597_37605 = G__37622;
chunk__37598_37606 = G__37623;
count__37599_37607 = G__37624;
i__37600_37608 = G__37625;
continue;
}
} else {
}
}
break;
}


var G__37626 = seq__37593;
var G__37627 = chunk__37594;
var G__37628 = count__37595;
var G__37629 = (i__37596 + (1));
seq__37593 = G__37626;
chunk__37594 = G__37627;
count__37595 = G__37628;
i__37596 = G__37629;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__37593);
if(temp__4657__auto__){
var seq__37593__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37593__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__37593__$1);
var G__37630 = cljs.core.chunk_rest.call(null,seq__37593__$1);
var G__37631 = c__4319__auto__;
var G__37632 = cljs.core.count.call(null,c__4319__auto__);
var G__37633 = (0);
seq__37593 = G__37630;
chunk__37594 = G__37631;
count__37595 = G__37632;
i__37596 = G__37633;
continue;
} else {
var prov = cljs.core.first.call(null,seq__37593__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__37601_37634 = cljs.core.seq.call(null,requires);
var chunk__37602_37635 = null;
var count__37603_37636 = (0);
var i__37604_37637 = (0);
while(true){
if((i__37604_37637 < count__37603_37636)){
var req_37638 = cljs.core._nth.call(null,chunk__37602_37635,i__37604_37637);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_37638,prov);


var G__37639 = seq__37601_37634;
var G__37640 = chunk__37602_37635;
var G__37641 = count__37603_37636;
var G__37642 = (i__37604_37637 + (1));
seq__37601_37634 = G__37639;
chunk__37602_37635 = G__37640;
count__37603_37636 = G__37641;
i__37604_37637 = G__37642;
continue;
} else {
var temp__4657__auto___37643__$1 = cljs.core.seq.call(null,seq__37601_37634);
if(temp__4657__auto___37643__$1){
var seq__37601_37644__$1 = temp__4657__auto___37643__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37601_37644__$1)){
var c__4319__auto___37645 = cljs.core.chunk_first.call(null,seq__37601_37644__$1);
var G__37646 = cljs.core.chunk_rest.call(null,seq__37601_37644__$1);
var G__37647 = c__4319__auto___37645;
var G__37648 = cljs.core.count.call(null,c__4319__auto___37645);
var G__37649 = (0);
seq__37601_37634 = G__37646;
chunk__37602_37635 = G__37647;
count__37603_37636 = G__37648;
i__37604_37637 = G__37649;
continue;
} else {
var req_37650 = cljs.core.first.call(null,seq__37601_37644__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_37650,prov);


var G__37651 = cljs.core.next.call(null,seq__37601_37644__$1);
var G__37652 = null;
var G__37653 = (0);
var G__37654 = (0);
seq__37601_37634 = G__37651;
chunk__37602_37635 = G__37652;
count__37603_37636 = G__37653;
i__37604_37637 = G__37654;
continue;
}
} else {
}
}
break;
}


var G__37655 = cljs.core.next.call(null,seq__37593__$1);
var G__37656 = null;
var G__37657 = (0);
var G__37658 = (0);
seq__37593 = G__37655;
chunk__37594 = G__37656;
count__37595 = G__37657;
i__37596 = G__37658;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__37659_37663 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__37660_37664 = null;
var count__37661_37665 = (0);
var i__37662_37666 = (0);
while(true){
if((i__37662_37666 < count__37661_37665)){
var ns_37667 = cljs.core._nth.call(null,chunk__37660_37664,i__37662_37666);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_37667);


var G__37668 = seq__37659_37663;
var G__37669 = chunk__37660_37664;
var G__37670 = count__37661_37665;
var G__37671 = (i__37662_37666 + (1));
seq__37659_37663 = G__37668;
chunk__37660_37664 = G__37669;
count__37661_37665 = G__37670;
i__37662_37666 = G__37671;
continue;
} else {
var temp__4657__auto___37672 = cljs.core.seq.call(null,seq__37659_37663);
if(temp__4657__auto___37672){
var seq__37659_37673__$1 = temp__4657__auto___37672;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37659_37673__$1)){
var c__4319__auto___37674 = cljs.core.chunk_first.call(null,seq__37659_37673__$1);
var G__37675 = cljs.core.chunk_rest.call(null,seq__37659_37673__$1);
var G__37676 = c__4319__auto___37674;
var G__37677 = cljs.core.count.call(null,c__4319__auto___37674);
var G__37678 = (0);
seq__37659_37663 = G__37675;
chunk__37660_37664 = G__37676;
count__37661_37665 = G__37677;
i__37662_37666 = G__37678;
continue;
} else {
var ns_37679 = cljs.core.first.call(null,seq__37659_37673__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_37679);


var G__37680 = cljs.core.next.call(null,seq__37659_37673__$1);
var G__37681 = null;
var G__37682 = (0);
var G__37683 = (0);
seq__37659_37663 = G__37680;
chunk__37660_37664 = G__37681;
count__37661_37665 = G__37682;
i__37662_37666 = G__37683;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__3922__auto__ = goog.require__;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__37684__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__37684 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37685__i = 0, G__37685__a = new Array(arguments.length -  0);
while (G__37685__i < G__37685__a.length) {G__37685__a[G__37685__i] = arguments[G__37685__i + 0]; ++G__37685__i;}
  args = new cljs.core.IndexedSeq(G__37685__a,0,null);
} 
return G__37684__delegate.call(this,args);};
G__37684.cljs$lang$maxFixedArity = 0;
G__37684.cljs$lang$applyTo = (function (arglist__37686){
var args = cljs.core.seq(arglist__37686);
return G__37684__delegate(args);
});
G__37684.cljs$core$IFn$_invoke$arity$variadic = G__37684__delegate;
return G__37684;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__37687_SHARP_,p2__37688_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__37687_SHARP_)].join('')),p2__37688_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__37689_SHARP_,p2__37690_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__37689_SHARP_)].join(''),p2__37690_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__37691 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__37691.addCallback(((function (G__37691){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__37691))
);

G__37691.addErrback(((function (G__37691){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__37691))
);

return G__37691;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e37692){if((e37692 instanceof Error)){
var e = e37692;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e37692;

}
}})());
});
goog.exportSymbol('figwheel.client.file_reloading.worker_import_script', figwheel.client.file_reloading.worker_import_script);
figwheel.client.file_reloading.create_node_script_import_fn = (function figwheel$client$file_reloading$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e37693){if((e37693 instanceof Error)){
var e = e37693;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e37693;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__37694 = cljs.core._EQ_;
var expr__37695 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__37694.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__37695))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__37694.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__37695))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__37694.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__37695))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__37694,expr__37695){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__37694,expr__37695))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__37697,callback){
var map__37698 = p__37697;
var map__37698__$1 = ((((!((map__37698 == null)))?(((((map__37698.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37698.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37698):map__37698);
var file_msg = map__37698__$1;
var request_url = cljs.core.get.call(null,map__37698__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__3922__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__37698,map__37698__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__37698,map__37698__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__35537__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35537__auto__){
return (function (){
var f__35538__auto__ = (function (){var switch__35449__auto__ = ((function (c__35537__auto__){
return (function (state_37736){
var state_val_37737 = (state_37736[(1)]);
if((state_val_37737 === (7))){
var inst_37732 = (state_37736[(2)]);
var state_37736__$1 = state_37736;
var statearr_37738_37764 = state_37736__$1;
(statearr_37738_37764[(2)] = inst_37732);

(statearr_37738_37764[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37737 === (1))){
var state_37736__$1 = state_37736;
var statearr_37739_37765 = state_37736__$1;
(statearr_37739_37765[(2)] = null);

(statearr_37739_37765[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37737 === (4))){
var inst_37702 = (state_37736[(7)]);
var inst_37702__$1 = (state_37736[(2)]);
var state_37736__$1 = (function (){var statearr_37740 = state_37736;
(statearr_37740[(7)] = inst_37702__$1);

return statearr_37740;
})();
if(cljs.core.truth_(inst_37702__$1)){
var statearr_37741_37766 = state_37736__$1;
(statearr_37741_37766[(1)] = (5));

} else {
var statearr_37742_37767 = state_37736__$1;
(statearr_37742_37767[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37737 === (15))){
var inst_37717 = (state_37736[(8)]);
var inst_37715 = (state_37736[(9)]);
var inst_37719 = inst_37717.call(null,inst_37715);
var state_37736__$1 = state_37736;
var statearr_37743_37768 = state_37736__$1;
(statearr_37743_37768[(2)] = inst_37719);

(statearr_37743_37768[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37737 === (13))){
var inst_37726 = (state_37736[(2)]);
var state_37736__$1 = state_37736;
var statearr_37744_37769 = state_37736__$1;
(statearr_37744_37769[(2)] = inst_37726);

(statearr_37744_37769[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37737 === (6))){
var state_37736__$1 = state_37736;
var statearr_37745_37770 = state_37736__$1;
(statearr_37745_37770[(2)] = null);

(statearr_37745_37770[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37737 === (17))){
var inst_37723 = (state_37736[(2)]);
var state_37736__$1 = state_37736;
var statearr_37746_37771 = state_37736__$1;
(statearr_37746_37771[(2)] = inst_37723);

(statearr_37746_37771[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37737 === (3))){
var inst_37734 = (state_37736[(2)]);
var state_37736__$1 = state_37736;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37736__$1,inst_37734);
} else {
if((state_val_37737 === (12))){
var state_37736__$1 = state_37736;
var statearr_37747_37772 = state_37736__$1;
(statearr_37747_37772[(2)] = null);

(statearr_37747_37772[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37737 === (2))){
var state_37736__$1 = state_37736;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37736__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_37737 === (11))){
var inst_37707 = (state_37736[(10)]);
var inst_37713 = figwheel.client.file_reloading.blocking_load.call(null,inst_37707);
var state_37736__$1 = state_37736;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37736__$1,(14),inst_37713);
} else {
if((state_val_37737 === (9))){
var inst_37707 = (state_37736[(10)]);
var state_37736__$1 = state_37736;
if(cljs.core.truth_(inst_37707)){
var statearr_37748_37773 = state_37736__$1;
(statearr_37748_37773[(1)] = (11));

} else {
var statearr_37749_37774 = state_37736__$1;
(statearr_37749_37774[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37737 === (5))){
var inst_37708 = (state_37736[(11)]);
var inst_37702 = (state_37736[(7)]);
var inst_37707 = cljs.core.nth.call(null,inst_37702,(0),null);
var inst_37708__$1 = cljs.core.nth.call(null,inst_37702,(1),null);
var state_37736__$1 = (function (){var statearr_37750 = state_37736;
(statearr_37750[(11)] = inst_37708__$1);

(statearr_37750[(10)] = inst_37707);

return statearr_37750;
})();
if(cljs.core.truth_(inst_37708__$1)){
var statearr_37751_37775 = state_37736__$1;
(statearr_37751_37775[(1)] = (8));

} else {
var statearr_37752_37776 = state_37736__$1;
(statearr_37752_37776[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37737 === (14))){
var inst_37717 = (state_37736[(8)]);
var inst_37707 = (state_37736[(10)]);
var inst_37715 = (state_37736[(2)]);
var inst_37716 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_37717__$1 = cljs.core.get.call(null,inst_37716,inst_37707);
var state_37736__$1 = (function (){var statearr_37753 = state_37736;
(statearr_37753[(8)] = inst_37717__$1);

(statearr_37753[(9)] = inst_37715);

return statearr_37753;
})();
if(cljs.core.truth_(inst_37717__$1)){
var statearr_37754_37777 = state_37736__$1;
(statearr_37754_37777[(1)] = (15));

} else {
var statearr_37755_37778 = state_37736__$1;
(statearr_37755_37778[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37737 === (16))){
var inst_37715 = (state_37736[(9)]);
var inst_37721 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_37715);
var state_37736__$1 = state_37736;
var statearr_37756_37779 = state_37736__$1;
(statearr_37756_37779[(2)] = inst_37721);

(statearr_37756_37779[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37737 === (10))){
var inst_37728 = (state_37736[(2)]);
var state_37736__$1 = (function (){var statearr_37757 = state_37736;
(statearr_37757[(12)] = inst_37728);

return statearr_37757;
})();
var statearr_37758_37780 = state_37736__$1;
(statearr_37758_37780[(2)] = null);

(statearr_37758_37780[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37737 === (8))){
var inst_37708 = (state_37736[(11)]);
var inst_37710 = eval(inst_37708);
var state_37736__$1 = state_37736;
var statearr_37759_37781 = state_37736__$1;
(statearr_37759_37781[(2)] = inst_37710);

(statearr_37759_37781[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__35537__auto__))
;
return ((function (switch__35449__auto__,c__35537__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__35450__auto__ = null;
var figwheel$client$file_reloading$state_machine__35450__auto____0 = (function (){
var statearr_37760 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37760[(0)] = figwheel$client$file_reloading$state_machine__35450__auto__);

(statearr_37760[(1)] = (1));

return statearr_37760;
});
var figwheel$client$file_reloading$state_machine__35450__auto____1 = (function (state_37736){
while(true){
var ret_value__35451__auto__ = (function (){try{while(true){
var result__35452__auto__ = switch__35449__auto__.call(null,state_37736);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35452__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35452__auto__;
}
break;
}
}catch (e37761){if((e37761 instanceof Object)){
var ex__35453__auto__ = e37761;
var statearr_37762_37782 = state_37736;
(statearr_37762_37782[(5)] = ex__35453__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37736);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37761;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35451__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37783 = state_37736;
state_37736 = G__37783;
continue;
} else {
return ret_value__35451__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__35450__auto__ = function(state_37736){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__35450__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__35450__auto____1.call(this,state_37736);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__35450__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__35450__auto____0;
figwheel$client$file_reloading$state_machine__35450__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__35450__auto____1;
return figwheel$client$file_reloading$state_machine__35450__auto__;
})()
;})(switch__35449__auto__,c__35537__auto__))
})();
var state__35539__auto__ = (function (){var statearr_37763 = f__35538__auto__.call(null);
(statearr_37763[(6)] = c__35537__auto__);

return statearr_37763;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35539__auto__);
});})(c__35537__auto__))
);

return c__35537__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__37785 = arguments.length;
switch (G__37785) {
case 1:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
});

figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__37787,callback){
var map__37788 = p__37787;
var map__37788__$1 = ((((!((map__37788 == null)))?(((((map__37788.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37788.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37788):map__37788);
var file_msg = map__37788__$1;
var namespace = cljs.core.get.call(null,map__37788__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__37788,map__37788__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__37788,map__37788__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__37790){
var map__37791 = p__37790;
var map__37791__$1 = ((((!((map__37791 == null)))?(((((map__37791.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37791.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37791):map__37791);
var file_msg = map__37791__$1;
var namespace = cljs.core.get.call(null,map__37791__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return !((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__37793){
var map__37794 = p__37793;
var map__37794__$1 = ((((!((map__37794 == null)))?(((((map__37794.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37794.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37794):map__37794);
var file_msg = map__37794__$1;
var namespace = cljs.core.get.call(null,map__37794__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__3911__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__3911__auto__){
var or__3922__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
var or__3922__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__3922__auto____$1)){
return or__3922__auto____$1;
} else {
var or__3922__auto____$2 = figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
if(cljs.core.truth_(or__3922__auto____$2)){
return or__3922__auto____$2;
} else {
return figwheel.client.file_reloading.ns_exists_QMARK_.call(null,namespace);
}
}
}
} else {
return and__3911__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__37796,callback){
var map__37797 = p__37796;
var map__37797__$1 = ((((!((map__37797 == null)))?(((((map__37797.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37797.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37797):map__37797);
var file_msg = map__37797__$1;
var request_url = cljs.core.get.call(null,map__37797__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__37797__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__35537__auto___37847 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35537__auto___37847,out){
return (function (){
var f__35538__auto__ = (function (){var switch__35449__auto__ = ((function (c__35537__auto___37847,out){
return (function (state_37832){
var state_val_37833 = (state_37832[(1)]);
if((state_val_37833 === (1))){
var inst_37806 = cljs.core.seq.call(null,files);
var inst_37807 = cljs.core.first.call(null,inst_37806);
var inst_37808 = cljs.core.next.call(null,inst_37806);
var inst_37809 = files;
var state_37832__$1 = (function (){var statearr_37834 = state_37832;
(statearr_37834[(7)] = inst_37809);

(statearr_37834[(8)] = inst_37807);

(statearr_37834[(9)] = inst_37808);

return statearr_37834;
})();
var statearr_37835_37848 = state_37832__$1;
(statearr_37835_37848[(2)] = null);

(statearr_37835_37848[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37833 === (2))){
var inst_37809 = (state_37832[(7)]);
var inst_37815 = (state_37832[(10)]);
var inst_37814 = cljs.core.seq.call(null,inst_37809);
var inst_37815__$1 = cljs.core.first.call(null,inst_37814);
var inst_37816 = cljs.core.next.call(null,inst_37814);
var inst_37817 = (inst_37815__$1 == null);
var inst_37818 = cljs.core.not.call(null,inst_37817);
var state_37832__$1 = (function (){var statearr_37836 = state_37832;
(statearr_37836[(11)] = inst_37816);

(statearr_37836[(10)] = inst_37815__$1);

return statearr_37836;
})();
if(inst_37818){
var statearr_37837_37849 = state_37832__$1;
(statearr_37837_37849[(1)] = (4));

} else {
var statearr_37838_37850 = state_37832__$1;
(statearr_37838_37850[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37833 === (3))){
var inst_37830 = (state_37832[(2)]);
var state_37832__$1 = state_37832;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37832__$1,inst_37830);
} else {
if((state_val_37833 === (4))){
var inst_37815 = (state_37832[(10)]);
var inst_37820 = figwheel.client.file_reloading.reload_js_file.call(null,inst_37815);
var state_37832__$1 = state_37832;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37832__$1,(7),inst_37820);
} else {
if((state_val_37833 === (5))){
var inst_37826 = cljs.core.async.close_BANG_.call(null,out);
var state_37832__$1 = state_37832;
var statearr_37839_37851 = state_37832__$1;
(statearr_37839_37851[(2)] = inst_37826);

(statearr_37839_37851[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37833 === (6))){
var inst_37828 = (state_37832[(2)]);
var state_37832__$1 = state_37832;
var statearr_37840_37852 = state_37832__$1;
(statearr_37840_37852[(2)] = inst_37828);

(statearr_37840_37852[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37833 === (7))){
var inst_37816 = (state_37832[(11)]);
var inst_37822 = (state_37832[(2)]);
var inst_37823 = cljs.core.async.put_BANG_.call(null,out,inst_37822);
var inst_37809 = inst_37816;
var state_37832__$1 = (function (){var statearr_37841 = state_37832;
(statearr_37841[(7)] = inst_37809);

(statearr_37841[(12)] = inst_37823);

return statearr_37841;
})();
var statearr_37842_37853 = state_37832__$1;
(statearr_37842_37853[(2)] = null);

(statearr_37842_37853[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__35537__auto___37847,out))
;
return ((function (switch__35449__auto__,c__35537__auto___37847,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__35450__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__35450__auto____0 = (function (){
var statearr_37843 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37843[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__35450__auto__);

(statearr_37843[(1)] = (1));

return statearr_37843;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__35450__auto____1 = (function (state_37832){
while(true){
var ret_value__35451__auto__ = (function (){try{while(true){
var result__35452__auto__ = switch__35449__auto__.call(null,state_37832);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35452__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35452__auto__;
}
break;
}
}catch (e37844){if((e37844 instanceof Object)){
var ex__35453__auto__ = e37844;
var statearr_37845_37854 = state_37832;
(statearr_37845_37854[(5)] = ex__35453__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37832);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37844;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35451__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37855 = state_37832;
state_37832 = G__37855;
continue;
} else {
return ret_value__35451__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__35450__auto__ = function(state_37832){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__35450__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__35450__auto____1.call(this,state_37832);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__35450__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__35450__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__35450__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__35450__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__35450__auto__;
})()
;})(switch__35449__auto__,c__35537__auto___37847,out))
})();
var state__35539__auto__ = (function (){var statearr_37846 = f__35538__auto__.call(null);
(statearr_37846[(6)] = c__35537__auto___37847);

return statearr_37846;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35539__auto__);
});})(c__35537__auto___37847,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__37856,opts){
var map__37857 = p__37856;
var map__37857__$1 = ((((!((map__37857 == null)))?(((((map__37857.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37857.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37857):map__37857);
var eval_body = cljs.core.get.call(null,map__37857__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__37857__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__3911__auto__ = eval_body;
if(cljs.core.truth_(and__3911__auto__)){
return typeof eval_body === 'string';
} else {
return and__3911__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e37859){var e = e37859;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__37860_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__37860_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__37861){
var vec__37862 = p__37861;
var k = cljs.core.nth.call(null,vec__37862,(0),null);
var v = cljs.core.nth.call(null,vec__37862,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__37865){
var vec__37866 = p__37865;
var k = cljs.core.nth.call(null,vec__37866,(0),null);
var v = cljs.core.nth.call(null,vec__37866,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__37872,p__37873){
var map__37874 = p__37872;
var map__37874__$1 = ((((!((map__37874 == null)))?(((((map__37874.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37874.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37874):map__37874);
var opts = map__37874__$1;
var before_jsload = cljs.core.get.call(null,map__37874__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__37874__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__37874__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__37875 = p__37873;
var map__37875__$1 = ((((!((map__37875 == null)))?(((((map__37875.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37875.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37875):map__37875);
var msg = map__37875__$1;
var files = cljs.core.get.call(null,map__37875__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__37875__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__37875__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__35537__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35537__auto__,map__37874,map__37874__$1,opts,before_jsload,on_jsload,reload_dependents,map__37875,map__37875__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__35538__auto__ = (function (){var switch__35449__auto__ = ((function (c__35537__auto__,map__37874,map__37874__$1,opts,before_jsload,on_jsload,reload_dependents,map__37875,map__37875__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_38029){
var state_val_38030 = (state_38029[(1)]);
if((state_val_38030 === (7))){
var inst_37892 = (state_38029[(7)]);
var inst_37889 = (state_38029[(8)]);
var inst_37891 = (state_38029[(9)]);
var inst_37890 = (state_38029[(10)]);
var inst_37897 = cljs.core._nth.call(null,inst_37890,inst_37892);
var inst_37898 = figwheel.client.file_reloading.eval_body.call(null,inst_37897,opts);
var inst_37899 = (inst_37892 + (1));
var tmp38031 = inst_37889;
var tmp38032 = inst_37891;
var tmp38033 = inst_37890;
var inst_37889__$1 = tmp38031;
var inst_37890__$1 = tmp38033;
var inst_37891__$1 = tmp38032;
var inst_37892__$1 = inst_37899;
var state_38029__$1 = (function (){var statearr_38034 = state_38029;
(statearr_38034[(7)] = inst_37892__$1);

(statearr_38034[(11)] = inst_37898);

(statearr_38034[(8)] = inst_37889__$1);

(statearr_38034[(9)] = inst_37891__$1);

(statearr_38034[(10)] = inst_37890__$1);

return statearr_38034;
})();
var statearr_38035_38118 = state_38029__$1;
(statearr_38035_38118[(2)] = null);

(statearr_38035_38118[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38030 === (20))){
var inst_37932 = (state_38029[(12)]);
var inst_37940 = figwheel.client.file_reloading.sort_files.call(null,inst_37932);
var state_38029__$1 = state_38029;
var statearr_38036_38119 = state_38029__$1;
(statearr_38036_38119[(2)] = inst_37940);

(statearr_38036_38119[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38030 === (27))){
var state_38029__$1 = state_38029;
var statearr_38037_38120 = state_38029__$1;
(statearr_38037_38120[(2)] = null);

(statearr_38037_38120[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38030 === (1))){
var inst_37881 = (state_38029[(13)]);
var inst_37878 = before_jsload.call(null,files);
var inst_37879 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_37880 = (function (){return ((function (inst_37881,inst_37878,inst_37879,state_val_38030,c__35537__auto__,map__37874,map__37874__$1,opts,before_jsload,on_jsload,reload_dependents,map__37875,map__37875__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__37869_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__37869_SHARP_);
});
;})(inst_37881,inst_37878,inst_37879,state_val_38030,c__35537__auto__,map__37874,map__37874__$1,opts,before_jsload,on_jsload,reload_dependents,map__37875,map__37875__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37881__$1 = cljs.core.filter.call(null,inst_37880,files);
var inst_37882 = cljs.core.not_empty.call(null,inst_37881__$1);
var state_38029__$1 = (function (){var statearr_38038 = state_38029;
(statearr_38038[(13)] = inst_37881__$1);

(statearr_38038[(14)] = inst_37879);

(statearr_38038[(15)] = inst_37878);

return statearr_38038;
})();
if(cljs.core.truth_(inst_37882)){
var statearr_38039_38121 = state_38029__$1;
(statearr_38039_38121[(1)] = (2));

} else {
var statearr_38040_38122 = state_38029__$1;
(statearr_38040_38122[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38030 === (24))){
var state_38029__$1 = state_38029;
var statearr_38041_38123 = state_38029__$1;
(statearr_38041_38123[(2)] = null);

(statearr_38041_38123[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38030 === (39))){
var inst_37982 = (state_38029[(16)]);
var state_38029__$1 = state_38029;
var statearr_38042_38124 = state_38029__$1;
(statearr_38042_38124[(2)] = inst_37982);

(statearr_38042_38124[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38030 === (46))){
var inst_38024 = (state_38029[(2)]);
var state_38029__$1 = state_38029;
var statearr_38043_38125 = state_38029__$1;
(statearr_38043_38125[(2)] = inst_38024);

(statearr_38043_38125[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38030 === (4))){
var inst_37926 = (state_38029[(2)]);
var inst_37927 = cljs.core.List.EMPTY;
var inst_37928 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_37927);
var inst_37929 = (function (){return ((function (inst_37926,inst_37927,inst_37928,state_val_38030,c__35537__auto__,map__37874,map__37874__$1,opts,before_jsload,on_jsload,reload_dependents,map__37875,map__37875__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__37870_SHARP_){
var and__3911__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__37870_SHARP_);
if(cljs.core.truth_(and__3911__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__37870_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__37870_SHARP_))));
} else {
return and__3911__auto__;
}
});
;})(inst_37926,inst_37927,inst_37928,state_val_38030,c__35537__auto__,map__37874,map__37874__$1,opts,before_jsload,on_jsload,reload_dependents,map__37875,map__37875__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37930 = cljs.core.filter.call(null,inst_37929,files);
var inst_37931 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_37932 = cljs.core.concat.call(null,inst_37930,inst_37931);
var state_38029__$1 = (function (){var statearr_38044 = state_38029;
(statearr_38044[(17)] = inst_37928);

(statearr_38044[(18)] = inst_37926);

(statearr_38044[(12)] = inst_37932);

return statearr_38044;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_38045_38126 = state_38029__$1;
(statearr_38045_38126[(1)] = (16));

} else {
var statearr_38046_38127 = state_38029__$1;
(statearr_38046_38127[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38030 === (15))){
var inst_37916 = (state_38029[(2)]);
var state_38029__$1 = state_38029;
var statearr_38047_38128 = state_38029__$1;
(statearr_38047_38128[(2)] = inst_37916);

(statearr_38047_38128[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38030 === (21))){
var inst_37942 = (state_38029[(19)]);
var inst_37942__$1 = (state_38029[(2)]);
var inst_37943 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_37942__$1);
var state_38029__$1 = (function (){var statearr_38048 = state_38029;
(statearr_38048[(19)] = inst_37942__$1);

return statearr_38048;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38029__$1,(22),inst_37943);
} else {
if((state_val_38030 === (31))){
var inst_38027 = (state_38029[(2)]);
var state_38029__$1 = state_38029;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38029__$1,inst_38027);
} else {
if((state_val_38030 === (32))){
var inst_37982 = (state_38029[(16)]);
var inst_37987 = inst_37982.cljs$lang$protocol_mask$partition0$;
var inst_37988 = (inst_37987 & (64));
var inst_37989 = inst_37982.cljs$core$ISeq$;
var inst_37990 = (cljs.core.PROTOCOL_SENTINEL === inst_37989);
var inst_37991 = ((inst_37988) || (inst_37990));
var state_38029__$1 = state_38029;
if(cljs.core.truth_(inst_37991)){
var statearr_38049_38129 = state_38029__$1;
(statearr_38049_38129[(1)] = (35));

} else {
var statearr_38050_38130 = state_38029__$1;
(statearr_38050_38130[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38030 === (40))){
var inst_38004 = (state_38029[(20)]);
var inst_38003 = (state_38029[(2)]);
var inst_38004__$1 = cljs.core.get.call(null,inst_38003,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_38005 = cljs.core.get.call(null,inst_38003,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_38006 = cljs.core.not_empty.call(null,inst_38004__$1);
var state_38029__$1 = (function (){var statearr_38051 = state_38029;
(statearr_38051[(21)] = inst_38005);

(statearr_38051[(20)] = inst_38004__$1);

return statearr_38051;
})();
if(cljs.core.truth_(inst_38006)){
var statearr_38052_38131 = state_38029__$1;
(statearr_38052_38131[(1)] = (41));

} else {
var statearr_38053_38132 = state_38029__$1;
(statearr_38053_38132[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38030 === (33))){
var state_38029__$1 = state_38029;
var statearr_38054_38133 = state_38029__$1;
(statearr_38054_38133[(2)] = false);

(statearr_38054_38133[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38030 === (13))){
var inst_37902 = (state_38029[(22)]);
var inst_37906 = cljs.core.chunk_first.call(null,inst_37902);
var inst_37907 = cljs.core.chunk_rest.call(null,inst_37902);
var inst_37908 = cljs.core.count.call(null,inst_37906);
var inst_37889 = inst_37907;
var inst_37890 = inst_37906;
var inst_37891 = inst_37908;
var inst_37892 = (0);
var state_38029__$1 = (function (){var statearr_38055 = state_38029;
(statearr_38055[(7)] = inst_37892);

(statearr_38055[(8)] = inst_37889);

(statearr_38055[(9)] = inst_37891);

(statearr_38055[(10)] = inst_37890);

return statearr_38055;
})();
var statearr_38056_38134 = state_38029__$1;
(statearr_38056_38134[(2)] = null);

(statearr_38056_38134[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38030 === (22))){
var inst_37942 = (state_38029[(19)]);
var inst_37945 = (state_38029[(23)]);
var inst_37950 = (state_38029[(24)]);
var inst_37946 = (state_38029[(25)]);
var inst_37945__$1 = (state_38029[(2)]);
var inst_37946__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_37945__$1);
var inst_37947 = (function (){var all_files = inst_37942;
var res_SINGLEQUOTE_ = inst_37945__$1;
var res = inst_37946__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_37942,inst_37945,inst_37950,inst_37946,inst_37945__$1,inst_37946__$1,state_val_38030,c__35537__auto__,map__37874,map__37874__$1,opts,before_jsload,on_jsload,reload_dependents,map__37875,map__37875__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__37871_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__37871_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_37942,inst_37945,inst_37950,inst_37946,inst_37945__$1,inst_37946__$1,state_val_38030,c__35537__auto__,map__37874,map__37874__$1,opts,before_jsload,on_jsload,reload_dependents,map__37875,map__37875__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37948 = cljs.core.filter.call(null,inst_37947,inst_37945__$1);
var inst_37949 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_37950__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_37949);
var inst_37951 = cljs.core.not_empty.call(null,inst_37950__$1);
var state_38029__$1 = (function (){var statearr_38057 = state_38029;
(statearr_38057[(23)] = inst_37945__$1);

(statearr_38057[(24)] = inst_37950__$1);

(statearr_38057[(26)] = inst_37948);

(statearr_38057[(25)] = inst_37946__$1);

return statearr_38057;
})();
if(cljs.core.truth_(inst_37951)){
var statearr_38058_38135 = state_38029__$1;
(statearr_38058_38135[(1)] = (23));

} else {
var statearr_38059_38136 = state_38029__$1;
(statearr_38059_38136[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38030 === (36))){
var state_38029__$1 = state_38029;
var statearr_38060_38137 = state_38029__$1;
(statearr_38060_38137[(2)] = false);

(statearr_38060_38137[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38030 === (41))){
var inst_38004 = (state_38029[(20)]);
var inst_38008 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_38009 = cljs.core.map.call(null,inst_38008,inst_38004);
var inst_38010 = cljs.core.pr_str.call(null,inst_38009);
var inst_38011 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_38010)].join('');
var inst_38012 = figwheel.client.utils.log.call(null,inst_38011);
var state_38029__$1 = state_38029;
var statearr_38061_38138 = state_38029__$1;
(statearr_38061_38138[(2)] = inst_38012);

(statearr_38061_38138[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38030 === (43))){
var inst_38005 = (state_38029[(21)]);
var inst_38015 = (state_38029[(2)]);
var inst_38016 = cljs.core.not_empty.call(null,inst_38005);
var state_38029__$1 = (function (){var statearr_38062 = state_38029;
(statearr_38062[(27)] = inst_38015);

return statearr_38062;
})();
if(cljs.core.truth_(inst_38016)){
var statearr_38063_38139 = state_38029__$1;
(statearr_38063_38139[(1)] = (44));

} else {
var statearr_38064_38140 = state_38029__$1;
(statearr_38064_38140[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38030 === (29))){
var inst_37942 = (state_38029[(19)]);
var inst_37945 = (state_38029[(23)]);
var inst_37950 = (state_38029[(24)]);
var inst_37948 = (state_38029[(26)]);
var inst_37982 = (state_38029[(16)]);
var inst_37946 = (state_38029[(25)]);
var inst_37978 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_37981 = (function (){var all_files = inst_37942;
var res_SINGLEQUOTE_ = inst_37945;
var res = inst_37946;
var files_not_loaded = inst_37948;
var dependencies_that_loaded = inst_37950;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37942,inst_37945,inst_37950,inst_37948,inst_37982,inst_37946,inst_37978,state_val_38030,c__35537__auto__,map__37874,map__37874__$1,opts,before_jsload,on_jsload,reload_dependents,map__37875,map__37875__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__37980){
var map__38065 = p__37980;
var map__38065__$1 = ((((!((map__38065 == null)))?(((((map__38065.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38065.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38065):map__38065);
var namespace = cljs.core.get.call(null,map__38065__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37942,inst_37945,inst_37950,inst_37948,inst_37982,inst_37946,inst_37978,state_val_38030,c__35537__auto__,map__37874,map__37874__$1,opts,before_jsload,on_jsload,reload_dependents,map__37875,map__37875__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37982__$1 = cljs.core.group_by.call(null,inst_37981,inst_37948);
var inst_37984 = (inst_37982__$1 == null);
var inst_37985 = cljs.core.not.call(null,inst_37984);
var state_38029__$1 = (function (){var statearr_38067 = state_38029;
(statearr_38067[(28)] = inst_37978);

(statearr_38067[(16)] = inst_37982__$1);

return statearr_38067;
})();
if(inst_37985){
var statearr_38068_38141 = state_38029__$1;
(statearr_38068_38141[(1)] = (32));

} else {
var statearr_38069_38142 = state_38029__$1;
(statearr_38069_38142[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38030 === (44))){
var inst_38005 = (state_38029[(21)]);
var inst_38018 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_38005);
var inst_38019 = cljs.core.pr_str.call(null,inst_38018);
var inst_38020 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_38019)].join('');
var inst_38021 = figwheel.client.utils.log.call(null,inst_38020);
var state_38029__$1 = state_38029;
var statearr_38070_38143 = state_38029__$1;
(statearr_38070_38143[(2)] = inst_38021);

(statearr_38070_38143[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38030 === (6))){
var inst_37923 = (state_38029[(2)]);
var state_38029__$1 = state_38029;
var statearr_38071_38144 = state_38029__$1;
(statearr_38071_38144[(2)] = inst_37923);

(statearr_38071_38144[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38030 === (28))){
var inst_37948 = (state_38029[(26)]);
var inst_37975 = (state_38029[(2)]);
var inst_37976 = cljs.core.not_empty.call(null,inst_37948);
var state_38029__$1 = (function (){var statearr_38072 = state_38029;
(statearr_38072[(29)] = inst_37975);

return statearr_38072;
})();
if(cljs.core.truth_(inst_37976)){
var statearr_38073_38145 = state_38029__$1;
(statearr_38073_38145[(1)] = (29));

} else {
var statearr_38074_38146 = state_38029__$1;
(statearr_38074_38146[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38030 === (25))){
var inst_37946 = (state_38029[(25)]);
var inst_37962 = (state_38029[(2)]);
var inst_37963 = cljs.core.not_empty.call(null,inst_37946);
var state_38029__$1 = (function (){var statearr_38075 = state_38029;
(statearr_38075[(30)] = inst_37962);

return statearr_38075;
})();
if(cljs.core.truth_(inst_37963)){
var statearr_38076_38147 = state_38029__$1;
(statearr_38076_38147[(1)] = (26));

} else {
var statearr_38077_38148 = state_38029__$1;
(statearr_38077_38148[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38030 === (34))){
var inst_37998 = (state_38029[(2)]);
var state_38029__$1 = state_38029;
if(cljs.core.truth_(inst_37998)){
var statearr_38078_38149 = state_38029__$1;
(statearr_38078_38149[(1)] = (38));

} else {
var statearr_38079_38150 = state_38029__$1;
(statearr_38079_38150[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38030 === (17))){
var state_38029__$1 = state_38029;
var statearr_38080_38151 = state_38029__$1;
(statearr_38080_38151[(2)] = recompile_dependents);

(statearr_38080_38151[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38030 === (3))){
var state_38029__$1 = state_38029;
var statearr_38081_38152 = state_38029__$1;
(statearr_38081_38152[(2)] = null);

(statearr_38081_38152[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38030 === (12))){
var inst_37919 = (state_38029[(2)]);
var state_38029__$1 = state_38029;
var statearr_38082_38153 = state_38029__$1;
(statearr_38082_38153[(2)] = inst_37919);

(statearr_38082_38153[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38030 === (2))){
var inst_37881 = (state_38029[(13)]);
var inst_37888 = cljs.core.seq.call(null,inst_37881);
var inst_37889 = inst_37888;
var inst_37890 = null;
var inst_37891 = (0);
var inst_37892 = (0);
var state_38029__$1 = (function (){var statearr_38083 = state_38029;
(statearr_38083[(7)] = inst_37892);

(statearr_38083[(8)] = inst_37889);

(statearr_38083[(9)] = inst_37891);

(statearr_38083[(10)] = inst_37890);

return statearr_38083;
})();
var statearr_38084_38154 = state_38029__$1;
(statearr_38084_38154[(2)] = null);

(statearr_38084_38154[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38030 === (23))){
var inst_37942 = (state_38029[(19)]);
var inst_37945 = (state_38029[(23)]);
var inst_37950 = (state_38029[(24)]);
var inst_37948 = (state_38029[(26)]);
var inst_37946 = (state_38029[(25)]);
var inst_37953 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_37955 = (function (){var all_files = inst_37942;
var res_SINGLEQUOTE_ = inst_37945;
var res = inst_37946;
var files_not_loaded = inst_37948;
var dependencies_that_loaded = inst_37950;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37942,inst_37945,inst_37950,inst_37948,inst_37946,inst_37953,state_val_38030,c__35537__auto__,map__37874,map__37874__$1,opts,before_jsload,on_jsload,reload_dependents,map__37875,map__37875__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__37954){
var map__38085 = p__37954;
var map__38085__$1 = ((((!((map__38085 == null)))?(((((map__38085.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38085.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38085):map__38085);
var request_url = cljs.core.get.call(null,map__38085__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37942,inst_37945,inst_37950,inst_37948,inst_37946,inst_37953,state_val_38030,c__35537__auto__,map__37874,map__37874__$1,opts,before_jsload,on_jsload,reload_dependents,map__37875,map__37875__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37956 = cljs.core.reverse.call(null,inst_37950);
var inst_37957 = cljs.core.map.call(null,inst_37955,inst_37956);
var inst_37958 = cljs.core.pr_str.call(null,inst_37957);
var inst_37959 = figwheel.client.utils.log.call(null,inst_37958);
var state_38029__$1 = (function (){var statearr_38087 = state_38029;
(statearr_38087[(31)] = inst_37953);

return statearr_38087;
})();
var statearr_38088_38155 = state_38029__$1;
(statearr_38088_38155[(2)] = inst_37959);

(statearr_38088_38155[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38030 === (35))){
var state_38029__$1 = state_38029;
var statearr_38089_38156 = state_38029__$1;
(statearr_38089_38156[(2)] = true);

(statearr_38089_38156[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38030 === (19))){
var inst_37932 = (state_38029[(12)]);
var inst_37938 = figwheel.client.file_reloading.expand_files.call(null,inst_37932);
var state_38029__$1 = state_38029;
var statearr_38090_38157 = state_38029__$1;
(statearr_38090_38157[(2)] = inst_37938);

(statearr_38090_38157[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38030 === (11))){
var state_38029__$1 = state_38029;
var statearr_38091_38158 = state_38029__$1;
(statearr_38091_38158[(2)] = null);

(statearr_38091_38158[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38030 === (9))){
var inst_37921 = (state_38029[(2)]);
var state_38029__$1 = state_38029;
var statearr_38092_38159 = state_38029__$1;
(statearr_38092_38159[(2)] = inst_37921);

(statearr_38092_38159[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38030 === (5))){
var inst_37892 = (state_38029[(7)]);
var inst_37891 = (state_38029[(9)]);
var inst_37894 = (inst_37892 < inst_37891);
var inst_37895 = inst_37894;
var state_38029__$1 = state_38029;
if(cljs.core.truth_(inst_37895)){
var statearr_38093_38160 = state_38029__$1;
(statearr_38093_38160[(1)] = (7));

} else {
var statearr_38094_38161 = state_38029__$1;
(statearr_38094_38161[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38030 === (14))){
var inst_37902 = (state_38029[(22)]);
var inst_37911 = cljs.core.first.call(null,inst_37902);
var inst_37912 = figwheel.client.file_reloading.eval_body.call(null,inst_37911,opts);
var inst_37913 = cljs.core.next.call(null,inst_37902);
var inst_37889 = inst_37913;
var inst_37890 = null;
var inst_37891 = (0);
var inst_37892 = (0);
var state_38029__$1 = (function (){var statearr_38095 = state_38029;
(statearr_38095[(7)] = inst_37892);

(statearr_38095[(32)] = inst_37912);

(statearr_38095[(8)] = inst_37889);

(statearr_38095[(9)] = inst_37891);

(statearr_38095[(10)] = inst_37890);

return statearr_38095;
})();
var statearr_38096_38162 = state_38029__$1;
(statearr_38096_38162[(2)] = null);

(statearr_38096_38162[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38030 === (45))){
var state_38029__$1 = state_38029;
var statearr_38097_38163 = state_38029__$1;
(statearr_38097_38163[(2)] = null);

(statearr_38097_38163[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38030 === (26))){
var inst_37942 = (state_38029[(19)]);
var inst_37945 = (state_38029[(23)]);
var inst_37950 = (state_38029[(24)]);
var inst_37948 = (state_38029[(26)]);
var inst_37946 = (state_38029[(25)]);
var inst_37965 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_37967 = (function (){var all_files = inst_37942;
var res_SINGLEQUOTE_ = inst_37945;
var res = inst_37946;
var files_not_loaded = inst_37948;
var dependencies_that_loaded = inst_37950;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37942,inst_37945,inst_37950,inst_37948,inst_37946,inst_37965,state_val_38030,c__35537__auto__,map__37874,map__37874__$1,opts,before_jsload,on_jsload,reload_dependents,map__37875,map__37875__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__37966){
var map__38098 = p__37966;
var map__38098__$1 = ((((!((map__38098 == null)))?(((((map__38098.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38098.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38098):map__38098);
var namespace = cljs.core.get.call(null,map__38098__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__38098__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37942,inst_37945,inst_37950,inst_37948,inst_37946,inst_37965,state_val_38030,c__35537__auto__,map__37874,map__37874__$1,opts,before_jsload,on_jsload,reload_dependents,map__37875,map__37875__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37968 = cljs.core.map.call(null,inst_37967,inst_37946);
var inst_37969 = cljs.core.pr_str.call(null,inst_37968);
var inst_37970 = figwheel.client.utils.log.call(null,inst_37969);
var inst_37971 = (function (){var all_files = inst_37942;
var res_SINGLEQUOTE_ = inst_37945;
var res = inst_37946;
var files_not_loaded = inst_37948;
var dependencies_that_loaded = inst_37950;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37942,inst_37945,inst_37950,inst_37948,inst_37946,inst_37965,inst_37967,inst_37968,inst_37969,inst_37970,state_val_38030,c__35537__auto__,map__37874,map__37874__$1,opts,before_jsload,on_jsload,reload_dependents,map__37875,map__37875__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37942,inst_37945,inst_37950,inst_37948,inst_37946,inst_37965,inst_37967,inst_37968,inst_37969,inst_37970,state_val_38030,c__35537__auto__,map__37874,map__37874__$1,opts,before_jsload,on_jsload,reload_dependents,map__37875,map__37875__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37972 = setTimeout(inst_37971,(10));
var state_38029__$1 = (function (){var statearr_38100 = state_38029;
(statearr_38100[(33)] = inst_37965);

(statearr_38100[(34)] = inst_37970);

return statearr_38100;
})();
var statearr_38101_38164 = state_38029__$1;
(statearr_38101_38164[(2)] = inst_37972);

(statearr_38101_38164[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38030 === (16))){
var state_38029__$1 = state_38029;
var statearr_38102_38165 = state_38029__$1;
(statearr_38102_38165[(2)] = reload_dependents);

(statearr_38102_38165[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38030 === (38))){
var inst_37982 = (state_38029[(16)]);
var inst_38000 = cljs.core.apply.call(null,cljs.core.hash_map,inst_37982);
var state_38029__$1 = state_38029;
var statearr_38103_38166 = state_38029__$1;
(statearr_38103_38166[(2)] = inst_38000);

(statearr_38103_38166[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38030 === (30))){
var state_38029__$1 = state_38029;
var statearr_38104_38167 = state_38029__$1;
(statearr_38104_38167[(2)] = null);

(statearr_38104_38167[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38030 === (10))){
var inst_37902 = (state_38029[(22)]);
var inst_37904 = cljs.core.chunked_seq_QMARK_.call(null,inst_37902);
var state_38029__$1 = state_38029;
if(inst_37904){
var statearr_38105_38168 = state_38029__$1;
(statearr_38105_38168[(1)] = (13));

} else {
var statearr_38106_38169 = state_38029__$1;
(statearr_38106_38169[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38030 === (18))){
var inst_37936 = (state_38029[(2)]);
var state_38029__$1 = state_38029;
if(cljs.core.truth_(inst_37936)){
var statearr_38107_38170 = state_38029__$1;
(statearr_38107_38170[(1)] = (19));

} else {
var statearr_38108_38171 = state_38029__$1;
(statearr_38108_38171[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38030 === (42))){
var state_38029__$1 = state_38029;
var statearr_38109_38172 = state_38029__$1;
(statearr_38109_38172[(2)] = null);

(statearr_38109_38172[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38030 === (37))){
var inst_37995 = (state_38029[(2)]);
var state_38029__$1 = state_38029;
var statearr_38110_38173 = state_38029__$1;
(statearr_38110_38173[(2)] = inst_37995);

(statearr_38110_38173[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38030 === (8))){
var inst_37902 = (state_38029[(22)]);
var inst_37889 = (state_38029[(8)]);
var inst_37902__$1 = cljs.core.seq.call(null,inst_37889);
var state_38029__$1 = (function (){var statearr_38111 = state_38029;
(statearr_38111[(22)] = inst_37902__$1);

return statearr_38111;
})();
if(inst_37902__$1){
var statearr_38112_38174 = state_38029__$1;
(statearr_38112_38174[(1)] = (10));

} else {
var statearr_38113_38175 = state_38029__$1;
(statearr_38113_38175[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__35537__auto__,map__37874,map__37874__$1,opts,before_jsload,on_jsload,reload_dependents,map__37875,map__37875__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__35449__auto__,c__35537__auto__,map__37874,map__37874__$1,opts,before_jsload,on_jsload,reload_dependents,map__37875,map__37875__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__35450__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__35450__auto____0 = (function (){
var statearr_38114 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38114[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__35450__auto__);

(statearr_38114[(1)] = (1));

return statearr_38114;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__35450__auto____1 = (function (state_38029){
while(true){
var ret_value__35451__auto__ = (function (){try{while(true){
var result__35452__auto__ = switch__35449__auto__.call(null,state_38029);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35452__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35452__auto__;
}
break;
}
}catch (e38115){if((e38115 instanceof Object)){
var ex__35453__auto__ = e38115;
var statearr_38116_38176 = state_38029;
(statearr_38116_38176[(5)] = ex__35453__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38029);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38115;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35451__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38177 = state_38029;
state_38029 = G__38177;
continue;
} else {
return ret_value__35451__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__35450__auto__ = function(state_38029){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__35450__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__35450__auto____1.call(this,state_38029);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__35450__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__35450__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__35450__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__35450__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__35450__auto__;
})()
;})(switch__35449__auto__,c__35537__auto__,map__37874,map__37874__$1,opts,before_jsload,on_jsload,reload_dependents,map__37875,map__37875__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__35539__auto__ = (function (){var statearr_38117 = f__35538__auto__.call(null);
(statearr_38117[(6)] = c__35537__auto__);

return statearr_38117;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35539__auto__);
});})(c__35537__auto__,map__37874,map__37874__$1,opts,before_jsload,on_jsload,reload_dependents,map__37875,map__37875__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__35537__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__38180,link){
var map__38181 = p__38180;
var map__38181__$1 = ((((!((map__38181 == null)))?(((((map__38181.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38181.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38181):map__38181);
var file = cljs.core.get.call(null,map__38181__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__38181,map__38181__$1,file){
return (function (p1__38178_SHARP_,p2__38179_SHARP_){
if(cljs.core._EQ_.call(null,p1__38178_SHARP_,p2__38179_SHARP_)){
return p1__38178_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__38181,map__38181__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__38184){
var map__38185 = p__38184;
var map__38185__$1 = ((((!((map__38185 == null)))?(((((map__38185.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38185.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38185):map__38185);
var match_length = cljs.core.get.call(null,map__38185__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__38185__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__38183_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__38183_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__38187_SHARP_,p2__38188_SHARP_){
return cljs.core.assoc.call(null,p1__38187_SHARP_,cljs.core.get.call(null,p2__38188_SHARP_,key),p2__38188_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if(typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__4655__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4655__auto__)){
var link = temp__4655__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__4655__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__4655__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_38189 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_38189);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_38189);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__38190,p__38191){
var map__38192 = p__38190;
var map__38192__$1 = ((((!((map__38192 == null)))?(((((map__38192.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38192.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38192):map__38192);
var on_cssload = cljs.core.get.call(null,map__38192__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__38193 = p__38191;
var map__38193__$1 = ((((!((map__38193 == null)))?(((((map__38193.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38193.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38193):map__38193);
var files_msg = map__38193__$1;
var files = cljs.core.get.call(null,map__38193__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__4657__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__4657__auto__)){
var f_datas = temp__4657__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1530661657366
