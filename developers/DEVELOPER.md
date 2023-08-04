# Developer Guide

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```
*NOTE*: the app uses environment variables that are configured in the `.env` file. You can create a `.env` file in the root of the project and add the following variables:
`PUBLIC_USERS_API_URI=<INSERT_VAR_NAME>`
```
## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
