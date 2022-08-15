const h2 = document.createElement('h2');
h2.textContent = "This content added by Javascript";
document.querySelector("body").appendChild(h2);
const button = document.createElement('button');
button.textContent = "click me";
document.querySelector('body').append(button);
button.className = "btn-container";
const clickMe = document.querySelector('button');
clickMe.addEventListener('click', function(){
    alert(`Clicked already`);
});

