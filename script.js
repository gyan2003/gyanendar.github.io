 
let link=document.querySelectorAll('.nav-menu a');
console.log(link);
var interval;
for(var i=0;i<link.length;i++)
{
    
    link[i].addEventListener('click',function(e){
      e.preventDefault();
      var sectionId=this.textContent.trim().toLowerCase();
      console.log(sectionId);
      var section=document.getElementById(sectionId);
      console.log(section);
      interval=setInterval(scrollVertically, 15,section);
      
    });
}
function scrollVertically(section) {
    var SectionCoordinates=section.getBoundingClientRect();
        if(SectionCoordinates.top<=20)
        {
            clearInterval(interval);
            return;
        }
        window.scrollBy(0,50);
}
 
 /*--------------SKILL BAR------------- */
 
 var skillContainer=document.querySelector('.skills-container');
 var progress=document.querySelectorAll('.skillSet>div')
 var animationDone=false;
 window.addEventListener('scroll',checkScroll);

// intitialising width of bars to zero
 function intialiseBars() {
    for(let bar of progress)
    {
        bar.style.width=0+'%';
    }
 }
 intialiseBars();
 function fillBars() {
    for(let bar of progress)
    {
          let targetWidth=bar.getAttribute('data-bar-width');
          let currentWidth=0;
          let barInterval=setInterval(function(){
                    if(currentWidth>targetWidth)
                    {
                        clearInterval(barInterval);
                        return;
                    }
                    currentWidth++;
                    bar.style.width=currentWidth+'%';
          },10);
    }
 }

 function checkScroll() {
    /* Whether skill container is visible or not */
    var coordinates=skillContainer.getBoundingClientRect();
    if(!animationDone&&coordinates.top< window.innerHeight)  //window.innerHeight gives us the viewport height
    {
        animationDone=true;
        console.log('Skill Section is visible');
           fillBars();
    }
    else if(coordinates.top> window.innerHeight)
    {
        animationDone=false;
        intialiseBars();
    }
    
 }