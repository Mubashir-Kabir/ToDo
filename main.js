document.getElementById("addBtn").addEventListener("click", function () {
  if (
    document.getElementById("inputField").value == "" ||
    document.getElementById("inputField").value == " " ||
    document.getElementById("inputField").value == "  " ||
    document.getElementById("inputField").value == "   "
  ) {
    alert("Can not be empty!!");
    document.getElementById("inputField").value = "";
    return;
  }
  const parent = document.getElementById("parent");
  const newItem = document.getElementById("inputField").value;
  document.getElementById("inputField").value = "";
  const newHtml = document.createElement("li");
  newHtml.innerHTML = `
  <li class="flex justify-between items-center border-b-2 border-white listItem">
            <span
              ><input type="checkbox" class="mr-4 tick" />${newItem}</span
            >
            <button
              class="bg-red-500 my-2 py-1 px-3 text-white rounded-md hover:bg-red-400 removeBtn"
            >
              Remove
            </button>
          </li>
  `;
  parent.appendChild(newHtml);

  const buttons = document.getElementsByClassName("removeBtn");
  for (const button of buttons) {
    button.addEventListener("click", function (event) {
      event.target.parentNode.style.display = "none";
    });
  }

  const boxes = document.getElementsByClassName("tick");
  for (const box of boxes) {
    box.addEventListener("click", function (event) {
      if (event.target.checked) {
        event.target.parentNode.style.textDecoration = "line-through";
      } else {
        event.target.parentNode.style.textDecoration = "none";
      }
    });
  }
});

document.getElementById("clear").addEventListener("click", function () {
  const items = document.getElementsByClassName("listItem");
  for (const item of items) {
    item.style.display = "none";
  }
  //   document.getElementById("parent").style.display = "none";
});
