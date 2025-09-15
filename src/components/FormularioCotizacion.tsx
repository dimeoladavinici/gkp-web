"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export function FormularioCotizacion() {
    const [nombre, setNombre] = useState("");
    const [servicio, setServicio] = useState("Imágenes 3D");
    const [mensaje, setMensaje] = useState("");
    const [errores, setErrores] = useState<{ nombre?: string; mensaje?: string }>({});

    const enviarWhatsApp = () => {
        const nuevosErrores: typeof errores = {};
        if (!nombre.trim()) nuevosErrores.nombre = "Ingresá tu nombre.";
        if (!mensaje.trim()) nuevosErrores.mensaje = "Describí tu proyecto.";
        if (mensaje.length > 1000) nuevosErrores.mensaje = "Máximo 1000 caracteres.";

        if (Object.keys(nuevosErrores).length > 0) {
            setErrores(nuevosErrores);
            return;
        }

        setErrores({});
        const texto = `¡Hola! Mi nombre es *${nombre}* y quiero una cotización para *${servicio}*.\n\nDetalle del proyecto:\n${mensaje}`;
        const url = `https://wa.me/5491157061526?text=${encodeURIComponent(texto)}`;
        window.open(url, "_blank");
    };

    return (
        <section
            id="formulario-cotizacion"
            className="px-6 py-20 md:py-28 bg-white border-t border-neutral-200"
        >
            <div className="max-w-2xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-medium mb-4">Pedir Cotización</h2>
                <p className="text-neutral-600 mb-8">
                    Completá el formulario para enviarnos tu consulta por WhatsApp.
                </p>
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                    <input
                        type="text"
                        placeholder="Tu nombre"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        className="w-full border border-neutral-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-neutral-400"
                    />
                    {errores.nombre && (
                        <p className="text-sm text-red-500 text-left">{errores.nombre}</p>
                    )}

                    <select
                        value={servicio}
                        onChange={(e) => setServicio(e.target.value)}
                        className="w-full border border-neutral-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-neutral-400"
                    >
                        <option>Imágenes 3D</option>
                        <option>Animaciones 3D</option>
                        <option>No estoy seguro / Otra consulta</option>
                    </select>

                    <textarea
                        rows={5}
                        maxLength={1000}
                        placeholder="Describí tu proyecto (máximo 1000 caracteres)"
                        value={mensaje}
                        onChange={(e) => setMensaje(e.target.value)}
                        className="w-full border border-neutral-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-neutral-400"
                    />
                    {errores.mensaje && (
                        <p className="text-sm text-red-500 text-left">{errores.mensaje}</p>
                    )}

                    <Button
                        type="button"
                        onClick={enviarWhatsApp}
                        className="bg-black text-white px-6 py-3 text-lg hover:scale-105 transition-transform duration-300 ease-in-out"
                    >
                        Realizar consulta
                    </Button>
                </form>
            </div>
        </section>
    );
}
