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

document.querySelector("li").className="list-group-item list-group-item-danger";

document.querySelector("li").classList.add("active");

