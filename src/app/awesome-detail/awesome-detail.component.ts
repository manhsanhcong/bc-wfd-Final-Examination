import {Component, OnInit} from '@angular/core';
import {Awesome} from '../awesome';
import {ActivatedRoute} from '@angular/router';
import {AwesomeService} from '../awesome.service';

@Component({
    selector: 'app-awesome-detail',
    templateUrl: './awesome-detail.component.html',
    styleUrls: ['./awesome-detail.component.scss']
})
export class AwesomeDetailComponent implements OnInit {
    awesome: Awesome;

    constructor(private route: ActivatedRoute,
                private awesomeService: AwesomeService) {
    }

    ngOnInit() {
        const id = +this.route.snapshot.paramMap.get('id');
        this.awesomeService.getAwesomeById(id).subscribe(
            data => (this.awesome = data),
            error => {
                console.log(error);
                this.awesome = null;
            }
        );
    }

}
