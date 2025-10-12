import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import Image from "next/image";

const Skeleton = ({ source }) => (
  <div className="flex flex-1 w-full h-full min-h-[8rem] rounded-xl relative bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100">
    <Image
      src={source}
      fill
      alt="image"
      className="object-center object-cover rounded-xl"
    />
  </div>
);

const itemsData = [
  {
    title: "El-Academy",
    description: "Explore a bunch of recourses in one learning platform",
    src: "/1.png",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    link: "https://github.com/obadh-20/ElAcademy",
  },
  {
    title: "Gemini Clone",
    description: "A full finctional google gemini clone made by me",
    src: "/2.png",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    link: "https://github.com/obadh-20/geminiclone",
  },
  {
    title: "The Art of Design",
    description: "A full front end design clone for netflix made by me",
    src: "/3.png",
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
    link: "",
  },
  {
    title: "EvOlotion",
    description: "An ecommerce website for selling cars.",
    src: "/4.png",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    link: "https://github.com/obadh-20/EV-website",
  },
  {
    title: "MapAi",
    description:
      "A full map for everywhere which is integrated with AI for suggesting routs",
    src: "/5.png",
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
    link: "https://github.com/obadh-20/TrafficMS",
  },
];

export function BentoGridDemo() {
  return (
    <BentoGrid className="max-w-5xl mx-auto">
      {itemsData.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={<Skeleton source={item.src} />}
          icon={item.icon}
          link={item.link}
          className={i === 3 || i === 6 ? "md:col-span-2" : ""}
        />
      ))}
    </BentoGrid>
  );
}
