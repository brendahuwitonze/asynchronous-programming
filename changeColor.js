function changeBg(){
        setInterval(()=>{
         let randomBg = "#"+Math.floor(Math.random()*7664).toString(16)
         document.body.style.backgroundColor=randomBg
        },1000)
       
}
changeBg()
