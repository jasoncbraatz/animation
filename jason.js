"use strict";
/* let js = "amazing";
console.log(40+50);
console.log("Jason");
console.log(23);
// test
// alert (typeof js);
const jasonHairy = 'blahh'
console.log(jasonHairy);
console.log(typeof(jasonHairy));
// jasonHairy = 'blah2';
*/
/*
let jasonName = 'Jason'
console.log (`${jasonName} is awesome`);

console.log (`hello
johhny`)

if (jasonName == 'Jas1on')
{
    console.log(`OK now is good!`)
}
else {
    console.log('never mind.')
}

// let j;
// j = prompt("what?");
// console.log (j);

const dog='rufus'
dog === 'fred' ? console.log('Poor. poor. fred.') : 
console.log(`{$dog}`);

console.log(`${dog}`);

const doggie = 0 ? 'blah1' : 'blah2'
console.log(doggie);

const myFriends = ['Steph','Cap','Baby']
console.log(myFriends)
myFriends.push ('Fred')

console.log(myFriends)
*/

const myObject = {
  dog: "Fred",
  cat: "Normpie",
  Whoop: function () {
    return this.dog + "Whoop";
  },
  house: function () {
    return this.dog;
  },
};

console.log(myObject.house());
console.log(this.outerHeight);
console.log(myObject.Whoop());

// console.log (myObject.house())

console.log(myObject.dog);
console.log("Hello Doggy!");
