import { TestBed } from '@angular/core/testing';

import { BleConnService } from './ble-conn.service';

describe('BleConnService', () => {
  let service: BleConnService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BleConnService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
