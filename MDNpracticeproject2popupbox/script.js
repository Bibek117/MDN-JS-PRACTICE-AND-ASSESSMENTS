const popButton = document.querySelector('#mainbutton');
let displayMessage = (msgText,msgType) =>{
    const html = document.querySelector('html');
    const popBox = document.createElement('div');
    popBox.setAttribute('class','msgBox');
    html.appendChild(popBox);
    const msg = document.createElement('p');
    msg.textContent = msgText;
    popBox.appendChild(msg);
    const xbutton = document.createElement('button');
    xbutton.textContent = "X";
    popBox.appendChild(xbutton);
    popButton.disabled = true;
    xbutton.onclick = () =>{
        popButton.disabled = false;
        popBox.parentNode.removeChild(popBox);
    }
    if(msgType==="warning"){
        msg.style.backgroundImage = 'url(warning.png)';
        msg.style.color = 'red';
    }else if(msgType==="chat"){
        msg.style.backgroundImage = 'url(chat.png)';
        msg.style.color = 'green';
    }else{
        msg.style.paddingLeft = '25px';
    }
}
popButton.onclick = ()=>{
    displayMessage('Hemlo hooman!','chat');
}
