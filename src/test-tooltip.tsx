import { Tooltip, Button } from './lib/components';

const TooltipTest = () => {
    return (
        <div style={{ padding: '100px', textAlign: 'center' }}>
            <h1>Tooltip Test Page</h1>

            <div style={{ margin: '20px' }}>
                <Tooltip content="This is a simple tooltip" position="top">
                    <Button>Hover me (Top)</Button>
                </Tooltip>
            </div>

            <div style={{ margin: '20px' }}>
                <Tooltip content="Right tooltip" position="right">
                    <Button>Hover me (Right)</Button>
                </Tooltip>
            </div>

            <div style={{ margin: '20px' }}>
                <Tooltip content="Bottom tooltip" position="bottom">
                    <Button>Hover me (Bottom)</Button>
                </Tooltip>
            </div>

            <div style={{ margin: '20px' }}>
                <Tooltip content="Left tooltip" position="left">
                    <Button>Hover me (Left)</Button>
                </Tooltip>
            </div>

            <div style={{ margin: '20px' }}>
                <Tooltip content="Click me tooltip" trigger="click">
                    <Button>Click me</Button>
                </Tooltip>
            </div>

            <div style={{ margin: '20px' }}>
                <Tooltip content="Light theme tooltip" theme="light">
                    <Button>Light theme</Button>
                </Tooltip>
            </div>
        </div>
    );
};

export default TooltipTest;
