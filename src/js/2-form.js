const storageKea = "feedback-form-state";
const form = document.querySelector(".feedback-form");
const textarea = form.querySelector("textarea");
form.addEventListener("input", formHandleInput);
function formHandleInput(event) {
    event.preventDefault()
    const text = textarea.value;
    const name = form.elements.name.value;
    const data = JSON.stringify({ text, name });
    localStorage.setItem(storageKea, data);
}
const jsn = localStorage.getItem(storageKea);
const data = JSON.parse(jsn);
textarea.value = data.text;
form.elements.name.value = data.name;
