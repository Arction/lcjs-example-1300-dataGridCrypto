(self.webpackChunk=self.webpackChunk||[]).push([[524],{44:(e,t,l)=>{const s=l(89),{AxisTickStrategies:a,emptyTick:o,FormattingFunctions:i,SolidLine:n,SolidFill:r,synchronizeAxisIntervals:d,lightningChart:C,Themes:c}=s,g=.2,m=document.head.baseURI+"examples/assets/1300",h=(document.getElementById("chart")||document.body).getBoundingClientRect();let u;try{u="0002-vdcSG+Gzg0/7IOZiBb3OB8F7GsCFtwDWEhr1pIhC/Rq3NEjlJxauDNh/EPCpyOzn4bTBTwvfsdMWZlu0rFRUzhPEa/XzsIfYCzDZ9dbNpBMOekQx9ZIMhwTLVD5ibdSr0o7JO0j4ty1QokPMafoCukY/XomtvrdA5bAXcSW9mno0MgcQcKOtPP9LH6MVonbt0e8ed3DG87TqU3eGgSiJ/ZWdpRbhmH8UjEIPUaeWNuRPnm1/lBsH05HECotEkXDXNUHD7vY9MQHk7ceITp4=-MEQCIDgUjuGENZqvBwvwXcP5VRu1m806bpl6Bimq/LNW2iA2AiAMscZjg6PYQHSRNNr3MIleCbwFvoMsmd0bkgiC6fcNHw=="}catch(e){}const y=C({license:u}).Dashboard({theme:c[new URLSearchParams(window.location.search).get("theme")||"darkGold"]||void 0,numberOfColumns:2,numberOfRows:4});h.width>1200&&y.setColumnWidth(0,800).setColumnWidth(1,h.width-800);const x=(e,t,l)=>{const s=[],a=e.length;for(let o=0;o<a;o+=1){const{date:a,rate:i}=e[o];a>=t&&a<=l&&s.push({x:a,y:i})}let o=0;if(s.length>=1){const e=s[0].y;o=100*s[s.length-1].y/e-100}return{dataPoints:s,delta:o}},S=(()=>{let e;return(t,l)=>{if(e){if(e.info===t)return;e.dispose()}const{name:s}=t,n=y.createChartXY({columnIndex:1,rowIndex:0}).setTitle(`${s} Rate $`).setTitlePosition("series-left-top").setTitleMargin(0).forEachAxis((e=>e.setAnimationScroll(!1)));n.getDefaultAxisX().setTickStrategy(a.Empty),n.addLineSeries({dataPattern:{pattern:"ProgressiveX"}}).setName(`${s} Rate $`).add(l.map((e=>({x:e.date,y:e.rate})))).setCursorResultTableFormatter(((e,t,l,s,a)=>e.addRow(t.getName()).addRow(m.formatValue(a.x)).addRow(`$${t.axisY.formatValue(a.y)}`)));const r=y.createChartXY({columnIndex:1,rowIndex:1}).setTitle(`${s} Volume $`).setTitlePosition("series-left-top").setTitleMargin(0).forEachAxis((e=>e.setAnimationScroll(!1)));r.getDefaultAxisX().setTickStrategy(a.Empty),r.getDefaultAxisY().setTickStrategy(a.Numeric,(e=>e.setFormattingFunction(i.NumericUnits))),r.addAreaSeries().setName(`${s} Volume $`).add(l.map((e=>({x:e.date,y:e.volume})))).setCursorResultTableFormatter(((e,t,l,s,a)=>e.addRow(t.getName()).addRow(m.formatValue(l)).addRow(`$${(s/10**9).toFixed(3)} B`)));const C=y.createChartXY({columnIndex:1,rowIndex:2}).setTitle(`${s} Liquidity $`).setTitlePosition("series-left-top").setTitleMargin(0).forEachAxis((e=>e.setAnimationScroll(!1)));C.getDefaultAxisX().setTickStrategy(a.Empty),C.getDefaultAxisY().setTickStrategy(a.Numeric,(e=>e.setFormattingFunction(i.NumericUnits))),C.addLineSeries({dataPattern:{pattern:"ProgressiveX"}}).setName(`${s} Liquidity $`).add(l.map((e=>({x:e.date,y:e.liquidity})))).setCursorResultTableFormatter(((e,t,l,s,a)=>e.addRow(t.getName()).addRow(m.formatValue(a.x)).addRow(`$${t.axisY.formatValue(a.y)}`)));const c=y.createChartXY({columnIndex:1,rowIndex:3}).setTitle(`${s} Market Cap $`).setTitlePosition("series-left-top").setTitleMargin(0).forEachAxis((e=>e.setAnimationScroll(!1)));c.getDefaultAxisX().setTickStrategy(a.DateTime,(e=>e.setGreatTickStyle(o))),c.getDefaultAxisY().setTickStrategy(a.Numeric,(e=>e.setFormattingFunction(i.NumericUnits))),c.addLineSeries({dataPattern:{pattern:"ProgressiveX"}}).setName(`${s} Market Cap $`).add(l.map((e=>({x:e.date,y:e.cap})))).setCursorResultTableFormatter(((e,t,l,s,a)=>e.addRow(t.getName()).addRow(m.formatValue(a.x)).addRow(`$${t.axisY.formatValue(a.y)}`)));const g=[n,r,C,c],m=c.getDefaultAxisX(),h=g.map((e=>e.getDefaultAxisX()));d(...h),g.map((e=>e.getDefaultAxisY())).forEach((e=>e.setThickness(60).setChartInteractionZoomByWheel(!1).setChartInteractionPanByDrag(!1))),g.forEach((e=>e.setAutoCursor((e=>e.setTickMarkerXVisible(!1))))),e={info:t,dispose:()=>{g.forEach((e=>e.dispose()))}}}})();setTimeout((async()=>{const e=y.createDataGrid({columnIndex:0,rowIndex:0,rowSpan:4}),t=e.getTheme(),l=t.header2Font,s=t.header1Font,a=t.header3Font,o=t.chartTitleFillStyle,i=t.examples.positiveTextFillStyle,d=t.examples.negativeTextFillStyle,C=t.examples.positiveBackgroundFillStyle,c=t.examples.negativeBackgroundFillStyle,h=t.examples.positiveAreaFillStyle,u=t.examples.negativeAreaFillStyle,p=new n({fillStyle:t.examples.positiveFillStyle,thickness:2}),w=new n({fillStyle:t.examples.negativeFillStyle,thickness:2}),f=new r({color:t.examples.highlightDataGridColor}),F=t.examples.dataGridCellBackgroundFillStyle;e.setTitle("Crypto Watch").setCellsBorders({}).setCellsPaddings(0).setCellContent(0,0," ").setCellContent(1,0,2,1,"Coin").setCellContent(3,0,"Price").setCellContent(7,0,"1h").setCellContent(8,0,"24h").setCellContent(9,0,"1 week").setCellContent(4,0,"Market Cap").setCellContent(5,0,"Volume").setCellContent(6,0,"All-time High").setColumnWidth(0,6).setColumnWidth(7,100).setColumnWidth(8,100).setColumnWidth(9,100).setRowTextFont(0,l).setRowBorders(0,{bottom:!0}).setRowTextFillStyle(0,o);const T=await fetch(`${m}/coins-list.json`).then((e=>e.json())),k=new Array(T.length).fill(0),R=Date.UTC(2023,9,15,24,0,0);for(let t=0;t<T.length;t+=1){const l=T[t],{code:n,name:r,rate:g,cap:y,volume:S,allTimeHighUSD:f}=l,F=await fetch(`${m}/${n}.json`).then((e=>e.json()));k[t]=F;const $=1+2*t,B=$+1,A=`${m}/${n}.png`,P=new Image;P.crossOrigin="*",P.src=A;const b=e.engine.addCustomIcon(P,{height:32}),D=x(F,R-36e5,R),I=x(F,R-864e5,R),M=x(F,R-6048e5,R);e.setRowHeight($,30).setRowHeight(B,30).setCellContent(0,$,1,2," ").setCellContent(1,$,1,2,b).setCellPadding(1,$,{left:5,right:5}).setCellPadding(1,$,{left:5}).setCellContent(2,$,1,1,n).setCellTextFont(2,$,s).setCellTextFillStyle(2,$,o).setCellContentAlignment(2,$,"left-bottom").setCellContent(2,B,1,1,r).setCellContentAlignment(2,B,"left-top").setCellTextFont(2,B,a).setCellTextFillStyle(2,B,o).setCellContent(3,$,1,2,`$${g.toFixed(2)}`).setCellContent(4,$,1,2,`$${(y/10**9).toFixed(2)}B`).setCellContent(5,$,1,2,`$${(S/10**9).toFixed(2)}B`).setCellContent(6,$,1,2,`$${f.toFixed(2)}`).setCellContent(7,$,`${D.delta>=0?"+":""}${D.delta.toFixed(2)}%`).setCellTextFillStyle(7,$,D.delta>0?i:d).setCellContent(7,B,"yo bro").setCellContent(7,B,{type:"spark-area",data:D.dataPoints,strokeStyle:D.delta>0?p:w,fillStyle:D.delta>0?h:u}).setCellBackgroundFillStyle(7,$,D.delta>0?C:c).setCellBackgroundFillStyle(7,B,D.delta>0?C:c).setCellContent(8,$,`${I.delta>=0?"+":""}${I.delta.toFixed(2)}%`).setCellTextFillStyle(8,$,I.delta>0?i:d).setCellContent(8,B,{type:"spark-area",data:I.dataPoints,strokeStyle:I.delta>0?p:w,fillStyle:I.delta>0?h:u}).setCellBackgroundFillStyle(8,$,I.delta>0?C:c).setCellBackgroundFillStyle(8,B,I.delta>0?C:c).setCellContent(9,$,`${M.delta>=0?"+":""}${M.delta.toFixed(2)}%`).setCellTextFillStyle(9,$,M.delta>0?i:d).setCellContent(9,B,{type:"spark-area",data:M.dataPoints,strokeStyle:M.delta>0?p:w,fillStyle:M.delta>0?h:u}).setCellBackgroundFillStyle(9,$,M.delta>0?C:c).setCellBackgroundFillStyle(9,B,M.delta>0?C:c).setRowBorders(B,{bottom:!0}).setColumnBorders(6,{right:!0}).setColumnBorders(7,{right:!0}).setColumnBorders(8,{right:!0})}let $=0;e.onCellMouseEnter(((t,l)=>{const s=Math.floor((t.row-1)/2);s<0||e.setRowHighlight(1+2*s,g).setRowHighlight(1+2*s+1,g).setCellBackgroundFillStyle(0,1+2*s,f)})),e.onCellMouseLeave(((t,l)=>{const s=Math.floor((t.row-1)/2);e.setRowHighlight(1+2*s,$===s?g:0).setRowHighlight(1+2*s+1,$===s?g:0).setCellBackgroundFillStyle(0,1+2*s,$===s?f:F)})),e.onCellMouseClick(((t,l)=>{const s=Math.floor((t.row-1)/2);s<0||(e.setRowHighlight(1+2*$,!1).setRowHighlight(1+2*$+1,!1).setCellBackgroundFillStyle(0,1+2*$,F),$=s,e.setRowHighlight(1+2*s,g).setRowHighlight(1+2*s+1,g).setCellBackgroundFillStyle(0,1+2*s,f),S(T[s],k[s]))})),e.setRowHighlight(1+2*$,g).setRowHighlight(1+2*$+1,g).setCellBackgroundFillStyle(0,1+2*$,f),S(T[$],k[$])}),1e3)}},e=>{e.O(0,[502],(()=>(44,e(e.s=44)))),e.O()}]);