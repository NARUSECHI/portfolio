const button_top = document.getElementById('button-top');
const autoScroll_top = function(){
    window.scrollTo(0,0);
};
button_top.addEventListener('click',autoScroll_top);
setTimeout(autoScroll_top,1)

const button_skill = document.getElementById('button-skill');
const autoScroll_skill = function(){
    window.scrollTo(0,800);
};
button_skill.addEventListener('click',autoScroll_skill);
setTimeout(autoScroll_skill,1)

const button_work = document.getElementById('button-work');
const autoScroll_work = function(){
    window.scrollTo(0,1000);
};
button_work.addEventListener('click',autoScroll_work);
setTimeout(autoScroll_work,1)

const button_contact = document.getElementById('button-contact');
const autoScroll_contact = function(){
    window.scrollTo(0,0);
};
button_contact.addEventListener('click',autoScroll_contact);
setTimeout(autoScroll_contact,1)