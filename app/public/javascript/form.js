

fetch("../Json/form.json")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    document.getElementById("f_title").textContent = data.title
    document.getElementById("f_para").textContent = data.p
    document.getElementById("L_Name").textContent = data.Name
    document.getElementById("L_Email").textContent = data.Email
    document.querySelector(".Message").textContent = data.Message
    console.log("All the content has been loaded")
  })
  .catch(error => {
    console.error("Error loading the form data:", error);
});


let myName = document.getElementById("Name");
let myEmail = document.getElementById("Email");
let myForm = document.getElementById("myForm");
let message = document.querySelector(".Message")


emailjs.init("-tJ4eKhSShdT9hX2s"); //Public key


myForm.addEventListener('submit', (e)=>{

  e.preventDefault();

  emailjs.sendForm("service_gd4wmb6", "template_0xcc13h", myForm)
    .then(function(response) {

    message.textContent=`Thank you for subscribing! Check your inbox for a welcome email.`;
    }, function(error) {

    // Error handling if email fails to send
    message.textContent = "Oops! Something went wrong. Please try again later.";
    console.error("Email sending failed:", error);
    
  });

});

const formEl = document.querySelector('form');

formEl.addEventListener('submit', event => {
  event.preventDefault();

  const formData = new FormData(formEl);
  const data = Object.fromEntries(formData.entries()); 

  fetch('https://reqres.in/api/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data), 
  })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
});