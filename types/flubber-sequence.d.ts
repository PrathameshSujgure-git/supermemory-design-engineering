declare module 'flubber' {
  // Augment missing declaration for flubber.sequence
  // Signature mirrors other helpers: takes a list of shapes and returns an interpolator
  export function sequence(
    shapes: import('flubber').Shape[],
    options?: import('flubber').Options
  ): import('flubber').Interpolator;
}


