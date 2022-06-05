import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styleUrls: ['./promesas.component.css']
})
export class PromesasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.getUsuarios().then(usuarios => {
      console.log(usuarios);
    })
    //   const promesas = new Promise((resolve, reject) => {
    //     if (false) {
    //       resolve('Hola Mundo')
    //     } else {
    //       reject('algo salió mal')
    //     }
    //   })

    //   promesas.then((res) => {
    //     console.log('hey terminé ', res)
    //   })
    //     .catch(error => console.log('error en mi promesa', error));


    //   console.log("Fin del init")

  }

  getUsuarios() {

    const promesa = new Promise(resolve => {
      fetch('https://reqres.in/api/users')
        .then(res => res.json())
        .then(body => resolve(body.data))
        .catch()
    });

    return promesa;
  }

}




