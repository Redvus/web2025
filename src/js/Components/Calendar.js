import {gsap} from "gsap";

export class Calendar {
	constructor(parameters) {
		this.initLayout();
		if (
			import.meta.env.DEV
			|| import.meta.env.PROD // Скрывать для build
		) {
			this.initCalendarDev();
		}
		this.initCalendarAnim();
	}

	initLayout() {
		this.body = document.body;
		this.wrapper = document.querySelector('.wrapper');
		this.dateButton = document.getElementById('dateButton');
		this.dateCal = document.getElementById('dateCal');
		this.dateCalClose = document.getElementById('dateCalClose');
	}

	initCalendarDev() {
		this.calendar = document.createElement('div');
		this.calendar.className = 'calendar';

		this.calendar.innerHTML = `
			<div class="calendar__inside">
				<h1>Календарь</h1>
				<p>Здесь будет календарь с событиями.</p>
			</div>
		`;

		this.body.appendChild(this.calendar);
	}

	initCalendarAnim() {
		let tl = new gsap.timeline({ paused: true });
		let isOpen = false;

		gsap.set(this.calendar, {
			autoAlpha: 0,
			// yPercent: -100,
			zIndex: -1
		});

		// gsap.set(this.navButtonClose, {
		// 	scale: 0
		// });

		this.dateButton.addEventListener('click', () => {
			if (!isOpen) {
				tl
					.to(this.dateCal, {
						duration: 0.15,
						autoAlpha: 0,
						// scale: 0
					}, "<")
					.to(this.dateCalClose, {
						duration: 0.15,
						delay: 0.13,
						autoAlpha: 1,
						// scale: 1
					}, "<")
					.to(this.calendar, {
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