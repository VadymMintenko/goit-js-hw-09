!function(){document.querySelector(".form").addEventListener("input",(function(o){n[o.target.name]=o.target.value})),document.querySelector("button").addEventListener("click",(function(){for(var t=0;t<n.amount;t+=1)console.log(t),o(2,3e3).then((function(n){var o=n.position,t=n.delay;console.log("✅ Fulfilled promise ".concat(o," in ").concat(t,"ms"))})).catch((function(n){var o=n.position,t=n.delay;console.log("❌ Rejected promise ".concat(o," in ").concat(t,"ms"))}))}));var n={amount:"",delay:"",step:""};function o(n,o){var t=Math.random()>.3;return new Promise((function(e,c){setTimeout((function(){t?e(n,o):c(n,o)}),o)}))}}();
//# sourceMappingURL=03-promises.c9b58d94.js.map