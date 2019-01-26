import { TestBed } from '@angular/core/testing';

import { ItsTimetoUseService } from './its-timeto-use.service';

describe('ItsTimetoUseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ItsTimetoUseService = TestBed.get(ItsTimetoUseService);
    expect(service).toBeTruthy();
  });
});
