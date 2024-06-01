class Setting {
	constructor(parent) {
		this.parent = parent;
		this.div = elt('div', {className: 'setting'});
		this.parent.appendChild(this.div);
	}
	addLabel(label) {
		this.div.appendChild(elt('p', {className: 'label'}, label));
		return this;
	}
	addCheckbox(cb) {
		let ch = elt('div', {className: 'check'});
		cb(ch);
		this.div.appendChild(ch);
		return this;
	}
	// addInput(type, cb) {
	// 	let ipt = elt('input', {className: 'setting-input', type: type});
	// 	cb(ipt);
	// 	this.div.appendChild(ipt);
	// 	return this;
	// }
	// addDpdn(cb) {
	// 	let dpdn = new Dropdown();
	// 	cb(dpdn);
	// 	this.div.appendChild(dpdn.div);
	// 	return this;
	// }
	onChange(cb) {
		this.div.addEventListener('change', cb);
	}
	deleteMyself() {
		this.div.remove();
	}
}

let sdiv = document.getElementById('settings');
console.log(sdiv);
new Setting(sdiv)
	.addLabel('Light / dark mode.')
	.addCheckbox(ch => {
		if(localStorage.getItem('mode') == 'light') {
			ch.classList.add('checked');
		}
		ch.addEventListener('click', e => {
			if(ch.classList.contains('checked')) {
				ch.classList.remove('checked');
				localStorage.setItem('mode', 'dark');
			} else {
				ch.classList.add('checked');
				localStorage.setItem('mode', 'light');
			}
		});
	});
new Setting(sdiv)
	.addLabel('Color in people\'s names (will definitely make text harder to read, but it\'s fun).')
	.addCheckbox(ch => {
		if(localStorage.getItem('color') == 'yes') {
			ch.classList.add('checked');
		}
		ch.addEventListener('click', e => {
			if(ch.classList.contains('checked')) {
				ch.classList.remove('checked');
				localStorage.setItem('color', 'no');
			} else {
				ch.classList.add('checked');
				localStorage.setItem('color', 'yes');
			}
		});
	});
new Setting(sdiv)
	.addLabel('Highlight important information (to make things easier).')
	.addCheckbox(ch => {
		if(localStorage.getItem('highlight') == 'yes') {
			ch.classList.add('checked');
		}
		ch.addEventListener('click', e => {
			if(ch.classList.contains('checked')) {
				ch.classList.remove('checked');
				localStorage.setItem('highlight', 'no');
			} else {
				ch.classList.add('checked');
				localStorage.setItem('highlight', 'yes');
			}
		});
	});
new Setting(sdiv)
	.addLabel('Display a list of questions after each document (like a damn school assignment. Might make things easier).')
	.addCheckbox(ch => {
		if(localStorage.getItem('question') == 'yes') {
			ch.classList.add('checked');
		}
		ch.addEventListener('click', e => {
			if(ch.classList.contains('checked')) {
				ch.classList.remove('checked');
				localStorage.setItem('question', 'no');
			} else {
				ch.classList.add('checked');
				localStorage.setItem('question', 'yes');
			}
		});
	});

function elt(type,props,...children){let dom=document.createElement(type);if(props)Object.assign(dom,props);for(let child of children){if(typeof child!="string")dom.appendChild(child);else dom.appendChild(document.createTextNode(child));}return(dom);}
