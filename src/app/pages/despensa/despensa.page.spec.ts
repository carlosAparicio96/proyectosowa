import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DespensaPage } from './despensa.page';

describe('DespensaPage', () => {
  let component: DespensaPage;
  let fixture: ComponentFixture<DespensaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DespensaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DespensaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
