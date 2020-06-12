// Dependencies
import { Injectable } from '@angular/core';

// Assets
import { Observable, throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { SuccessResponse } from '@tcp-core/models/dtos/SuccessResponse.model';

@Injectable({
	providedIn: 'root',
})
export class AuthMockService {

	constructor() { }

	public login(): Observable<SuccessResponse> {
		return new Observable( o => {
			o.next({
				body: "Body Test",
				id: 1,
				title: "Title Test",
				userId: 88
			});
		});
		/*let error: HttpErrorResponse = new HttpErrorResponse({
			error: 'error',
			status: 404,
			statusText: 'Error 404 Bad Request'
		});
		return throwError(error);*/
	}

}
