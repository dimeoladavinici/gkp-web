import { cn } from "@/lib/utils";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
}

export function Button({ children, className, ...props }: ButtonProps) {
    return (
        <button
            className={cn("rounded px-4 py-2 font-medium transition duration-300", className)}
            {...props}
        >
            {children}
        </button>
    );
}
