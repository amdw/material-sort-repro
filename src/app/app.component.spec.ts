import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { MatSidenavModule, MatCardModule, MatTableModule, MatSortModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        BrowserAnimationsModule,
        MatCardModule,
        MatSidenavModule,
        MatSortModule,
        MatTableModule,
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
