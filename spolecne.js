//3. Hamburger menu

const menu = document.querySelector('#menu-tlacitko');
const menuItems = document.querySelector('#menu-polozky');
const fasElement = document.querySelector('.fas');

const toggleMenu = () => {
	if (menuItems.classList.contains('show')) {
		menuItems.classList.remove('show');
		fasElement.classList.remove('fa-xmark');
		fasElement.classList.add('fa-bars');
	} else {
		menuItems.classList.add('show');
		fasElement.classList.add('fa-xmark');
		fasElement.classList.remove('fa-bars');
	}	
}

menu.addEventListener('click', toggleMenu);

