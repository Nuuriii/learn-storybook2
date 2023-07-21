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
      label: "Ini Text",
   },
};

export const Secondary: Story = {
   args: {
      size: "large",
      label: "ukuran besar dengan tema secondary",
   },
};

export const Large: Story = {
   args: {
      size: "large",
      label: "Ini memiliki ukuran yang sangat besar",
   },
};

export const Small: Story = {
   args: {
      size: "small",
      label: "Ini Berukuran small yaa..",
   },
};
