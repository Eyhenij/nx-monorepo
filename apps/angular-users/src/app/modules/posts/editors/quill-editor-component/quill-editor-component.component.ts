import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ContentChange } from 'ngx-quill';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'app-quill-editor-component',
    template: `
        <quill-editor
          [styles]="{height: '150px'}"
          (onContentChanged)="onEditorChanged($event)"
          [formControl]="editorControl"
        ></quill-editor>`
})
export class QuillEditorComponent implements OnInit {
    @Input()
    public initialValue: string;

    @Output()
    public onEditorContentChange: EventEmitter<string> = new EventEmitter<string>();

    public editorControl: FormControl;

    ngOnInit(): void {
        this.editorControl = new FormControl(this.initialValue);
    }

    public onEditorChanged(event: ContentChange): void {
        this.onEditorContentChange.emit(event.editor.root.innerHTML);
    }

}
