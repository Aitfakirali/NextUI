import { create } from '@storybook/theming/create';

export default create({
  base: 'dark',
  brandTitle: 'NexUI',
  brandUrl: 'https://your-nexui-url.com',
  brandImage: '/path/to/your/logo.svg',
  brandTarget: '_self',
  
  // UI
  appBg: '#1a1a1a',
  appContentBg: '#141414',
  appBorderColor: '#2e2e2e',
  appBorderRadius: 8,

  // Typography
  fontBase: '"Inter", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: '#ffffff',
  textInverseColor: '#1a1a1a',

  // Toolbar default and active colors
  barTextColor: '#999999',
  barSelectedColor: '#ffffff',
  barBg: '#1a1a1a',

  // Form colors
  inputBg: '#1a1a1a',
  inputBorder: '#2e2e2e',
  inputTextColor: '#ffffff',
  inputBorderRadius: 4,
}); 