import type { Meta, StoryObj } from "@storybook/react";

import ProductCard from "./ProductCard";
import Image from "next/image";

import gameImage from "public/game-images/hollowknight.jpeg";

const meta = {
  component: ProductCard,
} satisfies Meta<typeof ProductCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    genre: "Action",
    title: "Product Title",
    price: 119,
    img: (
      <Image
        src={gameImage}
        width={10}
        height={10}
        alt="image"
        className="bg-blue-300 w-full h-full"
      />
    ),
    isNew: true,
  },
};
