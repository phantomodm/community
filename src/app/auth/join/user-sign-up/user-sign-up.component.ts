import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { MatChipInputEvent, MatAutocompleteSelectedEvent, MatAutocomplete } from '@angular/material';
import { Observable } from 'rxjs';
import { JoinService } from '../../join.service';

@Component({
  selector: 'app-user-sign-up',
  templateUrl: './user-sign-up.component.html',
  styleUrls: ['./user-sign-up.component.scss']
})
export class UserSignUpComponent implements OnInit {
  @ViewChild ('skillInput',{static: false} ) skillInput: ElementRef<HTMLInputElement>;
  @ViewChild ('auto',{static: false} ) auto: MatAutocomplete;
  
  visible = true;
  selectable = true;
  removable = true;


  form: FormGroup;
  skills: string[];
  skillsCtrl: FormControl;
  filteredSkills: Observable<string[]>;
  allSkills: string[] = []

  constructor(private fb:FormBuilder, private join: JoinService) { }

  ngOnInit( ) {
    this.form = this.fb.group({
      company_name: ['',[Validators.required] ],
      hiring_manager: ['',[Validators.required] ],
      last_name: ['',[Validators.required] ],
      address: ['',[Validators.required] ],
      address2: [''],
      city: ['',[Validators.required] ],
      state: ['',[Validators.required] ],
      zip: ['',[Validators.required] ],
      phone_number: ['',[Validators.required] ],      
      website: [''],
      industry_skillification: [''],
      social_twitter: [''],
      social_facebook: [''],
      social_linkedin: [''] 
    })

  }
  
  add(event: MatChipInputEvent){
    const input =  event.input;
    const value =  event.value;

    //Add input to array
    if((value || '').trim()){
      this.skills.push(value.trim())
    }

    if(input){
      input.value = '';
    }

    this.skillsCtrl.setValue(null)
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    console.log(event)
    this.skills.push(event.option.viewValue);
    this.skillInput.nativeElement.value = '';
    this.skillsCtrl.setValue(null);
  }

  remove(skill: string): void {
    const index = this.skills.indexOf(skill);
    if ( index >= 0 ){
      this.skills.splice(index,1);
    }
  }

  private _filter(db:string[], value: string){
    const filterValue = value.toLowerCase();
    this.join.filterChipsInput(this.allSkills, filterValue)
  }

}
