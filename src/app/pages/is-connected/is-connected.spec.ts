import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IsConnected } from './is-connected';

describe('IsConnected', () => {
  let component: IsConnected;
  let fixture: ComponentFixture<IsConnected>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IsConnected]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IsConnected);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
