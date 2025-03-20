import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit-html";
import ".";

const meta: Meta = {
  title: "Components/Button",
  component: "m-button",
  argTypes: {
    rounded: {
      control: { type: "select" },
      options: ["sm", "md", "lg", "20px", "25%", null],
      description: "Border radius of the button",
    },
    loading: {
      control: { type: "boolean" },
      description: "Loading state of the button",
    },
    variant: {
      control: { type: "select" },
      options: ['filled', 'outlined', 'pill'],
      description: "Background color of the button",
    },
    color: {
      control: { type: "select" },
      options: ['primary', 'secondary', 'success', 'info', 'error', 'warning'],
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

export const Types: Story = {
  args: {
    rounded: "md",
    color: "primary",
    disabled: true,
    loading: true
  },
  render: ({ rounded, variant, disabled, color }) => html`
    <m-button
      rounded="${rounded}"
      variant="filled" 
      color="${color}" 
      @click=${click}
      @mouseenter=${hover}
    >
      Filled
    </m-button>
    <m-button
      rounded="${rounded}"
      variant="filled" 
      loading="${true}"
      color="${color}" 
      @click=${click}
      @mouseenter=${hover}
    >
      Filled (loading)
    </m-button>
    <m-button
      rounded="${rounded}"
      variant="filled" 
      color="${color}" 
      disabled="${disabled}"
      @click=${click}
      @mouseenter=${hover}
    >
      Disabled (filled)
    </m-button>
    <m-button
      rounded="${rounded}"
      variant="outlined" 
      color="${color}" 
      @click=${click}
      @mouseenter=${hover}
    >
      Outlined
    </m-button>
    <m-button
      variant="text" 
      color="${color}" 
      @click=${click}
      @mouseenter=${hover}
    >
      Text
    </m-button>
  `,
};
export const Colors: Story = {
  args: {
    rounded: "md",
    variant: "filled",
    color: "primary"
  },
  render: ({ rounded, variant, color }) => html`
    <m-button
      rounded="${rounded}"
      variant="${variant}" 
      color="${color}" 
      @click=${click}
      @mouseenter=${hover}
    >
      <span slot="icon">{icon}</span> 
      ${color}
    </m-button>
    <m-button
      rounded="${rounded}"
      variant="${variant}" 
      color="secondary" 
      @click=${click}
      @mouseenter=${hover}
    >
      <span slot="icon">{icon}</span> 
      secondary
    </m-button>
    <m-button
      rounded="${rounded}"
      variant="${variant}" 
      color="success" 
      @click=${click}
      @mouseenter=${hover}
    >
      <span slot="icon">{icon}</span> 
      success
    </m-button>
    <m-button
      rounded="${rounded}"
      variant="${variant}" 
      color="info" 
      @click=${click}
      @mouseenter=${hover}
    >
      <span slot="icon">{icon}</span> 
      info
    </m-button>
    <m-button
      rounded="${rounded}"
      variant="${variant}" 
      color="warning" 
      @click=${click}
      @mouseenter=${hover}
    >
      <span slot="icon">{icon}</span> 
      warning
    </m-button>
    <m-button
      rounded="${rounded}"
      variant="${variant}" 
      color="error" 
      @click=${click}
      @mouseenter=${hover}
    >
      <span slot="icon">{icon}</span> 
      error
    </m-button>
  `,
};

export const Icons: Story = {
  args: {
    rounded: "md",
    variant: "filled",
    color: "primary"
  },
  render: ({ rounded, variant, color }) => html`
    <m-button
      rounded="${rounded}"
      variant="${variant}" 
      color="${color}" 
      @click=${click}
      @mouseenter=${hover}
    >
      <span slot="prefix">{icon}</span> 
      prefix
    </m-button>
    <m-button
      rounded="${rounded}"
      variant="${variant}" 
      color="${color}" 
      @click=${click}
      @mouseenter=${hover}
    >
    sufix
    <span slot="suffix">{icon}</span> 
    </m-button>
    <br /><br />
        <m-button
      rounded="${rounded}"
      variant="outlined" 
      color="${color}" 
      @click=${click}
      @mouseenter=${hover}
    >
      <span slot="prefix">{icon}</span> 
      prefix
    </m-button>
    <m-button
      rounded="${rounded}"
      variant="outlined" 
      color="${color}" 
      @click=${click}
      @mouseenter=${hover}
    >
    sufix
    <span slot="suffix">{icon}</span> 
    </m-button>
  `,
};
