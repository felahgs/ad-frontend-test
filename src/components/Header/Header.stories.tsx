import type { Meta, StoryObj } from "@storybook/react";

import Header from "./Header";

const meta = {
  component: Header,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Header>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    logo: (
      <a href="#" className="text-2xl bold text-zinc-600" key={0}>
        GamerShop
      </a>
    ),

    navItems: [
      <a href="#" key={0}>
        Home
      </a>,
      <a href="#" key={1}>
        About
      </a>,
      <a href="#" key={2}>
        Products
      </a>,
      <a href="#" key={3}>
        Contact
      </a>,
    ],
  },
};
