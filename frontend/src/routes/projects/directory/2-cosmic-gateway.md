---
search: false
id: 2
title: Cosmic Gateway
---

Cosmic-Gateway is one 3 internal tooling projects at UBC Launch Pad. This project specifically, focuses on developing all of Launch Pad’s client-facing interfaces; this includes our internal member management portal, club docs and landing page.

## Roadmap

Some of the more prominent features to be added soon

- [ ] Recruitment page for leads
- [ ] Posting application user flow
  - [ ] Applications section for applicants
  - [ ] post editing
- [ ] Sponsors page
- [ ] Landing page
- [ ] Portal dashboard

---

## How it works

The project under the hood is a Svelte-kit project that consumes all our backend endpoints. Our approach is to separate responsibilities and Cosmic-Gateway focuses on the client-side.

**Architecture**
To achieve good performance, we use a combination of SSR and CSR. Additionally, with the help of Sveltekit and Vite, it’s achieved optimal performance

Moreover, we use TypeScript and SCSS for better type-checking and style scoping.

## Contributing

Everyone is welcome to contribute to the project. You can contribute via two ways:

- you can give us feedback to add a feature or bug reports in the [Issues](https://github.com/ubclaunchpad/Essentially/issues) section of this repository
- Alternatively, if you see an open issue you'd like to work on (we suggest ones with [good first issue](https://github.com/ubclaunchpad/Essentially/issues?q=is%3Aopen+is%3Aissue+label%3A%22good+first+issue%22) label if it's your first time contributing), comment on the issue to be assigned and fork the repository. Once you've resolved the issue, make a PR and one of the team members can review.

⠀*side note: Any Launchpad member that wants to be a bit more hands-on on this project, and be involved in the decision-making as well, please message one of the team members.*
