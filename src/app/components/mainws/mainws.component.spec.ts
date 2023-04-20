import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainwsComponent } from './mainws.component';

describe('MainwsComponent', () => {
  let component: MainwsComponent;
  let fixture: ComponentFixture<MainwsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
     
   
      declarations: [ MainwsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainwsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
