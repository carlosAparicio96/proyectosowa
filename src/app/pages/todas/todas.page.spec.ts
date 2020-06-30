import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TodasPage } from './todas.page';

describe('TodasPage', () => {
  let component: TodasPage;
  let fixture: ComponentFixture<TodasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TodasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
