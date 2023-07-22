//import Metadata
import type { Meta, StoryObj } from "@storybook/react";

//import Component
import { Button3 } from "../Components/Button3";

//configure Story
const configStory = {
   title: "Example/Button3",
   component: Button3,
   parameters: {
      layout: "centered",
   },
   tags: ["autodocs"],
   argTypes: {
      backgroundColor: { control: "color" },
      color: { control: "color" },
   },
} satisfies Meta<typeof Button3>;

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
