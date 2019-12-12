 class List {

    constructor(html_list, active_class) {
        this.active_class = active_class;
        this.list = html_list;
    }
    add_All(elements, click){
        if(!elements)
            return;

        for(const element of elements)
            this.add(element, click);
    }
    add(element, click, addElement = null){
        const li = document.createElement('li');
        li.textContent = element.text;
        li.setAttribute('values', JSON.stringify(element));
        if(element.class)
            li.classList.add(element.class);
        if(element.innerHTML)
            li.innerHTML = element.innerHTML;
        for(const style in element.style)
            li.style[style] = element.style[style]

        li.addEventListener('click', (e)=>{
            this.firstactive = true;
            
            if(!element.not_active){
                const oldelemnt = this.list.querySelector('.' + this.active_class);
                if(oldelemnt)
                    oldelemnt.classList.remove(this.active_class);

                getLi(e.target).classList.add(this.active_class);

            }
            click(JSON.parse(e.target.getAttribute('values')));
        });
        if(!this.list.querySelector('li:first-of-type') && !element.notfirstActive){
            li.classList.add(this.active_class);
            this.firstactive = true;

            click(element);
        }
        this.list.appendChild(li);

        if(addElement)
            addElement(li);

        function getLi(child){
            if(child.nodeName  == 'LI')
                return child;

            return getLi(child.parentNode);
        }
    }
    clear(){
        this.list.innerHTML = '';
    }

}
