document.querySelector(".form").addEventListener("input",(function(t){e[t.target.name]=t.target.value}));document.querySelector("button").addEventListener("click",(function(){for(let o=0;o<e.amount;o+=1)console.log(o),t(2,3e3).then((({position:e,delay:t})=>{console.log(`✅ Fulfilled promise ${e} in ${t}ms`)})).catch((({position:e,delay:t})=>{console.log(`❌ Rejected promise ${e} in ${t}ms`)}))}));const e={amount:"",delay:"",step:""};function t(e,t){const o=Math.random()>.3;return new Promise(((n,i)=>{setTimeout((()=>{o?n(e,t):i(e,t)}),t)}))}
//# sourceMappingURL=03-promises.bc805a35.js.map
