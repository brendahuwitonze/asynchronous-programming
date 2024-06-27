// You are building a web application that needs to perform multiple
//  asynchronous operations in parallel and handle their results once all of them are 
//  completed. Specifically, you need to fetch data from three different APIs and then process the combined results.

// Here are the requirements:

// 1. Use the `fetch` API to get data from `https://jsonplaceholder.typicode.com/users`.
// 2. Use the `fetch` API to get data from `https://jsonplaceholder.typicode.com/posts`.
// 3. Use the `fetch` API to get data from `https://jsonplaceholder.typicode.com/comments`.
// 4. Once all three fetch operations are completed, log the total number of users, posts, and comments in the console.

//fetch the data (from three APIS)
//combine them (using the array)
//after fetching (log the total user of numbers, posts, and comments )
//Find the total number of each section using of(uses,posts,comments)using the .lenght
//useng destructuring to get each element in the array so that I can find the length
const api = ['https://jsonplaceholder.typicode.com/users',
             'https://jsonplaceholder.typicod',
             'https://jsonplaceholder.typicode.com/comments']
const getInformation = async (urls)=>{
const getData = urls.map( async ele => {
    const response = (await fetch(ele)).json()
    return await response
})
const finallData=  await Promise.allSettled(getData)
return finallData
}

// getInformation(api)
// .then((getData)=>{
// const [user,posts,comments] = getData
// console.log(`${user.length} Users`)
// console.log(`${posts.length} Posts`)
// console.log(`${comments.length} Comments`)
// })

getInformation(api)
.then((getData)=>{
    const [user,posts,comments] = getData
console.log({
    user:user.status!=="rejected"?user.value.length:user.reason.message,
    posts:posts.status!=="rejected"?posts.value.length:posts.reason.message,
    comments:comments.status!=="rejected"?comments.value.length:comments.reason.message,
})
})