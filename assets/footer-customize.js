document.addEventListener("DOMContentLoaded", () => {
	document.querySelectorAll(".js-dropdown .footer__title").forEach((el) => {

		el.addEventListener("click", (e) => {
			let _this = e.target;

			_this.parentNode.classList.toggle('active');

		});

	})
})