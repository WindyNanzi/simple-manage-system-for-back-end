define(
  [
    'jquery',
    'template/layout/sidebar',
    'route/route'
  ],function(
    $,
    sidebarTemplate,
    route
  ){
  return {
    init(){
      this.render()
      this.bind()
    },
    render(){
      this.createHtmlString()
    },
    bind(){

    },
    createHtmlString(){
      let { routeMap } = route
      let { aside, asideLogo, navItem } = sidebarTemplate
      
      let asideStr = aside({ className:'white' })
      let asideLogoStr = asideLogo()
      let navItemsStr = ''
      for(const key in routeMap){
        const item = routeMap[key]
        navItemsStr += navItem(item)
      }

      $(asideStr).append(asideLogoStr)
      $(asideStr).append(navItemsStr)

      console.log($(asideStr).html())
      return asideStr

    }
  }

})