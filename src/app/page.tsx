"use client";

import { Button } from "@/components/ui/button";
// import { Instagram } from "lucide-react";
import { Testimonios } from "@/components/Testimonios";
import { FormularioCotizacion } from "@/components/FormularioCotizacion";
import { BotonWhatsapp } from "@/components/BotonWhatsapp";
import { FAQ } from "@/components/FAQ";
import { Highlights } from "@/components/Highlights";




export default function LandingPage() {
  return (

    <main className="bg-neutral-50 text-black min-h-screen font-sans">
      {/* Hero */}
      <section className="flex flex-col items-center justify-center px-6 py-20 md:py-32 text-center space-y-6">
        <img src="/logo-cliente.svg" alt="Logo del cliente" className="h-40 w-auto" />

        <Button
          className="bg-black text-white px-6 py-3 text-lg hover:scale-105 transition-transform duration-300 ease-in-out"
          onClick={() =>
            document.getElementById("formulario-cotizacion")?.scrollIntoView({ behavior: "smooth" })
          }
        >
          Pedir Cotización
        </Button>

        <a
          href="https://www.behance.net/geronimokalek"
          target="_blank"
          rel="noopener noreferrer"
          className="text-neutral-700 hover:underline text-lg"
        >
          Ver Portfolio
        </a>

        <div className="flex gap-4 mt-4">
          <a href="https://www.instagram.com/gkp_arq/" target="_blank" rel="noopener noreferrer">
            <svg className="h-5 w-5 text-neutral-700 hover:text-black transition duration-300" fill="currentColor" viewBox="0 0 24 24">
              <path d="M7.75 2C4.4 2 2 4.4 2 7.75v8.5C2 19.6 4.4 22 7.75 22h8.5C19.6 22 22 19.6 22 16.25v-8.5C22 4.4 19.6 2 16.25 2h-8.5Zm0 1.5h8.5c2.45 0 4.25 1.8 4.25 4.25v8.5c0 2.45-1.8 4.25-4.25 4.25h-8.5C5.3 20.5 3.5 18.7 3.5 16.25v-8.5C3.5 5.3 5.3 3.5 7.75 3.5Zm9 2a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5ZM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 1.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7Z" />
            </svg>
          </a>
          <a href="https://www.tiktok.com/@gkp_arq/" target="_blank" rel="noopener noreferrer">
            <svg className="h-5 w-5 text-neutral-700 hover:text-black transition duration-300" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.5 2c1.2 1.6 2.7 2.4 4.5 2.5v3.3c-1.2 0-2.4-.3-3.5-.8v7.2c0 3.1-2.5 5.5-5.5 5.5S2.5 17.3 2.5 14.2c0-2.9 2.3-5.3 5.2-5.5v3.2c-1.2.2-2.2 1.2-2.2 2.3 0 1.3 1.1 2.4 2.4 2.4s2.3-1.1 2.3-2.4V2h2.3z" />
            </svg>
          </a>
        </div>
      </section>

      <Highlights />



      {/* Formulario */}
      <FormularioCotizacion />

      {/* Testimonios */}
      <Testimonios />

      <FAQ />

      {/* Footer */}
      <footer className="text-center text-neutral-500 text-sm py-10 border-t border-neutral-200">
        © 2025 |  GKP Studio
      </footer>
      <BotonWhatsapp />
    </main>
  );
}
