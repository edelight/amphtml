/**
 * Copyright 2015 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


/** @fileoverview @suppress {checkTypes, suspiciousCode, uselessCode} */

import {AstNode, AstNodeType} from './bind-expr-defines';

/* parser generated by jison 0.4.18 */
/*
  Returns a Parser object of the following structure:

  Parser: {
    yy: {}
  }

  Parser.prototype: {
    yy: {},
    trace: function(),
    symbols_: {associative list: name ==> number},
    terminals_: {associative list: number ==> name},
    productions_: [...],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$),
    table: [...],
    defaultActions: {...},
    parseError: function(str, hash),
    parse: function(input),

    lexer: {
        EOF: 1,
        parseError: function(str, hash),
        setInput: function(input),
        input: function(),
        unput: function(str),
        more: function(),
        less: function(n),
        pastInput: function(),
        upcomingInput: function(),
        showPosition: function(),
        test_match: function(regex_match_array, rule_index),
        next: function(),
        lex: function(),
        begin: function(condition),
        popState: function(),
        _currentRules: function(),
        topState: function(),
        pushState: function(condition),

        options: {
            ranges: boolean           (optional: true ==> token location info will include a .range[] member)
            flex: boolean             (optional: true ==> flex-like lexing behaviour where the rules are tested exhaustively to find the longest match)
            backtrack_lexer: boolean  (optional: true ==> lexer regexes are tested in order and for each matching regex the action code is invoked; the lexer terminates the scan when a token is returned by the action code)
        },

        performAction: function(yy, yy_, $avoiding_name_collisions, YY_START),
        rules: [...],
        conditions: {associative list: name ==> set},
    }
  }


  token location info (@$, _$, etc.): {
    first_line: n,
    last_line: n,
    first_column: n,
    last_column: n,
    range: [start_number, end_number]       (where the numbers are indexes into the input string, regular zero-based)
  }


  the parseError function receives a 'hash' object with these members for lexer and parser errors: {
    text:        (matched text)
    token:       (the produced terminal token, if any)
    line:        (yylineno)
  }
  while parser (grammar) errors will also provide these members, i.e. parser errors deliver a superset of attributes: {
    loc:         (yylloc)
    expected:    (string describing the set of expected tokens)
    recoverable: (boolean: TRUE when the parser has a error recovery rule available for this particular error)
  }
*/
var parser = (function(){
var o=function(k,v,o,l){for(o=o||{},l=k.length;l--;o[k[l]]=v);return o},$V0=[1,7],$V1=[1,10],$V2=[1,11],$V3=[1,12],$V4=[1,13],$V5=[1,23],$V6=[1,17],$V7=[1,18],$V8=[1,19],$V9=[1,20],$Va=[1,21],$Vb=[1,22],$Vc=[1,26],$Vd=[1,25],$Ve=[1,27],$Vf=[1,28],$Vg=[1,29],$Vh=[1,30],$Vi=[1,31],$Vj=[1,32],$Vk=[1,33],$Vl=[1,34],$Vm=[1,35],$Vn=[1,36],$Vo=[1,37],$Vp=[1,38],$Vq=[1,39],$Vr=[1,41],$Vs=[5,10,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,31,33,38,39,49],$Vt=[2,40],$Vu=[1,47],$Vv=[1,52],$Vw=[1,54],$Vx=[5,10,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,33,39,49],$Vy=[1,75],$Vz=[33,49],$VA=[10,33,39],$VB=[5,10,14,15,19,20,21,22,23,24,25,26,27,28,33,39,49],$VC=[5,10,19,20,21,22,23,24,25,26,27,28,33,39,49],$VD=[5,10,19,20,25,26,27,28,33,39,49],$VE=[10,33];
var parser = {trace: function trace() { },
yy: {},
symbols_: {"error":2,"result":3,"expr":4,"EOF":5,"operation":6,"invocation":7,"member_access":8,"(":9,")":10,"variable":11,"literal":12,"!":13,"-":14,"+":15,"*":16,"/":17,"%":18,"&&":19,"||":20,"<=":21,"<":22,">=":23,">":24,"!=":25,"==":26,"?":27,":":28,"NAME":29,"args":30,".":31,"arrow_function":32,",":33,"=>":34,"params":35,"array":36,"member":37,"[":38,"]":39,"primitive":40,"object_literal":41,"array_literal":42,"STRING":43,"NUMBER":44,"TRUE":45,"FALSE":46,"NULL":47,"{":48,"}":49,"object":50,"key_value":51,"key":52,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",9:"(",10:")",13:"!",14:"-",15:"+",16:"*",17:"/",18:"%",19:"&&",20:"||",21:"<=",22:"<",23:">=",24:">",25:"!=",26:"==",27:"?",28:":",29:"NAME",31:".",33:",",34:"=>",38:"[",39:"]",43:"STRING",44:"NUMBER",45:"TRUE",46:"FALSE",47:"NULL",48:"{",49:"}"},
productions_: [0,[3,2],[3,1],[4,1],[4,1],[4,1],[4,3],[4,1],[4,1],[6,2],[6,2],[6,2],[6,3],[6,3],[6,3],[6,3],[6,3],[6,3],[6,3],[6,3],[6,3],[6,3],[6,3],[6,3],[6,3],[6,5],[7,2],[7,4],[7,6],[7,8],[32,4],[32,3],[32,5],[35,3],[35,3],[30,2],[30,3],[8,2],[37,2],[37,3],[11,1],[12,1],[12,1],[12,1],[40,1],[40,1],[40,1],[40,1],[40,1],[42,2],[42,3],[42,4],[36,1],[36,3],[41,2],[41,3],[41,4],[50,1],[50,3],[51,3],[52,1],[52,1],[52,3]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 1:
return $$[$0-1];
break;
case 2:
return '';
break;
case 3: case 4: case 5: case 7: case 8:
this.$ = $$[$0];
break;
case 6:
this.$ = $$[$0-1];
break;
case 9:

        this.$ = new AstNode(AstNodeType.NOT, [$$[$0]]);
      
break;
case 10:

        this.$ = new AstNode(AstNodeType.UNARY_MINUS, [$$[$0]]);
      
break;
case 11:

        this.$ = new AstNode(AstNodeType.UNARY_PLUS, [$$[$0]]);
      
break;
case 12:

        this.$ = new AstNode(AstNodeType.PLUS, [$$[$0-2], $$[$0]]);
      
break;
case 13:

        this.$ = new AstNode(AstNodeType.MINUS, [$$[$0-2], $$[$0]]);
      
break;
case 14:

        this.$ = new AstNode(AstNodeType.MULTIPLY, [$$[$0-2], $$[$0]]);
      
break;
case 15:

        this.$ = new AstNode(AstNodeType.DIVIDE, [$$[$0-2], $$[$0]]);
      
break;
case 16:

        this.$ = new AstNode(AstNodeType.MODULO, [$$[$0-2], $$[$0]]);
      
break;
case 17:

        this.$ = new AstNode(AstNodeType.LOGICAL_AND, [$$[$0-2], $$[$0]]);
      
break;
case 18:

        this.$ = new AstNode(AstNodeType.LOGICAL_OR, [$$[$0-2], $$[$0]]);
      
break;
case 19:

        this.$ = new AstNode(AstNodeType.LESS_OR_EQUAL, [$$[$0-2], $$[$0]]);
      
break;
case 20:

        this.$ = new AstNode(AstNodeType.LESS, [$$[$0-2], $$[$0]]);
      
break;
case 21:

        this.$ = new AstNode(AstNodeType.GREATER_OR_EQUAL, [$$[$0-2], $$[$0]]);
      
break;
case 22:

        this.$ = new AstNode(AstNodeType.GREATER, [$$[$0-2], $$[$0]]);
      
break;
case 23:

        this.$ = new AstNode(AstNodeType.NOT_EQUAL, [$$[$0-2], $$[$0]]);
      
break;
case 24:

        this.$ = new AstNode(AstNodeType.EQUAL, [$$[$0-2], $$[$0]]);
      
break;
case 25:

        this.$ = new AstNode(AstNodeType.TERNARY, [$$[$0-4], $$[$0-2], $$[$0]]);
      
break;
case 26:

        this.$ = new AstNode(AstNodeType.INVOCATION, [undefined, $$[$0]], $$[$0-1]);
      
break;
case 27:

        this.$ = new AstNode(AstNodeType.INVOCATION, [$$[$0-3], $$[$0]], $$[$0-1]);
      
break;
case 28:

        {
          const array = new AstNode(AstNodeType.ARRAY, [$$[$0-1]]);
          this.$ = new AstNode(AstNodeType.INVOCATION, [$$[$0-5], array], $$[$0-3]);
        }
      
break;
case 29:

        {
          const array = new AstNode(AstNodeType.ARRAY, [$$[$0-3], $$[$0-1]]);
          this.$ = new AstNode(AstNodeType.INVOCATION, [$$[$0-7], array], $$[$0-5]);
        }
      
break;
case 30:

        this.$ = new AstNode(AstNodeType.ARROW_FUNCTION, [undefined, $$[$0]]);
      
break;
case 31:

        const param = new AstNode(AstNodeType.LITERAL, null, [$$[$0-2]]);
        this.$ = new AstNode(AstNodeType.ARROW_FUNCTION, [param, $$[$0]]);
      
break;
case 32:

        this.$ = new AstNode(AstNodeType.ARROW_FUNCTION, [$$[$0-3], $$[$0]]);
      
break;
case 33:

        this.$ = new AstNode(AstNodeType.LITERAL, null, [$$[$0-2], $$[$0]]);
      
break;
case 34:

        this.$ = $$[$0-2];
        this.$.value.push($$[$0]);
      
break;
case 35:

        this.$ = new AstNode(AstNodeType.ARGS, []);
      
break;
case 36:

        this.$ = new AstNode(AstNodeType.ARGS, [$$[$0-1]]);
      
break;
case 37:

        this.$ = new AstNode(AstNodeType.MEMBER_ACCESS, [$$[$0-1], $$[$0]]);
      
break;
case 38:

        this.$ = new AstNode(AstNodeType.MEMBER, null, $$[$0]);
      
break;
case 39:

        this.$ = new AstNode(AstNodeType.MEMBER, [$$[$0-1]]);
      
break;
case 40:

        this.$ = new AstNode(AstNodeType.VARIABLE, null, $$[$0]);
      
break;
case 41: case 42: case 43: case 61:

        this.$ = $$[$0];
      
break;
case 44:

        const string = yytext.substr(1, yyleng - 2);
        this.$ = new AstNode(AstNodeType.LITERAL, null, string);
      
break;
case 45:

        this.$ = new AstNode(AstNodeType.LITERAL, null, Number(yytext));
      
break;
case 46:

        this.$ = new AstNode(AstNodeType.LITERAL, null, true);
      
break;
case 47:

        this.$ = new AstNode(AstNodeType.LITERAL, null, false);
      
break;
case 48:

        this.$ = new AstNode(AstNodeType.LITERAL, null, null);
      
break;
case 49:

        this.$ = new AstNode(AstNodeType.ARRAY_LITERAL, []);
      
break;
case 50:

        this.$ = new AstNode(AstNodeType.ARRAY_LITERAL, [$$[$0-1]]);
      
break;
case 51:

        this.$ = new AstNode(AstNodeType.ARRAY_LITERAL, [$$[$0-2]]);
      
break;
case 52:

        this.$ = new AstNode(AstNodeType.ARRAY, [$$[$0]]);
      
break;
case 53: case 58:

        this.$ = $$[$0-2];
        this.$.args.push($$[$0]);
      
break;
case 54:

        this.$ = new AstNode(AstNodeType.OBJECT_LITERAL, []);
      
break;
case 55:

        this.$ = new AstNode(AstNodeType.OBJECT_LITERAL, [$$[$0-1]]);
      
break;
case 56:

        this.$ = new AstNode(AstNodeType.OBJECT_LITERAL, [$$[$0-2]]);
      
break;
case 57:

        this.$ = new AstNode(AstNodeType.OBJECT, [$$[$0]]);
      
break;
case 59:

        this.$ = new AstNode(AstNodeType.KEY_VALUE, [$$[$0-2], $$[$0]]);
      
break;
case 60:

        this.$ = new AstNode(AstNodeType.LITERAL, null, $$[$0]);
      
break;
case 62:

        this.$ = $$[$0-1];
      
break;
}
},
table: [{3:1,4:2,5:[1,3],6:4,7:5,8:6,9:$V0,11:8,12:9,13:$V1,14:$V2,15:$V3,29:$V4,38:$V5,40:14,41:15,42:16,43:$V6,44:$V7,45:$V8,46:$V9,47:$Va,48:$Vb},{1:[3]},{5:[1,24],14:$Vc,15:$Vd,16:$Ve,17:$Vf,18:$Vg,19:$Vh,20:$Vi,21:$Vj,22:$Vk,23:$Vl,24:$Vm,25:$Vn,26:$Vo,27:$Vp,31:$Vq,37:40,38:$Vr},{1:[2,2]},o($Vs,[2,3]),o($Vs,[2,4]),o($Vs,[2,5]),{4:42,6:4,7:5,8:6,9:$V0,11:8,12:9,13:$V1,14:$V2,15:$V3,29:$V4,38:$V5,40:14,41:15,42:16,43:$V6,44:$V7,45:$V8,46:$V9,47:$Va,48:$Vb},o($Vs,[2,7]),o($Vs,[2,8]),{4:43,6:4,7:5,8:6,9:$V0,11:8,12:9,13:$V1,14:$V2,15:$V3,29:$V4,38:$V5,40:14,41:15,42:16,43:$V6,44:$V7,45:$V8,46:$V9,47:$Va,48:$Vb},{4:44,6:4,7:5,8:6,9:$V0,11:8,12:9,13:$V1,14:$V2,15:$V3,29:$V4,38:$V5,40:14,41:15,42:16,43:$V6,44:$V7,45:$V8,46:$V9,47:$Va,48:$Vb},{4:45,6:4,7:5,8:6,9:$V0,11:8,12:9,13:$V1,14:$V2,15:$V3,29:$V4,38:$V5,40:14,41:15,42:16,43:$V6,44:$V7,45:$V8,46:$V9,47:$Va,48:$Vb},o($Vs,$Vt,{30:46,9:$Vu}),o($Vs,[2,41]),o($Vs,[2,42]),o($Vs,[2,43]),o($Vs,[2,44]),o($Vs,[2,45]),o($Vs,[2,46]),o($Vs,[2,47]),o($Vs,[2,48]),{29:$Vv,38:$Vw,40:53,43:$V6,44:$V7,45:$V8,46:$V9,47:$Va,49:[1,48],50:49,51:50,52:51},{4:57,6:4,7:5,8:6,9:$V0,11:8,12:9,13:$V1,14:$V2,15:$V3,29:$V4,36:56,38:$V5,39:[1,55],40:14,41:15,42:16,43:$V6,44:$V7,45:$V8,46:$V9,47:$Va,48:$Vb},{1:[2,1]},{4:58,6:4,7:5,8:6,9:$V0,11:8,12:9,13:$V1,14:$V2,15:$V3,29:$V4,38:$V5,40:14,41:15,42:16,43:$V6,44:$V7,45:$V8,46:$V9,47:$Va,48:$Vb},{4:59,6:4,7:5,8:6,9:$V0,11:8,12:9,13:$V1,14:$V2,15:$V3,29:$V4,38:$V5,40:14,41:15,42:16,43:$V6,44:$V7,45:$V8,46:$V9,47:$Va,48:$Vb},{4:60,6:4,7:5,8:6,9:$V0,11:8,12:9,13:$V1,14:$V2,15:$V3,29:$V4,38:$V5,40:14,41:15,42:16,43:$V6,44:$V7,45:$V8,46:$V9,47:$Va,48:$Vb},{4:61,6:4,7:5,8:6,9:$V0,11:8,12:9,13:$V1,14:$V2,15:$V3,29:$V4,38:$V5,40:14,41:15,42:16,43:$V6,44:$V7,45:$V8,46:$V9,47:$Va,48:$Vb},{4:62,6:4,7:5,8:6,9:$V0,11:8,12:9,13:$V1,14:$V2,15:$V3,29:$V4,38:$V5,40:14,41:15,42:16,43:$V6,44:$V7,45:$V8,46:$V9,47:$Va,48:$Vb},{4:63,6:4,7:5,8:6,9:$V0,11:8,12:9,13:$V1,14:$V2,15:$V3,29:$V4,38:$V5,40:14,41:15,42:16,43:$V6,44:$V7,45:$V8,46:$V9,47:$Va,48:$Vb},{4:64,6:4,7:5,8:6,9:$V0,11:8,12:9,13:$V1,14:$V2,15:$V3,29:$V4,38:$V5,40:14,41:15,42:16,43:$V6,44:$V7,45:$V8,46:$V9,47:$Va,48:$Vb},{4:65,6:4,7:5,8:6,9:$V0,11:8,12:9,13:$V1,14:$V2,15:$V3,29:$V4,38:$V5,40:14,41:15,42:16,43:$V6,44:$V7,45:$V8,46:$V9,47:$Va,48:$Vb},{4:66,6:4,7:5,8:6,9:$V0,11:8,12:9,13:$V1,14:$V2,15:$V3,29:$V4,38:$V5,40:14,41:15,42:16,43:$V6,44:$V7,45:$V8,46:$V9,47:$Va,48:$Vb},{4:67,6:4,7:5,8:6,9:$V0,11:8,12:9,13:$V1,14:$V2,15:$V3,29:$V4,38:$V5,40:14,41:15,42:16,43:$V6,44:$V7,45:$V8,46:$V9,47:$Va,48:$Vb},{4:68,6:4,7:5,8:6,9:$V0,11:8,12:9,13:$V1,14:$V2,15:$V3,29:$V4,38:$V5,40:14,41:15,42:16,43:$V6,44:$V7,45:$V8,46:$V9,47:$Va,48:$Vb},{4:69,6:4,7:5,8:6,9:$V0,11:8,12:9,13:$V1,14:$V2,15:$V3,29:$V4,38:$V5,40:14,41:15,42:16,43:$V6,44:$V7,45:$V8,46:$V9,47:$Va,48:$Vb},{4:70,6:4,7:5,8:6,9:$V0,11:8,12:9,13:$V1,14:$V2,15:$V3,29:$V4,38:$V5,40:14,41:15,42:16,43:$V6,44:$V7,45:$V8,46:$V9,47:$Va,48:$Vb},{4:71,6:4,7:5,8:6,9:$V0,11:8,12:9,13:$V1,14:$V2,15:$V3,29:$V4,38:$V5,40:14,41:15,42:16,43:$V6,44:$V7,45:$V8,46:$V9,47:$Va,48:$Vb},{29:[1,72]},o($Vs,[2,37]),{4:73,6:4,7:5,8:6,9:$V0,11:8,12:9,13:$V1,14:$V2,15:$V3,29:$V4,38:$V5,40:14,41:15,42:16,43:$V6,44:$V7,45:$V8,46:$V9,47:$Va,48:$Vb},{10:[1,74],14:$Vc,15:$Vd,16:$Ve,17:$Vf,18:$Vg,19:$Vh,20:$Vi,21:$Vj,22:$Vk,23:$Vl,24:$Vm,25:$Vn,26:$Vo,27:$Vp,31:$Vq,37:40,38:$Vr},o($Vx,[2,9],{37:40,31:$Vq,38:$Vr}),o($Vx,[2,10],{37:40,31:$Vq,38:$Vr}),o($Vx,[2,11],{37:40,31:$Vq,38:$Vr}),o($Vs,[2,26]),{4:57,6:4,7:5,8:6,9:$V0,10:$Vy,11:8,12:9,13:$V1,14:$V2,15:$V3,29:$V4,36:76,38:$V5,40:14,41:15,42:16,43:$V6,44:$V7,45:$V8,46:$V9,47:$Va,48:$Vb},o($Vs,[2,54]),{33:[1,78],49:[1,77]},o($Vz,[2,57]),{28:[1,79]},{28:[2,60]},{28:[2,61]},{4:80,6:4,7:5,8:6,9:$V0,11:8,12:9,13:$V1,14:$V2,15:$V3,29:$V4,38:$V5,40:14,41:15,42:16,43:$V6,44:$V7,45:$V8,46:$V9,47:$Va,48:$Vb},o($Vs,[2,49]),{33:[1,82],39:[1,81]},o($VA,[2,52],{37:40,14:$Vc,15:$Vd,16:$Ve,17:$Vf,18:$Vg,19:$Vh,20:$Vi,21:$Vj,22:$Vk,23:$Vl,24:$Vm,25:$Vn,26:$Vo,27:$Vp,31:$Vq,38:$Vr}),o($VB,[2,12],{37:40,16:$Ve,17:$Vf,18:$Vg,31:$Vq,38:$Vr}),o($VB,[2,13],{37:40,16:$Ve,17:$Vf,18:$Vg,31:$Vq,38:$Vr}),o($Vx,[2,14],{37:40,31:$Vq,38:$Vr}),o($Vx,[2,15],{37:40,31:$Vq,38:$Vr}),o($Vx,[2,16],{37:40,31:$Vq,38:$Vr}),o([5,10,19,20,27,28,33,39,49],[2,17],{37:40,14:$Vc,15:$Vd,16:$Ve,17:$Vf,18:$Vg,21:$Vj,22:$Vk,23:$Vl,24:$Vm,25:$Vn,26:$Vo,31:$Vq,38:$Vr}),o([5,10,20,27,28,33,39,49],[2,18],{37:40,14:$Vc,15:$Vd,16:$Ve,17:$Vf,18:$Vg,19:$Vh,21:$Vj,22:$Vk,23:$Vl,24:$Vm,25:$Vn,26:$Vo,31:$Vq,38:$Vr}),o($VC,[2,19],{37:40,14:$Vc,15:$Vd,16:$Ve,17:$Vf,18:$Vg,31:$Vq,38:$Vr}),o($VC,[2,20],{37:40,14:$Vc,15:$Vd,16:$Ve,17:$Vf,18:$Vg,31:$Vq,38:$Vr}),o($VC,[2,21],{37:40,14:$Vc,15:$Vd,16:$Ve,17:$Vf,18:$Vg,31:$Vq,38:$Vr}),o($VC,[2,22],{37:40,14:$Vc,15:$Vd,16:$Ve,17:$Vf,18:$Vg,31:$Vq,38:$Vr}),o($VD,[2,23],{37:40,14:$Vc,15:$Vd,16:$Ve,17:$Vf,18:$Vg,21:$Vj,22:$Vk,23:$Vl,24:$Vm,31:$Vq,38:$Vr}),o($VD,[2,24],{37:40,14:$Vc,15:$Vd,16:$Ve,17:$Vf,18:$Vg,21:$Vj,22:$Vk,23:$Vl,24:$Vm,31:$Vq,38:$Vr}),{14:$Vc,15:$Vd,16:$Ve,17:$Vf,18:$Vg,19:$Vh,20:$Vi,21:$Vj,22:$Vk,23:$Vl,24:$Vm,25:$Vn,26:$Vo,27:$Vp,28:[1,83],31:$Vq,37:40,38:$Vr},o($Vs,[2,38],{30:84,9:[1,85]}),{14:$Vc,15:$Vd,16:$Ve,17:$Vf,18:$Vg,19:$Vh,20:$Vi,21:$Vj,22:$Vk,23:$Vl,24:$Vm,25:$Vn,26:$Vo,27:$Vp,31:$Vq,37:40,38:$Vr,39:[1,86]},o($Vs,[2,6]),o($Vs,[2,35]),{10:[1,87],33:[1,88]},o($Vs,[2,55]),{29:$Vv,38:$Vw,40:53,43:$V6,44:$V7,45:$V8,46:$V9,47:$Va,49:[1,89],51:90,52:51},{4:91,6:4,7:5,8:6,9:$V0,11:8,12:9,13:$V1,14:$V2,15:$V3,29:$V4,38:$V5,40:14,41:15,42:16,43:$V6,44:$V7,45:$V8,46:$V9,47:$Va,48:$Vb},{14:$Vc,15:$Vd,16:$Ve,17:$Vf,18:$Vg,19:$Vh,20:$Vi,21:$Vj,22:$Vk,23:$Vl,24:$Vm,25:$Vn,26:$Vo,27:$Vp,31:$Vq,37:40,38:$Vr,39:[1,92]},o($Vs,[2,50]),{4:94,6:4,7:5,8:6,9:$V0,11:8,12:9,13:$V1,14:$V2,15:$V3,29:$V4,38:$V5,39:[1,93],40:14,41:15,42:16,43:$V6,44:$V7,45:$V8,46:$V9,47:$Va,48:$Vb},{4:95,6:4,7:5,8:6,9:$V0,11:8,12:9,13:$V1,14:$V2,15:$V3,29:$V4,38:$V5,40:14,41:15,42:16,43:$V6,44:$V7,45:$V8,46:$V9,47:$Va,48:$Vb},o($Vs,[2,27]),{4:57,6:4,7:5,8:6,9:[1,97],10:$Vy,11:8,12:9,13:$V1,14:$V2,15:$V3,29:[1,98],32:96,36:76,38:$V5,40:14,41:15,42:16,43:$V6,44:$V7,45:$V8,46:$V9,47:$Va,48:$Vb},o($Vs,[2,39]),o($Vs,[2,36]),{4:94,6:4,7:5,8:6,9:$V0,11:8,12:9,13:$V1,14:$V2,15:$V3,29:$V4,38:$V5,40:14,41:15,42:16,43:$V6,44:$V7,45:$V8,46:$V9,47:$Va,48:$Vb},o($Vs,[2,56]),o($Vz,[2,58]),o($Vz,[2,59],{37:40,14:$Vc,15:$Vd,16:$Ve,17:$Vf,18:$Vg,19:$Vh,20:$Vi,21:$Vj,22:$Vk,23:$Vl,24:$Vm,25:$Vn,26:$Vo,27:$Vp,31:$Vq,38:$Vr}),{28:[2,62]},o($Vs,[2,51]),o($VA,[2,53],{37:40,14:$Vc,15:$Vd,16:$Ve,17:$Vf,18:$Vg,19:$Vh,20:$Vi,21:$Vj,22:$Vk,23:$Vl,24:$Vm,25:$Vn,26:$Vo,27:$Vp,31:$Vq,38:$Vr}),o([5,10,28,33,39,49],[2,25],{37:40,14:$Vc,15:$Vd,16:$Ve,17:$Vf,18:$Vg,19:$Vh,20:$Vi,21:$Vj,22:$Vk,23:$Vl,24:$Vm,25:$Vn,26:$Vo,27:$Vp,31:$Vq,38:$Vr}),{10:[1,99],33:[1,100]},{4:42,6:4,7:5,8:6,9:$V0,10:[1,101],11:8,12:9,13:$V1,14:$V2,15:$V3,29:[1,103],35:102,38:$V5,40:14,41:15,42:16,43:$V6,44:$V7,45:$V8,46:$V9,47:$Va,48:$Vb},o([10,14,15,16,17,18,19,20,21,22,23,24,25,26,27,31,33,38],$Vt,{30:46,9:$Vu,34:[1,104]}),o($Vs,[2,28]),{4:105,6:4,7:5,8:6,9:$V0,11:8,12:9,13:$V1,14:$V2,15:$V3,29:$V4,38:$V5,40:14,41:15,42:16,43:$V6,44:$V7,45:$V8,46:$V9,47:$Va,48:$Vb},{34:[1,106]},{10:[1,107],33:[1,108]},o([10,14,15,16,17,18,19,20,21,22,23,24,25,26,27,31,38],$Vt,{30:46,9:$Vu,33:[1,109]}),{4:110,6:4,7:5,8:6,9:$V0,11:8,12:9,13:$V1,14:$V2,15:$V3,29:$V4,38:$V5,40:14,41:15,42:16,43:$V6,44:$V7,45:$V8,46:$V9,47:$Va,48:$Vb},{10:[1,111],14:$Vc,15:$Vd,16:$Ve,17:$Vf,18:$Vg,19:$Vh,20:$Vi,21:$Vj,22:$Vk,23:$Vl,24:$Vm,25:$Vn,26:$Vo,27:$Vp,31:$Vq,37:40,38:$Vr},{4:112,6:4,7:5,8:6,9:$V0,11:8,12:9,13:$V1,14:$V2,15:$V3,29:$V4,38:$V5,40:14,41:15,42:16,43:$V6,44:$V7,45:$V8,46:$V9,47:$Va,48:$Vb},{34:[1,113]},{29:[1,114]},{29:[1,115]},o($VE,[2,31],{37:40,14:$Vc,15:$Vd,16:$Ve,17:$Vf,18:$Vg,19:$Vh,20:$Vi,21:$Vj,22:$Vk,23:$Vl,24:$Vm,25:$Vn,26:$Vo,27:$Vp,31:$Vq,38:$Vr}),o($Vs,[2,29]),o($VE,[2,30],{37:40,14:$Vc,15:$Vd,16:$Ve,17:$Vf,18:$Vg,19:$Vh,20:$Vi,21:$Vj,22:$Vk,23:$Vl,24:$Vm,25:$Vn,26:$Vo,27:$Vp,31:$Vq,38:$Vr}),{4:116,6:4,7:5,8:6,9:$V0,11:8,12:9,13:$V1,14:$V2,15:$V3,29:$V4,38:$V5,40:14,41:15,42:16,43:$V6,44:$V7,45:$V8,46:$V9,47:$Va,48:$Vb},o($VE,[2,34]),o($VE,[2,33]),o($VE,[2,32],{37:40,14:$Vc,15:$Vd,16:$Ve,17:$Vf,18:$Vg,19:$Vh,20:$Vi,21:$Vj,22:$Vk,23:$Vl,24:$Vm,25:$Vn,26:$Vo,27:$Vp,31:$Vq,38:$Vr})],
defaultActions: {3:[2,2],24:[2,1],52:[2,60],53:[2,61],92:[2,62]},
parseError: function parseError(str, hash) {
    if (hash.recoverable) {
        this.trace(str);
    } else {
        var error = new Error(str);
        error.hash = hash;
        throw error;
    }
},
parse: function parse(input) {
    var self = this, stack = [0], tstack = [], vstack = [null], lstack = [], table = this.table, yytext = '', yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
    var args = lstack.slice.call(arguments, 1);
    var lexer = Object.create(this.lexer);
    var sharedState = { yy: {} };
    for (var k in this.yy) {
        if (Object.prototype.hasOwnProperty.call(this.yy, k)) {
            sharedState.yy[k] = this.yy[k];
        }
    }
    lexer.setInput(input, sharedState.yy);
    sharedState.yy.lexer = lexer;
    sharedState.yy.parser = this;
    if (typeof lexer.yylloc == 'undefined') {
        lexer.yylloc = {};
    }
    var yyloc = lexer.yylloc;
    lstack.push(yyloc);
    var ranges = lexer.options && lexer.options.ranges;
    if (typeof sharedState.yy.parseError === 'function') {
        this.parseError = sharedState.yy.parseError;
    } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
    }
    function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }
    _token_stack:
        var lex = function () {
            var token;
            token = lexer.lex() || EOF;
            if (typeof token !== 'number') {
                token = self.symbols_[token] || token;
            }
            return token;
        };
    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        state = stack[stack.length - 1];
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == 'undefined') {
                symbol = lex();
            }
            action = table[state] && table[state][symbol];
        }
                    if (typeof action === 'undefined' || !action.length || !action[0]) {
                var errStr = '';
                expected = [];
                for (p in table[state]) {
                    if (this.terminals_[p] && p > TERROR) {
                        expected.push('\'' + this.terminals_[p] + '\'');
                    }
                }
                if (lexer.showPosition) {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ':\n' + lexer.showPosition() + '\nExpecting ' + expected.join(', ') + ', got \'' + (this.terminals_[symbol] || symbol) + '\'';
                } else {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ': Unexpected ' + (symbol == EOF ? 'end of input' : '\'' + (this.terminals_[symbol] || symbol) + '\'');
                }
                this.parseError(errStr, {
                    text: lexer.match,
                    token: this.terminals_[symbol] || symbol,
                    line: lexer.yylineno,
                    loc: yyloc,
                    expected: expected
                });
            }
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: ' + state + ', token: ' + symbol);
        }
        switch (action[0]) {
        case 1:
            stack.push(symbol);
            vstack.push(lexer.yytext);
            lstack.push(lexer.yylloc);
            stack.push(action[1]);
            symbol = null;
            if (!preErrorSymbol) {
                yyleng = lexer.yyleng;
                yytext = lexer.yytext;
                yylineno = lexer.yylineno;
                yyloc = lexer.yylloc;
                if (recovering > 0) {
                    recovering--;
                }
            } else {
                symbol = preErrorSymbol;
                preErrorSymbol = null;
            }
            break;
        case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {
                first_line: lstack[lstack.length - (len || 1)].first_line,
                last_line: lstack[lstack.length - 1].last_line,
                first_column: lstack[lstack.length - (len || 1)].first_column,
                last_column: lstack[lstack.length - 1].last_column
            };
            if (ranges) {
                yyval._$.range = [
                    lstack[lstack.length - (len || 1)].range[0],
                    lstack[lstack.length - 1].range[1]
                ];
            }
            r = this.performAction.apply(yyval, [
                yytext,
                yyleng,
                yylineno,
                sharedState.yy,
                action[1],
                vstack,
                lstack
            ].concat(args));
            if (typeof r !== 'undefined') {
                return r;
            }
            if (len) {
                stack = stack.slice(0, -1 * len * 2);
                vstack = vstack.slice(0, -1 * len);
                lstack = lstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
        case 3:
            return true;
        }
    }
    return true;
}};
/* generated by jison-lex 0.3.4 */
var lexer = (function(){
var lexer = ({

EOF:1,

parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },

// resets the lexer, sets new input
setInput:function (input, yy) {
        this.yy = yy || this.yy || {};
        this._input = input;
        this._more = this._backtrack = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
        };
        if (this.options.ranges) {
            this.yylloc.range = [0,0];
        }
        this.offset = 0;
        return this;
    },

// consumes and returns one char from the input
input:function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) {
            this.yylloc.range[1]++;
        }

        this._input = this._input.slice(1);
        return ch;
    },

// unshifts one char (or a string) into the input
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length - len);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);

        if (lines.length - 1) {
            this.yylineno -= lines.length - 1;
        }
        var r = this.yylloc.range;

        this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: lines ?
                (lines.length === oldLines.length ? this.yylloc.first_column : 0)
                 + oldLines[oldLines.length - lines.length].length - lines[0].length :
              this.yylloc.first_column - len
        };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        this.yyleng = this.yytext.length;
        return this;
    },

// When called from action, caches matched text and appends it on next action
more:function () {
        this._more = true;
        return this;
    },

// When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
reject:function () {
        if (this.options.backtrack_lexer) {
            this._backtrack = true;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });

        }
        return this;
    },

// retain first n characters of the match
less:function (n) {
        this.unput(this.match.slice(n));
    },

// displays already matched input, i.e. for error messages
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },

// displays upcoming input, i.e. for error messages
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
    },

// displays the character position where the lexing error occurred, i.e. for error messages
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c + "^";
    },

// test the lexed token: return FALSE when not a match, otherwise return token
test_match:function (match, indexed_rule) {
        var token,
            lines,
            backup;

        if (this.options.backtrack_lexer) {
            // save context
            backup = {
                yylineno: this.yylineno,
                yylloc: {
                    first_line: this.yylloc.first_line,
                    last_line: this.last_line,
                    first_column: this.yylloc.first_column,
                    last_column: this.yylloc.last_column
                },
                yytext: this.yytext,
                match: this.match,
                matches: this.matches,
                matched: this.matched,
                yyleng: this.yyleng,
                offset: this.offset,
                _more: this._more,
                _input: this._input,
                yy: this.yy,
                conditionStack: this.conditionStack.slice(0),
                done: this.done
            };
            if (this.options.ranges) {
                backup.yylloc.range = this.yylloc.range.slice(0);
            }
        }

        lines = match[0].match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno += lines.length;
        }
        this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: lines ?
                         lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length :
                         this.yylloc.last_column + match[0].length
        };
        this.yytext += match[0];
        this.match += match[0];
        this.matches = match;
        this.yyleng = this.yytext.length;
        if (this.options.ranges) {
            this.yylloc.range = [this.offset, this.offset += this.yyleng];
        }
        this._more = false;
        this._backtrack = false;
        this._input = this._input.slice(match[0].length);
        this.matched += match[0];
        token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
        if (this.done && this._input) {
            this.done = false;
        }
        if (token) {
            return token;
        } else if (this._backtrack) {
            // recover context
            for (var k in backup) {
                this[k] = backup[k];
            }
            return false; // rule action called reject() implying the next rule should be tested instead.
        }
        return false;
    },

// return next match in input
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) {
            this.done = true;
        }

        var token,
            match,
            tempMatch,
            index;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i = 0; i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (this.options.backtrack_lexer) {
                    token = this.test_match(tempMatch, rules[i]);
                    if (token !== false) {
                        return token;
                    } else if (this._backtrack) {
                        match = false;
                        continue; // rule action called reject() implying a rule MISmatch.
                    } else {
                        // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
                        return false;
                    }
                } else if (!this.options.flex) {
                    break;
                }
            }
        }
        if (match) {
            token = this.test_match(match, rules[index]);
            if (token !== false) {
                return token;
            }
            // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
            return false;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });
        }
    },

// return next match that has a token
lex:function lex() {
        var r = this.next();
        if (r) {
            return r;
        } else {
            return this.lex();
        }
    },

// activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
begin:function begin(condition) {
        this.conditionStack.push(condition);
    },

// pop the previously active lexer condition state off the condition stack
popState:function popState() {
        var n = this.conditionStack.length - 1;
        if (n > 0) {
            return this.conditionStack.pop();
        } else {
            return this.conditionStack[0];
        }
    },

// produce the lexer rule set which is active for the currently active lexer condition state
_currentRules:function _currentRules() {
        if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
        } else {
            return this.conditions["INITIAL"].rules;
        }
    },

// return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
topState:function topState(n) {
        n = this.conditionStack.length - 1 - Math.abs(n || 0);
        if (n >= 0) {
            return this.conditionStack[n];
        } else {
            return "INITIAL";
        }
    },

// alias for begin(condition)
pushState:function pushState(condition) {
        this.begin(condition);
    },

// return the number of states currently on the stack
stateStackSize:function stateStackSize() {
        return this.conditionStack.length;
    },
options: {},
performAction: function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {
var YYSTATE=YY_START;
switch($avoiding_name_collisions) {
case 0:/* skip whitespace */
break;
case 1:return 47
break;
case 2:return 45
break;
case 3:return 46
break;
case 4:return 44
break;
case 5:return 29
break;
case 6:return 43
break;
case 7:return 43
break;
case 8:return 34
break;
case 9:return 15
break;
case 10:return 14
break;
case 11:return 16
break;
case 12:return 17
break;
case 13:return 19
break;
case 14:return 20
break;
case 15:return 25
break;
case 16:return 26
break;
case 17:return 21
break;
case 18:return 22
break;
case 19:return 23
break;
case 20:return 24
break;
case 21:return 13
break;
case 22:return 27
break;
case 23:return 28
break;
case 24:return 18
break;
case 25:return 38
break;
case 26:return 39
break;
case 27:return 48
break;
case 28:return 49
break;
case 29:return 9
break;
case 30:return 10
break;
case 31:return 33
break;
case 32:return 31
break;
case 33:return 'INVALID'
break;
case 34:return 5
break;
}
},
rules: [/^(?:\s+)/,/^(?:null\b)/,/^(?:true\b)/,/^(?:false\b)/,/^(?:[0-9]+(\.[0-9]+)?\b)/,/^(?:[a-zA-Z_][a-zA-Z0-9_]*)/,/^(?:'[^\']*')/,/^(?:"[^\"]*")/,/^(?:=>)/,/^(?:\+)/,/^(?:-)/,/^(?:\*)/,/^(?:\/)/,/^(?:&&)/,/^(?:\|\|)/,/^(?:!=)/,/^(?:==)/,/^(?:<=)/,/^(?:<)/,/^(?:>=)/,/^(?:>)/,/^(?:!)/,/^(?:\?)/,/^(?::)/,/^(?:%)/,/^(?:\[)/,/^(?:\])/,/^(?:\{)/,/^(?:\})/,/^(?:\()/,/^(?:\))/,/^(?:,)/,/^(?:\.)/,/^(?:.)/,/^(?:$)/],
conditions: {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34],"inclusive":true}}
});
return lexer;
})();
parser.lexer = lexer;
function Parser () {
  this.yy = {};
}
Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();

export const bindParser = parser;
