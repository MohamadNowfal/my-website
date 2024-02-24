
var tablinks=document.getElementsByClassName("tab-links")
var tabcontents=document.getElementsByClassName("tab-contents")

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove('active-link')
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove('active-tab')
    }

    event.currentTarget.classList.add('active-link')
    document.getElementById(tabname).classList.add('active-tab')
}

var sidemenu=document.getElementById("sidemenu")
function openmenu(){
    sidemenu.style.right="0";
}
function closemenu(){
    sidemenu.style.right="-200px";
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbwLESr-pb5nG0lcVCnFpNPpJpp4J4N9qNgEFkB9ZZEX21NzmtvwMrvd93bS_26_X_PZ/exec'
const form = document.forms['submit-to-google-sheet']
const msg=document.getElementById("msg")

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML="Message Sent Sucessfully"
        setTimeout(function(){
            msg.innerHTML=""
        },5000)
        form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})
function allwork() {
    var workDiv = document.getElementById("not-active");
    var workbtn=document.getElementById('not-active-btn')
    var workbtn1=document.getElementById('active-btn')

    if (workDiv.style.display === "none") {
        workDiv.style.display = "block";
        workbtn.style.display = "block";
        workbtn1.style.display = "none";
    } else {
        workDiv.style.display = "none";
        workbtn.style.display = "none";
        workbtn1.style.display = "block";


    }
}
