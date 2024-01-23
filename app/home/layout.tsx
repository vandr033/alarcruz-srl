import { Navbar } from '@/components/navbar';
import React from 'react'

type Props = {}

export default function homeLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
				/* <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
					<div className="relative flex flex-col h-screen w-screen">
					<Navbar/>
						<main className="container mx-0 max-w-screen pt-16 px-6 flex flex-grow">
							
							{children}
						</main>
						
					</div>
				</Providers> */
                <section>		
                <Navbar/>
				<main>{children}</main>
                </section>
	);
}
