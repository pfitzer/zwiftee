import {Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import * as $ from 'jquery';
import {element} from 'protractor';

@Component({
    selector: 'app-workouts',
    templateUrl: './workouts.component.html',
    styleUrls: ['./workouts.component.css']
})
export class WorkoutsComponent implements OnInit {
    @ViewChild('workout')
    private workout: ElementRef;

    public fokused: ElementRef<SVGRect>;
    public fokusedWidth: number;
    public fokusedHeight: number;
    private parent: ElementRef<SVGElement>;
    private boxHeight = 200;
    private zoneWidth = 60;
    private powerZones = [50, 56, 76, 91, 106, 121];
    private createStates: any = {
        'z1': this.getZoneDefinition(0),
        'z2': this.getZoneDefinition(1),
        'z3': this.getZoneDefinition(2),
        'z4': this.getZoneDefinition(3),
        'z5': this.getZoneDefinition(4),
        'z6': this.getZoneDefinition(5),
    };

    constructor(private renderer: Renderer2) {
    }

    ngOnInit() {
    }

    addWorkout(event) {
        this.createSvg(event);
    }

    removeItem() {
        $('#workout svg:last-child').remove();
        this.clear();
    }

    getData(event) {
        const renderer = this.renderer;
        this.fokused = event.srcElement;
        this.parent = event.srcElement.parentElement;
        this.fokusedWidth = event.srcElement.getBBox().width * 10;
        this.fokusedHeight = event.srcElement.getBBox().height;
        this.unsetFocus(renderer);
        this.renderer.setAttribute(this.fokused, 'style', 'stroke-width:2;stroke:rgb(0,0,0)');
    }

    changeSize() {
        this.renderer.setAttribute(this.fokused, 'height', this.fokusedHeight.toString());
        this.renderer.setAttribute(this.fokused, 'y', (this.boxHeight - this.fokusedHeight).toString());
        this.renderer.setAttribute(this.fokused, 'width', (this.fokusedWidth / 10).toString());
        this.renderer.setAttribute(this.parent, 'width', (this.fokusedWidth / 10).toString());
        $(this.fokused).removeClass();
        this.renderer.addClass(this.fokused, this.getCSS());
    }

    duplicate() {
        const clone = $(this.parent).clone();
        this.renderer.listen(clone[0], 'click', (ev: any) => this.getData(ev));
        this.renderer.appendChild(this.workout.nativeElement, clone[0]);
        this.unsetFocus(this.renderer);
        this.clear();
    }

    private createSvg(event) {
        const cssClass = event.srcElement.classList[0];
        const svg = this.renderer.createElement('svg', 'svg');
        const rect = this.renderer.createElement('rect', 'svg');
        const attributes = this.createStates[cssClass];

        this.renderer.setAttribute(svg, 'height', '200');
        this.renderer.listen(rect, 'click', (ev: any) => this.getData(ev));
        this.renderer.setAttribute(svg, 'width', '60');

        this.renderer.addClass(rect, cssClass);
        Object.keys(attributes).forEach(key => {
            this.renderer.setAttribute(rect, key, attributes[key]);
        });
        this.renderer.appendChild(svg, rect);
        this.renderer.appendChild(this.workout.nativeElement, svg);
    }

    private getZoneDefinition(key) {
        return {
            height: (100 * this.powerZones[key] / 100),
            width: this.zoneWidth,
            x: 0,
            y: this.boxHeight - (100 * this.powerZones[key] / 100)
        };
    }

    private getCSS() {
        switch (true) {
            case (this.fokusedHeight < this.powerZones[1]):
                return 'z1';
            case (this.fokusedHeight >= this.powerZones[1] && this.fokusedHeight < this.powerZones[2]):
                return 'z2';
            case (this.fokusedHeight >= this.powerZones[2] && this.fokusedHeight < this.powerZones[3]):
                return 'z3';
            case (this.fokusedHeight >= this.powerZones[3] && this.fokusedHeight < this.powerZones[4]):
                return 'z4';
            case (this.fokusedHeight >= this.powerZones[4] && this.fokusedHeight < this.powerZones[5]):
                return 'z5';
            case (this.fokusedHeight >= this.powerZones[5]):
                return 'z6';
        }
    }

    private clear() {
        this.fokusedHeight = null;
        this.fokusedWidth = null;
        this.fokused = null;
        this.parent = null;
        this.unsetFocus(this.renderer);
    }

    private unsetFocus(renderer) {
        const svgs = $('#workout rect');
        $.each(svgs, function (key, ele) {
            renderer.setAttribute(ele, 'style', 'stroke-width:0;');
        });
    }
}
