// let Arr=[]
// let n =Math.floor(Math.random()*10)+10
// for(let i=0;i<n;i++){
//     let item=Math.floor(Math.random()*90)+10
//     Arr.push(item)
// }
// console.log(Arr)
// ShowArray=()=>{
//     var array=ducument.getElementById("Array")
//     array.innerHTML=Arr
// }
// Sort=()=>{
//     var sortasc=Arr.sort()
//     ducument.getElementById("after").innerHTML=sortasc
// }
// Reverse=()=>{
//     var sordesc=Arr.sort().reverse()
//     ducument.getElementById("after").innerHTML=sordesc
// }
// Add=()=>{
//     let index=ducument.getElementById("index")
//     let value=ducument.getElementById("value")
//     Arr.splice(index.value,0,value.value)
//     ducument.getElementById("after").innerHTML=Arr
// }
let Arr = []
let n = Math.floor(Math.random() * 10) + 10
for(let i=0; i<n; i++){
    let item = Math.floor(Math.random() * 90) + 10   
    Arr.push(item)
}
console.log(Arr)
ShowArray = () => { 
    var array = document.getElementById("Array")
    array.innerHTML = Arr   
}

Sort  = () =>  {
    var sortasc = Arr.sort()
    document.getElementById("after").innerHTML = sortasc
}

Reverse  = () =>  {
    var sortdesc = Arr.sort().reverse()
    document.getElementById("after").innerHTML = sortdesc
}

Add = () => {
    let index = document.getElementById('index')
    let value = document.getElementById('value')

    Arr.splice(index.value, 0, value.value)
    document.getElementById("after").innerHTML = Arr
}
