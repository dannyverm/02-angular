import { Component, OnDestroy } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { filter, map, Subscription } from 'rxjs';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [
  ]
})
export class BreadcrumbsComponent implements OnDestroy {

  public titulo: string = '';
  public tituloSubs$: Subscription = new Subscription;

  constructor(private router: Router) {

    this.tituloSubs$ = this.getTitle()
      .subscribe((data) => {
        this.titulo = data['titulo'];
        document.title = this.titulo;
        //console.log(this.titulo)
      });

  }
  ngOnDestroy(): void {
    this.tituloSubs$.unsubscribe();
  }

  getTitle() {

    return this.router.events
      .pipe(
        filter((event: any) => event instanceof ActivationEnd),
        filter((event: ActivationEnd) => event.snapshot.firstChild === null),
        map((event: ActivationEnd) => event.snapshot.data)
      )

  }

}
