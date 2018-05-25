import { TestBed, inject } from '@angular/core/testing';

import { ComponentFactoryResolverService } from './component-factory-resolver.service';

describe('ComponentFactoryResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ComponentFactoryResolverService]
    });
  });

  it('should be created', inject([ComponentFactoryResolverService], (service: ComponentFactoryResolverService) => {
    expect(service).toBeTruthy();
  }));
});
