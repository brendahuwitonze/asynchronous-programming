// Write a javascript function that displays a 
// number every two seconds and stops displaying
//  after 5 seconds



//function to display
//setInterval for displaying number (wrap the number to be displayed inside)
//use setTimeout and add the function to clear out the timeInterval
//logic to stop the display

function displayNumber(){
  const time =  setInterval(()=>{
        let randNumber = Math.floor(Math.random()*10)
        console.log(randNumber)
    },2000)
   setTimeout(()=>clearInterval(time),5000)
  
}
console.log(displayNumber())

