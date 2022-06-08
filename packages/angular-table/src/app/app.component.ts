import { AfterViewInit, ChangeDetectorRef, Component } from '@angular/core';
import { fromEvent, map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  title = 'angular-table';

  public list: any[] = [];

  constructor(private ref: ChangeDetectorRef) {}

  ngAfterViewInit(): void {
    fromEvent<CustomEvent>(window, '@wiz/react-form/add/task')
      .pipe(map((ev) => ev.detail))
      .subscribe((detail) => {
        this.list.push(detail);
        this.ref.detectChanges();
      });
  }
}
