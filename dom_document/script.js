// let veri;

// veri = window.document;
// veri = window.document.head;
// veri = window.document.body;
// veri = window.document.URL;
// veri = window.document.domain;
// veri = window.document.images;
// veri = window.document.forms;
// veri = window.document.forms[0].id;
// veri = window.document.forms[0].method;
// veri = window.document.forms[0].action;
// veri = window.document.scripts;
// veri = window.document.scripts[2];

// console.log(veri);

// Selecting elements

// -- SELECTING ONE ELEMENT

// document.getElementById() method

let vei;

// veri = document.getElementById("header");
// veri = document.getElementById("header").id;
// veri = document.getElementById("header").className;

// veri = document.getElementById("header");

// veri = veri.id;
// veri = veri.className;

// veri.style.color = "blue";
// veri.style.fontSize = "50px";
// veri.style.fontWeight = "bold";
// veri.style.display = "none";

// document.getElementById("header").innerText="Bucket List";
// document.getElementById("header").innerText="<b>Bucket List</b>"
// document.getElementById("header").innerHTML="<b>ToDo List</b>"

// console.log(veri)

// document.querySelector() method

// console.log(document.querySelector("#header"));
// console.log(document.querySelector(".card-header"));
// console.log(document.querySelector("div"));

// document.querySelector("li").style.color="blue";
// document.querySelector("li:last-child").style.color="red";
// document.querySelector("li:nth-child(2)").style.color="green";

// document.querySelector("li").className="list-group-item list-group-item-danger";

// document.querySelector("li").classList.add("active");

// -- Selecting Multiple Elements --

// document.getElementsByClassName()

// let veri;

// veri = document.getElementsByClassName("list-group-item")
// veri = document.getElementsByClassName("list-group-item")[0]
// veri = document.getElementsByClassName("list-group-item")[2]

// veri=veri[2]
// veri[1].style.fontSize="30px";
// veri[1].style.color="red";
// veri[2].textContent="new item";

// for(let i =0;veri.length;i++){
//     console.log(veri[i].style.color="orange")
//     console.log(veri[i].textContent="new items")
// }

// document.getElementsByTagName()

// veri = document.getElementsByTagName("li");
// veri = document.getElementsByTagName("a");
// veri = document.getElementById("task-list").getElementsByTagName("a");

// document.querySelectorAll()

// veri=document.querySelectorAll("li");

// veri.forEach(function(item,index){
//     item.textContent=`${index}-item`;
// })

// console.log(veri);

// Travelling through items

// let value;

// const todoList=document.querySelector(".list-group");
// const todo=document.querySelector(".list-group-item:nth-child(2)");
// const card=document.querySelector(".card");


// value = todoList;
// value = todo;
// value = card;

// // Child Nodes

// //childNodes will get all the elements
// value = todoList.childNodes;
// //children will only get list items,elements
// value = todoList.children;
// value = todoList.children[0];
// value = todoList.children[todoList.children.length - 1];
// value = todoList.children[1].textContent="changed item";

// value = card;
// value = card.children;
// value = card.children[1].children[0].textContent="Greetings";

// value = todoList;
// // value = todoList.children[0];
// value = todoList.firstElementChild;
// // value = todoList.lastElementChild;

// value = todoList.children.length;
// value = todoList.childElementCount;

// value=card;
// value=card.parentElement;
// value=card.parentElement.parentElement;

// value = todo;
// value=todo.nextElementSibling.nextElementSibling;
// value=todo.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling;



// console.log(value);

// Creating Elements

// const li = document.createElement("li");

// // Adding Class

// li.className="list-group-item list-group-item-secondary";

// // Adding Attribute

// li.setAttribute("title","new item");
// li.setAttribute("data-id","5");

// const text = document.createTextNode("Todo 5");

// li.appendChild(text);

// const a = document.createElement("a");
// a.setAttribute("href","#");
// a.className="delete-item float-right";
// a.innerHTML="<i class='fas fa-times'></i>"

// li.appendChild(a);

// document.querySelector("#task-list").appendChild(li)


// console.log(li)

// Deleting Elements

// const taskList= document.querySelector("#task-list");

// taskList.remove();

// taskList.childNodes[7].remove();

//  taskList.children[2].remove()

// taskList.removeChild(taskList.children[0]);

// Attribute Silme

// taskList.children[1].removeAttribute("class")

// for(let i=0;i<taskList.children.length;i++){
//     taskList.children[i].removeAttribute("class")
// }

// console.log(taskList);

// Updating Elements

// const cardHeader = document.querySelector(".card-header");

// const h2 = document.createElement("h2");
// h2.setAttribute("class","card-header");
// h2.appendChild(document.createTextNode("New Lists"));

// const parent = document.querySelector(".card");
// parent.replaceChild(h2,cardHeader);

// // Updating elements on classes

// const taskList=document.querySelector("#task-list");

// let value;

// link = taskList.children[0].children[0];
// value=link.className;
// value=link.classList;
// // value=link.classList[0]
// // value=link.classList[1]

// link.classList.add("new");
// link.classList.remove("new");

// // Updating Attributes

// value=link.getAttribute("href");
// value=link.setAttribute("href","https://instagram.com/kubilaybirer");

// value=link.hasAttribute("href");


// console.log(value)

// Event Listener and Event Object

const btn=document.querySelector("#btnDeleteAll")
const btn2=document.querySelector("#btnAddNewTask")

//  btn.addEventListener("click",function(){
//     console.log('clicked')
//  })

// btn.addEventListener("mouseover",btnHover);
// btn2.addEventListener("mouseover",btnHover)

// function btnHover(){
//     console.log("hovered")
// }

btn.addEventListener("click",function(a){
    let value;

    value=a;
    value=a.target;
    value=a.target.id;
    value=a.target.classList;
    value=a.type;

    a.preventDefault();
    console.log(value)

    
})


