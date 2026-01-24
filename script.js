const navbarToggle = document.querySelector('.navbar-toggle');
const navbarMenu = document.querySelector('.navbar-menu');

navbarToggle.addEventListener('click', () => {
  navbarToggle.classList.toggle('active');
  navbarMenu.classList.toggle('active');
});

const events = document.querySelectorAll('.event-item');
let current = 0;

setTimeout(() => {
  events[current].classList.add('active');

  setInterval(() => {
    events[current].classList.remove('active');

    current = (current + 1) % events.length;

    // show next event
    setTimeout(() => {
      events[current].classList.add('active');
    }, 100);
  }, 3000);
}, 5000);

const eventItems = document.querySelectorAll('.event-item');

eventItems.forEach((item, index) => {
  item.addEventListener('click', () => {
    if (index === 0) window.location.href = 'workshop.html';
    else if (index === 1) window.location.href = 'hackathon.html';
    else if (index === 2) window.location.href = 'robotics.html';
  });
});

