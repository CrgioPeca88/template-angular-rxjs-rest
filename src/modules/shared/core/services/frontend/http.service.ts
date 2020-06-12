// Dependencies
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

// Assets
import { environment } from '@env/environment';

@Injectable({
	providedIn: 'root'
})
export class HttpService {

	constructor(private httpClient: HttpClient) { }

	// TODO: revisar el timeout en los request!
	get<T>(url: string): Observable<T> {
		const getHeaders: HttpHeaders = new HttpHeaders({
			'Content-Type': 'application/json'
		});
		return this.httpClient.get<T>(`${environment.apiBackUrl}${url}`, {
			headers: getHeaders
		});
	}

}
