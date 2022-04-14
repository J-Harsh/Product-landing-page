console.log("Eh");
const btnHam=document.querySelector('#btnHam');
const header=document.querySelector('.header');
const overlay=document.querySelector('.overlay');
const fadeEl=document.querySelectorAll('.has-fade');


btnHam.addEventListener('click',function()
{
    
    console.log("HamBurger clicked");

    if (header.classList.contains('open')) 
    {
        
        document.querySelector('body').style="overflow-y:visible";
        //close hamburger menu
        header.classList.remove('open');
        overlay.classList.remove('fade-in');
        overlay.classList.add('fade-out');
        fadeEl.forEach(function(element)
        {
            element.classList.remove('fade-in');
            element.classList.add('fade-out');
        });
    } 
    
    else 
    {
        document.querySelector('body').style="overflow-y:hidden";
        //open hamburger menu
        header.classList.add('open');
        overlay.classList.remove('fade-out');
        overlay.classList.add('fade-in');
        fadeEl.forEach(function(element)
        {
            element.classList.remove('fade-out');
            element.classList.add('fade-in');
        });
    }
});