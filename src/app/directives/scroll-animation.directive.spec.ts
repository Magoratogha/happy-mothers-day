import { ElementRef, Renderer2 } from '@angular/core';
import { inject } from '@angular/core/testing';
import { ScrollAnimationDirective } from './scroll-animation.directive';
import { AnimationService } from '../services/animation.service';

describe('ScrolledAnimationDirective', () => {
  it('should create an instance', inject([Renderer2, AnimationService], (renderer: Renderer2, animationService: AnimationService) => {
    const el = new ElementRef(null);
    const directive = new ScrollAnimationDirective(el, renderer, animationService);
    expect(directive).toBeTruthy();
  }));
});