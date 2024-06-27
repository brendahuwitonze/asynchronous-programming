// 1. Create a function called `fetchUserTodos` that uses the `Promise.all()` method to fetch users and todos
// concurrently from the provided API endpoints and combine them based on the `userId`. The function should return a
//  promise that resolves with the combined data.
// - Users endpoints [`https://jsonplaceholder.typicode.com/users`](https://jsonplaceholder.typicode.com/users)
// - Todos endpoints [`https://jsonplaceholder.typicode.com/todos`](https://jsonplaceholder.typicode.com/todos)
//     The returned promise should resolve into an array of users, where each user object has a new key `todos`.
//     This key should contain an array of todos that belong to the user, determined by
//      matching the `userId` of the todo with the `id` of the user. User objects may look


const api = [
  "https://jsonplaceholder.typicode.com/users",
  "https://jsonplaceholder.typicode.com/todos",
];

const fetchUserTodos = async (url) => {
  const toDos = url.map((elem) =>
    fetch(elem).then((resolvedData) => resolvedData.json())
  );
  return Promise.all(toDos);
  
};
fetchUserTodos(api)
  .then((getData) => {
    const[user,toDos] = getData
   const userObject = user.map((user)=>({
    userId:user.id,
    userName:user.name,
    theToDos:toDos.filter(todo=> todo.userId===user.id)
   }))
   console.log(JSON.stringify(userObject,null,2))
  }
  )
  .catch((err) => console.log(err));

