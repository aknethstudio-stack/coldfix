# ColdFix (by AKNETH Studio)

[![License: CC BY 4.0](https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)

Krótki opis projektu, wyjaśniający jego cel i główne funkcjonalności.

---

## Technologiczny Stos

*   **Framework:** [Next.js](https://nextjs.org/)
*   **Język:** [TypeScript](https://www.typescriptlang.org/)
*   **UI:** [React](https://reactjs.org/) z [React Bootstrap](https://react-bootstrap.github.io/)
*   **Style:** [Sass](https://sass-lang.com/) / [Bootstrap](https://getbootstrap.com/)
*   **Testowanie:** [Jest](https://jestjs.io/) z [React Testing Library](https://testing-library.com/)
*   **Linting:** [ESLint](https://eslint.org/)
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

### `npm run format`

Formatuje wszystkie pliki w projekcie za pomocą Prettier.
