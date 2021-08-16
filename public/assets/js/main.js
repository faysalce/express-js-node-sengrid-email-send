//Pop up modal


//Scroll To Top 
var scrollTop = $(".scrollToTop");
$(window).on('scroll', function() {
    if ($(this).scrollTop() < 500) {
        scrollTop.removeClass("active");
    } else {
        scrollTop.addClass("active");
    }
});

//Click event to scroll to top
$('.scrollToTop').on('click', function() {
    $('html, body').animate({
        scrollTop: 0
    }, 300);
    return false;
});
$.fn.serializeObject = function()
{
   var o = {};
   var a = this.serializeArray();
   $.each(a, function() {
       if (o[this.name]) {
           if (!o[this.name].push) {
               o[this.name] = [o[this.name]];
           }
           o[this.name].push(this.value || '');
       } else {
           o[this.name] = this.value || '';
       }
   });
   return o;
};

jQuery(document).ready(function ($) {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('contact-form');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }else{
          event.preventDefault();
          jQuery('form.contact-form .btn').html('Submitting ...');
          var formData = $('form.contact-form').serializeObject();
          console.log(formData);
          jQuery.ajax({
            type: "POST",
            url: "/sendmail/",
            // The key needs to match your method's input parameter (case-sensitive).
            data:JSON.stringify(formData),
            dataType: 'json',
            contentType: 'application/json',
            success: function(data){
                jQuery('form.contact-form .btn').html('Submit');
                setTimeout(function(){ 
                    jQuery('form.contact-form').html('<div class="alert alert-success" role="alert"> <h4 class="alert-heading">Thank you!</h4> <p>Your message has been successfully sent. We will contact you very soon!</p></div>');          

                 }, 1000);
                setTimeout(function(){ 
                    window.location.reload();

                 }, 4000);

            },
            error: function(errMsg) {
                jQuery('form.contact-form .btn').html('Submit');

                console.log(errMsg);
            }
        });

          

        }


        form.classList.add('was-validated');
      }, false);
    });
});

