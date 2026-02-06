# How to Deploy Your Portfolio

You can easily deploy your portfolio to the web for free. Here are the two best options:

## Option 1: Netlify Drop (Easiest)
This method is perfect if you want a link in seconds without using command line tools.

1. Go to [app.netlify.com/drop](https://app.netlify.com/drop).
2. Open your file explorer on your computer.
3. Locate the folder `portfolio_khushi` (likely in `C:\Users\khush\.gemini\antigravity\scratch\`).
4. **Drag and drop the entire folder** onto the Netlify page.
5. Netlify will upload it and give you a random URL (e.g., `peaceful-ocean-123.netlify.app`).
6. You can rename the site in "Site Settings" -> "Change site name" to something like `khushi-portfolio.netlify.app`.

## Option 2: GitHub Pages (Best for updates)
This method is better if you want to keep updating your site and have it hosted on your GitHub profile.

1. **Create a new Repository on GitHub** (e.g., named `portfolio`).
2. Open a terminal in your project folder (`C:\Users\khush\.gemini\antigravity\scratch\portfolio_khushi`).
3. Run the following commands:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/khushiarora0208/YOUR-REPO-NAME.git
   git push -u origin main
   ```
   *(Replace `YOUR-REPO-NAME` with the actual name)*

4. Once pushed, go to your repository on GitHub.
5. Go to **Settings** > **Pages**.
6. Under **Source**, select `main` branch and click **Save**.
7. Your site will be live at `https://khushiarora0208.github.io/portfolio/`.
