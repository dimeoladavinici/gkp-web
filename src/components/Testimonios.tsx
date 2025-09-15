"use client";

import Image from "next/image";
import { testimonios } from "@/data/testimonios";
import { useEffect, useRef, useState } from "react";

export function Testimonios() {
    const [index, setIndex] = useState(0);
    const total = testimonios.length;

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % total);
        }, 4000);
        return () => clearInterval(interval);
    }, [total]);

    return (
        <section className="px-4 py-20 bg-neutral-100 border-t border-neutral-200">
            <h3 className="text-3xl md:text-4xl font-medium text-center mb-12">
                Lo que dicen nuestros clientes
            </h3>
            <div className="overflow-hidden relative w-full max-w-md mx-auto">
                <div
                    className="flex transition-transform duration-700 ease-in-out"
                    style={{ transform: `translateX(-${index * 100}%)` }}
                >
                    {testimonios.map((t, i) => (
                        <a
                            href="https://behance.net"
                            key={i}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-shrink-0 w-full bg-white rounded-xl shadow-sm p-6"
                        >
                            <Image
                                src={t.imagen}
                                alt={t.proyecto}
                                width={400}
                                height={200}
                                className="rounded-md mb-4 h-40 w-full object-cover"
                            />
                            <h4 className="text-lg font-semibold">
                                {t.nombre} –{" "}
                                <span className="text-neutral-500">{t.proyecto}</span>
                            </h4>
                            <p className="text-neutral-600 text-sm mt-2 italic line-clamp-2">
                                “{t.frase}”
                            </p>
                            <div className="mt-3 text-yellow-500 text-sm">
                                {"★".repeat(t.estrellas)}{"☆".repeat(5 - t.estrellas)}
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
