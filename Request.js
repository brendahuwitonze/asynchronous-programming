// Write a JavaScript function that fetches data from an API and retries
//  the request a specified number of times if it fails.


async function fetchData (url, retries){
   for(let attempts = 0; attempts<=retries;attempts++){
    try{

    
const getData = await fetch(url)
if(!getData.ok){
    throw new Error(`request  at ${getData.status} denied`)
}
  else{
    return await getData.json()
  }
  } catch(error){
if(attempts===retries){
    throw new Error(`Max retries have reached`)
}

  }
  
}
}
fetchData('https://api.github.com/users/brendahuwitonze', 3)
.then(resolved=>console.log(resolved))
.catch(err=> console.log(err))