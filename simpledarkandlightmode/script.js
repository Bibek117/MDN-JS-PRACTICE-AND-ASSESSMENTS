const select = document.querySelector('select');
const html = document.querySelector('body');

let update=(textColor,bgColor)=>{
    html.style.color = textColor;
    html.style.backgroundColor = bgColor;
}

select.onchange = ()=>{
    select.value==="black"?update('white','black'):update('black','white');
}