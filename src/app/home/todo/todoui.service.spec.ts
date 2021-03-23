import { TestBed } from '@angular/core/testing';

import { TodouiService } from './todoui.service';

describe('TodouiService', () => {
  let service: TodouiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodouiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
