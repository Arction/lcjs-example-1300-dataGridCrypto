(self.webpackChunk=self.webpackChunk||[]).push([[524],{44:(e,t,l)=>{const s=l(377),{AxisTickStrategies:i,emptyTick:n,FormattingFunctions:a,SolidLine:o,emptyFill:r,SolidFill:d,lightningChart:c,Themes:g}=s,C=.2,h=new URL(document.head.baseURI).origin+new URL(document.head.baseURI).pathname+"examples/assets/1300",y=document.getElementById("chart")||document.body;y===document.body&&(y.style.width="100vw",y.style.height="100vh",y.style.margin="0px"),y.style.display="flex",y.style.flexDirection="row";const m=document.createElement("div");m.style.width="60%",m.style.height="100%",y.append(m);const u=document.createElement("div");u.style.width="40%",u.style.height="100%",y.append(u);const S=c({resourcesBaseUrl:new URL(document.head.baseURI).origin+new URL(document.head.baseURI).pathname+"resources/"}),p=(e,t,l)=>{const s=[],i=e.length;for(let n=0;n<i;n+=1){const{date:i,rate:a}=e[n];i>=t&&i<=l&&s.push({x:i,y:a})}let n=0;if(s.length>=1){const e=s[0].y;n=100*s[s.length-1].y/e-100}return{dataPoints:s,delta:n}},x=(()=>{let e;return(t,l)=>{if(e){if(e.info===t)return;e.dispose()}const{name:s}=t,n=S.ChartXY({container:u,defaultAxisX:{type:"linear-highPrecision"},theme:g[new URLSearchParams(window.location.search).get("theme")||"darkGold"]||void 0}).setTitle(s).setCursor((e=>e.setTickMarkerXVisible(!1)));n.getDefaultAxisX().setTickStrategy(i.DateTime).setIntervalRestrictions((e=>({startMin:e.dataMin,endMax:e.dataMax}))),n.getDefaultAxisY().dispose();const o=n.addAxisY({iStack:3}).setTitle("Rate").setUnits("$").setMargins(5,0),d=(n.addPointLineAreaSeries({dataPattern:"ProgressiveX",yAxis:o}).setAreaFillStyle(r).setName(`${s} Rate`).appendJSON(l,{x:"date",y:"rate"}),n.addAxisY({iStack:2}).setTitle("Volume").setUnits("$").setMargins(5,5).setTickStrategy(i.Numeric,(e=>e.setFormattingFunction(a.NumericUnits)))),c=(n.addPointLineAreaSeries({dataPattern:"ProgressiveX",yAxis:d}).setName(`${s} Volume`).appendJSON(l,{x:"date",y:"volume"}),n.addAxisY({iStack:1}).setTitle("Liquidity").setUnits("$").setMargins(5,5).setTickStrategy(i.Numeric,(e=>e.setFormattingFunction(a.NumericUnits)))),C=(n.addPointLineAreaSeries({dataPattern:"ProgressiveX",yAxis:c}).setAreaFillStyle(r).setName(`${s} Liquidity`).appendJSON(l,{x:"date",y:"liquidity"}),n.addAxisY({iStack:0}).setTitle("Market Cap").setUnits("$").setMargins(0,5).setTickStrategy(i.Numeric,(e=>e.setFormattingFunction(a.NumericUnits))));n.addPointLineAreaSeries({dataPattern:"ProgressiveX",yAxis:C}).setAreaFillStyle(r).setName(`${s} Market Cap`).appendJSON(l,{x:"date",y:"cap"}),n.forEachAxis((e=>e.setAnimationScroll(!1))),n.getDefaultAxisX(),e={info:t,dispose:()=>{n.dispose()}}}})();setTimeout((async()=>{const e=S.DataGrid({container:m}),t=e.getTheme(),l=t.header2Font,s=t.header1Font,i=t.header3Font,n=t.chartTitleFillStyle,a=t.examples.positiveTextFillStyle,r=t.examples.negativeTextFillStyle,c=t.examples.positiveBackgroundFillStyle,g=t.examples.negativeBackgroundFillStyle,y=t.examples.positiveAreaFillStyle,u=t.examples.negativeAreaFillStyle,F=new o({fillStyle:t.examples.positiveFillStyle,thickness:2}),k=new o({fillStyle:t.examples.negativeFillStyle,thickness:2}),w=new d({color:t.examples.highlightDataGridColor}),f=t.examples.dataGridCellBackgroundFillStyle;e.setTitle("Crypto Watch").setCellsBorders({}).setCellsPaddings(0).setCellContent(0,0," ").setCellContent(1,0,2,1,"Coin").setCellContent(3,0,"Price").setCellContent(7,0,"1h").setCellContent(8,0,"24h").setCellContent(9,0,"1 week").setCellContent(4,0,"Market Cap").setCellContent(5,0,"Volume").setCellContent(6,0,"All-time High").setColumnWidth(0,6).setColumnWidth(7,100).setColumnWidth(8,100).setColumnWidth(9,100).setRowTextFont(0,l).setRowBorders(0,{bottom:!0}).setRowTextFillStyle(0,n);const T=await fetch(`${h}/coins-list.json`).then((e=>e.json())),A=new Array(T.length).fill(0),R=Date.UTC(2023,9,15,24,0,0);for(let t=0;t<T.length;t+=1){const l=T[t],{code:o,name:d,rate:C,cap:m,volume:S,allTimeHighUSD:x}=l,w=await fetch(`${h}/${o}.json`).then((e=>e.json()));A[t]=w;const f=1+2*t,$=f+1,v=`${h}/${o}.png`,B=new Image;B.crossOrigin="*",B.src=v;const P=e.engine.addCustomIcon(B,{height:32}),U=p(w,R-36e5,R),L=p(w,R-864e5,R),M=p(w,R-6048e5,R);e.setRowHeight(f,30).setRowHeight($,30).setCellContent(0,f,1,2," ").setCellContent(1,f,1,2,P).setCellPadding(1,f,{left:5,right:5}).setCellPadding(1,f,{left:5}).setCellContent(2,f,1,1,o).setCellTextFont(2,f,s).setCellTextFillStyle(2,f,n).setCellContentAlignment(2,f,"left-bottom").setCellContent(2,$,1,1,d).setCellContentAlignment(2,$,"left-top").setCellTextFont(2,$,i).setCellTextFillStyle(2,$,n).setCellContent(3,f,1,2,`$${C.toFixed(2)}`).setCellContent(4,f,1,2,`$${(m/10**9).toFixed(2)}B`).setCellContent(5,f,1,2,`$${(S/10**9).toFixed(2)}B`).setCellContent(6,f,1,2,`$${x.toFixed(2)}`).setCellContent(7,f,`${U.delta>=0?"+":""}${U.delta.toFixed(2)}%`).setCellTextFillStyle(7,f,U.delta>0?a:r).setCellContent(7,$,"yo bro").setCellContent(7,$,{type:"spark-area",data:U.dataPoints,strokeStyle:U.delta>0?F:k,fillStyle:U.delta>0?y:u}).setCellBackgroundFillStyle(7,f,U.delta>0?c:g).setCellBackgroundFillStyle(7,$,U.delta>0?c:g).setCellContent(8,f,`${L.delta>=0?"+":""}${L.delta.toFixed(2)}%`).setCellTextFillStyle(8,f,L.delta>0?a:r).setCellContent(8,$,{type:"spark-area",data:L.dataPoints,strokeStyle:L.delta>0?F:k,fillStyle:L.delta>0?y:u}).setCellBackgroundFillStyle(8,f,L.delta>0?c:g).setCellBackgroundFillStyle(8,$,L.delta>0?c:g).setCellContent(9,f,`${M.delta>=0?"+":""}${M.delta.toFixed(2)}%`).setCellTextFillStyle(9,f,M.delta>0?a:r).setCellContent(9,$,{type:"spark-area",data:M.dataPoints,strokeStyle:M.delta>0?F:k,fillStyle:M.delta>0?y:u}).setCellBackgroundFillStyle(9,f,M.delta>0?c:g).setCellBackgroundFillStyle(9,$,M.delta>0?c:g).setRowBorders($,{bottom:!0}).setColumnBorders(6,{right:!0}).setColumnBorders(7,{right:!0}).setColumnBorders(8,{right:!0})}let $=0;e.cells.addEventListener("pointerenter",((t,l)=>{const s=Math.floor((l.row-1)/2);s<0||e.setRowHighlight(1+2*s,C).setRowHighlight(1+2*s+1,C).setCellBackgroundFillStyle(0,1+2*s,w)})),e.cells.addEventListener("pointerleave",((t,l)=>{const s=Math.floor((l.row-1)/2);e.setRowHighlight(1+2*s,$===s?C:0).setRowHighlight(1+2*s+1,$===s?C:0).setCellBackgroundFillStyle(0,1+2*s,$===s?w:f)})),e.cells.addEventListener("click",((t,l)=>{const s=Math.floor((l.row-1)/2);s<0||(e.setRowHighlight(1+2*$,!1).setRowHighlight(1+2*$+1,!1).setCellBackgroundFillStyle(0,1+2*$,f),$=s,e.setRowHighlight(1+2*s,C).setRowHighlight(1+2*s+1,C).setCellBackgroundFillStyle(0,1+2*s,w),x(T[s],A[s]))})),e.setRowHighlight(1+2*$,C).setRowHighlight(1+2*$+1,C).setCellBackgroundFillStyle(0,1+2*$,w),x(T[$],A[$])}),1e3)}},e=>{e.O(0,[502],(()=>e(e.s=44))),e.O()}]);