import {gsap} from "gsap";

export class User {
	constructor(parameters) {
		this.initLayout();
		if (
			import.meta.env.DEV
			|| import.meta.env.PROD // Скрывать для build
		) {
			this.initUserDev();
		}
		this.initUserAnim();
	}

	initLayout() {
		this.body = document.body;
		this.wrapper = document.querySelector('.wrapper');
		this.userButton = document.getElementById('userButton');
		this.userIcon = document.getElementById('userIcon');
		this.userIconClose = document.getElementById('userIconClose');
	}

	initUserDev() {
		this.user = document.createElement('div');
		this.user.className = 'user';

		this.user.innerHTML = `
			<div class="user__inside">
				<h1>Пользователь</h1>
				<p>Здесь будет информация о пользователе.</p>
			</div>
		`;

		this.body.appendChild(this.user);
	}

	initUserAnim() {
		let tl = new gsap.timeline({ paused: true });
		let isOpen = false;

		gsap.set(this.user, {
			autoAlpha: 0,
			// yPercent: -100,
			zIndex: -1
		});

		// gsap.set(this.navButtonClose, {
		// 	scale: 0
		// });

		this.userButton.addEventListener('click', () => {
			if (!isOpen) {
				tl
					.to(this.userIcon, {
						duration: 0.15,
						autoAlpha: 0,
						// scale: 0
					}, "<")
					.to(this.userIconClose, {
						duration: 0.15,
						delay: 0.13,
						autoAlpha: 1,
						// scale: 1
					}, "<")
					.to(this.user, {
						duration: 0.3,
						delay: '-0.1',
						autoAlpha: 1,
						// yPercent: 0,
						zIndex: 1000
					}, "<")
					// .to(this.headerLogoRight, {
					// 	backgroundColor: 'var(--elementBackground)'
					// }, "<")

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

			// if (!isOpen) {
			// 	this.headerLogoRight.style.backgroundColor = 'var(--layoutBackground)';
			// }

			isOpen = !isOpen;
		});

	}
}