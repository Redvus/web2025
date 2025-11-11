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
			<div class="footer__top">
				<div class="footer__top_part footer__top_adress">
					<p class="footer__adress--desktop"> <a href="mailto:smibs@bk.ru">smibs@bk.ru</a><br>
					<a href="tel:+78462421323">+7 846 242 13 23</a></p>
				</div>
				<div class="footer__top_part footer__top_adress">
					<p>Физический адрес:<br>443100, г. Самара, ул. Самарская/Маяковского, д. 190/19<br>
					Юридический адрес:<br>443001, г. Самара, ул. Ярмарочная, д. 3 / ул. Молодогвардейская, д. 167 </p>
				</div>
				<div class="footer__top_part footer__top_adress">
					<ul>
						<li>Учреждение</li>
						<li>Библиотеки</li>
						<li>Читателям</li>
						<li>Услуги</li>
						<li>Деятельность</li>
						<li>Краеведение</li>
						<li>Электронные библиотеки</li>
						<li>Коллегам</li>
						<li>Виртуальная библиотека</li>
					</ul>
				</div>
				<div class="footer__top_part footer__top_adress">
					<ul>
						<li>Политика обработки персональных данных</li>
						<li>Новости</li>
					</ul>
				</div>
			</div>
			<div class="footer__bottom">
				<div class="footer__bottom_part footer__bottom_left"
					<p>2011 - 2025 &copy; СМИБС<br>
					Муниципальное бюджетное учреждение культуры городского округа Самара<br>
					«Самарская муниципальная информационно-библиотечная система»</p>
				</div>
				<div class="footer__bottom_part footer__bottom_right">
					<p>Если вы нашли неточность в содержании сайта, пожалуйста, напишите<br>
					<a href="mailto:zamdir.it@yandex.ru">администратору сайта</a></p>
				</div>
			</div>
		`;

		this.body.appendChild(this.footer);
	}
}