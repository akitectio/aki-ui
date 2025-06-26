import type { Meta, StoryObj } from '@storybook/react';
import { Dropdown, Button } from '../lib/components';

const meta: Meta<typeof Dropdown> = {
    title: 'Components/Dropdown',
    component: Dropdown,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        direction: {
            control: 'select',
            options: ['up', 'down', 'left', 'right'],
            description: 'Direction to open the dropdown',
        },
        align: {
            control: 'select',
            options: ['start', 'end'],
            description: 'Alignment of the dropdown menu',
        },
        openOnHover: {
            control: 'boolean',
            description: 'Whether the dropdown should open on hover',
        },
        autoClose: {
            control: 'select',
            options: [true, false, 'inside', 'outside'],
            description: 'Auto close behavior of the dropdown',
        },
    },
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

export const Basic: Story = {
    args: {
        children: (
            <>
                <Dropdown.Toggle>
                    <Button variant="primary">Dropdown</Button>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item href="#">Action</Dropdown.Item>
                    <Dropdown.Item href="#">Another action</Dropdown.Item>
                    <Dropdown.Item href="#">Something else</Dropdown.Item>
                </Dropdown.Menu>
            </>
        ),
    },
};

export const AlignEnd: Story = {
    args: {
        align: 'end',
        children: (
            <>
                <Dropdown.Toggle>
                    <Button variant="primary">Align End</Button>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item href="#">Action</Dropdown.Item>
                    <Dropdown.Item href="#">Another action</Dropdown.Item>
                    <Dropdown.Item href="#">Something else</Dropdown.Item>
                </Dropdown.Menu>
            </>
        ),
    },
};

export const Directions: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Dropdown direction="down">
                <Dropdown.Toggle>
                    <Button variant="primary">Down</Button>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item href="#">Item 1</Dropdown.Item>
                    <Dropdown.Item href="#">Item 2</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>

            <Dropdown direction="up">
                <Dropdown.Toggle>
                    <Button variant="primary">Up</Button>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item href="#">Item 1</Dropdown.Item>
                    <Dropdown.Item href="#">Item 2</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>

            <Dropdown direction="left">
                <Dropdown.Toggle>
                    <Button variant="primary">Left</Button>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item href="#">Item 1</Dropdown.Item>
                    <Dropdown.Item href="#">Item 2</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>

            <Dropdown direction="right">
                <Dropdown.Toggle>
                    <Button variant="primary">Right</Button>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item href="#">Item 1</Dropdown.Item>
                    <Dropdown.Item href="#">Item 2</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    ),
};

export const WithSeparator: Story = {
    args: {
        children: (
            <>
                <Dropdown.Toggle>
                    <Button variant="primary">Dropdown</Button>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item href="#">Action</Dropdown.Item>
                    <Dropdown.Item href="#">Another action</Dropdown.Item>
                    <div className="dropdown-divider"></div>
                    <Dropdown.Item href="#">Separated link</Dropdown.Item>
                </Dropdown.Menu>
            </>
        ),
    },
};

export const OpenOnHover: Story = {
    args: {
        openOnHover: true,
        children: (
            <>
                <Dropdown.Toggle>
                    <Button variant="primary">Hover Me</Button>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item href="#">Action</Dropdown.Item>
                    <Dropdown.Item href="#">Another action</Dropdown.Item>
                    <Dropdown.Item href="#">Something else</Dropdown.Item>
                </Dropdown.Menu>
            </>
        ),
    },
};
