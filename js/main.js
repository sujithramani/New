
if ('serviceWorker' in navigator) {
   console.log("SW present !!! ");
   navigator.serviceWorker.register('./sw.js',{ insecure: true }).then(function(registration){
      console.log('Service worker registered : ', registration.scope);
    })
.catch(function(err) {
    // registration failed :(
     console.log('ServiceWorker registration failed: ', err);
  });
}	
  


 