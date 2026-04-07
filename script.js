console.log('hey')

let theme = localStorage.getItem('theme')

if (theme == null) {
    setTheme('light')
} else {
    setTheme(theme)
}
let themeDots = document.getElementsByClassName('theme-dot');

for (var i = 0; themeDots.length > i; i++) {
    themeDots[i].addEventListener('click', function() {
        let mode = this.dataset.mode
        console.log('option clicked:', mode)
        setTheme(mode)
    })
}

function setTheme(mode) {
    if (mode == 'light') {
        document.getElementById('theme-style').href = 'default.css'

    }

    if (mode == 'blue') {
        document.getElementById('theme-style').href = 'blue.css'

    }
    localStorage.setItem('theme', mode)
    if (mode == 'green') {
        document.getElementById('theme-style').href = 'green.css'

    }

const form = document.getElementById('contact-form');

form.addEventListener('submit', async function(e) {
  e.preventDefault(); // prevent default reload
  const formData = new FormData(form);

  try {
    const response = await fetch(form.action, {
      method: 'POST',
      body: formData,
      headers: { 'Accept': 'application/json' }
    });

    if (response.ok) {
      alert('Thank you! Your message has been sent.'); // popup message
      form.reset(); // optional: clear the form fields
    } else {
      alert('Oops! There was a problem submitting your form.');
    }
  } catch (error) {
    alert('Oops! There was a problem submitting your form.');
  }
});


    if (mode == 'purple') {
        document.getElementById('theme-style').href = 'purple.css'

    }
}
