export class Footer {
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
		this.footer = document.createElement('footer');
		this.footer.className = 'footer';
		this.footer.innerHTML = `
			<div class="footer__inside">
				<p>&copy; 2025 Your Company Name</p>
			</div>
		`;

		this.body.appendChild(this.footer);
	}
}