(() => {
	const sigils = document.querySelectorAll(".sigilContainer"),
		lbox = document.querySelector(".lightbox"),
		houseVideo = document.querySelector("video"),
		lbClose = lbox.querySelector(".close-button"),
		houseImages = document.querySelector('#houseImages'),
		houseName = document.querySelector('.house-name'),
		houseInfo = document.querySelector('.house-info');

		// store the house data in an array here
		const houseData = [
			["Stark", `House Stark of Winterfell is a Great House of Westeros, ruling over the vast region known as the North from their seat in Winterfell. It is one of the oldest lines of Westeros nobility by far, claiming a line of descent stretching back over eight thousand years. Before the Targaryen conquest, as well as during the War of the Five Kings and Daenerys Targaryen's invasion of Westeros, the leaders of House Stark ruled over the region as the Kings in the North.`],// 0

			["Baratheon", `House Baratheon of Storm's End is a legally extinct Great House of Westeros. A cadet branch was formerly the royal house, but House Lannister now controls the throne. House Baratheon traditionally ruled the Stormlands on the eastern coast of Westeros, aptly named for its frequent storms, from their seat of Storm's End.
			House Baratheon became the royal house of the Seven Kingdoms after Robert Baratheon led a rebellion against the Targaryen dynasty. At the end of the rebellion, Robert ascended the Iron Throne as Robert I and married Cersei Lannister after the death of Lyanna Stark.`], // 1

			["Lannister", `House Lannister of Casterly Rock is one of the Great Houses of Westeros, one of its richest and most powerful families and oldest dynasties. It is also the current royal house of the Seven Kingdoms following the extinction of House Baratheon of King's Landing, which had been their puppet house anyway.
			The Lannisters rule over the Westerlands. Their seat is Casterly Rock, a massive rocky promontory overlooking the Sunset Sea which has had habitations and fortifications built into it over the millennia. They are the Lords Paramount of the Westerlands and Wardens of the West. As the new royal house, they also rule directly over the Crownlands from their seat of the Red Keep in King's Landing, the traditional seat of the royal family.`], // 2

			["Tully", `House Tully of Riverrun is an exiled Great House of Westeros. Its most senior member carried the title of Lord of Riverrun and Lord Paramount of the Trident, until the Red Wedding. The current head is Lord Edmure Tully, son of the late Hoster Tully. The Tully sigil is a silver trout on a red and blue background. Their house words are "Family, Duty, Honor."`],

			["Greyjoy", `House Greyjoy of Pyke is one of the Great Houses of Westeros. It rules over the Iron Islands, a harsh and bleak collection of islands off the west coast of Westeros, from the castle at Pyke. The head of the house is the Lord Reaper of Pyke.
			House Greyjoy's sigil is traditionally a golden kraken on a black field. Their house words are "We Do Not Sow," although the phrase "What Is Dead May Never Die" is also closely associated with House Greyjoy and their bannermen, as they are associated with the faith of the Drowned God.`],

			["Arryn", `House Arryn of the Eyrie is one of the Great Houses of Westeros. It has ruled over the Vale of Arryn for millennia, originally as the Kings of Mountain and Vale and more recently as Lords Paramount of the Vale and Wardens of the East under the Targaryen kings and Baratheon-Lannister kings. The nominal head of House Arryn is Robin Arryn, the Lord of the Eyrie, with his stepfather Petyr Baelish acting as Lord Protector until he reaches the age of majority.`]
		]

	function popLightBox() {
		// find the right house video using the CCSS class attached to the sigil that was clicked
		let targetVideo = this.className.split(" ")[1];

		// get the house name, capitalize the first character, then rebuild the whole word with a cap.
		let targetVidCap = targetVideo.charAt(0).toUpperCase() + targetVideo.slice(1);

		//load the correct house video
		houseVideo.src = `video/House-${targetVidCap}.mp4`;
		houseVideo.load();

		// play the house video
		houseVideo.play();
		// add show-lightbox class to the lbox element
		lbox.classList.add('show-lightbox');
	}

	function closeLightBox(){
		// stop and rewind the video element
		houseVideo.currentTime = 0;
		houseVideo.pause();
		// remove the show lightbox class from the lbox element
		lbox.classList.remove('show-lightbox');
	}

	function animateBanners() {
		// move the banners across the screen!
		const offset = 600;

		let multiplier = this.dataset.offset,
			finalOffset = offset * multiplier;
			// will be a product of the multiplier * offset (600 * something)
			houseImages.style.right = finalOffset + 'px';

			// call the showHouseData function and pass the offset to it
			showHouseData(multiplier);
	}

	function showHouseData(targetIndex) {
		houseName.textContent = `House ${houseData[targetIndex][0]}`;
		houseInfo.textContent = houseData[targetIndex][1];
	}


	sigils.forEach(sigil => sigil.addEventListener("click", popLightBox));
	sigils.forEach(sigil => sigil.addEventListener("click", animateBanners));


	lbClose.addEventListener("click", closeLightBox);

	houseVideo.addEventListener("ended", closeLightBox);

})();
