(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{161:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return l})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return u}));var n=r(1),a=r(9),i=(r(0),r(166)),o={id:"use-fluent-form-array",title:"useFluentFormArray",sidebar_label:"useFluentFormArray"},l={id:"api/use-fluent-form-array",title:"useFluentFormArray",description:"`<Config extends FormArrayConfig>(config: Config) => UseFluentFormArray`",source:"@site/docs/api/use-fluent-form-array.md",permalink:"/react-fluent-form-docs/docs/api/use-fluent-form-array",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/api/use-fluent-form-array.md",sidebar_label:"useFluentFormArray",sidebar:"someSidebar",previous:{title:"useFluentForm",permalink:"/react-fluent-form-docs/docs/api/use-fluent-form"},next:{title:"useFluentFormItem",permalink:"/react-fluent-form-docs/docs/api/use-fluent-form-item"}},c=[{value:"Description",id:"description",children:[]},{value:"Return type",id:"return-type",children:[{value:"formArray",id:"formarray",children:[]},{value:"formStates",id:"formstates",children:[]},{value:"submitting",id:"submitting",children:[]},{value:"addForm",id:"addform",children:[]},{value:"setInitialArray",id:"setinitialarray",children:[]},{value:"removeForm",id:"removeform",children:[]},{value:"getFormStateByKey",id:"getformstatebykey",children:[]},{value:"handleSubmit",id:"handlesubmit",children:[]},{value:"resetArray",id:"resetarray",children:[]}]}],b={rightToc:c};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},b,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"<Config extends FormArrayConfig>(config: Config) => UseFluentFormArray")),Object(i.b)("h2",{id:"description"},"Description"),Object(i.b)("p",null,"Hook to create form arrays.\nExpects a ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"form-array-config"}),Object(i.b)("inlineCode",{parentName:"a"},"FormArrayConfig"))," as parameter:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),'type UserRoleForm = { username: string; role: string };\n\nconst arrayConfig = createFormArray<UserRoleForm>()({\n  username: field.text(),\n  role: field.select()\n}).withInitalArray([{ username: "ysfaran", role: "admin" }]);\n\nconst {\n  formArray,\n  formStates,\n  submitting,\n  setInitialArray,\n  addForm,\n  removeForm,\n  resetArray,\n  getFormStateByKey,\n  handleSubmit\n} = useFluentFormArray(arrayConfig);\n')),Object(i.b)("h2",{id:"return-type"},"Return type"),Object(i.b)("h3",{id:"formarray"},"formArray"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"UseFluentFormItemArgs[]")),Object(i.b)("p",null,"Contains all items that need to be passed to ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"use-fluent-form-item"}),Object(i.b)("inlineCode",{parentName:"a"},"useFluentFormItem")),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),"const UserRoleFormArray = () => {\n  const { formArray } = useFluentFormArray(arrayConfig);\n\n  return formArray.map(item => <UserRoleForm key={item.key} formItem={item} />);\n};\n")),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),"interface UserRoleFormProps {\n  formItem: UseFluentFormItemArgs<typeof arrayConfig>;\n}\n\nconst UserRoleForm: React.FC<UserRoleFormProps> = ({ formItem }) => {\n  const { fields } = useFluentFormItem(arrayConfig);\n\n  return (\n    <div>\n      <label>\n        Username:\n        <input {...fields.username} />\n      </label>\n      {/* ... */}\n    </div>\n  );\n};\n")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"formstates"},"formStates"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"FormArrayStates")),Object(i.b)("p",null,"Array that contains information about states of each form item.\nThe state is equally structured as the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"use-fluent-form#returntype"}),"state returned by ",Object(i.b)("inlineCode",{parentName:"a"},"useFluentForm")),", but contains an additional ",Object(i.b)("inlineCode",{parentName:"p"},"key")," prop to identify the item:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),"const { formStates } = useFluentFormArray(arrayConfig);\nconst { key, values, errors /* ... */ } = formStates[0];\n")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"submitting"},"submitting"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"boolean")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"true")," if form array is currently submitting else ",Object(i.b)("inlineCode",{parentName:"p"},"false"),"."),Object(i.b)("hr",null),Object(i.b)("h3",{id:"addform"},"addForm"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"(args?: AddFormArgs) => void")),Object(i.b)("p",null,"Add new item to form array."),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"AddFormArgs"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"{\n  // default: initial values of FormArrayConfig\n  initialValues?: Partial<ValuesType>;\n  // default: key counter or key generator passed to withKeyGenerator\n  key?: string | number;\n}\n")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"setinitialarray"},"setInitialArray"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"(initialArray: ValuesType[]) => void")),Object(i.b)("p",null,"Sets initial array values of form array. This is important when resetting a form array."),Object(i.b)("hr",null),Object(i.b)("h3",{id:"removeform"},"removeForm"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"(key: string | number) => void")),Object(i.b)("p",null,"Removes form item with specified ",Object(i.b)("inlineCode",{parentName:"p"},"key")," from the form array."),Object(i.b)("hr",null),Object(i.b)("h3",{id:"getformstatebykey"},"getFormStateByKey"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"(key: string | number) => FormItem | undefined")),Object(i.b)("p",null,"Returns state of form item with specified key or ",Object(i.b)("inlineCode",{parentName:"p"},"undefined")," in case item is not in the form array."),Object(i.b)("hr",null),Object(i.b)("h3",{id:"handlesubmit"},"handleSubmit"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"(success?: Function, failure?: Function, options?: HandleSubmitOptions) => (event: any) => void")),Object(i.b)("p",null,"Returns a submit handler. When this handler is called validation for all fields in all form items will be triggered. Works equally to ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"use-fluent-form#handlesubmit"}),Object(i.b)("inlineCode",{parentName:"a"},"handleSubmit")," returned by ",Object(i.b)("inlineCode",{parentName:"a"},"useFluentForm")),"."),Object(i.b)("hr",null),Object(i.b)("h3",{id:"resetarray"},"resetArray"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"() => void")),Object(i.b)("p",null,"Sets complete form array state to inital state. Initial values can be modified using ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#setinitialarray"}),Object(i.b)("inlineCode",{parentName:"a"},"setInitialArray")),"."),Object(i.b)("hr",null))}u.isMDXComponent=!0},166:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var b=a.a.createContext({}),u=function(e){var t=a.a.useContext(b),r=t;return e&&(r="function"==typeof e?e(t):l({},t,{},e)),r},s=function(e){var t=u(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),s=u(r),p=n,d=s["".concat(o,".").concat(p)]||s[p]||m[p]||i;return r?a.a.createElement(d,l({ref:t},b,{components:r})):a.a.createElement(d,l({ref:t},b))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var b=2;b<i;b++)o[b]=r[b];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}p.displayName="MDXCreateElement"}}]);