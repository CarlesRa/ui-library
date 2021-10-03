import { TestBed } from '@angular/core/testing';

import { UiLibraryUtilsService } from './ui-library-utils.service';

describe('UiLibraryUtilsService', () => {
  let service: UiLibraryUtilsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UiLibraryUtilsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
