import type { Meta } from '@storybook/react';
import { useState } from 'react';
import { Modal, Button } from '../lib/components';

const meta: Meta<typeof Modal> = {
    title: 'Components/Modal',
    component: Modal,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        size: {
            control: 'select',
            options: ['sm', 'md', 'lg', 'xl', 'full'],
            description: 'The size of the modal',
        },
        closeOnEsc: {
            control: 'boolean',
            description: 'Whether the modal should close when the escape key is pressed',
        },
        closeOnOverlayClick: {
            control: 'boolean',
            description: 'Whether the modal should close when clicking the overlay',
        },
        centered: {
            control: 'boolean',
            description: 'Whether the modal is centered vertically',
        },
    },
};

export default meta;

// We need to use a render function for Modal since it needs state management
export const Basic = {
    render: () => {
        const [isOpen, setIsOpen] = useState(false);

        return (
            <>
                <Button variant="primary" onClick={() => setIsOpen(true)}>
                    Open Modal
                </Button>

                <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
                    <Modal.Header>Modal Title</Modal.Header>
                    <Modal.Body>
                        <p>This is a basic modal dialog.</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => setIsOpen(false)}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={() => setIsOpen(false)}>
                            Save changes
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        );
    }
};

export const SmallSize = {
    render: () => {
        const [isOpen, setIsOpen] = useState(false);

        return (
            <>
                <Button variant="primary" onClick={() => setIsOpen(true)}>
                    Open Small Modal
                </Button>

                <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} size="sm">
                    <Modal.Header>Small Modal</Modal.Header>
                    <Modal.Body>
                        <p>This is a small-sized modal dialog.</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => setIsOpen(false)}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        );
    }
};

export const LargeSize = {
    render: () => {
        const [isOpen, setIsOpen] = useState(false);

        return (
            <>
                <Button variant="primary" onClick={() => setIsOpen(true)}>
                    Open Large Modal
                </Button>

                <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} size="lg">
                    <Modal.Header>Large Modal</Modal.Header>
                    <Modal.Body>
                        <p>This is a large-sized modal dialog with more content space.</p>
                        <p>It's suitable for displaying forms or more complex information.</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => setIsOpen(false)}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={() => setIsOpen(false)}>
                            Save changes
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        );
    }
};

export const NoCloseOnOverlay = {
    render: () => {
        const [isOpen, setIsOpen] = useState(false);

        return (
            <>
                <Button variant="primary" onClick={() => setIsOpen(true)}>
                    Open Modal (No Close on Overlay)
                </Button>

                <Modal
                    isOpen={isOpen}
                    onClose={() => setIsOpen(false)}
                    closeOnOverlayClick={false}
                >
                    <Modal.Header>Cannot Close on Overlay</Modal.Header>
                    <Modal.Body>
                        <p>This modal cannot be closed by clicking the overlay background.</p>
                        <p>You must use the close button or escape key.</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => setIsOpen(false)}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        );
    }
};
