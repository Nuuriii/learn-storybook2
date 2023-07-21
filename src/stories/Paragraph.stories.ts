import type { Meta, StoryObj } from "@storybook/react";

import { Paragraph } from "../Components/Paragraph";

//konfigurasi story
const meta: Meta<typeof Paragraph> = {
   title: "Example/Paragraph",
   component: Paragraph,
   tags: ["autodocs"],
   argTypes: {
      color: { control: "color" },
   },
};

export default meta;
type Story = StoryObj<typeof Paragraph>;

export const Primary: Story = {
   args: {
      primary: true,
      label: "Button",
   },
};
