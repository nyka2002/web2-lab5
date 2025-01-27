za projekt su korišteni vue3, vue router, firebase

pokretanje s: npm run serve

URL aplikacije u cloudu (npr. Render, Heroku...):
https://web2-lab5-eight.vercel.app/

interpolation/one-way binding - src/App.vue: 15, 39
two-way binding - src/views/LoginPage.vue: 4, 18, 26
methods - src/App.vue: 45
computed properties - src/components/ClicksCounter.vue: 22
barem jedan scoped style - src/App.vue: 72
koristiti barem jedan lifecycle hook - src/App.vue: 52 (mijenjanje poruke nakon 5 sek)
routing (više stranica) - src/router/index.js: 4-10 (rade svi linkovi, nema dinamičkog usmjeravanja s 404 stranicom ("catch all"))
(barem) dvije komponente - src/components/MessageBox.vue: 10 (komponenta bez stanja, koristiti properties )
   								src/components/ClicksCounter.vue: 8, 19 (komponenta sa stanjem)
barem jedna komponenta mora emitirati barem jedan event - src/components/MessageBox.vue: 14
store (Pinia) - src/store/counterStore.js
asinkroni dohvat podataka s backenda: - src/components/LoadPosts.vue: 23
	Firebase: src/firebase.js: 4
	ostvariti asinkrono (lazy, po potrebi) učitavanje nekog dijela aplikacije: src/router/index.js: 4-10
