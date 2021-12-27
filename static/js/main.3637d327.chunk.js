(this.webpackJsonpsorting_visualiser=this.webpackJsonpsorting_visualiser||[]).push([[0],{105:function(e,t,n){"use strict";n.r(t);var i=n(0),r=n.n(i),o=n(28),a=n.n(o),s=(n(99),n(10)),c=n(144),l=n(141),d=n(150),h=n(151),u=n(139),b=n(149),f=n(1),g={color:"#fff","&:hover":{backgroundColor:"#fff",color:"#3c52b2"}},j=function(e){var t=e.display,n=e.close,i=e.width,r=e.height,o=e.startTutorial,a=i/4,s=r/4;return Object(f.jsx)(l.a,{open:t,onClose:n,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:Object(f.jsxs)(d.a,{sx:{backgroundColor:"rgba(0,43,162,0.98)",width:a,height:s,marginLeft:i/20-a/50,marginTop:r/20-s/50,padding:3},children:[Object(f.jsx)(h.a,{sx:{fontSize:40,color:"white",fontWeight:"bold"},children:"Welcome,"}),Object(f.jsx)(h.a,{sx:{color:"white",fontWeight:"bold",paddingTop:2},children:"This is a small app made in React designed to visualise sorting algorithms"}),Object(f.jsxs)(u.a,{direction:"row",sx:{paddingTop:7},children:[Object(f.jsx)(b.a,{onClick:n,sx:g,children:" CLOSE "}),Object(f.jsx)(b.a,{onClick:o,sx:g,style:{marginLeft:a/1.7},children:" TUTORIAL"})]})]})})};function p(e,t,n){for(var i,r,o=[],a=0;a<=e;a++)o.push((i=t,r=n,Math.floor(Math.random()*(r-i+1)+i)));return o}var m=n(23),x=n(24),O=function(){function e(){Object(m.a)(this,e)}return Object(x.a)(e,[{key:"apply",value:function(e,t){var n=t.style.width;t.style.width=e.style.width,e.style.width=n}}]),e}();O.begin=new O;var y=function(){function e(t){Object(m.a)(this,e),this.newWidth=t}return Object(x.a)(e,[{key:"apply",value:function(e){e.style.width="".concat(this.newWidth,"px")}}]),e}(),v="#47118f",w="#e73068",S=function(){function e(t,n,i){Object(m.a)(this,e),this.duration=t,this.color=n,this.defaultColor=i}return Object(x.a)(e,[{key:"apply",value:function(e,t){e.animate({backgroundColor:[this.color,this.defaultColor]},this.duration),t.animate({backgroundColor:[this.color,this.defaultColor]},this.duration)}}]),e}();S.AlgorithmSelection=new S(800,"#ffb4a1",v),S.SliderSelection=new S(800,"#21e892",v),S.Sorted=new S(800,w,v),S.Shuffle=new S(800,w,v);var k=function(){function e(t,n,i){Object(m.a)(this,e),this.type=t,this.i=n,this.j=i}return Object(x.a)(e,[{key:"applyTo",value:function(e){this.type.apply(e[this.i],e[this.j])}}]),e}();function B(e,t){for(var n=[],i=0;i<e.length;i++)n.push(new k(t,i,i));return n}function C(e){return B(e,S.Sorted)}function T(e,t,n){n.push(new k(S.SliderSelection,e,t)),n.push(new k(O.begin,e,t))}function W(e,t,n,i){n.push(new k(S.SliderSelection,e,t)),n.push(new k(new y(i[e]),t))}var L=n(80),E=n(90),H=function(e){Object(L.a)(n,e);var t=Object(E.a)(n);function n(){return Object(m.a)(this,n),t.apply(this,arguments)}return Object(x.a)(n,[{key:"render",value:function(){var e=this;return Object(f.jsx)(d.a,{sx:{position:"relative",height:this.props.height/1.1,width:this.props.canvasWidth,backgroundColor:"#ffc5b6",marginLeft:2,marginRight:2},children:this.props.array.map((function(t,n){return Object(f.jsx)("div",{className:"arrayBar",style:{width:"".concat(t,"px"),height:"".concat(e.props.barsHeight,"px"),backgroundColor:"#47118f"},children:" "},n)}))})}}]),n}(i.Component),N=n(82),I=n.n(N),A=function(e){var t=e.isBusy,n=e.sortButtonClicked,i=e.height;return Object(f.jsxs)(b.a,{disabled:t,sx:{bgcolor:"#234ebe",color:"white",fontWeight:"bold",paddingLeft:2,paddingTop:1,height:i},onClick:n,children:[" SORT",Object(f.jsx)(I.a,{sx:{paddingLeft:1}})]},"one")},M=n(83),V=n.n(M),q=function(e){var t=e.isBusy,n=e.shuffleButtonClicked,i=e.height;return Object(f.jsxs)(b.a,{disabled:t,sx:{bgcolor:"#ff518a",color:"white",fontWeight:"bold",paddingLeft:2,paddingTop:1,height:i},onClick:n,children:[" SHUFFLE",Object(f.jsx)(V.a,{sx:{paddingLeft:1}})]},"two")},R=n(152),F=function(e){var t=e.isBusy,n=e.sortButtonClicked,i=e.shuffleButtonClicked,r=e.height;return Object(f.jsxs)(R.a,{orientation:"vertical","aria-label":"vertical contained button group",variant:"contained",sx:{height:r},children:[Object(f.jsx)(A,{height:r/2,isBusy:t,sortButtonClicked:n}),Object(f.jsx)(q,{height:r/2,isBusy:t,shuffleButtonClicked:i})]})},P=n(147),X=n(148),_=n(153),z=n(143),J=n(84),U=n.n(J),Q=function(e){var t=e.stackWidth,n=e.mergeSortButtonClicked,i=e.bubbleSortButtonClicked,r=e.isBusy,o=e.quickSortButtonClicked,a=e.radixSortButtonClicked;return Object(f.jsx)(P.a,{sx:{marginTop:1,fontWeight:"bold",color:"white",width:t},component:"fieldset",children:Object(f.jsxs)(X.a,{"aria-label":"gender",defaultValue:"female",name:"radio-controllers-group",sx:{bgcolor:"#ffb4a1",color:"white",paddingLeft:2,paddingTop:2,paddingBottom:2,fontWeight:"bold"},children:[Object(f.jsxs)(h.a,{id:"animation-slider",sx:{fontWeight:"bold",display:"flex",alignItems:"center",flexWrap:"wrap"},gutterBottom:!0,children:[" Algorithms",Object(f.jsx)(U.a,{sx:{paddingLeft:1}})]}),Object(f.jsxs)(u.a,{sx:{fontWeight:"bold"},children:[Object(f.jsx)(_.a,{value:"insertionSort",control:Object(f.jsx)(z.a,{}),label:"Merge Sort",onChange:n,disabled:r}),Object(f.jsx)(_.a,{value:"mergeSort",control:Object(f.jsx)(z.a,{}),label:"Bubble Sort",onChange:i,disabled:r}),Object(f.jsx)(_.a,{value:"quickSort",control:Object(f.jsx)(z.a,{}),label:"Quick Sort",onChange:o,disabled:r}),Object(f.jsx)(_.a,{value:"radixSort",control:Object(f.jsx)(z.a,{}),label:"Radix Sort",onChange:a,disabled:r})]})]})})},Y=n(145),D=n(86),G=n.n(D),K=function(e){var t=e.maxSliderSpeedValue,n=e.minSliderSpeedValue,i=e.defaultSpeedValue,r=e.sliderWidth,o=e.handleSpeedSlider,a=e.isBusy;e.height,e.marginTop;return Object(f.jsxs)(u.a,{sx:{backgroundColor:"rgba(57,92,183,0.98)",marginTop:1,color:"white"},children:[Object(f.jsx)(u.a,{children:Object(f.jsxs)(h.a,{id:"animation-slider",sx:{paddingTop:2,paddingLeft:2,fontWeight:"bold",display:"flex",alignItems:"center",flexWrap:"wrap"},children:[" Animation Speed",Object(f.jsx)(G.a,{sx:{paddingLeft:1}})]})}),Object(f.jsx)(Y.a,{max:t,min:n,defaultValue:i,sx:{marginLeft:2,marginBottom:2,width:.825*r},onChange:o,disabled:a},1)]})},Z=n(140),$=n(87),ee=n.n($),te=function(e){var t=e.algorithm,n=e.width,r=Object(i.useState)(!1),o=Object(s.a)(r,2),a=o[0],c=o[1];return Object(i.useEffect)((function(){c(!0)}),[t]),Object(f.jsx)(Z.a,{direction:"up",in:a,mountOnEnter:!0,unmountOnExit:!0,children:Object(f.jsxs)(u.a,{sx:{width:n,backgroundColor:"#ff8181",marginTop:1,color:"white"},children:[Object(f.jsxs)(d.a,{id:"infog",sx:{fontWeight:"bold",display:"flex",alignItems:"center",flexWrap:"wrap",padding:1,paddingLeft:1,paddingBottom:0},gutterBottom:!0,children:[" Information",Object(f.jsx)(ee.a,{sx:{paddingLeft:1}})]}),Object(f.jsxs)(h.a,{sx:{padding:1},children:[" ",t.text,"  "]})]})})};function ne(e){var t=[];if(console.log("merge sort animations"),e.length<=1)return e;var n=e.slice();return ie(e,0,e.length-1,n,t),t.concat(C(e))}function ie(e,t,n,i,r){if(t!==n){var o=Math.floor((t+n)/2);ie(i,t,o,e,r),ie(i,o+1,n,e,r),function(e,t,n,i,r,o){var a=t,s=t,c=n+1;for(;s<=n&&c<=i;)r[s]<=r[c]?(W(s,a,o,r),e[a++]=r[s++]):(W(c,a,o,r),e[a++]=r[c++]);for(;s<=n;)W(s,a,o,r),e[a++]=r[s++];for(;c<=i;)W(c,a,o,r),e[a++]=r[c++]}(e,t,o,n,i,r)}}function re(e){var t=[];return oe(t,e,0,e.length-1),t.concat(C(e))}function oe(e,t,n,i){if(n<i){var r=function(e,t,n,i){for(var r=t[i],o=n-1,a=n;a<=i-1;a++)if(t[a]<r){T(++o,a,e);var s=t[o];t[o]=t[a],t[a]=s}T(o+1,i,e);var c=t[o+1];return t[o+1]=t[i],t[i]=c,o+1}(e,t,n,i);oe(e,t,n,r-1),oe(e,t,r+1,i)}}var ae=n(15);var se=function(){function e(t,n,i){Object(m.a)(this,e),this.text=t,this.animations=n,this.link=i}return Object(x.a)(e,[{key:"getAnimations",value:function(e){return this.animations(e)}}]),e}();se.mergeSort=new se("    Merge Sort works by recursively dividing the list of elements in half\n    until it can't anymore. Then it merges all the subarrays in the corresponding\n     order until we dont have more subarrays to merge. O(n*logn) time complexity",(function(e){return ne(e)})),se.quickSort=new se("     It works by recursively partitioning the list of elements based upon a pivot element and then sorting\n       each subarray recursively by putting the pivot in the correct order. O(n*logn) time complexity ",(function(e){return re(e)})),se.radixSort=new se("   It works by decomposing each element in digits and for every digit ordering\n     the elements upon it (without loosing order from previous digits). It is different\n      from the others as it doesn't soley compare elements when ordering them. As a result\n       it manages to have time complexity O(n) provided the range of numbers isnt crazy high (polynomial)",(function(e){return function(e){var t,n,i,r,o,a,s,c,l,d=[],h={},u={};for(r=e.length,t=0;t<r;t++)h[e[t].toString().length]=0;for(o in h){for(r=e.length,t=0;t<r;t++)(c=(s=e[t]).toString().length)>=o?(a=s.toString()[c-o],u.hasOwnProperty(a)||(u[a]=[]),u[a].push(s)):(u.hasOwnProperty("0")||(u[0]=[]),u[0].push(s));for(t=0,n=0;n<10;n++)if(null!=u[n])for(r=(l=u[n]).length,i=0;i<r;i++)d.push(new k(S.SliderSelection,t,t)),d.push(new k(new y(l[i]),t)),e[t++]=l[i];u={}}return d.concat.apply(d,Object(ae.a)(C(e)))}(e)})),se.bubbleSort=new se("   Bubble sort works by traversing all the elements the amount of\n        times being equal to the number of elements, and\n        whenever two adyacent elements can be shifted in the\n        correct order, they are shifted. O(n^2) time complexity ",(function(e){return function(e){var t=[];if(0===e.length)return t;for(var n=0;n<e.length;n++)for(var i=0;i<e.length;i++)if(e[i]>e[i+1]){T(i,i+1,t);var r=e[i];e[i]=e[i+1],e[i+1]=r}return t.concat(C(e))}(e)}),"https://en.wikipedia.org/wiki/Bubble_sort"),se.none=new se("",(function(){return[]}),"");var ce=n(88),le=n.n(ce),de=function(e){var t=e.maxNumberBars,n=e.minNumberBars,i=e.defaultNumberBars,r=e.sliderWidth,o=e.isBusy,a=e.handlerBarsNumberSlider;return Object(f.jsxs)(u.a,{sx:{backgroundColor:"rgba(57,92,183,0.98)",marginTop:1,color:"white"},children:[Object(f.jsxs)(d.a,{id:"bars-slider",sx:{paddingTop:2,paddingLeft:2,display:"flex",alignItems:"center",flexWrap:"wrap",fontWeight:"bold"},gutterBottom:!0,children:[" Number of bars",Object(f.jsx)(le.a,{sx:{paddingLeft:1}})]}),Object(f.jsx)(Y.a,{max:t,min:n,defaultValue:i,id:"sliderBars",sx:{marginLeft:2,marginBottom:2,width:.825*r},onChange:a,disabled:o})]})},he=void 0,ue=function(e){var t=e.canvasHeight,n=e.canvasWidth,r=e.stackWidth,o=e.stackHeight,a=e.width,c=e.height,l=(e.stackLeftTopMargin,e.functionButtonsHeight),d=e.algorithmBoxHeight,h=e.slidersHeight,b=200,g=Object(i.useState)(50),j=Object(s.a)(g,2),m=j[0],x=j[1],O=Object(i.useState)(.75*t/2),y=Object(s.a)(O,2),v=y[0],w=y[1],k=.75*n,C=Object(i.useState)(!1),T=Object(s.a)(C,2),W=T[0],L=T[1],E=Object(i.useState)(p(v,0,k)),N=Object(s.a)(E,2),I=N[0],A=N[1],M=Object(i.useState)(se.none),V=Object(s.a)(M,2),q=V[0],R=V[1],P=v,X=m;Object(i.useEffect)((function(){return _(function(e){return B(e,S.SliderSelection)}(I),1)}),[v,m]),Object(i.useEffect)((function(){return _(function(e){return B(e,S.Shuffle)}(I),1)}),[I]),Object(i.useEffect)((function(){return _(function(e){return B(e,S.AlgorithmSelection)}(I),1)}),[q]);var _=function(e,t){for(var n=function(n){setTimeout((function(){var t=document.getElementsByClassName("arrayBar");e[n].applyTo(t),n===e.length-1&&L(!1)}),n*t)},i=0;i<e.length;i++)n(i)};return Object(f.jsxs)(u.a,{direction:"row",sx:{display:"flex","& > *":{m:2}},children:[Object(f.jsxs)(u.a,{sx:{marginRight:1,width:r,height:o},children:[Object(f.jsx)(F,{isBusy:W,shuffleButtonClicked:function(){A(p(v,0,k)),L(!0)}.bind(he),sortButtonClicked:function(){setTimeout((function(){q!==se.none&&L(!0),_(q.getAnimations(I),m)}),100)}.bind(he),height:l}),Object(f.jsx)(Q,{isBusy:W,stackWidth:r,height:d,bubbleSortButtonClicked:function(){R(se.bubbleSort),L(!0)},radixSortButtonClicked:function(){R(se.radixSort),L(!0)},mergeSortButtonClicked:function(){R(se.mergeSort),L(!0)},quickSortButtonClicked:function(){R(se.quickSort),L(!0)}}),Object(f.jsx)(K,{isBusy:W,sliderWidth:r,handleSpeedSlider:function(e,t){L(!0),x((function(){return b-t+1}))}.bind(he),maxSliderSpeedValue:b,minSliderSpeedValue:100,defaultSpeedValue:b-X,height:h,marginTop:l+d}),Object(f.jsx)(de,{isBusy:W,sliderWidth:r,handlerBarsNumberSlider:function(e,t){w(t),L(!0),A(p(t,0,k))}.bind(he),maxNumberBars:t/2,minNumberBars:.5*t/2,defaultNumberBars:P}),Object(f.jsx)(te,{algorithm:q,width:r})]}),Object(f.jsx)(H,{barsHeight:2,array:I,width:a,height:c,canvasWidth:n})]})},be=function(e){var t=e.display,n=e.close;return Object(f.jsx)(l.a,{open:t,onClose:n,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:Object(f.jsxs)(u.a,{direction:"row",style:xe,sx:{marginTop:2},children:[Object(f.jsx)(h.a,{sx:me,children:"These are the controllers to either shuffle all the bars or sort them given an algorithm"}),Object(f.jsx)(b.a,{sx:pe,onClick:n,children:" NEXT "})]})})},fe=function(e){var t=e.display,n=e.close,i=(e.padding,e.height,e.marginTop);return Object(f.jsx)(l.a,{open:t,onClose:n,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:Object(f.jsxs)(u.a,{direction:"row",style:xe,sx:{marginTop:i/4.5},children:[Object(f.jsx)(h.a,{sx:me,children:" Here one selects the algorithm that will be used to sort the bars (sorting done in ascending order)"}),Object(f.jsx)(b.a,{sx:pe,onClick:n,children:" NEXT "})]})})},ge=function(e){var t=e.display,n=e.close,i=(e.padding,e.height,e.marginTop);return Object(f.jsx)(l.a,{open:t,onClose:n,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:Object(f.jsxs)(u.a,{direction:"row",style:xe,sx:{marginTop:i/7},children:[Object(f.jsx)(h.a,{sx:me,children:"These are the sliders to either control the animation speed or the number of bars (bubble sort reccommended fewest bars greatest speed)"}),Object(f.jsx)(b.a,{sx:pe,onClick:n,children:" NEXT "})]})})},je=function(e){var t=e.display,n=e.close,i=(e.padding,e.height,e.marginTop);return Object(f.jsx)(l.a,{open:t,onClose:n,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:Object(f.jsxs)(u.a,{direction:"row",style:xe,sx:{marginTop:i/1.9},children:[Object(f.jsx)(h.a,{sx:me,children:"Here we have a small explanation of how the algorithm works, as well its average time complexity"}),Object(f.jsx)(b.a,{sx:pe,onClick:n,children:" LET'S PLAY "})]})})},pe={color:"#fff",margin:2,"&:hover":{backgroundColor:"#fff",color:"#f38d8d"}},me={padding:2,color:"white",fontWeight:"bold"},xe={backgroundColor:"#ff8181",width:470,"margin-left":280},Oe=function(e){var t=e.start,n=e.stackWidth,r=e.functionButtonsHeight,o=e.stackTopLeftMargin,a=Object(i.useState)(0),c=Object(s.a)(a,2),l=c[0],d=c[1],h=["none","functionButtons","algorithmButtons","slidersButtons","informationBox"];Object(i.useEffect)((function(){d(t?1:0)}),[t]);var u=function(){d((function(e){return e+1}))};return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(be,{close:u,display:"functionButtons"===h[l],padding:n,height:r,controllersLeftTopMargin:o}),Object(f.jsx)(fe,{height:3*r,marginTop:r,display:"algorithmButtons"===h[l],padding:n,close:u}),Object(f.jsx)(ge,{close:u,display:"slidersButtons"===h[l],paddingLeft:n,height:r,marginTop:5*r}),Object(f.jsx)(je,{height:r,display:"informationBox"===h[l],close:u,padding:n,marginTop:2*r})]})},ye=function(){var e=Object(c.a)(),t=e.height,n=e.width,r=Object(i.useState)(!0),o=Object(s.a)(r,2),a=o[0],l=o[1],d=Object(i.useState)(!1),h=Object(s.a)(d,2),u=h[0],b=h[1],g=.15*n;return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(j,{startTutorial:function(){b(!0),l(!1)},close:function(){return l((function(){return!1}))},display:a,width:n,height:t}),Object(f.jsx)(Oe,{start:u,stackWidth:g,functionButtonsHeight:65}),Object(f.jsx)(ue,{width:n,height:t,canvasHeight:.8*t,canvasWidth:.8*n,stackWidth:g,stackHeight:.8*t,functionButtonsHeight:65})]})};a.a.render(Object(f.jsx)(r.a.StrictMode,{children:Object(f.jsx)(ye,{})}),document.getElementById("root"))},99:function(e,t,n){}},[[105,1,2]]]);
//# sourceMappingURL=main.3637d327.chunk.js.map