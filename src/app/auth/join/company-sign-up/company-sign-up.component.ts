import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Observable } from 'rxjs';
import { MatAutocompleteSelectedEvent, MatAutocomplete } from '@angular/material';
import {MatChipInputEvent} from '@angular/material/chips';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { startWith, map } from 'rxjs/operators';
import { JoinService } from '../../join.service';

@Component({
  selector: 'app-company-sign-up',
  templateUrl: './company-sign-up.component.html',
  styleUrls: ['./company-sign-up.component.scss']
})
export class CompanySignUpComponent implements OnInit {
  @ViewChild ('certInput',{static: false} ) certInput: ElementRef<HTMLInputElement>;
  @ViewChild ('auto',{static: false} ) auto: MatAutocomplete;
  
  visible = true;
  selectable = true;
  removable = true;
  form: FormGroup;
  certCtrl: FormControl;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  filteredCerts: Observable<string[]>
  certs: string[] = []; 
  allCerts = [
    "NY : DBE",
    "NY : MBE",
    "NY : VOB",
    "NY : WBE",
    "NYS : DBE",
    "NYS : MBE",
    "NYS : VOB",
    "NYS : WBE",
    "PANYNJ : DBE",
    "PANYNJ : MBE",
    "PANYNJ : VOB",
    "PANYNJ : WBE",
]

  constructor(private fb: FormBuilder,private join: JoinService) {
    this.form = this.fb.group({
      first_name: ['',[Validators.required] ],
      middle_name: ['',[Validators.required] ],
      last_name: ['',[Validators.required] ],
      address: ['',[Validators.required] ],
      address2: [''],
      city: ['',[Validators.required] ],
      state: ['',[Validators.required] ],
      zip: ['',[Validators.required] ],
      phone_number: ['',[Validators.required] ],
      contact_preference: [''],
      website: [''],
      social_twitter: [''],
      social_facebook: [''],
      social_linkedin: ['']      
    })
   }

  ngOnInit() {
    this.filteredCerts = this.certCtrl.valueChanges.pipe(
      startWith(null),
      map((cert: string | null) => cert ? this._filter(cert) : this.allCerts.slice())
    )
  }

  add(event: MatChipInputEvent){
    const input =  event.input;
    const value =  event.value;

    //Add input to array
    if((value || '').trim()){
      this.certs.push(value.trim())
    }

    if(input){
      input.value = '';
    }

    this.certCtrl.setValue(null)
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    console.log(event)
    this.certs.push(event.option.viewValue);
    this.certInput.nativeElement.value = '';
    this.certCtrl.setValue(null);
  }

  remove(cert: string): void {
    const index = this.certs.indexOf(cert);
    if ( index >= 0 ){
      this.certs.splice(index,1);
    }
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.join.filterChipsInput(this.allCerts, filterValue);
    // return this.allCerts.filter(this.join.filterChipsInput)
    // return this.allCerts.filter(certs => certs.toLowerCase().indexOf(filterValue) === 0);
  }

}
