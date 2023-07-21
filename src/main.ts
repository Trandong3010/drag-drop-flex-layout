import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DragDropExampleComponent } from './DragDropExampleComponent/drag-drop-example.component';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [
    CommonModule,
    DragDropModule,
    FlexLayoutModule,
    DragDropExampleComponent,
  ],
  template: `
    <h1>Hello from {{name}}!</h1>
    <a target="_blank" href="https://angular.io/start">
      Learn more about Angular 
    </a>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
