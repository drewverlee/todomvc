// Compiled by ClojureScript 1.10.238 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__35583 = arguments.length;
switch (G__35583) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async35584 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35584 = (function (f,blockable,meta35585){
this.f = f;
this.blockable = blockable;
this.meta35585 = meta35585;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35584.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35586,meta35585__$1){
var self__ = this;
var _35586__$1 = this;
return (new cljs.core.async.t_cljs$core$async35584(self__.f,self__.blockable,meta35585__$1));
});

cljs.core.async.t_cljs$core$async35584.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35586){
var self__ = this;
var _35586__$1 = this;
return self__.meta35585;
});

cljs.core.async.t_cljs$core$async35584.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35584.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async35584.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async35584.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async35584.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta35585","meta35585",-642856004,null)], null);
});

cljs.core.async.t_cljs$core$async35584.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35584.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35584";

cljs.core.async.t_cljs$core$async35584.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async35584");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35584.
 */
cljs.core.async.__GT_t_cljs$core$async35584 = (function cljs$core$async$__GT_t_cljs$core$async35584(f__$1,blockable__$1,meta35585){
return (new cljs.core.async.t_cljs$core$async35584(f__$1,blockable__$1,meta35585));
});

}

return (new cljs.core.async.t_cljs$core$async35584(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__35590 = arguments.length;
switch (G__35590) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__35593 = arguments.length;
switch (G__35593) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__35596 = arguments.length;
switch (G__35596) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_35598 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_35598);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_35598,ret){
return (function (){
return fn1.call(null,val_35598);
});})(val_35598,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__35600 = arguments.length;
switch (G__35600) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4376__auto___35602 = n;
var x_35603 = (0);
while(true){
if((x_35603 < n__4376__auto___35602)){
(a[x_35603] = (0));

var G__35604 = (x_35603 + (1));
x_35603 = G__35604;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__35605 = (i + (1));
i = G__35605;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async35606 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35606 = (function (flag,meta35607){
this.flag = flag;
this.meta35607 = meta35607;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35606.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_35608,meta35607__$1){
var self__ = this;
var _35608__$1 = this;
return (new cljs.core.async.t_cljs$core$async35606(self__.flag,meta35607__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async35606.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_35608){
var self__ = this;
var _35608__$1 = this;
return self__.meta35607;
});})(flag))
;

cljs.core.async.t_cljs$core$async35606.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35606.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async35606.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async35606.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async35606.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta35607","meta35607",1999953121,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async35606.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35606.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35606";

cljs.core.async.t_cljs$core$async35606.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async35606");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35606.
 */
cljs.core.async.__GT_t_cljs$core$async35606 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async35606(flag__$1,meta35607){
return (new cljs.core.async.t_cljs$core$async35606(flag__$1,meta35607));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async35606(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async35609 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35609 = (function (flag,cb,meta35610){
this.flag = flag;
this.cb = cb;
this.meta35610 = meta35610;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35609.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35611,meta35610__$1){
var self__ = this;
var _35611__$1 = this;
return (new cljs.core.async.t_cljs$core$async35609(self__.flag,self__.cb,meta35610__$1));
});

cljs.core.async.t_cljs$core$async35609.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35611){
var self__ = this;
var _35611__$1 = this;
return self__.meta35610;
});

cljs.core.async.t_cljs$core$async35609.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35609.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async35609.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async35609.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async35609.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta35610","meta35610",1429548281,null)], null);
});

cljs.core.async.t_cljs$core$async35609.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35609.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35609";

cljs.core.async.t_cljs$core$async35609.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async35609");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35609.
 */
cljs.core.async.__GT_t_cljs$core$async35609 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async35609(flag__$1,cb__$1,meta35610){
return (new cljs.core.async.t_cljs$core$async35609(flag__$1,cb__$1,meta35610));
});

}

return (new cljs.core.async.t_cljs$core$async35609(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__35612_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__35612_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__35613_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__35613_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3922__auto__ = wport;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return port;
}
})()], null));
} else {
var G__35614 = (i + (1));
i = G__35614;
continue;
}
} else {
return null;
}
break;
}
})();
var or__3922__auto__ = ret;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__3911__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__3911__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___35620 = arguments.length;
var i__4500__auto___35621 = (0);
while(true){
if((i__4500__auto___35621 < len__4499__auto___35620)){
args__4502__auto__.push((arguments[i__4500__auto___35621]));

var G__35622 = (i__4500__auto___35621 + (1));
i__4500__auto___35621 = G__35622;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__35617){
var map__35618 = p__35617;
var map__35618__$1 = ((((!((map__35618 == null)))?(((((map__35618.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35618.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35618):map__35618);
var opts = map__35618__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq35615){
var G__35616 = cljs.core.first.call(null,seq35615);
var seq35615__$1 = cljs.core.next.call(null,seq35615);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35616,seq35615__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__35624 = arguments.length;
switch (G__35624) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__35537__auto___35670 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35537__auto___35670){
return (function (){
var f__35538__auto__ = (function (){var switch__35449__auto__ = ((function (c__35537__auto___35670){
return (function (state_35648){
var state_val_35649 = (state_35648[(1)]);
if((state_val_35649 === (7))){
var inst_35644 = (state_35648[(2)]);
var state_35648__$1 = state_35648;
var statearr_35650_35671 = state_35648__$1;
(statearr_35650_35671[(2)] = inst_35644);

(statearr_35650_35671[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35649 === (1))){
var state_35648__$1 = state_35648;
var statearr_35651_35672 = state_35648__$1;
(statearr_35651_35672[(2)] = null);

(statearr_35651_35672[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35649 === (4))){
var inst_35627 = (state_35648[(7)]);
var inst_35627__$1 = (state_35648[(2)]);
var inst_35628 = (inst_35627__$1 == null);
var state_35648__$1 = (function (){var statearr_35652 = state_35648;
(statearr_35652[(7)] = inst_35627__$1);

return statearr_35652;
})();
if(cljs.core.truth_(inst_35628)){
var statearr_35653_35673 = state_35648__$1;
(statearr_35653_35673[(1)] = (5));

} else {
var statearr_35654_35674 = state_35648__$1;
(statearr_35654_35674[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35649 === (13))){
var state_35648__$1 = state_35648;
var statearr_35655_35675 = state_35648__$1;
(statearr_35655_35675[(2)] = null);

(statearr_35655_35675[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35649 === (6))){
var inst_35627 = (state_35648[(7)]);
var state_35648__$1 = state_35648;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35648__$1,(11),to,inst_35627);
} else {
if((state_val_35649 === (3))){
var inst_35646 = (state_35648[(2)]);
var state_35648__$1 = state_35648;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35648__$1,inst_35646);
} else {
if((state_val_35649 === (12))){
var state_35648__$1 = state_35648;
var statearr_35656_35676 = state_35648__$1;
(statearr_35656_35676[(2)] = null);

(statearr_35656_35676[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35649 === (2))){
var state_35648__$1 = state_35648;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35648__$1,(4),from);
} else {
if((state_val_35649 === (11))){
var inst_35637 = (state_35648[(2)]);
var state_35648__$1 = state_35648;
if(cljs.core.truth_(inst_35637)){
var statearr_35657_35677 = state_35648__$1;
(statearr_35657_35677[(1)] = (12));

} else {
var statearr_35658_35678 = state_35648__$1;
(statearr_35658_35678[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35649 === (9))){
var state_35648__$1 = state_35648;
var statearr_35659_35679 = state_35648__$1;
(statearr_35659_35679[(2)] = null);

(statearr_35659_35679[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35649 === (5))){
var state_35648__$1 = state_35648;
if(cljs.core.truth_(close_QMARK_)){
var statearr_35660_35680 = state_35648__$1;
(statearr_35660_35680[(1)] = (8));

} else {
var statearr_35661_35681 = state_35648__$1;
(statearr_35661_35681[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35649 === (14))){
var inst_35642 = (state_35648[(2)]);
var state_35648__$1 = state_35648;
var statearr_35662_35682 = state_35648__$1;
(statearr_35662_35682[(2)] = inst_35642);

(statearr_35662_35682[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35649 === (10))){
var inst_35634 = (state_35648[(2)]);
var state_35648__$1 = state_35648;
var statearr_35663_35683 = state_35648__$1;
(statearr_35663_35683[(2)] = inst_35634);

(statearr_35663_35683[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35649 === (8))){
var inst_35631 = cljs.core.async.close_BANG_.call(null,to);
var state_35648__$1 = state_35648;
var statearr_35664_35684 = state_35648__$1;
(statearr_35664_35684[(2)] = inst_35631);

(statearr_35664_35684[(1)] = (10));


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
});})(c__35537__auto___35670))
;
return ((function (switch__35449__auto__,c__35537__auto___35670){
return (function() {
var cljs$core$async$state_machine__35450__auto__ = null;
var cljs$core$async$state_machine__35450__auto____0 = (function (){
var statearr_35665 = [null,null,null,null,null,null,null,null];
(statearr_35665[(0)] = cljs$core$async$state_machine__35450__auto__);

(statearr_35665[(1)] = (1));

return statearr_35665;
});
var cljs$core$async$state_machine__35450__auto____1 = (function (state_35648){
while(true){
var ret_value__35451__auto__ = (function (){try{while(true){
var result__35452__auto__ = switch__35449__auto__.call(null,state_35648);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35452__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35452__auto__;
}
break;
}
}catch (e35666){if((e35666 instanceof Object)){
var ex__35453__auto__ = e35666;
var statearr_35667_35685 = state_35648;
(statearr_35667_35685[(5)] = ex__35453__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35648);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35666;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35451__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35686 = state_35648;
state_35648 = G__35686;
continue;
} else {
return ret_value__35451__auto__;
}
break;
}
});
cljs$core$async$state_machine__35450__auto__ = function(state_35648){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35450__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35450__auto____1.call(this,state_35648);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__35450__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35450__auto____0;
cljs$core$async$state_machine__35450__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35450__auto____1;
return cljs$core$async$state_machine__35450__auto__;
})()
;})(switch__35449__auto__,c__35537__auto___35670))
})();
var state__35539__auto__ = (function (){var statearr_35668 = f__35538__auto__.call(null);
(statearr_35668[(6)] = c__35537__auto___35670);

return statearr_35668;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35539__auto__);
});})(c__35537__auto___35670))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__35687){
var vec__35688 = p__35687;
var v = cljs.core.nth.call(null,vec__35688,(0),null);
var p = cljs.core.nth.call(null,vec__35688,(1),null);
var job = vec__35688;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__35537__auto___35859 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35537__auto___35859,res,vec__35688,v,p,job,jobs,results){
return (function (){
var f__35538__auto__ = (function (){var switch__35449__auto__ = ((function (c__35537__auto___35859,res,vec__35688,v,p,job,jobs,results){
return (function (state_35695){
var state_val_35696 = (state_35695[(1)]);
if((state_val_35696 === (1))){
var state_35695__$1 = state_35695;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35695__$1,(2),res,v);
} else {
if((state_val_35696 === (2))){
var inst_35692 = (state_35695[(2)]);
var inst_35693 = cljs.core.async.close_BANG_.call(null,res);
var state_35695__$1 = (function (){var statearr_35697 = state_35695;
(statearr_35697[(7)] = inst_35692);

return statearr_35697;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35695__$1,inst_35693);
} else {
return null;
}
}
});})(c__35537__auto___35859,res,vec__35688,v,p,job,jobs,results))
;
return ((function (switch__35449__auto__,c__35537__auto___35859,res,vec__35688,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__35450__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__35450__auto____0 = (function (){
var statearr_35698 = [null,null,null,null,null,null,null,null];
(statearr_35698[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__35450__auto__);

(statearr_35698[(1)] = (1));

return statearr_35698;
});
var cljs$core$async$pipeline_STAR__$_state_machine__35450__auto____1 = (function (state_35695){
while(true){
var ret_value__35451__auto__ = (function (){try{while(true){
var result__35452__auto__ = switch__35449__auto__.call(null,state_35695);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35452__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35452__auto__;
}
break;
}
}catch (e35699){if((e35699 instanceof Object)){
var ex__35453__auto__ = e35699;
var statearr_35700_35860 = state_35695;
(statearr_35700_35860[(5)] = ex__35453__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35695);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35699;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35451__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35861 = state_35695;
state_35695 = G__35861;
continue;
} else {
return ret_value__35451__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__35450__auto__ = function(state_35695){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__35450__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__35450__auto____1.call(this,state_35695);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__35450__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__35450__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__35450__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__35450__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__35450__auto__;
})()
;})(switch__35449__auto__,c__35537__auto___35859,res,vec__35688,v,p,job,jobs,results))
})();
var state__35539__auto__ = (function (){var statearr_35701 = f__35538__auto__.call(null);
(statearr_35701[(6)] = c__35537__auto___35859);

return statearr_35701;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35539__auto__);
});})(c__35537__auto___35859,res,vec__35688,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__35702){
var vec__35703 = p__35702;
var v = cljs.core.nth.call(null,vec__35703,(0),null);
var p = cljs.core.nth.call(null,vec__35703,(1),null);
var job = vec__35703;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__4376__auto___35862 = n;
var __35863 = (0);
while(true){
if((__35863 < n__4376__auto___35862)){
var G__35706_35864 = type;
var G__35706_35865__$1 = (((G__35706_35864 instanceof cljs.core.Keyword))?G__35706_35864.fqn:null);
switch (G__35706_35865__$1) {
case "compute":
var c__35537__auto___35867 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__35863,c__35537__auto___35867,G__35706_35864,G__35706_35865__$1,n__4376__auto___35862,jobs,results,process,async){
return (function (){
var f__35538__auto__ = (function (){var switch__35449__auto__ = ((function (__35863,c__35537__auto___35867,G__35706_35864,G__35706_35865__$1,n__4376__auto___35862,jobs,results,process,async){
return (function (state_35719){
var state_val_35720 = (state_35719[(1)]);
if((state_val_35720 === (1))){
var state_35719__$1 = state_35719;
var statearr_35721_35868 = state_35719__$1;
(statearr_35721_35868[(2)] = null);

(statearr_35721_35868[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35720 === (2))){
var state_35719__$1 = state_35719;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35719__$1,(4),jobs);
} else {
if((state_val_35720 === (3))){
var inst_35717 = (state_35719[(2)]);
var state_35719__$1 = state_35719;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35719__$1,inst_35717);
} else {
if((state_val_35720 === (4))){
var inst_35709 = (state_35719[(2)]);
var inst_35710 = process.call(null,inst_35709);
var state_35719__$1 = state_35719;
if(cljs.core.truth_(inst_35710)){
var statearr_35722_35869 = state_35719__$1;
(statearr_35722_35869[(1)] = (5));

} else {
var statearr_35723_35870 = state_35719__$1;
(statearr_35723_35870[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35720 === (5))){
var state_35719__$1 = state_35719;
var statearr_35724_35871 = state_35719__$1;
(statearr_35724_35871[(2)] = null);

(statearr_35724_35871[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35720 === (6))){
var state_35719__$1 = state_35719;
var statearr_35725_35872 = state_35719__$1;
(statearr_35725_35872[(2)] = null);

(statearr_35725_35872[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35720 === (7))){
var inst_35715 = (state_35719[(2)]);
var state_35719__$1 = state_35719;
var statearr_35726_35873 = state_35719__$1;
(statearr_35726_35873[(2)] = inst_35715);

(statearr_35726_35873[(1)] = (3));


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
});})(__35863,c__35537__auto___35867,G__35706_35864,G__35706_35865__$1,n__4376__auto___35862,jobs,results,process,async))
;
return ((function (__35863,switch__35449__auto__,c__35537__auto___35867,G__35706_35864,G__35706_35865__$1,n__4376__auto___35862,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__35450__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__35450__auto____0 = (function (){
var statearr_35727 = [null,null,null,null,null,null,null];
(statearr_35727[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__35450__auto__);

(statearr_35727[(1)] = (1));

return statearr_35727;
});
var cljs$core$async$pipeline_STAR__$_state_machine__35450__auto____1 = (function (state_35719){
while(true){
var ret_value__35451__auto__ = (function (){try{while(true){
var result__35452__auto__ = switch__35449__auto__.call(null,state_35719);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35452__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35452__auto__;
}
break;
}
}catch (e35728){if((e35728 instanceof Object)){
var ex__35453__auto__ = e35728;
var statearr_35729_35874 = state_35719;
(statearr_35729_35874[(5)] = ex__35453__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35719);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35728;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35451__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35875 = state_35719;
state_35719 = G__35875;
continue;
} else {
return ret_value__35451__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__35450__auto__ = function(state_35719){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__35450__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__35450__auto____1.call(this,state_35719);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__35450__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__35450__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__35450__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__35450__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__35450__auto__;
})()
;})(__35863,switch__35449__auto__,c__35537__auto___35867,G__35706_35864,G__35706_35865__$1,n__4376__auto___35862,jobs,results,process,async))
})();
var state__35539__auto__ = (function (){var statearr_35730 = f__35538__auto__.call(null);
(statearr_35730[(6)] = c__35537__auto___35867);

return statearr_35730;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35539__auto__);
});})(__35863,c__35537__auto___35867,G__35706_35864,G__35706_35865__$1,n__4376__auto___35862,jobs,results,process,async))
);


break;
case "async":
var c__35537__auto___35876 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__35863,c__35537__auto___35876,G__35706_35864,G__35706_35865__$1,n__4376__auto___35862,jobs,results,process,async){
return (function (){
var f__35538__auto__ = (function (){var switch__35449__auto__ = ((function (__35863,c__35537__auto___35876,G__35706_35864,G__35706_35865__$1,n__4376__auto___35862,jobs,results,process,async){
return (function (state_35743){
var state_val_35744 = (state_35743[(1)]);
if((state_val_35744 === (1))){
var state_35743__$1 = state_35743;
var statearr_35745_35877 = state_35743__$1;
(statearr_35745_35877[(2)] = null);

(statearr_35745_35877[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35744 === (2))){
var state_35743__$1 = state_35743;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35743__$1,(4),jobs);
} else {
if((state_val_35744 === (3))){
var inst_35741 = (state_35743[(2)]);
var state_35743__$1 = state_35743;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35743__$1,inst_35741);
} else {
if((state_val_35744 === (4))){
var inst_35733 = (state_35743[(2)]);
var inst_35734 = async.call(null,inst_35733);
var state_35743__$1 = state_35743;
if(cljs.core.truth_(inst_35734)){
var statearr_35746_35878 = state_35743__$1;
(statearr_35746_35878[(1)] = (5));

} else {
var statearr_35747_35879 = state_35743__$1;
(statearr_35747_35879[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35744 === (5))){
var state_35743__$1 = state_35743;
var statearr_35748_35880 = state_35743__$1;
(statearr_35748_35880[(2)] = null);

(statearr_35748_35880[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35744 === (6))){
var state_35743__$1 = state_35743;
var statearr_35749_35881 = state_35743__$1;
(statearr_35749_35881[(2)] = null);

(statearr_35749_35881[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35744 === (7))){
var inst_35739 = (state_35743[(2)]);
var state_35743__$1 = state_35743;
var statearr_35750_35882 = state_35743__$1;
(statearr_35750_35882[(2)] = inst_35739);

(statearr_35750_35882[(1)] = (3));


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
});})(__35863,c__35537__auto___35876,G__35706_35864,G__35706_35865__$1,n__4376__auto___35862,jobs,results,process,async))
;
return ((function (__35863,switch__35449__auto__,c__35537__auto___35876,G__35706_35864,G__35706_35865__$1,n__4376__auto___35862,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__35450__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__35450__auto____0 = (function (){
var statearr_35751 = [null,null,null,null,null,null,null];
(statearr_35751[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__35450__auto__);

(statearr_35751[(1)] = (1));

return statearr_35751;
});
var cljs$core$async$pipeline_STAR__$_state_machine__35450__auto____1 = (function (state_35743){
while(true){
var ret_value__35451__auto__ = (function (){try{while(true){
var result__35452__auto__ = switch__35449__auto__.call(null,state_35743);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35452__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35452__auto__;
}
break;
}
}catch (e35752){if((e35752 instanceof Object)){
var ex__35453__auto__ = e35752;
var statearr_35753_35883 = state_35743;
(statearr_35753_35883[(5)] = ex__35453__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35743);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35752;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35451__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35884 = state_35743;
state_35743 = G__35884;
continue;
} else {
return ret_value__35451__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__35450__auto__ = function(state_35743){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__35450__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__35450__auto____1.call(this,state_35743);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__35450__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__35450__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__35450__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__35450__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__35450__auto__;
})()
;})(__35863,switch__35449__auto__,c__35537__auto___35876,G__35706_35864,G__35706_35865__$1,n__4376__auto___35862,jobs,results,process,async))
})();
var state__35539__auto__ = (function (){var statearr_35754 = f__35538__auto__.call(null);
(statearr_35754[(6)] = c__35537__auto___35876);

return statearr_35754;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35539__auto__);
});})(__35863,c__35537__auto___35876,G__35706_35864,G__35706_35865__$1,n__4376__auto___35862,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35706_35865__$1)].join('')));

}

var G__35885 = (__35863 + (1));
__35863 = G__35885;
continue;
} else {
}
break;
}

var c__35537__auto___35886 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35537__auto___35886,jobs,results,process,async){
return (function (){
var f__35538__auto__ = (function (){var switch__35449__auto__ = ((function (c__35537__auto___35886,jobs,results,process,async){
return (function (state_35776){
var state_val_35777 = (state_35776[(1)]);
if((state_val_35777 === (1))){
var state_35776__$1 = state_35776;
var statearr_35778_35887 = state_35776__$1;
(statearr_35778_35887[(2)] = null);

(statearr_35778_35887[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35777 === (2))){
var state_35776__$1 = state_35776;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35776__$1,(4),from);
} else {
if((state_val_35777 === (3))){
var inst_35774 = (state_35776[(2)]);
var state_35776__$1 = state_35776;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35776__$1,inst_35774);
} else {
if((state_val_35777 === (4))){
var inst_35757 = (state_35776[(7)]);
var inst_35757__$1 = (state_35776[(2)]);
var inst_35758 = (inst_35757__$1 == null);
var state_35776__$1 = (function (){var statearr_35779 = state_35776;
(statearr_35779[(7)] = inst_35757__$1);

return statearr_35779;
})();
if(cljs.core.truth_(inst_35758)){
var statearr_35780_35888 = state_35776__$1;
(statearr_35780_35888[(1)] = (5));

} else {
var statearr_35781_35889 = state_35776__$1;
(statearr_35781_35889[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35777 === (5))){
var inst_35760 = cljs.core.async.close_BANG_.call(null,jobs);
var state_35776__$1 = state_35776;
var statearr_35782_35890 = state_35776__$1;
(statearr_35782_35890[(2)] = inst_35760);

(statearr_35782_35890[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35777 === (6))){
var inst_35762 = (state_35776[(8)]);
var inst_35757 = (state_35776[(7)]);
var inst_35762__$1 = cljs.core.async.chan.call(null,(1));
var inst_35763 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_35764 = [inst_35757,inst_35762__$1];
var inst_35765 = (new cljs.core.PersistentVector(null,2,(5),inst_35763,inst_35764,null));
var state_35776__$1 = (function (){var statearr_35783 = state_35776;
(statearr_35783[(8)] = inst_35762__$1);

return statearr_35783;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35776__$1,(8),jobs,inst_35765);
} else {
if((state_val_35777 === (7))){
var inst_35772 = (state_35776[(2)]);
var state_35776__$1 = state_35776;
var statearr_35784_35891 = state_35776__$1;
(statearr_35784_35891[(2)] = inst_35772);

(statearr_35784_35891[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35777 === (8))){
var inst_35762 = (state_35776[(8)]);
var inst_35767 = (state_35776[(2)]);
var state_35776__$1 = (function (){var statearr_35785 = state_35776;
(statearr_35785[(9)] = inst_35767);

return statearr_35785;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35776__$1,(9),results,inst_35762);
} else {
if((state_val_35777 === (9))){
var inst_35769 = (state_35776[(2)]);
var state_35776__$1 = (function (){var statearr_35786 = state_35776;
(statearr_35786[(10)] = inst_35769);

return statearr_35786;
})();
var statearr_35787_35892 = state_35776__$1;
(statearr_35787_35892[(2)] = null);

(statearr_35787_35892[(1)] = (2));


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
});})(c__35537__auto___35886,jobs,results,process,async))
;
return ((function (switch__35449__auto__,c__35537__auto___35886,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__35450__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__35450__auto____0 = (function (){
var statearr_35788 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35788[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__35450__auto__);

(statearr_35788[(1)] = (1));

return statearr_35788;
});
var cljs$core$async$pipeline_STAR__$_state_machine__35450__auto____1 = (function (state_35776){
while(true){
var ret_value__35451__auto__ = (function (){try{while(true){
var result__35452__auto__ = switch__35449__auto__.call(null,state_35776);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35452__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35452__auto__;
}
break;
}
}catch (e35789){if((e35789 instanceof Object)){
var ex__35453__auto__ = e35789;
var statearr_35790_35893 = state_35776;
(statearr_35790_35893[(5)] = ex__35453__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35776);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35789;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35451__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35894 = state_35776;
state_35776 = G__35894;
continue;
} else {
return ret_value__35451__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__35450__auto__ = function(state_35776){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__35450__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__35450__auto____1.call(this,state_35776);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__35450__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__35450__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__35450__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__35450__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__35450__auto__;
})()
;})(switch__35449__auto__,c__35537__auto___35886,jobs,results,process,async))
})();
var state__35539__auto__ = (function (){var statearr_35791 = f__35538__auto__.call(null);
(statearr_35791[(6)] = c__35537__auto___35886);

return statearr_35791;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35539__auto__);
});})(c__35537__auto___35886,jobs,results,process,async))
);


var c__35537__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35537__auto__,jobs,results,process,async){
return (function (){
var f__35538__auto__ = (function (){var switch__35449__auto__ = ((function (c__35537__auto__,jobs,results,process,async){
return (function (state_35829){
var state_val_35830 = (state_35829[(1)]);
if((state_val_35830 === (7))){
var inst_35825 = (state_35829[(2)]);
var state_35829__$1 = state_35829;
var statearr_35831_35895 = state_35829__$1;
(statearr_35831_35895[(2)] = inst_35825);

(statearr_35831_35895[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35830 === (20))){
var state_35829__$1 = state_35829;
var statearr_35832_35896 = state_35829__$1;
(statearr_35832_35896[(2)] = null);

(statearr_35832_35896[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35830 === (1))){
var state_35829__$1 = state_35829;
var statearr_35833_35897 = state_35829__$1;
(statearr_35833_35897[(2)] = null);

(statearr_35833_35897[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35830 === (4))){
var inst_35794 = (state_35829[(7)]);
var inst_35794__$1 = (state_35829[(2)]);
var inst_35795 = (inst_35794__$1 == null);
var state_35829__$1 = (function (){var statearr_35834 = state_35829;
(statearr_35834[(7)] = inst_35794__$1);

return statearr_35834;
})();
if(cljs.core.truth_(inst_35795)){
var statearr_35835_35898 = state_35829__$1;
(statearr_35835_35898[(1)] = (5));

} else {
var statearr_35836_35899 = state_35829__$1;
(statearr_35836_35899[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35830 === (15))){
var inst_35807 = (state_35829[(8)]);
var state_35829__$1 = state_35829;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35829__$1,(18),to,inst_35807);
} else {
if((state_val_35830 === (21))){
var inst_35820 = (state_35829[(2)]);
var state_35829__$1 = state_35829;
var statearr_35837_35900 = state_35829__$1;
(statearr_35837_35900[(2)] = inst_35820);

(statearr_35837_35900[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35830 === (13))){
var inst_35822 = (state_35829[(2)]);
var state_35829__$1 = (function (){var statearr_35838 = state_35829;
(statearr_35838[(9)] = inst_35822);

return statearr_35838;
})();
var statearr_35839_35901 = state_35829__$1;
(statearr_35839_35901[(2)] = null);

(statearr_35839_35901[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35830 === (6))){
var inst_35794 = (state_35829[(7)]);
var state_35829__$1 = state_35829;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35829__$1,(11),inst_35794);
} else {
if((state_val_35830 === (17))){
var inst_35815 = (state_35829[(2)]);
var state_35829__$1 = state_35829;
if(cljs.core.truth_(inst_35815)){
var statearr_35840_35902 = state_35829__$1;
(statearr_35840_35902[(1)] = (19));

} else {
var statearr_35841_35903 = state_35829__$1;
(statearr_35841_35903[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35830 === (3))){
var inst_35827 = (state_35829[(2)]);
var state_35829__$1 = state_35829;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35829__$1,inst_35827);
} else {
if((state_val_35830 === (12))){
var inst_35804 = (state_35829[(10)]);
var state_35829__$1 = state_35829;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35829__$1,(14),inst_35804);
} else {
if((state_val_35830 === (2))){
var state_35829__$1 = state_35829;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35829__$1,(4),results);
} else {
if((state_val_35830 === (19))){
var state_35829__$1 = state_35829;
var statearr_35842_35904 = state_35829__$1;
(statearr_35842_35904[(2)] = null);

(statearr_35842_35904[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35830 === (11))){
var inst_35804 = (state_35829[(2)]);
var state_35829__$1 = (function (){var statearr_35843 = state_35829;
(statearr_35843[(10)] = inst_35804);

return statearr_35843;
})();
var statearr_35844_35905 = state_35829__$1;
(statearr_35844_35905[(2)] = null);

(statearr_35844_35905[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35830 === (9))){
var state_35829__$1 = state_35829;
var statearr_35845_35906 = state_35829__$1;
(statearr_35845_35906[(2)] = null);

(statearr_35845_35906[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35830 === (5))){
var state_35829__$1 = state_35829;
if(cljs.core.truth_(close_QMARK_)){
var statearr_35846_35907 = state_35829__$1;
(statearr_35846_35907[(1)] = (8));

} else {
var statearr_35847_35908 = state_35829__$1;
(statearr_35847_35908[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35830 === (14))){
var inst_35809 = (state_35829[(11)]);
var inst_35807 = (state_35829[(8)]);
var inst_35807__$1 = (state_35829[(2)]);
var inst_35808 = (inst_35807__$1 == null);
var inst_35809__$1 = cljs.core.not.call(null,inst_35808);
var state_35829__$1 = (function (){var statearr_35848 = state_35829;
(statearr_35848[(11)] = inst_35809__$1);

(statearr_35848[(8)] = inst_35807__$1);

return statearr_35848;
})();
if(inst_35809__$1){
var statearr_35849_35909 = state_35829__$1;
(statearr_35849_35909[(1)] = (15));

} else {
var statearr_35850_35910 = state_35829__$1;
(statearr_35850_35910[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35830 === (16))){
var inst_35809 = (state_35829[(11)]);
var state_35829__$1 = state_35829;
var statearr_35851_35911 = state_35829__$1;
(statearr_35851_35911[(2)] = inst_35809);

(statearr_35851_35911[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35830 === (10))){
var inst_35801 = (state_35829[(2)]);
var state_35829__$1 = state_35829;
var statearr_35852_35912 = state_35829__$1;
(statearr_35852_35912[(2)] = inst_35801);

(statearr_35852_35912[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35830 === (18))){
var inst_35812 = (state_35829[(2)]);
var state_35829__$1 = state_35829;
var statearr_35853_35913 = state_35829__$1;
(statearr_35853_35913[(2)] = inst_35812);

(statearr_35853_35913[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35830 === (8))){
var inst_35798 = cljs.core.async.close_BANG_.call(null,to);
var state_35829__$1 = state_35829;
var statearr_35854_35914 = state_35829__$1;
(statearr_35854_35914[(2)] = inst_35798);

(statearr_35854_35914[(1)] = (10));


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
});})(c__35537__auto__,jobs,results,process,async))
;
return ((function (switch__35449__auto__,c__35537__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__35450__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__35450__auto____0 = (function (){
var statearr_35855 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35855[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__35450__auto__);

(statearr_35855[(1)] = (1));

return statearr_35855;
});
var cljs$core$async$pipeline_STAR__$_state_machine__35450__auto____1 = (function (state_35829){
while(true){
var ret_value__35451__auto__ = (function (){try{while(true){
var result__35452__auto__ = switch__35449__auto__.call(null,state_35829);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35452__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35452__auto__;
}
break;
}
}catch (e35856){if((e35856 instanceof Object)){
var ex__35453__auto__ = e35856;
var statearr_35857_35915 = state_35829;
(statearr_35857_35915[(5)] = ex__35453__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35829);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35856;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35451__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35916 = state_35829;
state_35829 = G__35916;
continue;
} else {
return ret_value__35451__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__35450__auto__ = function(state_35829){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__35450__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__35450__auto____1.call(this,state_35829);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__35450__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__35450__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__35450__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__35450__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__35450__auto__;
})()
;})(switch__35449__auto__,c__35537__auto__,jobs,results,process,async))
})();
var state__35539__auto__ = (function (){var statearr_35858 = f__35538__auto__.call(null);
(statearr_35858[(6)] = c__35537__auto__);

return statearr_35858;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35539__auto__);
});})(c__35537__auto__,jobs,results,process,async))
);

return c__35537__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__35918 = arguments.length;
switch (G__35918) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__35921 = arguments.length;
switch (G__35921) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__35924 = arguments.length;
switch (G__35924) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__35537__auto___35973 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35537__auto___35973,tc,fc){
return (function (){
var f__35538__auto__ = (function (){var switch__35449__auto__ = ((function (c__35537__auto___35973,tc,fc){
return (function (state_35950){
var state_val_35951 = (state_35950[(1)]);
if((state_val_35951 === (7))){
var inst_35946 = (state_35950[(2)]);
var state_35950__$1 = state_35950;
var statearr_35952_35974 = state_35950__$1;
(statearr_35952_35974[(2)] = inst_35946);

(statearr_35952_35974[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35951 === (1))){
var state_35950__$1 = state_35950;
var statearr_35953_35975 = state_35950__$1;
(statearr_35953_35975[(2)] = null);

(statearr_35953_35975[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35951 === (4))){
var inst_35927 = (state_35950[(7)]);
var inst_35927__$1 = (state_35950[(2)]);
var inst_35928 = (inst_35927__$1 == null);
var state_35950__$1 = (function (){var statearr_35954 = state_35950;
(statearr_35954[(7)] = inst_35927__$1);

return statearr_35954;
})();
if(cljs.core.truth_(inst_35928)){
var statearr_35955_35976 = state_35950__$1;
(statearr_35955_35976[(1)] = (5));

} else {
var statearr_35956_35977 = state_35950__$1;
(statearr_35956_35977[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35951 === (13))){
var state_35950__$1 = state_35950;
var statearr_35957_35978 = state_35950__$1;
(statearr_35957_35978[(2)] = null);

(statearr_35957_35978[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35951 === (6))){
var inst_35927 = (state_35950[(7)]);
var inst_35933 = p.call(null,inst_35927);
var state_35950__$1 = state_35950;
if(cljs.core.truth_(inst_35933)){
var statearr_35958_35979 = state_35950__$1;
(statearr_35958_35979[(1)] = (9));

} else {
var statearr_35959_35980 = state_35950__$1;
(statearr_35959_35980[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35951 === (3))){
var inst_35948 = (state_35950[(2)]);
var state_35950__$1 = state_35950;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35950__$1,inst_35948);
} else {
if((state_val_35951 === (12))){
var state_35950__$1 = state_35950;
var statearr_35960_35981 = state_35950__$1;
(statearr_35960_35981[(2)] = null);

(statearr_35960_35981[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35951 === (2))){
var state_35950__$1 = state_35950;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35950__$1,(4),ch);
} else {
if((state_val_35951 === (11))){
var inst_35927 = (state_35950[(7)]);
var inst_35937 = (state_35950[(2)]);
var state_35950__$1 = state_35950;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35950__$1,(8),inst_35937,inst_35927);
} else {
if((state_val_35951 === (9))){
var state_35950__$1 = state_35950;
var statearr_35961_35982 = state_35950__$1;
(statearr_35961_35982[(2)] = tc);

(statearr_35961_35982[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35951 === (5))){
var inst_35930 = cljs.core.async.close_BANG_.call(null,tc);
var inst_35931 = cljs.core.async.close_BANG_.call(null,fc);
var state_35950__$1 = (function (){var statearr_35962 = state_35950;
(statearr_35962[(8)] = inst_35930);

return statearr_35962;
})();
var statearr_35963_35983 = state_35950__$1;
(statearr_35963_35983[(2)] = inst_35931);

(statearr_35963_35983[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35951 === (14))){
var inst_35944 = (state_35950[(2)]);
var state_35950__$1 = state_35950;
var statearr_35964_35984 = state_35950__$1;
(statearr_35964_35984[(2)] = inst_35944);

(statearr_35964_35984[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35951 === (10))){
var state_35950__$1 = state_35950;
var statearr_35965_35985 = state_35950__$1;
(statearr_35965_35985[(2)] = fc);

(statearr_35965_35985[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35951 === (8))){
var inst_35939 = (state_35950[(2)]);
var state_35950__$1 = state_35950;
if(cljs.core.truth_(inst_35939)){
var statearr_35966_35986 = state_35950__$1;
(statearr_35966_35986[(1)] = (12));

} else {
var statearr_35967_35987 = state_35950__$1;
(statearr_35967_35987[(1)] = (13));

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
});})(c__35537__auto___35973,tc,fc))
;
return ((function (switch__35449__auto__,c__35537__auto___35973,tc,fc){
return (function() {
var cljs$core$async$state_machine__35450__auto__ = null;
var cljs$core$async$state_machine__35450__auto____0 = (function (){
var statearr_35968 = [null,null,null,null,null,null,null,null,null];
(statearr_35968[(0)] = cljs$core$async$state_machine__35450__auto__);

(statearr_35968[(1)] = (1));

return statearr_35968;
});
var cljs$core$async$state_machine__35450__auto____1 = (function (state_35950){
while(true){
var ret_value__35451__auto__ = (function (){try{while(true){
var result__35452__auto__ = switch__35449__auto__.call(null,state_35950);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35452__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35452__auto__;
}
break;
}
}catch (e35969){if((e35969 instanceof Object)){
var ex__35453__auto__ = e35969;
var statearr_35970_35988 = state_35950;
(statearr_35970_35988[(5)] = ex__35453__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35950);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35969;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35451__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35989 = state_35950;
state_35950 = G__35989;
continue;
} else {
return ret_value__35451__auto__;
}
break;
}
});
cljs$core$async$state_machine__35450__auto__ = function(state_35950){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35450__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35450__auto____1.call(this,state_35950);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__35450__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35450__auto____0;
cljs$core$async$state_machine__35450__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35450__auto____1;
return cljs$core$async$state_machine__35450__auto__;
})()
;})(switch__35449__auto__,c__35537__auto___35973,tc,fc))
})();
var state__35539__auto__ = (function (){var statearr_35971 = f__35538__auto__.call(null);
(statearr_35971[(6)] = c__35537__auto___35973);

return statearr_35971;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35539__auto__);
});})(c__35537__auto___35973,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__35537__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35537__auto__){
return (function (){
var f__35538__auto__ = (function (){var switch__35449__auto__ = ((function (c__35537__auto__){
return (function (state_36010){
var state_val_36011 = (state_36010[(1)]);
if((state_val_36011 === (7))){
var inst_36006 = (state_36010[(2)]);
var state_36010__$1 = state_36010;
var statearr_36012_36030 = state_36010__$1;
(statearr_36012_36030[(2)] = inst_36006);

(statearr_36012_36030[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36011 === (1))){
var inst_35990 = init;
var state_36010__$1 = (function (){var statearr_36013 = state_36010;
(statearr_36013[(7)] = inst_35990);

return statearr_36013;
})();
var statearr_36014_36031 = state_36010__$1;
(statearr_36014_36031[(2)] = null);

(statearr_36014_36031[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36011 === (4))){
var inst_35993 = (state_36010[(8)]);
var inst_35993__$1 = (state_36010[(2)]);
var inst_35994 = (inst_35993__$1 == null);
var state_36010__$1 = (function (){var statearr_36015 = state_36010;
(statearr_36015[(8)] = inst_35993__$1);

return statearr_36015;
})();
if(cljs.core.truth_(inst_35994)){
var statearr_36016_36032 = state_36010__$1;
(statearr_36016_36032[(1)] = (5));

} else {
var statearr_36017_36033 = state_36010__$1;
(statearr_36017_36033[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36011 === (6))){
var inst_35993 = (state_36010[(8)]);
var inst_35997 = (state_36010[(9)]);
var inst_35990 = (state_36010[(7)]);
var inst_35997__$1 = f.call(null,inst_35990,inst_35993);
var inst_35998 = cljs.core.reduced_QMARK_.call(null,inst_35997__$1);
var state_36010__$1 = (function (){var statearr_36018 = state_36010;
(statearr_36018[(9)] = inst_35997__$1);

return statearr_36018;
})();
if(inst_35998){
var statearr_36019_36034 = state_36010__$1;
(statearr_36019_36034[(1)] = (8));

} else {
var statearr_36020_36035 = state_36010__$1;
(statearr_36020_36035[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36011 === (3))){
var inst_36008 = (state_36010[(2)]);
var state_36010__$1 = state_36010;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36010__$1,inst_36008);
} else {
if((state_val_36011 === (2))){
var state_36010__$1 = state_36010;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36010__$1,(4),ch);
} else {
if((state_val_36011 === (9))){
var inst_35997 = (state_36010[(9)]);
var inst_35990 = inst_35997;
var state_36010__$1 = (function (){var statearr_36021 = state_36010;
(statearr_36021[(7)] = inst_35990);

return statearr_36021;
})();
var statearr_36022_36036 = state_36010__$1;
(statearr_36022_36036[(2)] = null);

(statearr_36022_36036[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36011 === (5))){
var inst_35990 = (state_36010[(7)]);
var state_36010__$1 = state_36010;
var statearr_36023_36037 = state_36010__$1;
(statearr_36023_36037[(2)] = inst_35990);

(statearr_36023_36037[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36011 === (10))){
var inst_36004 = (state_36010[(2)]);
var state_36010__$1 = state_36010;
var statearr_36024_36038 = state_36010__$1;
(statearr_36024_36038[(2)] = inst_36004);

(statearr_36024_36038[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36011 === (8))){
var inst_35997 = (state_36010[(9)]);
var inst_36000 = cljs.core.deref.call(null,inst_35997);
var state_36010__$1 = state_36010;
var statearr_36025_36039 = state_36010__$1;
(statearr_36025_36039[(2)] = inst_36000);

(statearr_36025_36039[(1)] = (10));


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
});})(c__35537__auto__))
;
return ((function (switch__35449__auto__,c__35537__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__35450__auto__ = null;
var cljs$core$async$reduce_$_state_machine__35450__auto____0 = (function (){
var statearr_36026 = [null,null,null,null,null,null,null,null,null,null];
(statearr_36026[(0)] = cljs$core$async$reduce_$_state_machine__35450__auto__);

(statearr_36026[(1)] = (1));

return statearr_36026;
});
var cljs$core$async$reduce_$_state_machine__35450__auto____1 = (function (state_36010){
while(true){
var ret_value__35451__auto__ = (function (){try{while(true){
var result__35452__auto__ = switch__35449__auto__.call(null,state_36010);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35452__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35452__auto__;
}
break;
}
}catch (e36027){if((e36027 instanceof Object)){
var ex__35453__auto__ = e36027;
var statearr_36028_36040 = state_36010;
(statearr_36028_36040[(5)] = ex__35453__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36010);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36027;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35451__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36041 = state_36010;
state_36010 = G__36041;
continue;
} else {
return ret_value__35451__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__35450__auto__ = function(state_36010){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__35450__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__35450__auto____1.call(this,state_36010);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__35450__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__35450__auto____0;
cljs$core$async$reduce_$_state_machine__35450__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__35450__auto____1;
return cljs$core$async$reduce_$_state_machine__35450__auto__;
})()
;})(switch__35449__auto__,c__35537__auto__))
})();
var state__35539__auto__ = (function (){var statearr_36029 = f__35538__auto__.call(null);
(statearr_36029[(6)] = c__35537__auto__);

return statearr_36029;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35539__auto__);
});})(c__35537__auto__))
);

return c__35537__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__35537__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35537__auto__,f__$1){
return (function (){
var f__35538__auto__ = (function (){var switch__35449__auto__ = ((function (c__35537__auto__,f__$1){
return (function (state_36047){
var state_val_36048 = (state_36047[(1)]);
if((state_val_36048 === (1))){
var inst_36042 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_36047__$1 = state_36047;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36047__$1,(2),inst_36042);
} else {
if((state_val_36048 === (2))){
var inst_36044 = (state_36047[(2)]);
var inst_36045 = f__$1.call(null,inst_36044);
var state_36047__$1 = state_36047;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36047__$1,inst_36045);
} else {
return null;
}
}
});})(c__35537__auto__,f__$1))
;
return ((function (switch__35449__auto__,c__35537__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__35450__auto__ = null;
var cljs$core$async$transduce_$_state_machine__35450__auto____0 = (function (){
var statearr_36049 = [null,null,null,null,null,null,null];
(statearr_36049[(0)] = cljs$core$async$transduce_$_state_machine__35450__auto__);

(statearr_36049[(1)] = (1));

return statearr_36049;
});
var cljs$core$async$transduce_$_state_machine__35450__auto____1 = (function (state_36047){
while(true){
var ret_value__35451__auto__ = (function (){try{while(true){
var result__35452__auto__ = switch__35449__auto__.call(null,state_36047);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35452__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35452__auto__;
}
break;
}
}catch (e36050){if((e36050 instanceof Object)){
var ex__35453__auto__ = e36050;
var statearr_36051_36053 = state_36047;
(statearr_36051_36053[(5)] = ex__35453__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36047);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36050;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35451__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36054 = state_36047;
state_36047 = G__36054;
continue;
} else {
return ret_value__35451__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__35450__auto__ = function(state_36047){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__35450__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__35450__auto____1.call(this,state_36047);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__35450__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__35450__auto____0;
cljs$core$async$transduce_$_state_machine__35450__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__35450__auto____1;
return cljs$core$async$transduce_$_state_machine__35450__auto__;
})()
;})(switch__35449__auto__,c__35537__auto__,f__$1))
})();
var state__35539__auto__ = (function (){var statearr_36052 = f__35538__auto__.call(null);
(statearr_36052[(6)] = c__35537__auto__);

return statearr_36052;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35539__auto__);
});})(c__35537__auto__,f__$1))
);

return c__35537__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__36056 = arguments.length;
switch (G__36056) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__35537__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35537__auto__){
return (function (){
var f__35538__auto__ = (function (){var switch__35449__auto__ = ((function (c__35537__auto__){
return (function (state_36081){
var state_val_36082 = (state_36081[(1)]);
if((state_val_36082 === (7))){
var inst_36063 = (state_36081[(2)]);
var state_36081__$1 = state_36081;
var statearr_36083_36104 = state_36081__$1;
(statearr_36083_36104[(2)] = inst_36063);

(statearr_36083_36104[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36082 === (1))){
var inst_36057 = cljs.core.seq.call(null,coll);
var inst_36058 = inst_36057;
var state_36081__$1 = (function (){var statearr_36084 = state_36081;
(statearr_36084[(7)] = inst_36058);

return statearr_36084;
})();
var statearr_36085_36105 = state_36081__$1;
(statearr_36085_36105[(2)] = null);

(statearr_36085_36105[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36082 === (4))){
var inst_36058 = (state_36081[(7)]);
var inst_36061 = cljs.core.first.call(null,inst_36058);
var state_36081__$1 = state_36081;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36081__$1,(7),ch,inst_36061);
} else {
if((state_val_36082 === (13))){
var inst_36075 = (state_36081[(2)]);
var state_36081__$1 = state_36081;
var statearr_36086_36106 = state_36081__$1;
(statearr_36086_36106[(2)] = inst_36075);

(statearr_36086_36106[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36082 === (6))){
var inst_36066 = (state_36081[(2)]);
var state_36081__$1 = state_36081;
if(cljs.core.truth_(inst_36066)){
var statearr_36087_36107 = state_36081__$1;
(statearr_36087_36107[(1)] = (8));

} else {
var statearr_36088_36108 = state_36081__$1;
(statearr_36088_36108[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36082 === (3))){
var inst_36079 = (state_36081[(2)]);
var state_36081__$1 = state_36081;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36081__$1,inst_36079);
} else {
if((state_val_36082 === (12))){
var state_36081__$1 = state_36081;
var statearr_36089_36109 = state_36081__$1;
(statearr_36089_36109[(2)] = null);

(statearr_36089_36109[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36082 === (2))){
var inst_36058 = (state_36081[(7)]);
var state_36081__$1 = state_36081;
if(cljs.core.truth_(inst_36058)){
var statearr_36090_36110 = state_36081__$1;
(statearr_36090_36110[(1)] = (4));

} else {
var statearr_36091_36111 = state_36081__$1;
(statearr_36091_36111[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36082 === (11))){
var inst_36072 = cljs.core.async.close_BANG_.call(null,ch);
var state_36081__$1 = state_36081;
var statearr_36092_36112 = state_36081__$1;
(statearr_36092_36112[(2)] = inst_36072);

(statearr_36092_36112[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36082 === (9))){
var state_36081__$1 = state_36081;
if(cljs.core.truth_(close_QMARK_)){
var statearr_36093_36113 = state_36081__$1;
(statearr_36093_36113[(1)] = (11));

} else {
var statearr_36094_36114 = state_36081__$1;
(statearr_36094_36114[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36082 === (5))){
var inst_36058 = (state_36081[(7)]);
var state_36081__$1 = state_36081;
var statearr_36095_36115 = state_36081__$1;
(statearr_36095_36115[(2)] = inst_36058);

(statearr_36095_36115[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36082 === (10))){
var inst_36077 = (state_36081[(2)]);
var state_36081__$1 = state_36081;
var statearr_36096_36116 = state_36081__$1;
(statearr_36096_36116[(2)] = inst_36077);

(statearr_36096_36116[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36082 === (8))){
var inst_36058 = (state_36081[(7)]);
var inst_36068 = cljs.core.next.call(null,inst_36058);
var inst_36058__$1 = inst_36068;
var state_36081__$1 = (function (){var statearr_36097 = state_36081;
(statearr_36097[(7)] = inst_36058__$1);

return statearr_36097;
})();
var statearr_36098_36117 = state_36081__$1;
(statearr_36098_36117[(2)] = null);

(statearr_36098_36117[(1)] = (2));


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
});})(c__35537__auto__))
;
return ((function (switch__35449__auto__,c__35537__auto__){
return (function() {
var cljs$core$async$state_machine__35450__auto__ = null;
var cljs$core$async$state_machine__35450__auto____0 = (function (){
var statearr_36099 = [null,null,null,null,null,null,null,null];
(statearr_36099[(0)] = cljs$core$async$state_machine__35450__auto__);

(statearr_36099[(1)] = (1));

return statearr_36099;
});
var cljs$core$async$state_machine__35450__auto____1 = (function (state_36081){
while(true){
var ret_value__35451__auto__ = (function (){try{while(true){
var result__35452__auto__ = switch__35449__auto__.call(null,state_36081);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35452__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35452__auto__;
}
break;
}
}catch (e36100){if((e36100 instanceof Object)){
var ex__35453__auto__ = e36100;
var statearr_36101_36118 = state_36081;
(statearr_36101_36118[(5)] = ex__35453__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36081);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36100;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35451__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36119 = state_36081;
state_36081 = G__36119;
continue;
} else {
return ret_value__35451__auto__;
}
break;
}
});
cljs$core$async$state_machine__35450__auto__ = function(state_36081){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35450__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35450__auto____1.call(this,state_36081);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__35450__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35450__auto____0;
cljs$core$async$state_machine__35450__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35450__auto____1;
return cljs$core$async$state_machine__35450__auto__;
})()
;})(switch__35449__auto__,c__35537__auto__))
})();
var state__35539__auto__ = (function (){var statearr_36102 = f__35538__auto__.call(null);
(statearr_36102[(6)] = c__35537__auto__);

return statearr_36102;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35539__auto__);
});})(c__35537__auto__))
);

return c__35537__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if(((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4211__auto__ = (((_ == null))?null:_);
var m__4212__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,_);
} else {
var m__4212__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4212__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async36120 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36120 = (function (ch,cs,meta36121){
this.ch = ch;
this.cs = cs;
this.meta36121 = meta36121;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async36120.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_36122,meta36121__$1){
var self__ = this;
var _36122__$1 = this;
return (new cljs.core.async.t_cljs$core$async36120(self__.ch,self__.cs,meta36121__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async36120.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_36122){
var self__ = this;
var _36122__$1 = this;
return self__.meta36121;
});})(cs))
;

cljs.core.async.t_cljs$core$async36120.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36120.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async36120.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36120.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async36120.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async36120.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async36120.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta36121","meta36121",965725218,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async36120.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async36120.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36120";

cljs.core.async.t_cljs$core$async36120.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async36120");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36120.
 */
cljs.core.async.__GT_t_cljs$core$async36120 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async36120(ch__$1,cs__$1,meta36121){
return (new cljs.core.async.t_cljs$core$async36120(ch__$1,cs__$1,meta36121));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async36120(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__35537__auto___36342 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35537__auto___36342,cs,m,dchan,dctr,done){
return (function (){
var f__35538__auto__ = (function (){var switch__35449__auto__ = ((function (c__35537__auto___36342,cs,m,dchan,dctr,done){
return (function (state_36257){
var state_val_36258 = (state_36257[(1)]);
if((state_val_36258 === (7))){
var inst_36253 = (state_36257[(2)]);
var state_36257__$1 = state_36257;
var statearr_36259_36343 = state_36257__$1;
(statearr_36259_36343[(2)] = inst_36253);

(statearr_36259_36343[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36258 === (20))){
var inst_36156 = (state_36257[(7)]);
var inst_36168 = cljs.core.first.call(null,inst_36156);
var inst_36169 = cljs.core.nth.call(null,inst_36168,(0),null);
var inst_36170 = cljs.core.nth.call(null,inst_36168,(1),null);
var state_36257__$1 = (function (){var statearr_36260 = state_36257;
(statearr_36260[(8)] = inst_36169);

return statearr_36260;
})();
if(cljs.core.truth_(inst_36170)){
var statearr_36261_36344 = state_36257__$1;
(statearr_36261_36344[(1)] = (22));

} else {
var statearr_36262_36345 = state_36257__$1;
(statearr_36262_36345[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36258 === (27))){
var inst_36205 = (state_36257[(9)]);
var inst_36125 = (state_36257[(10)]);
var inst_36200 = (state_36257[(11)]);
var inst_36198 = (state_36257[(12)]);
var inst_36205__$1 = cljs.core._nth.call(null,inst_36198,inst_36200);
var inst_36206 = cljs.core.async.put_BANG_.call(null,inst_36205__$1,inst_36125,done);
var state_36257__$1 = (function (){var statearr_36263 = state_36257;
(statearr_36263[(9)] = inst_36205__$1);

return statearr_36263;
})();
if(cljs.core.truth_(inst_36206)){
var statearr_36264_36346 = state_36257__$1;
(statearr_36264_36346[(1)] = (30));

} else {
var statearr_36265_36347 = state_36257__$1;
(statearr_36265_36347[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36258 === (1))){
var state_36257__$1 = state_36257;
var statearr_36266_36348 = state_36257__$1;
(statearr_36266_36348[(2)] = null);

(statearr_36266_36348[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36258 === (24))){
var inst_36156 = (state_36257[(7)]);
var inst_36175 = (state_36257[(2)]);
var inst_36176 = cljs.core.next.call(null,inst_36156);
var inst_36134 = inst_36176;
var inst_36135 = null;
var inst_36136 = (0);
var inst_36137 = (0);
var state_36257__$1 = (function (){var statearr_36267 = state_36257;
(statearr_36267[(13)] = inst_36137);

(statearr_36267[(14)] = inst_36175);

(statearr_36267[(15)] = inst_36136);

(statearr_36267[(16)] = inst_36135);

(statearr_36267[(17)] = inst_36134);

return statearr_36267;
})();
var statearr_36268_36349 = state_36257__$1;
(statearr_36268_36349[(2)] = null);

(statearr_36268_36349[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36258 === (39))){
var state_36257__$1 = state_36257;
var statearr_36272_36350 = state_36257__$1;
(statearr_36272_36350[(2)] = null);

(statearr_36272_36350[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36258 === (4))){
var inst_36125 = (state_36257[(10)]);
var inst_36125__$1 = (state_36257[(2)]);
var inst_36126 = (inst_36125__$1 == null);
var state_36257__$1 = (function (){var statearr_36273 = state_36257;
(statearr_36273[(10)] = inst_36125__$1);

return statearr_36273;
})();
if(cljs.core.truth_(inst_36126)){
var statearr_36274_36351 = state_36257__$1;
(statearr_36274_36351[(1)] = (5));

} else {
var statearr_36275_36352 = state_36257__$1;
(statearr_36275_36352[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36258 === (15))){
var inst_36137 = (state_36257[(13)]);
var inst_36136 = (state_36257[(15)]);
var inst_36135 = (state_36257[(16)]);
var inst_36134 = (state_36257[(17)]);
var inst_36152 = (state_36257[(2)]);
var inst_36153 = (inst_36137 + (1));
var tmp36269 = inst_36136;
var tmp36270 = inst_36135;
var tmp36271 = inst_36134;
var inst_36134__$1 = tmp36271;
var inst_36135__$1 = tmp36270;
var inst_36136__$1 = tmp36269;
var inst_36137__$1 = inst_36153;
var state_36257__$1 = (function (){var statearr_36276 = state_36257;
(statearr_36276[(13)] = inst_36137__$1);

(statearr_36276[(15)] = inst_36136__$1);

(statearr_36276[(18)] = inst_36152);

(statearr_36276[(16)] = inst_36135__$1);

(statearr_36276[(17)] = inst_36134__$1);

return statearr_36276;
})();
var statearr_36277_36353 = state_36257__$1;
(statearr_36277_36353[(2)] = null);

(statearr_36277_36353[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36258 === (21))){
var inst_36179 = (state_36257[(2)]);
var state_36257__$1 = state_36257;
var statearr_36281_36354 = state_36257__$1;
(statearr_36281_36354[(2)] = inst_36179);

(statearr_36281_36354[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36258 === (31))){
var inst_36205 = (state_36257[(9)]);
var inst_36209 = done.call(null,null);
var inst_36210 = cljs.core.async.untap_STAR_.call(null,m,inst_36205);
var state_36257__$1 = (function (){var statearr_36282 = state_36257;
(statearr_36282[(19)] = inst_36209);

return statearr_36282;
})();
var statearr_36283_36355 = state_36257__$1;
(statearr_36283_36355[(2)] = inst_36210);

(statearr_36283_36355[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36258 === (32))){
var inst_36199 = (state_36257[(20)]);
var inst_36200 = (state_36257[(11)]);
var inst_36197 = (state_36257[(21)]);
var inst_36198 = (state_36257[(12)]);
var inst_36212 = (state_36257[(2)]);
var inst_36213 = (inst_36200 + (1));
var tmp36278 = inst_36199;
var tmp36279 = inst_36197;
var tmp36280 = inst_36198;
var inst_36197__$1 = tmp36279;
var inst_36198__$1 = tmp36280;
var inst_36199__$1 = tmp36278;
var inst_36200__$1 = inst_36213;
var state_36257__$1 = (function (){var statearr_36284 = state_36257;
(statearr_36284[(20)] = inst_36199__$1);

(statearr_36284[(22)] = inst_36212);

(statearr_36284[(11)] = inst_36200__$1);

(statearr_36284[(21)] = inst_36197__$1);

(statearr_36284[(12)] = inst_36198__$1);

return statearr_36284;
})();
var statearr_36285_36356 = state_36257__$1;
(statearr_36285_36356[(2)] = null);

(statearr_36285_36356[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36258 === (40))){
var inst_36225 = (state_36257[(23)]);
var inst_36229 = done.call(null,null);
var inst_36230 = cljs.core.async.untap_STAR_.call(null,m,inst_36225);
var state_36257__$1 = (function (){var statearr_36286 = state_36257;
(statearr_36286[(24)] = inst_36229);

return statearr_36286;
})();
var statearr_36287_36357 = state_36257__$1;
(statearr_36287_36357[(2)] = inst_36230);

(statearr_36287_36357[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36258 === (33))){
var inst_36216 = (state_36257[(25)]);
var inst_36218 = cljs.core.chunked_seq_QMARK_.call(null,inst_36216);
var state_36257__$1 = state_36257;
if(inst_36218){
var statearr_36288_36358 = state_36257__$1;
(statearr_36288_36358[(1)] = (36));

} else {
var statearr_36289_36359 = state_36257__$1;
(statearr_36289_36359[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36258 === (13))){
var inst_36146 = (state_36257[(26)]);
var inst_36149 = cljs.core.async.close_BANG_.call(null,inst_36146);
var state_36257__$1 = state_36257;
var statearr_36290_36360 = state_36257__$1;
(statearr_36290_36360[(2)] = inst_36149);

(statearr_36290_36360[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36258 === (22))){
var inst_36169 = (state_36257[(8)]);
var inst_36172 = cljs.core.async.close_BANG_.call(null,inst_36169);
var state_36257__$1 = state_36257;
var statearr_36291_36361 = state_36257__$1;
(statearr_36291_36361[(2)] = inst_36172);

(statearr_36291_36361[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36258 === (36))){
var inst_36216 = (state_36257[(25)]);
var inst_36220 = cljs.core.chunk_first.call(null,inst_36216);
var inst_36221 = cljs.core.chunk_rest.call(null,inst_36216);
var inst_36222 = cljs.core.count.call(null,inst_36220);
var inst_36197 = inst_36221;
var inst_36198 = inst_36220;
var inst_36199 = inst_36222;
var inst_36200 = (0);
var state_36257__$1 = (function (){var statearr_36292 = state_36257;
(statearr_36292[(20)] = inst_36199);

(statearr_36292[(11)] = inst_36200);

(statearr_36292[(21)] = inst_36197);

(statearr_36292[(12)] = inst_36198);

return statearr_36292;
})();
var statearr_36293_36362 = state_36257__$1;
(statearr_36293_36362[(2)] = null);

(statearr_36293_36362[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36258 === (41))){
var inst_36216 = (state_36257[(25)]);
var inst_36232 = (state_36257[(2)]);
var inst_36233 = cljs.core.next.call(null,inst_36216);
var inst_36197 = inst_36233;
var inst_36198 = null;
var inst_36199 = (0);
var inst_36200 = (0);
var state_36257__$1 = (function (){var statearr_36294 = state_36257;
(statearr_36294[(20)] = inst_36199);

(statearr_36294[(27)] = inst_36232);

(statearr_36294[(11)] = inst_36200);

(statearr_36294[(21)] = inst_36197);

(statearr_36294[(12)] = inst_36198);

return statearr_36294;
})();
var statearr_36295_36363 = state_36257__$1;
(statearr_36295_36363[(2)] = null);

(statearr_36295_36363[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36258 === (43))){
var state_36257__$1 = state_36257;
var statearr_36296_36364 = state_36257__$1;
(statearr_36296_36364[(2)] = null);

(statearr_36296_36364[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36258 === (29))){
var inst_36241 = (state_36257[(2)]);
var state_36257__$1 = state_36257;
var statearr_36297_36365 = state_36257__$1;
(statearr_36297_36365[(2)] = inst_36241);

(statearr_36297_36365[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36258 === (44))){
var inst_36250 = (state_36257[(2)]);
var state_36257__$1 = (function (){var statearr_36298 = state_36257;
(statearr_36298[(28)] = inst_36250);

return statearr_36298;
})();
var statearr_36299_36366 = state_36257__$1;
(statearr_36299_36366[(2)] = null);

(statearr_36299_36366[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36258 === (6))){
var inst_36189 = (state_36257[(29)]);
var inst_36188 = cljs.core.deref.call(null,cs);
var inst_36189__$1 = cljs.core.keys.call(null,inst_36188);
var inst_36190 = cljs.core.count.call(null,inst_36189__$1);
var inst_36191 = cljs.core.reset_BANG_.call(null,dctr,inst_36190);
var inst_36196 = cljs.core.seq.call(null,inst_36189__$1);
var inst_36197 = inst_36196;
var inst_36198 = null;
var inst_36199 = (0);
var inst_36200 = (0);
var state_36257__$1 = (function (){var statearr_36300 = state_36257;
(statearr_36300[(20)] = inst_36199);

(statearr_36300[(30)] = inst_36191);

(statearr_36300[(11)] = inst_36200);

(statearr_36300[(21)] = inst_36197);

(statearr_36300[(29)] = inst_36189__$1);

(statearr_36300[(12)] = inst_36198);

return statearr_36300;
})();
var statearr_36301_36367 = state_36257__$1;
(statearr_36301_36367[(2)] = null);

(statearr_36301_36367[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36258 === (28))){
var inst_36216 = (state_36257[(25)]);
var inst_36197 = (state_36257[(21)]);
var inst_36216__$1 = cljs.core.seq.call(null,inst_36197);
var state_36257__$1 = (function (){var statearr_36302 = state_36257;
(statearr_36302[(25)] = inst_36216__$1);

return statearr_36302;
})();
if(inst_36216__$1){
var statearr_36303_36368 = state_36257__$1;
(statearr_36303_36368[(1)] = (33));

} else {
var statearr_36304_36369 = state_36257__$1;
(statearr_36304_36369[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36258 === (25))){
var inst_36199 = (state_36257[(20)]);
var inst_36200 = (state_36257[(11)]);
var inst_36202 = (inst_36200 < inst_36199);
var inst_36203 = inst_36202;
var state_36257__$1 = state_36257;
if(cljs.core.truth_(inst_36203)){
var statearr_36305_36370 = state_36257__$1;
(statearr_36305_36370[(1)] = (27));

} else {
var statearr_36306_36371 = state_36257__$1;
(statearr_36306_36371[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36258 === (34))){
var state_36257__$1 = state_36257;
var statearr_36307_36372 = state_36257__$1;
(statearr_36307_36372[(2)] = null);

(statearr_36307_36372[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36258 === (17))){
var state_36257__$1 = state_36257;
var statearr_36308_36373 = state_36257__$1;
(statearr_36308_36373[(2)] = null);

(statearr_36308_36373[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36258 === (3))){
var inst_36255 = (state_36257[(2)]);
var state_36257__$1 = state_36257;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36257__$1,inst_36255);
} else {
if((state_val_36258 === (12))){
var inst_36184 = (state_36257[(2)]);
var state_36257__$1 = state_36257;
var statearr_36309_36374 = state_36257__$1;
(statearr_36309_36374[(2)] = inst_36184);

(statearr_36309_36374[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36258 === (2))){
var state_36257__$1 = state_36257;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36257__$1,(4),ch);
} else {
if((state_val_36258 === (23))){
var state_36257__$1 = state_36257;
var statearr_36310_36375 = state_36257__$1;
(statearr_36310_36375[(2)] = null);

(statearr_36310_36375[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36258 === (35))){
var inst_36239 = (state_36257[(2)]);
var state_36257__$1 = state_36257;
var statearr_36311_36376 = state_36257__$1;
(statearr_36311_36376[(2)] = inst_36239);

(statearr_36311_36376[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36258 === (19))){
var inst_36156 = (state_36257[(7)]);
var inst_36160 = cljs.core.chunk_first.call(null,inst_36156);
var inst_36161 = cljs.core.chunk_rest.call(null,inst_36156);
var inst_36162 = cljs.core.count.call(null,inst_36160);
var inst_36134 = inst_36161;
var inst_36135 = inst_36160;
var inst_36136 = inst_36162;
var inst_36137 = (0);
var state_36257__$1 = (function (){var statearr_36312 = state_36257;
(statearr_36312[(13)] = inst_36137);

(statearr_36312[(15)] = inst_36136);

(statearr_36312[(16)] = inst_36135);

(statearr_36312[(17)] = inst_36134);

return statearr_36312;
})();
var statearr_36313_36377 = state_36257__$1;
(statearr_36313_36377[(2)] = null);

(statearr_36313_36377[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36258 === (11))){
var inst_36156 = (state_36257[(7)]);
var inst_36134 = (state_36257[(17)]);
var inst_36156__$1 = cljs.core.seq.call(null,inst_36134);
var state_36257__$1 = (function (){var statearr_36314 = state_36257;
(statearr_36314[(7)] = inst_36156__$1);

return statearr_36314;
})();
if(inst_36156__$1){
var statearr_36315_36378 = state_36257__$1;
(statearr_36315_36378[(1)] = (16));

} else {
var statearr_36316_36379 = state_36257__$1;
(statearr_36316_36379[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36258 === (9))){
var inst_36186 = (state_36257[(2)]);
var state_36257__$1 = state_36257;
var statearr_36317_36380 = state_36257__$1;
(statearr_36317_36380[(2)] = inst_36186);

(statearr_36317_36380[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36258 === (5))){
var inst_36132 = cljs.core.deref.call(null,cs);
var inst_36133 = cljs.core.seq.call(null,inst_36132);
var inst_36134 = inst_36133;
var inst_36135 = null;
var inst_36136 = (0);
var inst_36137 = (0);
var state_36257__$1 = (function (){var statearr_36318 = state_36257;
(statearr_36318[(13)] = inst_36137);

(statearr_36318[(15)] = inst_36136);

(statearr_36318[(16)] = inst_36135);

(statearr_36318[(17)] = inst_36134);

return statearr_36318;
})();
var statearr_36319_36381 = state_36257__$1;
(statearr_36319_36381[(2)] = null);

(statearr_36319_36381[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36258 === (14))){
var state_36257__$1 = state_36257;
var statearr_36320_36382 = state_36257__$1;
(statearr_36320_36382[(2)] = null);

(statearr_36320_36382[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36258 === (45))){
var inst_36247 = (state_36257[(2)]);
var state_36257__$1 = state_36257;
var statearr_36321_36383 = state_36257__$1;
(statearr_36321_36383[(2)] = inst_36247);

(statearr_36321_36383[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36258 === (26))){
var inst_36189 = (state_36257[(29)]);
var inst_36243 = (state_36257[(2)]);
var inst_36244 = cljs.core.seq.call(null,inst_36189);
var state_36257__$1 = (function (){var statearr_36322 = state_36257;
(statearr_36322[(31)] = inst_36243);

return statearr_36322;
})();
if(inst_36244){
var statearr_36323_36384 = state_36257__$1;
(statearr_36323_36384[(1)] = (42));

} else {
var statearr_36324_36385 = state_36257__$1;
(statearr_36324_36385[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36258 === (16))){
var inst_36156 = (state_36257[(7)]);
var inst_36158 = cljs.core.chunked_seq_QMARK_.call(null,inst_36156);
var state_36257__$1 = state_36257;
if(inst_36158){
var statearr_36325_36386 = state_36257__$1;
(statearr_36325_36386[(1)] = (19));

} else {
var statearr_36326_36387 = state_36257__$1;
(statearr_36326_36387[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36258 === (38))){
var inst_36236 = (state_36257[(2)]);
var state_36257__$1 = state_36257;
var statearr_36327_36388 = state_36257__$1;
(statearr_36327_36388[(2)] = inst_36236);

(statearr_36327_36388[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36258 === (30))){
var state_36257__$1 = state_36257;
var statearr_36328_36389 = state_36257__$1;
(statearr_36328_36389[(2)] = null);

(statearr_36328_36389[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36258 === (10))){
var inst_36137 = (state_36257[(13)]);
var inst_36135 = (state_36257[(16)]);
var inst_36145 = cljs.core._nth.call(null,inst_36135,inst_36137);
var inst_36146 = cljs.core.nth.call(null,inst_36145,(0),null);
var inst_36147 = cljs.core.nth.call(null,inst_36145,(1),null);
var state_36257__$1 = (function (){var statearr_36329 = state_36257;
(statearr_36329[(26)] = inst_36146);

return statearr_36329;
})();
if(cljs.core.truth_(inst_36147)){
var statearr_36330_36390 = state_36257__$1;
(statearr_36330_36390[(1)] = (13));

} else {
var statearr_36331_36391 = state_36257__$1;
(statearr_36331_36391[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36258 === (18))){
var inst_36182 = (state_36257[(2)]);
var state_36257__$1 = state_36257;
var statearr_36332_36392 = state_36257__$1;
(statearr_36332_36392[(2)] = inst_36182);

(statearr_36332_36392[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36258 === (42))){
var state_36257__$1 = state_36257;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36257__$1,(45),dchan);
} else {
if((state_val_36258 === (37))){
var inst_36216 = (state_36257[(25)]);
var inst_36125 = (state_36257[(10)]);
var inst_36225 = (state_36257[(23)]);
var inst_36225__$1 = cljs.core.first.call(null,inst_36216);
var inst_36226 = cljs.core.async.put_BANG_.call(null,inst_36225__$1,inst_36125,done);
var state_36257__$1 = (function (){var statearr_36333 = state_36257;
(statearr_36333[(23)] = inst_36225__$1);

return statearr_36333;
})();
if(cljs.core.truth_(inst_36226)){
var statearr_36334_36393 = state_36257__$1;
(statearr_36334_36393[(1)] = (39));

} else {
var statearr_36335_36394 = state_36257__$1;
(statearr_36335_36394[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36258 === (8))){
var inst_36137 = (state_36257[(13)]);
var inst_36136 = (state_36257[(15)]);
var inst_36139 = (inst_36137 < inst_36136);
var inst_36140 = inst_36139;
var state_36257__$1 = state_36257;
if(cljs.core.truth_(inst_36140)){
var statearr_36336_36395 = state_36257__$1;
(statearr_36336_36395[(1)] = (10));

} else {
var statearr_36337_36396 = state_36257__$1;
(statearr_36337_36396[(1)] = (11));

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
});})(c__35537__auto___36342,cs,m,dchan,dctr,done))
;
return ((function (switch__35449__auto__,c__35537__auto___36342,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__35450__auto__ = null;
var cljs$core$async$mult_$_state_machine__35450__auto____0 = (function (){
var statearr_36338 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36338[(0)] = cljs$core$async$mult_$_state_machine__35450__auto__);

(statearr_36338[(1)] = (1));

return statearr_36338;
});
var cljs$core$async$mult_$_state_machine__35450__auto____1 = (function (state_36257){
while(true){
var ret_value__35451__auto__ = (function (){try{while(true){
var result__35452__auto__ = switch__35449__auto__.call(null,state_36257);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35452__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35452__auto__;
}
break;
}
}catch (e36339){if((e36339 instanceof Object)){
var ex__35453__auto__ = e36339;
var statearr_36340_36397 = state_36257;
(statearr_36340_36397[(5)] = ex__35453__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36257);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36339;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35451__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36398 = state_36257;
state_36257 = G__36398;
continue;
} else {
return ret_value__35451__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__35450__auto__ = function(state_36257){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__35450__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__35450__auto____1.call(this,state_36257);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__35450__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__35450__auto____0;
cljs$core$async$mult_$_state_machine__35450__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__35450__auto____1;
return cljs$core$async$mult_$_state_machine__35450__auto__;
})()
;})(switch__35449__auto__,c__35537__auto___36342,cs,m,dchan,dctr,done))
})();
var state__35539__auto__ = (function (){var statearr_36341 = f__35538__auto__.call(null);
(statearr_36341[(6)] = c__35537__auto___36342);

return statearr_36341;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35539__auto__);
});})(c__35537__auto___36342,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__36400 = arguments.length;
switch (G__36400) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,state_map);
} else {
var m__4212__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,mode);
} else {
var m__4212__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___36412 = arguments.length;
var i__4500__auto___36413 = (0);
while(true){
if((i__4500__auto___36413 < len__4499__auto___36412)){
args__4502__auto__.push((arguments[i__4500__auto___36413]));

var G__36414 = (i__4500__auto___36413 + (1));
i__4500__auto___36413 = G__36414;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((3) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4503__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__36406){
var map__36407 = p__36406;
var map__36407__$1 = ((((!((map__36407 == null)))?(((((map__36407.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36407.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36407):map__36407);
var opts = map__36407__$1;
var statearr_36409_36415 = state;
(statearr_36409_36415[(1)] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__36407,map__36407__$1,opts){
return (function (val){
var statearr_36410_36416 = state;
(statearr_36410_36416[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__36407,map__36407__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_36411_36417 = state;
(statearr_36411_36417[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq36402){
var G__36403 = cljs.core.first.call(null,seq36402);
var seq36402__$1 = cljs.core.next.call(null,seq36402);
var G__36404 = cljs.core.first.call(null,seq36402__$1);
var seq36402__$2 = cljs.core.next.call(null,seq36402__$1);
var G__36405 = cljs.core.first.call(null,seq36402__$2);
var seq36402__$3 = cljs.core.next.call(null,seq36402__$2);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36403,G__36404,G__36405,seq36402__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos)))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async36418 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36418 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta36419){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta36419 = meta36419;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async36418.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_36420,meta36419__$1){
var self__ = this;
var _36420__$1 = this;
return (new cljs.core.async.t_cljs$core$async36418(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta36419__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async36418.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_36420){
var self__ = this;
var _36420__$1 = this;
return self__.meta36419;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async36418.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36418.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async36418.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36418.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async36418.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async36418.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async36418.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async36418.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async36418.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta36419","meta36419",1849312038,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async36418.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async36418.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36418";

cljs.core.async.t_cljs$core$async36418.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async36418");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36418.
 */
cljs.core.async.__GT_t_cljs$core$async36418 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async36418(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta36419){
return (new cljs.core.async.t_cljs$core$async36418(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta36419));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async36418(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__35537__auto___36582 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35537__auto___36582,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__35538__auto__ = (function (){var switch__35449__auto__ = ((function (c__35537__auto___36582,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_36522){
var state_val_36523 = (state_36522[(1)]);
if((state_val_36523 === (7))){
var inst_36437 = (state_36522[(2)]);
var state_36522__$1 = state_36522;
var statearr_36524_36583 = state_36522__$1;
(statearr_36524_36583[(2)] = inst_36437);

(statearr_36524_36583[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36523 === (20))){
var inst_36449 = (state_36522[(7)]);
var state_36522__$1 = state_36522;
var statearr_36525_36584 = state_36522__$1;
(statearr_36525_36584[(2)] = inst_36449);

(statearr_36525_36584[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36523 === (27))){
var state_36522__$1 = state_36522;
var statearr_36526_36585 = state_36522__$1;
(statearr_36526_36585[(2)] = null);

(statearr_36526_36585[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36523 === (1))){
var inst_36424 = (state_36522[(8)]);
var inst_36424__$1 = calc_state.call(null);
var inst_36426 = (inst_36424__$1 == null);
var inst_36427 = cljs.core.not.call(null,inst_36426);
var state_36522__$1 = (function (){var statearr_36527 = state_36522;
(statearr_36527[(8)] = inst_36424__$1);

return statearr_36527;
})();
if(inst_36427){
var statearr_36528_36586 = state_36522__$1;
(statearr_36528_36586[(1)] = (2));

} else {
var statearr_36529_36587 = state_36522__$1;
(statearr_36529_36587[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36523 === (24))){
var inst_36482 = (state_36522[(9)]);
var inst_36473 = (state_36522[(10)]);
var inst_36496 = (state_36522[(11)]);
var inst_36496__$1 = inst_36473.call(null,inst_36482);
var state_36522__$1 = (function (){var statearr_36530 = state_36522;
(statearr_36530[(11)] = inst_36496__$1);

return statearr_36530;
})();
if(cljs.core.truth_(inst_36496__$1)){
var statearr_36531_36588 = state_36522__$1;
(statearr_36531_36588[(1)] = (29));

} else {
var statearr_36532_36589 = state_36522__$1;
(statearr_36532_36589[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36523 === (4))){
var inst_36440 = (state_36522[(2)]);
var state_36522__$1 = state_36522;
if(cljs.core.truth_(inst_36440)){
var statearr_36533_36590 = state_36522__$1;
(statearr_36533_36590[(1)] = (8));

} else {
var statearr_36534_36591 = state_36522__$1;
(statearr_36534_36591[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36523 === (15))){
var inst_36467 = (state_36522[(2)]);
var state_36522__$1 = state_36522;
if(cljs.core.truth_(inst_36467)){
var statearr_36535_36592 = state_36522__$1;
(statearr_36535_36592[(1)] = (19));

} else {
var statearr_36536_36593 = state_36522__$1;
(statearr_36536_36593[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36523 === (21))){
var inst_36472 = (state_36522[(12)]);
var inst_36472__$1 = (state_36522[(2)]);
var inst_36473 = cljs.core.get.call(null,inst_36472__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_36474 = cljs.core.get.call(null,inst_36472__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_36475 = cljs.core.get.call(null,inst_36472__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_36522__$1 = (function (){var statearr_36537 = state_36522;
(statearr_36537[(10)] = inst_36473);

(statearr_36537[(12)] = inst_36472__$1);

(statearr_36537[(13)] = inst_36474);

return statearr_36537;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_36522__$1,(22),inst_36475);
} else {
if((state_val_36523 === (31))){
var inst_36504 = (state_36522[(2)]);
var state_36522__$1 = state_36522;
if(cljs.core.truth_(inst_36504)){
var statearr_36538_36594 = state_36522__$1;
(statearr_36538_36594[(1)] = (32));

} else {
var statearr_36539_36595 = state_36522__$1;
(statearr_36539_36595[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36523 === (32))){
var inst_36481 = (state_36522[(14)]);
var state_36522__$1 = state_36522;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36522__$1,(35),out,inst_36481);
} else {
if((state_val_36523 === (33))){
var inst_36472 = (state_36522[(12)]);
var inst_36449 = inst_36472;
var state_36522__$1 = (function (){var statearr_36540 = state_36522;
(statearr_36540[(7)] = inst_36449);

return statearr_36540;
})();
var statearr_36541_36596 = state_36522__$1;
(statearr_36541_36596[(2)] = null);

(statearr_36541_36596[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36523 === (13))){
var inst_36449 = (state_36522[(7)]);
var inst_36456 = inst_36449.cljs$lang$protocol_mask$partition0$;
var inst_36457 = (inst_36456 & (64));
var inst_36458 = inst_36449.cljs$core$ISeq$;
var inst_36459 = (cljs.core.PROTOCOL_SENTINEL === inst_36458);
var inst_36460 = ((inst_36457) || (inst_36459));
var state_36522__$1 = state_36522;
if(cljs.core.truth_(inst_36460)){
var statearr_36542_36597 = state_36522__$1;
(statearr_36542_36597[(1)] = (16));

} else {
var statearr_36543_36598 = state_36522__$1;
(statearr_36543_36598[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36523 === (22))){
var inst_36481 = (state_36522[(14)]);
var inst_36482 = (state_36522[(9)]);
var inst_36480 = (state_36522[(2)]);
var inst_36481__$1 = cljs.core.nth.call(null,inst_36480,(0),null);
var inst_36482__$1 = cljs.core.nth.call(null,inst_36480,(1),null);
var inst_36483 = (inst_36481__$1 == null);
var inst_36484 = cljs.core._EQ_.call(null,inst_36482__$1,change);
var inst_36485 = ((inst_36483) || (inst_36484));
var state_36522__$1 = (function (){var statearr_36544 = state_36522;
(statearr_36544[(14)] = inst_36481__$1);

(statearr_36544[(9)] = inst_36482__$1);

return statearr_36544;
})();
if(cljs.core.truth_(inst_36485)){
var statearr_36545_36599 = state_36522__$1;
(statearr_36545_36599[(1)] = (23));

} else {
var statearr_36546_36600 = state_36522__$1;
(statearr_36546_36600[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36523 === (36))){
var inst_36472 = (state_36522[(12)]);
var inst_36449 = inst_36472;
var state_36522__$1 = (function (){var statearr_36547 = state_36522;
(statearr_36547[(7)] = inst_36449);

return statearr_36547;
})();
var statearr_36548_36601 = state_36522__$1;
(statearr_36548_36601[(2)] = null);

(statearr_36548_36601[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36523 === (29))){
var inst_36496 = (state_36522[(11)]);
var state_36522__$1 = state_36522;
var statearr_36549_36602 = state_36522__$1;
(statearr_36549_36602[(2)] = inst_36496);

(statearr_36549_36602[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36523 === (6))){
var state_36522__$1 = state_36522;
var statearr_36550_36603 = state_36522__$1;
(statearr_36550_36603[(2)] = false);

(statearr_36550_36603[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36523 === (28))){
var inst_36492 = (state_36522[(2)]);
var inst_36493 = calc_state.call(null);
var inst_36449 = inst_36493;
var state_36522__$1 = (function (){var statearr_36551 = state_36522;
(statearr_36551[(15)] = inst_36492);

(statearr_36551[(7)] = inst_36449);

return statearr_36551;
})();
var statearr_36552_36604 = state_36522__$1;
(statearr_36552_36604[(2)] = null);

(statearr_36552_36604[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36523 === (25))){
var inst_36518 = (state_36522[(2)]);
var state_36522__$1 = state_36522;
var statearr_36553_36605 = state_36522__$1;
(statearr_36553_36605[(2)] = inst_36518);

(statearr_36553_36605[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36523 === (34))){
var inst_36516 = (state_36522[(2)]);
var state_36522__$1 = state_36522;
var statearr_36554_36606 = state_36522__$1;
(statearr_36554_36606[(2)] = inst_36516);

(statearr_36554_36606[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36523 === (17))){
var state_36522__$1 = state_36522;
var statearr_36555_36607 = state_36522__$1;
(statearr_36555_36607[(2)] = false);

(statearr_36555_36607[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36523 === (3))){
var state_36522__$1 = state_36522;
var statearr_36556_36608 = state_36522__$1;
(statearr_36556_36608[(2)] = false);

(statearr_36556_36608[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36523 === (12))){
var inst_36520 = (state_36522[(2)]);
var state_36522__$1 = state_36522;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36522__$1,inst_36520);
} else {
if((state_val_36523 === (2))){
var inst_36424 = (state_36522[(8)]);
var inst_36429 = inst_36424.cljs$lang$protocol_mask$partition0$;
var inst_36430 = (inst_36429 & (64));
var inst_36431 = inst_36424.cljs$core$ISeq$;
var inst_36432 = (cljs.core.PROTOCOL_SENTINEL === inst_36431);
var inst_36433 = ((inst_36430) || (inst_36432));
var state_36522__$1 = state_36522;
if(cljs.core.truth_(inst_36433)){
var statearr_36557_36609 = state_36522__$1;
(statearr_36557_36609[(1)] = (5));

} else {
var statearr_36558_36610 = state_36522__$1;
(statearr_36558_36610[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36523 === (23))){
var inst_36481 = (state_36522[(14)]);
var inst_36487 = (inst_36481 == null);
var state_36522__$1 = state_36522;
if(cljs.core.truth_(inst_36487)){
var statearr_36559_36611 = state_36522__$1;
(statearr_36559_36611[(1)] = (26));

} else {
var statearr_36560_36612 = state_36522__$1;
(statearr_36560_36612[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36523 === (35))){
var inst_36507 = (state_36522[(2)]);
var state_36522__$1 = state_36522;
if(cljs.core.truth_(inst_36507)){
var statearr_36561_36613 = state_36522__$1;
(statearr_36561_36613[(1)] = (36));

} else {
var statearr_36562_36614 = state_36522__$1;
(statearr_36562_36614[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36523 === (19))){
var inst_36449 = (state_36522[(7)]);
var inst_36469 = cljs.core.apply.call(null,cljs.core.hash_map,inst_36449);
var state_36522__$1 = state_36522;
var statearr_36563_36615 = state_36522__$1;
(statearr_36563_36615[(2)] = inst_36469);

(statearr_36563_36615[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36523 === (11))){
var inst_36449 = (state_36522[(7)]);
var inst_36453 = (inst_36449 == null);
var inst_36454 = cljs.core.not.call(null,inst_36453);
var state_36522__$1 = state_36522;
if(inst_36454){
var statearr_36564_36616 = state_36522__$1;
(statearr_36564_36616[(1)] = (13));

} else {
var statearr_36565_36617 = state_36522__$1;
(statearr_36565_36617[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36523 === (9))){
var inst_36424 = (state_36522[(8)]);
var state_36522__$1 = state_36522;
var statearr_36566_36618 = state_36522__$1;
(statearr_36566_36618[(2)] = inst_36424);

(statearr_36566_36618[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36523 === (5))){
var state_36522__$1 = state_36522;
var statearr_36567_36619 = state_36522__$1;
(statearr_36567_36619[(2)] = true);

(statearr_36567_36619[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36523 === (14))){
var state_36522__$1 = state_36522;
var statearr_36568_36620 = state_36522__$1;
(statearr_36568_36620[(2)] = false);

(statearr_36568_36620[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36523 === (26))){
var inst_36482 = (state_36522[(9)]);
var inst_36489 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_36482);
var state_36522__$1 = state_36522;
var statearr_36569_36621 = state_36522__$1;
(statearr_36569_36621[(2)] = inst_36489);

(statearr_36569_36621[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36523 === (16))){
var state_36522__$1 = state_36522;
var statearr_36570_36622 = state_36522__$1;
(statearr_36570_36622[(2)] = true);

(statearr_36570_36622[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36523 === (38))){
var inst_36512 = (state_36522[(2)]);
var state_36522__$1 = state_36522;
var statearr_36571_36623 = state_36522__$1;
(statearr_36571_36623[(2)] = inst_36512);

(statearr_36571_36623[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36523 === (30))){
var inst_36482 = (state_36522[(9)]);
var inst_36473 = (state_36522[(10)]);
var inst_36474 = (state_36522[(13)]);
var inst_36499 = cljs.core.empty_QMARK_.call(null,inst_36473);
var inst_36500 = inst_36474.call(null,inst_36482);
var inst_36501 = cljs.core.not.call(null,inst_36500);
var inst_36502 = ((inst_36499) && (inst_36501));
var state_36522__$1 = state_36522;
var statearr_36572_36624 = state_36522__$1;
(statearr_36572_36624[(2)] = inst_36502);

(statearr_36572_36624[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36523 === (10))){
var inst_36424 = (state_36522[(8)]);
var inst_36445 = (state_36522[(2)]);
var inst_36446 = cljs.core.get.call(null,inst_36445,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_36447 = cljs.core.get.call(null,inst_36445,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_36448 = cljs.core.get.call(null,inst_36445,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_36449 = inst_36424;
var state_36522__$1 = (function (){var statearr_36573 = state_36522;
(statearr_36573[(16)] = inst_36447);

(statearr_36573[(17)] = inst_36446);

(statearr_36573[(18)] = inst_36448);

(statearr_36573[(7)] = inst_36449);

return statearr_36573;
})();
var statearr_36574_36625 = state_36522__$1;
(statearr_36574_36625[(2)] = null);

(statearr_36574_36625[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36523 === (18))){
var inst_36464 = (state_36522[(2)]);
var state_36522__$1 = state_36522;
var statearr_36575_36626 = state_36522__$1;
(statearr_36575_36626[(2)] = inst_36464);

(statearr_36575_36626[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36523 === (37))){
var state_36522__$1 = state_36522;
var statearr_36576_36627 = state_36522__$1;
(statearr_36576_36627[(2)] = null);

(statearr_36576_36627[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36523 === (8))){
var inst_36424 = (state_36522[(8)]);
var inst_36442 = cljs.core.apply.call(null,cljs.core.hash_map,inst_36424);
var state_36522__$1 = state_36522;
var statearr_36577_36628 = state_36522__$1;
(statearr_36577_36628[(2)] = inst_36442);

(statearr_36577_36628[(1)] = (10));


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
});})(c__35537__auto___36582,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__35449__auto__,c__35537__auto___36582,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__35450__auto__ = null;
var cljs$core$async$mix_$_state_machine__35450__auto____0 = (function (){
var statearr_36578 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36578[(0)] = cljs$core$async$mix_$_state_machine__35450__auto__);

(statearr_36578[(1)] = (1));

return statearr_36578;
});
var cljs$core$async$mix_$_state_machine__35450__auto____1 = (function (state_36522){
while(true){
var ret_value__35451__auto__ = (function (){try{while(true){
var result__35452__auto__ = switch__35449__auto__.call(null,state_36522);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35452__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35452__auto__;
}
break;
}
}catch (e36579){if((e36579 instanceof Object)){
var ex__35453__auto__ = e36579;
var statearr_36580_36629 = state_36522;
(statearr_36580_36629[(5)] = ex__35453__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36522);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36579;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35451__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36630 = state_36522;
state_36522 = G__36630;
continue;
} else {
return ret_value__35451__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__35450__auto__ = function(state_36522){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__35450__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__35450__auto____1.call(this,state_36522);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__35450__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__35450__auto____0;
cljs$core$async$mix_$_state_machine__35450__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__35450__auto____1;
return cljs$core$async$mix_$_state_machine__35450__auto__;
})()
;})(switch__35449__auto__,c__35537__auto___36582,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__35539__auto__ = (function (){var statearr_36581 = f__35538__auto__.call(null);
(statearr_36581[(6)] = c__35537__auto___36582);

return statearr_36581;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35539__auto__);
});})(c__35537__auto___36582,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4212__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p,v,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__36632 = arguments.length;
switch (G__36632) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p);
} else {
var m__4212__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p,v);
} else {
var m__4212__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__36636 = arguments.length;
switch (G__36636) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__3922__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3922__auto__,mults){
return (function (p1__36634_SHARP_){
if(cljs.core.truth_(p1__36634_SHARP_.call(null,topic))){
return p1__36634_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__36634_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3922__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async36637 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36637 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta36638){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta36638 = meta36638;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async36637.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_36639,meta36638__$1){
var self__ = this;
var _36639__$1 = this;
return (new cljs.core.async.t_cljs$core$async36637(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta36638__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async36637.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_36639){
var self__ = this;
var _36639__$1 = this;
return self__.meta36638;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async36637.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36637.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async36637.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36637.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async36637.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async36637.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async36637.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async36637.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta36638","meta36638",-653324266,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async36637.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async36637.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36637";

cljs.core.async.t_cljs$core$async36637.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async36637");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36637.
 */
cljs.core.async.__GT_t_cljs$core$async36637 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async36637(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta36638){
return (new cljs.core.async.t_cljs$core$async36637(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta36638));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async36637(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__35537__auto___36757 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35537__auto___36757,mults,ensure_mult,p){
return (function (){
var f__35538__auto__ = (function (){var switch__35449__auto__ = ((function (c__35537__auto___36757,mults,ensure_mult,p){
return (function (state_36711){
var state_val_36712 = (state_36711[(1)]);
if((state_val_36712 === (7))){
var inst_36707 = (state_36711[(2)]);
var state_36711__$1 = state_36711;
var statearr_36713_36758 = state_36711__$1;
(statearr_36713_36758[(2)] = inst_36707);

(statearr_36713_36758[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36712 === (20))){
var state_36711__$1 = state_36711;
var statearr_36714_36759 = state_36711__$1;
(statearr_36714_36759[(2)] = null);

(statearr_36714_36759[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36712 === (1))){
var state_36711__$1 = state_36711;
var statearr_36715_36760 = state_36711__$1;
(statearr_36715_36760[(2)] = null);

(statearr_36715_36760[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36712 === (24))){
var inst_36690 = (state_36711[(7)]);
var inst_36699 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_36690);
var state_36711__$1 = state_36711;
var statearr_36716_36761 = state_36711__$1;
(statearr_36716_36761[(2)] = inst_36699);

(statearr_36716_36761[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36712 === (4))){
var inst_36642 = (state_36711[(8)]);
var inst_36642__$1 = (state_36711[(2)]);
var inst_36643 = (inst_36642__$1 == null);
var state_36711__$1 = (function (){var statearr_36717 = state_36711;
(statearr_36717[(8)] = inst_36642__$1);

return statearr_36717;
})();
if(cljs.core.truth_(inst_36643)){
var statearr_36718_36762 = state_36711__$1;
(statearr_36718_36762[(1)] = (5));

} else {
var statearr_36719_36763 = state_36711__$1;
(statearr_36719_36763[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36712 === (15))){
var inst_36684 = (state_36711[(2)]);
var state_36711__$1 = state_36711;
var statearr_36720_36764 = state_36711__$1;
(statearr_36720_36764[(2)] = inst_36684);

(statearr_36720_36764[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36712 === (21))){
var inst_36704 = (state_36711[(2)]);
var state_36711__$1 = (function (){var statearr_36721 = state_36711;
(statearr_36721[(9)] = inst_36704);

return statearr_36721;
})();
var statearr_36722_36765 = state_36711__$1;
(statearr_36722_36765[(2)] = null);

(statearr_36722_36765[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36712 === (13))){
var inst_36666 = (state_36711[(10)]);
var inst_36668 = cljs.core.chunked_seq_QMARK_.call(null,inst_36666);
var state_36711__$1 = state_36711;
if(inst_36668){
var statearr_36723_36766 = state_36711__$1;
(statearr_36723_36766[(1)] = (16));

} else {
var statearr_36724_36767 = state_36711__$1;
(statearr_36724_36767[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36712 === (22))){
var inst_36696 = (state_36711[(2)]);
var state_36711__$1 = state_36711;
if(cljs.core.truth_(inst_36696)){
var statearr_36725_36768 = state_36711__$1;
(statearr_36725_36768[(1)] = (23));

} else {
var statearr_36726_36769 = state_36711__$1;
(statearr_36726_36769[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36712 === (6))){
var inst_36642 = (state_36711[(8)]);
var inst_36692 = (state_36711[(11)]);
var inst_36690 = (state_36711[(7)]);
var inst_36690__$1 = topic_fn.call(null,inst_36642);
var inst_36691 = cljs.core.deref.call(null,mults);
var inst_36692__$1 = cljs.core.get.call(null,inst_36691,inst_36690__$1);
var state_36711__$1 = (function (){var statearr_36727 = state_36711;
(statearr_36727[(11)] = inst_36692__$1);

(statearr_36727[(7)] = inst_36690__$1);

return statearr_36727;
})();
if(cljs.core.truth_(inst_36692__$1)){
var statearr_36728_36770 = state_36711__$1;
(statearr_36728_36770[(1)] = (19));

} else {
var statearr_36729_36771 = state_36711__$1;
(statearr_36729_36771[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36712 === (25))){
var inst_36701 = (state_36711[(2)]);
var state_36711__$1 = state_36711;
var statearr_36730_36772 = state_36711__$1;
(statearr_36730_36772[(2)] = inst_36701);

(statearr_36730_36772[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36712 === (17))){
var inst_36666 = (state_36711[(10)]);
var inst_36675 = cljs.core.first.call(null,inst_36666);
var inst_36676 = cljs.core.async.muxch_STAR_.call(null,inst_36675);
var inst_36677 = cljs.core.async.close_BANG_.call(null,inst_36676);
var inst_36678 = cljs.core.next.call(null,inst_36666);
var inst_36652 = inst_36678;
var inst_36653 = null;
var inst_36654 = (0);
var inst_36655 = (0);
var state_36711__$1 = (function (){var statearr_36731 = state_36711;
(statearr_36731[(12)] = inst_36653);

(statearr_36731[(13)] = inst_36655);

(statearr_36731[(14)] = inst_36652);

(statearr_36731[(15)] = inst_36677);

(statearr_36731[(16)] = inst_36654);

return statearr_36731;
})();
var statearr_36732_36773 = state_36711__$1;
(statearr_36732_36773[(2)] = null);

(statearr_36732_36773[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36712 === (3))){
var inst_36709 = (state_36711[(2)]);
var state_36711__$1 = state_36711;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36711__$1,inst_36709);
} else {
if((state_val_36712 === (12))){
var inst_36686 = (state_36711[(2)]);
var state_36711__$1 = state_36711;
var statearr_36733_36774 = state_36711__$1;
(statearr_36733_36774[(2)] = inst_36686);

(statearr_36733_36774[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36712 === (2))){
var state_36711__$1 = state_36711;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36711__$1,(4),ch);
} else {
if((state_val_36712 === (23))){
var state_36711__$1 = state_36711;
var statearr_36734_36775 = state_36711__$1;
(statearr_36734_36775[(2)] = null);

(statearr_36734_36775[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36712 === (19))){
var inst_36642 = (state_36711[(8)]);
var inst_36692 = (state_36711[(11)]);
var inst_36694 = cljs.core.async.muxch_STAR_.call(null,inst_36692);
var state_36711__$1 = state_36711;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36711__$1,(22),inst_36694,inst_36642);
} else {
if((state_val_36712 === (11))){
var inst_36666 = (state_36711[(10)]);
var inst_36652 = (state_36711[(14)]);
var inst_36666__$1 = cljs.core.seq.call(null,inst_36652);
var state_36711__$1 = (function (){var statearr_36735 = state_36711;
(statearr_36735[(10)] = inst_36666__$1);

return statearr_36735;
})();
if(inst_36666__$1){
var statearr_36736_36776 = state_36711__$1;
(statearr_36736_36776[(1)] = (13));

} else {
var statearr_36737_36777 = state_36711__$1;
(statearr_36737_36777[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36712 === (9))){
var inst_36688 = (state_36711[(2)]);
var state_36711__$1 = state_36711;
var statearr_36738_36778 = state_36711__$1;
(statearr_36738_36778[(2)] = inst_36688);

(statearr_36738_36778[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36712 === (5))){
var inst_36649 = cljs.core.deref.call(null,mults);
var inst_36650 = cljs.core.vals.call(null,inst_36649);
var inst_36651 = cljs.core.seq.call(null,inst_36650);
var inst_36652 = inst_36651;
var inst_36653 = null;
var inst_36654 = (0);
var inst_36655 = (0);
var state_36711__$1 = (function (){var statearr_36739 = state_36711;
(statearr_36739[(12)] = inst_36653);

(statearr_36739[(13)] = inst_36655);

(statearr_36739[(14)] = inst_36652);

(statearr_36739[(16)] = inst_36654);

return statearr_36739;
})();
var statearr_36740_36779 = state_36711__$1;
(statearr_36740_36779[(2)] = null);

(statearr_36740_36779[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36712 === (14))){
var state_36711__$1 = state_36711;
var statearr_36744_36780 = state_36711__$1;
(statearr_36744_36780[(2)] = null);

(statearr_36744_36780[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36712 === (16))){
var inst_36666 = (state_36711[(10)]);
var inst_36670 = cljs.core.chunk_first.call(null,inst_36666);
var inst_36671 = cljs.core.chunk_rest.call(null,inst_36666);
var inst_36672 = cljs.core.count.call(null,inst_36670);
var inst_36652 = inst_36671;
var inst_36653 = inst_36670;
var inst_36654 = inst_36672;
var inst_36655 = (0);
var state_36711__$1 = (function (){var statearr_36745 = state_36711;
(statearr_36745[(12)] = inst_36653);

(statearr_36745[(13)] = inst_36655);

(statearr_36745[(14)] = inst_36652);

(statearr_36745[(16)] = inst_36654);

return statearr_36745;
})();
var statearr_36746_36781 = state_36711__$1;
(statearr_36746_36781[(2)] = null);

(statearr_36746_36781[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36712 === (10))){
var inst_36653 = (state_36711[(12)]);
var inst_36655 = (state_36711[(13)]);
var inst_36652 = (state_36711[(14)]);
var inst_36654 = (state_36711[(16)]);
var inst_36660 = cljs.core._nth.call(null,inst_36653,inst_36655);
var inst_36661 = cljs.core.async.muxch_STAR_.call(null,inst_36660);
var inst_36662 = cljs.core.async.close_BANG_.call(null,inst_36661);
var inst_36663 = (inst_36655 + (1));
var tmp36741 = inst_36653;
var tmp36742 = inst_36652;
var tmp36743 = inst_36654;
var inst_36652__$1 = tmp36742;
var inst_36653__$1 = tmp36741;
var inst_36654__$1 = tmp36743;
var inst_36655__$1 = inst_36663;
var state_36711__$1 = (function (){var statearr_36747 = state_36711;
(statearr_36747[(12)] = inst_36653__$1);

(statearr_36747[(13)] = inst_36655__$1);

(statearr_36747[(17)] = inst_36662);

(statearr_36747[(14)] = inst_36652__$1);

(statearr_36747[(16)] = inst_36654__$1);

return statearr_36747;
})();
var statearr_36748_36782 = state_36711__$1;
(statearr_36748_36782[(2)] = null);

(statearr_36748_36782[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36712 === (18))){
var inst_36681 = (state_36711[(2)]);
var state_36711__$1 = state_36711;
var statearr_36749_36783 = state_36711__$1;
(statearr_36749_36783[(2)] = inst_36681);

(statearr_36749_36783[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36712 === (8))){
var inst_36655 = (state_36711[(13)]);
var inst_36654 = (state_36711[(16)]);
var inst_36657 = (inst_36655 < inst_36654);
var inst_36658 = inst_36657;
var state_36711__$1 = state_36711;
if(cljs.core.truth_(inst_36658)){
var statearr_36750_36784 = state_36711__$1;
(statearr_36750_36784[(1)] = (10));

} else {
var statearr_36751_36785 = state_36711__$1;
(statearr_36751_36785[(1)] = (11));

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
});})(c__35537__auto___36757,mults,ensure_mult,p))
;
return ((function (switch__35449__auto__,c__35537__auto___36757,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__35450__auto__ = null;
var cljs$core$async$state_machine__35450__auto____0 = (function (){
var statearr_36752 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36752[(0)] = cljs$core$async$state_machine__35450__auto__);

(statearr_36752[(1)] = (1));

return statearr_36752;
});
var cljs$core$async$state_machine__35450__auto____1 = (function (state_36711){
while(true){
var ret_value__35451__auto__ = (function (){try{while(true){
var result__35452__auto__ = switch__35449__auto__.call(null,state_36711);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35452__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35452__auto__;
}
break;
}
}catch (e36753){if((e36753 instanceof Object)){
var ex__35453__auto__ = e36753;
var statearr_36754_36786 = state_36711;
(statearr_36754_36786[(5)] = ex__35453__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36711);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36753;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35451__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36787 = state_36711;
state_36711 = G__36787;
continue;
} else {
return ret_value__35451__auto__;
}
break;
}
});
cljs$core$async$state_machine__35450__auto__ = function(state_36711){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35450__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35450__auto____1.call(this,state_36711);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__35450__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35450__auto____0;
cljs$core$async$state_machine__35450__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35450__auto____1;
return cljs$core$async$state_machine__35450__auto__;
})()
;})(switch__35449__auto__,c__35537__auto___36757,mults,ensure_mult,p))
})();
var state__35539__auto__ = (function (){var statearr_36755 = f__35538__auto__.call(null);
(statearr_36755[(6)] = c__35537__auto___36757);

return statearr_36755;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35539__auto__);
});})(c__35537__auto___36757,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__36789 = arguments.length;
switch (G__36789) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__36792 = arguments.length;
switch (G__36792) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__36795 = arguments.length;
switch (G__36795) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__35537__auto___36862 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35537__auto___36862,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__35538__auto__ = (function (){var switch__35449__auto__ = ((function (c__35537__auto___36862,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_36834){
var state_val_36835 = (state_36834[(1)]);
if((state_val_36835 === (7))){
var state_36834__$1 = state_36834;
var statearr_36836_36863 = state_36834__$1;
(statearr_36836_36863[(2)] = null);

(statearr_36836_36863[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36835 === (1))){
var state_36834__$1 = state_36834;
var statearr_36837_36864 = state_36834__$1;
(statearr_36837_36864[(2)] = null);

(statearr_36837_36864[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36835 === (4))){
var inst_36798 = (state_36834[(7)]);
var inst_36800 = (inst_36798 < cnt);
var state_36834__$1 = state_36834;
if(cljs.core.truth_(inst_36800)){
var statearr_36838_36865 = state_36834__$1;
(statearr_36838_36865[(1)] = (6));

} else {
var statearr_36839_36866 = state_36834__$1;
(statearr_36839_36866[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36835 === (15))){
var inst_36830 = (state_36834[(2)]);
var state_36834__$1 = state_36834;
var statearr_36840_36867 = state_36834__$1;
(statearr_36840_36867[(2)] = inst_36830);

(statearr_36840_36867[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36835 === (13))){
var inst_36823 = cljs.core.async.close_BANG_.call(null,out);
var state_36834__$1 = state_36834;
var statearr_36841_36868 = state_36834__$1;
(statearr_36841_36868[(2)] = inst_36823);

(statearr_36841_36868[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36835 === (6))){
var state_36834__$1 = state_36834;
var statearr_36842_36869 = state_36834__$1;
(statearr_36842_36869[(2)] = null);

(statearr_36842_36869[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36835 === (3))){
var inst_36832 = (state_36834[(2)]);
var state_36834__$1 = state_36834;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36834__$1,inst_36832);
} else {
if((state_val_36835 === (12))){
var inst_36820 = (state_36834[(8)]);
var inst_36820__$1 = (state_36834[(2)]);
var inst_36821 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_36820__$1);
var state_36834__$1 = (function (){var statearr_36843 = state_36834;
(statearr_36843[(8)] = inst_36820__$1);

return statearr_36843;
})();
if(cljs.core.truth_(inst_36821)){
var statearr_36844_36870 = state_36834__$1;
(statearr_36844_36870[(1)] = (13));

} else {
var statearr_36845_36871 = state_36834__$1;
(statearr_36845_36871[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36835 === (2))){
var inst_36797 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_36798 = (0);
var state_36834__$1 = (function (){var statearr_36846 = state_36834;
(statearr_36846[(9)] = inst_36797);

(statearr_36846[(7)] = inst_36798);

return statearr_36846;
})();
var statearr_36847_36872 = state_36834__$1;
(statearr_36847_36872[(2)] = null);

(statearr_36847_36872[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36835 === (11))){
var inst_36798 = (state_36834[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_36834,(10),Object,null,(9));
var inst_36807 = chs__$1.call(null,inst_36798);
var inst_36808 = done.call(null,inst_36798);
var inst_36809 = cljs.core.async.take_BANG_.call(null,inst_36807,inst_36808);
var state_36834__$1 = state_36834;
var statearr_36848_36873 = state_36834__$1;
(statearr_36848_36873[(2)] = inst_36809);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36834__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36835 === (9))){
var inst_36798 = (state_36834[(7)]);
var inst_36811 = (state_36834[(2)]);
var inst_36812 = (inst_36798 + (1));
var inst_36798__$1 = inst_36812;
var state_36834__$1 = (function (){var statearr_36849 = state_36834;
(statearr_36849[(7)] = inst_36798__$1);

(statearr_36849[(10)] = inst_36811);

return statearr_36849;
})();
var statearr_36850_36874 = state_36834__$1;
(statearr_36850_36874[(2)] = null);

(statearr_36850_36874[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36835 === (5))){
var inst_36818 = (state_36834[(2)]);
var state_36834__$1 = (function (){var statearr_36851 = state_36834;
(statearr_36851[(11)] = inst_36818);

return statearr_36851;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36834__$1,(12),dchan);
} else {
if((state_val_36835 === (14))){
var inst_36820 = (state_36834[(8)]);
var inst_36825 = cljs.core.apply.call(null,f,inst_36820);
var state_36834__$1 = state_36834;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36834__$1,(16),out,inst_36825);
} else {
if((state_val_36835 === (16))){
var inst_36827 = (state_36834[(2)]);
var state_36834__$1 = (function (){var statearr_36852 = state_36834;
(statearr_36852[(12)] = inst_36827);

return statearr_36852;
})();
var statearr_36853_36875 = state_36834__$1;
(statearr_36853_36875[(2)] = null);

(statearr_36853_36875[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36835 === (10))){
var inst_36802 = (state_36834[(2)]);
var inst_36803 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_36834__$1 = (function (){var statearr_36854 = state_36834;
(statearr_36854[(13)] = inst_36802);

return statearr_36854;
})();
var statearr_36855_36876 = state_36834__$1;
(statearr_36855_36876[(2)] = inst_36803);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36834__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36835 === (8))){
var inst_36816 = (state_36834[(2)]);
var state_36834__$1 = state_36834;
var statearr_36856_36877 = state_36834__$1;
(statearr_36856_36877[(2)] = inst_36816);

(statearr_36856_36877[(1)] = (5));


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
});})(c__35537__auto___36862,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__35449__auto__,c__35537__auto___36862,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__35450__auto__ = null;
var cljs$core$async$state_machine__35450__auto____0 = (function (){
var statearr_36857 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36857[(0)] = cljs$core$async$state_machine__35450__auto__);

(statearr_36857[(1)] = (1));

return statearr_36857;
});
var cljs$core$async$state_machine__35450__auto____1 = (function (state_36834){
while(true){
var ret_value__35451__auto__ = (function (){try{while(true){
var result__35452__auto__ = switch__35449__auto__.call(null,state_36834);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35452__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35452__auto__;
}
break;
}
}catch (e36858){if((e36858 instanceof Object)){
var ex__35453__auto__ = e36858;
var statearr_36859_36878 = state_36834;
(statearr_36859_36878[(5)] = ex__35453__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36834);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36858;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35451__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36879 = state_36834;
state_36834 = G__36879;
continue;
} else {
return ret_value__35451__auto__;
}
break;
}
});
cljs$core$async$state_machine__35450__auto__ = function(state_36834){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35450__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35450__auto____1.call(this,state_36834);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__35450__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35450__auto____0;
cljs$core$async$state_machine__35450__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35450__auto____1;
return cljs$core$async$state_machine__35450__auto__;
})()
;})(switch__35449__auto__,c__35537__auto___36862,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__35539__auto__ = (function (){var statearr_36860 = f__35538__auto__.call(null);
(statearr_36860[(6)] = c__35537__auto___36862);

return statearr_36860;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35539__auto__);
});})(c__35537__auto___36862,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__36882 = arguments.length;
switch (G__36882) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__35537__auto___36936 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35537__auto___36936,out){
return (function (){
var f__35538__auto__ = (function (){var switch__35449__auto__ = ((function (c__35537__auto___36936,out){
return (function (state_36914){
var state_val_36915 = (state_36914[(1)]);
if((state_val_36915 === (7))){
var inst_36893 = (state_36914[(7)]);
var inst_36894 = (state_36914[(8)]);
var inst_36893__$1 = (state_36914[(2)]);
var inst_36894__$1 = cljs.core.nth.call(null,inst_36893__$1,(0),null);
var inst_36895 = cljs.core.nth.call(null,inst_36893__$1,(1),null);
var inst_36896 = (inst_36894__$1 == null);
var state_36914__$1 = (function (){var statearr_36916 = state_36914;
(statearr_36916[(7)] = inst_36893__$1);

(statearr_36916[(8)] = inst_36894__$1);

(statearr_36916[(9)] = inst_36895);

return statearr_36916;
})();
if(cljs.core.truth_(inst_36896)){
var statearr_36917_36937 = state_36914__$1;
(statearr_36917_36937[(1)] = (8));

} else {
var statearr_36918_36938 = state_36914__$1;
(statearr_36918_36938[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36915 === (1))){
var inst_36883 = cljs.core.vec.call(null,chs);
var inst_36884 = inst_36883;
var state_36914__$1 = (function (){var statearr_36919 = state_36914;
(statearr_36919[(10)] = inst_36884);

return statearr_36919;
})();
var statearr_36920_36939 = state_36914__$1;
(statearr_36920_36939[(2)] = null);

(statearr_36920_36939[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36915 === (4))){
var inst_36884 = (state_36914[(10)]);
var state_36914__$1 = state_36914;
return cljs.core.async.ioc_alts_BANG_.call(null,state_36914__$1,(7),inst_36884);
} else {
if((state_val_36915 === (6))){
var inst_36910 = (state_36914[(2)]);
var state_36914__$1 = state_36914;
var statearr_36921_36940 = state_36914__$1;
(statearr_36921_36940[(2)] = inst_36910);

(statearr_36921_36940[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36915 === (3))){
var inst_36912 = (state_36914[(2)]);
var state_36914__$1 = state_36914;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36914__$1,inst_36912);
} else {
if((state_val_36915 === (2))){
var inst_36884 = (state_36914[(10)]);
var inst_36886 = cljs.core.count.call(null,inst_36884);
var inst_36887 = (inst_36886 > (0));
var state_36914__$1 = state_36914;
if(cljs.core.truth_(inst_36887)){
var statearr_36923_36941 = state_36914__$1;
(statearr_36923_36941[(1)] = (4));

} else {
var statearr_36924_36942 = state_36914__$1;
(statearr_36924_36942[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36915 === (11))){
var inst_36884 = (state_36914[(10)]);
var inst_36903 = (state_36914[(2)]);
var tmp36922 = inst_36884;
var inst_36884__$1 = tmp36922;
var state_36914__$1 = (function (){var statearr_36925 = state_36914;
(statearr_36925[(10)] = inst_36884__$1);

(statearr_36925[(11)] = inst_36903);

return statearr_36925;
})();
var statearr_36926_36943 = state_36914__$1;
(statearr_36926_36943[(2)] = null);

(statearr_36926_36943[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36915 === (9))){
var inst_36894 = (state_36914[(8)]);
var state_36914__$1 = state_36914;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36914__$1,(11),out,inst_36894);
} else {
if((state_val_36915 === (5))){
var inst_36908 = cljs.core.async.close_BANG_.call(null,out);
var state_36914__$1 = state_36914;
var statearr_36927_36944 = state_36914__$1;
(statearr_36927_36944[(2)] = inst_36908);

(statearr_36927_36944[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36915 === (10))){
var inst_36906 = (state_36914[(2)]);
var state_36914__$1 = state_36914;
var statearr_36928_36945 = state_36914__$1;
(statearr_36928_36945[(2)] = inst_36906);

(statearr_36928_36945[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36915 === (8))){
var inst_36893 = (state_36914[(7)]);
var inst_36894 = (state_36914[(8)]);
var inst_36884 = (state_36914[(10)]);
var inst_36895 = (state_36914[(9)]);
var inst_36898 = (function (){var cs = inst_36884;
var vec__36889 = inst_36893;
var v = inst_36894;
var c = inst_36895;
return ((function (cs,vec__36889,v,c,inst_36893,inst_36894,inst_36884,inst_36895,state_val_36915,c__35537__auto___36936,out){
return (function (p1__36880_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__36880_SHARP_);
});
;})(cs,vec__36889,v,c,inst_36893,inst_36894,inst_36884,inst_36895,state_val_36915,c__35537__auto___36936,out))
})();
var inst_36899 = cljs.core.filterv.call(null,inst_36898,inst_36884);
var inst_36884__$1 = inst_36899;
var state_36914__$1 = (function (){var statearr_36929 = state_36914;
(statearr_36929[(10)] = inst_36884__$1);

return statearr_36929;
})();
var statearr_36930_36946 = state_36914__$1;
(statearr_36930_36946[(2)] = null);

(statearr_36930_36946[(1)] = (2));


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
});})(c__35537__auto___36936,out))
;
return ((function (switch__35449__auto__,c__35537__auto___36936,out){
return (function() {
var cljs$core$async$state_machine__35450__auto__ = null;
var cljs$core$async$state_machine__35450__auto____0 = (function (){
var statearr_36931 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36931[(0)] = cljs$core$async$state_machine__35450__auto__);

(statearr_36931[(1)] = (1));

return statearr_36931;
});
var cljs$core$async$state_machine__35450__auto____1 = (function (state_36914){
while(true){
var ret_value__35451__auto__ = (function (){try{while(true){
var result__35452__auto__ = switch__35449__auto__.call(null,state_36914);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35452__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35452__auto__;
}
break;
}
}catch (e36932){if((e36932 instanceof Object)){
var ex__35453__auto__ = e36932;
var statearr_36933_36947 = state_36914;
(statearr_36933_36947[(5)] = ex__35453__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36914);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36932;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35451__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36948 = state_36914;
state_36914 = G__36948;
continue;
} else {
return ret_value__35451__auto__;
}
break;
}
});
cljs$core$async$state_machine__35450__auto__ = function(state_36914){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35450__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35450__auto____1.call(this,state_36914);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__35450__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35450__auto____0;
cljs$core$async$state_machine__35450__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35450__auto____1;
return cljs$core$async$state_machine__35450__auto__;
})()
;})(switch__35449__auto__,c__35537__auto___36936,out))
})();
var state__35539__auto__ = (function (){var statearr_36934 = f__35538__auto__.call(null);
(statearr_36934[(6)] = c__35537__auto___36936);

return statearr_36934;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35539__auto__);
});})(c__35537__auto___36936,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__36950 = arguments.length;
switch (G__36950) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__35537__auto___36995 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35537__auto___36995,out){
return (function (){
var f__35538__auto__ = (function (){var switch__35449__auto__ = ((function (c__35537__auto___36995,out){
return (function (state_36974){
var state_val_36975 = (state_36974[(1)]);
if((state_val_36975 === (7))){
var inst_36956 = (state_36974[(7)]);
var inst_36956__$1 = (state_36974[(2)]);
var inst_36957 = (inst_36956__$1 == null);
var inst_36958 = cljs.core.not.call(null,inst_36957);
var state_36974__$1 = (function (){var statearr_36976 = state_36974;
(statearr_36976[(7)] = inst_36956__$1);

return statearr_36976;
})();
if(inst_36958){
var statearr_36977_36996 = state_36974__$1;
(statearr_36977_36996[(1)] = (8));

} else {
var statearr_36978_36997 = state_36974__$1;
(statearr_36978_36997[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36975 === (1))){
var inst_36951 = (0);
var state_36974__$1 = (function (){var statearr_36979 = state_36974;
(statearr_36979[(8)] = inst_36951);

return statearr_36979;
})();
var statearr_36980_36998 = state_36974__$1;
(statearr_36980_36998[(2)] = null);

(statearr_36980_36998[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36975 === (4))){
var state_36974__$1 = state_36974;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36974__$1,(7),ch);
} else {
if((state_val_36975 === (6))){
var inst_36969 = (state_36974[(2)]);
var state_36974__$1 = state_36974;
var statearr_36981_36999 = state_36974__$1;
(statearr_36981_36999[(2)] = inst_36969);

(statearr_36981_36999[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36975 === (3))){
var inst_36971 = (state_36974[(2)]);
var inst_36972 = cljs.core.async.close_BANG_.call(null,out);
var state_36974__$1 = (function (){var statearr_36982 = state_36974;
(statearr_36982[(9)] = inst_36971);

return statearr_36982;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36974__$1,inst_36972);
} else {
if((state_val_36975 === (2))){
var inst_36951 = (state_36974[(8)]);
var inst_36953 = (inst_36951 < n);
var state_36974__$1 = state_36974;
if(cljs.core.truth_(inst_36953)){
var statearr_36983_37000 = state_36974__$1;
(statearr_36983_37000[(1)] = (4));

} else {
var statearr_36984_37001 = state_36974__$1;
(statearr_36984_37001[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36975 === (11))){
var inst_36951 = (state_36974[(8)]);
var inst_36961 = (state_36974[(2)]);
var inst_36962 = (inst_36951 + (1));
var inst_36951__$1 = inst_36962;
var state_36974__$1 = (function (){var statearr_36985 = state_36974;
(statearr_36985[(10)] = inst_36961);

(statearr_36985[(8)] = inst_36951__$1);

return statearr_36985;
})();
var statearr_36986_37002 = state_36974__$1;
(statearr_36986_37002[(2)] = null);

(statearr_36986_37002[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36975 === (9))){
var state_36974__$1 = state_36974;
var statearr_36987_37003 = state_36974__$1;
(statearr_36987_37003[(2)] = null);

(statearr_36987_37003[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36975 === (5))){
var state_36974__$1 = state_36974;
var statearr_36988_37004 = state_36974__$1;
(statearr_36988_37004[(2)] = null);

(statearr_36988_37004[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36975 === (10))){
var inst_36966 = (state_36974[(2)]);
var state_36974__$1 = state_36974;
var statearr_36989_37005 = state_36974__$1;
(statearr_36989_37005[(2)] = inst_36966);

(statearr_36989_37005[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36975 === (8))){
var inst_36956 = (state_36974[(7)]);
var state_36974__$1 = state_36974;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36974__$1,(11),out,inst_36956);
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
});})(c__35537__auto___36995,out))
;
return ((function (switch__35449__auto__,c__35537__auto___36995,out){
return (function() {
var cljs$core$async$state_machine__35450__auto__ = null;
var cljs$core$async$state_machine__35450__auto____0 = (function (){
var statearr_36990 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36990[(0)] = cljs$core$async$state_machine__35450__auto__);

(statearr_36990[(1)] = (1));

return statearr_36990;
});
var cljs$core$async$state_machine__35450__auto____1 = (function (state_36974){
while(true){
var ret_value__35451__auto__ = (function (){try{while(true){
var result__35452__auto__ = switch__35449__auto__.call(null,state_36974);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35452__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35452__auto__;
}
break;
}
}catch (e36991){if((e36991 instanceof Object)){
var ex__35453__auto__ = e36991;
var statearr_36992_37006 = state_36974;
(statearr_36992_37006[(5)] = ex__35453__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36974);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36991;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35451__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37007 = state_36974;
state_36974 = G__37007;
continue;
} else {
return ret_value__35451__auto__;
}
break;
}
});
cljs$core$async$state_machine__35450__auto__ = function(state_36974){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35450__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35450__auto____1.call(this,state_36974);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__35450__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35450__auto____0;
cljs$core$async$state_machine__35450__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35450__auto____1;
return cljs$core$async$state_machine__35450__auto__;
})()
;})(switch__35449__auto__,c__35537__auto___36995,out))
})();
var state__35539__auto__ = (function (){var statearr_36993 = f__35538__auto__.call(null);
(statearr_36993[(6)] = c__35537__auto___36995);

return statearr_36993;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35539__auto__);
});})(c__35537__auto___36995,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async37009 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37009 = (function (f,ch,meta37010){
this.f = f;
this.ch = ch;
this.meta37010 = meta37010;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async37009.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37011,meta37010__$1){
var self__ = this;
var _37011__$1 = this;
return (new cljs.core.async.t_cljs$core$async37009(self__.f,self__.ch,meta37010__$1));
});

cljs.core.async.t_cljs$core$async37009.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37011){
var self__ = this;
var _37011__$1 = this;
return self__.meta37010;
});

cljs.core.async.t_cljs$core$async37009.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async37009.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async37009.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async37009.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async37009.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async37012 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37012 = (function (f,ch,meta37010,_,fn1,meta37013){
this.f = f;
this.ch = ch;
this.meta37010 = meta37010;
this._ = _;
this.fn1 = fn1;
this.meta37013 = meta37013;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async37012.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_37014,meta37013__$1){
var self__ = this;
var _37014__$1 = this;
return (new cljs.core.async.t_cljs$core$async37012(self__.f,self__.ch,self__.meta37010,self__._,self__.fn1,meta37013__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async37012.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_37014){
var self__ = this;
var _37014__$1 = this;
return self__.meta37013;
});})(___$1))
;

cljs.core.async.t_cljs$core$async37012.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async37012.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async37012.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async37012.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__37008_SHARP_){
return f1.call(null,(((p1__37008_SHARP_ == null))?null:self__.f.call(null,p1__37008_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async37012.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta37010","meta37010",-607883610,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async37009","cljs.core.async/t_cljs$core$async37009",-535877012,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta37013","meta37013",-277771793,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async37012.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async37012.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37012";

cljs.core.async.t_cljs$core$async37012.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async37012");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37012.
 */
cljs.core.async.__GT_t_cljs$core$async37012 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async37012(f__$1,ch__$1,meta37010__$1,___$2,fn1__$1,meta37013){
return (new cljs.core.async.t_cljs$core$async37012(f__$1,ch__$1,meta37010__$1,___$2,fn1__$1,meta37013));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async37012(self__.f,self__.ch,self__.meta37010,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__3911__auto__ = ret;
if(cljs.core.truth_(and__3911__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__3911__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async37009.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async37009.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async37009.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta37010","meta37010",-607883610,null)], null);
});

cljs.core.async.t_cljs$core$async37009.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async37009.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37009";

cljs.core.async.t_cljs$core$async37009.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async37009");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37009.
 */
cljs.core.async.__GT_t_cljs$core$async37009 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async37009(f__$1,ch__$1,meta37010){
return (new cljs.core.async.t_cljs$core$async37009(f__$1,ch__$1,meta37010));
});

}

return (new cljs.core.async.t_cljs$core$async37009(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async37015 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37015 = (function (f,ch,meta37016){
this.f = f;
this.ch = ch;
this.meta37016 = meta37016;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async37015.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37017,meta37016__$1){
var self__ = this;
var _37017__$1 = this;
return (new cljs.core.async.t_cljs$core$async37015(self__.f,self__.ch,meta37016__$1));
});

cljs.core.async.t_cljs$core$async37015.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37017){
var self__ = this;
var _37017__$1 = this;
return self__.meta37016;
});

cljs.core.async.t_cljs$core$async37015.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async37015.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async37015.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async37015.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async37015.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async37015.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async37015.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta37016","meta37016",-1539395272,null)], null);
});

cljs.core.async.t_cljs$core$async37015.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async37015.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37015";

cljs.core.async.t_cljs$core$async37015.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async37015");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37015.
 */
cljs.core.async.__GT_t_cljs$core$async37015 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async37015(f__$1,ch__$1,meta37016){
return (new cljs.core.async.t_cljs$core$async37015(f__$1,ch__$1,meta37016));
});

}

return (new cljs.core.async.t_cljs$core$async37015(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async37018 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37018 = (function (p,ch,meta37019){
this.p = p;
this.ch = ch;
this.meta37019 = meta37019;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async37018.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37020,meta37019__$1){
var self__ = this;
var _37020__$1 = this;
return (new cljs.core.async.t_cljs$core$async37018(self__.p,self__.ch,meta37019__$1));
});

cljs.core.async.t_cljs$core$async37018.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37020){
var self__ = this;
var _37020__$1 = this;
return self__.meta37019;
});

cljs.core.async.t_cljs$core$async37018.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async37018.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async37018.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async37018.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async37018.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async37018.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async37018.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async37018.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta37019","meta37019",-513122008,null)], null);
});

cljs.core.async.t_cljs$core$async37018.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async37018.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37018";

cljs.core.async.t_cljs$core$async37018.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async37018");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37018.
 */
cljs.core.async.__GT_t_cljs$core$async37018 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async37018(p__$1,ch__$1,meta37019){
return (new cljs.core.async.t_cljs$core$async37018(p__$1,ch__$1,meta37019));
});

}

return (new cljs.core.async.t_cljs$core$async37018(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__37022 = arguments.length;
switch (G__37022) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__35537__auto___37062 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35537__auto___37062,out){
return (function (){
var f__35538__auto__ = (function (){var switch__35449__auto__ = ((function (c__35537__auto___37062,out){
return (function (state_37043){
var state_val_37044 = (state_37043[(1)]);
if((state_val_37044 === (7))){
var inst_37039 = (state_37043[(2)]);
var state_37043__$1 = state_37043;
var statearr_37045_37063 = state_37043__$1;
(statearr_37045_37063[(2)] = inst_37039);

(statearr_37045_37063[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37044 === (1))){
var state_37043__$1 = state_37043;
var statearr_37046_37064 = state_37043__$1;
(statearr_37046_37064[(2)] = null);

(statearr_37046_37064[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37044 === (4))){
var inst_37025 = (state_37043[(7)]);
var inst_37025__$1 = (state_37043[(2)]);
var inst_37026 = (inst_37025__$1 == null);
var state_37043__$1 = (function (){var statearr_37047 = state_37043;
(statearr_37047[(7)] = inst_37025__$1);

return statearr_37047;
})();
if(cljs.core.truth_(inst_37026)){
var statearr_37048_37065 = state_37043__$1;
(statearr_37048_37065[(1)] = (5));

} else {
var statearr_37049_37066 = state_37043__$1;
(statearr_37049_37066[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37044 === (6))){
var inst_37025 = (state_37043[(7)]);
var inst_37030 = p.call(null,inst_37025);
var state_37043__$1 = state_37043;
if(cljs.core.truth_(inst_37030)){
var statearr_37050_37067 = state_37043__$1;
(statearr_37050_37067[(1)] = (8));

} else {
var statearr_37051_37068 = state_37043__$1;
(statearr_37051_37068[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37044 === (3))){
var inst_37041 = (state_37043[(2)]);
var state_37043__$1 = state_37043;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37043__$1,inst_37041);
} else {
if((state_val_37044 === (2))){
var state_37043__$1 = state_37043;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37043__$1,(4),ch);
} else {
if((state_val_37044 === (11))){
var inst_37033 = (state_37043[(2)]);
var state_37043__$1 = state_37043;
var statearr_37052_37069 = state_37043__$1;
(statearr_37052_37069[(2)] = inst_37033);

(statearr_37052_37069[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37044 === (9))){
var state_37043__$1 = state_37043;
var statearr_37053_37070 = state_37043__$1;
(statearr_37053_37070[(2)] = null);

(statearr_37053_37070[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37044 === (5))){
var inst_37028 = cljs.core.async.close_BANG_.call(null,out);
var state_37043__$1 = state_37043;
var statearr_37054_37071 = state_37043__$1;
(statearr_37054_37071[(2)] = inst_37028);

(statearr_37054_37071[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37044 === (10))){
var inst_37036 = (state_37043[(2)]);
var state_37043__$1 = (function (){var statearr_37055 = state_37043;
(statearr_37055[(8)] = inst_37036);

return statearr_37055;
})();
var statearr_37056_37072 = state_37043__$1;
(statearr_37056_37072[(2)] = null);

(statearr_37056_37072[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37044 === (8))){
var inst_37025 = (state_37043[(7)]);
var state_37043__$1 = state_37043;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37043__$1,(11),out,inst_37025);
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
});})(c__35537__auto___37062,out))
;
return ((function (switch__35449__auto__,c__35537__auto___37062,out){
return (function() {
var cljs$core$async$state_machine__35450__auto__ = null;
var cljs$core$async$state_machine__35450__auto____0 = (function (){
var statearr_37057 = [null,null,null,null,null,null,null,null,null];
(statearr_37057[(0)] = cljs$core$async$state_machine__35450__auto__);

(statearr_37057[(1)] = (1));

return statearr_37057;
});
var cljs$core$async$state_machine__35450__auto____1 = (function (state_37043){
while(true){
var ret_value__35451__auto__ = (function (){try{while(true){
var result__35452__auto__ = switch__35449__auto__.call(null,state_37043);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35452__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35452__auto__;
}
break;
}
}catch (e37058){if((e37058 instanceof Object)){
var ex__35453__auto__ = e37058;
var statearr_37059_37073 = state_37043;
(statearr_37059_37073[(5)] = ex__35453__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37043);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37058;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35451__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37074 = state_37043;
state_37043 = G__37074;
continue;
} else {
return ret_value__35451__auto__;
}
break;
}
});
cljs$core$async$state_machine__35450__auto__ = function(state_37043){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35450__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35450__auto____1.call(this,state_37043);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__35450__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35450__auto____0;
cljs$core$async$state_machine__35450__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35450__auto____1;
return cljs$core$async$state_machine__35450__auto__;
})()
;})(switch__35449__auto__,c__35537__auto___37062,out))
})();
var state__35539__auto__ = (function (){var statearr_37060 = f__35538__auto__.call(null);
(statearr_37060[(6)] = c__35537__auto___37062);

return statearr_37060;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35539__auto__);
});})(c__35537__auto___37062,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__37076 = arguments.length;
switch (G__37076) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__35537__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35537__auto__){
return (function (){
var f__35538__auto__ = (function (){var switch__35449__auto__ = ((function (c__35537__auto__){
return (function (state_37139){
var state_val_37140 = (state_37139[(1)]);
if((state_val_37140 === (7))){
var inst_37135 = (state_37139[(2)]);
var state_37139__$1 = state_37139;
var statearr_37141_37179 = state_37139__$1;
(statearr_37141_37179[(2)] = inst_37135);

(statearr_37141_37179[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37140 === (20))){
var inst_37105 = (state_37139[(7)]);
var inst_37116 = (state_37139[(2)]);
var inst_37117 = cljs.core.next.call(null,inst_37105);
var inst_37091 = inst_37117;
var inst_37092 = null;
var inst_37093 = (0);
var inst_37094 = (0);
var state_37139__$1 = (function (){var statearr_37142 = state_37139;
(statearr_37142[(8)] = inst_37094);

(statearr_37142[(9)] = inst_37093);

(statearr_37142[(10)] = inst_37091);

(statearr_37142[(11)] = inst_37116);

(statearr_37142[(12)] = inst_37092);

return statearr_37142;
})();
var statearr_37143_37180 = state_37139__$1;
(statearr_37143_37180[(2)] = null);

(statearr_37143_37180[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37140 === (1))){
var state_37139__$1 = state_37139;
var statearr_37144_37181 = state_37139__$1;
(statearr_37144_37181[(2)] = null);

(statearr_37144_37181[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37140 === (4))){
var inst_37080 = (state_37139[(13)]);
var inst_37080__$1 = (state_37139[(2)]);
var inst_37081 = (inst_37080__$1 == null);
var state_37139__$1 = (function (){var statearr_37145 = state_37139;
(statearr_37145[(13)] = inst_37080__$1);

return statearr_37145;
})();
if(cljs.core.truth_(inst_37081)){
var statearr_37146_37182 = state_37139__$1;
(statearr_37146_37182[(1)] = (5));

} else {
var statearr_37147_37183 = state_37139__$1;
(statearr_37147_37183[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37140 === (15))){
var state_37139__$1 = state_37139;
var statearr_37151_37184 = state_37139__$1;
(statearr_37151_37184[(2)] = null);

(statearr_37151_37184[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37140 === (21))){
var state_37139__$1 = state_37139;
var statearr_37152_37185 = state_37139__$1;
(statearr_37152_37185[(2)] = null);

(statearr_37152_37185[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37140 === (13))){
var inst_37094 = (state_37139[(8)]);
var inst_37093 = (state_37139[(9)]);
var inst_37091 = (state_37139[(10)]);
var inst_37092 = (state_37139[(12)]);
var inst_37101 = (state_37139[(2)]);
var inst_37102 = (inst_37094 + (1));
var tmp37148 = inst_37093;
var tmp37149 = inst_37091;
var tmp37150 = inst_37092;
var inst_37091__$1 = tmp37149;
var inst_37092__$1 = tmp37150;
var inst_37093__$1 = tmp37148;
var inst_37094__$1 = inst_37102;
var state_37139__$1 = (function (){var statearr_37153 = state_37139;
(statearr_37153[(8)] = inst_37094__$1);

(statearr_37153[(9)] = inst_37093__$1);

(statearr_37153[(14)] = inst_37101);

(statearr_37153[(10)] = inst_37091__$1);

(statearr_37153[(12)] = inst_37092__$1);

return statearr_37153;
})();
var statearr_37154_37186 = state_37139__$1;
(statearr_37154_37186[(2)] = null);

(statearr_37154_37186[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37140 === (22))){
var state_37139__$1 = state_37139;
var statearr_37155_37187 = state_37139__$1;
(statearr_37155_37187[(2)] = null);

(statearr_37155_37187[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37140 === (6))){
var inst_37080 = (state_37139[(13)]);
var inst_37089 = f.call(null,inst_37080);
var inst_37090 = cljs.core.seq.call(null,inst_37089);
var inst_37091 = inst_37090;
var inst_37092 = null;
var inst_37093 = (0);
var inst_37094 = (0);
var state_37139__$1 = (function (){var statearr_37156 = state_37139;
(statearr_37156[(8)] = inst_37094);

(statearr_37156[(9)] = inst_37093);

(statearr_37156[(10)] = inst_37091);

(statearr_37156[(12)] = inst_37092);

return statearr_37156;
})();
var statearr_37157_37188 = state_37139__$1;
(statearr_37157_37188[(2)] = null);

(statearr_37157_37188[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37140 === (17))){
var inst_37105 = (state_37139[(7)]);
var inst_37109 = cljs.core.chunk_first.call(null,inst_37105);
var inst_37110 = cljs.core.chunk_rest.call(null,inst_37105);
var inst_37111 = cljs.core.count.call(null,inst_37109);
var inst_37091 = inst_37110;
var inst_37092 = inst_37109;
var inst_37093 = inst_37111;
var inst_37094 = (0);
var state_37139__$1 = (function (){var statearr_37158 = state_37139;
(statearr_37158[(8)] = inst_37094);

(statearr_37158[(9)] = inst_37093);

(statearr_37158[(10)] = inst_37091);

(statearr_37158[(12)] = inst_37092);

return statearr_37158;
})();
var statearr_37159_37189 = state_37139__$1;
(statearr_37159_37189[(2)] = null);

(statearr_37159_37189[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37140 === (3))){
var inst_37137 = (state_37139[(2)]);
var state_37139__$1 = state_37139;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37139__$1,inst_37137);
} else {
if((state_val_37140 === (12))){
var inst_37125 = (state_37139[(2)]);
var state_37139__$1 = state_37139;
var statearr_37160_37190 = state_37139__$1;
(statearr_37160_37190[(2)] = inst_37125);

(statearr_37160_37190[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37140 === (2))){
var state_37139__$1 = state_37139;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37139__$1,(4),in$);
} else {
if((state_val_37140 === (23))){
var inst_37133 = (state_37139[(2)]);
var state_37139__$1 = state_37139;
var statearr_37161_37191 = state_37139__$1;
(statearr_37161_37191[(2)] = inst_37133);

(statearr_37161_37191[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37140 === (19))){
var inst_37120 = (state_37139[(2)]);
var state_37139__$1 = state_37139;
var statearr_37162_37192 = state_37139__$1;
(statearr_37162_37192[(2)] = inst_37120);

(statearr_37162_37192[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37140 === (11))){
var inst_37091 = (state_37139[(10)]);
var inst_37105 = (state_37139[(7)]);
var inst_37105__$1 = cljs.core.seq.call(null,inst_37091);
var state_37139__$1 = (function (){var statearr_37163 = state_37139;
(statearr_37163[(7)] = inst_37105__$1);

return statearr_37163;
})();
if(inst_37105__$1){
var statearr_37164_37193 = state_37139__$1;
(statearr_37164_37193[(1)] = (14));

} else {
var statearr_37165_37194 = state_37139__$1;
(statearr_37165_37194[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37140 === (9))){
var inst_37127 = (state_37139[(2)]);
var inst_37128 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_37139__$1 = (function (){var statearr_37166 = state_37139;
(statearr_37166[(15)] = inst_37127);

return statearr_37166;
})();
if(cljs.core.truth_(inst_37128)){
var statearr_37167_37195 = state_37139__$1;
(statearr_37167_37195[(1)] = (21));

} else {
var statearr_37168_37196 = state_37139__$1;
(statearr_37168_37196[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37140 === (5))){
var inst_37083 = cljs.core.async.close_BANG_.call(null,out);
var state_37139__$1 = state_37139;
var statearr_37169_37197 = state_37139__$1;
(statearr_37169_37197[(2)] = inst_37083);

(statearr_37169_37197[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37140 === (14))){
var inst_37105 = (state_37139[(7)]);
var inst_37107 = cljs.core.chunked_seq_QMARK_.call(null,inst_37105);
var state_37139__$1 = state_37139;
if(inst_37107){
var statearr_37170_37198 = state_37139__$1;
(statearr_37170_37198[(1)] = (17));

} else {
var statearr_37171_37199 = state_37139__$1;
(statearr_37171_37199[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37140 === (16))){
var inst_37123 = (state_37139[(2)]);
var state_37139__$1 = state_37139;
var statearr_37172_37200 = state_37139__$1;
(statearr_37172_37200[(2)] = inst_37123);

(statearr_37172_37200[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37140 === (10))){
var inst_37094 = (state_37139[(8)]);
var inst_37092 = (state_37139[(12)]);
var inst_37099 = cljs.core._nth.call(null,inst_37092,inst_37094);
var state_37139__$1 = state_37139;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37139__$1,(13),out,inst_37099);
} else {
if((state_val_37140 === (18))){
var inst_37105 = (state_37139[(7)]);
var inst_37114 = cljs.core.first.call(null,inst_37105);
var state_37139__$1 = state_37139;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37139__$1,(20),out,inst_37114);
} else {
if((state_val_37140 === (8))){
var inst_37094 = (state_37139[(8)]);
var inst_37093 = (state_37139[(9)]);
var inst_37096 = (inst_37094 < inst_37093);
var inst_37097 = inst_37096;
var state_37139__$1 = state_37139;
if(cljs.core.truth_(inst_37097)){
var statearr_37173_37201 = state_37139__$1;
(statearr_37173_37201[(1)] = (10));

} else {
var statearr_37174_37202 = state_37139__$1;
(statearr_37174_37202[(1)] = (11));

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
});})(c__35537__auto__))
;
return ((function (switch__35449__auto__,c__35537__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__35450__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__35450__auto____0 = (function (){
var statearr_37175 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37175[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__35450__auto__);

(statearr_37175[(1)] = (1));

return statearr_37175;
});
var cljs$core$async$mapcat_STAR__$_state_machine__35450__auto____1 = (function (state_37139){
while(true){
var ret_value__35451__auto__ = (function (){try{while(true){
var result__35452__auto__ = switch__35449__auto__.call(null,state_37139);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35452__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35452__auto__;
}
break;
}
}catch (e37176){if((e37176 instanceof Object)){
var ex__35453__auto__ = e37176;
var statearr_37177_37203 = state_37139;
(statearr_37177_37203[(5)] = ex__35453__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37139);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37176;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35451__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37204 = state_37139;
state_37139 = G__37204;
continue;
} else {
return ret_value__35451__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__35450__auto__ = function(state_37139){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__35450__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__35450__auto____1.call(this,state_37139);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__35450__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__35450__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__35450__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__35450__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__35450__auto__;
})()
;})(switch__35449__auto__,c__35537__auto__))
})();
var state__35539__auto__ = (function (){var statearr_37178 = f__35538__auto__.call(null);
(statearr_37178[(6)] = c__35537__auto__);

return statearr_37178;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35539__auto__);
});})(c__35537__auto__))
);

return c__35537__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__37206 = arguments.length;
switch (G__37206) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__37209 = arguments.length;
switch (G__37209) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__37212 = arguments.length;
switch (G__37212) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__35537__auto___37259 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35537__auto___37259,out){
return (function (){
var f__35538__auto__ = (function (){var switch__35449__auto__ = ((function (c__35537__auto___37259,out){
return (function (state_37236){
var state_val_37237 = (state_37236[(1)]);
if((state_val_37237 === (7))){
var inst_37231 = (state_37236[(2)]);
var state_37236__$1 = state_37236;
var statearr_37238_37260 = state_37236__$1;
(statearr_37238_37260[(2)] = inst_37231);

(statearr_37238_37260[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37237 === (1))){
var inst_37213 = null;
var state_37236__$1 = (function (){var statearr_37239 = state_37236;
(statearr_37239[(7)] = inst_37213);

return statearr_37239;
})();
var statearr_37240_37261 = state_37236__$1;
(statearr_37240_37261[(2)] = null);

(statearr_37240_37261[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37237 === (4))){
var inst_37216 = (state_37236[(8)]);
var inst_37216__$1 = (state_37236[(2)]);
var inst_37217 = (inst_37216__$1 == null);
var inst_37218 = cljs.core.not.call(null,inst_37217);
var state_37236__$1 = (function (){var statearr_37241 = state_37236;
(statearr_37241[(8)] = inst_37216__$1);

return statearr_37241;
})();
if(inst_37218){
var statearr_37242_37262 = state_37236__$1;
(statearr_37242_37262[(1)] = (5));

} else {
var statearr_37243_37263 = state_37236__$1;
(statearr_37243_37263[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37237 === (6))){
var state_37236__$1 = state_37236;
var statearr_37244_37264 = state_37236__$1;
(statearr_37244_37264[(2)] = null);

(statearr_37244_37264[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37237 === (3))){
var inst_37233 = (state_37236[(2)]);
var inst_37234 = cljs.core.async.close_BANG_.call(null,out);
var state_37236__$1 = (function (){var statearr_37245 = state_37236;
(statearr_37245[(9)] = inst_37233);

return statearr_37245;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37236__$1,inst_37234);
} else {
if((state_val_37237 === (2))){
var state_37236__$1 = state_37236;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37236__$1,(4),ch);
} else {
if((state_val_37237 === (11))){
var inst_37216 = (state_37236[(8)]);
var inst_37225 = (state_37236[(2)]);
var inst_37213 = inst_37216;
var state_37236__$1 = (function (){var statearr_37246 = state_37236;
(statearr_37246[(10)] = inst_37225);

(statearr_37246[(7)] = inst_37213);

return statearr_37246;
})();
var statearr_37247_37265 = state_37236__$1;
(statearr_37247_37265[(2)] = null);

(statearr_37247_37265[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37237 === (9))){
var inst_37216 = (state_37236[(8)]);
var state_37236__$1 = state_37236;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37236__$1,(11),out,inst_37216);
} else {
if((state_val_37237 === (5))){
var inst_37216 = (state_37236[(8)]);
var inst_37213 = (state_37236[(7)]);
var inst_37220 = cljs.core._EQ_.call(null,inst_37216,inst_37213);
var state_37236__$1 = state_37236;
if(inst_37220){
var statearr_37249_37266 = state_37236__$1;
(statearr_37249_37266[(1)] = (8));

} else {
var statearr_37250_37267 = state_37236__$1;
(statearr_37250_37267[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37237 === (10))){
var inst_37228 = (state_37236[(2)]);
var state_37236__$1 = state_37236;
var statearr_37251_37268 = state_37236__$1;
(statearr_37251_37268[(2)] = inst_37228);

(statearr_37251_37268[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37237 === (8))){
var inst_37213 = (state_37236[(7)]);
var tmp37248 = inst_37213;
var inst_37213__$1 = tmp37248;
var state_37236__$1 = (function (){var statearr_37252 = state_37236;
(statearr_37252[(7)] = inst_37213__$1);

return statearr_37252;
})();
var statearr_37253_37269 = state_37236__$1;
(statearr_37253_37269[(2)] = null);

(statearr_37253_37269[(1)] = (2));


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
});})(c__35537__auto___37259,out))
;
return ((function (switch__35449__auto__,c__35537__auto___37259,out){
return (function() {
var cljs$core$async$state_machine__35450__auto__ = null;
var cljs$core$async$state_machine__35450__auto____0 = (function (){
var statearr_37254 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_37254[(0)] = cljs$core$async$state_machine__35450__auto__);

(statearr_37254[(1)] = (1));

return statearr_37254;
});
var cljs$core$async$state_machine__35450__auto____1 = (function (state_37236){
while(true){
var ret_value__35451__auto__ = (function (){try{while(true){
var result__35452__auto__ = switch__35449__auto__.call(null,state_37236);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35452__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35452__auto__;
}
break;
}
}catch (e37255){if((e37255 instanceof Object)){
var ex__35453__auto__ = e37255;
var statearr_37256_37270 = state_37236;
(statearr_37256_37270[(5)] = ex__35453__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37236);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37255;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35451__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37271 = state_37236;
state_37236 = G__37271;
continue;
} else {
return ret_value__35451__auto__;
}
break;
}
});
cljs$core$async$state_machine__35450__auto__ = function(state_37236){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35450__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35450__auto____1.call(this,state_37236);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__35450__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35450__auto____0;
cljs$core$async$state_machine__35450__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35450__auto____1;
return cljs$core$async$state_machine__35450__auto__;
})()
;})(switch__35449__auto__,c__35537__auto___37259,out))
})();
var state__35539__auto__ = (function (){var statearr_37257 = f__35538__auto__.call(null);
(statearr_37257[(6)] = c__35537__auto___37259);

return statearr_37257;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35539__auto__);
});})(c__35537__auto___37259,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__37273 = arguments.length;
switch (G__37273) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__35537__auto___37339 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35537__auto___37339,out){
return (function (){
var f__35538__auto__ = (function (){var switch__35449__auto__ = ((function (c__35537__auto___37339,out){
return (function (state_37311){
var state_val_37312 = (state_37311[(1)]);
if((state_val_37312 === (7))){
var inst_37307 = (state_37311[(2)]);
var state_37311__$1 = state_37311;
var statearr_37313_37340 = state_37311__$1;
(statearr_37313_37340[(2)] = inst_37307);

(statearr_37313_37340[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37312 === (1))){
var inst_37274 = (new Array(n));
var inst_37275 = inst_37274;
var inst_37276 = (0);
var state_37311__$1 = (function (){var statearr_37314 = state_37311;
(statearr_37314[(7)] = inst_37276);

(statearr_37314[(8)] = inst_37275);

return statearr_37314;
})();
var statearr_37315_37341 = state_37311__$1;
(statearr_37315_37341[(2)] = null);

(statearr_37315_37341[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37312 === (4))){
var inst_37279 = (state_37311[(9)]);
var inst_37279__$1 = (state_37311[(2)]);
var inst_37280 = (inst_37279__$1 == null);
var inst_37281 = cljs.core.not.call(null,inst_37280);
var state_37311__$1 = (function (){var statearr_37316 = state_37311;
(statearr_37316[(9)] = inst_37279__$1);

return statearr_37316;
})();
if(inst_37281){
var statearr_37317_37342 = state_37311__$1;
(statearr_37317_37342[(1)] = (5));

} else {
var statearr_37318_37343 = state_37311__$1;
(statearr_37318_37343[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37312 === (15))){
var inst_37301 = (state_37311[(2)]);
var state_37311__$1 = state_37311;
var statearr_37319_37344 = state_37311__$1;
(statearr_37319_37344[(2)] = inst_37301);

(statearr_37319_37344[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37312 === (13))){
var state_37311__$1 = state_37311;
var statearr_37320_37345 = state_37311__$1;
(statearr_37320_37345[(2)] = null);

(statearr_37320_37345[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37312 === (6))){
var inst_37276 = (state_37311[(7)]);
var inst_37297 = (inst_37276 > (0));
var state_37311__$1 = state_37311;
if(cljs.core.truth_(inst_37297)){
var statearr_37321_37346 = state_37311__$1;
(statearr_37321_37346[(1)] = (12));

} else {
var statearr_37322_37347 = state_37311__$1;
(statearr_37322_37347[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37312 === (3))){
var inst_37309 = (state_37311[(2)]);
var state_37311__$1 = state_37311;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37311__$1,inst_37309);
} else {
if((state_val_37312 === (12))){
var inst_37275 = (state_37311[(8)]);
var inst_37299 = cljs.core.vec.call(null,inst_37275);
var state_37311__$1 = state_37311;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37311__$1,(15),out,inst_37299);
} else {
if((state_val_37312 === (2))){
var state_37311__$1 = state_37311;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37311__$1,(4),ch);
} else {
if((state_val_37312 === (11))){
var inst_37291 = (state_37311[(2)]);
var inst_37292 = (new Array(n));
var inst_37275 = inst_37292;
var inst_37276 = (0);
var state_37311__$1 = (function (){var statearr_37323 = state_37311;
(statearr_37323[(7)] = inst_37276);

(statearr_37323[(8)] = inst_37275);

(statearr_37323[(10)] = inst_37291);

return statearr_37323;
})();
var statearr_37324_37348 = state_37311__$1;
(statearr_37324_37348[(2)] = null);

(statearr_37324_37348[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37312 === (9))){
var inst_37275 = (state_37311[(8)]);
var inst_37289 = cljs.core.vec.call(null,inst_37275);
var state_37311__$1 = state_37311;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37311__$1,(11),out,inst_37289);
} else {
if((state_val_37312 === (5))){
var inst_37276 = (state_37311[(7)]);
var inst_37275 = (state_37311[(8)]);
var inst_37279 = (state_37311[(9)]);
var inst_37284 = (state_37311[(11)]);
var inst_37283 = (inst_37275[inst_37276] = inst_37279);
var inst_37284__$1 = (inst_37276 + (1));
var inst_37285 = (inst_37284__$1 < n);
var state_37311__$1 = (function (){var statearr_37325 = state_37311;
(statearr_37325[(12)] = inst_37283);

(statearr_37325[(11)] = inst_37284__$1);

return statearr_37325;
})();
if(cljs.core.truth_(inst_37285)){
var statearr_37326_37349 = state_37311__$1;
(statearr_37326_37349[(1)] = (8));

} else {
var statearr_37327_37350 = state_37311__$1;
(statearr_37327_37350[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37312 === (14))){
var inst_37304 = (state_37311[(2)]);
var inst_37305 = cljs.core.async.close_BANG_.call(null,out);
var state_37311__$1 = (function (){var statearr_37329 = state_37311;
(statearr_37329[(13)] = inst_37304);

return statearr_37329;
})();
var statearr_37330_37351 = state_37311__$1;
(statearr_37330_37351[(2)] = inst_37305);

(statearr_37330_37351[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37312 === (10))){
var inst_37295 = (state_37311[(2)]);
var state_37311__$1 = state_37311;
var statearr_37331_37352 = state_37311__$1;
(statearr_37331_37352[(2)] = inst_37295);

(statearr_37331_37352[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37312 === (8))){
var inst_37275 = (state_37311[(8)]);
var inst_37284 = (state_37311[(11)]);
var tmp37328 = inst_37275;
var inst_37275__$1 = tmp37328;
var inst_37276 = inst_37284;
var state_37311__$1 = (function (){var statearr_37332 = state_37311;
(statearr_37332[(7)] = inst_37276);

(statearr_37332[(8)] = inst_37275__$1);

return statearr_37332;
})();
var statearr_37333_37353 = state_37311__$1;
(statearr_37333_37353[(2)] = null);

(statearr_37333_37353[(1)] = (2));


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
});})(c__35537__auto___37339,out))
;
return ((function (switch__35449__auto__,c__35537__auto___37339,out){
return (function() {
var cljs$core$async$state_machine__35450__auto__ = null;
var cljs$core$async$state_machine__35450__auto____0 = (function (){
var statearr_37334 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37334[(0)] = cljs$core$async$state_machine__35450__auto__);

(statearr_37334[(1)] = (1));

return statearr_37334;
});
var cljs$core$async$state_machine__35450__auto____1 = (function (state_37311){
while(true){
var ret_value__35451__auto__ = (function (){try{while(true){
var result__35452__auto__ = switch__35449__auto__.call(null,state_37311);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35452__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35452__auto__;
}
break;
}
}catch (e37335){if((e37335 instanceof Object)){
var ex__35453__auto__ = e37335;
var statearr_37336_37354 = state_37311;
(statearr_37336_37354[(5)] = ex__35453__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37311);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37335;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35451__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37355 = state_37311;
state_37311 = G__37355;
continue;
} else {
return ret_value__35451__auto__;
}
break;
}
});
cljs$core$async$state_machine__35450__auto__ = function(state_37311){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35450__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35450__auto____1.call(this,state_37311);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__35450__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35450__auto____0;
cljs$core$async$state_machine__35450__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35450__auto____1;
return cljs$core$async$state_machine__35450__auto__;
})()
;})(switch__35449__auto__,c__35537__auto___37339,out))
})();
var state__35539__auto__ = (function (){var statearr_37337 = f__35538__auto__.call(null);
(statearr_37337[(6)] = c__35537__auto___37339);

return statearr_37337;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35539__auto__);
});})(c__35537__auto___37339,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__37357 = arguments.length;
switch (G__37357) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__35537__auto___37427 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35537__auto___37427,out){
return (function (){
var f__35538__auto__ = (function (){var switch__35449__auto__ = ((function (c__35537__auto___37427,out){
return (function (state_37399){
var state_val_37400 = (state_37399[(1)]);
if((state_val_37400 === (7))){
var inst_37395 = (state_37399[(2)]);
var state_37399__$1 = state_37399;
var statearr_37401_37428 = state_37399__$1;
(statearr_37401_37428[(2)] = inst_37395);

(statearr_37401_37428[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37400 === (1))){
var inst_37358 = [];
var inst_37359 = inst_37358;
var inst_37360 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_37399__$1 = (function (){var statearr_37402 = state_37399;
(statearr_37402[(7)] = inst_37359);

(statearr_37402[(8)] = inst_37360);

return statearr_37402;
})();
var statearr_37403_37429 = state_37399__$1;
(statearr_37403_37429[(2)] = null);

(statearr_37403_37429[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37400 === (4))){
var inst_37363 = (state_37399[(9)]);
var inst_37363__$1 = (state_37399[(2)]);
var inst_37364 = (inst_37363__$1 == null);
var inst_37365 = cljs.core.not.call(null,inst_37364);
var state_37399__$1 = (function (){var statearr_37404 = state_37399;
(statearr_37404[(9)] = inst_37363__$1);

return statearr_37404;
})();
if(inst_37365){
var statearr_37405_37430 = state_37399__$1;
(statearr_37405_37430[(1)] = (5));

} else {
var statearr_37406_37431 = state_37399__$1;
(statearr_37406_37431[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37400 === (15))){
var inst_37389 = (state_37399[(2)]);
var state_37399__$1 = state_37399;
var statearr_37407_37432 = state_37399__$1;
(statearr_37407_37432[(2)] = inst_37389);

(statearr_37407_37432[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37400 === (13))){
var state_37399__$1 = state_37399;
var statearr_37408_37433 = state_37399__$1;
(statearr_37408_37433[(2)] = null);

(statearr_37408_37433[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37400 === (6))){
var inst_37359 = (state_37399[(7)]);
var inst_37384 = inst_37359.length;
var inst_37385 = (inst_37384 > (0));
var state_37399__$1 = state_37399;
if(cljs.core.truth_(inst_37385)){
var statearr_37409_37434 = state_37399__$1;
(statearr_37409_37434[(1)] = (12));

} else {
var statearr_37410_37435 = state_37399__$1;
(statearr_37410_37435[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37400 === (3))){
var inst_37397 = (state_37399[(2)]);
var state_37399__$1 = state_37399;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37399__$1,inst_37397);
} else {
if((state_val_37400 === (12))){
var inst_37359 = (state_37399[(7)]);
var inst_37387 = cljs.core.vec.call(null,inst_37359);
var state_37399__$1 = state_37399;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37399__$1,(15),out,inst_37387);
} else {
if((state_val_37400 === (2))){
var state_37399__$1 = state_37399;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37399__$1,(4),ch);
} else {
if((state_val_37400 === (11))){
var inst_37367 = (state_37399[(10)]);
var inst_37363 = (state_37399[(9)]);
var inst_37377 = (state_37399[(2)]);
var inst_37378 = [];
var inst_37379 = inst_37378.push(inst_37363);
var inst_37359 = inst_37378;
var inst_37360 = inst_37367;
var state_37399__$1 = (function (){var statearr_37411 = state_37399;
(statearr_37411[(7)] = inst_37359);

(statearr_37411[(11)] = inst_37377);

(statearr_37411[(12)] = inst_37379);

(statearr_37411[(8)] = inst_37360);

return statearr_37411;
})();
var statearr_37412_37436 = state_37399__$1;
(statearr_37412_37436[(2)] = null);

(statearr_37412_37436[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37400 === (9))){
var inst_37359 = (state_37399[(7)]);
var inst_37375 = cljs.core.vec.call(null,inst_37359);
var state_37399__$1 = state_37399;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37399__$1,(11),out,inst_37375);
} else {
if((state_val_37400 === (5))){
var inst_37367 = (state_37399[(10)]);
var inst_37360 = (state_37399[(8)]);
var inst_37363 = (state_37399[(9)]);
var inst_37367__$1 = f.call(null,inst_37363);
var inst_37368 = cljs.core._EQ_.call(null,inst_37367__$1,inst_37360);
var inst_37369 = cljs.core.keyword_identical_QMARK_.call(null,inst_37360,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_37370 = ((inst_37368) || (inst_37369));
var state_37399__$1 = (function (){var statearr_37413 = state_37399;
(statearr_37413[(10)] = inst_37367__$1);

return statearr_37413;
})();
if(cljs.core.truth_(inst_37370)){
var statearr_37414_37437 = state_37399__$1;
(statearr_37414_37437[(1)] = (8));

} else {
var statearr_37415_37438 = state_37399__$1;
(statearr_37415_37438[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37400 === (14))){
var inst_37392 = (state_37399[(2)]);
var inst_37393 = cljs.core.async.close_BANG_.call(null,out);
var state_37399__$1 = (function (){var statearr_37417 = state_37399;
(statearr_37417[(13)] = inst_37392);

return statearr_37417;
})();
var statearr_37418_37439 = state_37399__$1;
(statearr_37418_37439[(2)] = inst_37393);

(statearr_37418_37439[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37400 === (10))){
var inst_37382 = (state_37399[(2)]);
var state_37399__$1 = state_37399;
var statearr_37419_37440 = state_37399__$1;
(statearr_37419_37440[(2)] = inst_37382);

(statearr_37419_37440[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37400 === (8))){
var inst_37359 = (state_37399[(7)]);
var inst_37367 = (state_37399[(10)]);
var inst_37363 = (state_37399[(9)]);
var inst_37372 = inst_37359.push(inst_37363);
var tmp37416 = inst_37359;
var inst_37359__$1 = tmp37416;
var inst_37360 = inst_37367;
var state_37399__$1 = (function (){var statearr_37420 = state_37399;
(statearr_37420[(7)] = inst_37359__$1);

(statearr_37420[(8)] = inst_37360);

(statearr_37420[(14)] = inst_37372);

return statearr_37420;
})();
var statearr_37421_37441 = state_37399__$1;
(statearr_37421_37441[(2)] = null);

(statearr_37421_37441[(1)] = (2));


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
});})(c__35537__auto___37427,out))
;
return ((function (switch__35449__auto__,c__35537__auto___37427,out){
return (function() {
var cljs$core$async$state_machine__35450__auto__ = null;
var cljs$core$async$state_machine__35450__auto____0 = (function (){
var statearr_37422 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37422[(0)] = cljs$core$async$state_machine__35450__auto__);

(statearr_37422[(1)] = (1));

return statearr_37422;
});
var cljs$core$async$state_machine__35450__auto____1 = (function (state_37399){
while(true){
var ret_value__35451__auto__ = (function (){try{while(true){
var result__35452__auto__ = switch__35449__auto__.call(null,state_37399);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35452__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35452__auto__;
}
break;
}
}catch (e37423){if((e37423 instanceof Object)){
var ex__35453__auto__ = e37423;
var statearr_37424_37442 = state_37399;
(statearr_37424_37442[(5)] = ex__35453__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37399);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37423;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35451__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37443 = state_37399;
state_37399 = G__37443;
continue;
} else {
return ret_value__35451__auto__;
}
break;
}
});
cljs$core$async$state_machine__35450__auto__ = function(state_37399){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35450__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35450__auto____1.call(this,state_37399);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__35450__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35450__auto____0;
cljs$core$async$state_machine__35450__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35450__auto____1;
return cljs$core$async$state_machine__35450__auto__;
})()
;})(switch__35449__auto__,c__35537__auto___37427,out))
})();
var state__35539__auto__ = (function (){var statearr_37425 = f__35538__auto__.call(null);
(statearr_37425[(6)] = c__35537__auto___37427);

return statearr_37425;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35539__auto__);
});})(c__35537__auto___37427,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1530661655730
