const buttons = document.querySelectorAll('.tab-btn');
const contents = document.querySelectorAll('.content');

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    // Remove active class from all buttons and contents
    buttons.forEach(b => b.classList.remove('active'));
    contents.forEach(c => c.classList.remove('active'));

    // Add active class to clicked button and related content
    btn.classList.add('active');
    document.getElementById(btn.dataset.tab).classList.add('active');
  });
});
