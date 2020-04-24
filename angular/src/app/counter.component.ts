import { Component } from '@angular/core';

@Component({
	selector: 'counter',
	template: `
				<div>{{ counter }}</div>
				<button (click)='inc()'>+</button>
				<button (click)='dec()'>-</button>
			`,
})

export class CounterComponent {
	counter = 0;

	inc() {
		this.counter += 1;
	}
	dec() {
		this.counter -= 1;
	}
};
