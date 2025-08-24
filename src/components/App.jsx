import { Component } from "react";
import { Filtration } from './Filtration';
import '../styles/Todo.css';

export class TodoList extends Component {
  state = {
    tasks: this.props.tasks,
    text: '',
    filtr: ''
  }


  addTask = (e) => {
    e.preventDefault();
    this.setState((prevState) => ({
      tasks: [...prevState.tasks, { id: `id-${prevState.tasks.length + 1}`, text: prevState.text, completed: false }],
      text: ''
    }));
  }


  toggleTask = (id) => {
    this.setState((prevState) => ({
      tasks: prevState.tasks.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    }));
  }


  setFilter = (value) => {
    this.setState({ filtr: value });
  }


  render() {
    const filteredTasks = this.state.tasks.filter(task =>
      task.text.toLowerCase().includes(this.state.filtr.toLowerCase())
    );


    const incompleteTasks = filteredTasks.filter(task => !task.completed);
    const completedTasks = filteredTasks.filter(task => task.completed);


    return (
      <div>
        <form onSubmit={this.addTask} className="todo-form">
          <h1>Todo List</h1>
          <input
            type="text"
            placeholder="Text"
            value={this.state.text}
            onChange={(e) => this.setState({ text: e.target.value })}
            required
            className="todo-input"
          />
          <button type="submit" >Add Task</button>
        </form>


        <Filtration filtr={this.state.filtr} setFilter={this.setFilter} />


        <div className="todo-wrap">
          <div> <h2 className="todo-title">Incomplete</h2>
            <ul>
              {incompleteTasks.map((item) => (
                <li key={item.id} className="todo-item">
                  <p>{item.text}</p>
                  <input
                    type="checkbox"
                    checked={item.completed}
                    onChange={() => this.toggleTask(item.id)}
                  />
                </li>
              ))}
            </ul></div>
          <div> <h2 className="completed-title">Completed</h2>
            <ul>
              {completedTasks.map((item) => (
                <li key={item.id} className="completed-item">
                  <p>{item.text}</p>
                  <input
                    type="checkbox"
                    checked={item.completed}
                    onChange={() => this.toggleTask(item.id)}
                  />
                </li>
              ))}
            </ul></div></div>
      </div>
    )
  }
}