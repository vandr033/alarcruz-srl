"use client"
import Footer from "@/components/footer/footer";
import { title } from "@/components/primitives";
import { Navbar } from "@nextui-org/navbar";
import Image from "next/image";
import logo from "@/public/assets/Logopng.png"
import empresas from "@/public/assets/empresas.svg"
let sources =[
"/assets/logos-empresas/bg.svg",
"/assets/logos-empresas/carrasco.svg",
"/assets/logos-empresas/fidalga.svg",
"/assets/logos-empresas/LOGO_CASA_ELENA_nuevo_200x.svg",
"/assets/logos-empresas/Multicenter-Logo-Header-Desktop___b1ce8cba76335a12f517ff3bdd335957-svg.svg"
]
export default function PricingPage() {
	return (
		<div>
		<section className="flex-col w-full h-full pr-10 gap-0 flex-grow">
<div className="flex md:flex md:flex-grow flex-row-reverse space-x-1 leading-[.85]">
      <h1 className= {title({ color: "green", size: "Alarcruz" })} >Alarcruz</h1>

		</div>
		<div className="flex md:flex md:flex-grow flex-row-reverse space-x-1 leading-[.85]">
      <h1 className= {title({ color: "black", size: "subheading" })} >Monitoreo de alarmas las 24 horas</h1>
		</div>
		<div className=" max-w-screen justify-start flex flex-row items-start ">
		{sources.map((source, index) => (
					< div key={index} className="relative h-32 w-32 sm:h-48 sm:48 md:h-45 md:w-60 lg:w-72 lg:h-60 xl:w-80 xl:h-70 2xl:h-90 2xl:w-96">
                        <Image   src={source} alt="" objectFit="true" fill />
						</div>

                ))}		
				</div>
		</section>
	<section className="flex justify-center items-center h-80 md:h-[22rem] lg:h-[24rem] xl:h-[26rem] 2xl:h-[29rem] bg-black">
  		<div className="h-72 md:h-80 lg:h-[22rem] xl:h-96 2xl:h-[26rem] w-[90%] bg-white rounded-lg flex items-center">
    		{/* Left side with image */}
    			<div className="flex-shrink-0 p-4 w-1/2 2xl:mt-28 xl:mt-20 lg:mt-16">
      				<Image src={logo} alt="Image" className="h-full w-full object-cover rounded" />
    			</div>
    		{/* Right side with text */}
    			<div className="flex-grow p-4 w-1/2 flex-col items-start h-72 md:h-80 lg:h-[22rem] xl:h-96 2xl:h-[26rem]">
      				<h1 className={title({size:'cardTitle', color:'green'})}>Expertos En Monitoreo De Alarmas</h1>
					<p className=" text-[.65rem] sm:text-[.85rem] md:text-base lg:text-xl xl:text-2xl 2xl:text-3xl text-black">
Alarcruz ofrece servicios de monitoreo de alarmas para hogares y empresas en Santa Cruz con más de 20 años de experiencia. Garantizamos protección 24/7 contra robos, con respuesta inmediata y despacho de patrullas. Brindamos soluciones de seguridad personalizadas. Si buscas un cambio, contáctanos para una evaluación sin compromiso en 24 horas.</p>
    			</div>
  		</div>
	</section>
	<section className="flex justify-center items-center h-80 md:h-[22rem] lg:h-[24rem] xl:h-[26rem] 2xl:h-[29rem] bg-green-500">
  		<div className="h-72 md:h-80 lg:h-[22rem] xl:h-96 2xl:h-[26rem] w-[90%] bg-black rounded-lg flex items-center">
    		{/* Left side with image */}
    			<div className="flex-shrink-0 p-4 w-1/2   ">
      				<Image src={empresas} alt="Image" className="h-full w-full lg:w-[65%] object-cover rounded" />
    			</div>
    		{/* Right side with text */}
    			<div className="flex-grow p-4 w-1/2 flex-col items-start h-72 md:h-80 lg:h-[22rem] xl:h-96 2xl:h-[26rem]">
      				<h1 className={title({size:'cardTitle', color:'green'})}>Expertos En Monitoreo De Alarmas</h1>
					<p className=" text-[.65rem] sm:text-[.85rem] md:text-base lg:text-xl xl:text-2xl 2xl:text-3xl text-white">
Alarcruz ofrece servicios de monitoreo de alarmas para hogares y empresas en Santa Cruz con más de 20 años de experiencia. Garantizamos protección 24/7 contra robos, con respuesta inmediata y despacho de patrullas. Brindamos soluciones de seguridad personalizadas. Si buscas un cambio, contáctanos para una evaluación sin compromiso en 24 horas.</p>
    			</div>
  		</div>
	</section>
		<Footer/>
		</div>
);
}
	  // 'sm': '640px',
      //'md': '768px',
      //'lg': '1024px',
      //'xl': '1280px',
      //'2xl': '1536px',