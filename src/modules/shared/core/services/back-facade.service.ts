// Dependencies
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// Assets
import { AuthInjectorService } from './backend/injectors/auth.injector';
import { SuccessResponse } from '@tcp-core/models/dtos/SuccessResponse.model';

@Injectable({
	providedIn: 'root'
})
export class BackFacadeService {
	constructor(private authInjectorService: AuthInjectorService) { }

	public login(): Observable<SuccessResponse> {
		return this.authInjectorService.getAuthService().login();
	}
}
