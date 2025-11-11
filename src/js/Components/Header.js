

export class Header {
	constructor(
			dateNow = new Date().getDate(),
			monthNow = new Date().getMonth() + 1,
			yearNow = new Date().getFullYear()
		) {
			// Pad date and month with leading zeros if needed
			this.dateNow = String(dateNow).padStart(2, '0');
			this.monthNow = String(monthNow).padStart(2, '0');
			this.yearNow = yearNow;
			this.initLayout();
			if (
				import.meta.env.DEV
				|| import.meta.env.PROD // Скрывать для build
			) {
				this.initHeaderDev();
			}
		}

	initLayout() {
		this.body = document.body;
		this.wrapper = document.querySelector('.wrapper');
	}

	initHeaderDev() {
		this.header = document.createElement('div');
		this.header.className = 'header header--desktop';
		this.header.innerHTML = `
			<div class="header__logo">
				<a href="/" class="header__logo_link">
					<img src="/assets/dev/images/smibsLogoDev.png" alt="Logo" class="header__logo-img">
				</a>
			</div>
			<div class="header__title">
				<span class="header__title--text">Самарские&nbsp;библиотеки</span>
				<span class="header__title--subtext">Муниципальное бюджетное учреждение культуры городского округа Самара<br>«Самарская муниципальная информационно-библиотечная система»</span>
			</div>
			<div class="header__right">
				<div class="header__user" id="dateButton">
					<div class="header__user_icon" id="dateCal">
						<i class="fas fa-calendar-days"></i>
					</div>
					<div class="header__user_icon header__user_icon--close" id="dateCalClose">
						<i class="fas fa-calendar-xmark"></i>
					</div>
					<div class="header__user_text">
						<span class="header__date_now">Сегодня</span>
						<span class="header__date_data">${this.dateNow}/${this.monthNow}/${this.yearNow}</span>
					</div>
				</div>
				<div class="header__user" id="userButton">
					<div class="header__user_icon" id="userIcon">
						<i class="fas fa-user"></i>
					</div>
					<div class="header__user_user header__user_user--close" id="userIconClose">
						<i class="fas fa-user-xmark"></i>
					</div>
					<div class="header__user_text">
						<span class="header__user_greetings">Здравствуйте,</span>
						<span class="header__user_name">Иван Сидоров</span>
					</div>
				</div>
			</div>
			<div class="header__logo_right">
				<a href="javascript:void(0);" class="header__logo_right_button" id="navButton">
					<i class="fas fa-bars"></i>
				</a>
				<a href="javascript:void(0);" class="header__logo_right_button--close" id="navButtonClose">
					<i class="fas fa-plus"></i>
				</a>
			</div>
		`;

		if (document.body.clientWidth < 576 || screen.width < 576) {
			this.header.className = 'header header--mobile';
			this.header.innerHTML = `
				<div class="header__logo">
					<a href="/" class="header__logo_link">
						<img src="/assets/dev/images/smibsLogoDev.png" alt="Logo" class="header__logo-img">
					</a>
				</div>
				<div class="header__right">
					<div class="header__user" id="dateButton">
						<div class="header__user_icon" id="dateCal">
							<i class="fas fa-calendar-days"></i>
						</div>
						<div class="header__user_icon header__user_icon--close" id="dateCalClose">
							<i class="fas fa-calendar-xmark"></i>
						</div>
					</div>
					<div class="header__user" id="userButton">
						<div class="header__user_icon" id="userIcon">
							<i class="fas fa-user"></i>
						</div>
						<div class="header__user_user header__user_user--close" id="userIconClose">
							<i class="fas fa-user-xmark"></i>
						</div>
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
					<div class="sidebar__icon">
						<a href="javascript:void(0);" class="sidebar__icon_button" id="blindButton">
							<i class="fas fa-eye-low-vision"></i>
						</a>
					</div>
				</div>
				<div class="header__logo_right">
					<a href="javascript:void(0);" class="header__logo_right_button" id="navButton">
						<i class="fas fa-bars"></i>
					</a>
					<a href="javascript:void(0);" class="header__logo_right_button--close" id="navButtonClose">
						<i class="fas fa-plus"></i>
					</a>
				</div>
			`;
		}

		this.body.appendChild(this.header);
	}
}