import { Component, OnInit } from '@angular/core';

import { TrackService } from '../_services';
import { Track } from '../_models';

@Component({ templateUrl: 'list.component.html' })

export class ListComponent implements OnInit {

    tracks!: Track[];
    filterBand = '';

    constructor(private trackService: TrackService
    ) {}

    ngOnInit() {
        this.trackService.getAll(this.filterBand)
            .subscribe(data => this.tracks = (data as any).canciones);
    }

}