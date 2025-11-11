export class SidebarRight {
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
		this.sidebarRight = document.createElement('div');
		this.sidebarRight.className = 'sidebar sidebar--right';
		this.sidebarRight.innerHTML = `
			<div class="sidebar__icon">
				<a href="javascript:void(0);" class="sidebar__icon_button" id="blindButton">
					<i class="fas fa-eye-low-vision"></i>
				</a>
			</div>
			<div class="sidebar__icon">
				<a href="javascript:void(0);" class="sidebar__icon_button" id="vkButton">
					<i class="fab fa-vk"></i>
				</a>
			</div>
			<div class="sidebar__icon">
				<a href="javascript:void(0);" class="sidebar__icon_button" id="odnoklassButton">
					<i class="fab fa-odnoklassniki"></i>
				</a>
			</div>
			<div class="sidebar__icon">
				<a href="javascript:void(0);" class="sidebar__icon_button" id="yandexButton">
					<i class="fab fa-yandex"></i>
				</a>
			</div>
			<div class="sidebar__icon sidebar__icon--right">
				<a href="javascript:void(0);" class="sidebar__icon_button" id="zeroButton">
					<i class="fas fa-0"><span>+</span></i>
				</a>
			</div>
		`;

		this.body.appendChild(this.sidebarRight);
	}
}