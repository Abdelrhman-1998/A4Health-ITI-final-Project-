
    $('.owl-one').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        
        responsiveClass:true,

        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:2,
                nav:false
            },
            1000:{
                items:4,
                nav:true,
                loop:true
            }
        }
    });

    $('.owl-two ').owlCarousel({
        items:1,
        margin:10,
        autoHeight:true,
        loop:true,
    }); AutoHeight.Defaults = {
        autoHeight: false,
        autoHeightClass: 'owl-height'
    };



    var exampleModal = document.getElementById('exampleModal')
exampleModal.addEventListener('show.bs.modal', function (event) {
  // Button that triggered the modal
  var button = event.relatedTarget
  // Extract info from data-bs-* attributes
  var recipient = button.getAttribute('data-bs-whatever')
  // If necessary, you could initiate an AJAX request here
  // and then do the updating in a callback.
  //
  // Update the modal's content.
  var modalTitle = exampleModal.querySelector('.modal-title')
  var modalBodyInput = exampleModal.querySelector('.modal-body input')

  modalTitle.textContent = 'New message to ' + recipient
  modalBodyInput.value = recipient
})
