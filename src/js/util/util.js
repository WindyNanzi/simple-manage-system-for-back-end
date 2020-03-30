define(function () {
  'use strict';
  /**
 * [getParam ]
 * @param  {String} name 
 * @param  {String} url   [default:location.href]
 * @return {String|Boolean}  
 */
  function getParam(name, url) {
    if (typeof name !== 'string') return false;
    if (!url) url = window.location.href;
    // 当遇到name[xx]时，对方括号做一下转义为 name\[xxx\]，因为下面还需要使用name做正则
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)');
    var results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
  }
  /**
   * [setParam 设置单个参数]
   * @param {String} name
   * @param {String|Number} val  
   * @return {String|Boolean}  
   */
  function setParam(name, val, url) {
    if (typeof name !== 'string') return false;
    if (!url) url = window.location.href;
    var _name = name.replace(/[\[\]]/g, '\\$&');
    var value = name + '=' + encodeURIComponent(val);
    var regex = new RegExp(_name + '=[^&]*');
    var urlArr = url.split('#');
    var result = '';

    if (regex.exec(url)) {
      result = url.replace(regex, value);
    } else {
      result = urlArr[0] + '&' + value + (urlArr[1] || '');
    }

    return result
  }
  /**
   * [getParams 获取多个参数]
   * @param  {String} names [多个用空格分割]
   * @param  {String} url   [default:location.href] 
   * @return {[String|Boolean]}       
   */
  function getParams(names, url) {
    if (typeof name !== 'string') return false;
    var names = names.split(' ');
    var result = {};
    var i = 0,
      len = names.length;
    if (names.length === 0) return false;
    for (; i < len; i++) {
      result[names[i]] = getParam(names[i], url);
    }
    return result;
  }

  /**
   * [setParams 设置多个参数]
   * @param {Object} obj 
   * @param  {String} url   [default:location.href] 
   * @return {[String|Boolean]}       
   */
  function setParams(obj, url) {
    var result = url || '';
    if (Object.prototype.toString.call(obj) !== '[object Object]') return false;
    for (var name in obj) {
      result = setParam(name, obj[name], result);
    }
    return result;
  }

  /**
   * [getHash 方法]
   * @param  {[String]} url [default:location.href]
   * @return {[String]}     
   */
  function getHash(url) {
    return decodeURIComponent(url ? url.substring(url.indexOf('#') + 1) : window.location.hash.substring(1));
  }

  function getHashPath(url){
    let hash = getHash(url)
    return hash.substring(0,hash.indexOf('?'))
  }

  /**
  * [setHash 方法]
  * @param {String} hash 
  */
  function setHash(hash) {
    window.location.replace('#' + encodeURIComponent(hash));
  }

  /**
  * [removeHash 方法]
  */
  function removeHash() {
    window.location.replace('#', '');
  }

  return {
    getParam,
    getParams,
    getHash,
    getHashPath,
    setParam,
    setParams,
    setHash,
    removeHash
  }
});