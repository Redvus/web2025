import { gsap } from "gsap";
import { NewsSingle } from '../Components/NewsSingle.js';

export class News {

	constructor() {
		this.initLayout();
		if (import.meta.env.DEV || import.meta.env.PROD) {
			this.initNewsDev(); // Скрывать для build
		}
		this.initNewsAnim();
		new NewsSingle('Новые правила въезда в Россию', '10.08.2025', 'Значимость этих проблем настолько очевидна, что сложившаяся структура организации требует определения и уточнения существующий финансовых и административных условий. Разнообразный и богатый опыт рамки и место обучения кадров способствует подготовке и реализации форм воздействия. Для современного мира постоянное информационно-пропогандистское обеспечение нашей деятельности требует определения и уточнения поэтапного и последовательного развития общества. Следует отметить, что управление и развитие структуры способствует подготовке и реализации соответствующих условий активизации. Следует отметить, что понимание сущности ресурсосберегающих технологий обеспечивает актуальность экономической целесообразности принимаемых изменений. Повседневная практика показывает, что реализация намеченных плановых заданий создаёт предпосылки качественно новых шагов для поэтапного и последовательного развития общества. Значимость этих проблем настолько очевидна, что постоянное информационно-пропогандистское обеспечение нашей деятельности способствует подготовке и реализации позиции, занимаемых участниками в отношении поставленных задач. Задача организации, в особенности же новая модель организационной деятельности позволяет выполнять важные задания по разработке поставленных обществом и правительством задач. Не вызывает сомнений, что повышение уровня гражданского сознания требует анализа поэтапного и последовательного развития общества. Не следует, однако, забывать, что консультация с широким активом представляет собой интересный эксперимент модели развития.');
	}

	initLayout() {
		this.body = document.body;
		this.wrapper = document.querySelector('.wrapper');
		this.wrapperContent = document.querySelector('.wrapper__content');

		this.newsButton = document.getElementById('newsSidebarButton');
		this.newsClose = document.getElementById('newsClose');
	}

	initNewsDev() {
		this.newsAll = document.createElement('div');
		this.newsAll.className = 'modal modal__news';
		this.newsAll.id = 'newsAll';

		this.newsAllBlock = document.createElement('div');
		this.newsAllBlock.className = 'modal__news_block';

		this.newsAllTitle = document.createElement('h2');
		this.newsAllTitle.className = 'modal__news_title';
		this.newsAllTitle.innerHTML = `
			Новости. Август 2025
		`;

		this.newsClose = document.createElement('div');
		this.newsClose.className = 'modal__news_close';
		this.newsClose.id = 'newsClose';
		this.newsClose.innerHTML = `
			<i class="fas fa-plus"></i>
		`;

		// this.newsItemBlock = this.wrapper.querySelector('#frontNews');
		for(let i = 0; i < 16; i++) {
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
			this.newsAllBlock.appendChild(newsItem);
		}

		this.wrapper.appendChild(this.newsAll);
		this.newsAll.appendChild(this.newsAllTitle);
		this.newsAll.appendChild(this.newsAllBlock);
		this.newsAll.appendChild(this.newsClose);
		// this.newsAll.appendChild(this.newsItemBlock);
	}

	initNewsAnim() {
		let tl = new gsap.timeline({ paused: true });
		let isOpen = false;

		gsap.set(this.newsAll, {
			autoAlpha: 0,
			// yPercent: -100,
			zIndex: -1
		});

		// gsap.set(this.navButtonClose, {
		// 	scale: 0
		// });

		this.newsButton.addEventListener('click', () => {
			if (!isOpen) {
				tl
					.to(this.wrapperContent, {
						duration: 0.3,
						autoAlpha: 0,
						zIndex: -1
					}, "<")
					.to(this.newsAll, {
						duration: 0.3,
						autoAlpha: 1,
						zIndex: 1000
					}, "<0.3")
					.to(this.newsClose, {
						scale: 1,
						duration: 0.3
					}, "<0.3");
				;

				tl.play();
				isOpen = true;

			} else {
				tl.reverse("<0.2");
			}

			this.newsClose.addEventListener('click', () => {
				tl
					.to(this.newsClose, {
						scale: 0,
						duration: 0.3
					})
					.to(this.newsAll, {
						duration: 0.3,
						autoAlpha: 0,
						zIndex: -1
					}, "<")
					.to(this.wrapperContent, {
						duration: 0.3,
						autoAlpha: 1,
						zIndex: 1
					}, "<")

				tl.play();
				isOpen = false;
			});

			isOpen = !isOpen;
		});

	}
}