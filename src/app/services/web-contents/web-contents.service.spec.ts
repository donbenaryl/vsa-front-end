import { TestBed } from '@angular/core/testing';

import { WebContentsService } from './web-contents.service';

describe('WebContentsService', () => {
  let service: WebContentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WebContentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
