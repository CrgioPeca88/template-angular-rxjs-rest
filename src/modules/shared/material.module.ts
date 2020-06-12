// Dependencies
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
	imports: [
		MatIconModule,
		MatButtonModule
	],
	providers: [],
	exports: [
		MatIconModule,
		MatButtonModule
	]
})
export class MaterialModule { }
