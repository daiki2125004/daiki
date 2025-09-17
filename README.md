# daiki

This repository contains a static website that can be published automatically to GitHub Pages. The deployment workflow in [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) uploads the contents of the repository and publishes them to the `github-pages` environment whenever changes are pushed to the `main` branch or when the workflow is run manually.

## Deploying to GitHub Pages

1. Open the **Settings** tab of your GitHub repository and navigate to **Pages**.
2. Under **Build and deployment**, choose **GitHub Actions** as the source.
3. Save the settings if prompted.
4. Push a commit to the `main` branch or trigger the **Deploy to GitHub Pages** workflow manually from the **Actions** tab to publish the site.

The workflow uses the recommended `actions/configure-pages`, `actions/upload-pages-artifact`, and `actions/deploy-pages` actions to handle the deployment process.
