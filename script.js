const emailsElem = document.getElementById("emails");



   for (let i = 0; i < 10; i++){
axios
  .get("https://flynn.boolean.careers/exercises/api/random/mail")
  .then((resp) => {
    const mail = resp.data.response;
emailsElem.innerHTML += `<li>${mail}</li>`;    
  });
}
