(function () {
 	const button = document.querySelector('.game-menu-button');
 	const level1 = document.getElementById('level1');
 	const level2 = document.getElementById('level2');
 	const level3 = document.getElementById('level3');
 	let value = level1.value;

 	level1.onclick = function() {
 		value = level1.value;
 	}

 	level2.onclick = function() {
 		value = level2.value;
 	}

 	level3.onclick = function() {
 		value = level3.value;
 	}

 	function randomInteger(min, max) {
		let rand = min - 0.5 + Math.random() * (max - min + 1);
		return Math.round(rand);
	}

	function addOneCard(deck, gameVariable) {
		let html = '<div class="flip-card-inner">' + 
				'<div class="flip-card-front">' +
					'<img src="src/card.png" />' +
				'</div>' +
				'<div class="flip-card-back">' +
					`<img src="src/${gameVariable}.png" />` +
    			'</div>' +
			'</div>';
 		let div = document.createElement('div');
 		
 		div.className = 'flip-card';
 		div.innerHTML = html;
 		deck.append(div);
	}

	function addCard(n) {
 		const game = document.querySelector('.game');
 		const deck = document.createElement('div');
 		let bugIndex = randomInteger(0, n-1);

 		deck.className = 'game-deck';
 		game.append(deck);
 		if (n===10) deck.style.maxWidth = '1230px';

 		for (let i = 0; i < n; i++) {
 			let gameVariable = (i === bugIndex) ? 'bug' : 'over';
 			addOneCard(deck, gameVariable);
 		}
 	}

 	function flipping() {
 		let flipCard = document.querySelectorAll('.flip-card');
 		let isFlipped = false;

 		for (let i = 0; i < flipCard.length; i++) {
  				flipCard[i].addEventListener('click', function() {
  					if (isFlipped == true) {
  						window.location = window.location.href
  					} else {
						flipCard[i].classList.add('flipped');
						isFlipped = true;
					}
  				});
		}
 	}

 	button.onclick = function() {
 		const menu = document.querySelector('.game-menu');
 		const game = document.querySelector('.game');
 		let n;

 		switch(value) {
 			case 'средний':
 				n = 6;
    			break;

			case 'cложный':
				n = 10;
    			break;

			default:
				n = 3;
				break;
 		}

 		menu.remove();
 		addCard(n);
 		game.style.justifyContent = 'center';
 		flipping();
 	}
 }());