import { generateUUID } from "../actions/UUID";

export class Item {
    id: string;
    title: string;
    description: string;
    completed: boolean;

    constructor(title: string, description: string, completed: boolean = false, id: string){
        this.id = id;

        this.title = title;
        this.description = description;
        this.completed = completed;
    }
}