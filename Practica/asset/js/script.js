var container = document.getElementById("c1");
container.innerText="Hola mundo!";
container.style.backgroundColor="#000000";
container.style.color="#1cb723";
container.style.width="200px";
container.style.height="200px";
container.innerHTML="<input type='text' placeholder='escriba su texto'>";

var containers = document.getElementsByClassName("c2");
for(let a of containers){
    a.style.backgroundColor="#009999";
    a.innerHTML="<input type='text' placeholder='escriba su texto'>";
}

