import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayotsComponent } from './layots.component';

describe('LayotsComponent', () => {
  let component: LayotsComponent;
  let fixture: ComponentFixture<LayotsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayotsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LayotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
