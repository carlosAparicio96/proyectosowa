import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CompletarRecetaPage } from './completar-receta.page';

describe('CompletarRecetaPage', () => {
  let component: CompletarRecetaPage;
  let fixture: ComponentFixture<CompletarRecetaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompletarRecetaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CompletarRecetaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
