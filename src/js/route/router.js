define([
  'jquery',
  'layout/sidebar', 
  'layout/page-main'
  ],function(
    $,
    sidebar,
    pageMain
  ){
  return {
    currentPath: '/',
    currentPage: {},
    init: function(){
      this.getCurrentPath()
      this.loadPage()
      sidebar.init()
    },
    getCurrentPath: function(){
      return document.location.hash.substr(0,1)
    },
    loadPage: async function(){
      let pagename = 'dashboard'
      switch(this.currentPath){
        case '/':
          break;
        }
      await this.setCurrentPageByPathSync(pagename)
    },
    setCurrentPageByPathSync: async function(path){
      await require(['./page/'+path],function(reqpage){
        currentPage = reqpage
        currentPage.init()
      })
    }
  }
})