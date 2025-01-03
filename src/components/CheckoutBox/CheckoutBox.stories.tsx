import type { Meta, StoryObj } from "@storybook/react";

import CheckoutBox from "./CheckoutBox";

const meta = {
  component: CheckoutBox,
} satisfies Meta<typeof CheckoutBox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    products: [
      {
        id: "1",
        genre: "Action",
        image: "#",
        name: "Product 1",
        description: "Phasellus ut pellentesque felis. Nam non diam venenatis.",
        price: 59.99,
        isNew: true,
      },
      {
        id: "1",
        genre: "Action",
        image: "#",
        name: "Product 2",
        description: "Phasellus ut pellentesque felis. Nam non diam venenatis.",
        price: 39.99,
        isNew: true,
      },
      {
        id: "1",
        genre: "Action",
        image: "#",
        name: "Product 3",
        description: "Phasellus ut pellentesque felis. Nam non diam venenatis.",
        price: 69.99,
        isNew: true,
      },
    ],
  },
};
