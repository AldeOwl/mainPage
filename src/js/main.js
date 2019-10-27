let nationalCup = document.getElementById('nationalCup');
let nationalLogo = document.getElementById('nationalLogo');
let friendsLogo = document.getElementById('friendsLogo');
let friendsCup = document.getElementById('friendsCup');


nationalLogo.addEventListener('click', () => {
	nationalCup.classList.toggle('active');
})

// nationalLogo.addEventListener('mouseover', () => {
// 	nationalLogo.classList.add('cup-hover');
// })

// nationalLogo.addEventListener('mouseleave', () => {
// 	console.log('hover');
// 	nationalLogo.classList.remove('cup-hover');
// })

friendsLogo.addEventListener('click', () => {
	friendsCup.classList.toggle('active');
})