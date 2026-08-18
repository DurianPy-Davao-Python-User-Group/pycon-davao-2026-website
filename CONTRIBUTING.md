# Development Workflow

Welcome to the PyCon Davao 2026 website repository! To ensure a smooth collaboration process, please follow this development workflow.

## 1. Pick an Issue
* Find an issue on our [Project Board](https://github.com/orgs/DurianPy-Davao-Python-User-Group/projects/6) that you'd like to work on.
* **Assign yourself** to the GitHub issue so others know it's being worked on.

## 2. Create a Branch
* Create a new branch using the format: `<type>/pycon-<ticket-id>-task-title`
  * Example: `feat/pycon-201-add-pycon-schedule`
* **Link the branch** to the GitHub ticket so progress is tracked.

## 3. Development & Testing
* Start your development work.
* **CSS Styling**: We use Tailwind CSS. Please utilize CSS variables and avoid arbitrary classes (e.g., `text-[#FFF]`) as much as possible.
* Use **[Conventional Commits](https://www.conventionalcommits.org/)** for all your commit messages (e.g., `feat: add schedule component`, `fix: correct mobile alignment`).
* **Test thoroughly for responsiveness** based on the provided design to ensure it looks great on all screen sizes.

## 4. Submitting a Pull Request
* **Rebase your branch** from the `main` branch if needed before creating the PR to avoid merge conflicts.
* **CI Pipeline**: Ensure that your PR passes all CI checks. This includes security vulnerability checks, ensuring the code is properly linted, and verifying the project builds without errors.
* **Visual Evidence**: Provide recordings or screenshots of your changes. Be sure to test the production build locally by running `npm run build` followed by `npm run start` (which runs `npx serve`). Attach this evidence to your PR.
* Open a Pull Request and fill out the details based on the **PR Template**.
* Ensure that the **PR title also follows Conventional Commits** (e.g., `feat: add schedule component`).
* Assign the PR to the **`durianpy-engineering-leads`** team for review.
* Send the **PR link in the Messenger group chat** to notify the team that it's ready for review.
