// Dependencies
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Assets
import { MaterialModule } from './material.module';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		MaterialModule,
		ReactiveFormsModule
	],
	entryComponents: [],
	declarations: [],
	providers: [],
	exports: [
		FormsModule,
		MaterialModule,
		ReactiveFormsModule,
		CommonModule
	]
})
export class SharedModule { }
