// Dependencies
import { Component } from '@angular/core';

// Assets
import { BackFacadeService } from '@tcp-core/services/back-facade.service';
import { SuccessResponse } from '@tcp-core/models/dtos/SuccessResponse.model';

@Component({
	selector: 'auth-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.less']
})
export class LoginComponent {

	private _loading: boolean;
	private _id: number;

	constructor(private backFacadeService: BackFacadeService) { }

	public login(): void {
		this._loading = true;
		this.backFacadeService.login().subscribe(
			(response: SuccessResponse) => {
				this._loading = false;
				this._id = response.userId;
			}
		);}

}
