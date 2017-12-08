'use strict';

import preact from 'preact';
import {RadioGroup, Radio} from '../index.jsx';

class App extends preact.Component {
	constructor() {
		super();
		this.state = {selectedValue: 'apple'};
	}
	handleChange(value) {
		this.setState({selectedValue: value});
	}

	render(props, state) {
		return <div>
			<RadioGroup
				name="fruit"
				selectedValue={state.selectedValue}
				onChange={this.handleChange.bind(this)}>
				<label>
					<Radio value="apple" />Apple
				</label>
				<label>
					<Radio value="orange" />Orange
				</label>
				<label>
					<Radio value="watermelon" />Watermelon
				</label>
			</RadioGroup>

			Selected: {state.selectedValue}
		</div>;
	}
}

preact.render(<App />, document.getElementById('content'));
