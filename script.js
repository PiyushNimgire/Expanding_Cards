let panelEle = Array.from(document.getElementsByClassName("panel"));

panelEle.forEach((panel)=>{
    panel.addEventListener('click', ()=> {
        removeActiveClasses();
        panel.classList.add('active');
    })
})

const removeActiveClasses = () => {
    panelEle.forEach((panel)=> {
        panel.classList.remove('active');
    })
}