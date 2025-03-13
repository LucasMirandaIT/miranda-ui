import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit-html";
import "./Button";

const meta: Meta = {
  title: "Components/Button",
  component: "m-button",
  argTypes: {
    rounded: {
      control: { type: "select" },
      options: ["sm", "md", "lg", "20px", "25%", null],
      description: "Border radius of the button",
    },
    bgColor: {
      control: { type: "color" },
      description: "Background color of the button",
    },
    color: {
      control: { type: "color" },
      description: "Text color of the button",
    },
  },
};

export default meta;

type Story = StoryObj;

const click = (e) => {
  action("Button clicked ")(e);
}
const hover = (e) => {
  action("Button hovered ")(e);
}

export const Default: Story = {
  args: {
    rounded: "md",
    bgColor: "#007BFF",
    color: "#FFFFFF",
  },
  render: ({ rounded, bgColor, color }) => html`
    <m-button
      rounded="${rounded}"
      bgcolor="${bgColor}"
      color="${color}"
      @click=${click}
      @mouseenter=${hover}
    >
      Click Me
    </m-button>
  `,
};
