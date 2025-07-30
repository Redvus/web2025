

export class Header {
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
		this.header = document.createElement('div');
		this.header.className = 'header header--desktop';
		this.header.innerHTML = `
			<div class="header__logo">
				<a href="/" class="header__logo_link">
					<img src="/assets/dev/images/smibsLogoDev.png" alt="Logo" class="header__logo-img">
				</a>
			</div>
			<div class="header__title">
				<span class="header__title-text">Самарские&nbsp;библиотеки</span>
			</div>
			<div class="header__right">
				<div class="header__user">
					<a href="javascript:void(0);" class="header__user_icon" id="blindButton">
						<i class="fas fa-calendar-days"></i>
					</a>
					<div class="header__user_text">
						<span class="header__date_now">Сегодня</span>
						<span class="header__date_data">24/07/2025</span>
					</div>
				</div>
				<div class="header__user">
					<a href="javascript:void(0);" class="header__user_icon" id="blindButton">
						<i class="fas fa-user"></i>
					</a>
					<div class="header__user_text">
						<span class="header__user_greetings">Здравствуйте,</span>
						<span class="header__user_name">Александр Суворов</span>
					</div>
				</div>
			</div>
		`;

		this.wrapper.appendChild(this.header);
	}
}