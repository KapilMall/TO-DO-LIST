const submit = document.querySelector("#submit");
const clearList = document.querySelector("#clearList");
let input = document.querySelector("#input");
const listItemsContainer = document.querySelector('.list-item-container');
let listItems = [];
const popupContainer = document.querySelector('.pop-up-container');
const innerText = document.querySelector('.text-content');
const popupcloseButton = document.querySelector('.popupCloseButton');

submit.addEventListener('click', ()=> {
	if(input.value === ""){
		alert("Enter an item.");	
	}
	else
	{	
		//Creating a div to store to-do tasks
		let listItemHolder = document.createElement('div');
		listItemHolder.classList.add('listItemHolder');
	    let listItem = document.createElement('div');
		listItem.textContent = input.value;
		listItem.classList.add('listItems');
		listItemHolder.appendChild(listItem);

		//Container for show-delete button
		let div = document.createElement('div');
		div.classList.add('show-delete-container');
		listItemHolder.appendChild(div);

		//Creating show content button
		let showItem = document.createElement('img');
		showItem.type = 'button';
		showItem.src = 'play.svg';
		showItem.classList.add('playCircle');
		div.appendChild(showItem);
		showItem.onclick = () => {
			popupContainer.style.display = "block";
			innerText.textContent = listItem.textContent;
			popupcloseButton.addEventListener('click', () => {
				popupContainer.style.display = "none";
				innerText.textContent = "";
			});
		}

		//Creating a delete button
		let deleteItem = document.createElement('div');
		deleteItem.type = "button";	
		deleteItem.innerHTML = "&times;";
		deleteItem.classList.add('deleteItem');

		//appending delete button to list-item
		div.appendChild(deleteItem);

		//appending newly created div to list container
		listItemsContainer.appendChild(listItemHolder);
		input.value="";

		//pushing each list item inside an array
		listItems.push(listItemHolder);

		//To delete an item from the list
		deleteItem.addEventListener('click', (event) => {
			listItemHolder.parentNode.removeChild(listItemHolder);
			const index = listItems.indexOf(listItemHolder);
			listItems.splice(index, 1);
			console.log(listItems);
		});
	}
})

clearList.addEventListener('click', () => {
	function removeAll(parent){
		while(parent.firstChild){
			parent.removeChild(parent.firstChild);
		}
	}

	removeAll(listItemsContainer);
	listItems = [];
});






