import { Component, Input, Output, EventEmitter, HostBinding, ViewEncapsulation } from '@angular/core';
import { mdPhrasingContent, mdDefinition, mdLink, mdLinkReference } from '../tree/tree-types';
import { MarkdownTree } from '../tree/tree.service';
import { MarkdownRoot } from '../markdown.component';

@Component({
  selector: '[wm-inline]',
  templateUrl: './inline.component.html',
  styleUrls: ['./inline.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MarkdownInline { 

  @Input('wm-inline') node: mdPhrasingContent;

  constructor(readonly tree: MarkdownTree, private root: MarkdownRoot) {}
  
  get children() { return ("children" in this.node) ? this.node.children : [] }

  // Text rendering helper
  public _T(value: string) { return value || ''; }

  // Navigation helper functions
  public navigate(url: string): boolean {
    // Relies on the root parent navigation mechanism 
    this.root.navigate.emit(url);
    // Prevents default navigation towards href
    return false;
  }
}