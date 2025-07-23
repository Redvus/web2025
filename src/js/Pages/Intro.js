export class Intro {

	constructor(parameters) {
		this.initLayout();
		if (import.meta.env.DEV
			|| import.meta.env.PROD
		) {
			this.initLayoutDev(); // Скрывать для build
		}
	}

	initLayout() {
		this.body = document.body;
		this.wrapper = document.querySelector('.wrapper');
	}

	initLayoutDev() {
		this.wrapper.innerHTML = `
			<div class="sidebar">
				<div class="sidebar__inside">

				</div>
			</div>
			<div class="sidebar-right">
				<div class="sidebar-right__blind">
					<a href="javascript:void(0);" class="sidebar-right__blind_button" id="blindButton">
						<i class="fas fa-eye-low-vision"></i>
					</a>
				</div>
			</div>
			<div class="wrapper__inside">
				<div class="wrapper__inside__content">
					<h1>Title 1</h1>
					<h2>Title 2</h2>
					<h3>Title 3</h3>
					<h4>Title 4</h4>
					<h5>Title 5</h5>
					<h6>Title 6</h6>
					<p class="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quidem sequi, suscipit, corrupti, accusantium excepturi ab vitae eveniet rerum similique harum! Ratione at voluptates modi aut quo voluptatum suscipit? In iste esse ipsam harum tenetur sunt eius nesciunt numquam hic sit temporibus quos quis, eveniet perferendis fugit ut at laboriosam.</p>
					<p class="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quidem sequi, suscipit, corrupti, accusantium excepturi ab vitae eveniet rerum similique harum! Ratione at voluptates modi aut quo voluptatum suscipit? In iste esse ipsam harum tenetur sunt eius nesciunt numquam hic sit temporibus quos quis, eveniet perferendis fugit ut at laboriosam.</p>
				</div>
			</div>
		`;

		this.header = document.createElement('div');
		this.header.className = 'header header--desktop';
		this.header.innerHTML = `
			<div class="header__logo">
				<a href="/" class="header__logo_link">
					<img src="/assets/dev/images/smibsLogoDev.png" alt="Logo" class="header__logo-img">
				</a>
			</div>

		`;

		this.footer = document.createElement('div');
		this.footer.className = 'footer';
		this.footerTopBlock = document.createElement('div');

		//Appends
		this.wrapper.appendChild(this.header);
		this.body.appendChild(this.footer);
	}
}