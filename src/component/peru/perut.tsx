import Link from "next/link";
import React from "react";
import { FaInstagram, FaTiktok, FaFacebook, FaYoutube } from "react-icons/fa";

const Peru = () => {
  return (
    <div className="container grid grid-cols-12 xl:gap-8 bg-red content-start h-screen p-4 pt-12 m-auto gap-4">
      <h1 className="col-span-12 text-[#333] xl:text-5xl text-3xl font-extrabold text-center">
        Enlaces directos a publicaciones y comentarios
      </h1>
      <p className="col-span-12 text-[#333] xl-text-1xl text-[15px] font-extrabold text-center">
        Accesos rápidos a posts en YouTube, TikTok, Instagram y Facebook.
        Temática Mundial de desayunos 🇵🇪
      </p>
      <div className="col-span-12 flex justify-center items-center gap-1">
        <span className="bg-red-500 rounded-[5px] p-4 shadow-sm"></span>
        <span className="bg-white rounded-[5px] p-4 shadow-sm"></span>
        <span className="bg-red-500 rounded-[5px] p-4 shadow-sm"></span>
      </div>

      <div className="sm:col-span-12 md:col-span-12 xl:col-span-6 col-span-12 grid xl:gap-6 border border-[#f5f5f5] bg-white p-6 rounded-[15px] shadow-sm gap-2">
        <div className="col-span-12 gap-3 flex justify-start items-center">
          <FaInstagram size={30} color="#333" className="font-bold" />
          <p className="text-[#333] font-bold text-2xl">Instagram</p>
        </div>
        <p className="col-span-12 xl:text-[15px] text-[#333] text-[13px] font-normal text-justify">
          Elevemos nuestra voz para que el desayuno peruano conquiste el mundo.
          ¡Apoya al Perú en el Mundial de Desayunos! Ve a los comentarios, busca
          el que dice PERU (hecho por Ibai) y dale like para que todos vean
          nuestro pan con chicharrón y tamal.
        </p>
        <Link
          href={"https://www.instagram.com/p/DN3bif02M7M/"}
          target="_blank"
          className="
         w-full col-span-6 bg-red-600 rounded-[10px] p-3 text-white font-bold cursor-pointer  text-center
          transform transition-transform duration-200 active:scale-95 xl:text-[16px] text-[13px]"
        >
          Ir a publicación
        </Link>

        <p className="col-span-12 xl:text-[13px] font-bold text-[#666] text-[12px]">
          Elevemos nuestra voz para que el desayuno peruano conquiste el mundo.
        </p>
      </div>

      <div className="sm:col-span-12 md:col-span-12 xl:col-span-6 col-span-12 grid xl:gap-6 border border-[#f5f5f5] bg-white p-6 rounded-[15px] shadow-sm gap-2">
        <div className="col-span-12 gap-3 flex justify-start items-center">
          <FaTiktok size={30} color="#333" className="font-bold" />
          <p className="text-[#333] font-bold text-2xl">Tiktok</p>
        </div>
        <p className="col-span-12 xl:text-[15px] text-[#333] text-[13px] font-normal text-justify">
          ¡Apoya al Perú en el Mundial de Desayunos! Ve a los comentarios, busca
          el que dice PERU (hecho por Ibai) y dale like para que todos vean
          nuestro pan con chicharrón y tamal.
        </p>
        <Link
          href={
            "https://www.tiktok.com/@ibaillanos/video/7543311318334459158?is_from_webapp=1&sender_device=pc&web_id=7390855316623508997"
          }
          target="_blank"
          className="
    col-span-6 bg-red-600 rounded-[10px] p-3 text-white font-bold cursor-pointer  text-center
    transform transition-transform duration-200 active:scale-95 xl:text-[16px] text-[13px]"
        >
          Ir a publicación
        </Link>

        <p className="col-span-12 xl:text-[13px] font-bold text-[#666] text-[12px]">
          Que cada rincón sepa que en Perú la tradición se sirve en la mesa.
        </p>
      </div>

      <div className="sm:col-span-12 md:col-span-12 xl:col-span-6 col-span-12 grid xl:gap-6 border border-[#f5f5f5] bg-white p-6 rounded-[15px] shadow-sm gap-2">
        <div className="col-span-12 gap-3 flex justify-start items-center">
          <FaFacebook size={30} color="#333" className="font-bold" />
          <p className="text-[#333] font-bold text-2xl">Facebook</p>
        </div>
        <p className="col-span-12 xl:text-[15px] text-[#333] text-[13px] font-normal text-justify">
          ¡Es hora de apoyar al pan con chicharrón y tamal! Dirígete a los
          comentarios, busca PERU (el comentario de Ibai) y toca like. ¡Que
          todos vean lo que Perú representa!
        </p>
        <Link
          href={"https://www.facebook.com/reel/1818613305441221"}
          target="_blank"
          className="
    col-span-6 bg-red-600 rounded-[10px] p-3 text-white font-bold cursor-pointer  text-center
    transform transition-transform duration-200 active:scale-95 xl:text-[16px] text-[13px]"
        >
          Ir a publicación
        </Link>

        <p className="col-span-12 xl:text-[13px] font-bold text-[#666] text-[12px]">
          Unidos, podemos llevar al pan con chicharrón y tamal a la gloria
          mundial.
        </p>
      </div>

      <div className="sm:col-span-12 md:col-span-12 xl:col-span-6 col-span-12 grid xl:gap-6 border border-[#f5f5f5] bg-white p-6 rounded-[15px] shadow-sm gap-2">
        <div className="col-span-12 gap-3 flex justify-start items-center">
          <FaYoutube size={30} color="#333" className="font-bold" />
          <p className="text-[#333] font-bold text-2xl">Youtube</p>
        </div>
        <p className="col-span-12 xl:text-[15px] text-[#333] text-[13px] font-normal text-justify">
          ¡Perú necesita tu apoyo! Mira el reel, baja a los comentarios,
          encuentra el comentario PERU hecho por Ibai y dale like. ¡Demostremos
          nuestro sabor al mundo!
        </p>
        <Link
          href={"https://youtube.com/shorts/wq26EEOtiBw?si=VNwTC73_mu_gyax3"}
          target="_blank"
          className="
    col-span-6 bg-red-600 rounded-[10px] p-3 text-white font-bold cursor-pointer  text-center
    transform transition-transform duration-200 active:scale-95 xl:text-[16px] text-[13px]"
        >
          Ir a publicación
        </Link>

        <p className="col-span-12 xl:text-[13px] font-bold text-[#666] text-[12px]">
          Este es el momento de demostrar la fuerza de nuestra gastronomía.
        </p>
      </div>
      <div className="col-span-12 flex flex-col items-center justify-center p-4  text-center gap-2">
        <a
          href="https://www.tiktok.com/@tucuenta"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          Síguenos en TikTok
        </a>
        <p className="text-sm text-gray-500">
          Desarrollado por <span className="font-semibold">gaman.dev</span> con
          cariño ❤️
        </p>
      </div>
    </div>
  );
};

export default Peru;
