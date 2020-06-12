// Dependencies
import { Injectable, NgZone } from '@angular/core';
import { ErrorHandler } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

// Assets
import { StatusCode } from '@shared/constants/status-code.enum';

@Injectable({
	providedIn: 'root'
})
export class ErrorHandlerService implements ErrorHandler {

		constructor(private ngZone: NgZone) { }

		private showHttpError(error: HttpErrorResponse): void {
			switch(error.status) {
				case StatusCode.bad_request: {
					this.ngZone.run(() => {
						console.error("error 404 (Bad request)", error);
					});
     break;
   	}
				default: {
					this.ngZone.run(() => {
						console.error("Unknown error (Connection refused)", error);
					});
     break;
   	}
			}
		}

		// Backend and Frontend Errors
		handleError(error): void {
    if (error instanceof HttpErrorResponse) {
					console.error("[BACK-HTTP ERROR !!! not handled]");
					this.showHttpError(error);
				} else {
					console.error("[FRONT ERROR!!! not handled]", error);
				}
  }

}
