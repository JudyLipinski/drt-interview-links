import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-link',
  templateUrl: './add-link.component.html',
  styleUrls: ['./add-link.component.css']
})
export class AddLinkComponent implements OnInit {
  @Output() save = new EventEmitter();
  newLinkForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.newLinkForm = this.fb.group({
      name: ['', Validators.required],
      link: ['', Validators.required]
    });
  }

  onSubmit = () => {
    const { value } = this.newLinkForm;
    this.save.emit(value);
    this.newLinkForm.reset();
  }
}
