import { randomUUID } from "crypto";
import Button from "./Components/button"

class Item {
    id: string;
    title: string;
    description: string;
    completed: boolean;

    constructor(title: string, description: string, completed: boolean = false, id: string = randomUUID()){
        this.id = id;
        this.title = title;
        this.description = description;
        this.completed = completed;
    }
}

function TodoItem({item}: {item:Item}) {
    // parse out data
    let title = item.title;
    let description = item.description;
    let completed = item.completed; 

    // render data
    return (
        <div className="todoItem" style={{backgroundColor: "#AAA", color: "#000", margin: "10px", padding: "10px"}}>
            <h1>{title}</h1>
            <p>{description}</p>
            <p>{completed ? "Completed" : "Incomplete"}</p>
        </div>
    )
}

function onAdd() {

}

let list: Array<Item> = [
    new Item("Item 1", "The first item on your todo list.", true),
    new Item("Item 2", "Skip this one, it's boring!", false),
    new Item("Play with Niko and Bean", "Lots of fun with the cats", true),
];

export function TodoList() {
    // generate a TodoItem for every item in list (Note: all top level components in the map function need a unique key)
    const todos = list.map(listItem => <TodoItem key={listItem.id} item={listItem}/>);

    return (
        <div>
            <h1>Todos</h1>
            <div className="todoList">
                {
                    todos // list of TodoItems generated above
                }
            </div>
            <Button onClick={() => {console.log("add")}}>Add</Button>
        </div>
    );
}