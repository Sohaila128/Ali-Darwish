//===== Back to top =====//
//Get the button
let mybutton = document.querySelector(".back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
  //  Initiate glightbox
  const glightbox = GLightbox({
    selector: ".glightbox",
  });
// Animation on scroll function
function initAOS() {
  AOS.init({
    duration: 1000,
    easing: "ease-in-out",
    once: true,
    mirror: false,
  });
}
window.addEventListener("load", () => {
  initAOS();
});

const datePicker = document.getElementById('datePicker');
      const currentMonth = document.getElementById('currentMonth');
      const prevWeek = document.getElementById('prevWeek');
      const nextWeek = document.getElementById('nextWeek');
      const datesContainer = document.getElementById('datesContainer');

      const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
      let currentDate = new Date();
      
      function updateDatePicker() {
          const startOfWeek = new Date(currentDate);
          startOfWeek.setDate(currentDate.getDate() - currentDate.getDay());

          // Clear previous dates
          datesContainer.innerHTML = '';

          for (let i = 0; i < 7; i++) {
              const day = new Date(startOfWeek);
              day.setDate(startOfWeek.getDate() + i);
              const dayLabel = `${daysOfWeek[day.getDay()]}<br>${day.getDate()}`;
              
              datesContainer.innerHTML += `
                  <input type="radio" id="date${i}" name="date" value="${day.toISOString()}">
                  <label for="date${i}">${dayLabel}</label>
              `;
          }

          currentMonth.innerText = currentDate.toLocaleString('default', { month: 'long' });

          // Re-add event listeners
          document.getElementById('prevWeek').addEventListener('click', () => changeWeek(-1));
          document.getElementById('nextWeek').addEventListener('click', () => changeWeek(1));
      }

      function changeWeek(offset) {
          currentDate.setDate(currentDate.getDate() + offset * 7);
          updateDatePicker();
      }

      updateDatePicker();