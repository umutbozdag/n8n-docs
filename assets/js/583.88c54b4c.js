(window.webpackJsonp=window.webpackJsonp||[]).push([[583],{1767:function(t,e,a){"use strict";a.r(e);var s=a(26),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"function-item"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#function-item"}},[t._v("#")]),t._v(" Function Item")]),t._v(" "),a("p",[t._v("The Function Item node is used to add custom snippets to JavaScript code that should be executed once for every item that it receives as the input.")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("💡 Keep in mind")]),t._v(" "),a("p",[t._v("Please note that the Function Item node is different from the "),a("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/Function/"}},[t._v("Function")]),t._v(" node. Check out "),a("RouterLink",{attrs:{to:"/getting-started/key-concepts.html#function"}},[t._v("this")]),t._v(" page to learn about the difference between the two.")],1)]),t._v(" "),a("p",[t._v("The Function Item node supports promises. So instead of returning the items directly, it is also possible to return a promise which resolves accordingly.")]),t._v(" "),a("p",[t._v("It also provides the ability to write to your browser console using "),a("code",[t._v("console.log")]),t._v(", useful for debugging and troubleshooting your workflows.")]),t._v(" "),a("h2",{attrs:{id:"node-reference"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#node-reference"}},[t._v("#")]),t._v(" Node Reference")]),t._v(" "),a("p",[t._v("You can also use the methods and variables mentioned in the "),a("RouterLink",{attrs:{to:"/nodes/expressions.html"}},[t._v("Expressions")]),t._v(" page in the Function Item node.")],1),t._v(" "),a("h3",{attrs:{id:"variable-item"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#variable-item"}},[t._v("#")]),t._v(" Variable: item")]),t._v(" "),a("p",[t._v('It contains the "json" data of the currently processed item.')]),t._v(" "),a("p",[t._v("The data can be accessed and manipulated like this:")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Uses the data of an already existing key to create a new additional one")]),t._v("\nitem.newIncrementedCounter = item.existingCounter + "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(";\nreturn item;\n")])])]),a("h3",{attrs:{id:"method-getbinarydata"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#method-getbinarydata"}},[t._v("#")]),t._v(" Method: getBinaryData()")]),t._v(" "),a("p",[t._v("Returns all the binary data (all keys) of the item which gets currently processed.")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[t._v("item.filename = getBinaryData().attachment_0.fileName;\nreturn item;\n")])])]),a("h3",{attrs:{id:"method-setbinarydata-binarydata"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#method-setbinarydata-binarydata"}},[t._v("#")]),t._v(" Method: setBinaryData(binaryData)")]),t._v(" "),a("p",[t._v("Sets all the binary data (all keys) of the item which gets currently processed.")]),t._v(" "),a("h3",{attrs:{id:"method-getworkflowstaticdata-type"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#method-getworkflowstaticdata-type"}},[t._v("#")]),t._v(" Method: getWorkflowStaticData(type)")]),t._v(" "),a("p",[t._v("This gives access to the static workflow data.\nIt is possible to save data directly with the workflow. This data should, however, be very small.\nA common use case is to for example to save a timestamp of the last item that got processed from\nan RSS-Feed or database. It will always return an object. Properties can then read, delete or\nset on that object. When the workflow execution succeeds, n8n will check automatically if the data\nhas changed and will save it, if necessary.")]),t._v(" "),a("p",[t._v('There are two types of static data. The "global" and the "node" one. Global static data is the\nsame in the whole workflow. And every node in the workflow can access it. The node static data,\nhowever, is different for every node and only the node which set it can retrieve it again.')]),t._v(" "),a("p",[a("strong",[t._v("Note:")]),t._v(" The static data cannot be read and written when executing via manual executions. The data will always be empty, and the changes will not persist. The static data will only be saved when a workflow is active.")]),t._v(" "),a("h4",{attrs:{id:"example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" Example")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Get the global workflow static data")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" staticData "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getWorkflowStaticData")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'global'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Get the static data of the node")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" staticData "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getWorkflowStaticData")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'node'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Access its data")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" lastExecution "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" staticData"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lastExecution"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Update its data")]),t._v("\nstaticData"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lastExecution "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Date")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getTime")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Delete data")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("delete")]),t._v(" staticData"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lastExecution"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])}),[],!1,null,null,null);e.default=n.exports}}]);