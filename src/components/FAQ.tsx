"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const faqs = [
    {
        pregunta: "¿Cuánto tarda la entrega de un render?",
        respuesta: "Depende de la complejidad del proyecto, pero generalmente entre 3 y 7 días hábiles.",
    },
    {
        pregunta: "¿Qué necesito enviar para pedir una cotización?",
        respuesta: "Idealmente planos, referencias visuales, y una breve descripción del proyecto.",
    },
    {
        pregunta: "¿Puedo pedir cambios luego de recibir el render?",
        respuesta: "Sí, cada entrega incluye una ronda de correcciones.",
    },
    {
        pregunta: "¿Hacen animaciones 3D o recorridos virtuales?",
        respuesta: "Sí, también ofrecemos animaciones, recorridos y renders 360°.",
    },
];

export function FAQ() {
    const [abierta, setAbierta] = useState<number | null>(null);

    const toggle = (i: number) => {
        setAbierta(abierta === i ? null : i);
    };

    return (
        <section className="bg-white border-t border-neutral-200 px-6 py-20">
            <div className="max-w-2xl mx-auto">
                <h3 className="text-3xl md:text-4xl font-medium text-center mb-12">
                    Preguntas frecuentes
                </h3>
                <ul className="space-y-4">
                    {faqs.map((faq, i) => {
                        const abiertaEsta = abierta === i;
                        return (
                            <li
                                key={i}
                                className="bg-neutral-50 rounded-xl border border-neutral-200 overflow-hidden shadow-sm"
                            >
                                <button
                                    onClick={() => toggle(i)}
                                    className="w-full text-left px-5 py-4 font-medium text-black flex justify-between items-center"
                                >
                                    <span>{faq.pregunta}</span>
                                    <motion.span
                                        animate={{ rotate: abiertaEsta ? 45 : 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="text-xl font-normal"
                                    >
                                        +
                                    </motion.span>
                                </button>

                                <AnimatePresence initial={false}>
                                    {abiertaEsta && (
                                        <motion.div
                                            key="content"
                                            initial={{ opacity: 0, scaleY: 0.95 }}
                                            animate={{ opacity: 1, scaleY: 1 }}
                                            exit={{ opacity: 0, scaleY: 0.95 }}
                                            transition={{ duration: 0.25, ease: "easeInOut" }}
                                            className="px-5 pb-4 text-neutral-600 text-sm origin-top"
                                        >
                                            {faq.respuesta}
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                            </li>
                        );
                    })}
                </ul>
            </div>
        </section>
    );
}
