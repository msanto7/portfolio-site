console.log("Its working");

let theme = localStorage.getItem('theme')

// set to default theme when visiting the page for the first time 
if (theme == null) {
    setTheme('light')
} else {
    setTheme(theme)
}

let themeDots = document.getElementsByClassName('theme-dot')

for (var i = 0; themeDots.length > i; i++) {
    themeDots[i].addEventListener('click', function() {
        let mode = this.dataset.mode
        console.log('clicked dot', mode)
        setTheme(mode)
    })
}

function setTheme(mode) {
    if (mode == 'light') {
        document.getElementById('theme-style').href = 'default.css'
    }

    if (mode == 'dark') {
        document.getElementById('theme-style').href = 'dark-theme.css'
    }

    localStorage.setItem('theme', mode)
}