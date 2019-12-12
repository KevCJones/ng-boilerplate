import { Spectator, createComponentFactory } from '@ngneat/spectator';
import { MockComponents } from 'ng-mocks';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let spec: Spectator<AppComponent>;

  const createComponent = createComponentFactory({
    component: AppComponent,
    mocks: [],
    declarations: [MockComponents()]
  });

  beforeEach(() => {
    spec = createComponent({
      detectChanges: false
    });
    spec.detectChanges();
  });

  it('should create', () => {
    expect(spec.component).toBeTruthy();
  });
});
