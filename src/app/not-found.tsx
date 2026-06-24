import CTAButton from '@/components/CTAButton';
import Image from 'next/image';
import Link from 'next/link';
import { Container, Row, Col } from 'react-bootstrap';
import styles from '@/styles/404.module.scss';

import { Fira_Code } from 'next/font/google';

const firaCode = Fira_Code({ subsets: ['latin'] });

export default function NotFound() {
  return (
    <>
      <Container className={`my-5 ${styles['error-page-container']}`}>
        <Row className="align-items-center">
          <Col md={6} className="text-center">
            <div className={`${firaCode.className} ${styles['error-page']}`}>
              <h1>404</h1>
              <h5>Taka strona nie istnieje!</h5>
            </div>
            <div className="my-4">
              <p>Przepraszamy, ale wybrana strona nie istnieje.</p>
              <p>
                Możesz wrócić do{' '}
                <Link href="/" aria-label="Strona główna">
                  strony głównej
                </Link>{' '}
                lub skorzystać z menu nawigacyjnego.
              </p>
            </div>
            <div className={`mt-4`}>
              <CTAButton
                type="button"
                to="/"
                variant="primary"
                size="lg"
                text="Wróć do strony głównej"
                className={styles['button-container'] || ''}
              />
            </div>
          </Col>
          <Col md={6} className="text-end">
            <div className={styles['image-mask']}>
              <Image
                src="/img/404.svg"
                alt="404 - Taka strona nie istnieje!"
                className="img-fluid my-4"
                width={500}
                height={500}
                priority
              />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
