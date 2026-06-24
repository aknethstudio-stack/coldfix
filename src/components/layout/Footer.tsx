'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';

export default function Footer() {
  const [year, setYear] = useState<number | null>(null);
  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  const policyLinks = [
    { href: 'privacy', label: 'Polityka prywatności' },
    { href: 'terms', label: 'Regulamin' },
    { href: 'rodo', label: 'RODO' },
  ];
  return (
    <footer className="bg-dark py-4 mt-auto shadow-sm">
      <Container fluid="md">
        <Row>
          <Col xs={12} md={5} className="align-items-left">
            <p className="px-3">Copyright &copy; {year ?? ''} AKNETH Studio</p>
          </Col>
          <Col xs={12} md={7} className="align-items-right">
            <Nav className="mx-0">
              {policyLinks.map((item) => {
                return (
                  <Nav.Link
                    key={item.href}
                    as={Link}
                    href={`/policies/${item.href}`}
                    className="px-3"
                  >
                    {item.label}
                  </Nav.Link>
                );
              })}
            </Nav>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
