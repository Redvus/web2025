import {gsap} from "gsap";

export class Nav {

	constructor(parameters) {
		this.initLayout();
		if (import.meta.env.DEV
			|| import.meta.env.PROD
		) {
			this.initNavDev();
		}
		this.initNavAnim();
	}

	initLayout() {
		this.body = document.body;
		this.wrapper = document.querySelector('.wrapper');
		this.header = document.querySelector('.header');
		this.headerLogoRight = document.querySelector('.header__logo_right');
		this.navButton = document.getElementById('navButton');
		this.navButtonClose = document.getElementById('navButtonClose');
	}

	initNavDev() {
		this.nav = document.createElement('nav');
		this.navMask = document.createElement('nav');
		this.nav.className = 'nav';
		this.navMask.className = 'nav__mask';
		this.navMask.id = 'navMask';

		this.nav.innerHTML = `
			<div class="nav__inside">
				<ul class="nav__menu">
					<li class="nav__item"><a href="/about" class="nav__link">О нас</a></li>
					<li class="nav__item"><a href="/services" class="nav__link">Услуги</a></li>
					<li class="nav__item"><a href="/contact" class="nav__link">Контакты</a></li>
				</ul>
			</div>
		`;

		this.body.appendChild(this.nav);
		this.body.appendChild(this.navMask);
	}

	initNavAnim() {
		let tl = new gsap.timeline({ paused: true });
		let isOpen = false;

		gsap.set(this.nav, {
			autoAlpha: 0,
			// yPercent: -100,
			zIndex: -1
		});

		// gsap.set(this.navButtonClose, {
		// 	scale: 0
		// });

		gsap.set(this.navMask, {
			autoAlpha: 0,
			zIndex: -1
		});

		this.headerLogoRight.addEventListener('click', () => {
			if (!isOpen) {
				tl
					.to(this.navButton, {
						duration: 0.15,
						autoAlpha: 0,
						scale: 0
					}, "<")
					.to(this.navButtonClose, {
						duration: 0.15,
						delay: 0.13,
						autoAlpha: 1,
						// scale: 1
					}, "<")
					.to(this.nav, {
						duration: 0.3,
						delay: '-0.1',
						autoAlpha: 1,
						// yPercent: 0,
						zIndex: 1000
					}, "<")
					.to(this.headerLogoRight, {
						backgroundColor: 'var(--elementBackground)'
					}, "<")

					// .to(this.navMask, {
					// 	duration: 0.6,
					// 	autoAlpha: 1,
					// 	zIndex: 999
					// }, "<"); // Start at the same time
				;

				tl.play();

			} else {
				tl.reverse("<0.2");
			}

			if (!isOpen) {
				this.headerLogoRight.style.backgroundColor = 'var(--layoutBackground)';
			}

			isOpen = !isOpen;
		});

	}
}