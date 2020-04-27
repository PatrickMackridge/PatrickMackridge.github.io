(this["webpackJsonpreact-portfolio-website"]=this["webpackJsonpreact-portfolio-website"]||[]).push([[0],{14:function(e,a,t){e.exports=t(29)},19:function(e,a,t){},20:function(e,a,t){},29:function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),r=t(5),o=t.n(r),c=(t(19),t(20),t(2)),l=function(){return s.a.createElement("nav",null,s.a.createElement("li",null,s.a.createElement(c.a,{to:"/"},"Home")),s.a.createElement("li",null,s.a.createElement(c.a,{to:"/projects"},"Projects")),s.a.createElement("li",null,s.a.createElement(c.a,{to:"/contact"},"Contact")))},i=t(7),m=t.n(i),p=function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("h1",{className:"title",id:"myName"},"Patrick Mackridge"),s.a.createElement("div",{className:"homePageInfo"},s.a.createElement("p",{className:"introText"},"Hi, I'm Patrick. I'm a full stack software developer who recently graduated from the Northcoders coding bootcamp - and this is my website! Head over to the projects page to see the various projects I am either working on or have previously worked on. From there you can click through to the applications themselves, or check out their GitHub repos. If you want to know anything more about me or my projects you can get in touch via the contact page and I'll get back to you as soon as I can. Thanks!"),s.a.createElement("img",{src:m.a,className:"mePicture",alt:"Me standing on a frozen Norwegian lake"}),s.a.createElement("ul",{className:"exp"},s.a.createElement("h3",null,"Experience"),s.a.createElement("li",null,"Northcoders Bootcamp: Jan 2020 - April 2020"),s.a.createElement("li",null,"Data Production Analyst: June 2018 - Jan 2020"))))},h={wormplay:{desc:"Wormplay is an online browser based game with realtime two player interaction! It was built by me and 3 other northcoders students as our final project. In it, players try to spell the highest scoring word possible by dragging and dropping letters onto a moving worm with their opponents face! Click the link below to take the worm for a whirl! (or check out the repos on GitHub)",hosted:"https://wormplay.netlify.app/",feRepo:"https://github.com/chicorycolumn/wormplay-FE",beRepo:"https://github.com/nadiarashad/wormplay-BE"},ncNews:{desc:"NC-News is an article aggregation site built on a RESTful API made during my time at Northcoders bootcamp. On the site you can view and vote on articles and comments, and logged in users can post comments to articles. Check out it out on Netlify or download the repo on GitHub! (ps. log in as user 'jessjelly' for the full user experience)",feRepo:"https://github.com/PatrickMackridge/nc-news-frontend",beRepo:"https://github.com/PatrickMackridge/nc-news-backend",feHosted:"https://patrick-mackridge-nc-news.netlify.com",beHosted:"https://patrick-mackridge-nc-news.herokuapp.com/api"},browserBeat:{desc:"Banging browser based Beats 'n' Bass! This project uses the Tone.js library to create 2 fully functioning musical synths/sequencers - one bass and one drums - allowing you to make music to your heart's content straight from your internet browser! The CSS design is a nod to a pair of classic electronic instruments from the past. Click on the link to get those grooves going or get on the GitHub repo.",hosted:"https://patrickmackridge.github.io/browser-beats/",repo:"https://github.com/PatrickMackridge/browser-beats"},mappingMeteorites:{desc:"A React app for visualising meteorite data, which comes courtesy of NASA. It uses their Open Data Portal meteorite data via The Socrata Open Data API (SODA). This app started life at as a paired sprint at Northcoders coding bootcamp. The app contains a wealth of visualised data, made with help from react-chartjs-2 and react- leaflet. Click the link to view those visualisations! (or the GitHub repo)",hosted:"https://patrickmackridge.github.io/mapping-meteorites/",repo:"https://github.com/PatrickMackridge/mapping-meteorites"}},d=function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("h1",{className:"title"},"Projects"),s.a.createElement("div",{className:"projectPane"},s.a.createElement("div",{className:"projectBox"},s.a.createElement("p",{className:"proj-name"},"Wormplay"),s.a.createElement("p",{className:"proj-desc"},h.wormplay.desc),s.a.createElement("div",{className:"proj-links"},s.a.createElement("a",{href:h.wormplay.hosted},"Enter The Worm!"),s.a.createElement("a",{href:h.wormplay.feRepo},"FE-Repo"),s.a.createElement("a",{href:h.wormplay.beRepo},"BE-Repo"))),s.a.createElement("div",{className:"projectBox"},s.a.createElement("p",{className:"proj-name"},"NC-News"),s.a.createElement("p",{className:"proj-desc"},h.ncNews.desc),s.a.createElement("div",{className:"proj-links"},s.a.createElement("a",{href:h.ncNews.feHosted},"Hosted"),s.a.createElement("a",{href:h.ncNews.beHosted},"API"),s.a.createElement("a",{href:h.ncNews.feRepo},"FE-Repo"),s.a.createElement("a",{href:h.ncNews.beRepo},"BE-Repo"))),s.a.createElement("div",{className:"projectBox"},s.a.createElement("p",{className:"proj-name"},"Browser Beats"),s.a.createElement("p",{className:"proj-desc"},h.browserBeat.desc),s.a.createElement("div",{className:"proj-links"},s.a.createElement("a",{href:h.browserBeat.hosted},"Make Music"),s.a.createElement("a",{href:h.browserBeat.repo},"GitHub repo"))),s.a.createElement("div",{className:"projectBox"},s.a.createElement("p",{className:"proj-name"},"Mapping Meteorites"),s.a.createElement("p",{className:"proj-desc"},h.mappingMeteorites.desc),s.a.createElement("div",{className:"proj-links"},s.a.createElement("a",{href:h.mappingMeteorites.hosted},"App"),s.a.createElement("a",{href:h.mappingMeteorites.repo},"GitHub repo")))))},u=t(8),g=t(9),E=t(10),f=t(12),b=t(13),w=t(11),k=t.n(w),N=function(e){Object(b.a)(t,e);var a=Object(f.a)(t);function t(){var e;Object(g.a)(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=a.call.apply(a,[this].concat(s))).state={name:"",message:"",emailAddress:"",response:"",showResponse:!1,sending:!1},e.sendEmail=function(){var a=e.state,t=a.name,n=a.message,s=a.emailAddress;if(/\S+@\S+\.\S+/.test(s)){var r={name:t,message:n,email:s};k.a.send("gmail","contactemail",r,"user_BgQ01PRjvRYfs2HeS7tb0").then((function(){e.setState({name:"",message:"",emailAddress:"",response:"Thanks for getting in touch!",showResponse:!0,sending:!1})})).catch((function(e){console.log(e)})),e.setState({showResponse:!1,sending:!0})}else e.setState({showResponse:!0,response:"Please provide a valid email address"})},e.handleChange=function(a,t){e.setState(Object(u.a)({},a,t))},e.handleSubmit=function(a){var t=e.state,n=t.name,s=t.message,r=t.emailAddress;a.preventDefault(),""!==n&&""!==s&&""!==r?e.sendEmail():e.setState({response:"Please complete all fields",showResponse:!0})},e}return Object(E.a)(t,[{key:"render",value:function(){var e=this,a=this.state,t=a.name,n=a.message,r=a.emailAddress,o=a.showResponse,c=a.response,l=a.sending;return s.a.createElement(s.a.Fragment,null,o?s.a.createElement("p",{className:"response"},c):null,s.a.createElement("h1",{className:"title"},"Contact"),l?s.a.createElement("p",null,"Sending email, please wait..."):s.a.createElement("form",{onSubmit:this.handleSubmit},s.a.createElement("label",{className:"name"},"Name:",s.a.createElement("textarea",{name:"name",id:"formName",rows:"1",placeholder:"Your name..",value:t,onChange:function(a){e.handleChange(a.target.name,a.target.value)}})),s.a.createElement("label",{className:"emailAddress"},"Email:",s.a.createElement("textarea",{name:"emailAddress",id:"formEmail",rows:"1",placeholder:"Your email..",value:r,onChange:function(a){e.handleChange(a.target.name,a.target.value)}})),s.a.createElement("div",{className:"message-container"},s.a.createElement("label",{className:"message"},"Get in touch:",s.a.createElement("textarea",{name:"message",id:"message",placeholder:"Ask me a question about anything, or just say hi!",value:n,onChange:function(a){e.handleChange(a.target.name,a.target.value)}}))),s.a.createElement("input",{type:"submit",value:"Submit",className:"submitBtn"})))}}]),t}(n.Component);var v=function(){return s.a.createElement("div",{className:"App"},s.a.createElement(l,null),s.a.createElement(c.b,null,s.a.createElement(p,{path:"/"}),s.a.createElement(d,{path:"/projects"}),s.a.createElement(N,{path:"/contact"})))};o.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(v,null)),document.getElementById("root"))},7:function(e,a,t){e.exports=t.p+"static/media/MeOnnaLake.fb21ae67.jpeg"}},[[14,1,2]]]);
//# sourceMappingURL=main.30e3d719.chunk.js.map