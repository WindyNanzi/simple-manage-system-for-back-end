define(['util/util'],function(
  util
) {
  'use strict';
  
  function getHash(){
    let path = util.getHashPath()
    return {
      path
    }
  }
  
  function getCurrentPageName(){
    let currentPath = getHash().path
    let currentPageName = 'dashboard'
    switch(currentPath){
      case '/':
        currentPageName = 'dashboard'
        break
      default:
        break
    }
    return currentPageName
  }
  
  const routeMap = {
    'dashboard':{
      path:'/',
      icon:'icon-dashboard',
      text:'首页',
    }
  }

  return {
    getCurrentPageName,
    routeMap
  }
});