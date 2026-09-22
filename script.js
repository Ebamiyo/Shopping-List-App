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

    li.style.marginBottom = "0.5rem"; //style li with margin bottom
    span.style.marginRight = "0.5rem"; //style span with margin right

    ul.appendChild(li);

    shoppingInput.value = ""; //clear the input field

    //Dynamic paragraph output based on the number of shopping items on the list
    if (shoppingList.length === 1) {
      para.textContent = `You have ${shoppingList.length} item in your shopping list`;
    } else
      para.textContent = `You have ${shoppingList.length} items in your shopping list`;

    //The shopping item deletion
    button.addEventListener("click", () => {
      li.remove(); //remove the whole li of this particular delete button
      //we need to delete the item from the array
      const itemIndex = shoppingList.indexOf(span); //get the index of span value of this li of this particular delete button, in the array. Note we are just checking the index of a word but in this case the input value in the span that was assigned above
      shoppingList.splice(itemIndex, 1); //delete the value using the index of the value gotten with indexOf

      //Dynamic paragraph output based on the number of shopping items on the list
      if (shoppingList.length === 0) {
        para.textContent = `Your shopping list is now empty`;
      } else if (shoppingList.length === 1) {
        para.textContent = `You have ${shoppingList.length} item in your shopping list`;
      } else
        para.textContent = `You have ${shoppingList.length} items in your shopping list`;
    });
  } else {
    para2.textContent = "Enter a text";
    section.insertBefore(para2, para); //place para2 before para
  }
  shoppingInput.focus();
  console.log(shoppingList);
});
