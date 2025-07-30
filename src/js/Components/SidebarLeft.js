export class SidebarLeft {
	constructor(parameters) {
		this.initLayout();
		if (import.meta.env.DEV || import.meta.env.PROD) {
			this.initLayoutDev(); // Скрывать для build
		}
	}

	initLayout() {
		this.body = document.body;
		this.wrapper = document.querySelector('.wrapper');
	}

	initLayoutDev() {
		this.sidebar = document.createElement('div');
		this.sidebar.className = 'sidebar';
		this.sidebar.innerHTML = `
			<div class="sidebar__inside">

			</div>
		`;

		this.body.appendChild(this.sidebar);
	}
}