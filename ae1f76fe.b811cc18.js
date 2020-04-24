(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{155:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return l})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return s}));var n=r(1),a=r(9),i=(r(0),r(166)),o={id:"validator",title:"Validator",sidebar_label:"Validator"},l={id:"api/validator",title:"Validator",description:"`abstract calss`",source:"@site/docs/api/validator.md",permalink:"/react-fluent-form-docs/docs/api/validator",editUrl:"https://github.com/ysfaran/react-fluent-form-docs/edit/master/docs/api/validator.md",sidebar_label:"Validator",sidebar:"someSidebar",previous:{title:"useFluentFormItem",permalink:"/react-fluent-form-docs/docs/api/use-fluent-form-item"}},c=[{value:"Description",id:"description",children:[]},{value:"Generic types",id:"generic-types",children:[{value:"ValuesType",id:"valuestype",children:[]},{value:"Errors",id:"errors",children:[]}]},{value:"Members",id:"members",children:[{value:"validateField",id:"validatefield",children:[]},{value:"validateAllFields",id:"validateallfields",children:[]}]}],d={rightToc:c};function s(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},d,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"abstract calss")),Object(i.b)("h2",{id:"description"},"Description"),Object(i.b)("p",null,"Base class of ",Object(i.b)("inlineCode",{parentName:"p"},"DefaultValidator"),", which is used for form validation by default (see ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"form-config#withvalidation"}),Object(i.b)("inlineCode",{parentName:"a"},"withValidation")),"). Can be extended to add custom validator (see ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"form-config#withcustomvalidator"}),Object(i.b)("inlineCode",{parentName:"a"},"withCustomValidator")),")."),Object(i.b)("h2",{id:"generic-types"},"Generic types"),Object(i.b)("h3",{id:"valuestype"},"ValuesType"),Object(i.b)("p",null,"Type of field values."),Object(i.b)("hr",null),Object(i.b)("h3",{id:"errors"},"Errors"),Object(i.b)("p",null,"Type of errors object. Needs to extend ",Object(i.b)("inlineCode",{parentName:"p"},"ErrorsType"),"."),Object(i.b)("hr",null),Object(i.b)("h2",{id:"members"},"Members"),Object(i.b)("h3",{id:"validatefield"},"validateField"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"<K extends keyof ValuesType>(field: K, values: ValuesType, context: object) => Errors[K] | void")),Object(i.b)("p",null,"Validates one form field and returns validation error for field in case of validation failure else nothing. Needs to be overriden when custom validator is implemented."),Object(i.b)("hr",null),Object(i.b)("h3",{id:"validateallfields"},"validateAllFields"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"(values: ValuesType, context: object) => Errors")),Object(i.b)("p",null,"Validates all fields based on ",Object(i.b)("inlineCode",{parentName:"p"},"validateField"),". Can be overriden to e.g. improve performance."),Object(i.b)("hr",null))}s.isMDXComponent=!0},166:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var d=a.a.createContext({}),s=function(e){var t=a.a.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):l({},t,{},e)),r},p=function(e){var t=s(e.components);return a.a.createElement(d.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=s(r),u=n,f=p["".concat(o,".").concat(u)]||p[u]||b[u]||i;return r?a.a.createElement(f,l({ref:t},d,{components:r})):a.a.createElement(f,l({ref:t},d))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var d=2;d<i;d++)o[d]=r[d];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"}}]);