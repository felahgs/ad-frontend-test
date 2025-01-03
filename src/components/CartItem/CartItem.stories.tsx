import type { Meta, StoryObj } from "@storybook/react";

import CartItem from "./CartItem";
import Image from "next/image";

import gameImage from "public/game-images/hollowknight.jpeg";

const meta = {
  component: CartItem,
} satisfies Meta<typeof CartItem>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    genre: "Action",
    title: "Product Title",
    price: 119,
    img: <Image src={gameImage} alt="image" />,
    description: "Phasellus ut pellentesque felis. Nam non diam venenatis.",
  },
};
