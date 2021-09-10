// nav bar toggling 
const button = document.getElementById('toggleBtn');
const navUl = document.getElementById('nav-ul');
const cancelBtn = document.getElementById('cancel-btn');
button.addEventListener('click', ()=>{
    navUl.classList.add('active')
    button.classList.add('active')
})
cancelBtn.addEventListener('click', ()=>{
    navUl.classList.remove('active')
    button.classList.remove('active')
})

// active navlink 
const navLink = document.querySelectorAll('.nav-link');
function actionLink(){
    navLink.forEach((n) => {
        n.classList.remove('active')
    });
    this.classList.add('active')
};
navLink.forEach(n => n.addEventListener('click', actionLink))

// about section
const aboutTab = ()=>{
    const tabs = document.querySelector('.tabs');
    const tabContent = document.querySelectorAll('.tab-content')

    tabs.addEventListener('click' , (event)=>{
        if(event.target.classList.contains('tab-item') && !event.target.classList.contains('active')){
            tabs.querySelector('.active').classList.remove('active');
            event.target.classList.add('active');
            
            // deactivate the other tabs mnd showing another
            const contents = event.target.getAttribute("data-target");
            tabContent.forEach((items)=>{
                if(contents === items.getAttribute('data-category')){
                    items.classList.add('active')
                }
                else{
                    items.classList.remove('active')
                }
            })
     
        }
    })
}
aboutTab()

// scroll to top function 
function scrollToTop (){
    let scrollTopBtn = document.querySelector('#scrollBtn')
    window.onscroll = function(){
        let scroll = document.documentElement.scrollTop;
        if(scroll >= 256){
            scrollTopBtn.classList.add('active');
        }
        else{
            scrollTopBtn.classList.remove('active');
        }
    }
}
scrollToTop();

// animation 
// window.sr = new ScrollReveal({origin:'top',distance: '80px', duration: 2000, reset: true});
// sr.reveal('.home-container',{});
// sr.reveal('.home-img',{delay:400});

// sr.reveal('.about-img',{interval:200});
// sr.reveal('.my-info',{delay:300});
// sr.reveal('.left-skill',{delay: 100});
// sr.reveal('.right-skill',{delay: 100});
