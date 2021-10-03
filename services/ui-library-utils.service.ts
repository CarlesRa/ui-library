import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UiLibraryUtilsService {

  constructor() { }

  /**
   * return Object keys attributes in string array
   * @param object object to obtain his keys
   */
  getObjectArrayKeys<Type>(object: Type): string[] {
    const keys: string[] = [];
    Object.keys(object).forEach(key => {
      keys.push(key);
    });
    return keys;
  }
}
