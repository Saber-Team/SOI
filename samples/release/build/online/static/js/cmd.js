define("0Cmb+",[],function(){return{name:"lib"}});
define("OZs6w",["require","exports","module"],function(require,exports,module){module.exports={name:"a"}});
define("JB9tk",["require","exports","module","0Cmb+"],function(require,exports,module){var lib=require("0Cmb+");var url=kerneljs.url("/soi/samples/release/build/online/static/swf/ZeroClipboard.swf");module.exports={name:lib.name,url:url}});
define("nzn5P",["require","exports","module"],function(require,exports,module){"use strict";var API="http://zhida.baidu.com:8080";exports.exec=function(str){var arr=str.split("");arr=arr.reverse();return arr.join("")}});
require(["OZs6w","JB9tk","nzn5P"],function(a,b,cal){"use strict";var img=kerneljs.url("/soi/samples/release/build/online/static/img/banner.png");var button=document.getElementsByTagName("button")[0],input=document.getElementById("pid"),ret=document.querySelectorAll(".ret")[0];function bind(){document.addEventListener("click",function(){var str=input.value;ret.innerText=cal.exec(str)},false)}bind()});