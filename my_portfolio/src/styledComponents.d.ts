import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      logo: string;
      bgColor: string;
      main: string;
      header: string;
      body: string;
    };
  }
}
