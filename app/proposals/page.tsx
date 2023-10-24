"use client";

import { Container } from "react-bootstrap";
import { SearchBar, ProposalList } from "./components";

export default function Proposals() {
    return (
        <Container>
            <SearchBar />
            <ProposalList />
        </Container>
    );
}
