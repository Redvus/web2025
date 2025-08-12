

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
						<img src="/assets/dev/images/in-slider-il2.jpg" alt="Banner Image">
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

				<h1>Title 1</h1>
				<h2>Title 2</h2>
				<h3>Title 3</h3>
				<h4>Title 4</h4>
				<h5>Title 5</h5>
				<h6>Title 6</h6>
				<p class="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quidem sequi, suscipit, corrupti, accusantium excepturi ab vitae eveniet rerum similique harum! Ratione at voluptates modi aut quo voluptatum suscipit? In iste esse ipsam harum tenetur sunt eius nesciunt numquam hic sit temporibus quos quis, eveniet perferendis fugit ut at laboriosam.</p>
				<p class="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quidem sequi, suscipit, corrupti, accusantium excepturi ab vitae eveniet rerum similique harum! Ratione at voluptates modi aut quo voluptatum suscipit? In iste esse ipsam harum tenetur sunt eius nesciunt numquam hic sit temporibus quos quis, eveniet perferendis fugit ut at laboriosam.</p>

			</div>
		`;

		this.newsItemBlock = this.wrapper.querySelector('#frontNews');
		for(let i = 0; i < 4; i++) {
			const newsItem = this.newsItemBlock.cloneNode(true);
			newsItem.classList.add('wrapper__content_news_item');
			newsItem.innerHTML = `
				<picture class="wrapper__content_news_item_top">
					<img src="/assets/dev/images/news${i + 1}.jpg" alt="News Image ${i + 1}">
				</picture>
				<div class="wrapper__content_news_item_bottom">
					<div class="wrapper__content_news_item_title">
						<h4>Новость ${i + 1}</h4>
					</div>
					<div class="wrapper__content_news_item_text">
						<p>Для современного мира сложившаяся структура организации влечёт за собой интересный процесс внедрения модернизации системы массового участия...</p>
					</div>
					<div class="wrapper__content_news_item_date">
						<span>Дата новости ${i + 1}</span>
					</div>
				</div>

			`;
			this.newsItemBlock.appendChild(newsItem);
		}

		this.newsItemBlock = this.wrapper.querySelector('#frontAnounces');
		for(let i = 0; i < 4; i++) {
			const newsItem = this.newsItemBlock.cloneNode(true);
			newsItem.classList.add('wrapper__content_news_item');
			newsItem.innerHTML = `
				<picture class="wrapper__content_news_item_top">
					<img src="/assets/dev/images/news${i + 1}.jpg" alt="Anounce Image ${i + 1}">
				</picture>
				<div class="wrapper__content_news_item_bottom">
					<div class="wrapper__content_news_item_title">
						<h4>Анонс ${i + 1}</h4>
					</div>
					<div class="wrapper__content_news_item_text">
						<p>Для современного мира сложившаяся структура организации влечёт за собой интересный процесс внедрения модернизации системы массового участия...</p>
					</div>
					<div class="wrapper__content_news_item_date">
						<span>Дата анонса ${i + 1}</span>
					</div>
				</div>

			`;
			this.newsItemBlock.appendChild(newsItem);
		}
	}
}