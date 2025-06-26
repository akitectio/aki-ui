import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../lib/components';

const meta: Meta<typeof Button> = {
    title: 'Components/Button/Examples',
    component: Button,
    parameters: {
        layout: 'centered',
    },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const GetStarted: Story = {
    args: {
        variant: 'primary',
        children: 'Get Started with Aki UI'
    },
};
