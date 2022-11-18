const addBtn = document.querySelector(".btn");
const todoList = document.querySelector(".lists.incompleted");
const DoneList = document.querySelector(".lists.completed");

const addTodo = () => {
  const input = document.querySelector(".input");
  const inputTxt = input.value;

  const liContents = `<li class="list">
  <i class="ri-checkbox-circle-line"></i>
  <p>${inputTxt}</p>
  <span class="delete-icon"
    ><i class="ri-delete-bin-fill"> </i
  ></span>
</li>`;

  if (inputTxt == "") alert("할 일을 입력하세요");
  else {
    todoList.insertAdjacentHTML("afterbegin", liContents);
    input.value = "";
  }

  const deleteIcon = document.querySelectorAll(".delete-icon");
  const todoAll = document.querySelectorAll(".ri-checkbox-circle-line");

  deleteIcon.forEach((item) =>
    item.addEventListener("click", () => {
      item.parentNode.remove();
    })
  );

  todoAll.forEach((item) =>
    item.addEventListener("click", () => {
      item.parentNode.remove();
      toggleItem(item.parentNode);
    })
  );
};

const toggleItem = (data) => {
  DoneList.insertAdjacentElement("afterbegin", data);
};

addBtn.addEventListener("click", addTodo);
