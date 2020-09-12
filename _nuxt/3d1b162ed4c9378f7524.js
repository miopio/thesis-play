(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{312:function(t,e,n){var content=n(403);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(41).default)("53dcb776",content,!0,{sourceMap:!1})},400:function(t){t.exports=JSON.parse('[{"label":"STEP 1","description":"What happens to perpetrators of sexual misconduct once complaints are raised? Let\'s take a look:"},{"label":"STEP 2","description":"Only an estimated 20% of the cases result in the perpetrators losing employment to the institutions, whether they get fired or their contracts get terminated. Another 20% of the perpetrators are given the opportunity to resign. The rest of the cases have resulted in a plethora of consequences, varying in degree of severity."},{"label":"STEP 3","description":"However, if you look closer at outcomes, many of them are not severe at all. The majority of them, in fact. A quarter of perpetrators resign, many in circumstances where institutions allow them to resign before an investigation is officially complete. Some conclude their academic careers by resigning. Others are suspended from teaching classes, only to resume after a few years and a few sexual harassment training courses. Institutions settle cases in court on behalf of the perpetrators; investigations are concluded with an \'official warning\' to the perpetrators. Particularly when the perpetrators in question are highly influential, academically accomplished, and well known, investigative action takes longer."},{"label":"STEP 4","description":"The most common STEM disciplines in which sexual misconduct cases have been reported are bioscience, psychology, and mathematics, with bioscience and psychology making up roughly 10% of STEM cases, and mathematics making up around 7% of STEM cases."},{"label":"STEP 5","description":"You can explore the cases in different outcomes by hovering over them. They are first and foremost grouped by outcomes, then disciplines, then institutions."}]')},401:function(t,e,n){t.exports=n.p+"img/6a7609d.png"},402:function(t,e,n){"use strict";var r=n(312);n.n(r).a},403:function(t,e,n){(e=n(40)(!1)).push([t.i,".node{box-sizing:border-box;line-height:1em;overflow:hidden;position:absolute;white-space:pre;color:#333}.node-label,.node-value{margin:4px}.node-value{margin-top:-2px;font-weight:700}.outcomes{margin:5vh;line-height:.5;background-color:transparent;max-width:600px;padding:2vh;position:absolute;z-index:1}#outcomesSVG{display:block;margin:auto;float:right}#outcomesPage{min-height:100vh}",""]),t.exports=e},414:function(t,e,n){"use strict";n.r(e);n(42),n(17),n(300);var r=n(301),o=n(291),c={data:function(){return{chartTitle:"OUTCOMES OF MISCONDUCT CASES IN STEM ACADEMIA",height:950,width:950,margin:{top:25,left:25,bottom:25,right:25}}},props:{asmdData:{type:Array,required:!0},stepValue:{type:Number,required:!0},descriptions:{type:Array,required:!0}},mixins:[o.a],computed:{myStemsByOutcome:function(){var t=this.asmdData.filter(this.isValid).filter(this.isStem).map(this.addOutcomeClassifier);return r.f().key((function(t){return t.OutcomeClassifier})).key((function(t){return t["Specific Discipline"]})).key((function(t){return t.Institution})).rollup((function(t){return t.length})).entries(t)},root:function(){return r.d({values:this.myStemsByOutcome},(function(t){return t.values})).sum((function(t){return t.value})).sort((function(a,b){return b.value-a.value}))}},methods:{resize:function(){console.log("resized window"),this.width=this.$refs.container.offsetWidth,this.height=this.width,r.n(this.$refs.asmdClusteringSVG).attr("width",this.width).attr("height",this.height)}},mounted:function(){var t=this;console.log("cluster mounted 😷");var e=r.k().domain((function(t){return t.Institution})).range(r.m),n=r.k().domain((function(t){return t.Discipline})).range(["#ff69b4","#EB6468","#bb67ab","#D9678D","#0000b3","#8080ff","#ff8080","#e60000","#7b376e","#ff0090","#c884bb","#6767ff","#e797af","#0000ff","#49248e","#663399"]);r.g().size([this.width,this.height]).padding(3)(this.root);var svg=r.n(this.$refs.outcomesSVG).attr("viewBox","0 0 1000 1000").attr("width",this.width).attr("height",this.height).style("display","block").style("margin","0 -14px"),o=(svg.selectAll("circle").data(this.root.descendants().slice(1)).join("circle").attr("fill",(function(t){return 3==t.depth?"#ffffff":2==t.depth?n(t.parent.data.key):1==t.depth?n(t.data.key):e(t.data.key)})).attr("opacity",(function(t){return 3==t.depth||2==t.depth?.7:1==t.depth?.5:1})).on("mouseover",(function(t){r.n(this),o.transition().duration(200).style("opacity",1),o.html("<b><span style = 'font-size: 24px; font-family: Syncopate; text-transform: uppercase; color: #6767ff;'>"+t.data.key+"</span></b>"),r.o("circle").style("opacity",.3),r.n(r.c.currentTarget).style("opacity",1)})).on("mouseout",(function(t){r.n(this).attr("opacity","1.0"),o.transition().duration(500).style("opacity",0),r.o("circle").style("opacity",(function(t){return 3==t.depth?1:2==t.depth?.7:1==t.depth?.5:1}))})).attr("r",(function(t){return t.r})).attr("transform",(function(t){return"translate(".concat(t.x+1,",").concat(t.y+1,")")})),r.n(this.$refs.outcomeDetail).append().attr("class","tooltip"));svg.append("g").style("font-family","Syncopate").style("font-weight","700").style("font-size","1rem").style("fill","white").style("text-transform","uppercase").attr("pointer-events","all").attr("text-anchor","middle").selectAll("text").data(this.root.descendants()).join("text").attr("pointer-events","all").style("display",(function(e){return e.parent,t.root,"none"})).text((function(t){return t.data.key})).attr("transform",(function(t){return"translate(".concat(t.x+1,",").concat(t.y+1,")")}))},watch:{stepValue:function(){var t=this,e=r.k().domain((function(t){return t.Discipline})).range(["#ff69b4","#EB6468","#bb67ab","#D9678D","#0000b3","#8080ff","#ff8080","#e60000","#7b376e","#ff0090","#c884bb","#6767ff","#e797af","#0000ff","#49248e","#663399"]),n=r.k().domain((function(t){return t.Institution})).range(r.m);switch(this.stepValue){case 0:r.n(this.$refs.outcomesSVG).selectAll("circle").attr("fill",(function(t){return 3==t.depth?"#ffffff":2==t.depth?e(t.parent.data.key):1==t.depth?e(t.data.key):n(t.data.key)})).attr("opacity",(function(t){return 3==t.depth||2==t.depth?.7:1==t.depth?.5:1})),r.n(this.$refs.outcomesSVG).selectAll("text").join("text").attr("pointer-events","all").style("display",(function(e){return e.parent,t.root,"none"})).text((function(t){return t.data.key})).attr("transform",(function(t){return"translate(".concat(t.x+1,",").concat(t.y+1,")")}));break;case 1:r.n(this.$refs.outcomesSVG).selectAll("circle").attr("fill",(function(t){return 3==t.depth?"#ffffff":2==t.depth?e(t.parent.data.key):1==t.depth?e(t.data.key):n(t.data.key)})).attr("opacity",(function(t){return 3==t.depth||2==t.depth?.2:(t.depth,1)})),r.n(this.$refs.outcomesSVG).selectAll("text").join("text").attr("pointer-events","all").style("display",(function(e){return e.parent===t.root?"inline":"none"})).text((function(t){return t.data.key})).attr("transform",(function(t){return"translate(".concat(t.x+1,",").concat(t.y+1,")")}));break;case 2:r.n(this.$refs.outcomesSVG).selectAll("circle").attr("fill",(function(t){return 3==t.depth?"#ffffff":"No longer employed"===t.data.key||"Criminal plea"===t.data.key||"Barred"===t.data.key||"Committed suicide"===t.data.key||2===t.depth?"#000000":"#6767ff"})).attr("opacity",(function(t){return 3==t.depth||2===t.depth||"No longer employed"===t.data.key||"Criminal plea"===t.data.key||"Barred"===t.data.key?.2:"Committed suicide"===t.data.key?"#000000":1})),r.n(this.$refs.outcomesSVG).selectAll("text").join("text").attr("pointer-events","all").style("display",(function(t){return"No longer employed"===t.data.key||"Criminal plea"===t.data.key||"Barred"===t.data.key||"Committed suicide"===t.data.key?"none":1===t.depth?"inline":"none"})).text((function(t){return t.data.key})).attr("transform",(function(t){return"translate(".concat(t.x+1,",").concat(t.y+1,")")}));break;case 3:r.n(this.$refs.outcomesSVG).selectAll("circle").attr("fill",(function(t){return 3==t.depth?"#ffffff":"Psychology"===t.data.key?"#d7678a":"Bioscience"===t.data.key?"#9667d0":"Mathematics"===t.data.key?"#bb67ab":"#000000"})).attr("opacity",(function(t){return 3==t.depth?.2:2==t.depth?.7:1==t.depth?.5:1})),r.n(this.$refs.outcomesSVG).selectAll("text").join("text").attr("pointer-events","all").style("display",(function(t){return"Psychology"===t.data.key&&"Resigned"===t.parent.data.key||"Bioscience"===t.data.key&&"Resigned"===t.parent.data.key||"Mathematics"===t.data.key&&"Resigned"===t.parent.data.key?"inline":"none"})).text((function(t){return t.data.key})).attr("transform",(function(t){return"translate(".concat(t.x+1,",").concat(t.y+1,")")}));break;default:r.n(this.$refs.outcomesSVG).selectAll("circle").attr("fill",(function(t){return 3==t.depth?"#ffffff":2==t.depth?e(t.parent.data.key):1==t.depth?e(t.data.key):n(t.data.key)})).attr("opacity",(function(t){return 3==t.depth||2==t.depth?.7:1==t.depth?.5:1})),r.n(this.$refs.outcomesSVG).selectAll("text").join("text").attr("pointer-events","all").style("display",(function(e){return e.parent,t.root,"none"})).text((function(t){return t.data.key})).attr("transform",(function(t){return"translate(".concat(t.x+1,",").concat(t.y+1,")")}))}}}},l=n(16),d=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"container"}},[n("el-row",[n("el-col",{attrs:{span:8}},[n("div",{staticClass:"chartTitle"},[n("h3",[t._v(" "+t._s(t.chartTitle))])]),t._v(" "),n("el-row",{attrs:{id:"outcomeDetail"}},[n("div",{ref:"description",staticClass:"description"},[t._v(" "+t._s(t.descriptions[t.stepValue].description)+" ")])]),t._v(" "),n("el-row",[n("div",{ref:"outcomeDetail",staticClass:"outcomes"})])],1),t._v(" "),n("el-col",{attrs:{span:16}},[n("svg",{ref:"outcomesSVG",attrs:{id:"outcomesSVG"}})])],1)],1)}),[],!1,null,null,null).exports,f=n(292),h=n(345),m=n(400),y={data:function(){return{loadedAsmdData:h,stepValue:0,stepLabels:m.map((function(t){return t.label})),descriptions:m,images:{salk:n(401)}}},components:{outcomes:d,steps:f.a},methods:{propagateStepChange:function(t){console.log("propagateStepChange: "+t),this.stepValue=t}}},k=(n(402),Object(l.a)(y,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"outcomesPage",style:{backgroundImage:"url("+t.images.salk+")"}},[n("el-row",[n("el-col",{attrs:{span:24}},[n("outcomes",{attrs:{asmdData:t.loadedAsmdData,stepValue:t.stepValue,descriptions:t.descriptions}})],1)],1),t._v(" "),n("el-row",[n("el-col",{staticStyle:{position:"fixed",bottom:"0"},attrs:{span:24}},[n("steps",{attrs:{labels:t.stepLabels,stepValue:t.stepValue},on:{stepChange:t.propagateStepChange}})],1)],1)],1)}),[],!1,null,null,null));e.default=k.exports}}]);