import { TestBed } from '@angular/core/testing';

import { AttachDocumentsService } from './attach-documents.service';

describe('AttachDocumentsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AttachDocumentsService = TestBed.get(AttachDocumentsService);
    expect(service).toBeTruthy();
  });
});
