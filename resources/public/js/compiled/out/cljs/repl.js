// Compiled by ClojureScript 1.10.238 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__38198){
var map__38199 = p__38198;
var map__38199__$1 = ((((!((map__38199 == null)))?(((((map__38199.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38199.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38199):map__38199);
var m = map__38199__$1;
var n = cljs.core.get.call(null,map__38199__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__38199__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__38201_38223 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__38202_38224 = null;
var count__38203_38225 = (0);
var i__38204_38226 = (0);
while(true){
if((i__38204_38226 < count__38203_38225)){
var f_38227 = cljs.core._nth.call(null,chunk__38202_38224,i__38204_38226);
cljs.core.println.call(null,"  ",f_38227);


var G__38228 = seq__38201_38223;
var G__38229 = chunk__38202_38224;
var G__38230 = count__38203_38225;
var G__38231 = (i__38204_38226 + (1));
seq__38201_38223 = G__38228;
chunk__38202_38224 = G__38229;
count__38203_38225 = G__38230;
i__38204_38226 = G__38231;
continue;
} else {
var temp__4657__auto___38232 = cljs.core.seq.call(null,seq__38201_38223);
if(temp__4657__auto___38232){
var seq__38201_38233__$1 = temp__4657__auto___38232;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38201_38233__$1)){
var c__4319__auto___38234 = cljs.core.chunk_first.call(null,seq__38201_38233__$1);
var G__38235 = cljs.core.chunk_rest.call(null,seq__38201_38233__$1);
var G__38236 = c__4319__auto___38234;
var G__38237 = cljs.core.count.call(null,c__4319__auto___38234);
var G__38238 = (0);
seq__38201_38223 = G__38235;
chunk__38202_38224 = G__38236;
count__38203_38225 = G__38237;
i__38204_38226 = G__38238;
continue;
} else {
var f_38239 = cljs.core.first.call(null,seq__38201_38233__$1);
cljs.core.println.call(null,"  ",f_38239);


var G__38240 = cljs.core.next.call(null,seq__38201_38233__$1);
var G__38241 = null;
var G__38242 = (0);
var G__38243 = (0);
seq__38201_38223 = G__38240;
chunk__38202_38224 = G__38241;
count__38203_38225 = G__38242;
i__38204_38226 = G__38243;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_38244 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3922__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_38244);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_38244)))?cljs.core.second.call(null,arglists_38244):arglists_38244));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__38205_38245 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__38206_38246 = null;
var count__38207_38247 = (0);
var i__38208_38248 = (0);
while(true){
if((i__38208_38248 < count__38207_38247)){
var vec__38209_38249 = cljs.core._nth.call(null,chunk__38206_38246,i__38208_38248);
var name_38250 = cljs.core.nth.call(null,vec__38209_38249,(0),null);
var map__38212_38251 = cljs.core.nth.call(null,vec__38209_38249,(1),null);
var map__38212_38252__$1 = ((((!((map__38212_38251 == null)))?(((((map__38212_38251.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38212_38251.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38212_38251):map__38212_38251);
var doc_38253 = cljs.core.get.call(null,map__38212_38252__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_38254 = cljs.core.get.call(null,map__38212_38252__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_38250);

cljs.core.println.call(null," ",arglists_38254);

if(cljs.core.truth_(doc_38253)){
cljs.core.println.call(null," ",doc_38253);
} else {
}


var G__38255 = seq__38205_38245;
var G__38256 = chunk__38206_38246;
var G__38257 = count__38207_38247;
var G__38258 = (i__38208_38248 + (1));
seq__38205_38245 = G__38255;
chunk__38206_38246 = G__38256;
count__38207_38247 = G__38257;
i__38208_38248 = G__38258;
continue;
} else {
var temp__4657__auto___38259 = cljs.core.seq.call(null,seq__38205_38245);
if(temp__4657__auto___38259){
var seq__38205_38260__$1 = temp__4657__auto___38259;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38205_38260__$1)){
var c__4319__auto___38261 = cljs.core.chunk_first.call(null,seq__38205_38260__$1);
var G__38262 = cljs.core.chunk_rest.call(null,seq__38205_38260__$1);
var G__38263 = c__4319__auto___38261;
var G__38264 = cljs.core.count.call(null,c__4319__auto___38261);
var G__38265 = (0);
seq__38205_38245 = G__38262;
chunk__38206_38246 = G__38263;
count__38207_38247 = G__38264;
i__38208_38248 = G__38265;
continue;
} else {
var vec__38214_38266 = cljs.core.first.call(null,seq__38205_38260__$1);
var name_38267 = cljs.core.nth.call(null,vec__38214_38266,(0),null);
var map__38217_38268 = cljs.core.nth.call(null,vec__38214_38266,(1),null);
var map__38217_38269__$1 = ((((!((map__38217_38268 == null)))?(((((map__38217_38268.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38217_38268.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38217_38268):map__38217_38268);
var doc_38270 = cljs.core.get.call(null,map__38217_38269__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_38271 = cljs.core.get.call(null,map__38217_38269__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_38267);

cljs.core.println.call(null," ",arglists_38271);

if(cljs.core.truth_(doc_38270)){
cljs.core.println.call(null," ",doc_38270);
} else {
}


var G__38272 = cljs.core.next.call(null,seq__38205_38260__$1);
var G__38273 = null;
var G__38274 = (0);
var G__38275 = (0);
seq__38205_38245 = G__38272;
chunk__38206_38246 = G__38273;
count__38207_38247 = G__38274;
i__38208_38248 = G__38275;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__38219 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__38220 = null;
var count__38221 = (0);
var i__38222 = (0);
while(true){
if((i__38222 < count__38221)){
var role = cljs.core._nth.call(null,chunk__38220,i__38222);
var temp__4657__auto___38276__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___38276__$1)){
var spec_38277 = temp__4657__auto___38276__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_38277));
} else {
}


var G__38278 = seq__38219;
var G__38279 = chunk__38220;
var G__38280 = count__38221;
var G__38281 = (i__38222 + (1));
seq__38219 = G__38278;
chunk__38220 = G__38279;
count__38221 = G__38280;
i__38222 = G__38281;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__38219);
if(temp__4657__auto____$1){
var seq__38219__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38219__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__38219__$1);
var G__38282 = cljs.core.chunk_rest.call(null,seq__38219__$1);
var G__38283 = c__4319__auto__;
var G__38284 = cljs.core.count.call(null,c__4319__auto__);
var G__38285 = (0);
seq__38219 = G__38282;
chunk__38220 = G__38283;
count__38221 = G__38284;
i__38222 = G__38285;
continue;
} else {
var role = cljs.core.first.call(null,seq__38219__$1);
var temp__4657__auto___38286__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___38286__$2)){
var spec_38287 = temp__4657__auto___38286__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_38287));
} else {
}


var G__38288 = cljs.core.next.call(null,seq__38219__$1);
var G__38289 = null;
var G__38290 = (0);
var G__38291 = (0);
seq__38219 = G__38288;
chunk__38220 = G__38289;
count__38221 = G__38290;
i__38222 = G__38291;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1530661657559
