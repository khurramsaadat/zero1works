# Hostinger Deployment Guide
## Zero One Works Ltd Website - www.zerooneworks.com

**Date**: 2025-01-27  
**Project**: Zero One Works Ltd Website  
**Domain**: www.zerooneworks.com  
**Hosting**: Hostinger Shared Hosting  
**Deployment Method**: File Manager (hPanel)  
**Final Status**: ✅ Production Ready with Video Background

---

## Pre-Deployment Checklist ✅

### Build Status
- ✅ **Build Successful**: No errors, only minor warnings
- ✅ **Static Export Ready**: 80 files in `out/` folder
- ✅ **All Pages Generated**: Home, Portfolio, Services, About, Process, Blog
- ✅ **Assets Optimized**: Images, CSS, JavaScript files ready
- ✅ **Responsive Design**: Mobile and desktop optimized
- ✅ **Video Background**: earth-rotating.mp4 with perfect gradient overlay
- ✅ **Contact Info Updated**: khurram@zerooneworks.com, Manchester UK
- ✅ **Favicon Complete**: All device sizes included

### File Structure Ready
```
out/
├── index.html (Main homepage)
├── about/index.html
├── blog/index.html
├── portfolio/index.html
├── process/index.html
├── services/index.html
├── images/ (All portfolio images)
├── _next/ (Next.js optimized assets)
└── [Other static assets]
```

---

## Step-by-Step Deployment Instructions

### Step 1: Access Hostinger hPanel
1. **Login to Hostinger**: Go to [hostinger.com](https://hostinger.com) and login
2. **Navigate to hPanel**: Click on your hosting account
3. **Open File Manager**: Look for "File Manager" in the hPanel dashboard

### Step 2: Prepare the Upload
1. **Navigate to public_html**: This is your website's root directory
2. **Clear existing files** (if any): Delete any existing files in public_html
3. **Create backup** (optional): Download existing files if you want to keep them

### Step 3: Upload Website Files
1. **Select all files** from your local `out/` folder
2. **Upload to public_html**: 
   - Drag and drop all files from `out/` folder
   - OR use "Upload Files" button in File Manager
3. **Verify upload**: Ensure all 80 files are uploaded successfully

### Step 4: Set Permissions (if needed)
1. **Check file permissions**: Most files should be 644
2. **Check folder permissions**: Folders should be 755
3. **Fix if needed**: Right-click files → Properties → Permissions

### Step 5: Test Your Website
1. **Visit your domain**: Go to www.zerooneworks.com
2. **Test all pages**:
   - Homepage: www.zerooneworks.com
   - Portfolio: www.zerooneworks.com/portfolio
   - Services: www.zerooneworks.com/services
   - About: www.zerooneworks.com/about
   - Process: www.zerooneworks.com/process
   - Blog: www.zerooneworks.com/blog

### Step 6: Verify Functionality
- ✅ **Navigation**: All menu links working
- ✅ **Images**: Portfolio images loading correctly
- ✅ **Responsive**: Mobile and desktop views
- ✅ **Contact Forms**: Forms are functional
- ✅ **Performance**: Fast loading times

---

## Important Notes

### File Structure on Hostinger
```
public_html/
├── index.html (Homepage)
├── about/
│   └── index.html
├── blog/
│   └── index.html
├── portfolio/
│   └── index.html
├── process/
│   └── index.html
├── services/
│   └── index.html
├── images/
│   └── portfolio/
│       ├── finance-platform.jpg
│       ├── pdf-tools.jpg
│       ├── personality-app.jpg
│       └── [other portfolio images]
├── _next/
│   └── [Next.js optimized assets]
└── [other static files]
```

### Domain Configuration
- **Domain**: www.zerooneworks.com
- **DNS**: Already pointed to Hostinger nameservers ✅
- **SSL**: Should be automatically enabled by Hostinger

### Performance Optimization
- **Static Files**: All files are pre-built and optimized
- **Images**: Compressed and optimized for web
- **CSS/JS**: Minified and bundled for performance
- **Caching**: Static files will be cached by browsers

---

## Troubleshooting

### Common Issues & Solutions

#### 1. 404 Errors
- **Problem**: Pages not found
- **Solution**: Ensure all files are in correct directories
- **Check**: File paths match the folder structure

#### 2. Images Not Loading
- **Problem**: Portfolio images not displaying
- **Solution**: Verify `images/portfolio/` folder is uploaded
- **Check**: Image file permissions (644)

#### 3. CSS/JS Not Loading
- **Problem**: Styling or functionality broken
- **Solution**: Ensure `_next/` folder is uploaded completely
- **Check**: All JavaScript and CSS files are present

#### 4. Slow Loading
- **Problem**: Website loads slowly
- **Solution**: Enable compression in hPanel
- **Check**: File sizes are optimized (they are!)

### File Manager Tips
- **Upload in batches**: If upload fails, try smaller batches
- **Check file sizes**: Large files may timeout
- **Verify completion**: Ensure all files uploaded successfully

---

## Post-Deployment Checklist

### Technical Verification
- [ ] Homepage loads correctly
- [ ] All navigation links work
- [ ] Portfolio images display
- [ ] Contact forms are functional
- [ ] Mobile responsive design
- [ ] Fast loading times
- [ ] SSL certificate active

### Content Verification
- [ ] Company logo displays correctly
- [ ] All portfolio projects show
- [ ] Services information accurate
- [ ] Contact information correct
- [ ] Social media links work

### SEO & Performance
- [ ] Meta tags present
- [ ] Page titles correct
- [ ] Images have alt text
- [ ] Mobile-friendly
- [ ] Fast loading (< 3 seconds)

---

## Support & Maintenance

### Regular Updates
- **Content Updates**: Use File Manager to replace individual files
- **Image Updates**: Upload new images to `images/portfolio/`
- **Code Updates**: Rebuild locally and upload new files

### Backup Strategy
- **Local Backup**: Keep your source code safe
- **Hostinger Backup**: Use Hostinger's backup feature
- **Regular Backups**: Monthly backups recommended

### Performance Monitoring
- **Google PageSpeed**: Test website performance
- **Mobile Testing**: Check mobile responsiveness
- **Browser Testing**: Test in different browsers

---

## Contact Information

**Website**: www.zerooneworks.com  
**Company**: Zero One Works Ltd  
**Deployment Date**: 2025-01-27  
**Build Version**: Production Ready  

---

## Success! 🎉

Your Zero One Works Ltd website is now live on Hostinger! The professional, responsive website showcases your services, portfolio, and expertise with modern design and optimal performance.

**Next Steps**:
1. Test all functionality
2. Set up Google Analytics (optional)
3. Submit to search engines
4. Share your new website!

---

*This deployment guide was created specifically for your Zero One Works Ltd website deployment to Hostinger shared hosting.*
