const menumobile = document.getElementById('menumobile')
const menuclick = document.getElementById('menuclick')
function toggleMenu() {
  if( menumobile.style.display == "none" )

    { menumobile.style.display = "block"}
    else 
    {menumobile.style = "display: none" }

}
menuclick.addEventListener('click', toggleMenu) 


let email = document.getElementById('email').value
let name = document.getElementById('name').value
let subject = document.getElementById('subject').value
let message = document.getElementById('message').value

const buttonSubmit = document.getElementById('buttonSubmit')

buttonSubmit.addEventListener('click', function send(){
  Email.send({
  Host : "smtp.elasticemail.com",
  Username : "",
  Password : "",
  To : "",
  From : email,
  Subject : subject,
  Body : message,
}).then(
message => alert(message)
);
})

