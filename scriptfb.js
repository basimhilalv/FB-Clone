$(document).ready(function(){
    $("#signupFb").validate({
      rules:{
        fname:{
            required:true,
            minlength:4
        },
        lname:{
            required:true,
            minlength:4
        },
        email:{
            required:true,
            email:true
        }
      },
      messages:{
        fname:{
            required:"Enter name"
        },
        lname: "Enter last name"
      }
    })
})