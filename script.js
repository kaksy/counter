let count = 0

let value = document.querySelector('.value')
let button = document.querySelectorAll('.btn')
// console.log(button);

button.forEach((btn)=>{
    btn.addEventListener('click',(e)=>{
        let style =e.currentTarget.classList;
        if (style.contains('decrease')){
            count--
        }
        
        else if(style.contains('increase')){
           count++
        }
        else{
            count=0
        }
        value.innerHTML = count
    })
})