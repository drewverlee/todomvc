// Compiled by ClojureScript 1.10.238 {}
goog.provide('cljs.tools.reader');
goog.require('cljs.core');
goog.require('cljs.tools.reader.reader_types');
goog.require('cljs.tools.reader.impl.utils');
goog.require('cljs.tools.reader.impl.commons');
goog.require('clojure.string');
goog.require('goog.array');
goog.require('goog.string');
goog.require('goog.string.StringBuffer');






cljs.tools.reader.macro_terminating_QMARK_ = (function cljs$tools$reader$macro_terminating_QMARK_(ch){
var G__22356 = ch;
switch (G__22356) {
case "\"":
case ";":
case "@":
case "^":
case "`":
case "~":
case "(":
case ")":
case "[":
case "]":
case "{":
case "}":
case "\\":
return true;

break;
default:
return false;

}
});
cljs.tools.reader.sb = (new goog.string.StringBuffer());
/**
 * Read in a single logical token from the reader
 */
cljs.tools.reader.read_token = (function cljs$tools$reader$read_token(rdr,initch){
if((initch == null)){
return cljs.tools.reader.reader_types.reader_error.call(null,rdr,"EOF while reading");
} else {
cljs.tools.reader.sb.clear();

var ch = initch;
while(true){
if(((cljs.tools.reader.impl.utils.whitespace_QMARK_.call(null,ch)) || (cljs.tools.reader.macro_terminating_QMARK_.call(null,ch)) || ((ch == null)))){
if((ch == null)){
} else {
cljs.tools.reader.reader_types.unread.call(null,rdr,ch);
}

return cljs.tools.reader.sb.toString();
} else {
cljs.tools.reader.sb.append(ch);

var G__22358 = cljs.tools.reader.reader_types.read_char.call(null,rdr);
ch = G__22358;
continue;
}
break;
}
}
});
cljs.tools.reader.read_dispatch = (function cljs$tools$reader$read_dispatch(rdr,_,opts,pending_forms){
var temp__4655__auto__ = cljs.tools.reader.reader_types.read_char.call(null,rdr);
if(cljs.core.truth_(temp__4655__auto__)){
var ch = temp__4655__auto__;
var temp__4655__auto____$1 = cljs.tools.reader.dispatch_macros.call(null,ch);
if(cljs.core.truth_(temp__4655__auto____$1)){
var dm = temp__4655__auto____$1;
return dm.call(null,rdr,ch,opts,pending_forms);
} else {
return cljs.tools.reader.read_tagged.call(null,(function (){var G__22359 = rdr;
cljs.tools.reader.reader_types.unread.call(null,G__22359,ch);

return G__22359;
})(),ch,opts,pending_forms);
}
} else {
return cljs.tools.reader.reader_types.reader_error.call(null,rdr,"EOF while reading character");
}
});
cljs.tools.reader.read_unmatched_delimiter = (function cljs$tools$reader$read_unmatched_delimiter(rdr,ch,opts,pending_forms){
return cljs.tools.reader.reader_types.reader_error.call(null,rdr,"Unmatched delimiter ",ch);
});
cljs.tools.reader.read_regex = (function cljs$tools$reader$read_regex(rdr,ch,opts,pending_forms){
var sb = (new goog.string.StringBuffer());
var ch__$1 = cljs.tools.reader.reader_types.read_char.call(null,rdr);
while(true){
if(("\"" === ch__$1)){
return cljs.core.re_pattern.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join(''));
} else {
if((ch__$1 == null)){
return cljs.tools.reader.reader_types.reader_error.call(null,rdr,"EOF while reading regex");
} else {
sb.append(ch__$1);

if(("\\" === ch__$1)){
var ch_22360__$2 = cljs.tools.reader.reader_types.read_char.call(null,rdr);
if((ch_22360__$2 == null)){
cljs.tools.reader.reader_types.reader_error.call(null,rdr,"EOF while reading regex");
} else {
}

sb.append(ch_22360__$2);
} else {
}

var G__22361 = cljs.tools.reader.reader_types.read_char.call(null,rdr);
ch__$1 = G__22361;
continue;
}
}
break;
}
});
cljs.tools.reader.char_code = (function cljs$tools$reader$char_code(ch,base){
var code = parseInt(ch,base);
if(cljs.core.truth_(isNaN(code))){
return (-1);
} else {
return code;
}
});
cljs.tools.reader.read_unicode_char = (function cljs$tools$reader$read_unicode_char(var_args){
var G__22363 = arguments.length;
switch (G__22363) {
case 4:
return cljs.tools.reader.read_unicode_char.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.tools.reader.read_unicode_char.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.tools.reader.read_unicode_char.cljs$core$IFn$_invoke$arity$4 = (function (token,offset,length,base){
var l = (offset + length);
if((cljs.core.count.call(null,token) === l)){
} else {
throw cljs.core.ex_info.call(null,["Invalid unicode character: \\",cljs.core.str.cljs$core$IFn$_invoke$arity$1(token)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"illegal-argument","illegal-argument",-1845493170)], null));
}

var i = offset;
var uc = (0);
while(true){
if((i === l)){
return String.fromCharCode(uc);
} else {
var d = cljs.tools.reader.char_code.call(null,cljs.core.nth.call(null,token,i),base);
if((d === (-1))){
throw cljs.core.ex_info.call(null,["Invalid digit: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,token,i))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"illegal-argument","illegal-argument",-1845493170)], null));
} else {
var G__22365 = (i + (1));
var G__22366 = (d + (uc * base));
i = G__22365;
uc = G__22366;
continue;
}
}
break;
}
});

cljs.tools.reader.read_unicode_char.cljs$core$IFn$_invoke$arity$5 = (function (rdr,initch,base,length,exact_QMARK_){
var i = (1);
var uc = cljs.tools.reader.char_code.call(null,initch,base);
while(true){
if((uc === (-1))){
throw cljs.core.ex_info.call(null,["Invalid digit: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(initch)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"illegal-argument","illegal-argument",-1845493170)], null));
} else {
if(!((i === length))){
var ch = cljs.tools.reader.reader_types.peek_char.call(null,rdr);
if(cljs.core.truth_((function (){var or__3922__auto__ = cljs.tools.reader.impl.utils.whitespace_QMARK_.call(null,ch);
if(or__3922__auto__){
return or__3922__auto__;
} else {
var or__3922__auto____$1 = cljs.tools.reader.macros.call(null,ch);
if(cljs.core.truth_(or__3922__auto____$1)){
return or__3922__auto____$1;
} else {
return (ch == null);
}
}
})())){
if(cljs.core.truth_(exact_QMARK_)){
throw cljs.core.ex_info.call(null,["Invalid character length: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i),", should be: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(length)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"illegal-argument","illegal-argument",-1845493170)], null));
} else {
return String.fromCharCode(uc);
}
} else {
var d = cljs.tools.reader.char_code.call(null,ch,base);
cljs.tools.reader.reader_types.read_char.call(null,rdr);

if((d === (-1))){
throw cljs.core.ex_info.call(null,["Invalid digit: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ch)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"illegal-argument","illegal-argument",-1845493170)], null));
} else {
var G__22367 = (i + (1));
var G__22368 = (d + (uc * base));
i = G__22367;
uc = G__22368;
continue;
}
}
} else {
return String.fromCharCode(uc);
}
}
break;
}
});

cljs.tools.reader.read_unicode_char.cljs$lang$maxFixedArity = 5;

cljs.tools.reader.upper_limit = "\uD7FF".charCodeAt((0));
cljs.tools.reader.lower_limit = "\uE000".charCodeAt((0));
cljs.tools.reader.valid_octal_QMARK_ = (function cljs$tools$reader$valid_octal_QMARK_(token,base){
return (parseInt(token,base) <= (255));
});
/**
 * Read in a character literal
 */
cljs.tools.reader.read_char_STAR_ = (function cljs$tools$reader$read_char_STAR_(rdr,backslash,opts,pending_forms){
var ch = cljs.tools.reader.reader_types.read_char.call(null,rdr);
if(!((ch == null))){
var token = ((((cljs.tools.reader.macro_terminating_QMARK_.call(null,ch)) || (cljs.tools.reader.impl.utils.whitespace_QMARK_.call(null,ch))))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(ch)].join(''):cljs.tools.reader.read_token.call(null,rdr,ch));
var token_len = token.length;
if(((1) === token_len)){
return token.charAt((0));
} else {
if(cljs.core._EQ_.call(null,token,"newline")){
return "\n";
} else {
if(cljs.core._EQ_.call(null,token,"space")){
return " ";
} else {
if(cljs.core._EQ_.call(null,token,"tab")){
return "\t";
} else {
if(cljs.core._EQ_.call(null,token,"backspace")){
return "\b";
} else {
if(cljs.core._EQ_.call(null,token,"formfeed")){
return "\f";
} else {
if(cljs.core._EQ_.call(null,token,"return")){
return "\r";
} else {
if(cljs.core.truth_(goog.string.startsWith(token,"u"))){
var c = cljs.tools.reader.read_unicode_char.call(null,token,(1),(4),(16));
var ic = c.charCodeAt((0));
if((((ic > cljs.tools.reader.upper_limit)) && ((ic < cljs.tools.reader.lower_limit)))){
return cljs.tools.reader.reader_types.reader_error.call(null,rdr,"Invalid character constant: \\u",c);
} else {
return c;
}
} else {
if(cljs.core.truth_(goog.string.startsWith(token,"o"))){
var len = (token_len - (1));
if((len > (3))){
return cljs.tools.reader.reader_types.reader_error.call(null,rdr,"Invalid octal escape sequence length: ",len);
} else {
var offset = (1);
var base = (8);
var uc = cljs.tools.reader.read_unicode_char.call(null,token,offset,len,base);
if(cljs.core.not.call(null,cljs.tools.reader.valid_octal_QMARK_.call(null,cljs.core.subs.call(null,token,offset),base))){
return cljs.tools.reader.reader_types.reader_error.call(null,rdr,"Octal escape sequence must be in range [0, 377]");
} else {
return uc;
}
}
} else {
return cljs.tools.reader.reader_types.reader_error.call(null,rdr,"Unsupported character: \\",token);

}
}
}
}
}
}
}
}
}
} else {
return cljs.tools.reader.reader_types.reader_error.call(null,rdr,"EOF while reading character");
}
});
cljs.tools.reader.starting_line_col_info = (function cljs$tools$reader$starting_line_col_info(rdr){
if(cljs.core.truth_(cljs.tools.reader.reader_types.indexing_reader_QMARK_.call(null,rdr))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.tools.reader.reader_types.get_line_number.call(null,rdr),((cljs.tools.reader.reader_types.get_column_number.call(null,rdr) - (1)) | (0))], null);
} else {
return null;
}
});
cljs.tools.reader.ending_line_col_info = (function cljs$tools$reader$ending_line_col_info(rdr){
if(cljs.core.truth_(cljs.tools.reader.reader_types.indexing_reader_QMARK_.call(null,rdr))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.tools.reader.reader_types.get_line_number.call(null,rdr),cljs.tools.reader.reader_types.get_column_number.call(null,rdr)], null);
} else {
return null;
}
});
if(typeof cljs.tools.reader.READ_EOF !== 'undefined'){
} else {
cljs.tools.reader.READ_EOF = (new Object());
}
if(typeof cljs.tools.reader.READ_FINISHED !== 'undefined'){
} else {
cljs.tools.reader.READ_FINISHED = (new Object());
}
cljs.tools.reader._STAR_read_delim_STAR_ = false;
cljs.tools.reader.read_delimited_internal = (function cljs$tools$reader$read_delimited_internal(delim,rdr,opts,pending_forms){
var vec__22369 = cljs.tools.reader.starting_line_col_info.call(null,rdr);
var start_line = cljs.core.nth.call(null,vec__22369,(0),null);
var start_column = cljs.core.nth.call(null,vec__22369,(1),null);
var delim__$1 = cljs.tools.reader.impl.utils.char$.call(null,delim);
var a = cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
while(true){
var form = cljs.tools.reader.read_STAR_.call(null,rdr,false,cljs.tools.reader.READ_EOF,delim__$1,opts,pending_forms);
if((form === cljs.tools.reader.READ_FINISHED)){
return cljs.core.persistent_BANG_.call(null,a);
} else {
if((form === cljs.tools.reader.READ_EOF)){
return cljs.tools.reader.reader_types.reader_error.call(null,rdr,"EOF while reading",(cljs.core.truth_(start_line)?[", starting at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(start_line)," and column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(start_column)].join(''):null));
} else {
var G__22372 = cljs.core.conj_BANG_.call(null,a,form);
a = G__22372;
continue;
}
}
break;
}
});
/**
 * Reads and returns a collection ended with delim
 */
cljs.tools.reader.read_delimited = (function cljs$tools$reader$read_delimited(delim,rdr,opts,pending_forms){
var _STAR_read_delim_STAR_22373 = cljs.tools.reader._STAR_read_delim_STAR_;
cljs.tools.reader._STAR_read_delim_STAR_ = true;

try{return cljs.tools.reader.read_delimited_internal.call(null,delim,rdr,opts,pending_forms);
}finally {cljs.tools.reader._STAR_read_delim_STAR_ = _STAR_read_delim_STAR_22373;
}});
/**
 * Read in a list, including its location if the reader is an indexing reader
 */
cljs.tools.reader.read_list = (function cljs$tools$reader$read_list(rdr,_,opts,pending_forms){
var vec__22374 = cljs.tools.reader.starting_line_col_info.call(null,rdr);
var start_line = cljs.core.nth.call(null,vec__22374,(0),null);
var start_column = cljs.core.nth.call(null,vec__22374,(1),null);
var the_list = cljs.tools.reader.read_delimited.call(null,")",rdr,opts,pending_forms);
var vec__22377 = cljs.tools.reader.ending_line_col_info.call(null,rdr);
var end_line = cljs.core.nth.call(null,vec__22377,(0),null);
var end_column = cljs.core.nth.call(null,vec__22377,(1),null);
return cljs.core.with_meta.call(null,((cljs.core.empty_QMARK_.call(null,the_list))?cljs.core.List.EMPTY:cljs.core.apply.call(null,cljs.core.list,the_list)),(cljs.core.truth_(start_line)?cljs.core.merge.call(null,(function (){var temp__4657__auto__ = cljs.tools.reader.reader_types.get_file_name.call(null,rdr);
if(cljs.core.truth_(temp__4657__auto__)){
var file = temp__4657__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"file","file",-1269645878),file], null);
} else {
return null;
}
})(),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"line","line",212345235),start_line,new cljs.core.Keyword(null,"column","column",2078222095),start_column,new cljs.core.Keyword(null,"end-line","end-line",1837326455),end_line,new cljs.core.Keyword(null,"end-column","end-column",1425389514),end_column], null)):null));
});
/**
 * Read in a vector, including its location if the reader is an indexing reader
 */
cljs.tools.reader.read_vector = (function cljs$tools$reader$read_vector(rdr,_,opts,pending_forms){
var vec__22380 = cljs.tools.reader.starting_line_col_info.call(null,rdr);
var start_line = cljs.core.nth.call(null,vec__22380,(0),null);
var start_column = cljs.core.nth.call(null,vec__22380,(1),null);
var the_vector = cljs.tools.reader.read_delimited.call(null,"]",rdr,opts,pending_forms);
var vec__22383 = cljs.tools.reader.ending_line_col_info.call(null,rdr);
var end_line = cljs.core.nth.call(null,vec__22383,(0),null);
var end_column = cljs.core.nth.call(null,vec__22383,(1),null);
return cljs.core.with_meta.call(null,the_vector,(cljs.core.truth_(start_line)?cljs.core.merge.call(null,(function (){var temp__4657__auto__ = cljs.tools.reader.reader_types.get_file_name.call(null,rdr);
if(cljs.core.truth_(temp__4657__auto__)){
var file = temp__4657__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"file","file",-1269645878),file], null);
} else {
return null;
}
})(),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"line","line",212345235),start_line,new cljs.core.Keyword(null,"column","column",2078222095),start_column,new cljs.core.Keyword(null,"end-line","end-line",1837326455),end_line,new cljs.core.Keyword(null,"end-column","end-column",1425389514),end_column], null)):null));
});
cljs.tools.reader.duplicate_keys_error = (function cljs$tools$reader$duplicate_keys_error(msg,coll){
var duplicates = (function cljs$tools$reader$duplicate_keys_error_$_duplicates(seq){
var iter__4292__auto__ = (function cljs$tools$reader$duplicate_keys_error_$_duplicates_$_iter__22396(s__22397){
return (new cljs.core.LazySeq(null,(function (){
var s__22397__$1 = s__22397;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__22397__$1);
if(temp__4657__auto__){
var s__22397__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__22397__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__22397__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__22399 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__22398 = (0);
while(true){
if((i__22398 < size__4291__auto__)){
var vec__22400 = cljs.core._nth.call(null,c__4290__auto__,i__22398);
var id = cljs.core.nth.call(null,vec__22400,(0),null);
var freq = cljs.core.nth.call(null,vec__22400,(1),null);
if((freq > (1))){
cljs.core.chunk_append.call(null,b__22399,id);

var G__22406 = (i__22398 + (1));
i__22398 = G__22406;
continue;
} else {
var G__22407 = (i__22398 + (1));
i__22398 = G__22407;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22399),cljs$tools$reader$duplicate_keys_error_$_duplicates_$_iter__22396.call(null,cljs.core.chunk_rest.call(null,s__22397__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22399),null);
}
} else {
var vec__22403 = cljs.core.first.call(null,s__22397__$2);
var id = cljs.core.nth.call(null,vec__22403,(0),null);
var freq = cljs.core.nth.call(null,vec__22403,(1),null);
if((freq > (1))){
return cljs.core.cons.call(null,id,cljs$tools$reader$duplicate_keys_error_$_duplicates_$_iter__22396.call(null,cljs.core.rest.call(null,s__22397__$2)));
} else {
var G__22408 = cljs.core.rest.call(null,s__22397__$2);
s__22397__$1 = G__22408;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4292__auto__.call(null,cljs.core.frequencies.call(null,seq));
});
var dups = duplicates.call(null,coll);
return cljs.core.apply.call(null,cljs.core.str,msg,(((cljs.core.count.call(null,dups) > (1)))?"s":null),": ",cljs.core.interpose.call(null,", ",dups));
});
/**
 * Read in a map, including its location if the reader is an indexing reader
 */
cljs.tools.reader.read_map = (function cljs$tools$reader$read_map(rdr,_,opts,pending_forms){
var vec__22409 = cljs.tools.reader.starting_line_col_info.call(null,rdr);
var start_line = cljs.core.nth.call(null,vec__22409,(0),null);
var start_column = cljs.core.nth.call(null,vec__22409,(1),null);
var the_map = cljs.tools.reader.read_delimited.call(null,"}",rdr,opts,pending_forms);
var map_count = cljs.core.count.call(null,the_map);
var ks = cljs.core.take_nth.call(null,(2),the_map);
var key_set = cljs.core.set.call(null,ks);
var vec__22412 = cljs.tools.reader.ending_line_col_info.call(null,rdr);
var end_line = cljs.core.nth.call(null,vec__22412,(0),null);
var end_column = cljs.core.nth.call(null,vec__22412,(1),null);
if(cljs.core.odd_QMARK_.call(null,map_count)){
cljs.tools.reader.reader_types.reader_error.call(null,rdr,"Map literal must contain an even number of forms");
} else {
}

if(cljs.core._EQ_.call(null,cljs.core.count.call(null,key_set),cljs.core.count.call(null,ks))){
} else {
cljs.tools.reader.reader_types.reader_error.call(null,rdr,cljs.tools.reader.duplicate_keys_error.call(null,"Map literal contains duplicate key",ks));
}

return cljs.core.with_meta.call(null,(((map_count === (0)))?cljs.core.PersistentArrayMap.EMPTY:cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.to_array.call(null,the_map))),(cljs.core.truth_(start_line)?cljs.core.merge.call(null,(function (){var temp__4657__auto__ = cljs.tools.reader.reader_types.get_file_name.call(null,rdr);
if(cljs.core.truth_(temp__4657__auto__)){
var file = temp__4657__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"file","file",-1269645878),file], null);
} else {
return null;
}
})(),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"line","line",212345235),start_line,new cljs.core.Keyword(null,"column","column",2078222095),start_column,new cljs.core.Keyword(null,"end-line","end-line",1837326455),end_line,new cljs.core.Keyword(null,"end-column","end-column",1425389514),end_column], null)):null));
});
cljs.tools.reader.read_number = (function cljs$tools$reader$read_number(rdr,initch){
var sb = (function (){var G__22415 = (new goog.string.StringBuffer());
G__22415.append(initch);

return G__22415;
})();
var ch = cljs.tools.reader.reader_types.read_char.call(null,rdr);
while(true){
if(cljs.core.truth_((function (){var or__3922__auto__ = cljs.tools.reader.impl.utils.whitespace_QMARK_.call(null,ch);
if(or__3922__auto__){
return or__3922__auto__;
} else {
var or__3922__auto____$1 = cljs.tools.reader.macros.call(null,ch);
if(cljs.core.truth_(or__3922__auto____$1)){
return or__3922__auto____$1;
} else {
return (ch == null);
}
}
})())){
var s = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join('');
cljs.tools.reader.reader_types.unread.call(null,rdr,ch);

var or__3922__auto__ = cljs.tools.reader.impl.commons.match_number.call(null,s);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.tools.reader.reader_types.reader_error.call(null,rdr,"Invalid number format [",s,"]");
}
} else {
var G__22417 = (function (){var G__22416 = sb;
G__22416.append(ch);

return G__22416;
})();
var G__22418 = cljs.tools.reader.reader_types.read_char.call(null,rdr);
sb = G__22417;
ch = G__22418;
continue;
}
break;
}
});
cljs.tools.reader.escape_char = (function cljs$tools$reader$escape_char(sb,rdr){
var ch = cljs.tools.reader.reader_types.read_char.call(null,rdr);
var G__22419 = ch;
switch (G__22419) {
case "t":
return "\t";

break;
case "r":
return "\r";

break;
case "n":
return "\n";

break;
case "\\":
return "\\";

break;
case "\"":
return "\"";

break;
case "b":
return "\b";

break;
case "f":
return "\f";

break;
case "u":
var ch__$1 = cljs.tools.reader.reader_types.read_char.call(null,rdr);
if(((-1) === parseInt((ch__$1 | (0)),(16)))){
return cljs.tools.reader.reader_types.reader_error.call(null,rdr,"Invalid unicode escape: \\u",ch__$1);
} else {
return cljs.tools.reader.read_unicode_char.call(null,rdr,ch__$1,(16),(4),true);
}

break;
default:
if(cljs.tools.reader.impl.utils.numeric_QMARK_.call(null,ch)){
var ch__$1 = cljs.tools.reader.read_unicode_char.call(null,rdr,ch,(8),(3),false);
if(((ch__$1 | (0)) > (223))){
return cljs.tools.reader.reader_types.reader_error.call(null,rdr,"Octal escape sequence must be in range [0, 377]");
} else {
return ch__$1;
}
} else {
return cljs.tools.reader.reader_types.reader_error.call(null,rdr,"Unsupported escape character: \\",ch);
}

}
});
cljs.tools.reader.read_string_STAR_ = (function cljs$tools$reader$read_string_STAR_(reader,_,opts,pending_forms){
var sb = (new goog.string.StringBuffer());
var ch = cljs.tools.reader.reader_types.read_char.call(null,reader);
while(true){
if((ch == null)){
return cljs.tools.reader.reader_types.reader_error.call(null,reader,"EOF while reading string");
} else {
var G__22421 = ch;
switch (G__22421) {
case "\\":
var G__22425 = (function (){var G__22422 = sb;
G__22422.append(cljs.tools.reader.escape_char.call(null,sb,reader));

return G__22422;
})();
var G__22426 = cljs.tools.reader.reader_types.read_char.call(null,reader);
sb = G__22425;
ch = G__22426;
continue;

break;
case "\"":
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join('');

break;
default:
var G__22427 = (function (){var G__22423 = sb;
G__22423.append(ch);

return G__22423;
})();
var G__22428 = cljs.tools.reader.reader_types.read_char.call(null,reader);
sb = G__22427;
ch = G__22428;
continue;

}
}
break;
}
});
cljs.tools.reader.loc_info = (function cljs$tools$reader$loc_info(rdr,line,column){
if((line == null)){
return null;
} else {
var file = cljs.tools.reader.reader_types.get_file_name.call(null,rdr);
var filem = (((file == null))?null:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"file","file",-1269645878),file], null));
var vec__22429 = cljs.tools.reader.ending_line_col_info.call(null,rdr);
var end_line = cljs.core.nth.call(null,vec__22429,(0),null);
var end_column = cljs.core.nth.call(null,vec__22429,(1),null);
var lcm = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),column,new cljs.core.Keyword(null,"end-line","end-line",1837326455),end_line,new cljs.core.Keyword(null,"end-column","end-column",1425389514),end_column], null);
return cljs.core.merge.call(null,filem,lcm);
}
});
cljs.tools.reader.read_symbol = (function cljs$tools$reader$read_symbol(rdr,initch){
var vec__22432 = cljs.tools.reader.starting_line_col_info.call(null,rdr);
var line = cljs.core.nth.call(null,vec__22432,(0),null);
var column = cljs.core.nth.call(null,vec__22432,(1),null);
var token = cljs.tools.reader.read_token.call(null,rdr,initch);
if((token == null)){
return null;
} else {
var G__22435 = token;
switch (G__22435) {
case "nil":
return null;

break;
case "true":
return true;

break;
case "false":
return false;

break;
case "/":
return new cljs.core.Symbol(null,"/","/",-1371932971,null);

break;
case "NaN":
return Number.NaN;

break;
case "-Infinity":
return Number.NEGATIVE_INFINITY;

break;
case "Infinity":
case "+Infinity":
return Number.POSITIVE_INFINITY;

break;
default:
var p = cljs.tools.reader.impl.commons.parse_symbol.call(null,token);
if(!((p == null))){
var sym = cljs.core.symbol.call(null,cljs.core._nth.call(null,p,(0)),cljs.core._nth.call(null,p,(1)));
return cljs.core._with_meta.call(null,sym,cljs.tools.reader.loc_info.call(null,rdr,line,column));
} else {
return cljs.tools.reader.reader_types.reader_error.call(null,rdr,"Invalid token: ",token);
}

}
}
});
/**
 * Map from ns alias to ns, if non-nil, it will be used to resolve read-time
 * ns aliases.
 * 
 * Defaults to nil
 */
cljs.tools.reader._STAR_alias_map_STAR_ = null;
cljs.tools.reader.resolve_ns = (function cljs$tools$reader$resolve_ns(sym){
var or__3922__auto__ = cljs.core.get.call(null,cljs.tools.reader._STAR_alias_map_STAR_,sym);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
var temp__4657__auto__ = cljs.core.find_ns.call(null,sym);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return cljs.core.symbol.call(null,cljs.core.ns_name.call(null,ns));
} else {
return null;
}
}
});
cljs.tools.reader.read_keyword = (function cljs$tools$reader$read_keyword(reader,initch,opts,pending_forms){
var ch = cljs.tools.reader.reader_types.read_char.call(null,reader);
if(!(cljs.tools.reader.impl.utils.whitespace_QMARK_.call(null,ch))){
var token = cljs.tools.reader.read_token.call(null,reader,ch);
var s = cljs.tools.reader.impl.commons.parse_symbol.call(null,token);
if(!((s == null))){
var ns = cljs.core._nth.call(null,s,(0));
var name = cljs.core._nth.call(null,s,(1));
if((":" === token.charAt((0)))){
if(!((ns == null))){
var ns__$1 = cljs.tools.reader.resolve_ns.call(null,cljs.core.symbol.call(null,cljs.core.subs.call(null,ns,(1))));
if(!((ns__$1 == null))){
return cljs.core.keyword.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns__$1)].join(''),name);
} else {
return cljs.tools.reader.reader_types.reader_error.call(null,reader,"Invalid token: :",token);
}
} else {
return cljs.core.keyword.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core._STAR_ns_STAR_)].join(''),cljs.core.subs.call(null,name,(1)));
}
} else {
return cljs.core.keyword.call(null,ns,name);
}
} else {
return cljs.tools.reader.reader_types.reader_error.call(null,reader,"Invalid token: :",token);
}
} else {
return cljs.tools.reader.reader_types.reader_error.call(null,reader,"Invalid token: :");
}
});
/**
 * Returns a function which wraps a reader in a call to sym
 */
cljs.tools.reader.wrapping_reader = (function cljs$tools$reader$wrapping_reader(sym){
return (function (rdr,_,opts,pending_forms){
return (new cljs.core.List(null,sym,(new cljs.core.List(null,cljs.tools.reader.read_STAR_.call(null,rdr,true,null,opts,pending_forms),null,(1),null)),(2),null));
});
});
/**
 * Read metadata and return the following object with the metadata applied
 */
cljs.tools.reader.read_meta = (function cljs$tools$reader$read_meta(rdr,_,opts,pending_forms){
if(((cljs.tools.reader.reader_types.source_logging_reader_QMARK_.call(null,rdr)) && (!(cljs.tools.reader.impl.utils.whitespace_QMARK_.call(null,cljs.tools.reader.reader_types.peek_char.call(null,rdr)))))){
return cljs.tools.reader.reader_types.log_source_STAR_.call(null,rdr,(function (){
var vec__22437 = cljs.tools.reader.starting_line_col_info.call(null,rdr);
var line = cljs.core.nth.call(null,vec__22437,(0),null);
var column = cljs.core.nth.call(null,vec__22437,(1),null);
var m = cljs.tools.reader.impl.utils.desugar_meta.call(null,cljs.tools.reader.read_STAR_.call(null,rdr,true,null,opts,pending_forms));
if(cljs.core.map_QMARK_.call(null,m)){
} else {
cljs.tools.reader.reader_types.reader_error.call(null,rdr,"Metadata must be Symbol, Keyword, String or Map");
}

var o = cljs.tools.reader.read_STAR_.call(null,rdr,true,null,opts,pending_forms);
if(((!((o == null)))?(((((o.cljs$lang$protocol_mask$partition0$ & (131072))) || ((cljs.core.PROTOCOL_SENTINEL === o.cljs$core$IMeta$))))?true:false):false)){
var m__$1 = (cljs.core.truth_((function (){var and__3911__auto__ = line;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.seq_QMARK_.call(null,o);
} else {
return and__3911__auto__;
}
})())?cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),column):m);
if(((!((o == null)))?(((((o.cljs$lang$protocol_mask$partition0$ & (262144))) || ((cljs.core.PROTOCOL_SENTINEL === o.cljs$core$IWithMeta$))))?true:false):false)){
return cljs.core.with_meta.call(null,o,cljs.core.merge.call(null,cljs.core.meta.call(null,o),m__$1));
} else {
return cljs.core.reset_meta_BANG_.call(null,o,m__$1);
}
} else {
return cljs.tools.reader.reader_types.reader_error.call(null,rdr,"Metadata can only be applied to IMetas");
}
}));
} else {
var vec__22442 = cljs.tools.reader.starting_line_col_info.call(null,rdr);
var line = cljs.core.nth.call(null,vec__22442,(0),null);
var column = cljs.core.nth.call(null,vec__22442,(1),null);
var m = cljs.tools.reader.impl.utils.desugar_meta.call(null,cljs.tools.reader.read_STAR_.call(null,rdr,true,null,opts,pending_forms));
if(cljs.core.map_QMARK_.call(null,m)){
} else {
cljs.tools.reader.reader_types.reader_error.call(null,rdr,"Metadata must be Symbol, Keyword, String or Map");
}

var o = cljs.tools.reader.read_STAR_.call(null,rdr,true,null,opts,pending_forms);
if(((!((o == null)))?(((((o.cljs$lang$protocol_mask$partition0$ & (131072))) || ((cljs.core.PROTOCOL_SENTINEL === o.cljs$core$IMeta$))))?true:false):false)){
var m__$1 = (cljs.core.truth_((function (){var and__3911__auto__ = line;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.seq_QMARK_.call(null,o);
} else {
return and__3911__auto__;
}
})())?cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),column):m);
if(((!((o == null)))?(((((o.cljs$lang$protocol_mask$partition0$ & (262144))) || ((cljs.core.PROTOCOL_SENTINEL === o.cljs$core$IWithMeta$))))?true:false):false)){
return cljs.core.with_meta.call(null,o,cljs.core.merge.call(null,cljs.core.meta.call(null,o),m__$1));
} else {
return cljs.core.reset_meta_BANG_.call(null,o,m__$1);
}
} else {
return cljs.tools.reader.reader_types.reader_error.call(null,rdr,"Metadata can only be applied to IMetas");
}
}
});
cljs.tools.reader.read_set = (function cljs$tools$reader$read_set(rdr,_,opts,pending_forms){
var vec__22447 = cljs.tools.reader.starting_line_col_info.call(null,rdr);
var start_line = cljs.core.nth.call(null,vec__22447,(0),null);
var start_column = cljs.core.nth.call(null,vec__22447,(1),null);
var start_column__$1 = (cljs.core.truth_(start_column)?((start_column - (1)) | (0)):null);
var coll = cljs.tools.reader.read_delimited.call(null,"}",rdr,opts,pending_forms);
var the_set = cljs.core.set.call(null,coll);
var vec__22450 = cljs.tools.reader.ending_line_col_info.call(null,rdr);
var end_line = cljs.core.nth.call(null,vec__22450,(0),null);
var end_column = cljs.core.nth.call(null,vec__22450,(1),null);
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),cljs.core.count.call(null,the_set))){
} else {
cljs.tools.reader.reader_types.reader_error.call(null,rdr,cljs.tools.reader.duplicate_keys_error.call(null,"Set literal contains duplicate key",coll));
}

return cljs.core.with_meta.call(null,the_set,(cljs.core.truth_(start_line)?cljs.core.merge.call(null,(function (){var temp__4657__auto__ = cljs.tools.reader.reader_types.get_file_name.call(null,rdr);
if(cljs.core.truth_(temp__4657__auto__)){
var file = temp__4657__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"file","file",-1269645878),file], null);
} else {
return null;
}
})(),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"line","line",212345235),start_line,new cljs.core.Keyword(null,"column","column",2078222095),start_column__$1,new cljs.core.Keyword(null,"end-line","end-line",1837326455),end_line,new cljs.core.Keyword(null,"end-column","end-column",1425389514),end_column], null)):null));
});
/**
 * Read and discard the first object from rdr
 */
cljs.tools.reader.read_discard = (function cljs$tools$reader$read_discard(rdr,_,opts,pending_forms){
var G__22453 = rdr;
cljs.tools.reader.read_STAR_.call(null,G__22453,true,null,opts,pending_forms);

return G__22453;
});
cljs.tools.reader.RESERVED_FEATURES = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"else","else",-1508377146),null,new cljs.core.Keyword(null,"none","none",1333468478),null], null), null);
cljs.tools.reader.has_feature_QMARK_ = (function cljs$tools$reader$has_feature_QMARK_(rdr,feature,opts){
if((feature instanceof cljs.core.Keyword)){
return ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"default","default",-1987822328),feature)) || (cljs.core.contains_QMARK_.call(null,cljs.core.get.call(null,opts,new cljs.core.Keyword(null,"features","features",-1146962336)),feature)));
} else {
return cljs.tools.reader.reader_types.reader_error.call(null,rdr,["Feature should be a keyword: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(feature)].join(''));
}
});
cljs.tools.reader.check_eof_error = (function cljs$tools$reader$check_eof_error(form,rdr,first_line){
if((form === cljs.tools.reader.READ_EOF)){
if((first_line < (0))){
return cljs.tools.reader.reader_types.reader_error.call(null,rdr,"EOF while reading");
} else {
return cljs.tools.reader.reader_types.reader_error.call(null,rdr,"EOF while reading, starting at line ",first_line);
}
} else {
return null;
}
});
cljs.tools.reader.check_reserved_features = (function cljs$tools$reader$check_reserved_features(rdr,form){
if(cljs.core.truth_(cljs.core.get.call(null,cljs.tools.reader.RESERVED_FEATURES,form))){
return cljs.tools.reader.reader_types.reader_error.call(null,rdr,["Feature name ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(form)," is reserved"].join(''));
} else {
return null;
}
});
cljs.tools.reader.check_invalid_read_cond = (function cljs$tools$reader$check_invalid_read_cond(form,rdr,first_line){
if((form === cljs.tools.reader.READ_FINISHED)){
if((first_line < (0))){
return cljs.tools.reader.reader_types.reader_error.call(null,rdr,"read-cond requires an even number of forms");
} else {
return cljs.tools.reader.reader_types.reader_error.call(null,rdr,["read-cond starting on line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(first_line)," requires an even number of forms"].join(''));
}
} else {
return null;
}
});
/**
 * Read next form and suppress. Return nil or READ_FINISHED.
 */
cljs.tools.reader.read_suppress = (function cljs$tools$reader$read_suppress(first_line,rdr,opts,pending_forms){
var _STAR_suppress_read_STAR_22454 = cljs.tools.reader._STAR_suppress_read_STAR_;
cljs.tools.reader._STAR_suppress_read_STAR_ = true;

try{var form = cljs.tools.reader.read_STAR_.call(null,rdr,false,cljs.tools.reader.READ_EOF,")",opts,pending_forms);
cljs.tools.reader.check_eof_error.call(null,form,rdr,first_line);

if((form === cljs.tools.reader.READ_FINISHED)){
return cljs.tools.reader.READ_FINISHED;
} else {
return null;
}
}finally {cljs.tools.reader._STAR_suppress_read_STAR_ = _STAR_suppress_read_STAR_22454;
}});
if(typeof cljs.tools.reader.NO_MATCH !== 'undefined'){
} else {
cljs.tools.reader.NO_MATCH = (new Object());
}
/**
 * Read next feature. If matched, read next form and return.
 * Otherwise, read and skip next form, returning READ_FINISHED or nil.
 */
cljs.tools.reader.match_feature = (function cljs$tools$reader$match_feature(first_line,rdr,opts,pending_forms){
var feature = cljs.tools.reader.read_STAR_.call(null,rdr,false,cljs.tools.reader.READ_EOF,")",opts,pending_forms);
cljs.tools.reader.check_eof_error.call(null,feature,rdr,first_line);

if(cljs.core._EQ_.call(null,feature,cljs.tools.reader.READ_FINISHED)){
return cljs.tools.reader.READ_FINISHED;
} else {
cljs.tools.reader.check_reserved_features.call(null,rdr,feature);

if(cljs.core.truth_(cljs.tools.reader.has_feature_QMARK_.call(null,rdr,feature,opts))){
var G__22455 = cljs.tools.reader.read_STAR_.call(null,rdr,false,cljs.tools.reader.READ_EOF,")",opts,pending_forms);
cljs.tools.reader.check_eof_error.call(null,G__22455,rdr,first_line);

cljs.tools.reader.check_invalid_read_cond.call(null,G__22455,rdr,first_line);

return G__22455;
} else {
var or__3922__auto__ = cljs.tools.reader.read_suppress.call(null,first_line,rdr,opts,pending_forms);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.tools.reader.NO_MATCH;
}
}
}
});
cljs.tools.reader.read_cond_delimited = (function cljs$tools$reader$read_cond_delimited(rdr,splicing,opts,pending_forms){
var first_line = (cljs.core.truth_(cljs.tools.reader.reader_types.indexing_reader_QMARK_.call(null,rdr))?cljs.tools.reader.reader_types.get_line_number.call(null,rdr):(-1));
var result = (function (){var matched = cljs.tools.reader.NO_MATCH;
var finished = null;
while(true){
if((matched === cljs.tools.reader.NO_MATCH)){
var match = cljs.tools.reader.match_feature.call(null,first_line,rdr,opts,pending_forms);
if((match === cljs.tools.reader.READ_FINISHED)){
return cljs.tools.reader.READ_FINISHED;
} else {
var G__22457 = match;
var G__22458 = null;
matched = G__22457;
finished = G__22458;
continue;
}
} else {
if(!((finished === cljs.tools.reader.READ_FINISHED))){
var G__22459 = matched;
var G__22460 = cljs.tools.reader.read_suppress.call(null,first_line,rdr,opts,pending_forms);
matched = G__22459;
finished = G__22460;
continue;
} else {
return matched;

}
}
break;
}
})();
if((result === cljs.tools.reader.READ_FINISHED)){
return rdr;
} else {
if(cljs.core.truth_(splicing)){
if(((!((result == null)))?(((((result.cljs$lang$protocol_mask$partition0$ & (16777216))) || ((cljs.core.PROTOCOL_SENTINEL === result.cljs$core$ISequential$))))?true:false):false)){
goog.array.insertArrayAt(pending_forms,cljs.core.to_array.call(null,result),(0));

return rdr;
} else {
return cljs.tools.reader.reader_types.reader_error.call(null,rdr,"Spliced form list in read-cond-splicing must implement java.util.List.");
}
} else {
return result;
}
}
});
cljs.tools.reader.read_cond = (function cljs$tools$reader$read_cond(rdr,_,opts,pending_forms){
if(cljs.core.not.call(null,(function (){var and__3911__auto__ = opts;
if(cljs.core.truth_(and__3911__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"preserve","preserve",1276846509),null,new cljs.core.Keyword(null,"allow","allow",-1857325745),null], null), null).call(null,new cljs.core.Keyword(null,"read-cond","read-cond",1056899244).cljs$core$IFn$_invoke$arity$1(opts));
} else {
return and__3911__auto__;
}
})())){
throw cljs.core.ex_info.call(null,"Conditional read not allowed",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"runtime-exception","runtime-exception",-1495664514)], null));
} else {
}

var temp__4655__auto__ = cljs.tools.reader.reader_types.read_char.call(null,rdr);
if(cljs.core.truth_(temp__4655__auto__)){
var ch = temp__4655__auto__;
var splicing = cljs.core._EQ_.call(null,ch,"@");
var ch__$1 = ((splicing)?cljs.tools.reader.reader_types.read_char.call(null,rdr):ch);
if(splicing){
if(cljs.tools.reader._STAR_read_delim_STAR_){
} else {
cljs.tools.reader.reader_types.reader_error.call(null,rdr,"cond-splice not in list");
}
} else {
}

var temp__4655__auto____$1 = ((cljs.tools.reader.impl.utils.whitespace_QMARK_.call(null,ch__$1))?cljs.tools.reader.impl.commons.read_past.call(null,cljs.tools.reader.impl.utils.whitespace_QMARK_,rdr):ch__$1);
if(cljs.core.truth_(temp__4655__auto____$1)){
var ch__$2 = temp__4655__auto____$1;
if(cljs.core.not_EQ_.call(null,ch__$2,"(")){
throw cljs.core.ex_info.call(null,"read-cond body must be a list",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"runtime-exception","runtime-exception",-1495664514)], null));
} else {
var _STAR_suppress_read_STAR_22461 = cljs.tools.reader._STAR_suppress_read_STAR_;
cljs.tools.reader._STAR_suppress_read_STAR_ = (function (){var or__3922__auto__ = cljs.tools.reader._STAR_suppress_read_STAR_;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"preserve","preserve",1276846509),new cljs.core.Keyword(null,"read-cond","read-cond",1056899244).cljs$core$IFn$_invoke$arity$1(opts));
}
})();

try{if(cljs.core.truth_(cljs.tools.reader._STAR_suppress_read_STAR_)){
return cljs.tools.reader.impl.utils.reader_conditional.call(null,cljs.tools.reader.read_list.call(null,rdr,ch__$2,opts,pending_forms),splicing);
} else {
return cljs.tools.reader.read_cond_delimited.call(null,rdr,splicing,opts,pending_forms);
}
}finally {cljs.tools.reader._STAR_suppress_read_STAR_ = _STAR_suppress_read_STAR_22461;
}}
} else {
return cljs.tools.reader.reader_types.reader_error.call(null,rdr,"EOF while reading character");
}
} else {
return cljs.tools.reader.reader_types.reader_error.call(null,rdr,"EOF while reading character");
}
});
cljs.tools.reader.arg_env = null;
/**
 * Get a symbol for an anonymous ?argument?
 */
cljs.tools.reader.garg = (function cljs$tools$reader$garg(n){
return cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(((((-1) === n))?"rest":["p",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''))),"__",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.tools.reader.impl.utils.next_id.call(null)),"#"].join(''));
});
cljs.tools.reader.read_fn = (function cljs$tools$reader$read_fn(rdr,_,opts,pending_forms){
if(cljs.core.truth_(cljs.tools.reader.arg_env)){
throw cljs.core.ex_info.call(null,"Nested #()s are not allowed",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"illegal-state","illegal-state",-1519851182)], null));
} else {
}

var arg_env22462 = cljs.tools.reader.arg_env;
cljs.tools.reader.arg_env = cljs.core.sorted_map.call(null);

try{var form = cljs.tools.reader.read_STAR_.call(null,(function (){var G__22463 = rdr;
cljs.tools.reader.reader_types.unread.call(null,G__22463,"(");

return G__22463;
})(),true,null,opts,pending_forms);
var rargs = cljs.core.rseq.call(null,cljs.tools.reader.arg_env);
var args = ((rargs)?(function (){var higharg = cljs.core.key.call(null,cljs.core.first.call(null,rargs));
var args = (function (){var i = (1);
var args = cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
while(true){
if((i > higharg)){
return cljs.core.persistent_BANG_.call(null,args);
} else {
var G__22464 = (i + (1));
var G__22465 = cljs.core.conj_BANG_.call(null,args,(function (){var or__3922__auto__ = cljs.core.get.call(null,cljs.tools.reader.arg_env,i);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.tools.reader.garg.call(null,i);
}
})());
i = G__22464;
args = G__22465;
continue;
}
break;
}
})();
var args__$1 = (cljs.core.truth_(cljs.tools.reader.arg_env.call(null,(-1)))?cljs.core.conj.call(null,args,new cljs.core.Symbol(null,"&","&",-2144855648,null),cljs.tools.reader.arg_env.call(null,(-1))):args);
return args__$1;
})():cljs.core.PersistentVector.EMPTY);
return (new cljs.core.List(null,new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),(new cljs.core.List(null,args,(new cljs.core.List(null,form,null,(1),null)),(2),null)),(3),null));
}finally {cljs.tools.reader.arg_env = arg_env22462;
}});
/**
 * Registers an argument to the arg-env
 */
cljs.tools.reader.register_arg = (function cljs$tools$reader$register_arg(n){
if(cljs.core.truth_(cljs.tools.reader.arg_env)){
var temp__4655__auto__ = cljs.tools.reader.arg_env.call(null,n);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return ret;
} else {
var g = cljs.tools.reader.garg.call(null,n);
cljs.tools.reader.arg_env = cljs.core.assoc.call(null,cljs.tools.reader.arg_env,n,g);

return g;
}
} else {
throw cljs.core.ex_info.call(null,"Arg literal not in #()",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"illegal-state","illegal-state",-1519851182)], null));
}
});
cljs.tools.reader.read_arg = (function cljs$tools$reader$read_arg(rdr,pct,opts,pending_forms){
if((cljs.tools.reader.arg_env == null)){
return cljs.tools.reader.read_symbol.call(null,rdr,pct);
} else {
var ch = cljs.tools.reader.reader_types.peek_char.call(null,rdr);
if(((cljs.tools.reader.impl.utils.whitespace_QMARK_.call(null,ch)) || (cljs.tools.reader.macro_terminating_QMARK_.call(null,ch)) || ((ch == null)))){
return cljs.tools.reader.register_arg.call(null,(1));
} else {
if(cljs.core._EQ_.call(null,ch,"&")){
cljs.tools.reader.reader_types.read_char.call(null,rdr);

return cljs.tools.reader.register_arg.call(null,(-1));
} else {
var n = cljs.tools.reader.read_STAR_.call(null,rdr,true,null,opts,pending_forms);
if(!(cljs.core.integer_QMARK_.call(null,n))){
throw cljs.core.ex_info.call(null,"Arg literal must be %, %& or %integer",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"illegal-state","illegal-state",-1519851182)], null));
} else {
return cljs.tools.reader.register_arg.call(null,n);
}

}
}
}
});
cljs.tools.reader.gensym_env = null;
cljs.tools.reader.read_unquote = (function cljs$tools$reader$read_unquote(rdr,comma,opts,pending_forms){
var temp__4655__auto__ = cljs.tools.reader.reader_types.peek_char.call(null,rdr);
if(cljs.core.truth_(temp__4655__auto__)){
var ch = temp__4655__auto__;
if(cljs.core._EQ_.call(null,"@",ch)){
return cljs.tools.reader.wrapping_reader.call(null,new cljs.core.Symbol("clojure.core","unquote-splicing","clojure.core/unquote-splicing",-552003150,null)).call(null,(function (){var G__22466 = rdr;
cljs.tools.reader.reader_types.read_char.call(null,G__22466);

return G__22466;
})(),"@",opts,pending_forms);
} else {
return cljs.tools.reader.wrapping_reader.call(null,new cljs.core.Symbol("clojure.core","unquote","clojure.core/unquote",843087510,null)).call(null,rdr,"~",opts,pending_forms);
}
} else {
return null;
}
});
cljs.tools.reader.unquote_splicing_QMARK_ = (function cljs$tools$reader$unquote_splicing_QMARK_(form){
return ((cljs.core.seq_QMARK_.call(null,form)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,form),new cljs.core.Symbol("clojure.core","unquote-splicing","clojure.core/unquote-splicing",-552003150,null))));
});
cljs.tools.reader.unquote_QMARK_ = (function cljs$tools$reader$unquote_QMARK_(form){
return ((cljs.core.seq_QMARK_.call(null,form)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,form),new cljs.core.Symbol("clojure.core","unquote","clojure.core/unquote",843087510,null))));
});
/**
 * Expand a list by resolving its syntax quotes and unquotes
 */
cljs.tools.reader.expand_list = (function cljs$tools$reader$expand_list(s){
var s__$1 = cljs.core.seq.call(null,s);
var r = cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
while(true){
if(s__$1){
var item = cljs.core.first.call(null,s__$1);
var ret = cljs.core.conj_BANG_.call(null,r,(cljs.core.truth_(cljs.tools.reader.unquote_QMARK_.call(null,item))?(new cljs.core.List(null,new cljs.core.Symbol("clojure.core","list","clojure.core/list",-1119203325,null),(new cljs.core.List(null,cljs.core.second.call(null,item),null,(1),null)),(2),null)):(cljs.core.truth_(cljs.tools.reader.unquote_splicing_QMARK_.call(null,item))?cljs.core.second.call(null,item):(new cljs.core.List(null,new cljs.core.Symbol("clojure.core","list","clojure.core/list",-1119203325,null),(new cljs.core.List(null,cljs.tools.reader.syntax_quote_STAR_.call(null,item),null,(1),null)),(2),null))
)));
var G__22467 = cljs.core.next.call(null,s__$1);
var G__22468 = ret;
s__$1 = G__22467;
r = G__22468;
continue;
} else {
return cljs.core.seq.call(null,cljs.core.persistent_BANG_.call(null,r));
}
break;
}
});
/**
 * Flatten a map into a seq of alternate keys and values
 */
cljs.tools.reader.flatten_map = (function cljs$tools$reader$flatten_map(form){
var s = cljs.core.seq.call(null,form);
var key_vals = cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
while(true){
if(s){
var e = cljs.core.first.call(null,s);
var G__22469 = cljs.core.next.call(null,s);
var G__22470 = cljs.core.conj_BANG_.call(null,cljs.core.conj_BANG_.call(null,key_vals,cljs.core.key.call(null,e)),cljs.core.val.call(null,e));
s = G__22469;
key_vals = G__22470;
continue;
} else {
return cljs.core.seq.call(null,cljs.core.persistent_BANG_.call(null,key_vals));
}
break;
}
});
cljs.tools.reader.register_gensym = (function cljs$tools$reader$register_gensym(sym){
if(cljs.core.not.call(null,cljs.tools.reader.gensym_env)){
throw cljs.core.ex_info.call(null,"Gensym literal not in syntax-quote",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"illegal-state","illegal-state",-1519851182)], null));
} else {
}

var or__3922__auto__ = cljs.core.get.call(null,cljs.tools.reader.gensym_env,sym);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
var gs = cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.call(null,cljs.core.name.call(null,sym),(0),(cljs.core.count.call(null,cljs.core.name.call(null,sym)) - (1)))),"__",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.tools.reader.impl.utils.next_id.call(null)),"__auto__"].join(''));
cljs.tools.reader.gensym_env = cljs.core.assoc.call(null,cljs.tools.reader.gensym_env,sym,gs);

return gs;
}
});
cljs.tools.reader.add_meta = (function cljs$tools$reader$add_meta(form,ret){
if((function (){var and__3911__auto__ = ((!((form == null)))?(((((form.cljs$lang$protocol_mask$partition0$ & (262144))) || ((cljs.core.PROTOCOL_SENTINEL === form.cljs$core$IWithMeta$))))?true:false):false);
if(and__3911__auto__){
return cljs.core.seq.call(null,cljs.core.dissoc.call(null,cljs.core.meta.call(null,form),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"source","source",-433931539)));
} else {
return and__3911__auto__;
}
})()){
return (new cljs.core.List(null,new cljs.core.Symbol("cljs.core","with-meta","cljs.core/with-meta",749126446,null),(new cljs.core.List(null,ret,(new cljs.core.List(null,cljs.tools.reader.syntax_quote_STAR_.call(null,cljs.core.meta.call(null,form)),null,(1),null)),(2),null)),(3),null));
} else {
return ret;
}
});
cljs.tools.reader.syntax_quote_coll = (function cljs$tools$reader$syntax_quote_coll(type,coll){
var res = (new cljs.core.List(null,new cljs.core.Symbol("cljs.core","sequence","cljs.core/sequence",1908459032,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol("cljs.core","concat","cljs.core/concat",-1133584918,null),cljs.tools.reader.expand_list.call(null,coll)),null,(1),null)),(2),null));
if(cljs.core.truth_(type)){
return (new cljs.core.List(null,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null),(new cljs.core.List(null,type,(new cljs.core.List(null,res,null,(1),null)),(2),null)),(3),null));
} else {
return res;
}
});
/**
 * Decide which map type to use, array-map if less than 16 elements
 */
cljs.tools.reader.map_func = (function cljs$tools$reader$map_func(coll){
if((cljs.core.count.call(null,coll) >= (16))){
return new cljs.core.Symbol("cljs.core","hash-map","cljs.core/hash-map",303385767,null);
} else {
return new cljs.core.Symbol("cljs.core","array-map","cljs.core/array-map",-1519210683,null);
}
});
cljs.tools.reader.bool_QMARK_ = (function cljs$tools$reader$bool_QMARK_(x){
return (((x instanceof Boolean)) || (x === true) || (x === false));
});
/**
 * Resolve a symbol s into its fully qualified namespace version
 */
cljs.tools.reader.resolve_symbol = (function cljs$tools$reader$resolve_symbol(s){
throw cljs.core.ex_info.call(null,"resolve-symbol is not implemented",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sym","sym",-1444860305),s], null));
});
cljs.tools.reader.syntax_quote_STAR_ = (function cljs$tools$reader$syntax_quote_STAR_(form){
return cljs.tools.reader.add_meta.call(null,form,((cljs.core.special_symbol_QMARK_.call(null,form))?(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),(new cljs.core.List(null,form,null,(1),null)),(2),null)):(((form instanceof cljs.core.Symbol))?(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),(new cljs.core.List(null,(cljs.core.truth_((function (){var and__3911__auto__ = cljs.core.not.call(null,cljs.core.namespace.call(null,form));
if(and__3911__auto__){
return goog.string.endsWith(cljs.core.name.call(null,form),"#");
} else {
return and__3911__auto__;
}
})())?cljs.tools.reader.register_gensym.call(null,form):cljs.tools.reader.resolve_symbol.call(null,form)),null,(1),null)),(2),null)):(cljs.core.truth_(cljs.tools.reader.unquote_QMARK_.call(null,form))?cljs.core.second.call(null,form):(cljs.core.truth_(cljs.tools.reader.unquote_splicing_QMARK_.call(null,form))?(function(){throw cljs.core.ex_info.call(null,"unquote-splice not in list",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"illegal-state","illegal-state",-1519851182)], null))})():((cljs.core.coll_QMARK_.call(null,form))?((((!((form == null)))?(((((form.cljs$lang$protocol_mask$partition0$ & (67108864))) || ((cljs.core.PROTOCOL_SENTINEL === form.cljs$core$IRecord$))))?true:false):false))?form:((cljs.core.map_QMARK_.call(null,form))?cljs.tools.reader.syntax_quote_coll.call(null,cljs.tools.reader.map_func.call(null,form),cljs.tools.reader.flatten_map.call(null,form)):((cljs.core.vector_QMARK_.call(null,form))?(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","vec","cljs.core/vec",307622519,null),(new cljs.core.List(null,cljs.tools.reader.syntax_quote_coll.call(null,null,form),null,(1),null)),(2),null)):((cljs.core.set_QMARK_.call(null,form))?cljs.tools.reader.syntax_quote_coll.call(null,new cljs.core.Symbol("cljs.core","hash-set","cljs.core/hash-set",1130426749,null),form):((((cljs.core.seq_QMARK_.call(null,form)) || (cljs.core.list_QMARK_.call(null,form))))?(function (){var seq = cljs.core.seq.call(null,form);
if(seq){
return cljs.tools.reader.syntax_quote_coll.call(null,null,seq);
} else {
return cljs.core.list(new cljs.core.Symbol("cljs.core","list","cljs.core/list",-1331406371,null));
}
})():(function(){throw cljs.core.ex_info.call(null,"Unknown Collection type",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"unsupported-operation","unsupported-operation",1890540953)], null))})()
))))):(cljs.core.truth_((function (){var or__3922__auto__ = (form instanceof cljs.core.Keyword);
if(or__3922__auto__){
return or__3922__auto__;
} else {
var or__3922__auto____$1 = typeof form === 'number';
if(or__3922__auto____$1){
return or__3922__auto____$1;
} else {
var or__3922__auto____$2 = typeof form === 'string';
if(or__3922__auto____$2){
return or__3922__auto____$2;
} else {
var or__3922__auto____$3 = (form == null);
if(or__3922__auto____$3){
return or__3922__auto____$3;
} else {
var or__3922__auto____$4 = cljs.tools.reader.bool_QMARK_.call(null,form);
if(cljs.core.truth_(or__3922__auto____$4)){
return or__3922__auto____$4;
} else {
return (form instanceof RegExp);
}
}
}
}
}
})())?form:(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),(new cljs.core.List(null,form,null,(1),null)),(2),null))
)))))));
});
cljs.tools.reader.read_syntax_quote = (function cljs$tools$reader$read_syntax_quote(rdr,backquote,opts,pending_forms){
var gensym_env22474 = cljs.tools.reader.gensym_env;
cljs.tools.reader.gensym_env = cljs.core.PersistentArrayMap.EMPTY;

try{return cljs.tools.reader.syntax_quote_STAR_.call(null,cljs.tools.reader.read_STAR_.call(null,rdr,true,null,opts,pending_forms));
}finally {cljs.tools.reader.gensym_env = gensym_env22474;
}});
cljs.tools.reader.macros = (function cljs$tools$reader$macros(ch){
var G__22475 = ch;
switch (G__22475) {
case "\"":
return cljs.tools.reader.read_string_STAR_;

break;
case ":":
return cljs.tools.reader.read_keyword;

break;
case ";":
return cljs.tools.reader.impl.commons.read_comment;

break;
case "'":
return cljs.tools.reader.wrapping_reader.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null));

break;
case "@":
return cljs.tools.reader.wrapping_reader.call(null,new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null));

break;
case "^":
return cljs.tools.reader.read_meta;

break;
case "`":
return cljs.tools.reader.read_syntax_quote;

break;
case "~":
return cljs.tools.reader.read_unquote;

break;
case "(":
return cljs.tools.reader.read_list;

break;
case ")":
return cljs.tools.reader.read_unmatched_delimiter;

break;
case "[":
return cljs.tools.reader.read_vector;

break;
case "]":
return cljs.tools.reader.read_unmatched_delimiter;

break;
case "{":
return cljs.tools.reader.read_map;

break;
case "}":
return cljs.tools.reader.read_unmatched_delimiter;

break;
case "\\":
return cljs.tools.reader.read_char_STAR_;

break;
case "%":
return cljs.tools.reader.read_arg;

break;
case "#":
return cljs.tools.reader.read_dispatch;

break;
default:
return null;

}
});
cljs.tools.reader.dispatch_macros = (function cljs$tools$reader$dispatch_macros(ch){
var G__22477 = ch;
switch (G__22477) {
case "^":
return cljs.tools.reader.read_meta;

break;
case "'":
return cljs.tools.reader.wrapping_reader.call(null,new cljs.core.Symbol(null,"var","var",870848730,null));

break;
case "(":
return cljs.tools.reader.read_fn;

break;
case "{":
return cljs.tools.reader.read_set;

break;
case "<":
return cljs.tools.reader.impl.commons.throwing_reader.call(null,"Unreadable form");

break;
case "=":
return cljs.tools.reader.impl.commons.throwing_reader.call(null,"read-eval not supported");

break;
case "\"":
return cljs.tools.reader.read_regex;

break;
case "!":
return cljs.tools.reader.impl.commons.read_comment;

break;
case "_":
return cljs.tools.reader.read_discard;

break;
case "?":
return cljs.tools.reader.read_cond;

break;
default:
return null;

}
});
cljs.tools.reader.read_tagged = (function cljs$tools$reader$read_tagged(rdr,initch,opts,pending_forms){
var tag = cljs.tools.reader.read_STAR_.call(null,rdr,true,null,opts,pending_forms);
if(!((tag instanceof cljs.core.Symbol))){
cljs.tools.reader.reader_types.reader_error.call(null,rdr,"Reader tag must be a symbol");
} else {
}

if(cljs.core.truth_(cljs.tools.reader._STAR_suppress_read_STAR_)){
return cljs.core.tagged_literal.call(null,tag,cljs.tools.reader.read_STAR_.call(null,rdr,true,null,opts,pending_forms));
} else {
var temp__4655__auto__ = (function (){var or__3922__auto__ = cljs.tools.reader._STAR_data_readers_STAR_.call(null,tag);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.tools.reader.default_data_readers.call(null,tag);
}
})();
if(cljs.core.truth_(temp__4655__auto__)){
var f = temp__4655__auto__;
return f.call(null,cljs.tools.reader.read_STAR_.call(null,rdr,true,null,opts,pending_forms));
} else {
var temp__4655__auto____$1 = cljs.tools.reader._STAR_default_data_reader_fn_STAR_;
if(cljs.core.truth_(temp__4655__auto____$1)){
var f = temp__4655__auto____$1;
return f.call(null,tag,cljs.tools.reader.read_STAR_.call(null,rdr,true,null,opts,pending_forms));
} else {
return cljs.tools.reader.reader_types.reader_error.call(null,rdr,"No reader function for tag ",cljs.core.name.call(null,tag));
}
}
}
});
/**
 * Map from reader tag symbols to data reader Vars.
 *   Reader tags without namespace qualifiers are reserved for Clojure.
 *   This light version of tools.reader has no implementation for default
 *   reader tags such as #inst and #uuid.
 */
cljs.tools.reader._STAR_data_readers_STAR_ = cljs.core.PersistentArrayMap.EMPTY;
/**
 * When no data reader is found for a tag and *default-data-reader-fn*
 *   is non-nil, it will be called with two arguments, the tag and the value.
 *   If *default-data-reader-fn* is nil (the default value), an exception
 *   will be thrown for the unknown tag.
 */
cljs.tools.reader._STAR_default_data_reader_fn_STAR_ = null;
cljs.tools.reader._STAR_suppress_read_STAR_ = false;
/**
 * Default map of data reader functions provided by Clojure.
 *   May be overridden by binding *data-readers*
 */
cljs.tools.reader.default_data_readers = cljs.core.PersistentArrayMap.EMPTY;
cljs.tools.reader.read_STAR__internal = (function cljs$tools$reader$read_STAR__internal(reader,eof_error_QMARK_,sentinel,return_on,opts,pending_forms){
while(true){
if(((cljs.tools.reader.reader_types.source_logging_reader_QMARK_.call(null,reader)) && (!(cljs.tools.reader.impl.utils.whitespace_QMARK_.call(null,cljs.tools.reader.reader_types.peek_char.call(null,reader)))))){
return cljs.tools.reader.reader_types.log_source_STAR_.call(null,reader,(function (){
while(true){
if(!(goog.array.isEmpty(pending_forms))){
var form = (pending_forms[(0)]);
goog.array.removeAt(pending_forms,(0));

return form;
} else {
var ch = cljs.tools.reader.reader_types.read_char.call(null,reader);
if(cljs.tools.reader.impl.utils.whitespace_QMARK_.call(null,ch)){
continue;
} else {
if((ch == null)){
if(eof_error_QMARK_){
return cljs.tools.reader.reader_types.reader_error.call(null,reader,"EOF");
} else {
return sentinel;
}
} else {
if((ch === return_on)){
return cljs.tools.reader.READ_FINISHED;
} else {
if(cljs.tools.reader.impl.commons.number_literal_QMARK_.call(null,reader,ch)){
return cljs.tools.reader.read_number.call(null,reader,ch);
} else {
var f = cljs.tools.reader.macros.call(null,ch);
if(!((f == null))){
var res = f.call(null,reader,ch,opts,pending_forms);
if((res === reader)){
continue;
} else {
return res;
}
} else {
return cljs.tools.reader.read_symbol.call(null,reader,ch);
}

}
}
}
}
}
break;
}
}));
} else {
if(!(goog.array.isEmpty(pending_forms))){
var form = (pending_forms[(0)]);
goog.array.removeAt(pending_forms,(0));

return form;
} else {
var ch = cljs.tools.reader.reader_types.read_char.call(null,reader);
if(cljs.tools.reader.impl.utils.whitespace_QMARK_.call(null,ch)){
continue;
} else {
if((ch == null)){
if(eof_error_QMARK_){
return cljs.tools.reader.reader_types.reader_error.call(null,reader,"EOF");
} else {
return sentinel;
}
} else {
if((ch === return_on)){
return cljs.tools.reader.READ_FINISHED;
} else {
if(cljs.tools.reader.impl.commons.number_literal_QMARK_.call(null,reader,ch)){
return cljs.tools.reader.read_number.call(null,reader,ch);
} else {
var f = cljs.tools.reader.macros.call(null,ch);
if(!((f == null))){
var res = f.call(null,reader,ch,opts,pending_forms);
if((res === reader)){
continue;
} else {
return res;
}
} else {
return cljs.tools.reader.read_symbol.call(null,reader,ch);
}

}
}
}
}
}
}
break;
}
});
cljs.tools.reader.read_STAR_ = (function cljs$tools$reader$read_STAR_(var_args){
var G__22480 = arguments.length;
switch (G__22480) {
case 5:
return cljs.tools.reader.read_STAR_.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.tools.reader.read_STAR_.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.tools.reader.read_STAR_.cljs$core$IFn$_invoke$arity$5 = (function (reader,eof_error_QMARK_,sentinel,opts,pending_forms){
return cljs.tools.reader.read_STAR_.call(null,reader,eof_error_QMARK_,sentinel,null,opts,pending_forms);
});

cljs.tools.reader.read_STAR_.cljs$core$IFn$_invoke$arity$6 = (function (reader,eof_error_QMARK_,sentinel,return_on,opts,pending_forms){
try{return cljs.tools.reader.read_STAR__internal.call(null,reader,eof_error_QMARK_,sentinel,return_on,opts,pending_forms);
}catch (e22481){if((e22481 instanceof Error)){
var e = e22481;
if(cljs.tools.reader.impl.utils.ex_info_QMARK_.call(null,e)){
var d = cljs.core.ex_data.call(null,e);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"reader-exception","reader-exception",-1938323098),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(d))){
throw e;
} else {
throw cljs.core.ex_info.call(null,e.message,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"reader-exception","reader-exception",-1938323098)], null),d,(cljs.core.truth_(cljs.tools.reader.reader_types.indexing_reader_QMARK_.call(null,reader))?new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),cljs.tools.reader.reader_types.get_line_number.call(null,reader),new cljs.core.Keyword(null,"column","column",2078222095),cljs.tools.reader.reader_types.get_column_number.call(null,reader),new cljs.core.Keyword(null,"file","file",-1269645878),cljs.tools.reader.reader_types.get_file_name.call(null,reader)], null):null)),e);
}
} else {
throw cljs.core.ex_info.call(null,e.message,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"reader-exception","reader-exception",-1938323098)], null),(cljs.core.truth_(cljs.tools.reader.reader_types.indexing_reader_QMARK_.call(null,reader))?new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),cljs.tools.reader.reader_types.get_line_number.call(null,reader),new cljs.core.Keyword(null,"column","column",2078222095),cljs.tools.reader.reader_types.get_column_number.call(null,reader),new cljs.core.Keyword(null,"file","file",-1269645878),cljs.tools.reader.reader_types.get_file_name.call(null,reader)], null):null)),e);
}
} else {
throw e22481;

}
}});

cljs.tools.reader.read_STAR_.cljs$lang$maxFixedArity = 6;

/**
 * Reads the first object from an IPushbackReader or a java.io.PushbackReader.
 * Returns the object read. If EOF, throws if eof-error? is true.
 * Otherwise returns sentinel. If no stream is providen, *in* will be used.
 * 
 * Opts is a persistent map with valid keys:
 *  :read-cond - :allow to process reader conditionals, or
 *               :preserve to keep all branches
 *  :features - persistent set of feature keywords for reader conditionals
 *  :eof - on eof, return value unless :eofthrow, then throw.
 *         if not specified, will throw
 * 
 * To read data structures only, use clojure.tools.reader.edn/read
 * 
 * Note that the function signature of clojure.tools.reader/read and
 * clojure.tools.reader.edn/read is not the same for eof-handling
 */
cljs.tools.reader.read = (function cljs$tools$reader$read(var_args){
var G__22484 = arguments.length;
switch (G__22484) {
case 1:
return cljs.tools.reader.read.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.tools.reader.read.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.tools.reader.read.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.tools.reader.read.cljs$core$IFn$_invoke$arity$1 = (function (reader){
return cljs.tools.reader.read.call(null,reader,true,null);
});

cljs.tools.reader.read.cljs$core$IFn$_invoke$arity$2 = (function (p__22485,reader){
var map__22486 = p__22485;
var map__22486__$1 = ((((!((map__22486 == null)))?(((((map__22486.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22486.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22486):map__22486);
var opts = map__22486__$1;
var eof = cljs.core.get.call(null,map__22486__$1,new cljs.core.Keyword(null,"eof","eof",-489063237),new cljs.core.Keyword(null,"eofthrow","eofthrow",-334166531));
return cljs.tools.reader.read_STAR_.call(null,reader,cljs.core._EQ_.call(null,eof,new cljs.core.Keyword(null,"eofthrow","eofthrow",-334166531)),eof,null,opts,cljs.core.to_array.call(null,cljs.core.PersistentVector.EMPTY));
});

cljs.tools.reader.read.cljs$core$IFn$_invoke$arity$3 = (function (reader,eof_error_QMARK_,sentinel){
return cljs.tools.reader.read_STAR_.call(null,reader,eof_error_QMARK_,sentinel,null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.to_array.call(null,cljs.core.PersistentVector.EMPTY));
});

cljs.tools.reader.read.cljs$lang$maxFixedArity = 3;

/**
 * Reads one object from the string s.
 * Returns nil when s is nil or empty.
 * 
 * To read data structures only, use clojure.tools.reader.edn/read-string
 * 
 * Note that the function signature of clojure.tools.reader/read-string and
 * clojure.tools.reader.edn/read-string is not the same for eof-handling
 */
cljs.tools.reader.read_string = (function cljs$tools$reader$read_string(var_args){
var G__22490 = arguments.length;
switch (G__22490) {
case 1:
return cljs.tools.reader.read_string.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.tools.reader.read_string.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.tools.reader.read_string.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cljs.tools.reader.read_string.call(null,cljs.core.PersistentArrayMap.EMPTY,s);
});

cljs.tools.reader.read_string.cljs$core$IFn$_invoke$arity$2 = (function (opts,s){
if(cljs.core.truth_((function (){var and__3911__auto__ = s;
if(cljs.core.truth_(and__3911__auto__)){
return !((s === ""));
} else {
return and__3911__auto__;
}
})())){
return cljs.tools.reader.read.call(null,opts,cljs.tools.reader.reader_types.string_push_back_reader.call(null,s));
} else {
return null;
}
});

cljs.tools.reader.read_string.cljs$lang$maxFixedArity = 2;


//# sourceMappingURL=reader.js.map?rel=1530661627379
