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

// const btn=document.querySelector("#btnDeleteAll")
// const btn2=document.querySelector("#btnAddNewTask")

//  btn.addEventListener("click",function(){
//     console.log('clicked')
//  })

// btn.addEventListener("mouseover",btnHover);
// btn2.addEventListener("mouseover",btnHover)

// function btnHover(){
//     console.log("hovered")
// }

// btn.addEventListener("click",function(a){
//     let value;

//     value=a;
//     value=a.target;
//     value=a.target.id;
//     value=a.target.classList;
//     value=a.type;

//     a.preventDefault();
//     console.log(value)


// })

// Mouse Events

// const btn=document.querySelector("#btnAddNewTask")
// const ul=document.querySelector("#task-list")

// click event

// btn.addEventListener("click",run);
// ul.addEventListener("click",run);

// double click event

// btn.addEventListener("dblclick",run);

// mouse down event

// btn.addEventListener("mousedown",run);

// mouse up event

// btn.addEventListener("mouseup",run);

// mouse enter event

//  ul.addEventListener("mouseenter",run);

// mouse leave event

// ul.addEventListener("mouseleave",run);

// mouse over event

// ul.addEventListener("mouseover",run);

// mouse out event

// ul.addEventListener("mouseout",run);

// mouse move event

// ul.addEventListener("mousemove",run);

// function run(event){
//     console.log(`event type: ${event.type}`);
// }

// const text =document.getElementById("txtTaskName")

// // Focus
// text.addEventListener("focus",run);

// // Blur
// text.addEventListener("blur",run)

// Paste
// text.addEventListener("paste",run)

// Copy
// text.addEventListener("copy",run)

// Cut
// text.addEventListener("cut",run)

// Select
// text.addEventListener("select",run)

// KeyDown
// text.addEventListener("keydown",run)

// // KeyUp
// text.addEventListener("keyup",run)



// function run(e){
//     console.log(e.type)
//     console.log(e.target.value)
//     e.target.value=""
// }

// Event Bubbling

// const form = document.querySelector("form");
// const cardBody=document.querySelector(".card-body");
// const card=document.querySelector(".card");
// const container=document.querySelector(".container");

// Event Capturing

// form.addEventListener("click",function(e){
//     console.log("form")
//     e.stopPropagation()
// })

// cardBody.addEventListener("click",function(e){
//     console.log("card body")
//     e.stopPropagation()
// })

// card.addEventListener("click",function(e){
//     console.log("card")
//     e.stopPropagation()
// })

// container.addEventListener("click",function(e){
//     console.log("container")
//     e.stopPropagation()
// })

// form.addEventListener("click",function(e){
//     console.log("form")
//     e.stopPropagation()
// },true)

// cardBody.addEventListener("click",function(e){
//     console.log("card body")
//     e.stopPropagation()
// },true)

// card.addEventListener("click",function(e){
//     console.log("card")
//     e.stopPropagation()
// },true)

// container.addEventListener("click",function(e){
//     console.log("container")
//     e.stopPropagation()
// },true)

// const deleteItems = document.querySelectorAll(".fa-times")

// deleteItems.forEach(function(item){
//     item.addEventListener("click",function(e){
//         console.log(e.target)
//     })
// });

// const ul =document.querySelector("ul");

// ul.addEventListener("click",function(e){
//     if(e.target.className === "fas fa-times"){
//         e.target.parentElement.parentElement.remove();
//     }
// });

// Adding Elements to ToDo

// selecting elements

const form = document.querySelector("form");
const input = document.querySelector("#txtTaskName");
const btnAddNewTask = document.querySelector("#btnAddNewTask");
const btnDeleteAll = document.querySelector("#btnDeleteAll");
const taskList = document.querySelector("#task-list");
// const items = ["Todo 1", "Todo 2", "Todo 3", "Todo 4","Todo 5","Todo 6"];
let todos;

// load items
loadItems();



eventListeners();

function eventListeners() {
    // submit event
    form.addEventListener("submit", addNewItem);
    // delete an item
    taskList.addEventListener("click", deleteItem)
    // delete all
    btnDeleteAll.addEventListener("click", deleteAllItems)
}

function loadItems() {
    todos =getItemsFromLS();
    todos.forEach(function (item) {
        createItem(item);
    })
}

function getItemsFromLS(){
    if(localStorage.getItem("todos")==null){
        todos=[];
    }
    else{
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    return todos;
}

function setItemToLS(text){
    todos=getItemsFromLS();
    todos.push(text);
    localStorage.setItem("todos",JSON.stringify(todos));
}

function createItem(text) {
    
    // creating li
    const li = document.createElement("li");
    li.className = "list-group-item list-group-item-secondary"
    li.appendChild(document.createTextNode(text));

    // creating a
    const a = document.createElement("a");
    a.classList = "delete-item float-right";
    a.setAttribute("href", "#");
    a.innerHTML = '<i class="fas fa-times"></i>';

    // adding a to li
    li.appendChild(a);

    taskList.appendChild(li);

    
}

function addNewItem(e) {
    console.log(input.value)
    if (input.value == "") {
        alert("you have to enter a value to submit")
    }
    
    // create item 

    createItem(input.value)

    setItemToLS(input.value)

    e.preventDefault();
    input.value = "";
}

// deleting an element
function deleteItem(e) {

    if (e.target.className == "fas fa-times") {
        console.log(e.target);
        if (confirm("Are you sure you want to delete?")) {
            e.target.parentElement.parentElement.remove();
            deleteTodoFromStorage(e.target.parentElement.parentElement.textContent);
        }

    }
    e.preventDefault();
}

function deleteTodoFromStorage(deletetodo){
    let todos = getItemsFromLS();
    todos.forEach(function(todo,index){
        if(todo === deletetodo ){
            todos.splice(index , 1 );
        }
    })
    localStorage.setItem('todos', JSON.stringify(todos));
}

// deleting all items
function deleteAllItems(e) {

    if (e.target.className == "btn btn-outline-primary btn-sm delete-all float-right") {
        if (confirm("Are you sure you want to delete all items?")) {
            while(taskList.firstChild){
                taskList.removeChild(taskList.firstChild);
            }
            localStorage.clear();
        }

    }
    e.preventDefault();
}