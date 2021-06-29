import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(leagues: any, search: any): any {
    if(search == undefined || search == ''){
      return leagues;
    }else{
      return leagues.filter(league =>{
        if(league.nameLeague.toLowerCase().includes(search.toLowerCase())){
          return league
        }
      })
    }
  }

}
