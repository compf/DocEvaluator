parser grammar JavaParser;
options { tokenVocab=JavaLexer; }
javaFile:relevantComponent*;
classDec: modifierer*  CLASS IDENTIFIER generics? (EXTENDS IDENTIFIER)? (IMPLEMENTS IDENTIFIER)* classBlock;
classBlock: '{' (classBlock | methodDecl) '}';
blockStart: '{';
blockEnd: '}';

interfaceDec: modifierer* INTERFACE IDENTIFIER (IMPLEMENTS IDENTIFIER)* blockStart;
relevantComponent: COMMENT? (classDec | interfaceDec|methodDecl);
modifierer: PUBLIC|STATIC|PROTECTED|PRIVATE|FINAL;
generics: '<' IDENTIFIER '>';
methodDecl: modifierer* dataType IDENTIFIER '(' params? ')' block;
block: '{' .*? (block .*?)? '}';
dataType: (VOID | INT | LONG |DOUBLE | FLOAT |SHORT | IDENTIFIER) ('['  ']')?;
params: param (',' param)* param?;
param: dataType IDENTIFIER;
fieldDec: modifierer* dataType IDENTIFIER ';';
comment: COMMENT;
allRelevantComponents: relevantComponent+;
notInteresting: ~'}'*;