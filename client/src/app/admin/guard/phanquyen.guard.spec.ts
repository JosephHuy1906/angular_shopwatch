import { TestBed } from '@angular/core/testing';

import { PhanquyenGuard } from './phanquyen.guard';

describe('PhanquyenGuard', () => {
  let guard: PhanquyenGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PhanquyenGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
