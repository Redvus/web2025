import { gsap } from "gsap";

export class NewsSingle {
	constructor(newsTitle, newsDate, newsTextparameters) {
		this.newsTitle = newsTitle;
		this.newsDate = newsDate;
		this.newsText = newsTextparameters;
		this.initLayout();
		if (import.meta.env.DEV || import.meta.env.PROD) {
			this.initNewsSingleDev(); // Скрывать для build
		}
		this.initNewsSingleAnim();
	}

	initLayout() {
		this.body = document.body;
		this.wrapper = document.querySelector('.wrapper');
		this.wrapperContent = document.querySelector('.wrapper__content');
	}

	initNewsSingleDev() {
		this.newsSingle = document.createElement('div');
		this.newsSingle.className = 'modal modal__news_single';
		this.newsSingle.id = 'newsSingle';

		this.newsSingleClose = document.createElement('div');
		this.newsSingleClose.className = 'modal__news_single_close';
		this.newsSingleClose.id = 'newsSingleClose';
		this.newsSingleClose.innerHTML = `
			<i class="fas fa-plus"></i>
		`;

		this.newsSingle.innerHTML = `
			<div class="modal__news_single_content">
				<p>${this.newsDate}</p>
				<h2>${this.newsTitle}</h2>
				<p>${this.newsText}</p>
			</div>
		`;

		this.newsSingleButton = document.getElementById('newsItem_1');

		this.body.appendChild(this.newsSingle);
		this.newsSingle.appendChild(this.newsSingleClose);
	}

	initNewsSingleAnim() {

		let tl = new gsap.timeline({
			paused: true,
			onComplete: () => {
				function preventDefault(e) {
					e.preventDefault();
				}

				// if (!isOpen) {
				// 	// this.body.style.pointerEvents = 'none';
				// 	this.body.style.overflow = '';
				// 	// this.body.addEventListener('wheel', preventDefault, {passive: false});
				// 	// this.body.addEventListener('touchmove', preventDefault);

				// } else {
				// 	this.body.style.overflow = 'hidden';
				// 	// this.body.addEventListener('wheel', preventDefault, {passive: false});
				// 	// this.body.addEventListener('touchmove', preventDefault, {passive: false});
				// }

			}
		});
		let isOpen = false;



		gsap.set(this.newsSingle, {
			autoAlpha: 0,
			zIndex: -1
		});

		gsap.set(this.newsSingleClose, {
			scale: 0
		});

		this.newsSingleButton.addEventListener('click', () => {
			if (!isOpen) {
				tl
					.to(this.newsSingle, {
						autoAlpha: 1,
						zIndex: 1000,
						duration: 0.3
					})
					.to(this.newsSingleClose, {
						scale: 1,
						duration: 0.3
					}, "<0.3");

				tl.play();
				isOpen = true;
			}
		});

		this.newsSingleClose.addEventListener('click', () => {
			tl
				.to(this.newsSingleClose, {
					scale: 0,
					duration: 0.3
				})
				.to(this.newsSingle, {
					autoAlpha: 0,
					zIndex: -1,
					duration: 0.3
				});

			tl.play();
			isOpen = false;
		});
	}
}