"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[3134],{49995:function(e,t,n){n.r(t),n.d(t,{default:function(){return J}});var l=n(47689),a=n.n(l),i=n(47050),r=n(8345),o=n(9244),c=n(5696),s=n(23433),u=n(79868),m=n(950),p=n(86122),d=n(42996),E=n(49581),v=n(25875),y=n(22536),g=n(96454),f=n(78912),C=n(45756),b=n(46942),w=n.n(b),k=n(94638),P=n(62270),x=n(13858),D=n(60297),h=n(44631);const I="...",N=e=>a().createElement(k.p,{className:"mailing-services-price-row subtotal-row",justifyContent:"space-between",alignItems:"center"},a().createElement(k.p,null,a().createElement(g.o,{fontSize:1,mr:"1"},e.productName),e.discountText&&a().createElement(g.o,{className:"discount-callout",fontWeight:"bold",fontSize:1},e.discountText)),a().createElement(k.p,{className:"row-total-price",flexDirection:"column",justifyContent:"flex-end"},a().createElement(g.o,{fontSize:1},e.priceTotal),e.pricePerUnit&&a().createElement(g.o,{fontSize:1},e.pricePerUnit))),V=e=>a().createElement(k.p,{className:"mailing-services-price-row",justifyContent:"space-between",alignItems:"center"},a().createElement(g.o,{textColor:"standard",fontWeight:"bold"},e.text),a().createElement(g.o,{textColor:"standard",fontWeight:"bold"},e.totalPrice)),A=e=>{const{optionKey:t,vatInclusivity:n,price:i,priceInfo:r}=e,{pluginData:o}=(0,l.useContext)(h.t),c=o.contentful[t]||"",s=null==i?void 0:i.additionalFees[`${t}`];let u;if(s){const e={listPrice:null==s?void 0:s.listPrice[`${n}`],discountPrice:null==s?void 0:s.discountedPrice[`${n}`],...r};u=a().createElement(x.qt,{key:"service-price",placeHolderText:I,pricingInfo:e})}return{propertyName:c,propertyPriceElement:u,propertyPrice:s}};var F=e=>{const{locale:t,mpv:n}=(0,l.useContext)(i.FD),{vatInclusivity:r}=(0,l.useContext)(D.S),{pluginData:o}=(0,l.useContext)(h.t),{price:c}=e,s=r?"taxed":"untaxed",u=o.contentful.mailingServiceTotal,m={minimumFractionDigits:null==c?void 0:c.fractionDigits,currency:null==c?void 0:c.currency,vatInc:r,culture:t,hideShippingMessageInVatMessage:!0},{propertyName:p,propertyPrice:d,propertyPriceElement:E}=A({optionKey:"mailingServiceFee",vatInclusivity:s,price:c,priceInfo:m}),{propertyName:v,propertyPrice:y,propertyPriceElement:g}=A({optionKey:"postageFee",vatInclusivity:s,price:c,priceInfo:m}),f={listPrice:(null==c?void 0:c.totalListPrice[`${s}`])-(((null==y?void 0:y.listPrice[`${s}`])||0)+((null==d?void 0:d.listPrice[`${s}`])||0)),discountPrice:(null==c?void 0:c.totalDiscountedPrice[`${s}`])-(((null==y?void 0:y.discountedPrice[`${s}`])||0)+((null==d?void 0:d.discountedPrice[`${s}`])||0)),...m},C=a().createElement(x.qt,{key:"product-price",placeHolderText:I,pricingInfo:f}),b={listPrice:null==c?void 0:c.totalListPrice[`${s}`],discountPrice:null==c?void 0:c.totalDiscountedPrice[`${s}`],...m},w=a().createElement(x.qt,{key:"total-price",placeHolderText:I,pricingInfo:b});return c?a().createElement(k.p,{flexDirection:"column"},a().createElement(N,{productName:n.name,priceTotal:C}),E&&a().createElement(a().Fragment,null,a().createElement(P.c,null),a().createElement(N,{productName:p,priceTotal:E})),g&&a().createElement(a().Fragment,null,a().createElement(P.c,null),a().createElement(N,{productName:v,priceTotal:g})),a().createElement(P.c,null),a().createElement(V,{text:u||"",totalPrice:w})):a().createElement(a().Fragment,null)},S=n(76676),$=n(19185),T=n(91074),O=n(77535),_=n(13544),z=n(18525),L=n(33308),B=n(46790);const H=e=>{const{isConstrained:t,isNew:n,isRecommended:i}=e,{pluginData:r}=(0,l.useContext)(h.t),o=r.contentful.outOfStockButtonAttribute,c=r.contentful.newCalloutText,s=r.contentful.recommended;return a().createElement(a().Fragment,null,t&&a().createElement(B.P,{className:"out-of-stock-attribute-dropdown-callout",ml:2,skin:"standard",variant:"overlay"},o),!t&&n&&a().createElement(B.P,{className:"new-attribute-dropdown-callout",ml:2,skin:"new",variant:"overlay"},c),!t&&!n&&i&&a().createElement(B.P,{className:"recommended-attribute-dropdown-callout",ml:2,skin:"announcement",variant:"overlay"},s))};var K=e=>{var t;const{compatibleValues:n,attributeConstraints:i}=(0,l.useContext)(s.Y),{selections:r}=(0,l.useContext)(c.z),{pluginData:o}=(0,l.useContext)(h.t),u=e.selectionData.property;if(!u||!n[u.key]||0===n[u.key].length)return a().createElement(a().Fragment,null);const p=o.contentful.dropdownIncompatibleMessage,d=e.showIncompatibleValues,E=(u.options||[]).filter((e=>{const t=(0,S.qQ)(u,e,n),{isConstrained:l,isAlwaysConstrained:a}=(0,S.aJ)({option:u.key,value:e.key,attributeConstraints:i,selections:r||{}});return!(!t||l&&!a&&d)})),v=(u.options||[]).filter((e=>{const{isConstrained:t,isAlwaysConstrained:l}=(0,S.aJ)({option:u.key,value:e.key,attributeConstraints:i,selections:r||{}});return!(0,S.qQ)(u,e,n)||t&&!l&&d})),y=e=>(0,S.aJ)({option:u.key,value:e.key,attributeConstraints:i,selections:r||{}}),g=(null==u?void 0:u.key)&&(null===(t=((null==u?void 0:u.options)||[]).find((e=>e.key===(null==r?void 0:r[u.key]))))||void 0===t?void 0:t.name),f=(e,t,n)=>{const l=t&&!d||n;return a().createElement($.o,{value:e.key,key:`mailing-service-dropdown-option-${e.name}`,disabled:l,label:e.name},a().createElement(k.p,{alignItems:"center"},e.name,a().createElement(H,{isConstrained:t,isNew:e.isNew,isRecommended:e.isRecommended})))};return a().createElement(m.a,{mb:4},a().createElement(T.s,null,a().createElement("label",{htmlFor:`mailing-service-dropdown-${null==u?void 0:u.name}`},null==u?void 0:u.name)),a().createElement(O.$O,{fullWidth:!0,id:`mailing-service-dropdown-${null==u?void 0:u.name}`,value:g||"",sizeVariant:"mini",onChange:t=>{t&&e.onChange(t)}},a().createElement(_.X,null,null==u?void 0:u.name),a().createElement(z.q,null,a().createElement(L.T,null,E.map((e=>{const{isConstrained:t,isAlwaysConstrained:n}=y(e);return f(e,t,n)})),e.showIncompatibleValues&&(null==v?void 0:v.length)>0&&a().createElement(a().Fragment,null,a().createElement($.o,{value:"dummy-blank",key:"mailing-service-dropdown-option-blank",disabled:!0}),a().createElement($.o,{value:"dummy-message",key:"mailing-service-dropdown-option-incompatible-option-msg",disabled:!0},null!=p?p:"")),e.showIncompatibleValues&&v.map((e=>{const{isConstrained:t,isAlwaysConstrained:n}=y(e);return f(e,t,n)}))))))},j=n(36343),q=n(99944),M=n(55367),Q=n(39093),R=n(67855);var U=e=>{const{productBuilderOptions:t}=e,n=t.selections,{prices:i,compatibleValues:r,attributeConstraints:o}=(0,l.useContext)(s.Y),{selectedQuantity:b,selections:k,selectCompatibleValue:P,selectIncompatibleValue:x}=(0,l.useContext)(c.z),{isMobile:D}=(0,q.t)((0,u.OO)()),{pluginData:I}=(0,l.useContext)(h.t),{updateInProgress:N}=(0,l.useContext)(c.z),V=I.contentful.mailingServicePricingCalculatorHeader,A=I.contentful.mailingServicePricingCalculatorDescription;return a().createElement(m.a,{backgroundColor:"light-grey",py:D?8:9},a().createElement(p.z,null,a().createElement(d.E,{tabIndex:0,className:"mailing-services-builder",id:"price-calculator"},a().createElement(E.f,null,a().createElement(v.V,{span:6,spanXs:12},a().createElement(y.H3,{marginBottom:"0"},null!=V?V:""),a().createElement(g.o,null,a().createElement(j.A,null,null!=A?A:"")),a().createElement(m.a,{className:"builder-controls"},n.length>0&&a().createElement(a().Fragment,null,a().createElement("div",{className:w()("builder-step-loader",{"loader-active":N})},a().createElement(f.Z0,{size:"extra-large",visuallyHiddenLabel:"Fetching compatible options"})),a().createElement(E.f,{className:"controls-row"},a().createElement(v.V,{span:12},a().createElement(Q.A,{placeholderType:R.Or.QuantityDropdown}),n.map(((e,t)=>a().createElement(K,{showIncompatibleValues:0===t,selectionData:e,key:`mailing-services-selector-${t}`,onChange:t=>{M.Ay.trackBuilderSelection({optionKey:e.property.key,valueKey:t}),(0,S.wp)({option:e.property,selectedValue:t,attributeConstraints:o,selections:k||{},compatibleValues:r,userSelectValue:e=>{P(e)},userSelectIncompatibleValue:e=>{x(e)}})}})))))))),a().createElement(C.j,{xs:!0},a().createElement(v.V,{span:1})),a().createElement(v.V,{span:4,spanXs:12},a().createElement(F,{price:i[b]}),a().createElement(Q.A,{placeholderType:R.Or.Ctas,customData:{showDescription:!1}})),a().createElement(C.j,{xs:!0},a().createElement(v.V,{span:1}))))))},W=n(98411);var J=e=>{var t;const{locale:n,mpv:u}=(0,l.useContext)(i.FD),m=(0,W.e)();if(!(0,r.Fz)(u.mpvId,n)||!m)return a().createElement(a().Fragment,null);const p=new o.j(u).getProductPageMerchandisingDetails(),d=null!==(t=null==p?void 0:p.properties.filter((e=>(e.options||[]).length>1)).map((e=>({selectionStyle:"Dropdown",property:{key:e.key,name:e.name,options:(e.options||[]).map((t=>({optionKey:e.key,key:t.key,name:t.name,images:[],marketingText:"",isNew:!1,isRecommended:!1})))}}))))&&void 0!==t?t:[];return a().createElement(c.A,{productBuilderOptions:{selections:d}},a().createElement(s.A,null,a().createElement(U,{productBuilderOptions:{selections:d}})))}}}]);
//# sourceMappingURL=PriceCalculator-PriceCalculator-64c4e214b0da663b1ef7.js.map