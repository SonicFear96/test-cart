(window.webpackJsonp=window.webpackJsonp||[]).push([[5,2,3,4],{267:function(t,e,o){var content=o(269);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(46).default)("6905d79b",content,!0,{sourceMap:!1})},268:function(t,e,o){"use strict";o(267)},269:function(t,e,o){var n=o(45)(!1);n.push([t.i,".image-component[data-v-1b61789a]{width:100%;height:100%;position:absolute;top:0;left:0}.image-component.cover img[data-v-1b61789a]{height:100%;width:100%;object-position:center center;object-fit:cover}.image-component img[data-v-1b61789a]{width:100%}",""]),t.exports=n},270:function(t,e,o){var content=o(274);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(46).default)("1fbb78f7",content,!0,{sourceMap:!1})},271:function(t,e,o){var content=o(276);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(46).default)("7eb0597d",content,!0,{sourceMap:!1})},272:function(t,e,o){"use strict";o.r(e);var n={name:"image-component",props:{path:{type:String,default:""}},computed:{imagePath:function(){return"".concat(this.path)}}},r=(o(268),o(13)),component=Object(r.a)(n,(function(){var t=this._self._c;return t("div",{staticClass:"image-component cover"},[t("img",{attrs:{src:this.imagePath}})])}),[],!1,null,"1b61789a",null);e.default=component.exports},273:function(t,e,o){"use strict";o(270)},274:function(t,e,o){var n=o(45)(!1);n.push([t.i,'.card-component[data-v-88ab583e]{border-bottom:1px solid rgba(0,0,0,.1)}.card-component .image[data-v-88ab583e]{position:relative;padding-top:97%;overflow:hidden}.card-component .title[data-v-88ab583e]{margin-top:16px;font-family:"Inter",sans-serif;color:#1f2020;max-width:70%;font-style:normal;font-weight:300;font-size:16px;line-height:112%;letter-spacing:.02em}.card-component .card-bottom[data-v-88ab583e]{margin-top:24px;display:flex;flex-direction:row;justify-content:space-between;align-items:center;margin-bottom:15px}.card-component .price[data-v-88ab583e]{font-family:"Inter",sans-serif;font-weight:600;font-size:16px;line-height:100%}.card-component .add-product__wrapper[data-v-88ab583e]{opacity:0;transition:opacity .8s ease}.card-component .add-product__wrapper[data-v-88ab583e]:hover{opacity:1}.card-component .add-product__wrapper button[data-v-88ab583e]{cursor:pointer;width:80px;height:32px;border:none;border-radius:8px;background-color:#7bb899}.card-component .add-product__wrapper span[data-v-88ab583e]{font-family:"Inter",sans-serif;font-weight:600}',""]),t.exports=n},275:function(t,e,o){"use strict";o(271)},276:function(t,e,o){var n=o(45)(!1);n.push([t.i,'.switcher-component .switch[data-v-69edd91e]{position:relative;display:inline-block;width:36px;height:22px}.switcher-component .switch input[data-v-69edd91e]{display:none}.switcher-component .slider[data-v-69edd91e]{position:absolute;cursor:pointer;top:0;left:0;right:0;bottom:0;background-color:#f2f2f2;-webkit-transition:.4s;transition:.4s}.switcher-component .slider[data-v-69edd91e]:before{position:absolute;content:"";width:8px;height:8px;left:6px;bottom:7px;background-color:#1f2020;-webkit-transition:.4s;transition:.4s}.switcher-component input:checked+.slider[data-v-69edd91e]{background-color:#7bb899}.switcher-component input:checked+.slider[data-v-69edd91e]:before{-webkit-transform:translateX(15px);-ms-transform:translateX(15px);transform:translateX(15px)}.switcher-component .slider.round[data-v-69edd91e]{border-radius:34px}.switcher-component .slider.round[data-v-69edd91e]:before{border-radius:50%}',""]),t.exports=n},277:function(t,e,o){var content=o(281);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(46).default)("60b99e34",content,!0,{sourceMap:!1})},278:function(t,e,o){"use strict";o.r(e);var n={components:{vImg:o(272).default},props:{data:{type:Object,default:function(){}}}},r=(o(273),o(13)),component=Object(r.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"card-component"},[e("div",{staticClass:"image"},[e("vImg",{attrs:{path:t.data.image}})],1),e("div",{staticClass:"title",domProps:{innerHTML:t._s(t.data.title)}}),e("div",{staticClass:"card-bottom"},[e("div",{staticClass:"price"},[e("span",[t._v(t._s(t.data.price)+" ₽")])]),t._m(0)])])}),[function(){var t=this._self._c;return t("div",{staticClass:"add-product__wrapper"},[t("button",{staticClass:"add-product"},[t("span",[this._v("+")])])])}],!1,null,"88ab583e",null);e.default=component.exports},279:function(t,e,o){"use strict";o.r(e);var n={name:"checkbox-switcher-component",props:{value:Boolean},methods:{toggleCheckbox:function(){this.$emit("changeCheckbox")}}},r=(o(275),o(13)),component=Object(r.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"switcher-component"},[e("label",{staticClass:"switch"},[e("input",{attrs:{type:"checkbox"},domProps:{checked:t.value},on:{click:t.toggleCheckbox}}),e("div",{staticClass:"slider round"})])])}),[],!1,null,"69edd91e",null);e.default=component.exports},280:function(t,e,o){"use strict";o(277)},281:function(t,e,o){var n=o(45)(!1);n.push([t.i,".main-page .main[data-v-7a60c8ba]{margin-top:70px;display:flex;flex-direction:row;gap:20px}.main-page .filter[data-v-7a60c8ba]{width:16.6666666667%}.main-page .filter .filter-wrapper[data-v-7a60c8ba]{list-style:none}.main-page .filter .filter-item[data-v-7a60c8ba]{display:flex;flex-direction:row;align-items:center}.main-page .filter .text-filter[data-v-7a60c8ba]{margin-left:10px}.main-page .catalog-heading[data-v-7a60c8ba]{display:flex;flex-direction:row;justify-content:space-between}.main-page .catalog-list__wrapper[data-v-7a60c8ba]{margin-top:45px}.main-page .catalog-list[data-v-7a60c8ba]{display:flex;flex-direction:row;flex-wrap:wrap;margin-left:-20px;margin-bottom:-20px}.main-page .catalog-list .catalog-list__item[data-v-7a60c8ba]{margin-bottom:16px;margin-left:20px;width:calc(20% - 20px)}",""]),t.exports=n},282:function(t,e,o){"use strict";o.r(e);o(47),o(19);var n=o(278),r=o(279),c={name:"main-page",components:{vCard:n.default,vSwitch:r.default},data:function(){return{filter:[{id:1,title:"Новинки",alias:"new",active:!1},{id:2,title:"Есть в наличии",alias:"isStock",active:!1}],product:[{id:1,title:"Краска Wallquest, Brownsone MS90102",active:!0,price:4800,image:"/img/product/product-1.png"},{id:2,title:"Краска Wallquest, Brownsone MS90102",active:!0,price:5e3,image:"/img/product/product-1.png"},{id:3,title:"Краска Wallquest, Brownsone MS90102",active:!0,price:5200,image:"/img/product/product-1.png"},{id:4,title:"Краска Wallquest, Brownsone MS90102",active:!0,price:5400,image:"/img/product/product-1.png"},{id:5,title:"Краска Wallquest, Brownsone MS90102",active:!0,price:5600,image:"/img/product/product-1.png"},{id:6,title:"Краска Wallquest, Brownsone MS90102",active:!0,price:5700,image:"/img/product/product-1.png"}]}},methods:{changeCheckbox:function(t){t.active=!t.active}}},l=(o(280),o(13)),component=Object(l.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"main-page wrapper"},[e("div",{staticClass:"main"},[e("div",{staticClass:"filter"},[e("div",{staticClass:"filter-wrapper"},[e("ul",{staticClass:"filter-wrapper"},t._l(t.filter,(function(o){return e("li",{key:o.id,staticClass:"filter-item"},[e("vSwitch",{attrs:{value:o.active},on:{changeCheckbox:function(e){return t.changeCheckbox(o)}}}),e("span",{staticClass:"text-filter basic-text",domProps:{innerHTML:t._s(o.title)}})],1)})),0)])]),e("div",{staticClass:"catalog"},[e("div",{staticClass:"catalog-heading"},[e("div",{staticClass:"product-quantity basic-text"},[e("span",[t._v(t._s(t.product.length)+" товаров")])]),t._m(0)]),e("div",{staticClass:"catalog-list__wrapper"},[e("div",{staticClass:"catalog-list"},t._l(t.product,(function(t){return e("div",{key:t.id,staticClass:"catalog-list__item"},[e("vCard",{attrs:{data:t}})],1)})),0)])])])])}),[function(){var t=this._self._c;return t("div",{staticClass:"product-filter basic-text"},[t("span",[this._v("сначала дорогие")])])}],!1,null,"7a60c8ba",null);e.default=component.exports}}]);