import { Register } from './register';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector:'regsiter-app',
    templateUrl:'./register.component.html'
})
export class RegisterComponent implements OnInit{
    constructor(private route:ActivatedRoute, private router: Router) {
   
    
};
    ngOnInit(): void {
        
    }
 
 
 
    register = new Register();



save(registerForm:NgForm){
console.log(registerForm.form);
console.log('Saved data ' + registerForm.value) ;
    
}

onBack() : void{
    this.router.navigate(['/home']);
}

}