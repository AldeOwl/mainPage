let nationalCup = document.getElementById('nationalCup');
let nationalLogo = document.getElementById('nationalLogo');
let friendsLogo = document.getElementById('friendsLogo');
let friendsCup = document.getElementById('friendsCup');


nationalLogo.addEventListener('click', () => {
	nationalCup.classList.toggle('active');
})

friendsLogo.addEventListener('click', () => {
	friendsCup.classList.toggle('active');
})