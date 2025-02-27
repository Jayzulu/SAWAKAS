import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SasComponent } from './sas.component';

describe('SasComponent', () => {
  let component: SasComponent;
  let fixture: ComponentFixture<SasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
