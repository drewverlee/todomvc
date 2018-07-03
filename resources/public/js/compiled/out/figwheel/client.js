// Compiled by ClojureScript 1.10.238 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.16";
figwheel.client.js_stringify = ((((typeof JSON !== 'undefined') && (!((JSON.stringify == null)))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('');
}catch (e38486){if((e38486 instanceof Error)){
var e = e38486;
return "Error: Unable to stringify";
} else {
throw e38486;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__38489 = arguments.length;
switch (G__38489) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__38487_SHARP_){
if(typeof p1__38487_SHARP_ === 'string'){
return p1__38487_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__38487_SHARP_);
}
}),args)], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__4502__auto__ = [];
var len__4499__auto___38492 = arguments.length;
var i__4500__auto___38493 = (0);
while(true){
if((i__4500__auto___38493 < len__4499__auto___38492)){
args__4502__auto__.push((arguments[i__4500__auto___38493]));

var G__38494 = (i__4500__auto___38493 + (1));
i__4500__auto___38493 = G__38494;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq38491){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38491));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4502__auto__ = [];
var len__4499__auto___38496 = arguments.length;
var i__4500__auto___38497 = (0);
while(true){
if((i__4500__auto___38497 < len__4499__auto___38496)){
args__4502__auto__.push((arguments[i__4500__auto___38497]));

var G__38498 = (i__4500__auto___38497 + (1));
i__4500__auto___38497 = G__38498;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq38495){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38495));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)"].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__38499){
var map__38500 = p__38499;
var map__38500__$1 = ((((!((map__38500 == null)))?(((((map__38500.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38500.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38500):map__38500);
var message = cljs.core.get.call(null,map__38500__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__38500__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__3922__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__3911__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__3911__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__3911__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return ((cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts))));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__35537__auto___38579 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35537__auto___38579,ch){
return (function (){
var f__35538__auto__ = (function (){var switch__35449__auto__ = ((function (c__35537__auto___38579,ch){
return (function (state_38551){
var state_val_38552 = (state_38551[(1)]);
if((state_val_38552 === (7))){
var inst_38547 = (state_38551[(2)]);
var state_38551__$1 = state_38551;
var statearr_38553_38580 = state_38551__$1;
(statearr_38553_38580[(2)] = inst_38547);

(statearr_38553_38580[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38552 === (1))){
var state_38551__$1 = state_38551;
var statearr_38554_38581 = state_38551__$1;
(statearr_38554_38581[(2)] = null);

(statearr_38554_38581[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38552 === (4))){
var inst_38504 = (state_38551[(7)]);
var inst_38504__$1 = (state_38551[(2)]);
var state_38551__$1 = (function (){var statearr_38555 = state_38551;
(statearr_38555[(7)] = inst_38504__$1);

return statearr_38555;
})();
if(cljs.core.truth_(inst_38504__$1)){
var statearr_38556_38582 = state_38551__$1;
(statearr_38556_38582[(1)] = (5));

} else {
var statearr_38557_38583 = state_38551__$1;
(statearr_38557_38583[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38552 === (15))){
var inst_38511 = (state_38551[(8)]);
var inst_38526 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_38511);
var inst_38527 = cljs.core.first.call(null,inst_38526);
var inst_38528 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_38527);
var inst_38529 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_38528)].join('');
var inst_38530 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_38529);
var state_38551__$1 = state_38551;
var statearr_38558_38584 = state_38551__$1;
(statearr_38558_38584[(2)] = inst_38530);

(statearr_38558_38584[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38552 === (13))){
var inst_38535 = (state_38551[(2)]);
var state_38551__$1 = state_38551;
var statearr_38559_38585 = state_38551__$1;
(statearr_38559_38585[(2)] = inst_38535);

(statearr_38559_38585[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38552 === (6))){
var state_38551__$1 = state_38551;
var statearr_38560_38586 = state_38551__$1;
(statearr_38560_38586[(2)] = null);

(statearr_38560_38586[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38552 === (17))){
var inst_38533 = (state_38551[(2)]);
var state_38551__$1 = state_38551;
var statearr_38561_38587 = state_38551__$1;
(statearr_38561_38587[(2)] = inst_38533);

(statearr_38561_38587[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38552 === (3))){
var inst_38549 = (state_38551[(2)]);
var state_38551__$1 = state_38551;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38551__$1,inst_38549);
} else {
if((state_val_38552 === (12))){
var inst_38510 = (state_38551[(9)]);
var inst_38524 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_38510,opts);
var state_38551__$1 = state_38551;
if(cljs.core.truth_(inst_38524)){
var statearr_38562_38588 = state_38551__$1;
(statearr_38562_38588[(1)] = (15));

} else {
var statearr_38563_38589 = state_38551__$1;
(statearr_38563_38589[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38552 === (2))){
var state_38551__$1 = state_38551;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38551__$1,(4),ch);
} else {
if((state_val_38552 === (11))){
var inst_38511 = (state_38551[(8)]);
var inst_38516 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_38517 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_38511);
var inst_38518 = cljs.core.async.timeout.call(null,(1000));
var inst_38519 = [inst_38517,inst_38518];
var inst_38520 = (new cljs.core.PersistentVector(null,2,(5),inst_38516,inst_38519,null));
var state_38551__$1 = state_38551;
return cljs.core.async.ioc_alts_BANG_.call(null,state_38551__$1,(14),inst_38520);
} else {
if((state_val_38552 === (9))){
var inst_38511 = (state_38551[(8)]);
var inst_38537 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_38538 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_38511);
var inst_38539 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_38538);
var inst_38540 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_38539)].join('');
var inst_38541 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_38540);
var state_38551__$1 = (function (){var statearr_38564 = state_38551;
(statearr_38564[(10)] = inst_38537);

return statearr_38564;
})();
var statearr_38565_38590 = state_38551__$1;
(statearr_38565_38590[(2)] = inst_38541);

(statearr_38565_38590[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38552 === (5))){
var inst_38504 = (state_38551[(7)]);
var inst_38506 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_38507 = (new cljs.core.PersistentArrayMap(null,2,inst_38506,null));
var inst_38508 = (new cljs.core.PersistentHashSet(null,inst_38507,null));
var inst_38509 = figwheel.client.focus_msgs.call(null,inst_38508,inst_38504);
var inst_38510 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_38509);
var inst_38511 = cljs.core.first.call(null,inst_38509);
var inst_38512 = figwheel.client.autoload_QMARK_.call(null);
var state_38551__$1 = (function (){var statearr_38566 = state_38551;
(statearr_38566[(9)] = inst_38510);

(statearr_38566[(8)] = inst_38511);

return statearr_38566;
})();
if(cljs.core.truth_(inst_38512)){
var statearr_38567_38591 = state_38551__$1;
(statearr_38567_38591[(1)] = (8));

} else {
var statearr_38568_38592 = state_38551__$1;
(statearr_38568_38592[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38552 === (14))){
var inst_38522 = (state_38551[(2)]);
var state_38551__$1 = state_38551;
var statearr_38569_38593 = state_38551__$1;
(statearr_38569_38593[(2)] = inst_38522);

(statearr_38569_38593[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38552 === (16))){
var state_38551__$1 = state_38551;
var statearr_38570_38594 = state_38551__$1;
(statearr_38570_38594[(2)] = null);

(statearr_38570_38594[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38552 === (10))){
var inst_38543 = (state_38551[(2)]);
var state_38551__$1 = (function (){var statearr_38571 = state_38551;
(statearr_38571[(11)] = inst_38543);

return statearr_38571;
})();
var statearr_38572_38595 = state_38551__$1;
(statearr_38572_38595[(2)] = null);

(statearr_38572_38595[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38552 === (8))){
var inst_38510 = (state_38551[(9)]);
var inst_38514 = figwheel.client.reload_file_state_QMARK_.call(null,inst_38510,opts);
var state_38551__$1 = state_38551;
if(cljs.core.truth_(inst_38514)){
var statearr_38573_38596 = state_38551__$1;
(statearr_38573_38596[(1)] = (11));

} else {
var statearr_38574_38597 = state_38551__$1;
(statearr_38574_38597[(1)] = (12));

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
});})(c__35537__auto___38579,ch))
;
return ((function (switch__35449__auto__,c__35537__auto___38579,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__35450__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__35450__auto____0 = (function (){
var statearr_38575 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38575[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__35450__auto__);

(statearr_38575[(1)] = (1));

return statearr_38575;
});
var figwheel$client$file_reloader_plugin_$_state_machine__35450__auto____1 = (function (state_38551){
while(true){
var ret_value__35451__auto__ = (function (){try{while(true){
var result__35452__auto__ = switch__35449__auto__.call(null,state_38551);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35452__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35452__auto__;
}
break;
}
}catch (e38576){if((e38576 instanceof Object)){
var ex__35453__auto__ = e38576;
var statearr_38577_38598 = state_38551;
(statearr_38577_38598[(5)] = ex__35453__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38551);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38576;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35451__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38599 = state_38551;
state_38551 = G__38599;
continue;
} else {
return ret_value__35451__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__35450__auto__ = function(state_38551){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__35450__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__35450__auto____1.call(this,state_38551);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__35450__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__35450__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__35450__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__35450__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__35450__auto__;
})()
;})(switch__35449__auto__,c__35537__auto___38579,ch))
})();
var state__35539__auto__ = (function (){var statearr_38578 = f__35538__auto__.call(null);
(statearr_38578[(6)] = c__35537__auto___38579);

return statearr_38578;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35539__auto__);
});})(c__35537__auto___38579,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__38600_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__38600_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_38604 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_38604){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_38602 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_38603 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_38602,_STAR_print_fn_STAR_38603,sb,base_path_38604){
return (function (x){
return sb.append(x);
});})(_STAR_print_newline_STAR_38602,_STAR_print_fn_STAR_38603,sb,base_path_38604))
;

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join(''),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_38603;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_38602;
}}catch (e38601){if((e38601 instanceof Error)){
var e = e38601;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_38604], null));
} else {
var e = e38601;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_38604))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__38605){
var map__38606 = p__38605;
var map__38606__$1 = ((((!((map__38606 == null)))?(((((map__38606.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38606.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38606):map__38606);
var opts = map__38606__$1;
var build_id = cljs.core.get.call(null,map__38606__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__38606,map__38606__$1,opts,build_id){
return (function (p__38608){
var vec__38609 = p__38608;
var seq__38610 = cljs.core.seq.call(null,vec__38609);
var first__38611 = cljs.core.first.call(null,seq__38610);
var seq__38610__$1 = cljs.core.next.call(null,seq__38610);
var map__38612 = first__38611;
var map__38612__$1 = ((((!((map__38612 == null)))?(((((map__38612.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38612.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38612):map__38612);
var msg = map__38612__$1;
var msg_name = cljs.core.get.call(null,map__38612__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__38610__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__38609,seq__38610,first__38611,seq__38610__$1,map__38612,map__38612__$1,msg,msg_name,_,map__38606,map__38606__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__38609,seq__38610,first__38611,seq__38610__$1,map__38612,map__38612__$1,msg,msg_name,_,map__38606,map__38606__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__38606,map__38606__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__38614){
var vec__38615 = p__38614;
var seq__38616 = cljs.core.seq.call(null,vec__38615);
var first__38617 = cljs.core.first.call(null,seq__38616);
var seq__38616__$1 = cljs.core.next.call(null,seq__38616);
var map__38618 = first__38617;
var map__38618__$1 = ((((!((map__38618 == null)))?(((((map__38618.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38618.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38618):map__38618);
var msg = map__38618__$1;
var msg_name = cljs.core.get.call(null,map__38618__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__38616__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__38620){
var map__38621 = p__38620;
var map__38621__$1 = ((((!((map__38621 == null)))?(((((map__38621.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38621.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38621):map__38621);
var on_compile_warning = cljs.core.get.call(null,map__38621__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__38621__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__38621,map__38621__$1,on_compile_warning,on_compile_fail){
return (function (p__38623){
var vec__38624 = p__38623;
var seq__38625 = cljs.core.seq.call(null,vec__38624);
var first__38626 = cljs.core.first.call(null,seq__38625);
var seq__38625__$1 = cljs.core.next.call(null,seq__38625);
var map__38627 = first__38626;
var map__38627__$1 = ((((!((map__38627 == null)))?(((((map__38627.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38627.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38627):map__38627);
var msg = map__38627__$1;
var msg_name = cljs.core.get.call(null,map__38627__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__38625__$1;
var pred__38629 = cljs.core._EQ_;
var expr__38630 = msg_name;
if(cljs.core.truth_(pred__38629.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__38630))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__38629.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__38630))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__38621,map__38621__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__35537__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35537__auto__,msg_hist,msg_names,msg){
return (function (){
var f__35538__auto__ = (function (){var switch__35449__auto__ = ((function (c__35537__auto__,msg_hist,msg_names,msg){
return (function (state_38719){
var state_val_38720 = (state_38719[(1)]);
if((state_val_38720 === (7))){
var inst_38639 = (state_38719[(2)]);
var state_38719__$1 = state_38719;
if(cljs.core.truth_(inst_38639)){
var statearr_38721_38768 = state_38719__$1;
(statearr_38721_38768[(1)] = (8));

} else {
var statearr_38722_38769 = state_38719__$1;
(statearr_38722_38769[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38720 === (20))){
var inst_38713 = (state_38719[(2)]);
var state_38719__$1 = state_38719;
var statearr_38723_38770 = state_38719__$1;
(statearr_38723_38770[(2)] = inst_38713);

(statearr_38723_38770[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38720 === (27))){
var inst_38709 = (state_38719[(2)]);
var state_38719__$1 = state_38719;
var statearr_38724_38771 = state_38719__$1;
(statearr_38724_38771[(2)] = inst_38709);

(statearr_38724_38771[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38720 === (1))){
var inst_38632 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_38719__$1 = state_38719;
if(cljs.core.truth_(inst_38632)){
var statearr_38725_38772 = state_38719__$1;
(statearr_38725_38772[(1)] = (2));

} else {
var statearr_38726_38773 = state_38719__$1;
(statearr_38726_38773[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38720 === (24))){
var inst_38711 = (state_38719[(2)]);
var state_38719__$1 = state_38719;
var statearr_38727_38774 = state_38719__$1;
(statearr_38727_38774[(2)] = inst_38711);

(statearr_38727_38774[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38720 === (4))){
var inst_38717 = (state_38719[(2)]);
var state_38719__$1 = state_38719;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38719__$1,inst_38717);
} else {
if((state_val_38720 === (15))){
var inst_38715 = (state_38719[(2)]);
var state_38719__$1 = state_38719;
var statearr_38728_38775 = state_38719__$1;
(statearr_38728_38775[(2)] = inst_38715);

(statearr_38728_38775[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38720 === (21))){
var inst_38668 = (state_38719[(2)]);
var inst_38669 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38670 = figwheel.client.auto_jump_to_error.call(null,opts,inst_38669);
var state_38719__$1 = (function (){var statearr_38729 = state_38719;
(statearr_38729[(7)] = inst_38668);

return statearr_38729;
})();
var statearr_38730_38776 = state_38719__$1;
(statearr_38730_38776[(2)] = inst_38670);

(statearr_38730_38776[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38720 === (31))){
var inst_38698 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_38719__$1 = state_38719;
if(cljs.core.truth_(inst_38698)){
var statearr_38731_38777 = state_38719__$1;
(statearr_38731_38777[(1)] = (34));

} else {
var statearr_38732_38778 = state_38719__$1;
(statearr_38732_38778[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38720 === (32))){
var inst_38707 = (state_38719[(2)]);
var state_38719__$1 = state_38719;
var statearr_38733_38779 = state_38719__$1;
(statearr_38733_38779[(2)] = inst_38707);

(statearr_38733_38779[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38720 === (33))){
var inst_38694 = (state_38719[(2)]);
var inst_38695 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38696 = figwheel.client.auto_jump_to_error.call(null,opts,inst_38695);
var state_38719__$1 = (function (){var statearr_38734 = state_38719;
(statearr_38734[(8)] = inst_38694);

return statearr_38734;
})();
var statearr_38735_38780 = state_38719__$1;
(statearr_38735_38780[(2)] = inst_38696);

(statearr_38735_38780[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38720 === (13))){
var inst_38653 = figwheel.client.heads_up.clear.call(null);
var state_38719__$1 = state_38719;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38719__$1,(16),inst_38653);
} else {
if((state_val_38720 === (22))){
var inst_38674 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38675 = figwheel.client.heads_up.append_warning_message.call(null,inst_38674);
var state_38719__$1 = state_38719;
var statearr_38736_38781 = state_38719__$1;
(statearr_38736_38781[(2)] = inst_38675);

(statearr_38736_38781[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38720 === (36))){
var inst_38705 = (state_38719[(2)]);
var state_38719__$1 = state_38719;
var statearr_38737_38782 = state_38719__$1;
(statearr_38737_38782[(2)] = inst_38705);

(statearr_38737_38782[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38720 === (29))){
var inst_38685 = (state_38719[(2)]);
var inst_38686 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38687 = figwheel.client.auto_jump_to_error.call(null,opts,inst_38686);
var state_38719__$1 = (function (){var statearr_38738 = state_38719;
(statearr_38738[(9)] = inst_38685);

return statearr_38738;
})();
var statearr_38739_38783 = state_38719__$1;
(statearr_38739_38783[(2)] = inst_38687);

(statearr_38739_38783[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38720 === (6))){
var inst_38634 = (state_38719[(10)]);
var state_38719__$1 = state_38719;
var statearr_38740_38784 = state_38719__$1;
(statearr_38740_38784[(2)] = inst_38634);

(statearr_38740_38784[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38720 === (28))){
var inst_38681 = (state_38719[(2)]);
var inst_38682 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38683 = figwheel.client.heads_up.display_warning.call(null,inst_38682);
var state_38719__$1 = (function (){var statearr_38741 = state_38719;
(statearr_38741[(11)] = inst_38681);

return statearr_38741;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38719__$1,(29),inst_38683);
} else {
if((state_val_38720 === (25))){
var inst_38679 = figwheel.client.heads_up.clear.call(null);
var state_38719__$1 = state_38719;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38719__$1,(28),inst_38679);
} else {
if((state_val_38720 === (34))){
var inst_38700 = figwheel.client.heads_up.flash_loaded.call(null);
var state_38719__$1 = state_38719;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38719__$1,(37),inst_38700);
} else {
if((state_val_38720 === (17))){
var inst_38659 = (state_38719[(2)]);
var inst_38660 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38661 = figwheel.client.auto_jump_to_error.call(null,opts,inst_38660);
var state_38719__$1 = (function (){var statearr_38742 = state_38719;
(statearr_38742[(12)] = inst_38659);

return statearr_38742;
})();
var statearr_38743_38785 = state_38719__$1;
(statearr_38743_38785[(2)] = inst_38661);

(statearr_38743_38785[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38720 === (3))){
var inst_38651 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_38719__$1 = state_38719;
if(cljs.core.truth_(inst_38651)){
var statearr_38744_38786 = state_38719__$1;
(statearr_38744_38786[(1)] = (13));

} else {
var statearr_38745_38787 = state_38719__$1;
(statearr_38745_38787[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38720 === (12))){
var inst_38647 = (state_38719[(2)]);
var state_38719__$1 = state_38719;
var statearr_38746_38788 = state_38719__$1;
(statearr_38746_38788[(2)] = inst_38647);

(statearr_38746_38788[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38720 === (2))){
var inst_38634 = (state_38719[(10)]);
var inst_38634__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_38719__$1 = (function (){var statearr_38747 = state_38719;
(statearr_38747[(10)] = inst_38634__$1);

return statearr_38747;
})();
if(cljs.core.truth_(inst_38634__$1)){
var statearr_38748_38789 = state_38719__$1;
(statearr_38748_38789[(1)] = (5));

} else {
var statearr_38749_38790 = state_38719__$1;
(statearr_38749_38790[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38720 === (23))){
var inst_38677 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_38719__$1 = state_38719;
if(cljs.core.truth_(inst_38677)){
var statearr_38750_38791 = state_38719__$1;
(statearr_38750_38791[(1)] = (25));

} else {
var statearr_38751_38792 = state_38719__$1;
(statearr_38751_38792[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38720 === (35))){
var state_38719__$1 = state_38719;
var statearr_38752_38793 = state_38719__$1;
(statearr_38752_38793[(2)] = null);

(statearr_38752_38793[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38720 === (19))){
var inst_38672 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_38719__$1 = state_38719;
if(cljs.core.truth_(inst_38672)){
var statearr_38753_38794 = state_38719__$1;
(statearr_38753_38794[(1)] = (22));

} else {
var statearr_38754_38795 = state_38719__$1;
(statearr_38754_38795[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38720 === (11))){
var inst_38643 = (state_38719[(2)]);
var state_38719__$1 = state_38719;
var statearr_38755_38796 = state_38719__$1;
(statearr_38755_38796[(2)] = inst_38643);

(statearr_38755_38796[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38720 === (9))){
var inst_38645 = figwheel.client.heads_up.clear.call(null);
var state_38719__$1 = state_38719;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38719__$1,(12),inst_38645);
} else {
if((state_val_38720 === (5))){
var inst_38636 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_38719__$1 = state_38719;
var statearr_38756_38797 = state_38719__$1;
(statearr_38756_38797[(2)] = inst_38636);

(statearr_38756_38797[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38720 === (14))){
var inst_38663 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_38719__$1 = state_38719;
if(cljs.core.truth_(inst_38663)){
var statearr_38757_38798 = state_38719__$1;
(statearr_38757_38798[(1)] = (18));

} else {
var statearr_38758_38799 = state_38719__$1;
(statearr_38758_38799[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38720 === (26))){
var inst_38689 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_38719__$1 = state_38719;
if(cljs.core.truth_(inst_38689)){
var statearr_38759_38800 = state_38719__$1;
(statearr_38759_38800[(1)] = (30));

} else {
var statearr_38760_38801 = state_38719__$1;
(statearr_38760_38801[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38720 === (16))){
var inst_38655 = (state_38719[(2)]);
var inst_38656 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38657 = figwheel.client.heads_up.display_exception.call(null,inst_38656);
var state_38719__$1 = (function (){var statearr_38761 = state_38719;
(statearr_38761[(13)] = inst_38655);

return statearr_38761;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38719__$1,(17),inst_38657);
} else {
if((state_val_38720 === (30))){
var inst_38691 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38692 = figwheel.client.heads_up.display_warning.call(null,inst_38691);
var state_38719__$1 = state_38719;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38719__$1,(33),inst_38692);
} else {
if((state_val_38720 === (10))){
var inst_38649 = (state_38719[(2)]);
var state_38719__$1 = state_38719;
var statearr_38762_38802 = state_38719__$1;
(statearr_38762_38802[(2)] = inst_38649);

(statearr_38762_38802[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38720 === (18))){
var inst_38665 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38666 = figwheel.client.heads_up.display_exception.call(null,inst_38665);
var state_38719__$1 = state_38719;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38719__$1,(21),inst_38666);
} else {
if((state_val_38720 === (37))){
var inst_38702 = (state_38719[(2)]);
var state_38719__$1 = state_38719;
var statearr_38763_38803 = state_38719__$1;
(statearr_38763_38803[(2)] = inst_38702);

(statearr_38763_38803[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38720 === (8))){
var inst_38641 = figwheel.client.heads_up.flash_loaded.call(null);
var state_38719__$1 = state_38719;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38719__$1,(11),inst_38641);
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
});})(c__35537__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__35449__auto__,c__35537__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35450__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35450__auto____0 = (function (){
var statearr_38764 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38764[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35450__auto__);

(statearr_38764[(1)] = (1));

return statearr_38764;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35450__auto____1 = (function (state_38719){
while(true){
var ret_value__35451__auto__ = (function (){try{while(true){
var result__35452__auto__ = switch__35449__auto__.call(null,state_38719);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35452__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35452__auto__;
}
break;
}
}catch (e38765){if((e38765 instanceof Object)){
var ex__35453__auto__ = e38765;
var statearr_38766_38804 = state_38719;
(statearr_38766_38804[(5)] = ex__35453__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38719);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38765;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35451__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38805 = state_38719;
state_38719 = G__38805;
continue;
} else {
return ret_value__35451__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35450__auto__ = function(state_38719){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35450__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35450__auto____1.call(this,state_38719);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35450__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35450__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35450__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35450__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35450__auto__;
})()
;})(switch__35449__auto__,c__35537__auto__,msg_hist,msg_names,msg))
})();
var state__35539__auto__ = (function (){var statearr_38767 = f__35538__auto__.call(null);
(statearr_38767[(6)] = c__35537__auto__);

return statearr_38767;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35539__auto__);
});})(c__35537__auto__,msg_hist,msg_names,msg))
);

return c__35537__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__35537__auto___38834 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35537__auto___38834,ch){
return (function (){
var f__35538__auto__ = (function (){var switch__35449__auto__ = ((function (c__35537__auto___38834,ch){
return (function (state_38820){
var state_val_38821 = (state_38820[(1)]);
if((state_val_38821 === (1))){
var state_38820__$1 = state_38820;
var statearr_38822_38835 = state_38820__$1;
(statearr_38822_38835[(2)] = null);

(statearr_38822_38835[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38821 === (2))){
var state_38820__$1 = state_38820;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38820__$1,(4),ch);
} else {
if((state_val_38821 === (3))){
var inst_38818 = (state_38820[(2)]);
var state_38820__$1 = state_38820;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38820__$1,inst_38818);
} else {
if((state_val_38821 === (4))){
var inst_38808 = (state_38820[(7)]);
var inst_38808__$1 = (state_38820[(2)]);
var state_38820__$1 = (function (){var statearr_38823 = state_38820;
(statearr_38823[(7)] = inst_38808__$1);

return statearr_38823;
})();
if(cljs.core.truth_(inst_38808__$1)){
var statearr_38824_38836 = state_38820__$1;
(statearr_38824_38836[(1)] = (5));

} else {
var statearr_38825_38837 = state_38820__$1;
(statearr_38825_38837[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38821 === (5))){
var inst_38808 = (state_38820[(7)]);
var inst_38810 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_38808);
var state_38820__$1 = state_38820;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38820__$1,(8),inst_38810);
} else {
if((state_val_38821 === (6))){
var state_38820__$1 = state_38820;
var statearr_38826_38838 = state_38820__$1;
(statearr_38826_38838[(2)] = null);

(statearr_38826_38838[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38821 === (7))){
var inst_38816 = (state_38820[(2)]);
var state_38820__$1 = state_38820;
var statearr_38827_38839 = state_38820__$1;
(statearr_38827_38839[(2)] = inst_38816);

(statearr_38827_38839[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38821 === (8))){
var inst_38812 = (state_38820[(2)]);
var state_38820__$1 = (function (){var statearr_38828 = state_38820;
(statearr_38828[(8)] = inst_38812);

return statearr_38828;
})();
var statearr_38829_38840 = state_38820__$1;
(statearr_38829_38840[(2)] = null);

(statearr_38829_38840[(1)] = (2));


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
});})(c__35537__auto___38834,ch))
;
return ((function (switch__35449__auto__,c__35537__auto___38834,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__35450__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__35450__auto____0 = (function (){
var statearr_38830 = [null,null,null,null,null,null,null,null,null];
(statearr_38830[(0)] = figwheel$client$heads_up_plugin_$_state_machine__35450__auto__);

(statearr_38830[(1)] = (1));

return statearr_38830;
});
var figwheel$client$heads_up_plugin_$_state_machine__35450__auto____1 = (function (state_38820){
while(true){
var ret_value__35451__auto__ = (function (){try{while(true){
var result__35452__auto__ = switch__35449__auto__.call(null,state_38820);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35452__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35452__auto__;
}
break;
}
}catch (e38831){if((e38831 instanceof Object)){
var ex__35453__auto__ = e38831;
var statearr_38832_38841 = state_38820;
(statearr_38832_38841[(5)] = ex__35453__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38820);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38831;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35451__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38842 = state_38820;
state_38820 = G__38842;
continue;
} else {
return ret_value__35451__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__35450__auto__ = function(state_38820){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__35450__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__35450__auto____1.call(this,state_38820);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__35450__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__35450__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__35450__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__35450__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__35450__auto__;
})()
;})(switch__35449__auto__,c__35537__auto___38834,ch))
})();
var state__35539__auto__ = (function (){var statearr_38833 = f__35538__auto__.call(null);
(statearr_38833[(6)] = c__35537__auto___38834);

return statearr_38833;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35539__auto__);
});})(c__35537__auto___38834,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__35537__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35537__auto__){
return (function (){
var f__35538__auto__ = (function (){var switch__35449__auto__ = ((function (c__35537__auto__){
return (function (state_38848){
var state_val_38849 = (state_38848[(1)]);
if((state_val_38849 === (1))){
var inst_38843 = cljs.core.async.timeout.call(null,(3000));
var state_38848__$1 = state_38848;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38848__$1,(2),inst_38843);
} else {
if((state_val_38849 === (2))){
var inst_38845 = (state_38848[(2)]);
var inst_38846 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_38848__$1 = (function (){var statearr_38850 = state_38848;
(statearr_38850[(7)] = inst_38845);

return statearr_38850;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38848__$1,inst_38846);
} else {
return null;
}
}
});})(c__35537__auto__))
;
return ((function (switch__35449__auto__,c__35537__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__35450__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__35450__auto____0 = (function (){
var statearr_38851 = [null,null,null,null,null,null,null,null];
(statearr_38851[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__35450__auto__);

(statearr_38851[(1)] = (1));

return statearr_38851;
});
var figwheel$client$enforce_project_plugin_$_state_machine__35450__auto____1 = (function (state_38848){
while(true){
var ret_value__35451__auto__ = (function (){try{while(true){
var result__35452__auto__ = switch__35449__auto__.call(null,state_38848);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35452__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35452__auto__;
}
break;
}
}catch (e38852){if((e38852 instanceof Object)){
var ex__35453__auto__ = e38852;
var statearr_38853_38855 = state_38848;
(statearr_38853_38855[(5)] = ex__35453__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38848);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38852;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35451__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38856 = state_38848;
state_38848 = G__38856;
continue;
} else {
return ret_value__35451__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__35450__auto__ = function(state_38848){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__35450__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__35450__auto____1.call(this,state_38848);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__35450__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__35450__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__35450__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__35450__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__35450__auto__;
})()
;})(switch__35449__auto__,c__35537__auto__))
})();
var state__35539__auto__ = (function (){var statearr_38854 = f__35538__auto__.call(null);
(statearr_38854[(6)] = c__35537__auto__);

return statearr_38854;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35539__auto__);
});})(c__35537__auto__))
);

return c__35537__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__4657__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__4657__auto__)){
var figwheel_version = temp__4657__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__35537__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35537__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__35538__auto__ = (function (){var switch__35449__auto__ = ((function (c__35537__auto__,figwheel_version,temp__4657__auto__){
return (function (state_38863){
var state_val_38864 = (state_38863[(1)]);
if((state_val_38864 === (1))){
var inst_38857 = cljs.core.async.timeout.call(null,(2000));
var state_38863__$1 = state_38863;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38863__$1,(2),inst_38857);
} else {
if((state_val_38864 === (2))){
var inst_38859 = (state_38863[(2)]);
var inst_38860 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_38861 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_38860);
var state_38863__$1 = (function (){var statearr_38865 = state_38863;
(statearr_38865[(7)] = inst_38859);

return statearr_38865;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38863__$1,inst_38861);
} else {
return null;
}
}
});})(c__35537__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__35449__auto__,c__35537__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35450__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35450__auto____0 = (function (){
var statearr_38866 = [null,null,null,null,null,null,null,null];
(statearr_38866[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35450__auto__);

(statearr_38866[(1)] = (1));

return statearr_38866;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35450__auto____1 = (function (state_38863){
while(true){
var ret_value__35451__auto__ = (function (){try{while(true){
var result__35452__auto__ = switch__35449__auto__.call(null,state_38863);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35452__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35452__auto__;
}
break;
}
}catch (e38867){if((e38867 instanceof Object)){
var ex__35453__auto__ = e38867;
var statearr_38868_38870 = state_38863;
(statearr_38868_38870[(5)] = ex__35453__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38863);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38867;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35451__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38871 = state_38863;
state_38863 = G__38871;
continue;
} else {
return ret_value__35451__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35450__auto__ = function(state_38863){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35450__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35450__auto____1.call(this,state_38863);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35450__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35450__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35450__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35450__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35450__auto__;
})()
;})(switch__35449__auto__,c__35537__auto__,figwheel_version,temp__4657__auto__))
})();
var state__35539__auto__ = (function (){var statearr_38869 = f__35538__auto__.call(null);
(statearr_38869[(6)] = c__35537__auto__);

return statearr_38869;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35539__auto__);
});})(c__35537__auto__,figwheel_version,temp__4657__auto__))
);

return c__35537__auto__;
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
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__38872){
var map__38873 = p__38872;
var map__38873__$1 = ((((!((map__38873 == null)))?(((((map__38873.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38873.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38873):map__38873);
var file = cljs.core.get.call(null,map__38873__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__38873__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__38873__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__38875 = "";
var G__38875__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38875),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__38875);
var G__38875__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38875__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__38875__$1);
if(cljs.core.truth_((function (){var and__3911__auto__ = line;
if(cljs.core.truth_(and__3911__auto__)){
return column;
} else {
return and__3911__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38875__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__38875__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__38876){
var map__38877 = p__38876;
var map__38877__$1 = ((((!((map__38877 == null)))?(((((map__38877.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38877.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38877):map__38877);
var ed = map__38877__$1;
var formatted_exception = cljs.core.get.call(null,map__38877__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__38877__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__38877__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__38879_38883 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__38880_38884 = null;
var count__38881_38885 = (0);
var i__38882_38886 = (0);
while(true){
if((i__38882_38886 < count__38881_38885)){
var msg_38887 = cljs.core._nth.call(null,chunk__38880_38884,i__38882_38886);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_38887);


var G__38888 = seq__38879_38883;
var G__38889 = chunk__38880_38884;
var G__38890 = count__38881_38885;
var G__38891 = (i__38882_38886 + (1));
seq__38879_38883 = G__38888;
chunk__38880_38884 = G__38889;
count__38881_38885 = G__38890;
i__38882_38886 = G__38891;
continue;
} else {
var temp__4657__auto___38892 = cljs.core.seq.call(null,seq__38879_38883);
if(temp__4657__auto___38892){
var seq__38879_38893__$1 = temp__4657__auto___38892;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38879_38893__$1)){
var c__4319__auto___38894 = cljs.core.chunk_first.call(null,seq__38879_38893__$1);
var G__38895 = cljs.core.chunk_rest.call(null,seq__38879_38893__$1);
var G__38896 = c__4319__auto___38894;
var G__38897 = cljs.core.count.call(null,c__4319__auto___38894);
var G__38898 = (0);
seq__38879_38883 = G__38895;
chunk__38880_38884 = G__38896;
count__38881_38885 = G__38897;
i__38882_38886 = G__38898;
continue;
} else {
var msg_38899 = cljs.core.first.call(null,seq__38879_38893__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_38899);


var G__38900 = cljs.core.next.call(null,seq__38879_38893__$1);
var G__38901 = null;
var G__38902 = (0);
var G__38903 = (0);
seq__38879_38883 = G__38900;
chunk__38880_38884 = G__38901;
count__38881_38885 = G__38902;
i__38882_38886 = G__38903;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Error on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__38904){
var map__38905 = p__38904;
var map__38905__$1 = ((((!((map__38905 == null)))?(((((map__38905.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38905.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38905):map__38905);
var w = map__38905__$1;
var message = cljs.core.get.call(null,map__38905__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/compiled/out/figwheel/client.cljs",33,1,361,361,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/compiled/out/figwheel/client.cljs",30,1,353,353,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__3911__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__3911__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__3911__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_json_message_watch = (function figwheel$client$add_json_message_watch(key,callback){
return figwheel.client.add_message_watch.call(null,key,cljs.core.comp.call(null,callback,cljs.core.clj__GT_js));
});
goog.exportSymbol('figwheel.client.add_json_message_watch', figwheel.client.add_json_message_watch);
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__38907 = cljs.core.seq.call(null,plugins);
var chunk__38908 = null;
var count__38909 = (0);
var i__38910 = (0);
while(true){
if((i__38910 < count__38909)){
var vec__38911 = cljs.core._nth.call(null,chunk__38908,i__38910);
var k = cljs.core.nth.call(null,vec__38911,(0),null);
var plugin = cljs.core.nth.call(null,vec__38911,(1),null);
if(cljs.core.truth_(plugin)){
var pl_38917 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__38907,chunk__38908,count__38909,i__38910,pl_38917,vec__38911,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_38917.call(null,msg_hist);
});})(seq__38907,chunk__38908,count__38909,i__38910,pl_38917,vec__38911,k,plugin))
);
} else {
}


var G__38918 = seq__38907;
var G__38919 = chunk__38908;
var G__38920 = count__38909;
var G__38921 = (i__38910 + (1));
seq__38907 = G__38918;
chunk__38908 = G__38919;
count__38909 = G__38920;
i__38910 = G__38921;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__38907);
if(temp__4657__auto__){
var seq__38907__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38907__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__38907__$1);
var G__38922 = cljs.core.chunk_rest.call(null,seq__38907__$1);
var G__38923 = c__4319__auto__;
var G__38924 = cljs.core.count.call(null,c__4319__auto__);
var G__38925 = (0);
seq__38907 = G__38922;
chunk__38908 = G__38923;
count__38909 = G__38924;
i__38910 = G__38925;
continue;
} else {
var vec__38914 = cljs.core.first.call(null,seq__38907__$1);
var k = cljs.core.nth.call(null,vec__38914,(0),null);
var plugin = cljs.core.nth.call(null,vec__38914,(1),null);
if(cljs.core.truth_(plugin)){
var pl_38926 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__38907,chunk__38908,count__38909,i__38910,pl_38926,vec__38914,k,plugin,seq__38907__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_38926.call(null,msg_hist);
});})(seq__38907,chunk__38908,count__38909,i__38910,pl_38926,vec__38914,k,plugin,seq__38907__$1,temp__4657__auto__))
);
} else {
}


var G__38927 = cljs.core.next.call(null,seq__38907__$1);
var G__38928 = null;
var G__38929 = (0);
var G__38930 = (0);
seq__38907 = G__38927;
chunk__38908 = G__38928;
count__38909 = G__38929;
i__38910 = G__38930;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__38932 = arguments.length;
switch (G__38932) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__38933_38938 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__38934_38939 = null;
var count__38935_38940 = (0);
var i__38936_38941 = (0);
while(true){
if((i__38936_38941 < count__38935_38940)){
var msg_38942 = cljs.core._nth.call(null,chunk__38934_38939,i__38936_38941);
figwheel.client.socket.handle_incoming_message.call(null,msg_38942);


var G__38943 = seq__38933_38938;
var G__38944 = chunk__38934_38939;
var G__38945 = count__38935_38940;
var G__38946 = (i__38936_38941 + (1));
seq__38933_38938 = G__38943;
chunk__38934_38939 = G__38944;
count__38935_38940 = G__38945;
i__38936_38941 = G__38946;
continue;
} else {
var temp__4657__auto___38947 = cljs.core.seq.call(null,seq__38933_38938);
if(temp__4657__auto___38947){
var seq__38933_38948__$1 = temp__4657__auto___38947;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38933_38948__$1)){
var c__4319__auto___38949 = cljs.core.chunk_first.call(null,seq__38933_38948__$1);
var G__38950 = cljs.core.chunk_rest.call(null,seq__38933_38948__$1);
var G__38951 = c__4319__auto___38949;
var G__38952 = cljs.core.count.call(null,c__4319__auto___38949);
var G__38953 = (0);
seq__38933_38938 = G__38950;
chunk__38934_38939 = G__38951;
count__38935_38940 = G__38952;
i__38936_38941 = G__38953;
continue;
} else {
var msg_38954 = cljs.core.first.call(null,seq__38933_38948__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_38954);


var G__38955 = cljs.core.next.call(null,seq__38933_38948__$1);
var G__38956 = null;
var G__38957 = (0);
var G__38958 = (0);
seq__38933_38938 = G__38955;
chunk__38934_38939 = G__38956;
count__38935_38940 = G__38957;
i__38936_38941 = G__38958;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__4502__auto__ = [];
var len__4499__auto___38963 = arguments.length;
var i__4500__auto___38964 = (0);
while(true){
if((i__4500__auto___38964 < len__4499__auto___38963)){
args__4502__auto__.push((arguments[i__4500__auto___38964]));

var G__38965 = (i__4500__auto___38964 + (1));
i__4500__auto___38964 = G__38965;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__38960){
var map__38961 = p__38960;
var map__38961__$1 = ((((!((map__38961 == null)))?(((((map__38961.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38961.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38961):map__38961);
var opts = map__38961__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq38959){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38959));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e38966){if((e38966 instanceof Error)){
var e = e38966;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e38966;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__38967){
var map__38968 = p__38967;
var map__38968__$1 = ((((!((map__38968 == null)))?(((((map__38968.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38968.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38968):map__38968);
var msg_name = cljs.core.get.call(null,map__38968__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1530661658843
