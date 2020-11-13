// set up current data year
const currentYear = document.getElementById('date');
const date = new Date().getFullYear();
currentYear.innerHTML = date; 

// set selected btns
const btns = document.querySelectorAll('.tab-btn');
const about = document.querySelector('.about');
const artical = document.querySelectorAll('.content');

about.addEventListener('click' , function(e){
    const id = e.target.dataset.id
    if (id){
        // remove active-btn from btns
        btns.forEach(function (btn){
            btn.classList.remove("active-btn");
            e.target.classList.add("active-btn");
        });
        // hide active content on articals
        artical.forEach(function (content){
            content.classList.remove("active");
        });
        const element = document.getElementById(id);
        console.log(element)
        element.classList.add("active");
    }
})