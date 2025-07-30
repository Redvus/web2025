import {gsap} from "gsap";
// import {  } from "../../node_modules/minibarjs/dist/minibar.min.js";

class Modal {

	constructor(
		modalID,
		modalBack,
		modalText,
		verImage,
		modalInsidePosition) {
		this.modalID = modalID;
		this.modalBack = modalBack;
		this.modalText = modalText;
		this.verImage = verImage;
		this.modalInsidePosition = modalInsidePosition;
		this.initModal();
		// this.initModalAnim();
	}

	initModal() {
		this.wrapper = document.querySelector('.wrapper');
		this.wrapperModal = document.createElement('div');
		this.wrapperModalBack = document.createElement('picture');
		this.wrapperModalContent = document.createElement('div');
		this.wrapperModalContentInside = document.createElement('div');
		this.wrapperModalClose = document.createElement('div');
		this.wrapperModalAll = document.querySelector('.wrapper__modals');
		this.container = document.querySelector('.container');

		// Modal Classes
		this.wrapperModal.className = 'wrapper__modal';
		this.wrapperModal.id = `wagonModal_${this.modalID}`;
		this.wrapperModalBack.className = 'wrapper__modal_back';
		this.wrapperModalContent.className = 'wrapper__modal_content';
		this.wrapperModalContent.id = `wagonModalContent_${this.modalID}`;
		this.wrapperModalContentInside.className = 'wrapper__modal_content_inside';
		this.wrapperModalClose.className = 'wrapper__modal_close';
		this.wrapperModalClose.id = `wagonModalClose_${this.modalID}`;

		// this.wrapperModal.style.opacity = '0';
		// this.wrapperModal.style.visibility = 'hidden';
		this.wrapperModalContent.style.alignItems = this.modalInsidePosition;

		// Modal Content
		this.wrapperModalBack.innerHTML = `
			<img src="assets/games/garin/images/${this.modalBack}.jpg?ver=${this.verImage}" alt="">
		`;
		this.wrapperModalContentInside.innerHTML = `
			${this.modalText}
		`;
		this.wrapperModal.appendChild(this.wrapperModalBack);
		this.wrapperModal.appendChild(this.wrapperModalContent);
		this.wrapperModalContent.appendChild(this.wrapperModalContentInside);
		this.wrapperModal.appendChild(this.wrapperModalClose);

		// this.wrapper.appendChild(this.wrapperModal);
		this.wrapperModalAll.appendChild(this.wrapperModal);

		this.wrapperModalContentBefore = document.querySelectorAll('.wrapper__modal_content::before');
		// this.wrapperModalContentBar = document.querySelector('.wrapper__modal_content_inside');
		// new MiniBar(this.wrapperModalContentBar);
	}

	initModalAnim() {
		let tl = new gsap.timeline({
			// onComplete: () => {

			// }
		});

		tl
			.to(this.wrapperModal, {
				duration: 0.6,
				// delay: 0.2,
				autoAlpha: 1,
				zIndex: 10
			})
			.to([this.wrapperModalContent, this.wrapperModalClose], {
				duration: 0.6,
				// delay: '-0.2',
				autoAlpha: 0,
				stagger: 0.2
			})
			// .from(this.wrapperModalContentInside, {
			// 	duration: 0.6,
			// 	delay: '-0.1',
			// 	autoAlpha: 0
			// })
		;

		this.wrapperModalClose.addEventListener('click', () => {
			tl.reverse();
			setTimeout(() => {
				this.wrapper.removeChild(this.wrapperModal);
			}, 1500);
		});
	}
}

export { Modal }