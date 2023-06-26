const body = document.querySelector('body');
const sidebar = body.querySelector('nav');
const toggle = body.querySelector(".toggle");
const searchBtn = body.querySelector(".search-box");
const modeSwitch = body.querySelector(".toggle-switch");
const modeText = body.querySelector(".mode-text");
const contactLink = document.querySelector('.contactBtn');
const contactContent = document.getElementById('contact');
const homeLink = document.querySelector('.homeBtn');
const homeContent = document.querySelector('.homeText');


toggle.addEventListener("click" , () =>{
    sidebar.classList.toggle("close");
})

searchBtn.addEventListener("click" , () =>{
    sidebar.classList.remove("close");
})

modeSwitch.addEventListener("click" , () =>{
    body.classList.toggle("dark");
    
    if(body.classList.contains("dark")){
        modeText.innerText = "Light mode";
    }else{
        modeText.innerText = "Dark mode";
        
    }
});

    
contactContent.style.display = 'none';

contactLink.addEventListener('click', () => {
    homeContent.style.display = 'none';
    if (contactContent.style.display === 'none') {
        contactContent.style.display = 'block';
    } else {
        contactContent.style.display = 'none';
        homeContent.style.display = 'block';
    }
});

homeLink.addEventListener('click' , () => {
    contactContent.style.display = 'none';
    if (homeContent.style.display === 'none') {
        homeContent.style.display = 'block';
    }
});