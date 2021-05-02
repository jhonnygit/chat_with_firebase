import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private AFauth:AngularFireAuth, private router:Router) { }

  login(email:string, password:string){
    this.AFauth.signInWithEmailAndPassword(email, password).then(res=>{ 
        // console.log('estas logueado: ' + res);
        console.log(res);
        this.router.navigate(['/home']);
    }).catch(err=> console.log('error : '+ err));
  }

  logout(){
    this.AFauth.signOut().then(()=>{
      this.router.navigate(['/login']);
    });
  }
}
