import { Component, OnInit } from '@angular/core';
import { AuthService } from '../servicios/auth.service';
import { ChatsService, chat } from '../servicios/chats.service';
import { ModalController } from '@ionic/angular';
import { ChatComponent } from '../componentes/chat/chat.component';





@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  public chatRooms:any=[];

  constructor(public AFauth:AuthService, public chatservice:ChatsService,private modal:ModalController) {}

  Onlogout(){
    this.AFauth.logout();
  }

  ngOnInit(){
    this.chatservice.getChatRooms().subscribe(chats=>{
     this.chatRooms=chats;
    })
  } 

  openChat(chat){
    
    this.modal.create({
      component:ChatComponent,
      componentProps:{
        chat:chat
      }
    }).then((modal)=>modal.present())
    
  }

}
