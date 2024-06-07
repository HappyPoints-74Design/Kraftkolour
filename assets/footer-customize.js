document.addEventListener("DOMContentLoaded", () => {
	document.querySelectorAll(".js-dropdown .footer__title").forEach((el) => {

		el.addEventListener("click", (e) => {
			let _this = e.target;
			_this.parentNode.classList.toggle('active');
		});

		el.querySelector('.icon-and-text').addEventListener('click', (e) => {
			let _target = e.target.parentNode.parentNode.parentNode.parentNode;
			_target.classList.toggle('active');
		})

	})

})