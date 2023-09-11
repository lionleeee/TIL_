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
        title: 'Monthly I Learned',
        children: CONST.MILList
      },
      {
        title: 'Books',
        children: CONST.BooksList
      },
      {
        title: 'JavaScript',
        children: CONST.JavaScriptList
      },{
        title: 'React',
        children: CONST.ReactList
      },{
        title: 'Daily Coding',
        children: CONST.DailyCodingList
      },{
        title: 'Angular',
        children: CONST.AngularList
      }, {
        title: 'Javascript Testing',
        children: CONST.JsTestingList
      }, {
        title: 'Git',
        children: CONST.GitList
      }, {
        title: 'Module Bundler',
        children: CONST.BundlerList
      },{
        title: 'DevOps',
        children: CONST.DevOpsList
      }, {
        title: 'ETC',
        children: CONST.ETCList
      }
    ],
    nav: [{
        text: 'GitHub',
        link: 'https://github.com/lionleeee/'
      }
    ]
  },
}