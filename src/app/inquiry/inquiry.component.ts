import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {Component, ElementRef, Inject, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MatAutocompleteSelectedEvent, MatAutocomplete} from '@angular/material/autocomplete';
import {MatChipInputEvent, MatChipList} from '@angular/material/chips';
// import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-inquiry',
  templateUrl: './inquiry.component.html',
  styleUrls: ['./inquiry.component.scss']
})
export class InquiryComponent implements OnInit {
  visible=true;
  selectable=true;
  removable=true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  filteredColors: Observable<string[]> | undefined;
  colors: string[] = [];
  allColors: string[] = ['Red', 'Yellow', 'Black', 'White', 'Blue'];
  inquiryForm!: FormGroup ;

  @ViewChild('colInput')
  colInput!: ElementRef<HTMLInputElement>;
  @ViewChild('auto') matAutocomplete: MatAutocomplete | undefined;

  constructor(private fb: FormBuilder) {}
  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.inquiryForm = this.fb.group({
      name: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      email: ['', [Validators.required, Validators.email]],
      colorInput: [null],
      selectedColor: [this.colors],
      requirements:['']
    });

    this.filteredColors = this.inquiryForm.get('colorInput').valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }

  get name() {
    return this.inquiryForm.get('name');
  }

  get phone() {
    return this.inquiryForm.get('phone');
  }
  get email() {
    return this.inquiryForm.get('email');
  }
  // close() {
  //   console.log(this.inquiryForm.value);
  //   this.dialogRef.close();
  // }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our color
    if (value) {
      this.colors.push(value);
    }

    // Clear the input value
    event.chipInput!.clear();

    this.inquiryForm.get('colorInput').setValue('');
    this.inquiryForm.get('selectedColor').setValue(this.colors)
  }

  remove(color: string): void {
    const index = this.colors.indexOf(color);

    if (index >= 0) {
      this.colors.splice(index, 1);
      this.inquiryForm.get('selectedColor').setValue(this.colors);
      this.inquiryForm.get('colorInput').setValue('');
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.colors.push(event.option.viewValue);
    this.colInput.nativeElement.value = '';
    this.inquiryForm.get('colorInput').setValue('');
    this.inquiryForm.get('selectedColor').setValue(this.colors);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allColors.filter(color => color.toLowerCase().indexOf(filterValue) === 0);
  }
}
