import type { Meta, StoryObj } from "@storybook/react";

import Footer from "./Footer";

const meta = {
  component: Footer,
} satisfies Meta<typeof Footer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <div className="p-4">
        <div className="text-center text-lg font-bold">Footer Title</div>
        <div className="mt-2 text-center text-sm">
          <p>© 2025 Your Company. All rights reserved.</p>
        </div>
        <div className="mt-4 flex justify-center space-x-4">
          <a href="/privacy-policy" className="text-white">
            Privacy Policy
          </a>
          <a href="/terms-of-service" className="text-white">
            Terms of Service
          </a>
          <a href="/contact" className="text-white">
            Contact
          </a>
        </div>
      </div>
    ),
  },
};
