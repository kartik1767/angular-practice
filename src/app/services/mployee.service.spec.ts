import { TestBed } from '@angular/core/testing';

import { MployeeService } from './mployee.service';

describe('MployeeService', () => {
  let service: MployeeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MployeeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
