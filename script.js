document.getElementById('waitlist-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var email = document.getElementById('email').value;

 
    var waitlist = JSON.parse(localStorage.getItem('waitlist')) || [];
    waitlist.push(email);
    localStorage.setItem('waitlist', JSON.stringify(waitlist));

    alert('Thank you for joining the waitlist!');
    document.getElementById('email').value = '';
});
