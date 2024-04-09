import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NgFor,NgIf,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Todoapp';
  list: any[] = [];

  createTask(listItem: string): void {
    this.list.push({ id: this.list.length, name: listItem });
  }
  removeTask(id:number){
    this.list = this.list.filter(item => item.id!==id);
  }
  saveTask(listItem: any): void {
    listItem.isEditing = false;
  }
   
}

