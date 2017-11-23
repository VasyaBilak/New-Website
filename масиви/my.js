var a = ["world"];
var value = a[0];
a[1]=3.14;
i=2;
a[i]=3;
a[i+1]="hello";
a[a[i]]=a[0];


//console.log(a);

//b = new Array(5);
//b = [];
//b[1000] = 0;
var b = [,];
var b = [undefined];

//console.log(b);

var c = [1,2,3,4,5,6];
c.push("www", "dfs")
delete c[1]

//console.log(c);

var a = [1,2,3,4,5,6];
var keys = Object.keys(a);
var values =[]
for(var i=0; i<keys.length; i++){
	var key = keys[i];
	values[i] = a[key];
}
console.log(values);