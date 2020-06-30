import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MisRecetasPage } from './mis-recetas.page';

describe('MisRecetasPage', () => {
  let component: MisRecetasPage;
  let fixture: ComponentFixture<MisRecetasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MisRecetasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MisRecetasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
