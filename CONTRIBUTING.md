# Zasady Kontrybucji

Dziękujemy za Twoje zainteresowanie i wkład w rozwój tego projektu! Poniższe wytyczne pomogą Ci zrozumieć, jak możesz wnieść swój wkład.

## Jak Zgłaszać Błędy i Proponować Funkcje

*   **Zgłaszanie błędów:** Jeśli znajdziesz błąd, prosimy o skorzystanie z [szablonu zgłaszania błędów](.github/ISSUE_TEMPLATE/bug_report.md) w sekcji "Issues" na GitHubie.
*   **Propozycje funkcji:** Masz pomysł na nową funkcję? Skorzystaj z [szablonu propozycji funkcji](.github/ISSUE_TEMPLATE/feature_request.md).

## Proces Pracy z Kodem

Ten projekt wykorzystuje `git-flow` jako model pracy z gałęziami oraz `Conventional Commits` do formatowania wiadomości commitów.

### 1. Tworzenie Gałęzi

Wszystkie nowe funkcje i poprawki błędów powinny być tworzone z gałęzi `develop`.

*   **Nowa funkcja:**
    ```bash
    git flow feature start nazwa-twojej-funkcji
    ```
    (To stworzy gałąź `feature/nazwa-twojej-funkcji`)

*   **Poprawka błędu:**
    ```bash
    git flow bugfix start nazwa-poprawki
    ```
    (To stworzy gałąź `bugfix/nazwa-poprawki`)

### 2. Pisanie Wiadomości Commitów

Każdy commit w tym projekcie **musi** być zgodny ze specyfikacją [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/). Format jest automatycznie weryfikowany przed każdym commitem.

**Przykłady:**
```
feat: Add user login functionality
fix: Correct calculation in shopping cart
docs: Update installation instructions in README
chore: Add new ESLint rule
```

### 3. Tworzenie Pull Requestu

Po zakończeniu pracy na swojej gałęzi, utwórz Pull Request (PR) skierowany do gałęzi `develop`.

1.  Upewnij się, że Twoja gałąź jest zaktualizowana względem `develop`.
2.  Wypchnij swoją gałąź na zdalne repozytorium (`git push origin nazwa-twojej-galęzi`).
3.  Na GitHubie utwórz Pull Request, korzystając z dostarczonego szablonu.
4.  Opisz dokładnie swoje zmiany i poczekaj na przegląd kodu (code review).

Dziękujemy za Twój wkład!
