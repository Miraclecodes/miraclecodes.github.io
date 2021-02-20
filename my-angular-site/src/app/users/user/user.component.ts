import { Component, OnInit } from '@angular/core';
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  user;

  //Icons
  faCheckSquare = faCheckSquare;

  constructor(private userservice: UserService) { }

  ngOnInit(): void {
    const username = 'miraclecodes'
    this.userservice.getUser(username).subscribe(user => this.user = user);
  }
}

