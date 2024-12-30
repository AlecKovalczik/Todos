"use client";

import { MouseEventHandler } from "react";

export default function Button({onClick, children}: {onClick: MouseEventHandler<HTMLButtonElement>, children: string}) {
    return (
        <>
            <button onClick={onClick}>{children}</button>
        </>
    );
}