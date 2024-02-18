const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        button.style.boxShadow = "0px 2px 3px rgba(0, 0, 0, 0.726), inset 0px 1px 3px rgba(255, 255, 255, 0.401)";
    });
    button.addEventListener('mouseout',()=>{
        button.style.boxShadow ="0px 4px 4px rgba(0, 0, 0, 0.726),inset 0px 1px 3px rgba(255, 255, 255, 0.201)";
    })
});


//selecting screen part: [results]&[Query]
const results=document.querySelector(".results");
const query=document.querySelector('.query');

query.contentEditable='True';
// results.innerText="39208";
// query.innerText="458*623-435";

//selecting all buttons
const AC=document.querySelector('#AC');
const Divide=document.querySelector('#Divide');
const Multiply=document.querySelector('#Multiply');
const Seven=document.querySelector('#Seven');
const Eight=document.querySelector('#Eight');
const Nine=document.querySelector('#Nine');
const Four=document.querySelector('#Four');
const Five=document.querySelector('#Five');
const Six=document.querySelector('#Six');
const One=document.querySelector('#One');
const Two=document.querySelector('#Two');
const Three=document.querySelector('#Three');
const o=document.querySelector('#o');
const Decimal=document.querySelector('#Decimal');
const Del=document.querySelector('#Del');
const Sub=document.querySelector('#Sub');
const Add=document.querySelector('#Add');
const Enter=document.querySelector('#Enter');
const close=document.querySelector('#close');

//adding evenlistner for respective
AC.addEventListener('click',()=>{
    query.innerText="";
})
Divide.addEventListener('click',()=>{
    query.innerText+="/";
})
Multiply.addEventListener('click',()=>{
    query.innerText+="*";
})
Seven.addEventListener('click',()=>{
    query.innerText+="7";
    results.innerText=eval(query.innerText);
})
Eight.addEventListener('click',()=>{
    query.innerText+="8";
    results.innerText=eval(query.innerText);
})
Nine.addEventListener('click',()=>{
    query.innerText+="9";
    results.innerText=eval(query.innerText);
})
Four.addEventListener('click',()=>{
    query.innerText+="4";
    results.innerText=eval(query.innerText);
})
Five.addEventListener('click',()=>{
    query.innerText+="5";
    results.innerText=eval(query.innerText);
})
Six.addEventListener('click',()=>{
    query.innerText+="6";
    results.innerText=eval(query.innerText);
})
One.addEventListener('click',()=>{
    query.innerText+="1";
    results.innerText=eval(query.innerText);
})
Two.addEventListener('click',()=>{
    query.innerText+="2";
    results.innerText=eval(query.innerText);
})
Three.addEventListener('click',()=>{
    query.innerText+="3";
    results.innerText=eval(query.innerText);
})
o.addEventListener('click',()=>{
    query.innerText+="0";
    results.innerText=eval(query.innerText);
})
Decimal.addEventListener('click',()=>{
    query.innerText+=".";
})
Del.addEventListener('click',()=>{
    let len=query.innerText.length;
    if(len>0){
        query.innerText=query.innerText.slice(0,-1);
    }
    results.innerText=eval(query.innerText);
})
Sub.addEventListener('click',()=>{
    query.innerText+="-";
})
Add.addEventListener('click',()=>{
    query.innerText+="+";
})
enter.addEventListener('click',()=>{
    results.innerText=eval(query.innerText);
    query.innerText="";
    
})
