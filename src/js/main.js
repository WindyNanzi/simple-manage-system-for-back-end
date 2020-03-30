require.config({
  paths:{
    jquery:'./lib/jquery.min',
    axios:'./lib/axios.min'
  }
})

define(function(){
  require(
    [
      'jquery',
      'route/router'
    ],
    function(
      $,
      router
    ){
      document.location.hash = '/'
      router.init()
    })
})