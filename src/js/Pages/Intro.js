

export class Intro {

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
		this.wrapper.innerHTML = `
			<div class="wrapper__content">
				<div class="wrapper__content_top">
					<img src="/assets/dev/images/victory80.png" alt="Banner Image">
				</div>
				<div class="wrapper__hero">
					<div class="wrapper__hero_banner">
						<img src="/assets/dev/images/bannerSlide_1.png" alt="Banner Image">
					</div>
					<div class="wrapper__hero_anniversary">
						<div class="wrapper__hero_anniversary_top">
							<picture class="wrapper__hero_anniversary_image">
								<img src="/assets/dev/images/zoshchenko.jpg" alt="Anniversary Image">
							</picture>
							<div class="wrapper__hero_anniversary_card">
								<div class="wrapper__hero_anniversary_date">
									<p>10.08.2025</p>
									<!--<p>130 лет</p>-->
								</div>
								<div class="wrapper__hero_anniversary_name">
									<h4>Михаил<br>Михайлович<br>Зощенко</h4>
									<p>русский советский писатель, драматург, сценарист, переводчик</p>
								</div>
							</div>
						</div>
						<div class="wrapper__hero_anniversary_bottom">
							<p>Нет ничего прекрасней на свете, чем работа, которую делаешь по призванию. Человек, любящий своё дело, достигает больших успехов.</p>
							<span>«Спустя три года»</span>
						</div>
					</div>
				</div>

				<h2 class="wrapper__content_title">Новости</h2>
				<div class="wrapper__content_news" id="frontNews"></div>

				<h2 class="wrapper__content_title">Анонсы</h2>
				<div class="wrapper__content_news" id="frontAnounces"></div>

				<h2 class="wrapper__content_title">Что почитать</h2>
				<div class="wrapper__content_read" id="frontRead"></div>

				<h2 class="wrapper__content_title">Официальные ресурсы</h2>
				<div class="wrapper__content_bottom" id="frontResources"></div>
			</div>
		`;

		this.newsItemBlock = this.wrapper.querySelector('#frontNews');
		for(let i = 0; i < 4; i++) {
			const newsItem = document.createElement('div');
			newsItem.classList.add('wrapper__content_news_item');
			newsItem.id = 'newsItem_' + (i + 1);
			newsItem.innerHTML = `
				<picture class="wrapper__content_news_item_top">
					<img src="/assets/dev/images/newsImageSample.jpeg" alt="News Image ${i + 1}">
				</picture>
				<div class="wrapper__content_news_item_bottom">
					<div class="wrapper__content_news_item_date">
						<span>10.08.2025</span>
					</div>
					<div class="wrapper__content_news_item_title">
						<h4>Новые правила въезда в Россию</h4>
					</div>
					<div class="wrapper__content_news_item_text">
						Для современного мира сложившаяся структура организации влечёт за собой интересный процесс внедрения модернизации системы массового участия...
					</div>
				</div>

			`;
			this.newsItemBlock.appendChild(newsItem);
		}

		this.newsItemBlock = this.wrapper.querySelector('#frontAnounces');
		for(let i = 0; i < 4; i++) {
			const newsItem = document.createElement('div');
			newsItem.classList.add('wrapper__content_news_item');
			newsItem.innerHTML = `
				<picture class="wrapper__content_news_item_top">
					<img src="/assets/dev/images/annImageSample.jpg" alt="Anounce Image ${i + 1}">
				</picture>
				<div class="wrapper__content_news_item_bottom">
					<div class="wrapper__content_news_item_date">
						<span>10.08.2025</span>
					</div>
					<div class="wrapper__content_news_item_title">
						<h4>«Авангардная поэзия: мужской и женский взгляд»</h4>
					</div>
					<div class="wrapper__content_news_item_text">
						<p>Для современного мира сложившаяся структура организации влечёт за собой интересный процесс внедрения модернизации системы массового участия...</p>
					</div>
				</div>

			`;
			this.newsItemBlock.appendChild(newsItem);
		}

		this.readItemBlock = this.wrapper.querySelector('#frontRead');
		for(let i = 0; i < 5; i++) {
			const readItem = document.createElement('div');
			readItem.classList.add('wrapper__content_read_item');
			readItem.innerHTML = `
				<picture class="wrapper__content_read_item_image">
					<img src="/assets/dev/images/bookReadSample.png" alt="Anounce Image ${i + 1}">
				</picture>

			`;
			this.readItemBlock.appendChild(readItem);
		}

		this.resourcesItemBlock = this.wrapper.querySelector('#frontResources');
		for(let i = 0; i < 6; i++) {
			const resourcesItem = this.resourcesItemBlock.cloneNode(true);
			resourcesItem.classList.add('wrapper__content_bottom_item');
			resourcesItem.innerHTML = `
				<picture class="wrapper__content_bottom_item_image">
					<img src="/assets/dev/images/partners/departament1.jpg" alt="Anounce Image ${i + 1}">
				</picture>

			`;
			this.resourcesItemBlock.appendChild(resourcesItem);
		}
	}
}