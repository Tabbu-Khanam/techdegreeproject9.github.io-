function myFunction(imgs) {
 const model =  document.getElementById('img01');
 const caption = document.getElementById('caption');
  model.src = imgs.src;
  caption.innerHTML = imgs.alt;
  model.parentElement.style.display = "block";
  model.style.width = '70%';
  model.style.margin = 'auto';
}

const myMode = document.getElementById('myMode');
const span = document.getElementsByClassName('close')[0];
span.addEventListener('click', () => {
 myMode.style.display = 'none';
});

const input = document.getElementById('Username');
const email = document.getElementById('email');
const text = document.getElementById('message');
const btn = document.getElementById('send');

btn.addEventListener('click', () => {
  if(input.value === "" && email.value === "" && text.value === "") {
      alert('Please fills the blanks area!!');
  } else if (input.value === "") {
   alert("Please fill out user name before sending");
  } else if (email.value === "") {
    alert("Please fill out user email before sending");
  } else if (text.value === "") {
    alert("Please fill out message before sending");
  }   else {
    alert("Message successfully sent");
  }
  input.value = "";
  email.value = "";
  text.value = "";
});