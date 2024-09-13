export type Detail = {
    [key: string]: any;
}

// Interfaces for styling and interaction
export interface Stylable {
    style?: React.CSSProperties;
    tailwindClass?: string;
  }
  
  export interface Interactable {
    onTouchStart?: (props?: any) => any;
    onTouchEnd?: (props?: any) => any;
    onClick?: (props?: any) => any;
  }
  
  export interface BasicConfig {
    container?: Stylable & Interactable;
    keyValueContainer?: Stylable & Interactable;
    keyRef?: Stylable & Interactable;
    value?: Stylable & Interactable;
  }

export type MappedDetails<T extends object, Prefix extends string, ConfigType> = {
    [K in keyof T as `${Prefix}${Capitalize<string & K>}`]?: ConfigType;
};

