//import Metadata
import type { Meta, StoryObj } from "@storybook/react";

//import Component
import { Button2 } from "../Components/Button2";

//configure Story
const configStory = {
   title: "Example/Button",
   component: Button2,
   parameters: {
      layout: "centered",
   },
   tags: ["autodocs"],
   argTypes: {
      background: { control: "color" },
      color: { control: "color" },
   },
} satisfies Meta<typeof Button2>;

//export config story
export default configStory;
type Story = StoryObj<typeof configStory>;
