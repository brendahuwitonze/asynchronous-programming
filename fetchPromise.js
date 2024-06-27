const apiUrls = [
     'https://api.github.com/users/brendahuwitonze',
    'https://api.github.com/user/starred/brendah/Kata',
  ];
function fetchMultipleAPIs(url){
let dataFetched = url.map((elem)=>fetch(elem).then((jsonData)=>{
    return jsonData.json()
}))
return Promise.all(dataFetched )
}
fetchMultipleAPIs(apiUrls)
  .then(results => {
    console.log('Combined Results:', results);
  })
  .catch(error => {
    console.log('Error:', error.message);
  });