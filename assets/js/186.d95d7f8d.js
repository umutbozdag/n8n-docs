(window.webpackJsonp=window.webpackJsonp||[]).push([[186],{1523:function(e,t,o){"use strict";o.r(t);var n=o(26),s=Object(n.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"_6-notifying-the-team"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_6-notifying-the-team"}},[e._v("#")]),e._v(" 6. Notifying the Team")]),e._v(" "),n("p",[e._v("In this step of the workflow you will learn how to send messages to a Discord channel using the "),n("em",[e._v("Discord")]),e._v(" node.")]),e._v(" "),n("p",[e._v("Now that you have a calculated summary of the booked orders you need to notify Nathan’s team in their Discord channel. n8n has a "),n("strong",[e._v("Discord node")]),e._v(" that allows you to send messages. We'll be sending the messages to the "),n("a",{attrs:{href:"https://discord.gg/G98WXzsjky",target:"_blank",rel:"noopener noreferrer"}},[e._v("n8n server"),n("OutboundLink")],1),e._v(" on Discord.")]),e._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[e._v("💡 Communication nodes")]),e._v(" "),n("p",[e._v("You can replace the "),n("em",[e._v("Discord")]),e._v(" node with another communication app. For example, n8n also has nodes for "),n("a",{attrs:{href:"https://docs.n8n.io/nodes/n8n-nodes-base.slack/",target:"_blank",rel:"noopener noreferrer"}},[n("em",[e._v("Slack")]),n("OutboundLink")],1),e._v(" and "),n("a",{attrs:{href:"https://docs.n8n.io/nodes/n8n-nodes-base.mattermost/",target:"_blank",rel:"noopener noreferrer"}},[n("em",[e._v("Mattermost")]),n("OutboundLink")],1),e._v(".")])]),e._v(" "),n("p",[e._v("In your workflow, add a "),n("em",[e._v("Discord")]),e._v(" node connected to the "),n("em",[e._v("Function")]),e._v(" node. In the "),n("em",[e._v("Discord")]),e._v(" node window, configure the parameters:")]),e._v(" "),n("div",{pre:!0},[n("ul",[n("li",[n("em",[e._v("Webhook URL:")]),e._v(" Please use the URL that you received in the email upon signing up.")]),e._v(" "),n("li",[n("em",[e._v("Text (Expression):")]),e._v(" "),n("code",[e._v('This week we have {{$json["totalBooked"]}} booked orders with a total value of {{$json["bookedSum"]}}. My Unique ID: {{$node["HTTP Request"].parameter["headerParametersUi"]["parameter"][0]["value"]}}')])])])]),n("figure",[n("img",{staticStyle:{width:"100%"},attrs:{src:o(425),alt:"Discord node expression"}}),n("figcaption",{attrs:{align:"center"}},[n("i",[e._v("Discord node expression")])])]),e._v(" "),n("p",[e._v("Now execute the "),n("em",[e._v("Discord")]),e._v(" node and if all works well, you should get a message in Discord:")]),e._v(" "),n("figure",[n("img",{staticStyle:{width:"100%"},attrs:{src:o(426),alt:"Discord message"}}),n("figcaption",{attrs:{align:"center"}},[n("i",[e._v("Discord message")])])]),e._v(" "),n("h2",{attrs:{id:"what-s-next"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#what-s-next"}},[e._v("#")]),e._v(" What's next?")]),e._v(" "),n("p",[n("strong",[e._v("Nathan 🙋")]),e._v(": Incredible, you've saved me so many hours of tedious work already! Now I can simply execute this workflow when I need it. I just need to remember to run it every Monday morning at 9 am...")]),e._v(" "),n("p",[n("strong",[e._v("You 👩‍🔧")]),e._v(": Don't worry about that, you can actually schedule the workflow to run on a specific day, time, or interval. I'll set this up in the next step.")])])}),[],!1,null,null,null);t.default=s.exports},425:function(e,t,o){e.exports=o.p+"assets/img/Discord-node.5b0c5311.png"},426:function(e,t,o){e.exports=o.p+"assets/img/Discord-output.70f51962.png"}}]);