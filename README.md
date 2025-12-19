
### Intellij IDEA React Settings
* File -> Settings -> Editor -> Live Templates -> React
    * add rafce
        ```
        import React from 'react';
      
        const $COMPONENT$ = () => {
        return (
        <div>$COMPONENT$</div>
        );
        };
      
        export default $COMPONENT$;
        ```
        * edit variables -> expression -> fileNameWithoutExtension()

* File -> Settings -> Editor -> Code Style -> HTML -> Other ->  Add braces for JSX attributes : Quotes

### BE

* [Install Spring Boot](https://start.spring.io/)
    * Java 21
        * Spring Boot DevTools
        * Spring Web
        * Spring Data JPA

### FE

* [Install Mantine](https://v5.mantine.dev/guides/cra/)
    * `npx create-react-app my-mantine-app --template typescript`
        * "react": "^18.0.0",
        * "react-dom": "^18.0.0",
    * `npm install @mantine/core @mantine/hooks @mantine/form @mantine/dates dayjs @mantine/notifications @mantine/modals
      @emotion/react`
* [Install Tailwind CSS](https://v3.tailwindcss.com/docs/guides/create-react-app)
    * `npm install -D tailwindcss@3`
    * `npx tailwindcss init`
* Configure your template paths
    * Add the paths to all of your template files in your tailwind.config.js file.
      ```
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
          ```
          @tailwind base;
          @tailwind components;
          @tailwind utilities;
          ```
    * Remove App.test.tsx
    * npm start

### Header

* [Mantine.dev](https://mantine.dev/getting-started/)
    * Wrap your application with MantineProvider:
      ```
      import { createTheme, MantineProvider } from '@mantine/core';
      
      const theme = createTheme({
      /** Put your mantine theme override here */
      });
      
      function Demo() {
      return (
      <MantineProvider theme={theme}>
      {/* Your app here */}
      </MantineProvider>
      );
      }
      ```
    * Add color codes and theme
      ```
      const theme = createTheme({
      colors:{
      primary: ['#f1fcfa', '#cff8ef', '#9ff0e1', '#67e1cf', '#32b9a9', '#1fad9f', '#168b82', '#166f69', '#165955', '#174a47', '#072c2b'],
      neutral: ['#f6f6f6', '#e7e7e7', '#d1d1d1', '#b0b0b0', '#888888', '#6d6d6d', '#5d5d5d', '#4f4f4f', '#454545', '#3d3d3d', '#000000',]
      }
      });
      ```
    * Color sites
      * [uicolors](https://uicolors.app/)
      * [colorhunt](https://colorhunt.co/palettes/popular)
      * [mantine](https://mantine.dev/theming/colors/) 
    * [Mantine Style](https://mantine.dev/styles/mantine-styles/)
      * add `import '@mantine/core/styles.css';`
  * tailwind.config.js 
  ```
   theme: {
        extend: {
            colors: {
                primary: {
                    '50': '#f0fdfa',
                    '100': '#ccfbf1',
                    '200': '#99f6e4',
                    '300': '#5eead4',
                    '400': '#2dd4bf',
                    '500': '#14b8a6',
                    '600': '#0d9488',
                    '700': '#0f766e',
                    '800': '#115e59',
                    '900': '#134e4a',
                    '950': '#042f2e',
                },
                'neutral': {
                    '50': '#f6f6f6',
                    '100': '#e7e7e7',
                    '200': '#d1d1d1',
                    '300': '#b0b0b0',
                    '400': '#888888',
                    '500': '#6d6d6d',
                    '600': '#5d5d5d',
                    '700': '#4f4f4f',
                    '800': '#454545',
                    '900': '#3d3d3d',
                    '950': '#000000',

                },
                'dark': "#212529",
                'light': "#F0F3FB"
            }
        },
    },
  ```
  
* App.tsx
    ```
    import { MantineProvider } from '@mantine/core';
    import '@mantine/core/styles.css';
    
    function App() {
        return (
        <MantineProvider
            theme={{
            colors: {
                primary: ['#f0fdfa', '#ccfbf1', '#99f6e4', '#5eead4', '#2dd4bf', '#14b8a6', '#0d9488', '#0f766e', '#115e59', '#134e4a', '#042f2e'],
                neutral: ['#f6f6f6', '#e7e7e7', '#d1d1d1', '#b0b0b0', '#888888', '#6d6d6d', '#5d5d5d', '#4f4f4f', '#454545', '#3d3d3d', '#000000'],
            },
            }}
        >
            {/* Your app here */}
        </MantineProvider>
        );
    }
    
    export default App;
    ```
* Add [font](https://fonts.google.com/)
  * Merriweather
  * Poppins
  * Add to index.html
  ```
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Merriweather:ital,opsz,wght@0,18..144,300..900;1,18..144,300..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
  ```
  * Add to talwind.config.js
  ```
   fontFamily: {
       'body': ['Poppins', 'sans-serif'],
       'sans': ['Poppins', 'sans-serif'],
       'heading': ['Merriweather', 'serif'],
    },
  ```
  * Add to App.tsx
  ```
    fontFamily: "Poppins, sans-serif",
    headings: {fontFamily: "Merriweather, serif"},
  ```
  * Add [icon](https://tabler.io/icons)
    * `npm install @tabler/icons-react`
  * Add [menu](https://mantine.dev/core/menu/)
    ```
    import { Menu, Button, Text } from '@mantine/core';
    import {
    IconSettings,
    IconSearch,
    IconPhoto,
    IconMessageCircle,
    IconTrash,
    IconArrowsLeftRight,
    } from '@tabler/icons-react';
    
    const ProfileMenu = () => {
    return (
    <Menu shadow="md" width={200}>
    <Menu.Target>
    <Button>Toggle menu</Button>
    </Menu.Target>

            <Menu.Dropdown>
                <Menu.Label>Application</Menu.Label>
                <Menu.Item leftSection={<IconSettings size={14} />}>
                    Settings
                </Menu.Item>
                <Menu.Item leftSection={<IconMessageCircle size={14} />}>
                    Messages
                </Menu.Item>
                <Menu.Item leftSection={<IconPhoto size={14} />}>
                    Gallery
                </Menu.Item>
                <Menu.Item
                    leftSection={<IconSearch size={14} />}
                    rightSection={
                        <Text size="xs" c="dimmed">
                            ⌘K
                        </Text>
                    }
                >
                    Search
                </Menu.Item>

                <Menu.Divider />

                <Menu.Label>Danger zone</Menu.Label>
                <Menu.Item
                    leftSection={<IconArrowsLeftRight size={14} />}
                >
                    Transfer my data
                </Menu.Item>
                <Menu.Item
                    color="red"
                    leftSection={<IconTrash size={14} />}
                >
                    Delete my account
                </Menu.Item>
            </Menu.Dropdown>
        </Menu>
    );
    }
    
    export default ProfileMenu;
    ```
    * Add [action icon](https://mantine.dev/core/action-icon/)
      * ```
         <ActionIcon variant="transparent" size="xl" aria-label="Settings">
                <IconLayoutSidebarLeftCollapseFilled style={{ width: '70%', height: '70%' }} stroke={1.5} />
         </ActionIcon>
        ```
    * Add [avatar](https://mantine.dev/core/avatar/)
      * `<Avatar src="avatar.png" alt="it's me" />`

* Add [router](https://www.w3schools.com/react/react_router.asp)
* Add [use-form](https://mantine.dev/form/use-form)
* Add [segment control](https://mantine.dev/core/segmented-control/)