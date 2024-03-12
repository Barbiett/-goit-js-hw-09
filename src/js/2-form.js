const storageKey = "feedback-form-state";
const form = document.querySelector(".feedback-form");
const dataFromLS = JSON.parse(localStorage.getItem(storageKey));
const message = form.elements.message;
const email = form.elements.email
if (dataFromLS) {
    message.value = dataFromLS.message
    email.value = dataFromLS.email
}
  function handleInput(event) {
    const currentMessage = message.value.trim();
    const currentEmail = email.value.trim();
    const dataToLS = JSON.stringify({email: currentEmail, message: currentMessage });
    localStorage.setItem(storageKey, dataToLS);
}
function handleSubmit(event) {
    event.preventDefault();
    console.log({ email: email.value, message: message.value })
    localStorage.removeItem(storageKey);
    form.reset();
}
form.addEventListener("input", handleInput);

form.addEventListener("submit", handleSubmit);

