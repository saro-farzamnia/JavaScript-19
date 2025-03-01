// //Async
// const promise=new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         console.log("1");
//         resolve();
//     },1000);
// });
// promise.then(()=>{console.log("2");});
// const promise2=new Promise(function(){});

        // // START
// const random=new Promise((resolve,reject)=>{
//     console.log("start");
//     setTimeout(()=>{
//         const randomNumber=Math.random();
//         if (randomNumber < 0.5) {
//             console.log("success:",randomNumber);
//             resolve();
//         } else {
//             console.log("rejected:",random);
//             reject();
//         }
//     });
// });
// random.then(()=>{console.log("seccess end");});
// random.catch(()=>{console.log("ragect end");});

// const random2=new Promise((resolve,reject)=>{
//     console.log("start");
//     setTimeout(()=>{
//         const randomNumber=Math.random();
//         if (randomNumber < 0.5) {
//             resolve(randomNumber);
//         } else {
//             reject("An Error Occured");
//         }
//     });
// });
// random2.then((result)=>{console.log(result);});
// random2.catch((error)=>{console.log(error);});


// const random3=new Promise((resolve,reject)=>{
//     console.log("start");
//     setTimeout(()=>{
//         const randomNumber=Math.random();
//         if (randomNumber < 0.5) {
//             resolve(randomNumber);
//         } else {
//             reject("An Error Occured");
//         }
//     });
// });
// random3.then((res)=>res*10).then((number)=>Math.floor(number)).then((number)=>console.log(number));
// random3.catch((error)=>{console.log(error);});


        // // callback hell in promise

// const dublicate=(number)=>{
//     console.log("start");
//     const promise=new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             const result=number*2;
//             resolve(result);
//         },1000);
//     });
//     return promise;
// };
// const add=(number)=>{
//     console.log("start add");
//     const promise=new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             const result=number+5;
//             resolve(result);
//         },1000);
//     });
//     return promise;
// };
// dublicate(5).then((number)=>add(number)).then((result)=>console.log(result));

// resolve,reject => return