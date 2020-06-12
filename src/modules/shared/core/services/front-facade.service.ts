// Dependencies
import { Injectable, Type } from '@angular/core';
import { Observable } from 'rxjs';

// Assets
import { HttpInjectorService } from './frontend/injectors/http.injector';

@Injectable({
	providedIn: 'root'
})
export class FrontFacadeService {
	constructor(
		private httpInjectorService: HttpInjectorService
	) { }

	/*-----------------------------------------
	* HTTP SERVICES
	------------------------------------------*/
	get<T>(url: string): Observable<T> {
		return this.httpInjectorService.getHttpService().get<T>(url);
	}

}
