typeof undefined    === 'undefined';    //true
typeof true         === 'boolean';      //true
typeof 42           === 'number';       //true
typeof "42"         === 'string';       // true
typeof {life:42}    === 'object';       //true

//added in ES6!
typeof Symbol()     === "symbol";       //true

//testing for null

var a = null

(!a && typeof a === "object"); //true


// seventh type of check
typeof function a(){/*….*/} === “function”; //true



//---------------------Values----------------------------

var a = [1, "2", [3]];

a.length;       //3
a[0] === 1;     //true
a[2][0] === 2;  //true


// dynamic array size

var a = [1, "2", [3]];

a.length;       //3
a[0] === 1;     //true
a[2][0] === 2;  //true

// sparse arrays

var a = [1, "2", [3]];

a.length;       //3
a[0] === 1;     //true
a[2][0] === 2;  //true

// string key/property

var a = [ ];
a[ 0] = 1;
a[" foobar"] = 2;

a.length; // 1
a[" foobar"]; // 2
a.foobar; // 2
