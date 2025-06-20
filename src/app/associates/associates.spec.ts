import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Associates } from './associates';

describe('Associates', () => {
  let component: Associates;
  let fixture: ComponentFixture<Associates>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Associates]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Associates);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
