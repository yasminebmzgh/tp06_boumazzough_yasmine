import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireResultComponent } from './formulaire-result.component';

describe('FormulaireResultComponent', () => {
  let component: FormulaireResultComponent;
  let fixture: ComponentFixture<FormulaireResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulaireResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulaireResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
