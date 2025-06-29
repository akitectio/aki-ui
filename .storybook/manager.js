// Note: The main theme configuration is in manager.ts
// This file is kept for reference but the active configuration is in manager.ts
import { addons } from '@storybook/manager-api';

addons.setConfig({
    isFullscreen: false,
    showNav: true,
    showPanel: true,
    panelPosition: 'bottom',
    enableShortcuts: true,
    showToolbar: true,
    toolbar: {
        title: { hidden: false },
        zoom: { hidden: false },
        eject: { hidden: false },
        copy: { hidden: false },
        fullscreen: { hidden: false },
    },
});
