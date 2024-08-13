let kitchenInput = document.getElementById("kitchen-input");
let addBtn = document.getElementById("add-btn");
let kitchenItemsList= document.getElementById("kitchen-items-list");




function addKitchenItems(){
    let kitchenInputData = kitchenInput.value;
    let li = document.createElement('li');
    li.innerText=kitchenInputData
    li.style.cssText='animation-name:slideIn';
    kitchenItemsList.appendChild(li);
    kitchenInput.value='';
    kitchenInput.focus();
    console.log(li);

    
}





addBtn.addEventListener("click",addKitchenItems);