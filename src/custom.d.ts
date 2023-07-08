declare module "*.svg" {
    import * as React from "react";

    export const ReactComponent: React.FunctionComponent<
        React.SVGProps<SVGSVGElement>>;

}

// see https://stackoverflow.com/a/45887328