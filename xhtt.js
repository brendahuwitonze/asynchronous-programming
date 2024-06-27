// Create a function called myFetch that should work as a simple version of the native fetch() API.
//  The function myFetch should use the XMLHttpRequest to make a GET Request and return a promise that resolves
//   with the request’s response and rejects with an error if any.function myFetch(){ //... your code here
// }
// myFetch('https://my-random-api.com/data')
// .then(data => console.log(data))
// .catch(error => console.log('Error:', error));Bonus points (optional)
// Make your fetch function perform other request methods like POST or receive request options.


// Extend the fetchToDo function from Question 4 to include 
// custom headers in the request. Specifically, you need to add a User-Agent header 
// with a custom value and a Content-Type header set to application/json. Additionally, 
// modify the function to send a JSON payload in the request body. After sending the request, 
// the function should parse the JSON response and log the parsed object to the console.






function myFetch(url) {
  return new Promise((resolve, reject) => {
    const allData = new XMLHttpRequest();
    allData.open("GET", url);
    // allData.responseType = "json";
    allData.onload = () => {
      if (allData.status >= 200 && allData.status < 300) {
        resolve(allData.response);
      } else {
        reject(new Error(`Request failed ${allData.status}`));
      }
    };
    allData.onerror = () => reject(new Error(`network error`));
    allData.send();
    console.log(allData)
  });
 
}

myFetch("https://jsonplaceholder.typicode.com/posts")
  .then((data) => console.log(data))
  .catch((error) => console.log("Error:", error));
