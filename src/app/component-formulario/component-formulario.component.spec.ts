import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentFormularioComponent } from './component-formulario.component';

describe('ComponentFormularioComponent', () => {
  let component: ComponentFormularioComponent;
  let fixture: ComponentFixture<ComponentFormularioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentFormularioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
