
Validator1.onshow=function(){
  alrtValid.value = "Name is a required field, email needs to have a valid email address, age needs to be a number and social security needs a valid social security number."
}

btnValidator.onclick = function() {
  $("#Validator1").jqxValidator("validate")
};


