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
		this.sidebarRight.className = 'sidebar-right';
		this.sidebarRight.innerHTML = `
			<div class="sidebar-right__blind">
				<a href="javascript:void(0);" class="sidebar-right__blind_button" id="navButton">
					<i class="fas fa-bars"></i>
				</a>
			</div>
			<div class="sidebar-right__icon">
				<a href="javascript:void(0);" class="sidebar-right__blind_button" id="blindButton">
					<i class="fas fa-eye-low-vision"></i>
				</a>
			</div>
			<div class="sidebar-right__icon">
				<a href="javascript:void(0);" class="sidebar-right__blind_button" id="blindButton">
					<i class="fab fa-vk"></i>
				</a>
			</div>
			<div class="sidebar-right__icon">
				<a href="javascript:void(0);" class="sidebar-right__blind_button" id="blindButton">
					<i class="fab fa-odnoklassniki"></i>
				</a>
			</div>
			<div class="sidebar-right__icon">
				<a href="javascript:void(0);" class="sidebar-right__blind_button" id="blindButton">
					<i class="fab fa-yandex"></i>
				</a>
			</div>
			<div class="sidebar-right__icon sidebar-right__icon--right">
				<a href="javascript:void(0);" class="sidebar-right__blind_button" id="blindButton">
					<i class="fas fa-0"><span>+</span></i>
				</a>
			</div>
		`;

		this.wrapper.appendChild(this.sidebarRight);
	}
}