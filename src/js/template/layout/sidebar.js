define(function(){
  return {
    aside: (param) => (`
      <aside id='sidebar' class='${param.className}'>
        <header></header>
        <nav></nav>
        <footer></footer>
      </aside>
    `),

    asideLogo: (param)=>(`
      <figure id='logo'>
        
      </figure>
    `),

    navItem: (param)=> (`
      <div class=${param.className} title=${param.text}>
        <div class='nav-item-icon-box' >
          <span class='iconfont ${param.icon}'></span>
        </div>
        <div class='nav-item-text-box'>
          <span>${param.text}</span>
        </div>
      </div>
    `),


  }
})