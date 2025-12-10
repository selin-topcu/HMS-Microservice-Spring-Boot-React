### BE

* [Install Spring Boot](https://start.spring.io/)
    * Java 21
        * Spring Boot DevTools
        * Spring Web
        * Spring Data JPA

### FE

* [Install Mantine](https://v5.mantine.dev/guides/cra/)
    * npx create-react-app my-mantine-app --template typescript
        * "react": "^18.0.0",
        * "react-dom": "^18.0.0",
    * npm install @mantine/core @mantine/hooks @mantine/form @mantine/dates dayjs @mantine/notifications @mantine/modals
      @emotion/react
* [Install Tailwind CSS](https://v3.tailwindcss.com/docs/guides/create-react-app)
    * npm install -D tailwindcss@3
    * npx tailwindcss init
* Configure your template paths
    * Add the paths to all of your template files in your tailwind.config.js file.
        * ```
          /** @type {import('tailwindcss').Config} */
              module.exports = {
              content: [
              "./src/**/*.{js,jsx,ts,tsx}",
              ],
              theme: {
              extend: {},
              },
              plugins: [],
              }
          ```
    * Add the Tailwind directives to your CSS
        * Add the @tailwind directives for each of Tailwind’s layers to your ./src/index.css file.
            * ```
              @tailwind base;
              @tailwind components;
              @tailwind utilities;
              ```
    * Remove App.test.tsx
    * npm start