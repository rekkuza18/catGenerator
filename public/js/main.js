
$('.cat-grid-container').magnificPopup({
    delegate: '.image-container',
    type: 'image',
    gallery:{
        enabled:true
    },
    mainClass: 'mfp-with-zoom',
  zoom: {
    enabled: true,
    duration: 300, 
    easing: 'ease-in-out', 
    opener: function(openerElement) {
      return openerElement.is('img') ? openerElement : openerElement.find('img');
     }
    }
});