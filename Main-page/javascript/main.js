// animation 

document.addEventListener('mousemove', function(e){
    this.querySelectorAll('.animation__subtitle').forEach(el=>{
        const score = el.getAttribute('data-score');
        const x = (window.innerWidth - e.pageX * 
            score) / 100;
        const y = (window.innerWidth - e.pageY * 
            score) / 100;

        el.style.transform = `
                    translateX(${x}px)
                    translateY(${y}px)
        `;
    })
});

// calculator

var result=document.getElementById('result');
    
function printHello(){
    var number=document.getElementById("number").value; 
    number=parseFloat(number);
    // result.innerHTML=12*number;
    result.innerHTML=12*number + " $ &nbsp | &nbsp " + 947*number;
}

var result2=document.getElementById('result2');

function printHello2(){
    var number2=document.getElementById('number2').value; 
    number2=parseFloat(number2);
    // result2.innerHTML=15*number2;
    result2.innerHTML=15*number2 + " $ &nbsp | &nbsp " + 1184*number2;
}


// scroll

const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors){
    anchor.addEventListener("click", function(event){
        event.preventDefault();
        const blockId = anchor.getAttribute('href')
        document.querySelector('' + blockId).scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
    })
}
