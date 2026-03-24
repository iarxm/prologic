import { defineConfig } from 'vitepress';
import { withSidebar } from 'vitepress-sidebar';

const vitePressOptions = {
  title: "PRO LOGIC",
  description: "Pro event logistics for surf teams",
  base: "/wsl-logi/",
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Docs', link: '/26qs-mor/index' },
    ],
    outline: [2,4],
    repo: 'iarxm/wsl-logi',
    logo: '/img/logo.png',
    socialLinks: [
      { icon: 'github', link: 'https://github.com/iarxm/wsl-logi' }
    ]
  }
};
const vitePressSidebarOptions = {
  documentRootPath: '/docs',
  collapsed: false,
  capitalizeFirst: true,
  useTitleFromFrontmatter: true,
  useTitleFromFileHeading: true,
  // useTitleFromFrontmatter: true,
};
export default defineConfig(withSidebar(vitePressOptions, vitePressSidebarOptions));
    //autosidebar
    //sidebar: getSidebar({ 
    //        contentRoot: '/docs', 
    //        contentDirs: [
    //            'meetings',
    //            'minutes',
    //            'guides'
    //        ], 
    //        collapsible: true, 
    //        collapsed: true,
    //        useFrontmatter: true
    //    }),
    //default method
    //sidebar: [
    //  {
    //    text: 'Guides',
    //    items: [
    //      { text: 'Meeting Formats', link: '/guides/meeting-formats' },
    //      { text: 'General Service', link: '/guides/general-service' }
    //    ]
    //  }
    //],
