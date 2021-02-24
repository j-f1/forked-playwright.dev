(window.webpackJsonp=window.webpackJsonp||[]).push([[417],{489:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return r})),a.d(t,"toc",(function(){return o})),a.d(t,"default",(function(){return p}));var n=a(3),c=a(7),l=(a(0),a(747)),i=(a(751),a(752),{id:"input",title:"Input"}),r={unversionedId:"input",id:"version-1.8.0/input",isDocsHomePage:!1,title:"Input",description:"- Text input",source:"@site/versioned_docs/version-1.8.0/input.mdx",slug:"/input",permalink:"/docs/1.8.0/input",version:"1.8.0",sidebar:"version-1.8.0/docs",previous:{title:"Handles",permalink:"/docs/1.8.0/handles"},next:{title:"Installation",permalink:"/docs/1.8.0/installation"}},o=[{value:"Text input",id:"text-input",children:[{value:"API reference",id:"api-reference",children:[]}]},{value:"Checkboxes and radio buttons",id:"checkboxes-and-radio-buttons",children:[{value:"API reference",id:"api-reference-1",children:[]}]},{value:"Select options",id:"select-options",children:[{value:"API reference",id:"api-reference-2",children:[]}]},{value:"Mouse click",id:"mouse-click",children:[{value:"API reference",id:"api-reference-3",children:[]}]},{value:"Type characters",id:"type-characters",children:[{value:"API reference",id:"api-reference-4",children:[]}]},{value:"Keys and shortcuts",id:"keys-and-shortcuts",children:[{value:"API reference",id:"api-reference-5",children:[]}]},{value:"Upload files",id:"upload-files",children:[{value:"API reference",id:"api-reference-6",children:[]}]},{value:"Focus element",id:"focus-element",children:[{value:"API reference",id:"api-reference-7",children:[]}]}],s={toc:o};function p(e){var t=e.components,a=Object(c.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"#text-input"}),"Text input")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"#checkboxes-and-radio-buttons"}),"Checkboxes and radio buttons")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"#select-options"}),"Select options")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"#mouse-click"}),"Mouse click")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"#type-characters"}),"Type characters")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"#keys-and-shortcuts"}),"Keys and shortcuts")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"#upload-files"}),"Upload files")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"#focus-element"}),"Focus element"))),Object(l.b)("h2",{id:"text-input"},"Text input"),Object(l.b)("p",null,"This is the easiest way to fill out the form fields. It focuses the element and triggers an ",Object(l.b)("inlineCode",{parentName:"p"},"input")," event with the entered text. It works for ",Object(l.b)("inlineCode",{parentName:"p"},"<input>"),", ",Object(l.b)("inlineCode",{parentName:"p"},"<textarea>"),", ",Object(l.b)("inlineCode",{parentName:"p"},"[contenteditable]")," and ",Object(l.b)("inlineCode",{parentName:"p"},"<label>")," associated with an input or textarea."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"// Text input\nawait page.fill('#name', 'Peter');\n\n// Date input\nawait page.fill('#date', '2020-02-02');\n\n// Time input\nawait page.fill('#time', '13-15');\n\n// Local datetime input\nawait page.fill('#local', '2020-03-02T05:15');\n\n// Input through label\nawait page.fill('text=First Name', 'Peter');\n")),Object(l.b)("h3",{id:"api-reference"},"API reference"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/1.8.0/api/class-page#pagefillselector-value-options"}),"page.fill(selector, value[, options])")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/1.8.0/api/class-frame#framefillselector-value-options"}),"frame.fill(selector, value[, options])")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/1.8.0/api/class-elementhandle#elementhandlefillvalue-options"}),"elementHandle.fill(value[, options])"))),Object(l.b)("br",null),Object(l.b)("h2",{id:"checkboxes-and-radio-buttons"},"Checkboxes and radio buttons"),Object(l.b)("p",null,"This is the easiest way to check and uncheck a checkbox or a radio button. This method can be used with ",Object(l.b)("inlineCode",{parentName:"p"},"input[type=checkbox]"),", ",Object(l.b)("inlineCode",{parentName:"p"},"input[type=radio]"),", ",Object(l.b)("inlineCode",{parentName:"p"},"[role=checkbox]")," or ",Object(l.b)("inlineCode",{parentName:"p"},"label")," associated with checkbox or radio button."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"// Check the checkbox\nawait page.check('#agree');\n\n// Assert the checked state\nexpect(await page.isChecked('#agree')).toBeTruthy()\n\n// Uncheck by input <label>.\nawait page.uncheck('#subscribe-label');\n\n// Select the radio button\nawait page.check('text=XL');\n")),Object(l.b)("h3",{id:"api-reference-1"},"API reference"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/1.8.0/api/class-page#pagecheckselector-options"}),"page.check(selector[, options])")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/1.8.0/api/class-page#pageischeckedselector-options"}),"page.isChecked(selector[, options])")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/1.8.0/api/class-page#pageuncheckselector-options"}),"page.uncheck(selector[, options])")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/1.8.0/api/class-elementhandle#elementhandlecheckoptions"}),"elementHandle.check([options])")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/1.8.0/api/class-elementhandle#elementhandleischecked"}),"elementHandle.isChecked()")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/1.8.0/api/class-elementhandle#elementhandleuncheckoptions"}),"elementHandle.uncheck([options])"))),Object(l.b)("br",null),Object(l.b)("h2",{id:"select-options"},"Select options"),Object(l.b)("p",null,"Selects one or multiple options in the ",Object(l.b)("inlineCode",{parentName:"p"},"<select>")," element. You can specify option ",Object(l.b)("inlineCode",{parentName:"p"},"value"),", ",Object(l.b)("inlineCode",{parentName:"p"},"label")," or ",Object(l.b)("inlineCode",{parentName:"p"},"elementHandle")," to select. Multiple options can be selected."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"// Single selection matching the value\nawait page.selectOption('select#colors', 'blue');\n\n// Single selection matching the label\nawait page.selectOption('select#colors', { label: 'Blue' });\n\n// Multiple selected items\nawait page.selectOption('select#colors', ['red', 'green', 'blue']);\n\n// Select the option via element handle\nconst option = await page.$('#best-option');\nawait page.selectOption('select#colors', option);\n")),Object(l.b)("h3",{id:"api-reference-2"},"API reference"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/1.8.0/api/class-page#pageselectoptionselector-values-options"}),"page.selectOption(selector, values[, options])")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/1.8.0/api/class-frame#frameselectoptionselector-values-options"}),"frame.selectOption(selector, values[, options])")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/1.8.0/api/class-elementhandle#elementhandleselectoptionvalues-options"}),"elementHandle.selectOption(values[, options])"))),Object(l.b)("br",null),Object(l.b)("h2",{id:"mouse-click"},"Mouse click"),Object(l.b)("p",null,"Performs a simple human click."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"// Generic click\nawait page.click('button#submit');\n\n// Double click\nawait page.dblclick('#item');\n\n// Right click\nawait page.click('#item', { button: 'right' });\n\n// Shift + click\nawait page.click('#item', { modifiers: ['Shift'] });\n\n// Hover over element\nawait page.hover('#item');\n\n// Click the top left corner\nawait page.click('#item', { position: { x: 0, y: 0} });\n")),Object(l.b)("p",null,"Under the hood, this and other pointer-related methods:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"wait for element with given selector to be in DOM"),Object(l.b)("li",{parentName:"ul"},"wait for it to become displayed, i.e. not empty, no ",Object(l.b)("inlineCode",{parentName:"li"},"display:none"),", no ",Object(l.b)("inlineCode",{parentName:"li"},"visibility:hidden")),Object(l.b)("li",{parentName:"ul"},"wait for it to stop moving, for example, until css transition finishes"),Object(l.b)("li",{parentName:"ul"},"scroll the element into view"),Object(l.b)("li",{parentName:"ul"},"wait for it to receive pointer events at the action point, for example, waits until element becomes non-obscured by other elements"),Object(l.b)("li",{parentName:"ul"},"retry if the element is detached during any of the above checks")),Object(l.b)("h4",{id:"forcing-the-click"},"Forcing the click"),Object(l.b)("p",null,"Sometimes, apps use non-trivial logic where hovering the element overlays it with another element that intercepts the click. This behavior is indistinguishable from a bug where element gets covered and the click is dispatched elsewhere. If you know this is taking place, you can bypass the ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/1.8.0/actionability"}),"actionability")," checks and force the click:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"await page.click('button#submit', { force: true });\n")),Object(l.b)("h4",{id:"programmatic-click"},"Programmatic click"),Object(l.b)("p",null,"If you are not interested in testing your app under the real conditions and want to simulate the click by any means possible, you can trigger the ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/click"}),Object(l.b)("inlineCode",{parentName:"a"},"HTMLElement.click()"))," behavior via simply dispatching a click event on the element:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"await page.dispatchEvent('button#submit', 'click');\n")),Object(l.b)("h3",{id:"api-reference-3"},"API reference"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/1.8.0/api/class-page#pageclickselector-options"}),"page.click(selector[, options])")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/1.8.0/api/class-frame#frameclickselector-options"}),"frame.click(selector[, options])")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/1.8.0/api/class-elementhandle#elementhandleclickoptions"}),"elementHandle.click([options])")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/1.8.0/api/class-page#pagedblclickselector-options"}),"page.dblclick(selector[, options])")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/1.8.0/api/class-frame#framedblclickselector-options"}),"frame.dblclick(selector[, options])")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/1.8.0/api/class-elementhandle#elementhandledblclickoptions"}),"elementHandle.dblclick([options])")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/1.8.0/api/class-page#pagehoverselector-options"}),"page.hover(selector[, options])")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/1.8.0/api/class-frame#framehoverselector-options"}),"frame.hover(selector[, options])")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/1.8.0/api/class-elementhandle#elementhandlehoveroptions"}),"elementHandle.hover([options])")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/1.8.0/api/class-page#pagedispatcheventselector-type-eventinit-options"}),"page.dispatchEvent(selector, type[, eventInit, options])")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/1.8.0/api/class-frame#framedispatcheventselector-type-eventinit-options"}),"frame.dispatchEvent(selector, type[, eventInit, options])")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/1.8.0/api/class-elementhandle#elementhandledispatcheventtype-eventinit"}),"elementHandle.dispatchEvent(type[, eventInit])"))),Object(l.b)("br",null),Object(l.b)("h2",{id:"type-characters"},"Type characters"),Object(l.b)("p",null,"Type into the field character by character, as if it was a user with a real keyboard."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"// Type character by character\nawait page.type('#area', 'Hello World!');\n")),Object(l.b)("p",null,"This method will emit all the necessary keyboard events, with all the ",Object(l.b)("inlineCode",{parentName:"p"},"keydown"),", ",Object(l.b)("inlineCode",{parentName:"p"},"keyup"),", ",Object(l.b)("inlineCode",{parentName:"p"},"keypress")," events in place. You can even specify the optional ",Object(l.b)("inlineCode",{parentName:"p"},"delay")," between the key presses to simulate real user behavior."),Object(l.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(l.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(l.b)("h5",{parentName:"div"},Object(l.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(l.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(l.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(l.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(l.b)("p",{parentName:"div"},"Most of the time, ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/1.8.0/api/class-page#pagefillselector-value-options"}),"page.fill(selector, value[, options])")," will just work. You only need to type characters if there is special keyboard handling on the page."))),Object(l.b)("h3",{id:"api-reference-4"},"API reference"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/1.8.0/api/class-page#pagetypeselector-text-options"}),"page.type(selector, text[, options])")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/1.8.0/api/class-frame#frametypeselector-text-options"}),"frame.type(selector, text[, options])")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/1.8.0/api/class-elementhandle#elementhandletypetext-options"}),"elementHandle.type(text[, options])")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/1.8.0/api/class-keyboard#keyboardtypetext-options"}),"keyboard.type(text[, options])"))),Object(l.b)("br",null),Object(l.b)("h2",{id:"keys-and-shortcuts"},"Keys and shortcuts"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"// Hit Enter\nawait page.press('#submit', 'Enter');\n\n// Dispatch Control+Right\nawait page.press('#name', 'Control+ArrowRight');\n\n// Press $ sign on keyboard\nawait page.press('#value', '$');\n")),Object(l.b)("p",null,"This method focuses the selected element and produces a single keystroke. It accepts the logical key names that are emitted in the ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key"}),"keyboardEvent.key")," property of the keyboard events:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{}),"Backquote, Minus, Equal, Backslash, Backspace, Tab, Delete, Escape,\nArrowDown, End, Enter, Home, Insert, PageDown, PageUp, ArrowRight,\nArrowUp, F1 - F12, Digit0 - Digit9, KeyA - KeyZ, etc.\n")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"You can alternatively specify a single character you'd like to produce such as ",Object(l.b)("inlineCode",{parentName:"li"},'"a"')," or ",Object(l.b)("inlineCode",{parentName:"li"},'"#"'),"."),Object(l.b)("li",{parentName:"ul"},"Following modification shortcuts are also supported: ",Object(l.b)("inlineCode",{parentName:"li"},"Shift, Control, Alt, Meta"),".")),Object(l.b)("p",null,"Simple version produces a single character. This character is case-sensitive, so ",Object(l.b)("inlineCode",{parentName:"p"},'"a"')," and ",Object(l.b)("inlineCode",{parentName:"p"},'"A"')," will produce different results."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"// <input id=name>\nawait page.press('#name', 'Shift+A');\n\n// <input id=name>\nawait page.press('#name', 'Shift+ArrowLeft');\n")),Object(l.b)("p",null,"Shortcuts such as ",Object(l.b)("inlineCode",{parentName:"p"},'"Control+o"')," or ",Object(l.b)("inlineCode",{parentName:"p"},'"Control+Shift+T"')," are supported as well. When specified with the modifier, modifier is pressed and being held while the subsequent key is being pressed."),Object(l.b)("p",null,"Note that you still need to specify the capital ",Object(l.b)("inlineCode",{parentName:"p"},"A")," in ",Object(l.b)("inlineCode",{parentName:"p"},"Shift-A")," to produce the capital character. ",Object(l.b)("inlineCode",{parentName:"p"},"Shift-a")," produces a lower-case one as if you had the ",Object(l.b)("inlineCode",{parentName:"p"},"CapsLock")," toggled."),Object(l.b)("h3",{id:"api-reference-5"},"API reference"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/1.8.0/api/class-page#pagepressselector-key-options"}),"page.press(selector, key[, options])")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/1.8.0/api/class-frame#framepressselector-key-options"}),"frame.press(selector, key[, options])")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/1.8.0/api/class-elementhandle#elementhandlepresskey-options"}),"elementHandle.press(key[, options])")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/1.8.0/api/class-keyboard#keyboardpresskey-options"}),"keyboard.press(key[, options])"))),Object(l.b)("br",null),Object(l.b)("h2",{id:"upload-files"},"Upload files"),Object(l.b)("p",null,"You can select input files for upload using the ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/1.8.0/api/class-page#pagesetinputfilesselector-files-options"}),"page.setInputFiles(selector, files[, options])")," method. It expects first argument to point to an ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input"}),"input element")," with the type ",Object(l.b)("inlineCode",{parentName:"p"},'"file"'),". Multiple files can be passed in the array. If some of the file paths are relative, they are resolved relative to the current working directory. Empty array clears the selected files."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"// Select one file\nawait page.setInputFiles('input#upload', 'myfile.pdf');\n\n// Select multiple files\nawait page.setInputFiles('input#upload', ['file1.txt', 'file2.txt']);\n\n// Remove all the selected files\nawait page.setInputFiles('input#upload', []);\n\n// Upload buffer from memory\nawait page.setInputFiles('input#upload', {\n  name: 'file.txt',\n  mimeType: 'text/plain',\n  buffer: Buffer.from('this is test')\n});\n")),Object(l.b)("p",null,"If you don't have input element in hand (it is created dynamically), you can handle the ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/1.8.0/api/class-page#pageonfilechooser"}),"page.on('filechooser')")," event or use a corresponding waiting method upon your action:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const [fileChooser] = await Promise.all([\n  page.waitForEvent('filechooser'),\n  page.click('upload')\n]);\nawait fileChooser.setFiles('myfile.pdf');\n")),Object(l.b)("h3",{id:"api-reference-6"},"API reference"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/1.8.0/api/class-filechooser",title:"FileChooser"}),"FileChooser")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/1.8.0/api/class-page#pagesetinputfilesselector-files-options"}),"page.setInputFiles(selector, files[, options])")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/1.8.0/api/class-frame#framesetinputfilesselector-files-options"}),"frame.setInputFiles(selector, files[, options])")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/1.8.0/api/class-elementhandle#elementhandlesetinputfilesfiles-options"}),"elementHandle.setInputFiles(files[, options])"))),Object(l.b)("br",null),Object(l.b)("h2",{id:"focus-element"},"Focus element"),Object(l.b)("p",null,"For the dynamic pages that handle focus events, you can focus the given element."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"await page.focus('input#name');\n")),Object(l.b)("h3",{id:"api-reference-7"},"API reference"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/1.8.0/api/class-page#pagefocusselector-options"}),"page.focus(selector[, options])")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/1.8.0/api/class-frame#framefocusselector-options"}),"frame.focus(selector[, options])")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/1.8.0/api/class-elementhandle#elementhandlefocus"}),"elementHandle.focus()"))),Object(l.b)("br",null))}p.isMDXComponent=!0},747:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return m}));var n=a(0),c=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,c=function(e,t){if(null==e)return{};var a,n,c={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(c[a]=e[a]);return c}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(c[a]=e[a])}return c}var s=c.a.createContext({}),p=function(e){var t=c.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},b=function(e){var t=p(e.components);return c.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},d=c.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),b=p(a),d=n,m=b["".concat(i,".").concat(d)]||b[d]||u[d]||l;return a?c.a.createElement(m,r(r({ref:t},s),{},{components:a})):c.a.createElement(m,r({ref:t},s))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=d;var r={};for(var o in t)hasOwnProperty.call(t,o)&&(r[o]=t[o]);r.originalType=e,r.mdxType="string"==typeof e?e:n,i[1]=r;for(var s=2;s<l;s++)i[s]=a[s];return c.a.createElement.apply(null,i)}return c.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},748:function(e,t,a){"use strict";function n(e){var t,a,c="";if("string"==typeof e||"number"==typeof e)c+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(c&&(c+=" "),c+=a);else for(t in e)e[t]&&(c&&(c+=" "),c+=t);return c}t.a=function(){for(var e,t,a=0,c="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(c&&(c+=" "),c+=t);return c}},749:function(e,t,a){"use strict";var n=a(0),c=a(750);t.a=function(){var e=Object(n.useContext)(c.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},750:function(e,t,a){"use strict";var n=a(0),c=Object(n.createContext)(void 0);t.a=c},751:function(e,t,a){"use strict";a(0),a(749),a(748),a(55)},752:function(e,t,a){"use strict";a(3),a(0)}}]);