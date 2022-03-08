import { Component, OnInit } from '@angular/core';
import { Map, View } from 'ol';
import { MapOptions } from 'ol/PluggableMap';
import { ViewOptions } from 'ol/View';
import { MapService } from './map.service';

@Component({
    selector: 'app-map',
    templateUrl: './map.component.html',
    styleUrls: ['./map.component.less']
})
export class MapComponent implements OnInit {

    private map?: Map;

    constructor(private mapService: MapService) { }

    ngOnInit(): void {
        this.initMap();
    }

    private initMap(): void {
        const viewOptions: ViewOptions = {
            
        };
        const mapOptions: MapOptions = {
            view: new View()
        };
        this.map = new Map(mapOptions);
    }

}
