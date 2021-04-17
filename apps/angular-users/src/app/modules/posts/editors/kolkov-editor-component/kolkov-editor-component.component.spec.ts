import { ComponentFixture, TestBed } from '@angular/core/testing';
import { KolkovEditorComponent } from './kolkov-editor-component.component';

describe('KolkovEditorComponent', () => {
    let component: KolkovEditorComponent;
    let fixture: ComponentFixture<KolkovEditorComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [KolkovEditorComponent]
        })
          .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(KolkovEditorComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
