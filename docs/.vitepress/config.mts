import { defineConfig } from 'vitepress';
import { withSidebar } from 'vitepress-sidebar';

const vitePressOptions = {
  title: "PRO LOGIC",
  description: "Pro event logistics for surf teams",
  base: "/prologic/",
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Docs', link: '/prin/logic' },
    ],
    outline: [2,4],
    repo: 'iarxm/prologic',
    logo: '/img/logo.png',
    socialLinks: [
      { icon: 'github', link: 'https://github.com/iarxm/prologic' }
    ]
  }
};
const vitePressSidebarOptions = {
  documentRootPath: '/docs',
  collapsed: false,
  capitalizeFirst: true,
  useTitleFromFrontmatter: true,
  useTitleFromFileHeading: true,
  useFolderTitleFromIndexFile: true,
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

