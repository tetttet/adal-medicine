import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import Image from "next/image";
import { Button } from "./ui/button";
export default function CardWithForm({
  title,
  description,
  image,
  button,
}: {
  title: string;
  description: string;
  image: string;
  button: string;
}) {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Image src={image} width={500} height={300} alt="" />
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button className="text-white">{button}</Button>
      </CardFooter>
    </Card>
  );
}
