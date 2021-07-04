const todos = document.querySelectorAll(".todo");
const allStatus = document.querySelectorAll(".status");
let draggableTodo = null;

todos.forEach((todo) => {
  todo.addEventListener("dragstart", dragStart);
  todo.addEventListener("dragend", dragEnd);
});

function dragStart() {
  draggableTodo = this;
  setTimeout(() => {
    this.style.display = "none";
  }, 0);

}

function dragEnd() {
  draggableTodo = null;
  setTimeout(() => {
    this.style.display = "block";
  }, 0);

}

allStatus.forEach((status) => {
  status.addEventListener("dragover", dragOver);
  status.addEventListener("dragenter", dragEnter);
  status.addEventListener("dragleave", dragLeave);
  status.addEventListener("drop", dragDrop);
});

function dragOver(e) {
  e.preventDefault();

}

function dragEnter() {
  this.style.border = "1px dashed #ccc";

}

function dragLeave() {
  this.style.border = "none";

}

function dragDrop() {
  this.style.border = "none";
  this.appendChild(draggableTodo);
}



const btns = document.querySelectorAll("[data-target-modal]");
const closeModals = document.querySelectorAll(".close-modal");
const overlay = document.getElementById("overlay");

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelector(btn.dataset.targetModal).classList.add("active");
    overlay.classList.add("active");
  });
});

closeModals.forEach((btn) => {
  btn.addEventListener("click", () => {
    const modal = btn.closest(".modal");
    modal.classList.remove("active");
    overlay.classList.remove("active");
  });
});

window.onclick = (event) => {
  if (event.target == overlay) {
    const modals = document.querySelectorAll(".modal");
    modals.forEach((modal) => modal.classList.remove("active"));
    overlay.classList.remove("active");
  }
};
const todoSubmit = document.getElementById("todo-submit");


todoSubmit.addEventListener("click", createTodo);

function createTodo() {

  let todo_div = document.createElement("div");
  const input_val = document.getElementById("todo-input").value;
  const txt = document.createTextNode(input_val);

  todo_div.appendChild(txt);
  todo_div.classList.add("todo");
  todo_div.setAttribute("draggable", "true");

  const span = document.createElement("span");
  const span_txt = document.createTextNode("\u00D7");
  span.classList.add("close");
  span.appendChild(span_txt);
  todo_div.appendChild(span);
  noStatus.appendChild(todo_div);

  span.addEventListener("click", () => {
    span.parentElement.style.display = "none";
  });
  todo_div.addEventListener("dragstart", dragStart);
  todo_div.addEventListener("dragend", dragEnd);
  todo_form.classList.remove("active");
  overlay.classList.remove("active");

}

const deleteElem = document.querySelectorAll(".close");
deleteElem.forEach(btn => {
  btn.addEventListener("click", () => {
    btn.parentElement.style.display = "none";
  });
});