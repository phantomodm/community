import { Injectable } from '@angular/core';
import { MatChipInputEvent } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class JoinService {


  constructor() { }

  filterChipsInput(input:string[], value: string){
    return input.filter(input => input.toLowerCase().indexOf(value) === 0)
  }

  addInputEvent(db:string[],event: MatChipInputEvent){
    
  }
}
