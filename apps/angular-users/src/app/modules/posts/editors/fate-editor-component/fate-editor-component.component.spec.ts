import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FateEditorComponent } from './fate-editor-component.component';

describe('FateEditorComponent', () => {
    let component: FateEditorComponent;
    let fixture: ComponentFixture<FateEditorComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [FateEditorComponent]
        })
          .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(FateEditorComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
