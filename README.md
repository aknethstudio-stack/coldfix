# ColdFix - Strona Serwisu Komputerowego

[![License: CC BY 4.0](https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/e1b36776fd4f4a4886c91cd4a3c5dfce)](https://app.codacy.com/gh/aknethstudio-stack/coldfix/dashboard?utm_source=gh&utm_medium=referral&utm_content=&utm_campaign=Badge_grade)

Projekt strony internetowej dla serwisu komputerowego "ColdFix". Celem jest stworzenie nowoczesnej, szybkiej i responsywnej wizytówki firmy, która w przejrzysty sposób zaprezentuje ofertę i ułatwi klientom kontakt.

Styl i struktura projektu są inspirowane minimalistycznym i profesjonalnym designem strony [AKNETH Studio](https://akneth-studio.vercel.app/).

---

## Kluczowe Funkcjonalności

*   **Strona Główna:** Nowoczesna sekcja "hero" z kluczowym przesłaniem i wezwaniem do działania (call to action).
*   **Lista Usług:** Przejrzyste przedstawienie oferty serwisu (np. naprawa sprzętu, odzyskiwanie danych, składanie komputerów, pomoc zdalna).
*   **Sekcja "O Firmie":** Krótkie przedstawienie historii i wartości firmy, budujące zaufanie klientów.
*   **Kontakt:** Formularz kontaktowy, dane adresowe, mapa dojazdu oraz godziny otwarcia.
*   **Pełna Responsywność (RWD):** Strona będzie w pełni funkcjonalna i estetyczna na wszystkich urządzeniach - od telefonów po komputery stacjonarne.

## Technologiczny Stos

*   **Framework:** [Next.js](https://nextjs.org/)
*   **Język:** [TypeScript](https://www.typescriptlang.org/)
*   **UI:** [React](https://reactjs.org/) z [React Bootstrap](https://react-bootstrap.github.io/)
*   **Style:** [Sass](https://sass-lang.com/) / [Bootstrap](https://getbootstrap.com/)
*   **Testowanie:** [Jest](https://jestjs.io/) z [React Testing Library](https://testing-library.com/)
*   **Linting:** [ESLint](https://eslint.org/), [Stylelint](https://stylelint.io/)
*   **Formatowanie:** [Prettier](https://prettier.io/)

## Wymagania

*   [Node.js](https://nodejs.org/) (wersja 22.x, zgodnie z `package.json`)
*   [npm](https://www.npmjs.com/) (wersja >=10.0.0)

## Instalacja

1.  Sklonuj repozytorium:
    ```bash
    git clone https://github.com/aknethstudio-stack/coldfix.git
    ```
2.  Przejdź do katalogu projektu:
    ```bash
    cd coldfix
    ```
3.  Zainstaluj zależności:
    ```bash
    npm install
    ```

## Dostępne Skrypty

W katalogu projektu możesz uruchomić następujące komendy:

### `npm run dev`

Uruchamia aplikację w trybie deweloperskim.
Otwórz [http://localhost:3000](http://localhost:3000), aby zobaczyć ją w przeglądarce.

### `npm run build`

Buduje aplikację do wersji produkcyjnej w folderze `.next`.

### `npm run start`

Uruchamia zbudowaną aplikację w trybie produkcyjnym.

### `npm run test`

Uruchamia testy jednostkowe w trybie interaktywnym.

### `npm run lint`

Sprawdza błędy w kodzie za pomocą ESLint.

### `npm run lint:scss`

Sprawdza błędy w stylach SCSS za pomocą Stylelint.

### `npm run format`

Formatuje wszystkie pliki w projekcie za pomocą Prettier.