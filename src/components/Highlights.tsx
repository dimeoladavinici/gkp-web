"use client";

import { useEffect, useState } from "react";
import { Building2, Clock, Globe, Star, Users, Home } from "lucide-react";
import type { ReactNode } from "react";


type HighlightItem = {
    icon: ReactNode;
    value: number;
    label: string;
    suffix?: string;
};

const highlights: HighlightItem[] = [
    { icon: <Users className="w-6 h-6 text-black" />, value: 75, label: "Proyectos entregados", suffix: "+" },
    { icon: <Home className="w-6 h-6 text-black" />, value: 50, label: "Renders terminados", suffix: "+" },
    { icon: <Building2 className="w-6 h-6 text-black" />, value: 10, label: "Desarrollos ejecutados", suffix: "+" },
    { icon: <Clock className="w-6 h-6 text-black" />, value: 6, label: "Entrega promedio (días)" },
    { icon: <Star className="w-6 h-6 text-black" />, value: 97, label: "Feedback positivo", suffix: "%" },
    { icon: <Globe className="w-6 h-6 text-black" />, value: 7, label: "Clientes internacionales"},
];

function useCountUp(to: number, duration = 1500): number {
    const [count, setCount] = useState(0);
    useEffect(() => {
        let start: number | null = null;
        const step = (timestamp: number) => {
            if (!start) start = timestamp;
            const progress = Math.min((timestamp - start) / duration, 1);
            setCount(Math.floor(progress * to));
            if (progress < 1) requestAnimationFrame(step);
            else setCount(to);
        };
        requestAnimationFrame(step);
    }, [to, duration]);
    return count;
}

export function Highlights() {
    return (
        <section className="bg-white px-6 py-20 border-t border-neutral-200">
            <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-3 gap-6 text-center">
                {highlights.map((item, i) => {
                    const count = useCountUp(item.value);
                    return (
                        <div
                            key={i}
                            className="bg-neutral-50 rounded-xl p-6 shadow-sm hover:shadow-md transition duration-300"
                        >
                            <div className="flex justify-center mb-3">{item.icon}</div>
                            <div className="text-2xl font-semibold text-black">
                                {count}
                                {item.suffix || ""}
                            </div>
                            <div className="text-sm text-neutral-600 mt-1">{item.label}</div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
