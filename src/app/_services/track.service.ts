import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';

const baseUrl = `${environment.apiUrl}`;

@Injectable({ providedIn: 'root' })
export class TrackService {
    constructor(private http: HttpClient) { }

    getAll(filterBand) {
        return this.http.get(`${baseUrl}/searchTracks/${filterBand}`);
    }

}