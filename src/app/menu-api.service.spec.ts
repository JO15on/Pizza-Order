import { TestBed } from '@angular/core/testing';

import { MenuAPIService } from './menu-api.service';

describe('MenuAPIService', () => {
  let service: MenuAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MenuAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
