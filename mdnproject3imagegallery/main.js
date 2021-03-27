const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Looping through images */
var imageGallery = ['pic1.jpg','pic2.jpg','pic3.jpg','pic4.jpg','pic5.jpg'];
imageGallery.forEach((value)=>{
const newImage = document.createElement('img');
newImage.setAttribute('src', `images/${value}`);
thumbBar.appendChild(newImage);
});
thumbBar.addEventListener('click',(e)=>{
    if(e.target && e.target.nodeName == "IMG"){
        //console.log(e.target.src);
        displayedImage.src = e.target.src;
    }
})

/* Wiring up the Darken/Lighten button */
btn.addEventListener('click',()=>{
    var choice = btn.getAttribute('class');
    if(choice== "dark"){
        btn.setAttribute('class','light');
        btn.textContent = "Lighten";
        overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    }else{
        btn.setAttribute('class','dark');
        btn.textContent = "Darken";
        overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }
});