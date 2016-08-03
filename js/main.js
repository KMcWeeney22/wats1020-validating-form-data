/* Custom JS goes here. */

// For this assignment you'll need to do a few things:
// 1. Create a document ready handler.
// 2. Define a validation object for use on your page.
// 3. Connect the validation object to an event handler tied to the submit button.

// Refer to the `index.html` file for the validation rules that must be enforced.
$(document).on('ready', function(){
		
	// validation function created to check to see if data entered is a valid state option
		jQuery.validator.addMethod("checkState", function(value) {
    var states = [
        "AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA",
        "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD",
        "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ",
        "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC",
        "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY",
        "AS", "DC", "FM", "GU", "MH", "MP", "PR", "PW", "VI"
    ];
    return $.inArray(value.toUpperCase(), states) != -1;
}, "Please enter a valid state");
	
	// function created check against whether a valid US zip code is entered in the form
	jQuery.validator.addMethod("validZipUS", function(value, element) {
    return /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(value);
}, "Please input a valid US zip code.");
	
	
	jQuery.validator.addMethod("lettersonly", function(value, element) {
  return this.optional(element) || /^[a-z," "]+$/i.test(value);
}, "Letters only please"); 
	
    // Form validation
    $('#order-form').validate({
        submitHandler: function(form) {
            // If form is valid, submit it!
            form.submit();
        },
        rules: {
            "your-name": {
	              lettersonly: true,
                required: true,
                maxlength: 128,
                number: false
            },
            "your-state": {
	              checkState: true,
                required: true,
                maxlength: 2
            },
            "your-zip": {
                validZipUS: true,
                required: true,
                maxlength: 5,
                digits: true
            },
            "card-holder-name": {
	              lettersonly: true,
                required: true,
                maxlength: 128
            },
            "card-number": {
                required: true,
                creditcard: true,
            },
            "expiry-month": {
                required: true
            },
            "expiry-year": {
                required: true
            },
            "cvv": {
                required: true,
                maxlength: 3,
                digits: true
            }
        }
    });
    // Tooltips
    $('label span.glyphicon').tooltip();
});