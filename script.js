document.addEventListener('DOMContentLoaded',()=>{console.log("Website BY BIDZZ OFFICIAL telah dimuat.");const pricingSection=document.querySelector('.pricing');const options={root:null,threshold:0.1,rootMargin:"0px"};const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){console.log("Harga Cheat Game Online muncul!");observer.unobserve(pricingSection);}})},options);observer.observe(pricingSection);});