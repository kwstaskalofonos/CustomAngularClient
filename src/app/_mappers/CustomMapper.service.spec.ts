/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CustomMapperService } from './CustomMapper.service';

describe('Service: CustomMapper', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CustomMapperService]
    });
  });

  it('should ...', inject([CustomMapperService], (service: CustomMapperService) => {
    expect(service).toBeTruthy();
  }));
});
