import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocComponent } from './soc.component';

describe('SocComponent', () => {
  let component: SocComponent;
  let fixture: ComponentFixture<SocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SocComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
