import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
   name: 'capitalizado'
} )

export class CapitalizadoPipe implements PipeTransform {
      // transform(value:  string , args1, args2, args3): string { <= Una forma de hacerlo
      // transform(value:  string , ...args: any[]): string { <= Pasar muchos argumentos
      transform(value:  string, todas: boolean = true ): string {
       console.log(value );

      value = value.toLowerCase();

      let nombres = value.split(' ');

      
      if ( todas ) {
      for ( let i in nombres ) {
        nombres[i] = nombres[i][0].toUpperCase() + nombres[i].substring(1);
      }
      } else {
        nombres[0] = nombres[0][0].toUpperCase() + nombres[0].substr(1);
      }


       return nombres.join(' ');
      }
}

