const { message } = require("prompt")

function createAlarm(name,time){
return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      if(time>2){
        resolve(`"wake up ${name}" after ${time} seconds`)
      }
      else{
        reject("Delay is not sufficient")
      }
    },time)
})
}
createAlarm('brendah',4)
.then(message=>console.log(message))
.catch(err=>{
    console.log(err)
})

//2.

