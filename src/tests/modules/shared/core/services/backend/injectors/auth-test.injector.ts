// Dependencies
import { Injectable, Injector } from '@angular/core';

// Assets
import { AuthMockService } from '@tests/shared/core/services/backend/auth-mock.service';

@Injectable({
	providedIn: 'root'
})
export class AuthInjectorServiceTest {

	private _authMockService: AuthMockService;

	constructor(private injector: Injector) { }

	public getAuthService(): AuthMockService {
		if(!this._authMockService) {
			this._authMockService = this.injector.get(AuthMockService);
		}
		return this._authMockService;
	}

}
