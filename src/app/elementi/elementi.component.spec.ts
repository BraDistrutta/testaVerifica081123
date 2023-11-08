import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementiComponent } from './elementi.component';

describe('ElementiComponent', () => {
  let component: ElementiComponent;
  let fixture: ComponentFixture<ElementiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ElementiComponent]
    });
    fixture = TestBed.createComponent(ElementiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
