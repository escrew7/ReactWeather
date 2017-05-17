// function getTempCallback(location, callback) {
//   callback(undefined, 78);
//   callback('City not found')
// }
//
// getTempCallback('Philadelphia', function (err, temp) {
//   if(err){
//     console.log('Error', err)
//   } else {
//     console.log('Success', temp)
//   }
// })
//
//
// function getTempPromise (location) {
//   return new Promise(function (resolve, reject){
//     setTimeout(function (){
//       resolve(79);
//       reject('City not found');
//     }, 1000)
//   })
// }
//
// getTempPromise('Philadelphia').then(function (temp){
//   console.log('promise success', temp)
// }, function (err){
//     console.log('promise error', err)
// })

//Challenge

function addPromise (a, b) {
  return new Promise(function (resolve, reject){
    if(typeof a === 'number' && typeof b === 'number'){
      resolve(a+b);
    } else {
      reject('both arguments must be numbers');
    }
  });
}

addPromise(1,2).then(function (sum){
    console.log('success', sum);
  }, function (err) {
    console.log('error', err);
})

addPromise(1, 'a').then(function (sum){
  console.log(sum);
  }, function (err) {
  console.log(err);
})
