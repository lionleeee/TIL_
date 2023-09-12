var CONST = require("./const");

module.exports = {
  title: `Today lionlee Learned`,
  description: `lionlee Personal Wiki (Today I Learned)`,
  base: "/TIL/",
  dest: 'build',
  head: [
    ['link', {
      rel: 'icon',
      href: '/logo.png'
    }]
  ],
  themeConfig: {
    sidebar: [
     
      {
        title: 'Daily Coding',
        children: CONST.DailyCodingList
      }, {
        title: 'Git',
        children: CONST.GitList
      },
      {
        title: 'Architecture',
        children: CONST.Architecture
      },
      {
        title: 'CSharp',
        children: CONST.CsharpList
      },
       {
        title: 'Module Bundler',
        children: CONST.BundlerList
      },
      {
        title: 'Angular',
        children: CONST.AngularList
      },
    ],
    nav: [{
        text: 'GitHub',
        link: 'https://github.com/lionleeee/'
      }
    ]
  },
}