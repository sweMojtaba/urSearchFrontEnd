'use client'

import { PropsWithChildren } from "react"
import { Container } from "react-bootstrap"

export function ClientContainer(props: PropsWithChildren<{}>) {
    return <Container>
        {props.children}
    </Container>
}