import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ContactService } from 'src/app/services/contact.service';
import { faCoffee, faEnvelope, faFeatherAlt, faMeh, faSmile } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  name: String;
  email: String;
  message: String;
  formData: FormGroup;

  // Icons 
  faEnvelope = faEnvelope;
  faSmile = faSmile;
  faMeh = faMeh;






  processForm(formData) {
    console.log(FormData)
    this.contact.postMessage(formData).subscribe(response => {
      location.href = 'https://mailthis.to/confirm'
      console.log(response)
    }, error => {
      console.warn(error.responseText)
      console.log({ error })
    })

  }

  constructor(private builder: FormBuilder, private contact: ContactService) { }

  ngOnInit(): void {
    this.formData = this.builder.group({
      Fullname: new FormControl('', [Validators.required]),
      Email: new FormControl('', [Validators.compose([Validators.required, Validators.email])]),
      Message: new FormControl('', [Validators.required])
    })
  }

}
