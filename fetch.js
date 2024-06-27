function print(){
    console.log('helo world')
}
const display = fetch('https://api.github.com/users/brendahuwitonze').then(res=>res.json)

print()