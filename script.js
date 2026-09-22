const ul = document.querySelector("ul");
const shoppingInput = document.querySelector("input");
const para = document.querySelector(".summary");
const sumbitButton = document.querySelector(".add-btn");
const section = document.querySelector("section");
const para2 = document.createElement("p");

const shoppingList = [];

sumbitButton.addEventListener("click", (event) => {
  event.preventDefault(); //when button is clicked, prevent the default behaviour of the button, in this case: refreshing the page after "submission"
  if (shoppingInput.value != "") {
    para2.remove(); //remove the Enter a text paragraph if it has been created in the else statement,
    shoppingList.push(shoppingInput.value); //add the current text of the input field to the array
    const li = document.createElement("li"); //create an li element
    const span = document.createElement("span");
    const button = document.createElement("button");
    li.append(span, button);
    span.textContent = shoppingInput.value;
    button.textContent = "Delete";
    ul.appendChild(li);
    shoppingInput.value = ""; //clear the input field
    if (shoppingList.length === 1) {
      para.textContent = `You have ${shoppingList.length} item in your shopping list`;
    } else
      para.textContent = `You have ${shoppingList.length} items in your shopping list`;
    button.addEventListener("click", () => {
      li.remove(); //remove the whole li of this particular delete button
      //we need to delete the item from the array
      const itemIndex = shoppingList.indexOf(span); //get the index of span value of this li of this particular delete button, in the array. Note we are just checking the index of a word but in this case the input value in the span that was assigned above
      shoppingList.splice(itemIndex, 1); //delete the value using the index of the value gotten with indexOf
      if (shoppingList.length === 0) {
        para.textContent = `Your shopping list is now empty`;
      } else if (shoppingList.length === 1) {
        para.textContent = `You have ${shoppingList.length} item in your shopping list`;
      } else
        para.textContent = `You have ${shoppingList.length} items in your shopping list`;

      // para.textContent = shoppingList; //the paragragph is now the current state of the array
    });
  } else {
    para2.textContent = "Enter a text";
    // section.appendChild(para2);
    section.insertBefore(para2, para);
  }

  //   para.textContent = shoppingList;

  console.log(shoppingList);
});
