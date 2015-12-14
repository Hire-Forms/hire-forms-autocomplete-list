import React from "react";
import insertCss from "insert-css";
import Example from "hire-forms-example";
import AutocompleteList from "../build";

let fs = require("fs");
let css = fs.readFileSync(__dirname + "/index.css");

if (typeof window !== "undefined" && window.document) {
	insertCss(css, {prepend: true});
}


let fillOptions = function() {
	let options = [];
	let word = null;

	let createWord = () => {
		let vowels = "aeiou";
		let consonants = "bdklmnpst";
		let length = 2 + Math.floor(Math.random() * 16);
		let text = [];
		let char = null;

		for (var i = 0; i < length; i++) {
			char = (i % 2 === 0) ?
				consonants.charAt(Math.floor(Math.random() * consonants.length)) :
				vowels.charAt(Math.floor(Math.random() * vowels.length));

			text.push(char);
		}

		return text.join("");
	};

	for (let i = 1; i < 10; i++) {
		word = createWord();

		options.push({
			key: word,
			value: word.charAt(0).toUpperCase() + word.substr(1)
		});
	}

	return options;
};

let options = fillOptions();

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			async: [],
			editable: [],
			ordered: [],
			sync: []
		};
	}

	handleChange(name, values) {
		this.setState({
			[name]: values
		});
	}

	render() {
		return (
			<div className="app">
				<h1>HireForms AutocompleteList</h1>

				<Example
					title={"Async"}>
					<AutocompleteList
						async={(query, done) => {
							let response = options.filter((opt) =>
								opt.key.indexOf(query.toLowerCase()) > -1
							);

							setTimeout(() => done(response), 1000);
						}}
						onChange={this.handleChange.bind(this, "async")}
						values={this.state.async} />
				</Example>

				<Example
					title={"Sync"}>
					<AutocompleteList
						onChange={this.handleChange.bind(this, "sync")}
						options={options}
						values={this.state.sync} />
				</Example>

				<Example
					title={"Editable"}>
					<AutocompleteList
						editable={true}
						onChange={this.handleChange.bind(this, "editable")}
						options={options}
						values={this.state.editable} />
				</Example>

				<Example
					title={"Ordered"}>
					<AutocompleteList
						onChange={this.handleChange.bind(this, "ordered")}
						ordered={true}
						options={options}
						values={this.state.ordered} />
				</Example>
			</div>
		);
	}
}

App.propTypes = {};

App.defaultProps = {};

document.addEventListener("DOMContentLoaded", () => {
	React.render(<App />, document.body);
});