import { TestBed } from '@angular/core/testing';

import { ReactFormService } from './react-form.service';

describe('ReactFormService', () => {
  let service: ReactFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReactFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
