"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[4011],{34276:function(e,t,n){n.r(t);var o=n(47689),l=n.n(o),i=n(23433),s=n(5696),a=n(47050),c=n(4580),u=n(67727),r=n(97689);t.default=e=>{var t,n,d,p,v,m;const{0:f,1:h}=(0,o.useState)(""),{compatibleValues:_,attributeConstraints:b,prices:y}=(0,o.useContext)(i.Y),{locale:C}=(0,o.useContext)(a.FD),{selections:D={}}=(0,o.useContext)(s.z);(0,o.useEffect)((()=>{if(D[x]){var e,t;const n=null===(e=O.options)||void 0===e||null===(t=e.find((e=>e.key===D[x])))||void 0===t?void 0:t.name;h(null!=n?n:"")}else h("")}),[D]);const O=e.selectionData.property,x=O.key;if(!O||!_[x]||0===_[x].length)return l().createElement(l().Fragment,null);const A=(O.options||[]).map((t=>(0,r.p)({optionValue:t,option:O,selections:D,compatibleValues:_,attributeConstraints:b,showIncompatibleValues:e.showIncompatibleValues,dictionary:{outOfStockText:"",selectorIncompatibleText:"",newCalloutText:"",recommendedText:""}})));return l().createElement(c.Hn,{productOption:{key:x,name:O.name,style:"color-swatch",selectedKey:D[x],choices:A},skin:"standard",tenant:u.A.tenant,locale:C,currency:null!==(t=null===(n=Object.values(y||{}))||void 0===n||null===(d=n[0])||void 0===d?void 0:d.currency)&&void 0!==t?t:"",fractionDigits:null!==(p=null===(v=Object.values(y||{}))||void 0===v||null===(m=v[0])||void 0===m?void 0:m.fractionDigits)&&void 0!==p?p:2,onChanged:t=>{var n;const{choiceKey:o}=t;e.onChange(o);const l=null===(n=O.options)||void 0===n?void 0:n.find((e=>e.key===o));h((null==l?void 0:l.name)||"")},showIncompatibleChoices:e.showIncompatibleValues,hidePrices:!0})}}}]);
//# sourceMappingURL=ColorSwatchSelector-8d67d75366ef3a11aefa.js.map