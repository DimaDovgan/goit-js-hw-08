const throttle = require('lodash.throttle');
const input = document.querySelector("form.feedback-form")
const email = document.querySelector("input[name=email]")
const message = document.querySelector("textarea[name=message]")
const keyObj = "feedback-form-state";


const save = (key, value) => {
  try {
    const serializedState = JSON.stringify(value);
    localStorage.setItem(key, serializedState);
  } catch (error) {
    console.error("Set state error: ", error.message);
  }
};

const load = key => {
  try {
    const serializedState = localStorage.getItem(key);
    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (error) {
      console.error("Get state error: ", error.message);
      
  }
};
const remove = key => {
    try {
    localStorage.removeItem(key);
    
  } catch (error) {
    console.error("Get state error: ", error.message);
  }
}


if (load(keyObj) !== undefined) {
    
    email.value = load(keyObj).email;
    message.value = load(keyObj).message;
} 

const userObject = {
    email: "",
    message:""
}

const onInput = (Event) => {
    Event.preventDefault();
    console.log(userObject);
    userObject.email = email.value;
    userObject.message = message.value;
    save(keyObj, userObject);
    
}
const submitForm = (Event) => {
    Event.preventDefault();
    console.log(load(keyObj));
    email.value = "";
    message.value = "";
    remove(keyObj);

}
input.addEventListener("input", throttle(onInput,500));
input.addEventListener("submit", submitForm);
