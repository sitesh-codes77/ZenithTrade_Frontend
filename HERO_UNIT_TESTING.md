# Unit Testing `Hero.jsx`

This guide adds unit testing to the `frontend` React/Vite application using:

- [Vitest](https://vitest.dev/) as the test runner
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) for rendering and querying the component
- `@testing-library/jest-dom` for readable DOM assertions

The test targets `src/landing_page/home/Hero.jsx`.

## 1. Open the frontend directory

Run these commands from the repository root:

```bash
cd frontend
```

On PowerShell, the path can also be written as:

```powershell
Set-Location .\frontend
```

## 2. Install the testing packages

```bash
npm install --save-dev vitest jsdom @testing-library/react @testing-library/jest-dom
```

## 3. Add a test script

Open `frontend/package.json` and add the following entry inside `scripts`:

```json
"test": "vitest"
```

The scripts section should contain at least:

```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "lint": "eslint .",
  "test": "vitest",
  "preview": "vite preview"
}
```

## 4. Configure Vitest in Vite

Update `frontend/vite.config.js` so Vitest uses the browser-like `jsdom` environment and the setup file:

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    setupFiles: './src/test/setup.js',
    css: true,
  },
})
```

## 5. Create the test setup file

Create `frontend/src/test/setup.js`:

```js
import '@testing-library/jest-dom/vitest'
```

This enables assertions such as `toBeInTheDocument()` and `toHaveAttribute()`.

## 6. Create the `Hero` unit test

Create `frontend/src/landing_page/home/Hero.test.jsx`:

```jsx
import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import Hero from './Hero'

describe('Hero', () => {
  it('renders the main hero content', () => {
    render(<Hero />)

    expect(
      screen.getByRole('heading', { name: 'Invest in Everything' }),
    ).toBeInTheDocument()

    expect(
      screen.getByText(
        'Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more',
      ),
    ).toBeInTheDocument()

    expect(
      screen.getByRole('img', { name: 'Homesection Hero' }),
    ).toBeInTheDocument()

    expect(
      screen.getByRole('button', { name: 'Signup Now' }),
    ).toBeInTheDocument()
  })
})
```

## 7. Run the test

Run a single test command:

```bash
npm test -- --run
```

Expected result:

```text
1 test passed
```

For watch mode, which reruns tests after file changes, use:

```bash
npm test
```

Press `q` to stop watch mode.

## 8. Run only the `Hero` test

```bash
npx vitest run src/landing_page/home/Hero.test.jsx
```

To see the test name and detailed results:

```bash
npx vitest run src/landing_page/home/Hero.test.jsx --reporter=verbose
```

## 9. What this test verifies

The test verifies that `Hero` renders:

1. The heading `Invest in Everything`.
2. The investment-platform description.
3. An image with the accessible name `Homesection Hero`.
4. A `Signup Now` button.

The button currently has no click handler in `Hero.jsx`, so this test checks that it is rendered. Add a separate interaction test only after the button is connected to navigation or another action.

## 10. Troubleshooting

### `vitest` is not recognized

Make sure the dependencies were installed from the `frontend` directory:

```bash
npm install
```

### `document is not defined`

Confirm that `vite.config.js` contains:

```js
test: {
  environment: 'jsdom',
}
```

### `toBeInTheDocument is not a function`

Confirm that `src/test/setup.js` contains:

```js
import '@testing-library/jest-dom/vitest'
```

and that `vite.config.js` points to that file with `setupFiles`.

### The image import causes a test error

Vitest handles Vite asset imports when the test is run through the Vite configuration. Run the test with `npm test -- --run` or `npx vitest`, rather than executing the test file directly with Node.
