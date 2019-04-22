function classname() {
  var res = {};
  var str = '';
  var _arg = Array.from(arguments);
  var toString = Object.prototype.toString;

  if (getType(arguments[0]) === 'nodelist' || (getType(arguments[0]) !== 'string' && arguments[0][0])){
    handleMulElement(arguments);
    return ;
  } else if (getType(arguments[0]) === 'htmldivelement') {
    handleSinElement(arguments);
    return ;
  } else {
    return getClassName(_arg);
  }

  function getClassName(arg) {
    arg.forEach(function (el){
      switch(getType(el)) {
        case "object" :
          handleObj(el);
          break;
        case "array" :
          handleArr(el);
          break;
        case "function": 
          handleFunc(el);
          break;
        case "null":
        case "undefined":
          break;
        case "string":
          if(el.length === 0) break;
        default:
          res[el] = 'default';
          break;
      }
    });

    for(var i in res) {
      if(res[i] !== 'null') str = str + i + ' ';
    }

    return str.slice(0, str.length - 1);
  }

  function getType(el) {
    var _type = toString.call(el).slice(8, -1).toLowerCase();
    return _type;
  }

  function handleObj(obj) {
    Object.keys(obj).forEach(function(key) {
      if(obj[key]){
        res[key] = 'obj';
      } else {
        res[key] = 'null';
      }
    })
  }

  function handleArr(el) {
    el.forEach(function(item) {
      if(isNotObj(item)) {
        res[item] = 'arr';
      }
    })
  }

  function handleFunc(func) {
    var key = func();
    if(isNotObj(key)) {
      res[key] = 'func';
    }
  }

  function handleMulElement(arg) {
    var _arg = Array.from(arg).slice(1);
    var nodeArr = Array.from(arg[0]);
    var res = getClassName(_arg);
    
    nodeArr.forEach(function(el) {
      el.className += res;
    })
  }

  function handleSinElement(arg) {
    var _arg = Array.from(arg).slice(1);
    var res = getClassName(_arg);

    arg[0].className += res;
  }

  function isNotObj(key) {
    return (!res[key] || (res[key] !== 'obj' && res[key] !== 'null'));
  }
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = classname;
}


let res = classname('zhui-btn', '', {
  ['zhui-btn-primary']: true
});
console.log(res)