/*! Built with http://stenciljs.com */
const{h:t}=window.webcomponents;import{a as e,b as s,c as n,d as a,e as o,f as r,g as l,h as c}from"./chunk-c2033b1f.js";class i{doesSlotContainHTML(){return a(this.el).some(t=>1===t.nodeType)}getComponentClassNames(){return{component:!0,ellipsis:!this.doesSlotContainHTML()}}render(){return t("div",{class:this.getComponentClassNames()},t("div",{class:"slot"},t("slot",null)))}static get is(){return"sdx-text-truncate"}static get encapsulation(){return"shadow"}static get properties(){return{el:{elementRef:!0}}}static get style(){return".sc-sdx-text-truncate-h{-webkit-box-sizing:border-box;box-sizing:border-box}*.sc-sdx-text-truncate, .sc-sdx-text-truncate:after, .sc-sdx-text-truncate:before{-webkit-box-sizing:inherit;box-sizing:inherit}.sc-sdx-text-truncate-h{display:block;width:100%}.component.ellipsis.sc-sdx-text-truncate   .slot.sc-sdx-text-truncate{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}"}}export{i as SdxTextTruncate};