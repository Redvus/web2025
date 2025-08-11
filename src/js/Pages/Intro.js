

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
			<div class="wrapper__inside">
				<div class="wrapper__inside_content">
					<div class="wrapper__inside_top">
						<div class="wrapper__inside_banner">
							<img src="/assets/dev/images/in-slider-il2.jpg" alt="Banner Image">
						</div>
						<div class="wrapper__inside_anniversary">
							<div class="wrapper__inside_anniversary_top">
								<picture class="wrapper__inside_anniversary_image">
									<img src="/assets/dev/images/anniversary.png" alt="Anniversary Image">
								</picture>
								<div class="wrapper__inside_anniversary_card">
									<div class="wrapper__inside_anniversary_date">
										<p>10.08.2025</p>
										<!--<p>130 лет</p>-->
									</div>
									<div class="wrapper__inside_anniversary_name">
										<h4>Михаил<br>Михайлович<br>Зощенко</h4>
										<p>русский советский писатель, драматург, сценарист, переводчик</p>
									</div>
								</div>
							</div>
							<div class="wrapper__inside_anniversary_bottom">
								<p>Нет ничего прекрасней на свете, чем работа, которую делаешь по призванию. Человек, любящий своё дело, достигает больших успехов.</p>
								<span>«Спустя три года»</span>
							</div>
						</div>
					</div>

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
	}
}