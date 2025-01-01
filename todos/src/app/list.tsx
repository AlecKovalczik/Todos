"use client";

import Button from "./components/button"
import { Item } from "./components/item";
import { createItem } from "./actions/itemActions"
import { useState } from "react";

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

let list: Array<Item> = [
    new Item("Item 1", "The first item on your todo list.", true, "test1"),
    new Item("Item 2", "Skip this one, it's boring!", false, "test2"),
    new Item("Play with Niko and Bean", "Lots of fun with the cats", true, "test3")
];

export function TodoList() {
    const [items, setItems] = useState(list);
    const [addModalHidden, setAddModalHidden] = useState(true);

    // generate a TodoItem for every item in list (Note: all top level components in the map function need a unique key)
    let todos = items.map(listItem => <TodoItem key={listItem.id} item={listItem}/>);

    function onAdd() {
        setAddModalHidden(false);
    }

    function handleAdd(e: any) {
        e.preventDefault();

        list = items;
        list.push(new Item("title", "description", false, "key"));
        
        setItems(list);
        
        setAddModalHidden(true);
    }

    return (
        <div>
            <div className="addModalBackground" hidden={addModalHidden}
                style={{
                    position: "absolute",
                    backgroundColor: "rgba(0, 0, 0, 0.3)",
                    width: "100%",
                    height: "100%",
                }}>
            </div>
            <div className="addModal" hidden={addModalHidden}
                style={{
                    position: "absolute",
                    left: "50%",
                    top: "50%",
                    transform: "translate(-50%, -50%)",
                    backgroundColor: "#ccc",
                    color: "#000",
                    width: "600px",
                    height: "400px",
                }}>
                <form>
                    <h1>Create a new Todo</h1>
                    <input name="title" type="text"></input> <br></br>
                    <input name="description" type="text"></input> <br></br>
                    <input name="completed" type="checkbox"></input> <br></br>
                    <button onClick={(e) => handleAdd(e)}>Submit</button>
                </form>
            </div>

            <h1>Todos</h1>
            <div className="todoList">
                {
                    todos // list of TodoItems generated above
                }
            </div>
            <button onClick={onAdd}>Add</button>
        </div>
    );
}