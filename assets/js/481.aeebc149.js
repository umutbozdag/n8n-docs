(window.webpackJsonp=window.webpackJsonp||[]).push([[481],{1532:function(e,t,s){"use strict";s.r(t);var a=s(26),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#configuration"}},[e._v("#")]),e._v(" Configuration")]),e._v(" "),s("p",[e._v("It is possible to change some of the n8n defaults via special environment variables.")]),e._v(" "),s("p",[e._v("For a full list of available configurations see "),s("RouterLink",{attrs:{to:"/reference/environment-variables.html"}},[e._v("Environment Variables")]),e._v(".")],1),e._v(" "),s("h2",{attrs:{id:"how-to-set"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#how-to-set"}},[e._v("#")]),e._v(" How to set")]),e._v(" "),s("p",[e._v("Where you set these environment variables depends on how you are "),s("RouterLink",{attrs:{to:"/getting-started/installation/"}},[e._v("running")]),e._v(" n8n, via npm or Docker.")],1),e._v(" "),s("h3",{attrs:{id:"npm"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#npm"}},[e._v("#")]),e._v(" npm")]),e._v(" "),s("p",[e._v("For npm, set your desired environment variables in Terminal using the "),s("code",[e._v("export")]),e._v(" command as shown below:")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("export")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("variable"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("value"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n")])])]),s("h3",{attrs:{id:"docker"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#docker"}},[e._v("#")]),e._v(" Docker")]),e._v(" "),s("p",[e._v("For Docker, you can set your desired environment variables in the "),s("code",[e._v("n8n: environment:")]),e._v(" element of your "),s("code",[e._v("docker-compose.yaml")]),e._v(" file . For example:")]),e._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("n8n")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("environment")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v(" N8N_BASIC_AUTH_ACTIVE=true\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v(" N8N_BASIC_AUTH_USER=<user"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")]),e._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v(" N8N_BASIC_AUTH_PASSWORD=<password"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")]),e._v("\n")])])]),s("p",[e._v("Or using the "),s("code",[e._v("-e")]),e._v(" flag from the command line:")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("docker run -it --rm "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n\t--name n8n "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n\t-p "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("5678")]),e._v(":5678 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n\t-e "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("GENERIC_TIMEZONE")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Europe/Berlin"')]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n\t-e "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("TZ")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Europe/Berlin"')]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n\tn8nio/n8n\n")])])]),s("h3",{attrs:{id:"configuration-via-file"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#configuration-via-file"}},[e._v("#")]),e._v(" Configuration via file")]),e._v(" "),s("p",[e._v("It is also possible to configure n8n using a configuration file.")]),e._v(" "),s("p",[e._v("Only the values that should be different from the default need to be defined in your configuration file. If needed multiple files can also be supplied. For example, you can have some generic base settings and some specific ones depending on the environment.")]),e._v(" "),s("p",[e._v("The path to the JSON configuration file to use can be set using the environment variable "),s("code",[e._v("N8N_CONFIG_FILES")]),e._v(".")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Single file")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("export")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("N8N_CONFIG_FILES")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("/folder/my-config.json\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Multiple files can be comma-separated")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("export")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("N8N_CONFIG_FILES")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("/folder/my-config.json,/folder/production.json\n")])])]),s("p",[e._v("A possible configuration file could look like this:")]),e._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n\t"),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"executions"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"process"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"main"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"saveDataOnSuccess"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"none"')]),e._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n\t"),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"generic"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"timezone"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Europe/Berlin"')]),e._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n\t"),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"security"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"basicAuth"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n\t\t\t"),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"active"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n\t\t\t"),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"user"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"frank"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n\t\t\t"),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"password"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"some-secure-password"')]),e._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n\t"),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"nodes"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"exclude"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"[\\"n8n-nodes-base.executeCommand\\",\\"n8n-nodes-base.writeBinaryFile\\"]"')]),e._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),s("p",[e._v("You can also append "),s("code",[e._v("_FILE")]),e._v(" to some individual environment variables to provide their configuration in a separate file, enabling you to avoid passing sensitive details via environment variables.")]),e._v(" "),s("p",[e._v("n8n will then load the data from the file with the given name, making it possible to easily load data from Docker- and Kubernetes-Secrets.")]),e._v(" "),s("p",[e._v("The following environment variables support file input:")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("CREDENTIALS_OVERWRITE_DATA_FILE")])]),e._v(" "),s("li",[s("code",[e._v("DB_TYPE_FILE")])]),e._v(" "),s("li",[s("code",[e._v("DB_MYSQLDB_DATABASE")])]),e._v(" "),s("li",[s("code",[e._v("DB_MYSQLDB_HOST_FILE")])]),e._v(" "),s("li",[s("code",[e._v("DB_MYSQLDB_PORT_FILE")])]),e._v(" "),s("li",[s("code",[e._v("DB_MYSQLDB_USER_FILE")])]),e._v(" "),s("li",[s("code",[e._v("DB_MYSQLDB_PASSWORD_FILE")])]),e._v(" "),s("li",[s("code",[e._v("DB_POSTGRESDB_DATABASE_FILE")])]),e._v(" "),s("li",[s("code",[e._v("DB_POSTGRESDB_HOST_FILE")])]),e._v(" "),s("li",[s("code",[e._v("DB_POSTGRESDB_PASSWORD_FILE")])]),e._v(" "),s("li",[s("code",[e._v("DB_POSTGRESDB_PORT_FILE")])]),e._v(" "),s("li",[s("code",[e._v("DB_POSTGRESDB_SSL_CA_FILE")])]),e._v(" "),s("li",[s("code",[e._v("DB_POSTGRESDB_SSL_CERT_FILE")])]),e._v(" "),s("li",[s("code",[e._v("DB_POSTGRESDB_SSL_KEY_FILE")])]),e._v(" "),s("li",[s("code",[e._v("DB_POSTGRESDB_SSL_REJECT_UNAUTHORIZED_FILE")])]),e._v(" "),s("li",[s("code",[e._v("DB_POSTGRESDB_USER_FILE")])]),e._v(" "),s("li",[s("code",[e._v("DB_POSTGRESDB_SCHEMA_FILE")])]),e._v(" "),s("li",[s("code",[e._v("N8N_BASIC_AUTH_PASSWORD_FILE")])]),e._v(" "),s("li",[s("code",[e._v("N8N_BASIC_AUTH_USER_FILE")])]),e._v(" "),s("li",[s("code",[e._v("N8N_BASIC_AUTH_HASH_FILE")])]),e._v(" "),s("li",[s("code",[e._v("N8N_JWT_AUTH_HEADER_FILE")])]),e._v(" "),s("li",[s("code",[e._v("N8N_JWKS_URI_FILE")])]),e._v(" "),s("li",[s("code",[e._v("N8N_JWT_AUTH_HEADER_VALUE_PREFIX_FILE")])]),e._v(" "),s("li",[s("code",[e._v("N8N_JWT_ISSUER_FILE")])]),e._v(" "),s("li",[s("code",[e._v("N8N_JWT_NAMESPACE_FILE")])]),e._v(" "),s("li",[s("code",[e._v("N8N_JWT_ALLOWED_TENANT_FILE")])]),e._v(" "),s("li",[s("code",[e._v("N8N_JWT_ALLOWED_TENANT_KEY_FILE")])])]),e._v(" "),s("h2",{attrs:{id:"examples"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[e._v("#")]),e._v(" Examples")]),e._v(" "),s("h3",{attrs:{id:"base-url"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#base-url"}},[e._v("#")]),e._v(" Base URL")]),e._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[e._v("💡 Keep in mind")]),e._v(" "),s("p",[e._v("This variable only gets used when the "),s("code",[e._v("n8n-editor-ui")]),e._v(" package gets built manually. Hence,\nit does not get used in combination with the default n8n docker image. By default, "),s("code",[e._v("/")]),e._v("\ngets used, meaning that it uses the root-domain.")])]),e._v(" "),s("p",[e._v("Tells the frontend how to reach the REST API of the backend.")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("export")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("VUE_APP_URL_BASE_API")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("https://n8n.example.com/\n")])])]),s("h3",{attrs:{id:"encryption-key"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#encryption-key"}},[e._v("#")]),e._v(" Encryption key")]),e._v(" "),s("p",[e._v("n8n creates a random encryption key automatically on the first launch and saves\nit in the "),s("code",[e._v("~/.n8n")]),e._v(" folder. That key is used to encrypt the credentials before\nthey get saved to the database. It is also possible to overwrite that key and\nset it via an environment variable.")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("export")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("N8N_ENCRYPTION_KEY")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("SOME "),s("span",{pre:!0,attrs:{class:"token environment constant"}},[e._v("RANDOM")]),e._v(" STRING"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n")])])]),s("h3",{attrs:{id:"execute-in-same-process"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#execute-in-same-process"}},[e._v("#")]),e._v(" Execute in same process")]),e._v(" "),s("p",[e._v("All workflows get executed in their own separate process. This ensures that all CPU cores get used and that they do not block each other on CPU intensive tasks. Additionally, this makes sure that the crash of one execution does not take down the whole application. The disadvantage is, however, that it slows down the start-time considerably and uses much more memory. So in case the\nworkflows are not CPU intensive and they have to start very fast, it is possible to run them all directly in the main-process with this setting.")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("export")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("EXECUTIONS_PROCESS")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("main\n")])])]),s("h3",{attrs:{id:"execution-timeout"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#execution-timeout"}},[e._v("#")]),e._v(" Execution timeout")]),e._v(" "),s("p",[e._v("A workflow times out and gets canceled after this time (in seconds). If the workflow is executed in the main process, a soft timeout is executed (takes effect after the current node finishes). If a workflow is running in its own process, a soft timeout is tried first. The process is killed after waiting for an additional fifth of the given timeout duration.")]),e._v(" "),s("p",[e._v("By default "),s("code",[e._v("EXECUTIONS_TIMEOUT")]),e._v(" is set to "),s("code",[e._v("-1")]),e._v(". For example, if you want to set the timeout to one hour:")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("export")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("EXECUTIONS_TIMEOUT")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("3600")]),e._v("\n")])])]),s("p",[e._v("You can also set maximum execution time (in seconds) for each workflow individually. For example, if you want to set maximum execution time to two hours:")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("export")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("EXECUTIONS_TIMEOUT_MAX")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("7200")]),e._v("\n")])])]),s("h3",{attrs:{id:"custom-nodes-location"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#custom-nodes-location"}},[e._v("#")]),e._v(" Custom nodes location")]),e._v(" "),s("p",[e._v("Every user can add custom nodes that get loaded by n8n on startup. The default\nlocation is in the subfolder "),s("code",[e._v(".n8n/custom")]),e._v(" of the user who started n8n.\nAdditional folders can be defined with an environment variable.")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("export")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("N8N_CUSTOM_EXTENSIONS")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"/home/jim/n8n/custom-nodes;/data/n8n/nodes"')]),e._v("\n")])])]),s("h3",{attrs:{id:"use-built-in-and-external-modules-in-function-nodes"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#use-built-in-and-external-modules-in-function-nodes"}},[e._v("#")]),e._v(" Use built-in and external modules in Function-Nodes")]),e._v(" "),s("p",[e._v("For security reasons, importing modules is restricted by default in the Function-Nodes.\nIt is, however, possible to lift that restriction for built-in and external modules by\nsetting the following environment variables:")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("NODE_FUNCTION_ALLOW_BUILTIN")]),e._v(": For builtin modules")]),e._v(" "),s("li",[s("code",[e._v("NODE_FUNCTION_ALLOW_EXTERNAL")]),e._v(": For external modules sourced from n8n/node_modules directory. External module support is disabled when env variable is not set.")])]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Allows usage of all builtin modules")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("export")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("NODE_FUNCTION_ALLOW_BUILTIN")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("*\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Allows usage of only crypto")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("export")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("NODE_FUNCTION_ALLOW_BUILTIN")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("crypto\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Allows usage of only crypto and fs")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("export")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("NODE_FUNCTION_ALLOW_BUILTIN")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("crypto,fs\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Allow usage of external npm modules.")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("export")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("NODE_FUNCTION_ALLOW_EXTERNAL")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("moment,lodash\n")])])]),s("h3",{attrs:{id:"timezone"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#timezone"}},[e._v("#")]),e._v(" Timezone")]),e._v(" "),s("p",[e._v('The timezone is set by default to "America/New_York". For instance, it is used by the\nCron node to know at what time the workflow should be started. To set a different\ndefault timezone, set '),s("code",[e._v("GENERIC_TIMEZONE")]),e._v(" to the appropriate value. For example,\nif you want to set the timezone to Berlin (Germany):")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("export")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("GENERIC_TIMEZONE")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("Europe/Berlin\n")])])]),s("p",[e._v("You can find the name of your timezone "),s("a",{attrs:{href:"https://momentjs.com/timezone/",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),s("OutboundLink")],1),e._v(".")]),e._v(" "),s("h3",{attrs:{id:"user-folder"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#user-folder"}},[e._v("#")]),e._v(" User folder")]),e._v(" "),s("p",[e._v("User-specific data like the encryption key, SQLite database file, and\nthe ID of the tunnel (if used) gets saved by default in the subfolder\n"),s("code",[e._v(".n8n")]),e._v(" of the user who started n8n. It is possible to overwrite the\nuser-folder via an environment variable.")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("export")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("N8N_USER_FOLDER")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("/home/jim/n8n\n")])])]),s("h3",{attrs:{id:"webhook-url"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#webhook-url"}},[e._v("#")]),e._v(" Webhook URL")]),e._v(" "),s("p",[e._v("The webhook URL will normally be created automatically by combining\n"),s("code",[e._v("N8N_PROTOCOL")]),e._v(", "),s("code",[e._v("N8N_HOST")]),e._v(" and "),s("code",[e._v("N8N_PORT")]),e._v(". However, if n8n runs behind a\nreverse proxy that would not work. That's because n8n runs internally\non port 5678 but is exposed to the web via the reverse proxy on port 443. In\nthat case, it is important to set the webhook URL manually so that it can be\ndisplayed correctly in the Editor UI and even more important is that the correct\nwebhook URLs get registred with the external services.")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("export")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("WEBHOOK_TUNNEL_URL")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("https://n8n.example.com/\n")])])]),s("h3",{attrs:{id:"prometheus"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#prometheus"}},[e._v("#")]),e._v(" Prometheus")]),e._v(" "),s("p",[e._v("In order to collect and expose metrics, n8n uses the "),s("a",{attrs:{href:"https://www.npmjs.com/package/prom-client",target:"_blank",rel:"noopener noreferrer"}},[e._v("prom-client"),s("OutboundLink")],1),e._v(" library.")]),e._v(" "),s("p",[e._v("The "),s("code",[e._v("/metrics")]),e._v(" endpoint is disabled by default, but it is possible to enable it using the "),s("code",[e._v("N8N_METRICS")]),e._v(" environment variable.")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("export")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("N8N_METRICS")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("true\n")])])]),s("p",[e._v("It is also possible to overwrite the prefix of the metric names by setting the "),s("code",[e._v("N8N_METRICS_PREFIX")]),e._v(" environment variable.")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("export")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("N8N_METRICS_PREFIX")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("n8n_\n")])])]),s("p",[s("strong",[e._v("Note:")]),e._v(" At the moment, n8n does not support metrics for webhooks.")])])}),[],!1,null,null,null);t.default=n.exports}}]);