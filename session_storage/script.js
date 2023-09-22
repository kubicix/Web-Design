
// Tarayıcı Depolama Alanları


// Session Storage

const add= document.querySelector("#add");
const del= document.querySelector("#delete");
const clear= document.querySelector("#clear");

const addkey=document.querySelector("#addkey");
const addvalue=document.querySelector("#addvalue");
const deletekey=document.querySelector("#deletekey");

add.addEventListener("click",addItem);
del.addEventListener("click",deleteItem);
clear.addEventListener("click",clearItems);

function addItem(e){
    sessionStorage.setItem(addkey.value,addvalue.value);
}

function deleteItem(e){
    sessionStorage.removeItem(deletekey.value);
}

function clearItems(e){
    sessionStorage.clear()
}

// Local Storage

// setItem

localStorage.setItem('coding', 'Javascript'); 
localStorage.setItem('computer', 'Monster Abra'); 
localStorage.setItem('bitcoin', 25000); 

// getItem

const value = localStorage.getItem("coding")

console.log(value)

// Clearing Local Storage

// localStorage.clear()
localStorage.getItem("gold")

const val = "bitcoin";
if(localStorage.getItem(val)===null){
    console.log(`there is no element named "${val}" in local storage!`)
}
else{
    console.log(`"${val}" element found in a local storage`)
}