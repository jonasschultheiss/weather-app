console.log('starting app');

setTimeout(() =>{
    console.log('inside of callback')
}, 2000);

setTimeout(() =>{
    console.log('second set timeout')
}, 0);

setTimeout(() => {
    console.log('jonas isch triggert')
},1000);

console.log('finishing up');


