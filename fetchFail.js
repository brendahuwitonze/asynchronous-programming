// Write a JavaScript function that fetches data from an API
//  and retries the request a specified number of times if it fails.

const { response } = require("express")


//creat a function for fetching that will take two arguments.(the url ,the number of times to try fetching)
//use the for loop to do the counts for trying
//In the catch try to check if the number of attemots is equal to the number of retries


/* steps
Fetch data from an API
Check if the fetch was successful
Return it if it is successful
Retry if it fails
Track the number of times to ensure that it never exceeds the limit
if retries < limit, and the data is available we return
if retries > limit, then we throw the error
/

/
Data: What can change 
The url from an API
The max number of times we want to retry if it fails
The delay
*/

async function fetchData(url){
  try {
    const getData = await fetch(url)
    const resolvedData = await getData.json()
    console.log(resolvedData)
    return resolvedData
  }
    
  catch (error) {
    console.log(error)
  }
}
 console.log((fetchData('https://jsonplaceholder.typicode.com/posts')))
