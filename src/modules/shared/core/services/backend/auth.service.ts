// Dependencies
import { Injectable } from '@angular/core';

// Assets
import { FrontFacadeService } from '@tcp-core/services/front-facade.service';
import { Observable } from 'rxjs';
import { SuccessResponse } from '@tcp-core/models/dtos/SuccessResponse.model';

@Injectable({
	providedIn: 'root',
})
export class AuthService {

	constructor(private frontFacadeService: FrontFacadeService) { }

	public login(): Observable<SuccessResponse> {
		return this.frontFacadeService.get<SuccessResponse>('/posts/42');
	}

}
