import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'appFilter' })
export class FilterPipe implements PipeTransform {
  
    // Transform
    // @param {any[]} items
    // @param {string} searchText
    // @returns {any[]}
   
  transform(items: any[], searchText: string): any[] {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLowerCase();

    return items.filter(it => {
      return ((it.name.toLowerCase().includes(searchText) || it.state.toLowerCase().includes(searchText)) || it.localgovt.toLowerCase().includes(searchText))
    });
  }
}