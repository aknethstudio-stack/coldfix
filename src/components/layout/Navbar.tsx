'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react';
import { Navbar as RBNavbar, Nav, Container } from 'react-bootstrap';

const menuItems = [
  { href: '/', label: 'Strona główna' },
  { href: '/about', label: 'O nas' },
  { href: '/services', label: 'Usługi' },
  { href: '/contact', label: 'Kontakt' },
];

const Navbar = () => {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof document !== 'undefined') {
      import('bootstrap/dist/js/bootstrap.bundle.min.js');
    }
  }, []);

  const navRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (typeof document === 'undefined') return;
    const prevPadding = document.body.style.paddingTop;

    const updatePadding = () => {
      const el = navRef.current as HTMLElement | null;
      if (el) {
        const h = Math.ceil(el.getBoundingClientRect().height);
        document.body.style.paddingTop = `${h}px`;
      }
    };

    updatePadding();
    window.addEventListener('resize', updatePadding);
    return () => {
      window.removeEventListener('resize', updatePadding);
      document.body.style.paddingTop = prevPadding;
    };
  }, []);

  return (
    <RBNavbar
      ref={navRef}
      expand="md"
      variant="dark"
      className="shadow-sm navbar-custom"
      fixed="top"
    >
      <Container fluid>
        <RBNavbar.Brand as={Link} href="/" className="d-inline-flex align-items-center">
          <Image src="/logo.png" alt="ColdFix logo" width={48} height={48} priority />
          <span className="ms-2 d-none d-md-inline-block brand-text">
            ColdFix
            <span className="brand-subtext">by AKNETH Studio</span>
          </span>
        </RBNavbar.Brand>
        <RBNavbar.Toggle aria-controls="main-navbar" />
        <RBNavbar.Collapse id="main-navbar">
          <Nav className="mx-auto">
            {menuItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Nav.Link
                  key={item.href}
                  as={Link}
                  href={item.href}
                  active={isActive}
                  className="px-3"
                >
                  {item.label}
                </Nav.Link>
              );
            })}
          </Nav>

          <div className="d-none d-md-block">
            <Link href="/contact" className="btn btn-cta">
              Wycena naprawy
            </Link>
          </div>
        </RBNavbar.Collapse>
      </Container>
    </RBNavbar>
  );
};

export default Navbar;
