const temporadasBtn = document.querySelectorAll('#listaTemporadas button');
const playlistContainer = document.getElementById("filaDeReproducao");
let btnTemporadas = document.querySelectorAll('nav li');
btnTemporadas.forEach((btn) => {
	const t1 = document.querySelector('#t1');
	const t2 = document.querySelector('#t2');
	const t3 = document.querySelector('#t3');
	const t4 = document.querySelector('#t4');

	btn.addEventListener('click', () => {
		if (btn.value == '1') {
			// alert('1');
			t1.style.display = 'block';
			t2.style.display = 'block';
			t3.style.display = 'block';
			t4.style.display = 'block';
		}
		if (btn.value == '2') {
			t1.style.display = 'block';
			t2.style.display = 'none';
			t3.style.display = 'none';
			t4.style.display = 'none';
		}
		if (btn.value == '3') {
			t1.style.display = 'none';
			t2.style.display = 'block';
			t3.style.display = 'none';
			t4.style.display = 'none';
		}
		if (btn.value == '4') {
			t1.style.display = 'none';
			t2.style.display = 'none';
			t3.style.display = 'block';
			t4.style.display = 'none';
		}
		if (btn.value == '5') {
			t1.style.display = 'none';
			t2.style.display = 'none';
			t3.style.display = 'none';
			t4.style.display = 'block';
		}
	});
});


document.querySelectorAll('#filaDeReproducao button').forEach((event) => {
	event.addEventListener("click", () => {
		event.parentNode.classList.add('oculto'); // target se estiver vai sair
		
		setTimeout(() => {
			event.parentNode.remove();
		}, 500);
	});
});

temporadasBtn.forEach((e) => {
	e.addEventListener("click", () => {
		let msg = `
				<li>
                  <img src="img/imagemIcone.png" />
                  <div>
                     <div>
                        <h4>Maratona Invertida</h4>
                        <span>Temporada ${e.id}</span>
                     </div>
                     <div class="assistir">
                        <img src="img/play-icon.png"/>
                        <span>Assistir agora</span>
                     </div>
                  </div>
                     <button><img width="20" src="img/trash-icon.png"></button>
               	</li>
		`;
		playlistContainer.innerHTML += msg;

	});
});


