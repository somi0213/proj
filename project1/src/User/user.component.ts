import { User } from './user';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector:'user-app',
    templateUrl:'./user.component.html'
})
export class UserComponent implements OnInit{
    constructor(private route:ActivatedRoute, private router: Router) {
   
    
};
    ngOnInit(): void {
        
    }
 
 
 
    user = new User();



save(userForm:NgForm){
console.log(userForm.form);
console.log('Saved data ' + userForm.value) ;
    
}

onBack() : void{
    this.router.navigate(['/home']);
}

}