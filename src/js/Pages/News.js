import { gsap } from "gsap";
import { NewsSingle } from '../Components/NewsSingle.js';

export class News {

	constructor() {
		this.initLayout();
		if (import.meta.env.DEV || import.meta.env.PROD) {
			this.initNewsDev(); // Скрывать для build
		}
		this.initNewsAnim();
		new NewsSingle('Новые правила въезда в Россию', '10.08.2025', 'Для современного мира сложившаяся структура организации влечёт за собой интересный процесс внедрения модернизации системы массового участия...');
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
						// delay: '-0.1',
						autoAlpha: 0,
						// yPercent: 0,
						zIndex: -1
					}, "<")
					// .to(this.newsClose, {
					// 	duration: 0.15,
					// 	delay: 0.13,
					// 	autoAlpha: 1,
					// 	// scale: 1
					// }, "<")
					.to(this.newsAll, {
						duration: 0.3,
						// delay: '-0.1',
						autoAlpha: 1,
						// yPercent: 0,
						zIndex: 1000
					}, "<")
				;

				tl.play();

			} else {
				tl.reverse("<0.2");
			}

			// if (!isOpen) {
			// 	this.headerLogoRight.style.backgroundColor = 'var(--layoutBackground)';
			// }

			isOpen = !isOpen;
		});

	}
}