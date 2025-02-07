# COMMIT MESSAGE GUIDELINES

## Purpose
Clear and consistent commit messages help in understanding the history of a project and make it easier to track changes, debug issues, and collaborate with team members.

## Commit Message Format
A commit message consists of a **header**, **body**, and **footer**. The header is mandatory, while the body and footer are optional.

### Header
The header has the following format:
<type>(<scope>): <subject>

- **type**: Describes the kind of change that this commit is introducing.
- **scope**: Provides additional contextual information about the change (optional).
- **subject**: A brief description of the change.

### Types
Commonly used types include:
- `feat`: A new feature.
- `fix`: A bug fix.
- `docs`: Documentation only changes.
- `style`: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc).
- `refactor`: A code change that neither fixes a bug nor adds a feature.
- `perf`: A code change that improves performance.
- `test`: Adding missing tests or correcting existing tests.
- `build`: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm).
- `ci`: Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs).
- `chore`: Other changes that don't modify src or test files.
- `revert`: Reverts a previous commit.

### Examples
feat(auth): add JWT authentication

fix(api): handle edge case for user input

docs(readme): update installation instructions

style: format code with Prettier

refactor: simplify user authentication logic

perf: improve database query performance

test: add unit tests for user service

build: update dependencies

ci: configure Travis CI

chore: update .gitignore

revert: revert "feat(auth): add JWT authentication"

## Best Practices
1. **Use the imperative mood**: Write the subject line in the imperative mood (e.g., "Add feature" instead of "Added feature").
2. **Limit the subject line to 50 characters**: Keep the subject line concise and to the point.
3. **Separate the subject from the body with a blank line**: If you include a body, separate it from the subject with a blank line.

By following these guidelines, we can maintain a clear and consistent commit history that is easy to understand and navigate.