import { Component, OnDestroy } from '@angular/core';
import { Observable, retry, interval, take, map, filter, Subscription } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnDestroy {

  intervaloSubs: Subscription = new Subscription;
  constructor() {


    //   this.retornaObservable().pipe(
    //     retry(1)
    //   ).subscribe({
    //     next: valor => console.log('subs: ', valor),
    //     error: error => console.log('Error: ', error),
    //     complete: () => console.log('servicio completado')
    // });

    // this.retornaIntervalo()
    //   .subscribe(console.log)
    this.intervaloSubs = this.retornaIntervaloFilter()
      .subscribe(console.log)
  }
  ngOnDestroy(): void {
    this.intervaloSubs.unsubscribe()
  }

  retornaIntervalo() {
    return interval(1000)
      .pipe(
        take(4),
        map(val => val + 1)
      )
  }

  retornaIntervaloFilter() {
    return interval(500)
      .pipe(
        map(res => res + 1),
        filter(val => val % 2 === 0),
        // take(10),
      )
  }

  retornaObservable() {
    let i = 0;
    return new Observable(observer => {

      const intervalo = setInterval(() => {
        i++;
        observer.next(i);
        if (i === 4) {
          clearInterval(intervalo);
          observer.complete();
        }

        if (i === 2) {
          observer.error('Algo salió mal')
        }
      }, 1000)
    });


  }

}
