(this.webpackJsonpweather=this.webpackJsonpweather||[]).push([[0],{12:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),c=n(2),l=n.n(c),i=n(3),r=n(4),u=n(6),s=n(5),h=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).state={users:[],geolocation:[],geolocation3:[],geolocation5:[],geolocation6:[]},e}return Object(r.a)(n,[{key:"componentDidMount",value:function(){var e=this,t="https://api.ipregistry.co/?key=ny56ten5lcezli";fetch(t).then((function(e){return e.json()})).then((function(e){return console.log([e])})),fetch(t).then((function(e){return e.json()})).then((function(t){return e.setState({geolocation6:[t]})}))}},{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement("h1",null,"geoLocation 6"),a.a.createElement("div",null,this.state.geolocation6.map((function(e){return a.a.createElement("div",{key:e.ip},a.a.createElement("p",null,e.ip),a.a.createElement("p",null,e.type),a.a.createElement("p",null,"latitude: ",e.location.city),a.a.createElement("p",null,"latitude: ",e.location.latitude),a.a.createElement("p",null,"longitude: ",e.location.longitude))}))))}}]),n}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,n){e.exports=n(12)}},[[7,1,2]]]);
//# sourceMappingURL=main.bac936e6.chunk.js.map