import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { LatheCalcAppComponent } from '../app/lathe-calc.component';

beforeEachProviders(() => [LatheCalcAppComponent]);

describe('App: LatheCalc', () => {
  it('should create the app',
      inject([LatheCalcAppComponent], (app: LatheCalcAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'lathe-calc works!\'',
      inject([LatheCalcAppComponent], (app: LatheCalcAppComponent) => {
    expect(app.title).toEqual('lathe-calc works!');
  }));
});
