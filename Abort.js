// Write a function that takes a URL and fetches
//  data from that URL but aborts when the request takes more than 10ms


//Creating the Abort controller
//1 takes the Url and fetches
//2 Abort data from the Url if takes more than 10ms

//create a function
//use fetch
//Use the Abort controller with setTimoeout for delay

async function fetData(url,timerFunction) {
  const controller = new AbortController();
  const signal = controller.signal;
  const timer = setTimeout(()=>{
    controller.abort()
  },timerFunction)
  const getPromise = fetch(url,{signal});
  try {
    const resolved = await getPromise
    clearTimeout(timer)
    if(!resolved.ok){
        throw Error("Couldn't generate the data")
    }
    else{
        console.log(await resolved.json())
    }

  } catch (error) {
    console.log(error)
  }
}
console.log(fetData('https://api.github.com/users/brendahuwitonze',0))
