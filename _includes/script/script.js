let root = document.querySelector(':root');
if(localStorage.getItem('mode') == 'light') {
	root.style.setProperty('--color', '#000');
	root.style.setProperty('--bg-color', '#fff');
	root.style.setProperty('--main', 'var(--sc)');
} else {
	root.style.setProperty('--color', '#fff');
	root.style.setProperty('--bg-color', '#000');
	root.style.setProperty('--main', 'var(--nsa)');
}