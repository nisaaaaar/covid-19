(this["webpackJsonpcovid-19"]=this["webpackJsonpcovid-19"]||[]).push([[0],{27:function(e,a,t){e.exports=t(56)},34:function(e,a,t){},55:function(e,a,t){},56:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(5),c=t.n(r),o=(t(15),t(32),t(33),t(34),t(11)),s=t(2),i=t(26),m=t(12),u=t.n(m),d=t(13),E=t(24);var p=function(){var e=Object(n.useState)([]),a=Object(o.a)(e,2),t=a[0],r=a[1],c=Object(n.useState)([]),m=Object(o.a)(c,2),p=m[0],b=m[1],h=Object(n.useState)(""),x=Object(o.a)(h,2),f=(x[0],x[1],Object(n.useState)(!0)),g=Object(o.a)(f,2),v=(g[0],g[1]);Object(n.useEffect)((function(){u.a.all([u.a.get("https://corona.lmao.ninja/v2/all"),u.a.get("https://corona.lmao.ninja/v2/countries")]).then((function(e){console.log(e.data),r(e[0].data),b(e[1].data),v(!1)})).catch((function(e){console.log(e)}))}),[]);var y=new Date(parseInt(t.updated)).toString(),w=p.map((function(e,a){return l.a.createElement("div",{lat:e.countryInfo.lat,lng:e.countryInfo.long,style:{color:"black",backgroundColor:"#F86666",height:"25px",width:"45px",textAlign:"center",borderRadius:"30%"}},l.a.createElement("img",{height:"10px",src:e.countryInfo.flag}),l.a.createElement("br",null),e.cases)}));return l.a.createElement("div",null,l.a.createElement("br",null),l.a.createElement("h1",{"data-tip":"Last modified date: 16/05/2020 - v2.2",style:{textAlign:"center",textDecoration:"underline",color:"#cc6699"}},"COVID-19 Worldwide"),l.a.createElement("br",null),l.a.createElement(i.a,{className:"stats-card ml-2 mr-2"},l.a.createElement(s.a,{text:"white",className:"text-center",style:{margin:"10px",borderRadius:"5%",background:"#8BBDE8",boxShadow:"5px 5px 20px black"}},l.a.createElement(s.a.Body,null,l.a.createElement(s.a.Title,null,"Cases"),l.a.createElement(d.a,{value:t.cases,displayType:"text",thousandSeparator:!0,style:{fontSize:"30px"}})),l.a.createElement(s.a.Footer,null,l.a.createElement("small",null,"Last updated ",y))),l.a.createElement(s.a,{text:"white",className:"text-center",style:{margin:"10px",borderRadius:"5%",background:"#F86666",boxShadow:"5px 5px 20px black"}},l.a.createElement(s.a.Body,null,l.a.createElement(s.a.Title,null,"Deaths"),l.a.createElement(s.a.Text,null," ",l.a.createElement(d.a,{value:t.deaths,displayType:"text",thousandSeparator:!0,style:{fontSize:"30px"}}))),l.a.createElement(s.a.Footer,null,l.a.createElement("small",null,"Last updated ",y))),l.a.createElement(s.a,{text:"white",className:"text-center",style:{margin:"10px",borderRadius:"5%",background:"#3CAD2C",boxShadow:"5px 5px 20px black"}},l.a.createElement(s.a.Body,null,l.a.createElement(s.a.Title,null,"Recovered"),l.a.createElement(s.a.Text,null," ",l.a.createElement(d.a,{value:t.recovered,displayType:"text",thousandSeparator:!0,style:{fontSize:"30px"}}))),l.a.createElement(s.a.Footer,null,l.a.createElement("small",null,"Last updated ",y)))),l.a.createElement("br",null),l.a.createElement("div",{className:"block-map border-10  mb-5",style:{height:"100vh",width:"80%",margin:"auto",border:"5px solid black",borderRadius:"10px",boxShadow:"10px 10px 30px #cc6699"}},l.a.createElement(E.a,{bootstrapURLKeys:{key:"AIzaSyAzUvt-N4u0IEyEt1-JZeMaSmsVM498bKA"},defaultCenter:{lat:28,lng:84},defaultZoom:4},w)))};t(55);var b=function(){return l.a.createElement("footer",null,l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row justify-content-center mt-5"},l.a.createElement("div",{className:"col-12 col-sm-4 align-self-center"},l.a.createElement("div",{className:"text-center"},l.a.createElement("a",{className:"btn btn-social-icon btn-instagram mr-2",href:"https://www.instagram.com/nisaaaaar/"},l.a.createElement("i",{className:"fa fa-instagram"})),l.a.createElement("a",{className:"btn btn-social-icon btn-linkedin mr-2",href:"https://www.linkedin.com/in/nisar-ahmad-a9ab30110/"},l.a.createElement("i",{className:"fa fa-linkedin"})),l.a.createElement("a",{className:"btn btn-social-icon btn-github mr-2",href:"https://github.com/nisaaaaar"},l.a.createElement("i",{className:"fa fa-github"})),l.a.createElement("a",{className:"btn btn-social-icon",href:"mailto:"},l.a.createElement("i",{className:"fa fa-envelope-o"}))))),l.a.createElement("div",{className:"row justify-content-center"},l.a.createElement("div",{className:"col-auto mt-5"},l.a.createElement("p",{style:{color:"white"}}," Copyright \xa9 NISAR AHMAD (2020) #StaySafe")))))};var h=function(){return l.a.createElement("div",null,l.a.createElement(p,null),l.a.createElement(b,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[27,1,2]]]);
//# sourceMappingURL=main.7b88e34b.chunk.js.map