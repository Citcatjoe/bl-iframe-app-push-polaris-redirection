(function($){
    
    //alert('Hello World');
    
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;

    if (/android/i.test(userAgent)) {
        window.location.href = "https://play.google.com/store/apps/details?id=ch.blick.news.fr";
    } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        window.location.href = "https://apps.apple.com/ch/app/blick-fr/id1596317983?l=fr-FR";
    }


  
})(jQuery);