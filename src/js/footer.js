import page from "./pageItems"

//home page
page.homeButton.addEventListener('click', () => {
	page.about.style.display = "none";
})

//about page
page.aboutButton.addEventListener('click', () => {
	page.about.style.display = "block";
})

//handling arrow press for hiding footer
page.hideFooter.addEventListener('click', () => {
	page.footer.style.display = "none";
})