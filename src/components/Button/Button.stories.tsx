import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Button as ButtonComponent } from "./Button";

export default {
  title: "Atoms/Button",
  component: ButtonComponent,
} as ComponentMeta<typeof ButtonComponent>;

const Template: ComponentStory<typeof ButtonComponent> = (args) => {
  return <ButtonComponent {...args} />;
};

export const PrimaryButton = Template.bind({});
PrimaryButton.args = {
  children: "Primary",
};

export const SecondaryButton = Template.bind({});
SecondaryButton.args = {
  children: "Secondary",
};
