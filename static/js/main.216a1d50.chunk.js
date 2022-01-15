(this.webpackJsonpsorting_visualiser=this.webpackJsonpsorting_visualiser||[]).push([[0],{102:function(e,t,n){"use strict";n.r(t);var i=n(0),o=n.n(i),r=n(27),a=n.n(r),s=(n(96),n(10)),l=n(139),c=n(136),d=n(145),h=n(146),u=n(135),b=n(144),f=n(1),g={color:"#fff","&:hover":{backgroundColor:"#fff",color:"#3c52b2"}},m=function(e){var t=e.display,n=e.close,i=e.width,o=e.height,r=e.startTutorial,a=i/4,s=o/4;return Object(f.jsx)(c.a,{open:t,onClose:n,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:Object(f.jsxs)(d.a,{sx:{backgroundColor:"rgba(0,43,162,0.98)",width:a,height:s,marginLeft:i/20-a/50,marginTop:o/20-s/50,padding:3},children:[Object(f.jsx)(h.a,{sx:{fontSize:40,color:"white",fontWeight:"bold"},children:"Welcome,"}),Object(f.jsx)(h.a,{sx:{color:"white",fontWeight:"bold",paddingTop:2},children:"This is a small app made in React designed to visualise sorting algorithms"}),Object(f.jsxs)(u.a,{direction:"row",sx:{paddingTop:7},children:[Object(f.jsx)(b.a,{onClick:n,sx:g,children:" CLOSE "}),Object(f.jsx)(b.a,{onClick:r,sx:g,style:{marginLeft:a/1.7},children:" TUTORIAL"})]})]})})};function p(e,t,n){for(var i,o,r=[],a=0;a<=e;a++)r.push((i=t,o=n,Math.floor(Math.random()*(o-i+1)+i)));return r}function j(e,t,n){var i=n[e];n[e]=n[t],n[t]=i}var x=n(22),O=n(23),y=function(){function e(){Object(x.a)(this,e)}return Object(O.a)(e,[{key:"apply",value:function(e,t){var n=t.style.width;t.style.width=e.style.width,e.style.width=n}}]),e}();y.begin=new y;var v=function(){function e(t){Object(x.a)(this,e),this.newWidth=t}return Object(O.a)(e,[{key:"apply",value:function(e){e.style.width="".concat(this.newWidth,"px")}}]),e}(),w="#47118f",S="#e73068",k=function(){function e(t,n,i){Object(x.a)(this,e),this.duration=t,this.color=n,this.defaultColor=i}return Object(O.a)(e,[{key:"apply",value:function(e,t){e.animate({backgroundColor:[this.color,this.defaultColor]},this.duration),t.animate({backgroundColor:[this.color,this.defaultColor]},this.duration)}}]),e}();k.AlgorithmSelection=new k(800,"#ffb4a1",w),k.SliderSelection=new k(800,"#21e892",w),k.Sorted=new k(800,S,w),k.Shuffle=new k(800,S,w);var B=function(){function e(t,n,i){Object(x.a)(this,e),this.type=t,this.i=n,this.j=i}return Object(O.a)(e,[{key:"applyTo",value:function(e){this.type.apply(e[this.i],e[this.j])}}]),e}();function C(e,t){for(var n=[],i=0;i<e.length;i++)n.push(new B(t,i,i));return n}function T(e){return C(e,k.Sorted)}function W(e,t,n){n.push(new B(k.SliderSelection,e,t)),n.push(new B(y.begin,e,t))}function L(e,t,n,i){n.push(new B(k.SliderSelection,e,t)),n.push(new B(new v(i[e]),t))}var I=n(76),H=n(86),N=function(e){Object(I.a)(n,e);var t=Object(H.a)(n);function n(){return Object(x.a)(this,n),t.apply(this,arguments)}return Object(O.a)(n,[{key:"render",value:function(){var e=this;return Object(f.jsx)(d.a,{sx:{position:"relative",height:this.props.height/1.1,width:this.props.canvasWidth,backgroundColor:"#ffc5b6",marginLeft:2,marginRight:2},children:this.props.array.map((function(t,n){return Object(f.jsx)("div",{className:"arrayBar",style:{width:"".concat(t,"px"),height:"".concat(e.props.barsHeight,"px"),backgroundColor:"#47118f"},children:" "},n)}))})}}]),n}(i.Component),E=n(78),M=n.n(E),q=function(e){var t=e.isBusy,n=e.sortButtonClicked,i=e.height;return Object(f.jsxs)(b.a,{disabled:t,sx:{bgcolor:"#234ebe",color:"white",fontWeight:"bold",paddingLeft:2,paddingTop:1,height:i},onClick:n,children:[" SORT",Object(f.jsx)(M.a,{sx:{paddingLeft:1}})]},"one")},A=n(79),R=n.n(A),V=function(e){var t=e.isBusy,n=e.shuffleButtonClicked,i=e.height;return Object(f.jsxs)(b.a,{disabled:t,sx:{bgcolor:"#ff518a",color:"white",fontWeight:"bold",paddingLeft:2,paddingTop:1,height:i},onClick:n,children:[" SHUFFLE",Object(f.jsx)(R.a,{sx:{paddingLeft:1}})]},"two")},F=n(147),P=function(e){var t=e.isBusy,n=e.sortButtonClicked,i=e.shuffleButtonClicked,o=e.height;return Object(f.jsxs)(F.a,{orientation:"vertical","aria-label":"vertical contained button group",variant:"contained",sx:{height:o},children:[Object(f.jsx)(q,{height:o/2,isBusy:t,sortButtonClicked:n}),Object(f.jsx)(V,{height:o/2,isBusy:t,shuffleButtonClicked:i})]})},Q=n(142),X=n(143),D=n(148),J=n(138),U=n(80),_=n.n(U),z=function(e){var t=e.stackWidth,n=e.mergeSortButtonClicked,i=e.bubbleSortButtonClicked,o=e.isBusy,r=e.quickSortButtonClicked,a=e.radixSortButtonClicked,s=e.selectionSortButtonClicked,l=e.insertionSortButtonClicked,c=e.heapSortButtonClicked,d={padding:1};return Object(f.jsx)(Q.a,{sx:{marginTop:1,fontWeight:"bold",color:"white",width:t},component:"fieldset",children:Object(f.jsxs)(X.a,{"aria-label":"gender",defaultValue:"female",name:"radio-controllers-group",sx:{bgcolor:"#ffb4a1",color:"white",paddingLeft:2,paddingTop:2,paddingBottom:2,fontWeight:"bold"},children:[Object(f.jsxs)(h.a,{id:"animation-slider",sx:{fontWeight:"bold",display:"flex",alignItems:"center",flexWrap:"wrap"},gutterBottom:!0,children:[" Algorithms",Object(f.jsx)(_.a,{sx:{paddingLeft:1}})]}),Object(f.jsxs)(u.a,{sx:{fontWeight:"bold"},children:[Object(f.jsx)(D.a,{sx:d,value:"selectionSort",control:Object(f.jsx)(J.a,{}),label:"Selection Sort",onChange:s,disabled:o}),Object(f.jsx)(D.a,{sx:d,value:"insertionSort",control:Object(f.jsx)(J.a,{}),label:"Insertion Sort",onChange:l,disabled:o}),Object(f.jsx)(D.a,{sx:d,value:"bubbleSort",control:Object(f.jsx)(J.a,{}),label:"Bubble Sort",onChange:i,disabled:o}),Object(f.jsx)(D.a,{sx:d,value:"heapSort",control:Object(f.jsx)(J.a,{}),label:"Heap Sort",onChange:c,disabled:o}),Object(f.jsx)(D.a,{sx:d,value:"mergeSort",control:Object(f.jsx)(J.a,{}),label:"Merge Sort",onChange:n,disabled:o}),Object(f.jsx)(D.a,{sx:d,value:"quickSort",control:Object(f.jsx)(J.a,{}),label:"Quick Sort",onChange:r,disabled:o}),Object(f.jsx)(D.a,{sx:d,value:"radixSort",control:Object(f.jsx)(J.a,{}),label:"Radix Sort",onChange:a,disabled:o})]})]})})},Y=n(140),G=n(82),K=n.n(G),Z=function(e){var t=e.maxSliderSpeedValue,n=e.minSliderSpeedValue,i=e.defaultSpeedValue,o=e.sliderWidth,r=e.handleSpeedSlider,a=e.isBusy;e.height,e.marginTop;return Object(f.jsxs)(u.a,{sx:{backgroundColor:"rgba(57,92,183,0.98)",marginTop:1,color:"white"},children:[Object(f.jsx)(u.a,{children:Object(f.jsxs)(h.a,{id:"animation-slider",sx:{paddingTop:2,paddingLeft:2,fontWeight:"bold",display:"flex",alignItems:"center",flexWrap:"wrap"},children:[" Animation Speed",Object(f.jsx)(K.a,{sx:{paddingLeft:1}})]})}),Object(f.jsx)(Y.a,{max:t,min:n,defaultValue:i,sx:{marginLeft:2,marginBottom:2,width:.825*o},onChange:r,disabled:a},1)]})},$=n(83),ee=n.n($);function te(e){var t=[],n=e.slice();return ne(e,0,e.length-1,n,t),t.concat(T(e))}function ne(e,t,n,i,o){if(t!==n){var r=Math.floor((t+n)/2);ne(i,t,r,e,o),ne(i,r+1,n,e,o),function(e,t,n,i,o,r){var a=t,s=t,l=n+1;for(;s<=n&&l<=i;)o[s]<=o[l]?(L(s,a,r,o),e[a++]=o[s++]):(L(l,a,r,o),e[a++]=o[l++]);for(;s<=n;)L(s,a,r,o),e[a++]=o[s++];for(;l<=i;)L(l,a,r,o),e[a++]=o[l++]}(e,t,r,n,i,o)}}function ie(e){var t=[];return oe(t,e,0,e.length-1),t.concat(T(e))}function oe(e,t,n,i){if(n<i){var o=function(e,t,n,i){for(var o=t[i],r=n-1,a=n;a<=i-1;a++)t[a]<o&&(W(++r,a,e),j(r,a,t));return W(r+1,i,e),j(r+1,i,t),r+1}(e,t,n,i);oe(e,t,n,o-1),oe(e,t,o+1,i)}}var re=n(15);function ae(e){var t=[];!function(e,t){for(var n=Math.floor((e.length-2)/2);n>=0;n--)se(n,e.length-1,e,t)}(e,t);for(var n=e.length-1;n>0;n--)j(0,n,e),W(0,n,t),se(0,n-1,e,t);return t}function se(e,t,n,i){for(var o=2*e+1;o<=t;){var r=2*e+2<=t?2*e+2:-1,a=void 0;if(!(n[a=-1!==r&&n[r]>n[o]?r:o]>n[e]))return;j(e,a,n),W(e,a,i),o=2*(e=a)+1}}var le=function(){function e(t,n,i){Object(x.a)(this,e),this.text=t,this.animations=i,this.complexity=n}return Object(O.a)(e,[{key:"getAnimations",value:function(e){return this.animations(e)}}]),e}();le.mergeSort=new le("    Merge Sort works by recursively dividing the list of elements in half\n        until it can't anymore. Then it merges all the subarrays, maintaining the correct\n        order of the elements, until we dont have more subarrays to merge. \n        \n        Like Quick Sort, merge sort is a divide and conquer algorithm. These algorithms work\n        by dividing the input based on a heuristic (in this case by half, but can be in even \n        and odd for example). Then solves each of the sub-problems, and finally merges all of\n        them together.","\n        In terms of time complexity its best, worst and average cases are all O(n*logn), while \n        space complexity is at worst linear.\n    ",(function(e){return te(e)})),le.quickSort=new le("     Quick Sort works by recursively partitioning the list of elements based upon a pivot element and then sorting\n       each subarray recursively by putting the pivot in the correct order. \n       \n       It works similarly to Merge Sort because both are divide and conquer algorithms.Their differences being how they\n       divide into subproblems and how they merge.","\n        In terms of time complexity its average case is O(n*logn), worst case is O(n^2), and best is O(n*logn), while\n        space complexity is at worst linear.\n    ",(function(e){return ie(e)})),le.radixSort=new le("   Radix Sort works by  creating and distributing elements into buckets according to their radix.\n        For elements with more than one significant digit, this bucketing process is repeated for each digit,\n        while preserving the ordering of the prior step, until all digits have been considered.\n    ","\n        In terms of time complexity its O(n) with the requirement that they are in the range 1 to n^c with c being a constant\n        \n        This means that for most numbers  we have linear complexity, the lower bound for any sorting algorithm! (we need\n        to at least traverse every element to know how to order them) .\n    ",(function(e){return function(e){var t,n,i,o,r,a,s,l,c,d=[],h={},u={};for(o=e.length,t=0;t<o;t++)h[e[t].toString().length]=0;for(r in h){for(o=e.length,t=0;t<o;t++)(l=(s=e[t]).toString().length)>=r?(a=s.toString()[l-r],u.hasOwnProperty(a)||(u[a]=[]),u[a].push(s)):(u.hasOwnProperty("0")||(u[0]=[]),u[0].push(s));for(t=0,n=0;n<10;n++)if(null!=u[n])for(o=(c=u[n]).length,i=0;i<o;i++)d.push(new B(k.SliderSelection,t,t)),d.push(new B(new v(c[i]),t)),e[t++]=c[i];u={}}return d.concat.apply(d,Object(re.a)(T(e)))}(e)})),le.bubbleSort=new le("   Bubble sort works by traversing all the elements the amount of\n        times being equal to the number of elements, and\n        whenever two adjacent elements can be shifted in the\n        correct order, they are shifted.\n        \n        Its applications often involve places where memory is scarce\n        and the amount of elements isn't extremely big. Although within\n        cuadratic algorithms it's usually outperformed by insertion sort","\n        In terms of time complexity its average, worst and best case are all O(n^2),\n        while its space complexity is constant as its an in-place algorithm.\n    ",(function(e){return function(e){var t=[];if(0===e.length)return t;for(var n=0;n<e.length;n++)for(var i=0;i<e.length-n-1;i++)e[i]>e[i+1]&&(W(i,i+1,t),j(i,i+1,e));return t.concat(T(e))}(e)})),le.selectionSort=new le("\n        Selection Sort works by traversing every element in the array, assuming its the smallest or biggest,\n        and then for every element to the right updating it so that it is the smallest or biggest of all the\n        elements to its right (in the unsorted array), then it swaps it into the index that it should have had\n        and continues until no more elements in the unsorted part are left. \n    ","\n        In terms of time complexity its best, average and worst case are all O(n^2), while its space complexity is constant. \n    ",(function(e){return function(e){for(var t=[],n=0;n<e.length-1;){for(var i=n,o=n+1;o<e.length;o++)e[i]>e[o]&&(i=o);W(n,i,t),j(n,i,e),n++}return t}(e)})),le.insertionSort=new le("\n    Insertion Sort works by traversing element in the array and putting it in the correct position, for \n    every element in the array, it swaps it with every other previous element until it's in the correct\n    position relative to the previous element.\n    \n    It is worth mentioning that of the cuadratic sorting family its usually the fastest.\n    ","\n        In terms of time complexity its best, average and worst case are all O(n^2), while its space complexity is constant. \n    ",(function(e){return function(e){for(var t=[],n=1;n<e.length;n++)for(var i=n;i>0&&e[i]<e[i-1];)j(i,i-1,e),W(i,i-1,t),i-=1;return t}(e)})),le.heapSort=new le("\n        Heap Sort works quite similarly to selection sort. It keeps an unsorted and a sorted region of the array,\n        and inserts every element from the unsorted region into their correct position in the sorted region. It differs\n        from selection sort in that it doesn't traverse all elements to know where it should be, but it pops it from\n        a heap to quickly find the element. Because of this its time complexity comes to be the same as the lower bound\n        for comparison-based sorts.\n    ","\n        In terms of time complexity its best, average and worst case are all O(n*logn), while its space complexity is constant. \n       \n    ",(function(e){return ae(e)})),le.none=new le("","",(function(){return[]}));var ce=function(e){var t=e.algorithm,n=e.width,o=Object(i.useState)(!1),r=Object(s.a)(o,2),a=r[0],l=r[1];return Object(i.useEffect)((function(){l(t!==le.none)}),[t]),Object(f.jsx)(c.a,{open:a,onClose:function(){return l(!1)},"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:Object(f.jsxs)(u.a,{sx:{width:1.1*n,backgroundColor:"#ff8181",marginTop:3,marginRight:5,color:"white",float:"right"},children:[Object(f.jsxs)(d.a,{id:"infog",sx:{fontWeight:"bold",display:"flex",alignItems:"center",flexWrap:"wrap",padding:2,paddingBottom:0},gutterBottom:!0,children:[" Information",Object(f.jsx)(ee.a,{sx:{paddingLeft:1}})]}),Object(f.jsxs)(h.a,{sx:{padding:2},children:[" ",t.text,"  "]}),Object(f.jsxs)(h.a,{sx:{padding:2,fontWeight:"bold"},children:[" ",t.complexity]})]})})},de=n(84),he=n.n(de),ue=function(e){var t=e.maxNumberBars,n=e.minNumberBars,i=e.defaultNumberBars,o=e.sliderWidth,r=e.isBusy,a=e.handlerBarsNumberSlider;return Object(f.jsxs)(u.a,{sx:{backgroundColor:"rgba(57,92,183,0.98)",marginTop:1,color:"white"},children:[Object(f.jsxs)(d.a,{id:"bars-slider",sx:{paddingTop:2,paddingLeft:2,display:"flex",alignItems:"center",flexWrap:"wrap",fontWeight:"bold"},gutterBottom:!0,children:[" Number of bars",Object(f.jsx)(he.a,{sx:{paddingLeft:1}})]}),Object(f.jsx)(Y.a,{max:t,min:n,defaultValue:i,id:"sliderBars",sx:{marginLeft:2,marginBottom:2,width:.825*o},onChange:a,disabled:r})]})},be=void 0,fe=function(e){var t=e.canvasHeight,n=e.canvasWidth,o=e.stackWidth,r=e.stackHeight,a=e.width,l=e.height,c=e.functionButtonsHeight,d=e.algorithmBoxHeight,h=e.slidersHeight,b=e.isMobileDevice,g=200,m=Object(i.useState)(50),j=Object(s.a)(m,2),x=j[0],O=j[1],y=Object(i.useState)(.75*t/2),v=Object(s.a)(y,2),w=v[0],S=v[1],B=.75*n,T=Object(i.useState)(!1),W=Object(s.a)(T,2),L=W[0],I=W[1],H=Object(i.useState)(p(w,0,B)),E=Object(s.a)(H,2),M=E[0],q=E[1],A=Object(i.useState)(le.none),R=Object(s.a)(A,2),V=R[0],F=R[1],Q=w,X=x;Object(i.useEffect)((function(){return D(function(e){return C(e,k.SliderSelection)}(M),1)}),[w,x]),Object(i.useEffect)((function(){return D(function(e){return C(e,k.Shuffle)}(M),1)}),[M]),Object(i.useEffect)((function(){return D(function(e){return C(e,k.AlgorithmSelection)}(M),1)}),[V]);var D=function(e,t){for(var n=function(n){setTimeout((function(){var t=document.getElementsByClassName("arrayBar");e[n].applyTo(t),n===e.length-1&&I(!1)}),n*t)},i=0;i<e.length;i++)n(i)};return Object(f.jsxs)(u.a,{direction:b?"column":"row",sx:{display:"flex","& > *":{m:2}},children:[Object(f.jsxs)(u.a,{sx:{marginRight:1,width:o,height:r},children:[Object(f.jsx)(P,{isBusy:L,shuffleButtonClicked:function(){q(p(w,0,B)),I(!0)}.bind(be),sortButtonClicked:function(){setTimeout((function(){V!==le.none&&I(!0),D(V.getAnimations(M),x)}),100)}.bind(be),height:c}),Object(f.jsx)(z,{isBusy:L,stackWidth:o,height:l,bubbleSortButtonClicked:function(){F(le.bubbleSort),I(!0)},radixSortButtonClicked:function(){F(le.radixSort),I(!0)},mergeSortButtonClicked:function(){F(le.mergeSort),I(!0)},quickSortButtonClicked:function(){F(le.quickSort),I(!0)},selectionSortButtonClicked:function(){F(le.selectionSort),I(!0)},insertionSortButtonClicked:function(){F(le.insertionSort),I(!0)},heapSortButtonClicked:function(){F(le.heapSort),I(!0)}}),Object(f.jsx)(Z,{isBusy:L,sliderWidth:o,handleSpeedSlider:function(e,t){I(!0),O((function(){return g-t+1}))}.bind(be),maxSliderSpeedValue:g,minSliderSpeedValue:100,defaultSpeedValue:g-X,height:h,marginTop:c+d}),Object(f.jsx)(ue,{isBusy:L,sliderWidth:o,handlerBarsNumberSlider:function(e,t){S(t),I(!0),q(p(t,0,B))}.bind(be),maxNumberBars:t/2,minNumberBars:.5*t/2,defaultNumberBars:Q})]}),Object(f.jsx)(N,{barsHeight:2,array:M,width:a,height:l,canvasWidth:n}),Object(f.jsx)(ce,{algorithm:V,width:o})]})},ge=function(e){var t=e.display,n=e.close;return Object(f.jsx)(c.a,{open:t,onClose:n,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:Object(f.jsxs)(u.a,{direction:"row",style:ye,sx:{marginTop:2},children:[Object(f.jsx)(h.a,{sx:Oe,children:"These are the controllers to either shuffle all the bars or sort them given an algorithm"}),Object(f.jsx)(b.a,{sx:xe,onClick:n,children:" NEXT "})]})})},me=function(e){var t=e.display,n=e.close,i=(e.padding,e.height,e.marginTop);return Object(f.jsx)(c.a,{open:t,onClose:n,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:Object(f.jsxs)(u.a,{direction:"row",style:ye,sx:{marginTop:i/4.5},children:[Object(f.jsx)(h.a,{sx:Oe,children:" Here one selects the algorithm that will be used to sort the bars (sorting done in ascending order)"}),Object(f.jsx)(b.a,{sx:xe,onClick:n,children:" NEXT "})]})})},pe=function(e){var t=e.display,n=e.close,i=(e.padding,e.height,e.marginTop);return Object(f.jsx)(c.a,{open:t,onClose:n,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:Object(f.jsxs)(u.a,{direction:"row",style:ye,sx:{marginTop:i/4.5},children:[Object(f.jsx)(h.a,{sx:Oe,children:"These are the sliders to either control the animation speed or the number of bars (bubble sort recommended fewest bars greatest speed)"}),Object(f.jsx)(b.a,{sx:xe,onClick:n,children:" NEXT "})]})})},je=function(e){var t=e.display,n=e.close,i=e.width;return Object(f.jsx)(c.a,{open:t,onClose:n,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:Object(f.jsxs)(u.a,{direction:"column",style:{marginTop:20,backgroundColor:"#ff8181",width:i,float:"right",marginRight:40,color:"white",padding:17},children:[Object(f.jsx)(h.a,{sx:{fontWeight:"bold"},children:"Here we have a small explanation of how the algorithm works, as well its complexity"}),Object(f.jsx)(b.a,{sx:xe,onClick:n,children:" LET'S PLAY "})]})})},xe={color:"#fff",margin:2,"&:hover":{backgroundColor:"#fff",color:"#f38d8d"}},Oe={padding:2,color:"white",fontWeight:"bold"},ye={backgroundColor:"#ff8181",width:470,"margin-left":280},ve=function(e){var t=e.start,n=e.stackWidth,o=e.functionButtonsHeight,r=e.stackTopLeftMargin,a=Object(i.useState)(0),l=Object(s.a)(a,2),c=l[0],d=l[1],h=["none","functionButtons","algorithmButtons","slidersButtons","informationBox"];Object(i.useEffect)((function(){d(t?1:0)}),[t]);var u=function(){d((function(e){return e+1}))};return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(ge,{close:u,display:"functionButtons"===h[c],padding:n,height:o,controllersLeftTopMargin:r}),Object(f.jsx)(me,{height:3*o,marginTop:o,display:"algorithmButtons"===h[c],padding:n,close:u}),Object(f.jsx)(pe,{close:u,display:"slidersButtons"===h[c],paddingLeft:n,height:o,marginTop:5*o}),Object(f.jsx)(je,{width:n,display:"informationBox"===h[c],close:u})]})},we=function(){var e=Object(l.a)(),t=e.height,n=e.width,o=Object(i.useState)(!0),r=Object(s.a)(o,2),a=r[0],c=r[1],d=Object(i.useState)(!1),h=Object(s.a)(d,2),u=h[0],b=h[1],g=1e3>n,p=n<1e3?.8*n:.15*n;return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(m,{startTutorial:function(){b(!0),c(!1)},close:function(){return c((function(){return!1}))},display:a,width:n,height:t}),Object(f.jsx)(ve,{start:u,stackWidth:p,functionButtonsHeight:65}),Object(f.jsx)(fe,{width:n,height:t,canvasHeight:.8*t,canvasWidth:.8*n,stackWidth:p,stackHeight:.8*t,functionButtonsHeight:65,isMobileDevice:g})]})};a.a.render(Object(f.jsx)(o.a.StrictMode,{children:Object(f.jsx)(we,{})}),document.getElementById("root"))},96:function(e,t,n){}},[[102,1,2]]]);
//# sourceMappingURL=main.216a1d50.chunk.js.map