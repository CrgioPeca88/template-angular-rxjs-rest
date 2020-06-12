// Dependencies
import { Injectable, Injector } from '@angular/core';

// Assets
import { HttpService } from '@tcp-core/services/frontend/http.service';

@Injectable({
	providedIn: 'root'
})
export class HttpInjectorService {

	private _HttpService: HttpService;

	constructor(private injector: Injector) { }

 public getHttpService(): HttpService {
		if(!this._HttpService) {
			this._HttpService = this.injector.get(HttpService);
		}
		return this._HttpService;
	}

}
