(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{196:function(t,e,i){"use strict";i.r(e);i(6),i(11);var a={chart:{type:"pie-chart"},legend:{show:!1},title:{text:"",offsetY:8},plotOptions:{},labels:[]},n={name:"Pie",props:{tite:{type:String},colors:{type:Array},width:{type:[Number,String]},height:{type:[Number,String],default:"300px"},data:{type:Object,required:!0},options:{type:Object,default:null}},components:{apexchart:function(){return i.e(1).then(i.t.bind(null,411,7))}},computed:{chartOptions:function(){var t=this.$parent.populateChartOptions(a);return t.labels=this.data.categories,t}},created:function(){}},r=i(0),s=Object(r.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("apexchart",{staticClass:"pie-chart",attrs:{width:this.width,height:this.height,type:"pie",options:this.chartOptions,series:this.data.series}})],1)}),[],!1,null,"408bb2a7",null);e.default=s.exports}}]);