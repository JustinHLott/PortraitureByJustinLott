/*
fetch('files.json')
  .then(response => response.json())
  .then(files => {
    files.forEach(file => {
        console.log(file);

        var links = file.querySelectorAll('.nav-link');
        links.forEach(link => {
            link.addEventListener('click', function() {
                links.forEach(l => l.classList.remove('active')); // remove from others
                this.classList.add('active');                     // add to clicked one
            });
        });
    });
  });

*/