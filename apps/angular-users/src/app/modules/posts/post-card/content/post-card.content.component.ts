import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-post-card-content',
    templateUrl: './post-card.content.component.html',
    styleUrls: ['./post-card.content.component.scss']
})
export class PostCardContentComponent {
    @Input()
    public content: string;
    @Input()
    public editPostMode: boolean;

    @Output()
    public onChangeContent: EventEmitter<string> = new EventEmitter<string>();

    public onChange(event: string): void {
        this.onChangeContent.emit(event);
    }
}
