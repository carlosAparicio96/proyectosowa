import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddIngredienteDespensaPage } from './add-ingrediente-despensa.page';

describe('AddIngredienteDespensaPage', () => {
  let component: AddIngredienteDespensaPage;
  let fixture: ComponentFixture<AddIngredienteDespensaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddIngredienteDespensaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddIngredienteDespensaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
