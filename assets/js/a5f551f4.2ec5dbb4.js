"use strict";(self.webpackChunkcrowdin_cli_website=self.webpackChunkcrowdin_cli_website||[]).push([[4646],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>h});var a=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var d=a.createContext({}),s=function(e){var n=a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=s(e.components);return a.createElement(d.Provider,{value:n},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,l=e.originalType,d=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),c=s(t),u=o,h=c["".concat(d,".").concat(u)]||c[u]||m[u]||l;return t?a.createElement(h,i(i({ref:n},p),{},{components:t})):a.createElement(h,i({ref:n},p))}));function h(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var l=t.length,i=new Array(l);i[0]=u;var r={};for(var d in n)hasOwnProperty.call(n,d)&&(r[d]=n[d]);r.originalType=e,r[c]="string"==typeof e?e:o,i[1]=r;for(var s=2;s<l;s++)i[s]=t[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},9394:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>r,toc:()=>s});var a=t(7462),o=(t(7294),t(3905));const l={description:"Learn how to manage your project's localization files from the command line. Synchronize your source language files and translations with your Crowdin project."},i="Files management",r={unversionedId:"tutorials/files-management",id:"tutorials/files-management",title:"Files management",description:"Learn how to manage your project's localization files from the command line. Synchronize your source language files and translations with your Crowdin project.",source:"@site/docs/tutorials/files-management.md",sourceDirName:"tutorials",slug:"/tutorials/files-management",permalink:"/crowdin-cli/tutorials/files-management",draft:!1,editUrl:"https://github.com/crowdin/crowdin-cli/tree/main/website/docs/tutorials/files-management.md",tags:[],version:"current",frontMatter:{description:"Learn how to manage your project's localization files from the command line. Synchronize your source language files and translations with your Crowdin project."},sidebar:"tutorialSidebar",previous:{title:"crowdin pre-translate",permalink:"/crowdin-cli/commands/crowdin-pre-translate"},next:{title:"CI/CD Integration",permalink:"/crowdin-cli/ci-cd"}},d={},s=[{value:"Introduction",id:"introduction",level:2},{value:"The <code>upload</code> and <code>download</code> commands",id:"the-upload-and-download-commands",level:2},{value:"Configuration",id:"configuration",level:3},{value:"Upload content",id:"upload-content",level:3},{value:"Download content",id:"download-content",level:3},{value:"The <code>file</code> command",id:"the-file-command",level:2},{value:"Upload content",id:"upload-content-1",level:3},{value:"Download content",id:"download-content-1",level:3},{value:"Further Reading",id:"further-reading",level:2}],p={toc:s},c="wrapper";function m(e){let{components:n,...t}=e;return(0,o.kt)(c,(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"files-management"},"Files management"),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"Crowdin CLI allows you to manage your project's localization files from the command line. You can easily synchronize your source language files and translations with your Crowdin project."),(0,o.kt)("p",null,"There are several commands you can use to manage your files. The CLI provides high-level commands that are easy to use and low-level commands that give you more flexibility and control."),(0,o.kt)("p",null,"The high level commands are ",(0,o.kt)("a",{parentName:"p",href:"/commands/crowdin-upload"},(0,o.kt)("inlineCode",{parentName:"a"},"crowdin upload"))," and ",(0,o.kt)("a",{parentName:"p",href:"/commands/crowdin-download"},(0,o.kt)("inlineCode",{parentName:"a"},"crowdin download")),". These commands are easy to use and they rely mostly on the configuration file."),(0,o.kt)("p",null,"The low-level commands include ",(0,o.kt)("a",{parentName:"p",href:"/commands/crowdin-file-upload"},(0,o.kt)("inlineCode",{parentName:"a"},"crowdin file upload")),", ",(0,o.kt)("a",{parentName:"p",href:"/commands/crowdin-file-download"},(0,o.kt)("inlineCode",{parentName:"a"},"crowdin file download")),", and ",(0,o.kt)("a",{parentName:"p",href:"/commands/crowdin-file-delete"},(0,o.kt)("inlineCode",{parentName:"a"},"crowdin file delete")),". These commands are more like a lightweight wrapper over the ",(0,o.kt)("a",{parentName:"p",href:"https://developer.crowdin.com/api/v2/"},"Crowdin API"),". They give you more flexibility and control over the file management process."),(0,o.kt)("h2",{id:"the-upload-and-download-commands"},"The ",(0,o.kt)("inlineCode",{parentName:"h2"},"upload")," and ",(0,o.kt)("inlineCode",{parentName:"h2"},"download")," commands"),(0,o.kt)("h3",{id:"configuration"},"Configuration"),(0,o.kt)("p",null,"These commands are usually being used along with the configuration file."),(0,o.kt)("p",null,"For example, you have a project with the following structure:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},".\n\u251c\u2500\u2500 locales\n\u2502   \u251c\u2500\u2500 en\n\u2502   \u2502   \u2514\u2500\u2500 messages.xml\n\u2502   \u2514\u2500\u2500 fr\n\u2502   \u2502   \u2514\u2500\u2500 messages.xml\n\u2502   \u2514\u2500\u2500 de\n\u2502   \u2502   \u2514\u2500\u2500 messages.xml\n\u2502   \u2514\u2500\u2500 uk\n\u2502       \u2514\u2500\u2500 messages.xml\n\u2514\u2500\u2500 ...\n")),(0,o.kt)("p",null,"Let's create a simple configuration file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'crowdin init -s "locales/en/*.xml" -t "locales/%two_letters_code%/%original_file_name%"\n')),(0,o.kt)("p",null,"This command prompts you for the project identifier and API token. It will then create a configuration file with the following content:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'"project_id": "<your-crowdin-project-id>"\n"api_token": "<your-personal-access-token>"\n"base_path": "."\n"base_url": "https://api.crowdin.com"\n\n"preserve_hierarchy": true\n\nfiles: [\n  {\n    "source": "locales/en/*.xml",\n    "translation": "locales/%two_letters_code%/%original_file_name%"\n  }\n]\n')),(0,o.kt)("p",null,"Let's take a closer look at some of the configuration options."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"source")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"translation")," configurations represent the patterns for the source and translation files. The ",(0,o.kt)("inlineCode",{parentName:"p"},"source")," configuration is a ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Glob_(programming)"},"glob")," pattern pointing to the source files. The ",(0,o.kt)("inlineCode",{parentName:"p"},"translation")," configuration is a path to the translation files (existing ones or where to put downloaded translations). The ",(0,o.kt)("inlineCode",{parentName:"p"},"%two_letters_code%")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"%original_file_name%")," are the placeholders that will be replaced by the language code and the original source file name, respectively."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Visit the ",(0,o.kt)("a",{parentName:"p",href:"/configuration"},"Configuration")," page to learn more about the configuration file.")),(0,o.kt)("h3",{id:"upload-content"},"Upload content"),(0,o.kt)("p",null,"Let's ",(0,o.kt)("strong",{parentName:"p"},"upload")," the source files and existing translations to Crowdin:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"crowdin upload sources\ncrowdin upload translations -l fr\n")),(0,o.kt)("p",null,"We can also check the translation and proofreading progress before downloading the translations:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"crowdin status\n")),(0,o.kt)("h3",{id:"download-content"},"Download content"),(0,o.kt)("p",null,"When the translations are ready, we can ",(0,o.kt)("strong",{parentName:"p"},"download")," them:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"crowdin download translations\n")),(0,o.kt)("p",null,"The above command will download all the translations to the path specified in the ",(0,o.kt)("inlineCode",{parentName:"p"},"translation")," configuration."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"You can also use short aliases: ",(0,o.kt)("inlineCode",{parentName:"p"},"crowdin push"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"crowdin pull"),".")),(0,o.kt)("p",null,"To download the source files from Crowdin, run the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"crowdin download sources\n")),(0,o.kt)("h2",{id:"the-file-command"},"The ",(0,o.kt)("inlineCode",{parentName:"h2"},"file")," command"),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"/commands/crowdin-file"},(0,o.kt)("inlineCode",{parentName:"a"},"file"))," command is a low-level command that allows you to manage your files with more flexibility and control."),(0,o.kt)("p",null,"This command does not require a ",(0,o.kt)("inlineCode",{parentName:"p"},"files")," section in the configuration file, or a configuration file at all. You can specify all the necessary parameters in the command itself."),(0,o.kt)("h3",{id:"upload-content-1"},"Upload content"),(0,o.kt)("p",null,"Let's use the same project structure as in the previous example and try to ",(0,o.kt)("strong",{parentName:"p"},"upload")," the source files and existing translations to Crowdin:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"crowdin file upload locales/en/messages.xml -d messages.xml\n")),(0,o.kt)("p",null,"The command above will take the file ",(0,o.kt)("inlineCode",{parentName:"p"},"locales/en/messages.xml")," and upload it to Crowdin as ",(0,o.kt)("inlineCode",{parentName:"p"},"messages.xml")," in the root directory. The ",(0,o.kt)("inlineCode",{parentName:"p"},"-d"),"/",(0,o.kt)("inlineCode",{parentName:"p"},"--dest")," option stands for ",(0,o.kt)("inlineCode",{parentName:"p"},"destination")," and allows you to specify the path to the file in Crowdin. If you omit the ",(0,o.kt)("inlineCode",{parentName:"p"},"-d")," option, the file will be uploaded to the root directory with the same path as the source file."),(0,o.kt)("p",null,"You can upload strings to string-based projects as well:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"crowdin file upload locales/en/messages.xml --branch main --cleanup-mode --update-strings\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"--branch")," option is required for string-based projects. The ",(0,o.kt)("inlineCode",{parentName:"p"},"--cleanup-mode")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"--update-strings")," options are optional. Use the ",(0,o.kt)("inlineCode",{parentName:"p"},"--update-strings")," option to update strings with the same identifiers and the ",(0,o.kt)("inlineCode",{parentName:"p"},"--cleanup-mode")," option to remove strings that are not present in the uploaded file."),(0,o.kt)("p",null,"To ",(0,o.kt)("strong",{parentName:"p"},"upload translations")," you need to specify the ",(0,o.kt)("inlineCode",{parentName:"p"},"-l"),"/",(0,o.kt)("inlineCode",{parentName:"p"},"--language")," option:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"crowdin file upload locales/fr/messages.xml -d messages.xml -l fr\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"-d"),"/",(0,o.kt)("inlineCode",{parentName:"p"},"--dest")," option is the path to the file in Crowdin where the translations should be uploaded. ",(0,o.kt)("inlineCode",{parentName:"p"},"-l")," - ",(0,o.kt)("a",{parentName:"p",href:"https://developer.crowdin.com/language-codes/"},"Crowdin language code"),"."),(0,o.kt)("p",null,"Visit the ",(0,o.kt)("a",{parentName:"p",href:"/commands/crowdin-file-upload"},(0,o.kt)("inlineCode",{parentName:"a"},"crowdin file upload"))," page to see all the options available."),(0,o.kt)("h3",{id:"download-content-1"},"Download content"),(0,o.kt)("p",null,"Using the ",(0,o.kt)("inlineCode",{parentName:"p"},"crowdin file download")," you can download either the source files or translations. Let's try to download the source file from Crowdin:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"crowdin file download messages.xml -d locales/en/messages.xml\n")),(0,o.kt)("p",null,"The above command will download the ",(0,o.kt)("inlineCode",{parentName:"p"},"messages.xml")," file from Crowdin and store it in the ",(0,o.kt)("inlineCode",{parentName:"p"},"locales/en/messages.xml")," path."),(0,o.kt)("p",null,"To download translations, you need to specify the ",(0,o.kt)("inlineCode",{parentName:"p"},"-l"),"/",(0,o.kt)("inlineCode",{parentName:"p"},"--language")," option:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"crowdin file download messages.xml -d locales/fr -l fr\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"-d"),"/",(0,o.kt)("inlineCode",{parentName:"p"},"--dest")," option here is the path to the file on your local machine where the translations should be stored. ",(0,o.kt)("inlineCode",{parentName:"p"},"-l")," - ",(0,o.kt)("a",{parentName:"p",href:"https://developer.crowdin.com/language-codes/"},"Crowdin language code"),"."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"You can also use language code placeholders in the ",(0,o.kt)("inlineCode",{parentName:"p"},"--dest")," option. For example, ",(0,o.kt)("inlineCode",{parentName:"p"},"locales/%android_code%"),".\nAvailable codes: ",(0,o.kt)("inlineCode",{parentName:"p"},"%two_letters_code%"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"%three_letters_code%"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"%locale%"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"%android_code%"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"%osx_code%"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"%osx_locale%"),".")),(0,o.kt)("p",null,"Visit the ",(0,o.kt)("a",{parentName:"p",href:"/commands/crowdin-file-download"},(0,o.kt)("inlineCode",{parentName:"a"},"crowdin file download"))," page to see all the available options."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"file")," commands can easily be used without the configuration file. For example:"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"crowdin file upload locales/en/messages.xml \\\n  -d messages.xml \\\n  -i <your-project-id> \\\n  -T <your-personal-access-token> \\\n  /\n"))),(0,o.kt)("h2",{id:"further-reading"},"Further Reading"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/configuration"},"Configuration")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/advanced"},"Advanced Usage")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/ci-cd"},"CI/CD Integration")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/faq"},"FAQ"))))}m.isMDXComponent=!0}}]);