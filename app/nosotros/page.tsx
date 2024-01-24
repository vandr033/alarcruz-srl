import React from "react";
import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/card";
import Image from "next/image";
import logo from "@/public/assets/Logopng.png";
export default function App() {
  return (
	<div>
		{/* Title Section */}
		<div className="text-center mb-6">
        <h2 className="text-3xl font-bold">Quienes Son Los Que te Protegen:</h2>
      </div>

      {/* Image that spans the entire width */}
      <div className="mb-6">
        {/* <Image
          alt="Banner Image"
          className="object-cover w-full h-48 rounded-xl"
          src={yourBannerImage}
        /> */}
      </div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-4">
  <Card className="py-4">
    <CardBody className="overflow-visible py-2">
      <Image
        alt="Card background"
        className="object-cover rounded-xl"
        src={logo}
        width={270}
      />
    </CardBody>
    <CardFooter className="pb-0 pt-2 px-4 flex-col items-start">
      <h4 className="font-bold text-large">Victor Andrade</h4>
      <p className="text-tiny uppercase font-bold">CEO/Dueño</p>
    </CardFooter>
  </Card>
  <Card className="py-4">
    <CardBody className="overflow-visible py-2">
      <Image
        alt="Card background"
        className="object-cover rounded-xl"
        src={logo}
        width={270}
      />
    </CardBody>
    <CardFooter className="pb-0 pt-2 px-4 flex-col items-start">
      <h4 className="font-bold text-large">Victor Andrade</h4>
      <p className="text-tiny uppercase font-bold">CEO/Dueño</p>
    </CardFooter>
  </Card>
  <Card className="py-4">
    <CardBody className="overflow-visible py-2">
      <Image
        alt="Card background"
        className="object-cover rounded-xl"
        src={logo}
        width={270}
      />
    </CardBody>
    <CardFooter className="pb-0 pt-2 px-4 flex-col items-start">
      <h4 className="font-bold text-large">Victor Andrade</h4>
      <p className="text-tiny uppercase font-bold">CEO/Dueño</p>
    </CardFooter>
  </Card>
  <Card className="py-4">
    <CardBody className="overflow-visible py-2">
      <Image
        alt="Card background"
        className="object-cover rounded-xl"
        src={logo}
        width={270}
      />
    </CardBody>
    <CardFooter className="pb-0 pt-2 px-4 flex-col items-start">
      <h4 className="font-bold text-large">Victor Andrade</h4>
      <p className="text-tiny uppercase font-bold">CEO/Dueño</p>
    </CardFooter>
  </Card>
  <Card className="py-4">
    <CardBody className="overflow-visible py-2">
      <Image
        alt="Card background"
        className="object-cover rounded-xl"
        src={logo}
        width={270}
      />
    </CardBody>
    <CardFooter className="pb-0 pt-2 px-4 flex-col items-start">
      <h4 className="font-bold text-large">Victor Andrade</h4>
      <p className="text-tiny uppercase font-bold">CEO/Dueño</p>
    </CardFooter>
  </Card>
  <Card className="py-4">
    <CardBody className="overflow-visible py-2">
      <Image
        alt="Card background"
        className="object-cover rounded-xl"
        src={logo}
        width={270}
      />
    </CardBody>
    <CardFooter className="pb-0 pt-2 px-4 flex-col items-start">
      <h4 className="font-bold text-large">Victor Andrade</h4>
      <p className="text-tiny uppercase font-bold">CEO/Dueño</p>
    </CardFooter>
  </Card>
  
</div>
</div>

  );
}
