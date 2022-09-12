import { component, useState } from "haunted";
import { html } from "lit-html";


const Todo = () => {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);
  const handleInput = (e) => setTask(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      setTaskList([...taskList, task]);
    }
    setTask("");
  };

  return html`
    <style>
      .input {
        border: 1px solid #dcdcdc;
        border-radius: 5px;
        color: #595959;
        font-size: 1.1rem;
        outline: none;
        padding: 0.5rem 1rem;
        vertical-align: middle;
        width: 80%;
      }
      .input:focus {
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
      }
      .button {
        background: #00cc99;
        border: none;
        border-radius: 3px;
        color: #fdfdfd;
        outline: none;
        padding: 0.75rem;
      }
      .button:hover {
        background: #00b386;
        cursor: pointer;
      }
      .list {
        margin: 0;
        margin-top: 1rem;
        padding: 0;
      }
      .item {
        list-style: none;
      }
    </style>
    <form @submit=${handleSubmit}>
      <input
        class="input"
        maxlength="120"
        type="text"
        .value=${task}
        @input=${handleInput}
      />
      <button class="button" type="submit">Add</button>
    </form>
    <ul class="list">
      ${taskList.map((task) => html`<li>${task}</li>`)}
    </ul>
  `;
}

customElements.define('wc-todo', component(Todo))