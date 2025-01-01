'use server';

import { randomUUID } from "crypto";

export async function generateUUID(): Promise<string> {
    return randomUUID();
}