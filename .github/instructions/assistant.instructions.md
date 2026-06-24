---
description: Assistant customization instructions for this repository
applyTo: '**'
---

Assistant instructions (applies to all files unless stated otherwise)

1. Comment language

- All code comments, docstrings, JSDoc/TSDoc, and inline notes must be written in English.
- When adding explanations for functions, components, or complex logic, use clear, grammatical English suitable for international collaborators.

2. Allowed comment content

- Comments are only for documentation and precise developer intent (explain why something exists, public API usage, algorithm rationale, parameters, return values).
- Do NOT add comments that describe repository maintenance actions, vague change notes, or conversational notes (e.g., "zmiana ścieżki pliku...", "change for easier collaboration").
- Acceptable comment types: public API docs, implementation rationale, `TODO:` with owner and priority, `FIXME:` with repro steps.

3. Respect user assumptions and constraints

- If the user requests an implementation "according to my assumptions", implement exactly as requested.
- Do not propose changing libraries, frameworks, or design choices as part of the implementation (for example, do NOT suggest switching Sass → CSS or replacing a stated dependency) unless the user explicitly asks for such a change.
- If you believe a change is necessary for security or correctness, ask the user for confirmation first and explain the specific risk or breakage that motivates the change.

4. When proposing alternatives

- Always present alternatives only after completing the requested task or after receiving explicit permission to refactor.
- If you must present a breaking alternative to prevent a critical failure, label it clearly as "Breaking change proposal" and require user approval before applying.

5. Clarifying questions and ambiguity

- If a user instruction is ambiguous, ask exactly 1–2 concise clarifying questions before making changes.
- Examples of good clarifying questions: "Should this component use the existing `styles` module or a new variant?" or "Should I keep existing Sass partials as-is while adding this feature?"

6. On edit comments and commit messages

- Commit messages should be factual and succinct. Keep change rationale in commit body when large.
- Do not place conversational or speculative notes into commits or source comments.

7. Enforcement and examples

- When editing files, ensure all added comments follow rule (1) and (2).
- Example (good): function header with JSDoc explaining parameters and return values in English.
- Example (bad): TODO comments in Polish or vague notes like "adjust later for easier collaboration".

8. Scope and overrides

- These rules apply repository-wide by default. For exceptions (single-file or third-party vendor files), explicitly annotate the exception in the PR description and get user approval.

If anything here is unclear or you want it narrowed to specific file types (e.g., only src/), tell me which parts to restrict and I will update this file.
