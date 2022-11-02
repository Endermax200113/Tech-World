$('.header__theme_btn-select').on('click', () => {
	if (!$('.header__theme_icon').is('.show')) {
		$('.header__theme_icon').addClass('show');
		$('.header__theme_list').addClass('show');
	} else {
		$('.header__theme_icon').removeClass('show');
		$('.header__theme_list').removeClass('show');
	}
});

for (let i = 1; i <= 5; i++) {
	$('.header__theme_btn').eq(i - 1).on('click', () => {
		removeAllThemes();
		$('html').addClass(`theme-${i}`);
	});
}

function removeAllThemes() {
	for (let i = 1; i <= 5; i++)
		$('html').removeClass(`theme-${i}`);
}