var names = ['Luke', 'Josh', 'Luke2', 'Mitch']
//
// names.forEach(function (name){
//   console.log('forEach:', name)
// });
//
// names.forEach((name) => {
//   console.log('arrowFunc:', name)
// })
//
// names.forEach((name) => console.log('shrtArr:', name))
//
// var returnMe = (name) => name + '!';
// console.log(returnMe('luke'))
//
// var person = {
//   name: 'Luke',
//   greet: function () {
//     names.forEach((name) => {
//       console.log(this.name + ' says hi to ' + name)
//     });
//   }
// };
//
// person.greet()

function add (a, b) {
  return a + b
}

console.log(add(1,3))
console.log(add(9,0))

var addStatement = (a,b) => {
  return a + b
}
console.log(addStatement(4,5))

var addExpression = (a,b) => a+b;

console.log(addExpression(4,5))
