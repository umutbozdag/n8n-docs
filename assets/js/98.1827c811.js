(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{1021:function(e,t,o){e.exports=o.p+"assets/img/workflow.3c85ba2c.png"},1022:function(e,t,o){e.exports=o.p+"assets/img/Airtable_node.a347c89f.png"},1023:function(e,t,o){e.exports=o.p+"assets/img/Lemlist_node.955e21a1.png"},1024:function(e,t,o){e.exports=o.p+"assets/img/Lemlist1_node.e680346d.png"},1895:function(e,t,o){"use strict";o.r(t);var a=o(26),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"lemlist"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lemlist"}},[e._v("#")]),e._v(" Lemlist")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://Lemlist.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("Lemlist"),a("OutboundLink")],1),e._v(" is an email outreach platform that allows you to automatically generate personalized images and videos and send personalized cold emails.")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("🔑 Credentials")]),e._v(" "),a("p",[e._v("You can find authentication information for this node "),a("RouterLink",{attrs:{to:"/nodes/credentials/Lemlist/"}},[e._v("here")]),e._v(".")],1)]),e._v(" "),a("h2",{attrs:{id:"basic-operations"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#basic-operations"}},[e._v("#")]),e._v(" Basic Operations")]),e._v(" "),a("Resource",{attrs:{node:"n8n-nodes-base.lemlist"}}),e._v(" "),a("h2",{attrs:{id:"example-usage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example-usage"}},[e._v("#")]),e._v(" Example Usage")]),e._v(" "),a("p",[e._v("This workflow allows you to list emails from Airtable and create corresponding leads in Lemlist. You can also find the "),a("a",{attrs:{href:"https://n8n.io/workflows/983",target:"_blank",rel:"noopener noreferrer"}},[e._v("workflow"),a("OutboundLink")],1),e._v(" on n8n.io. This example usage workflow uses the following nodes.")]),e._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/Start/"}},[e._v("Start")])],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/nodes/nodes-library/nodes/Airtable/"}},[e._v("Airtable")])],1),e._v(" "),a("li",[a("a",{attrs:{href:""}},[e._v("Lemlist")])])]),e._v(" "),a("p",[e._v("The final workflow should look like the following image.")]),e._v(" "),a("p",[a("img",{attrs:{src:o(1021),alt:"A workflow with the Lemlist node"}})]),e._v(" "),a("h3",{attrs:{id:"_1-start-node"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-start-node"}},[e._v("#")]),e._v(" 1. Start node")]),e._v(" "),a("p",[e._v("The start node exists by default when you create a new workflow.")]),e._v(" "),a("h3",{attrs:{id:"_2-airtable-node-list"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-airtable-node-list"}},[e._v("#")]),e._v(" 2. Airtable node (List)")]),e._v(" "),a("p",[e._v("This node will list all the records from Airtable. Create a table like "),a("a",{attrs:{href:"https://airtable.com/shruiCc4kttDVsTsD",target:"_blank",rel:"noopener noreferrer"}},[e._v("this"),a("OutboundLink")],1),e._v(" in your Airtable base.")]),e._v(" "),a("ol",[a("li",[e._v("First of all, you'll have to enter credentials for the Airtable node. You can find out how to do that "),a("RouterLink",{attrs:{to:"/nodes/credentials/Airtable/"}},[e._v("here")]),e._v(".")],1),e._v(" "),a("li",[e._v("Select the 'List' option from the "),a("em",[a("strong",[e._v("Operation")])]),e._v(" dropdown list.")]),e._v(" "),a("li",[e._v("Enter the Base ID in the "),a("em",[a("strong",[e._v("Base ID")])]),e._v(" field. For obtaining the Base ID, head over to their "),a("a",{attrs:{href:"https://airtable.com/api",target:"_blank",rel:"noopener noreferrer"}},[e._v("API page"),a("OutboundLink")],1),e._v(" and select the correct base. You’ll find the Base ID there.")]),e._v(" "),a("li",[e._v("Enter the name of your table in the "),a("em",[a("strong",[e._v("Table")])]),e._v(" field.")]),e._v(" "),a("li",[e._v("Click on the gears icon next to the "),a("em",[a("strong",[e._v("Table")])]),e._v(" field and click on "),a("em",[a("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),a("li",[e._v("Click on "),a("em",[a("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])]),e._v(" "),a("p",[e._v("In the screenshot below, you will notice that the node returns the information of the leads.")]),e._v(" "),a("p",[a("img",{attrs:{src:o(1022),alt:"Using the Airtable node to list data from an Airtable table"}})]),e._v(" "),a("h3",{attrs:{id:"_3-lemlist-node-create-lead"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-lemlist-node-create-lead"}},[e._v("#")]),e._v(" 3. Lemlist node (create: lead)")]),e._v(" "),a("p",[e._v("This node will create new leads for a campaign in Lemlist.")]),e._v(" "),a("ol",[a("li",[e._v("First of all, you'll have to enter credentials for the Lemlist node. You can find out how to do that "),a("RouterLink",{attrs:{to:"/nodes/credentials/Lemlist/"}},[e._v("here")]),e._v(".")],1),e._v(" "),a("li",[e._v("Select 'Lead' from the "),a("em",[a("strong",[e._v("Resource")])]),e._v(" dropdown list.")]),e._v(" "),a("li",[e._v("Select a campaign from the "),a("em",[a("strong",[e._v("Campaign ID")])]),e._v(" dropdown list.")]),e._v(" "),a("li",[e._v("Click on the gears icon next to the "),a("em",[a("strong",[e._v("Email")])]),e._v(" field and click on "),a("em",[a("strong",[e._v("Add Expression")])]),e._v(".")])]),e._v(" "),a("div",{pre:!0},[a("ol",{pre:!0,attrs:{start:"5"}},[a("li",[e._v("Select the following in the "),a("em",[a("strong",[e._v("Variable Selector")])]),e._v(" section: Current Node > Input Data > JSON > fields > Email. You can also add the following expression: "),a("code",[e._v('{{$json["fields"]["Email"]}}')]),e._v(".")]),e._v(" "),a("li",[e._v("Click on the "),a("em",[a("strong",[e._v("Add Field")])]),e._v(" button and select 'First Name'.")]),e._v(" "),a("li",[e._v("Click on the gears icon next to the "),a("em",[a("strong",[e._v("First Name")])]),e._v(" field and click on "),a("em",[a("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),a("li",[e._v("Select the following in the "),a("em",[a("strong",[e._v("Variable Selector")])]),e._v(" section: Current Node > Input Data > JSON > fields > Name. You can also add the following expression: "),a("code",[e._v('{{$json["fields"]["Name"]}}')]),e._v(".")]),e._v(" "),a("li",[e._v("Click on "),a("em",[a("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])]),e._v(" "),a("p",[e._v("In the screenshot below, you will notice that the node creates new leads in Lemlist.")]),e._v(" "),a("p",[a("img",{pre:!0,attrs:{src:o(1023),alt:"Using the Lemlist node to create a new lead"}})]),e._v(" "),a("h3",{pre:!0,attrs:{id:"_4-lemlist-node-get-lead"}},[a("a",{pre:!0,attrs:{class:"header-anchor",href:"#_4-lemlist-node-get-lead"}},[e._v("#")]),e._v(" 4. Lemlist node (get: lead)")]),e._v(" "),a("p",[e._v("This node will return the information of the leads that we created in the previous node.")]),e._v(" "),a("div",{pre:!0,attrs:{"v-pre":""}},[a("ol",[a("li",[e._v("Select the credentials that you entered in the previous node.")]),e._v(" "),a("li",[e._v("Select 'Lead' from the "),a("em",[a("strong",[e._v("Resource")])]),e._v(" dropdown list.")]),e._v(" "),a("li",[e._v("Select 'Get' from the "),a("em",[a("strong",[e._v("Operation")])]),e._v(" dropdown list.")]),e._v(" "),a("li",[e._v("Click on the gears icon next to the "),a("em",[a("strong",[e._v("Email")])]),e._v(" field and click on "),a("em",[a("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),a("li",[e._v("Select the following in the "),a("em",[a("strong",[e._v("Variable Selector")])]),e._v(" section: Nodes > Airtable > Output Data > JSON > fields > Email. You can also add the following expression: "),a("code",[e._v('{{$node["Airtable"].json["fields"]["Email"]}}')]),e._v(".")]),e._v(" "),a("li",[e._v("Click on "),a("em",[a("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])]),e._v(" "),a("p",[e._v("In the screenshot below, you will notice that the node returns the information about the leads we created in the previous node.")]),e._v(" "),a("p",[a("img",{pre:!0,attrs:{src:o(1024),alt:"Using the Lemlist node to get information about the leads"}})])])])],1)}),[],!1,null,null,null);t.default=n.exports}}]);