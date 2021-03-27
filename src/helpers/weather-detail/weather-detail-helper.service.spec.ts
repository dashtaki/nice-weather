import { TestBed } from '@angular/core/testing';

import { WeatherDetailHelperService } from './weather-detail-helper.service';

describe('WeatherDetailHelperService', () => {
  let service: WeatherDetailHelperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeatherDetailHelperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
