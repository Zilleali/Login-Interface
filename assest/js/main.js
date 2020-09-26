function show() {
       var p = document.getElementById('pwd');
       p.setAttribute('type', 'text');
     }
     
     function hide() {
       var p = document.getElementById('pwd');
       p.setAttribute('type', 'password');
     }
     
     function showHide() {
       var pwShown = 0;
     
       document.getElementById("eye").addEventListener("click", function() {
         if (pwShown == 0) {
           pwShown = 1;
           show();
         } else {
           pwShow = 0;
           hide();
         }
       }, false);
     }