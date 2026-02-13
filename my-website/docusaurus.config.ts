
import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Do NOT use browser APIs or JSX here.

const config: Config = {
  title: 'Document Service Portal',
  tagline: 'Engineering Platform',
  favicon: 'img/abb_logo.svg',

  future: {
    v4: true,
  },

  // GitHub Pages deployment settings
  url: 'https://Rameshgalaxy.github.io',
  baseUrl: '/',

  organizationName: 'Rameshgalaxy',
  projectName: 'dsyou',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/Rameshgalaxy/dsyou/tree/main/',
        },
        blog: {
          showReadingTime: false,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl: 'https://github.com/Rameshgalaxy/dsyou/tree/main/',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Home',
      logo: {
        alt: 'My Site Logo',
        src: 'img/abb_logo.svg',
      },
      items: [
        {type: 'docSidebar', sidebarId: 'alarmSidebar', label: 'Alarm', position: 'left'},
        {type: 'docSidebar', sidebarId: 'eventSidebar', label: 'Event', position: 'left'},
        {type: 'docSidebar', sidebarId: 'trendSidebar', label: 'Trend', position: 'left'},

        {to: '/ui-docs-link-test', label: 'UI→Docs Test', position: 'right'},
        {href: 'https://github.com/Rameshgalaxy/dsyou', label: 'GitHub', position: 'right'},
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Monitoring',
          items: [
            {label: 'Alarm', to: '/docs/monitoring/alarm/overview'},
            {label: 'Event', to: '/docs/monitoring/event/overview'},
            {label: 'Trend', to: '/docs/monitoring/trend/overview'},
          ],
        },
        {
          title: 'More',
          items: [{label: 'GitHub', href: 'https://github.com/Rameshgalaxy/dsyou'}],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
