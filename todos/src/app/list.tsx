const todoItem = {
    title: "Task",
    description: "Task description.",
    completed: false
}

function TodoItem () {
    return (
        <div className="todoItem">
            <h1>{todoItem.title}</h1>
            <p>{todoItem.description}</p>
            <p>{todoItem.completed ? "Completed" : "Incomplete"}</p>
        </div>
    )
}

export function TodoList(){
    return (
        <div className="todoList">
            <TodoItem />
            <TodoItem />
            <TodoItem />
        </div>
    );
}