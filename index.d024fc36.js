const t=document.body,e=document.querySelector(".wall"),i=document.querySelector(".spider");e.addEventListener("click",l=>{let c=l.clientX,o=l.clientY,n=(t.clientWidth-e.clientWidth)/2,d=(t.clientHeight-e.clientHeight)/2,f=c-n,h=o-d;f<i.offsetWidth/2?f=0:f+i.offsetWidth/2>e.clientWidth?f=e.clientWidth-i.offsetWidth:f-=i.offsetWidth/2,h<i.offsetHeight/2?h=0:h+i.offsetHeight/2>e.clientHeight?h=e.clientHeight-i.offsetHeight:h-=i.offsetHeight/2,i.style.top=`${h+window.scrollY}px`,i.style.left=`${f+window.scrollX}px`});//# sourceMappingURL=index.d024fc36.js.map

//# sourceMappingURL=index.d024fc36.js.map
