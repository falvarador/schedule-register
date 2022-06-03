import { c } from "atomico";

function app() {
	return (
		<host shadowDom>
			<section>
				<h1>Hello Atomico + Vite!</h1>
				<a href="https://github.com/falvarador/atomico-vite" target="_blank">
					Atomico + Vite
				</a>
			</section>
		</host>
	);
}

export const App = c(app);

customElements.define("my-app", App);
