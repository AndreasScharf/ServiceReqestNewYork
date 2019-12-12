const socket = io();
document.addEventListener('DOMContentLoaded', (e)=>{
    const div1 = document.querySelector('.div1');
    const div2 = document.querySelector('.div2');
    const div3 = document.querySelector('.div3');

    const list = new List(document.querySelector('.navbar'), 'active');
    list.clear();
    //list.add({text:'', class:'nachoben'}, (e)=>{
    //    document.querySelector('.description').classList.remove('hide');
    //});
    function addHreff(e){
    }
    list.add({innerHTML: '<a href="#navbar">Real Estate Investors</a>'}, (e)=>{
        div1.style.display = 'block';
        div2.style.display = 'none';
        div3.style.display = 'none';
    }, addHreff);
    list.add({innerHTML: '<a href="#navbar">Urban City Planers</a>'}, (e)=>{
        div1.style.display = 'none';
        div2.style.display = 'block';
        div3.style.display = 'none';
        var divElement = document.getElementById('viz1576110827614');
        var vizElement = divElement.getElementsByTagName('object')[0];
            vizElement.style.width='100%';vizElement.style.height=(divElement.offsetWidth*0.75)+'px';
        var scriptElement = document.createElement('script');                    
            scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
            vizElement.parentNode.insertBefore(scriptElement, vizElement);

        var divElement = document.getElementById('viz1576112133959');                    
        var vizElement = divElement.getElementsByTagName('object')[0];                    
            vizElement.style.width='100%';vizElement.style.height=(divElement.offsetWidth*0.75)+'px';                    
        var scriptElement = document.createElement('script');                    
            scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';                    
            vizElement.parentNode.insertBefore(scriptElement, vizElement); 

        var divElement = document.getElementById('viz1576112613718');                    
        var vizElement = divElement.getElementsByTagName('object')[0];                    
            vizElement.style.width='100%';vizElement.style.height=(divElement.offsetWidth*0.75)+'px';                    
        var scriptElement = document.createElement('script');                    
            scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
            vizElement.parentNode.insertBefore(scriptElement, vizElement);

        var divElement = document.getElementById('viz1576112770769');                    
        var vizElement = divElement.getElementsByTagName('object')[0];
            vizElement.style.width='100%';vizElement.style.height=(divElement.offsetWidth*0.75)+'px';                    
        var scriptElement = document.createElement('script');                    
            scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
            vizElement.parentNode.insertBefore(scriptElement, vizElement); 

        var divElement = document.getElementById('viz1576113283083');                    
        var vizElement = divElement.getElementsByTagName('object')[0];                    
            vizElement.style.width='100%';vizElement.style.height=(divElement.offsetWidth*0.75)+'px';                    
        var scriptElement = document.createElement('script');                           
            scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
            vizElement.parentNode.insertBefore(scriptElement, vizElement);  


    }, addHreff);


    list.add({innerHTML: '<a href="#navbar">Current Citizens</a>'}, (e)=>{
        div1.style.display = 'none';
        div2.style.display = 'none';
        div3.style.display = 'block';

        var divElement = document.getElementById('viz1576147287964');                    
        var vizElement = divElement.getElementsByTagName('object')[0];                    
            vizElement.style.width='100%';vizElement.style.height=(divElement.offsetWidth*0.75)+'px';                    
        var scriptElement = document.createElement('script');                    
            scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';                    
            vizElement.parentNode.insertBefore(scriptElement, vizElement);

        var divElement = document.getElementById('viz1576148141328');                    
        var vizElement = divElement.getElementsByTagName('object')[0];                    
            vizElement.style.width='100%';vizElement.style.height=(divElement.offsetWidth*0.75)+'px';                    
        var scriptElement = document.createElement('script');                    
            scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';                    
            vizElement.parentNode.insertBefore(scriptElement, vizElement);

        var divElement = document.getElementById('viz1576149468698');                    
        var vizElement = divElement.getElementsByTagName('object')[0];                    
            vizElement.style.width='100%';vizElement.style.height=(divElement.offsetWidth*0.75)+'px';                    
        var scriptElement = document.createElement('script');                    
            scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';                    
            vizElement.parentNode.insertBefore(scriptElement, vizElement);

        var divElement = document.getElementById('viz1576148726616');                    
        var vizElement = divElement.getElementsByTagName('object')[0];                    
            vizElement.style.width='100%';vizElement.style.height=(divElement.offsetWidth*0.75)+'px';                    
        var scriptElement = document.createElement('script');                    
            scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';                    
            vizElement.parentNode.insertBefore(scriptElement, vizElement);

        var divElement = document.getElementById('viz1576148771928');                    
        var vizElement = divElement.getElementsByTagName('object')[0];                    
            vizElement.style.width='100%';vizElement.style.height=(divElement.offsetWidth*0.75)+'px';                    
        var scriptElement = document.createElement('script');                    
            scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';                    
            vizElement.parentNode.insertBefore(scriptElement, vizElement);

        var divElement = document.getElementById('viz1576149896137');                    
        var vizElement = divElement.getElementsByTagName('object')[0];                    
        if ( divElement.offsetWidth > 800 ) { vizElement.style.width='1000px';vizElement.style.height='827px';} 
        else if ( divElement.offsetWidth > 500 ) { vizElement.style.width='1000px';vizElement.style.height='827px';} 
        else { vizElement.style.width='100%';vizElement.style.height='727px';}                     
        var scriptElement = document.createElement('script');                    
        scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';                    
        vizElement.parentNode.insertBefore(scriptElement, vizElement);

    }, addHreff);


});
