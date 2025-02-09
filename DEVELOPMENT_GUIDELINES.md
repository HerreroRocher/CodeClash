# DEVELOPMENT GUIDELINES

## General Guidelines
1. **Code Quality**: Ensure your code follows the project's coding standards and best practices. Use ESLint to check for any linting issues.
2. **Commit Messages**: Write clear and concise commit messages. Follow the commit message format described in COMMIT_MESSAGE_GUIDELINES.md.

## Branching Strategy
1. **Feature Branches**: Create a new branch for each feature or bug fix. Use a descriptive name for the branch.
   - Example: `feature/home-page-development`
2. **Development Branch**: The `dev` branch holds the ongoing development work. Do not merge directly into `dev` without following the review process.
3. **Main Branch**: The `main` branch is the stable production-ready branch. Only merge into `main` after thorough testing and team approval.

## Pull Requests
1. **Code Review**: Before merging any code into the `dev` branch, create a pull request and request a code review from at least one team member.
1. **Linting**: Before creating a pull request, run ESLint in the `src` directory to ensure there are no warnings or errors.
   ```sh
   npx eslint .
   ```
2. **Unit Tests**: Ensure all new features and bug fixes are covered by unit tests. Run the tests and make sure they pass before creating a pull request.
3. **Documentation**: Update relevant documentation (e.g., README, comments) to reflect any changes or new features.

## Testing
1. **Unit Tests**: Write unit tests for all new features and bug fixes. Use a testing framework.
2. **Integration Tests**: If applicable, write integration tests to ensure different parts of the application work together as expected.
3. **Manual Testing**: Perform manual testing to verify the functionality of the application. Test different scenarios and edge cases.

## Security
1. **Sensitive Information**: Do not commit sensitive information (e.g., API keys, passwords) to the repository. Use environment variables and add `.env` to `.gitignore`.
2. **Review Code for Vulnerabilities**: Regularly review your code for security vulnerabilities and follow best practices for secure coding.

## Deployment
1. **Build**: Run the build process to generate the production-ready code.
   ```sh
   npm run build