// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Custler Pool',
  tagline: 'The Most Trusted Everscale Staking Pool',
  url: 'https://custler.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/custler-icon-orange.svg',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Custler', // Usually your GitHub org/user name.
  projectName: 'custler.io', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ru'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Custler Pool',
        logo: {
          alt: 'Custler Pool',
          src: 'img/custler-icon-orange.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Stake Now',
          },
          // {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://t.me/Custler',
            label: 'Contact',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Custler Repos',
            items: [
              {
                label: 'custler.uninode',
                href: 'https://github.com/Everscale-Network/custler.uninode',
              },
              {
                label: 'Custler',
                href: 'https://github.com/Custler?tab=repositories',
              },
            ],
          },
          {
            title: 'Everscale Repos',
            items: [
              
              {
                label: 'Everscale',
                href: 'https://github.com/everscale-org',
              },
              {
                label: 'EverX Labs',
                href: 'https://github.com/tonlabs',
              },
            ],
          },
          {
            title: 'Contact Custler',
            items: [
              // {
              //   label: 'Blog',
              //   to: '/blog',
              // },
              {
                label: 'Telegram',
                href: 'https://t.me/Custler',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} -—   Made with 🧡 by Custler.io`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
