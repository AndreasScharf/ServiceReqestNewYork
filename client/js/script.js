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
    list.add({innerHTML: '<a href="#navbar">Real estate investor</a>'}, (e)=>{
        div1.style.display = 'block';
        div2.style.display = 'none';
        div3.style.display = 'none';
    }, addHreff);
    list.add({innerHTML: '<a href="#navbar">Verwender2</a>'}, (e)=>{
        div1.style.display = 'none';
        div2.style.display = 'block';
        div3.style.display = 'none'
    }, addHreff);
    list.add({innerHTML: '<a href="#navbar">Verwender3</a>'}, (e)=>{
        div1.style.display = 'none';
        div2.style.display = 'none';
        div3.style.display = 'block';
    }, addHreff);


});
