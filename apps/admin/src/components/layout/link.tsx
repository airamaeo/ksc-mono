import {Link as RouterLink} from '@tanstack/react-router'
import type React from "react";

type LinkProps = React.ComponentPropsWithoutRef<typeof RouterLink>

export function Link (props: LinkProps) {
    return (
        <RouterLink {...props} />
    )
}