//import Metadata
import type { Meta, StoryObj } from "@storybook/react";

//import Component
import { Button2 } from "../Components/Button2";

//configure Story
const configStory = {
   title: "Example/Button2",
   component: Button2,
   parameters: {
      layout: "centered",
   },
   tags: ["autodocs"],
   argTypes: {
      background: { control: "color" },
      color: { control: "color" },
      borderRadius: { control: "" },
   },
} satisfies Meta<typeof Button2>;

//export config story
export default configStory;
type Story = StoryObj<typeof configStory>;

//writing story
//the story button is Primary
export const Primary: Story = {
   args: {
      primary: true,
      label: "Primary",
   },
};

//the story button is secondary
export const Secondary: Story = {
   args: {
      label: "Secondary",
   },
};

//the story button is sm/small
export const Small: Story = {
   args: {
      size: "sm",
      label: "ini small",
   },
};

//the story button is md/medium
export const Medium: Story = {
   args: {
      size: "md",
      label: "ini Medium",
   },
};

//the story button is lg/large
export const Large: Story = {
   args: {
      size: "lg",
      label: "ini Large",
   },
};

//the story button is xl/extra large
export const ExtraLarge: Story = {
   args: {
      size: "xl",
      label: "Ini extra besar",
   },
};
