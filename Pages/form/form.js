

fetch("form.json")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    document.getElementById("f_title").textContent = data.title
    document.getElementById("Name").textContent = data.Name
    document.getElementById("Email").textContent = data.Email
    document.querySelector(".Message").textContent = data.Message
  })
  .catch(error => {
    console.error("Error loading the form data:", error);
});

