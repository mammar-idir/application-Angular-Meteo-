import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetailsLocationPage } from './details-location.page';

describe('DetailsLocationPage', () => {
  let component: DetailsLocationPage;
  let fixture: ComponentFixture<DetailsLocationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsLocationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetailsLocationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
