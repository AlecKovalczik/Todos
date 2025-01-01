'use server';

import { randomUUID } from "crypto";
import { Item } from "./../components/item"

export async function createItem(title: string, description: string, completed: boolean = false, id: string = randomUUID()) {
    return new Item(title, description, completed, id);
}