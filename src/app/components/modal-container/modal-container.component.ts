import { Component, OnInit, OnDestroy, Renderer2, Inject, Output, EventEmitter } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-modal-container',
  templateUrl: './modal-container.component.html',
  styleUrls: ['./modal-container.component.scss']
})
export class ModalContainerComponent implements OnInit, OnDestroy {

  /**
   * @name constructor
   * @param renderer object for manage the DOM of the navigator
   * @param document reference to the DOCUMENT object
   */
  constructor(private renderer: Renderer2,
              @Inject(DOCUMENT) private document: any) { }

  /**
   * @name ngOnInit
   * @description modifies the style of the document to hide the overflow
   */
  ngOnInit(): void {
    this.renderer.setStyle(this.document.body, 'overflow', 'hidden');
  }

  /**
   * @name ngOnDestroy
   * @description modifies the style of the document to show the overflow
   */
  ngOnDestroy(): void {
    this.renderer.setStyle(this.document.body, 'overflow', 'visible');
  }

}
