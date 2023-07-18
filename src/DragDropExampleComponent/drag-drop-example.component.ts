import { Component } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-drag-drop-example',
  standalone: true,
  templateUrl: './drag-drop-example.component.html',
  styleUrls: ['./drag-drop-example.component.css'],
  imports: [FlexLayoutModule, DragDropModule, CommonModule],
})
export class DragDropExampleComponent {
  items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];
  itemGroups: { flex: string; items: string[] }[] = [];

  onDrop(event: CdkDragDrop<string[]>) {
    if (event.container !== event.previousContainer) {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );

      this.updateItemGroups();
    }
  }

  updateItemGroups() {
    this.itemGroups = [];
    let currentGroup: { flex: string; items: string[] } = {
      flex: '50%',
      items: [],
    };

    this.items.forEach((item, index) => {
      if (index === 0) {
        currentGroup.items.push(item);
      } else {
        const prevItem = this.items[index - 1];
        if (prevItem.endsWith('1') && item.endsWith('1')) {
          this.itemGroups.push(currentGroup);
          currentGroup = { flex: '50%', items: [item] };
        } else {
          currentGroup.items.push(item);
        }
      }
    });

    if (currentGroup.items.length > 0) {
      this.itemGroups.push(currentGroup);
    }
  }
}
