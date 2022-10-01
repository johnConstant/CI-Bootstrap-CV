/*jshint esversion: 9 */
/* globals emailjs */

(function() {
    // https://dashboard.emailjs.com/admin/account
    emailjs.init('-BeZauXTcWVY9NBqG');
})();

window.onload = function() {
    // Add event listener to submit button on page load
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        // Stop form from reloading the page
        event.preventDefault();
        // Get form values
        let username = document.getElementById('fullname').value;
        let email = document.getElementById('emailaddress').value;
        let message = document.getElementById('projectsummary').value;
        // Create params object with email settings
        let params = {
            to_name: username,
            to_email: email,
            from_name: "John Constant",
            message: message,
            reply_to: email,
        };
        // generate a five digit number for the contact_number variable
        // this.contact_number.value = Math.random() * 100000 | 0;
        // these IDs from the previous steps
        emailjs.send("bootstrap_cv","bootstrap_cv_template", params)
            .then(function() {
                console.log('SUCCESS!', params);
                window.location.href = '/index.html'
            }, function(error) {
                throw error;
            });
    
        }
    );
};