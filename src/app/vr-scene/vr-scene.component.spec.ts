import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VrSceneComponent } from './vr-scene.component';

describe('VrSceneComponent', () => {
  let component: VrSceneComponent;
  let fixture: ComponentFixture<VrSceneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VrSceneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VrSceneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
