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
		this.sidebar.className = 'sidebar sidebar--left';
		this.sidebar.innerHTML = `
			<div class="sidebar__icon">
				<a href="javascript:void(0);" class="sidebar__icon sidebar__icon--text" id="botSidebarButton">
					<img src="/assets/dev/images/robot.svg" alt="Библио-бот" class="sidebar__icon_image">
					<span class="sidebar__icon_description">Бот</span>
				</a>
			</div>
			<div class="sidebar__icon">
				<a href="javascript:void(0);" class="sidebar__icon sidebar__icon--text" id="book03SidebarButton">
					<i class="fas fa-car-on"></i>
					<!--<img src="/assets/dev/images/book03.svg" alt="Книга 03" class="sidebar__icon_image">-->
					<span class="sidebar__icon_description">Книга&nbsp;03</span>
				</a>
			</div>
			<div class="sidebar__icon">
				<a href="javascript:void(0);" class="sidebar__icon sidebar__icon--text" id="botSidebarButton">
					<img src="/assets/dev/images/pushkinCard.svg" alt="Пушкинская карта" class="sidebar__icon_image">
					<span class="sidebar__icon_description">Карта</span>
				</a>
			</div>
			<div class="sidebar__icon">
				<a href="javascript:void(0);" class="sidebar__icon sidebar__icon--text" id="serviceSidebarButton">
					<i class="fas fa-gear"></i>
					<span class="sidebar__icon_description">Сервисы</span>
				</a>
			</div>
			<div class="sidebar__icon">
				<a href="javascript:void(0);" class="sidebar__icon sidebar__icon--text" id="newsSidebarButton">
					<i class="fas fa-newspaper"></i>
					<span class="sidebar__icon_description">Новости</span>
				</a>
			</div>
			<div class="sidebar__icon">
				<a href="javascript:void(0);" class="sidebar__icon sidebar__icon--text" id="announceSidebarButton">
					<i class="fas fa-book-open-reader"></i>
					<span class="sidebar__icon_description">Анонсы</span>
				</a>
			</div>
			<div class="sidebar__icon">
				<a href="javascript:void(0);" class="sidebar__icon sidebar__icon--text" id="bookSidebarButton">
					<i class="fas fa-book-bookmark"></i>
					<span class="sidebar__icon_description">Книги</span>
				</a>
			</div>
			<div class="sidebar__icon">
				<a href="javascript:void(0);" class="sidebar__icon sidebar__icon--text" id="gamesSidebarButton">
					<i class="fas fa-gamepad"></i>
					<span class="sidebar__icon_description">Игры</span>
				</a>
			</div>
		`;

		if (document.body.clientWidth < 576 || screen.width < 576) {
			this.sidebar.innerHTML = `
				<div class="sidebar__icon">
					<a href="javascript:void(0);" class="sidebar__icon sidebar__icon--text" id="botSidebarButton">
						<img src="/assets/dev/images/robot.svg" alt="Библио-бот" class="sidebar__icon_image">
						<span class="sidebar__icon_description">Бот</span>
					</a>
				</div>
				<div class="sidebar__icon">
					<a href="javascript:void(0);" class="sidebar__icon sidebar__icon--text" id="serviceSidebarButton">
						<i class="fas fa-gear"></i>
						<span class="sidebar__icon_description">Сервисы</span>
					</a>
				</div>
				<div class="sidebar__icon">
					<a href="javascript:void(0);" class="sidebar__icon sidebar__icon--text" id="newsSidebarButton">
						<i class="fas fa-newspaper"></i>
						<span class="sidebar__icon_description">Новости</span>
					</a>
				</div>
				<div class="sidebar__icon">
					<a href="javascript:void(0);" class="sidebar__icon sidebar__icon--text" id="announceSidebarButton">
						<i class="fas fa-book-open-reader"></i>
						<span class="sidebar__icon_description">Анонсы</span>
					</a>
				</div>
				<div class="sidebar__icon">
					<a href="javascript:void(0);" class="sidebar__icon sidebar__icon--text" id="bookSidebarButton">
						<i class="fas fa-book-bookmark"></i>
						<span class="sidebar__icon_description">Книги</span>
					</a>
				</div>
				<div class="sidebar__icon">
					<a href="javascript:void(0);" class="sidebar__icon sidebar__icon--text" id="gamesSidebarButton">
						<i class="fas fa-gamepad"></i>
						<span class="sidebar__icon_description">Игры</span>
					</a>
				</div>
			`;
		}

		this.body.appendChild(this.sidebar);
	}
}