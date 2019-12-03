const socket = io();
document.addEventListener('DOMContentLoaded', (e)=>{
    const div1 = document.querySelector('.div1');
    const div2 = document.querySelector('.div2');
    const div3 = document.querySelector('.div3');

    const list = new List(document.querySelector('.navbar'), 'active');
    list.clear();
    list.add({text:'<-', class:'nachoben', notfirstActive:'hier steht was drinn', not_active:'no'}, (e)=>{
        document.querySelector('.description').classList.remove('hide');

    });
    list.add({text: 'Real estate investor'}, (e)=>{
        div1.style.display = 'block';
        div2.style.display = 'none';
        div3.style.display = 'none';
        shrinkdescription();
    });
    list.add({text: 'Verwender2'}, (e)=>{
        div1.style.display = 'none';
        div2.style.display = 'block';
        div3.style.display = 'none';
    });
    list.add({text: 'Verwender3'}, (e)=>{
        div1.style.display = 'none';
        div2.style.display = 'none';
        div3.style.display = 'block';
    });

    function shrinkdescription(){
        document.querySelector('.description').classList.add('hide');
    }
});
