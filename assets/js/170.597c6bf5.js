(window.webpackJsonp=window.webpackJsonp||[]).push([[170],{1359:function(e,t,a){e.exports=a.p+"assets/img/workflow.5e639a7a.png"},1360:function(e,t,a){e.exports=a.p+"assets/img/AirtableTrigger_node.79a90984.png"},1361:function(e,t,a){e.exports=a.p+"assets/img/Mattermost_node.22014d64.png"},2015:function(e,t,a){"use strict";a.r(t);var r=a(26),o=Object(r.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"airtable-trigger"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#airtable-trigger"}},[e._v("#")]),e._v(" Airtable Trigger")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://airtable.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Airtable"),r("OutboundLink")],1),e._v(" is a spreadsheet-database hybrid, with the features of a database but applied to a spreadsheet. The fields in an Airtable table are similar to cells in a spreadsheet, but have types such as 'checkbox', 'phone number', and 'drop-down list', and can reference file attachments like images.")]),e._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[e._v("🔑 Credentials")]),e._v(" "),r("p",[e._v("You can find authentication information for this node "),r("RouterLink",{attrs:{to:"/nodes/credentials/Airtable/"}},[e._v("here")]),e._v(".")],1)]),e._v(" "),r("h2",{attrs:{id:"example-usage"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#example-usage"}},[e._v("#")]),e._v(" Example Usage")]),e._v(" "),r("p",[e._v("This workflow allows you to receive a Mattermost message when new data gets added to Airtable. You can also find the "),r("a",{attrs:{href:"https://n8n.io/workflows/799",target:"_blank",rel:"noopener noreferrer"}},[e._v("workflow"),r("OutboundLink")],1),e._v(" on n8n.io. This example usage workflow would use the following nodes.")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:""}},[e._v("Airtable Trigger")])]),e._v(" "),r("li",[r("RouterLink",{attrs:{to:"/nodes/nodes-library/nodes/Mattermost/"}},[e._v("Mattermost")])],1)]),e._v(" "),r("p",[e._v("The final workflow should look like the following image.")]),e._v(" "),r("p",[r("img",{attrs:{src:a(1359),alt:"A workflow with the Airtable Trigger node"}})]),e._v(" "),r("h3",{attrs:{id:"_1-airtable-trigger-node"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-airtable-trigger-node"}},[e._v("#")]),e._v(" 1. Airtable Trigger node")]),e._v(" "),r("p",[e._v("The Airtable Trigger node will trigger the workflow when new data gets added to Airtable.")]),e._v(" "),r("ol",[r("li",[e._v("First of all, you'll have to enter credentials for the Airtable Trigger node. You can find out how to do that "),r("RouterLink",{attrs:{to:"/nodes/credentials/Airtable/"}},[e._v("here")]),e._v(".")],1),e._v(" "),r("li",[e._v("Click on "),r("em",[r("strong",[e._v("Add Poll Time")])]),e._v(" and select 'Every Minute' from the "),r("em",[r("strong",[e._v("Mode")])]),e._v(" dropdown list. This will check Airtable every minute for new data entries.")]),e._v(" "),r("li",[e._v("Enter the Base ID in the "),r("em",[r("strong",[e._v("Base ID")])]),e._v(" field. For obtaining the Base ID, head over to their "),r("a",{attrs:{href:"https://airtable.com/api",target:"_blank",rel:"noopener noreferrer"}},[e._v("API page"),r("OutboundLink")],1),e._v(" and select the correct base. You’ll find the Base ID there.")]),e._v(" "),r("li",[e._v("Enter the table name in the "),r("em",[r("strong",[e._v("Table")])]),e._v(" field.")]),e._v(" "),r("li",[e._v("Enter a trigger field name in the "),r("em",[r("strong",[e._v("Trigger Field")])]),e._v(" field. If you don't have a 'Created Time' or 'Last modified time' field in your table, please create one.")]),e._v(" "),r("li",[e._v("Click on "),r("em",[r("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])]),e._v(" "),r("p",[e._v("In the screenshot below, you will notice that the node returns the new data from Airtable. This output gets passed on to the next node in the workflow.")]),e._v(" "),r("p",[r("img",{attrs:{src:a(1360),alt:"Using the Airtable Trigger node to trigger the workflow"}})]),e._v(" "),r("h3",{attrs:{id:"_2-mattermost-node-post-message"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-mattermost-node-post-message"}},[e._v("#")]),e._v(" 2. Mattermost node (post: message)")]),e._v(" "),r("p",[e._v("This node will send a message about the new data in the channel 'Information Updated' in Mattermost. If you have a different channel, use that instead.")]),e._v(" "),r("ol",[r("li",[e._v("First of all, you'll have to enter credentials for the Mattermost node. You can find out how to do that "),r("RouterLink",{attrs:{to:"/nodes/credentials/Mattermost/"}},[e._v("here")]),e._v(".")],1)]),e._v(" "),r("div",{pre:!0},[r("ol",{pre:!0,attrs:{start:"2"}},[r("li",[e._v("Select a channel from the "),r("em",[r("strong",[e._v("Channel ID")])]),e._v(" dropdown list.")]),e._v(" "),r("li",[e._v("Click on the gears icon next to the "),r("em",[r("strong",[e._v("Message")])]),e._v(" field and click on "),r("em",[r("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),r("li",[e._v("Enter the following message in the "),r("em",[r("strong",[e._v("Expression")])]),e._v(" field:")])]),e._v(" "),r("div",{pre:!0,attrs:{class:"language- extra-class"}},[r("pre",{pre:!0,attrs:{"v-pre":"",class:"language-text"}},[r("code",[e._v('New Data was added to Airtable.\nID:{{$node["Airtable Trigger"].json["fields"]["id"]}}\nName: {{$node["Airtable Trigger"].json["fields"]["name"]}}\n')])])]),r("ol",{pre:!0,attrs:{start:"5"}},[r("li",[e._v("Click on "),r("em",[r("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])])]),r("p",[e._v("In the screenshot below, you will notice that the node sends a message in Mattermost about the new data that got added to Airtable.")]),e._v(" "),r("p",[r("img",{attrs:{src:a(1361),alt:"Using the Mattermost node to send a message of the new data"}})]),e._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[e._v("💡 Activate workflow for production")]),e._v(" "),r("p",[e._v("You'll need to save the workflow and then click on the Activate toggle on the top right of the screen to activate the workflow. Your workflow will then be triggered as specified by the settings in the Airtable Trigger node.")])])])}),[],!1,null,null,null);t.default=o.exports}}]);