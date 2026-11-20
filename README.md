# Naples Pizza Careers Site 🍕

A multi-page React website for a local pizza restaurant's hiring process. Visitors can browse job openings, estimate how qualified they are for a role, apply online, and contact the restaurant.

Built by [Himani Kumar](https://github.com/kumar-himani) and [Nikita Nayunipati](https://github.com/nikitavn) for the FBLA 2024 Website Coding & Development event.

> **Student project.** This is not the official Naples Pizza job site. It was built for an FBLA competition, and the restaurant's name is used with permission. The forms don't send anything to Naples Pizza.

<img width="3416" height="1776" alt="image" src="https://github.com/user-attachments/assets/e4a55a50-1315-4ef9-ac42-55495ff8dc72" />


## Features
- **Careers page:** expandable job descriptions by department, plus a qualification calculator
- **Apply Now:** a full job application with inline validation, a "save as draft" option that reloads when you come back, resume and cover letter uploads, and a confirmation screen
- **Contact Us:** a validated contact form with an embedded map
- **Login/Sign Up (demo):** creates accounts in the browser, with salted SHA-256 password hashing so passwords are never stored as plain text

## How it works
There's no backend, so applications, messages, drafts, and demo accounts are saved in the browser's `localStorage`. Validation logic lives in `src/utils/validation.js` and is shared by every form. A real version would send this data to a server and handle accounts there.

## 2026 updates
I came back to this project in 2026 to make the forms actually work. Originally they were UI only.
- Added validation, error messages, and confirmation states to every form
- Built the demo account system (`src/utils/auth.js`)
- Fixed a layout bug in the application form and replaced some hiring questions with the ones real applications use
- Added Jest and React Testing Library tests for validation, accounts, and both forms
- Added a GitHub Actions workflow that runs the tests and a production build on every push

## Tech
React 18, React Router, Bootstrap, Jest, React Testing Library, GitHub Actions

## Running it
```
cd react-multi-page-website
npm install
npm start
```
Then open http://localhost:3000. Run the tests with `npm test`.
