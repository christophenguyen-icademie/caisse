import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaisieCodebarreComponent } from './saisie-codebarre.component';

describe('SaisieCodebarreComponent', () => {
  let component: SaisieCodebarreComponent;
  let fixture: ComponentFixture<SaisieCodebarreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaisieCodebarreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaisieCodebarreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
