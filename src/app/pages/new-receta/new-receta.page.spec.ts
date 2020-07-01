import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewRecetaPage } from './new-receta.page';

describe('NewRecetaPage', () => {
  let component: NewRecetaPage;
  let fixture: ComponentFixture<NewRecetaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewRecetaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewRecetaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
