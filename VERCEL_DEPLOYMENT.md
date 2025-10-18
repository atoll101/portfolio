# Deploying to Vercel

This guide walks you through deploying your Next.js portfolio to Vercel.

## Why Vercel?

Vercel is the company behind Next.js and offers:
- **Automatic deployments** on every push to main
- **Zero configuration** - detects Next.js automatically
- **Global CDN** for fast page loads worldwide
- **Preview deployments** for pull requests
- **Built-in analytics** and performance monitoring
- **Free tier** for personal projects

## Prerequisites

- GitHub account with your portfolio repository
- Vercel account (free at https://vercel.com)

## Step-by-Step Deployment

### 1. Push Your Code to GitHub

Make sure all your changes are committed and pushed:

```bash
git add .
git commit -m "Migrate to Next.js 15"
git push origin main
```

### 2. Import to Vercel

1. Go to https://vercel.com and sign in (or create an account)
2. Click "Add New..." → "Project"
3. Import your GitHub repository
4. Vercel will automatically detect Next.js settings

### 3. Configure Environment Variables

Before deploying, add your environment variable:

1. In the Vercel project settings, go to "Environment Variables"
2. Add:
   - **Key**: `NEXT_PUBLIC_OPENWEATHER_API_KEY`
   - **Value**: Your OpenWeather API key
   - **Environment**: Production, Preview, Development (select all)

### 4. Deploy

Click "Deploy" and Vercel will:
- Install dependencies (`npm install`)
- Build your Next.js app (`npm run build`)
- Deploy to a global CDN
- Provide you with a deployment URL (e.g., `your-portfolio.vercel.app`)

### 5. Custom Domain Setup

To use your custom domain (yamin.com.au):

1. In your Vercel project, go to "Settings" → "Domains"
2. Add your custom domain: `yamin.com.au`
3. Vercel will provide DNS records to add to your domain registrar:
   - **A Record**: Point to Vercel's IP (usually `76.76.21.21`)
   - **CNAME Record**: `www` pointing to `cname.vercel-dns.com`

4. Update your DNS settings at your domain registrar
5. Wait for DNS propagation (can take up to 48 hours, usually much faster)
6. Vercel will automatically provision an SSL certificate

### 6. Automatic Deployments

From now on, every push to your `main` branch will trigger a new deployment automatically!

## Deployment Settings

Vercel auto-detects these settings for Next.js:

- **Framework Preset**: Next.js
- **Build Command**: `npm run build`
- **Output Directory**: `.next`
- **Install Command**: `npm install`
- **Node Version**: 18.x (or latest LTS)

You don't need to configure these unless you want custom settings.

## Preview Deployments

Every pull request gets its own preview URL so you can test changes before merging to production. This is perfect for testing new features!

## Monitoring & Analytics

Vercel provides built-in:
- **Real-time logs** for debugging
- **Performance analytics** (Core Web Vitals)
- **Function metrics** if you add API routes later

## Environment Variables for Different Environments

You can set different values for:
- **Production**: Live site (yamin.com.au)
- **Preview**: Pull request previews
- **Development**: Local development

## Troubleshooting

### Build Failures

If your build fails:
1. Check the build logs in Vercel dashboard
2. Verify all dependencies are in `package.json`
3. Test the build locally: `npm run build`

### Environment Variables Not Working

- Make sure variable names start with `NEXT_PUBLIC_` for client-side access
- Redeploy after adding new environment variables
- Check the variable is available in all environments (Production, Preview, Development)

### Custom Domain Not Working

- Verify DNS records are correct in your domain registrar
- Wait for DNS propagation (check with https://dnschecker.org)
- Ensure Vercel domain status shows "Valid Configuration"

## Rollback

If something goes wrong:
1. Go to "Deployments" in your Vercel dashboard
2. Find a previous working deployment
3. Click the three dots → "Promote to Production"

## Cost

The free Vercel tier includes:
- Unlimited projects
- Unlimited deployments
- 100GB bandwidth per month
- Custom domains with SSL
- Preview deployments

This is more than enough for a personal portfolio!

## Next Steps

After deploying:

1. ✅ Test your live site at the Vercel URL
2. ✅ Configure your custom domain
3. ✅ Set up analytics (optional)
4. ✅ Remove old cPanel deployment if desired
5. ✅ Update your DNS to point to Vercel

## Support

- Vercel Documentation: https://vercel.com/docs
- Next.js Documentation: https://nextjs.org/docs
- Vercel Community: https://github.com/vercel/vercel/discussions

---

**Ready to deploy?** Head to https://vercel.com and get started! 🚀
