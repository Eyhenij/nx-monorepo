import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-tiny-editor-component',
    template: `
        <editor
          [init]="{
            height: 500,
            menubar: false,
            plugins: [
                'advlist autolink lists link image charmap print preview anchor',
                'searchreplace visualblocks code fullscreen',
                'insertdatetime media table paste code help wordcount'
            ],
            toolbar:
           'undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help'
        }"
        ></editor>`
})
export class TinyEditorComponent {
    @Output()
    public onEditorContentChange: EventEmitter<string> = new EventEmitter<string>();

    public onEditorChange(event): void {
        this.onEditorContentChange.emit(event);
    }

}
