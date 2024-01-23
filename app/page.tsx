import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code"
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import Footer from "../components/footer/footer";
import bg from "@/public/assets/bg.png";
import Image from "next/image";
let width= 375;
let height = 375;
export default function Home() {
	return (<div>
		
		<section className=" flex flex-col items-end max-w-[90%] justify-end pt-8 mt-24 mb-4 md:pt-10 bg-[#f0f0f0]">
			<div className="text-right items-end pb-1 mb-0 leading-[.2]">
				<h1 className={title({ color: "green", size:"xxl" })}>Alarcruz</h1>
			</div>
			<div className="text-right justify-start  pt-0 mt-0">
			<h1 className="text-black text-2xl">Especialistas en Monitoreo de Alarmas</h1>

			</div>
			</section>

			<div className=" max-w-lg justify-start flex flex-row items-start">
			<Image src="/assets/logos-empresas/baneco.svg" alt="" width={width} height={height}/>	
			<Image src="/assets/logos-empresas/bg.svg" alt="" width={width} height={height}/>	
			<Image className=" pl-12" src="/assets/logos-empresas/fidalga.svg" alt="" width={width} height={height}/>	
			<Image src="/assets/logos-empresas/LOGO_CASA_ELENA_nuevo_200x.svg" alt="" width={width} height={height}/>	
			<Image className="pt-4 pl-12" src="/assets/logos-empresas/Multicenter-Logo-Header-Desktop___b1ce8cba76335a12f517ff3bdd335957-svg.svg" alt="" width={500} height={500}/>	
			</div>
			<section className=" flex flex-col items-start justify-end gap-4  bg-[#f0f0f0] pr-32 mt-20 mb-40">

			</section>
		<div className=" flex-row w-screen bg-black items-center text-center py-24">
			<h1 className={title({size:'sm', color:'white'})}>LLame al </h1><h1 className={title({size:'sm', color:'green'})}>3558544 </h1><h1 className={title({size:'sm', color:'white'})}> para obtener una cotizacion gratuita</h1>

		</div>
					{/* <Footer /> */}
					
	</div>

		
	);
}
