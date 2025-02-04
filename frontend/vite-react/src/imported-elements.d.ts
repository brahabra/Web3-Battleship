// custom-elements.d.ts
declare global {
    namespace JSX {
      interface IntrinsicElements {
        'vipps-checkout-button': React.DetailedHTMLProps<
          React.HTMLAttributes<HTMLElement>,
          HTMLElement
        > & {
            type: string,
            brand: string,
            language: string,
            variant: string,
            rounded: string,
            verb: string, 
            stretched: string
            branded: string,
            loading: string,
        };
      }
    }
  }
  
  export {};