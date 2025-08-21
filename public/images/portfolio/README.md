# Portfolio Image Guidelines

## Image Specifications

### Card Image Size
- **Width**: 800px
- **Height**: 520px
- **Aspect Ratio**: ~1.54:1
- **Format**: WebP (with JPG fallback)
- **Max File Size**: 100KB

### Optimization Guidelines
1. **Resolution**: 
   - Desktop: 800x520px (original)
   - Tablet: 600x390px (75% scale)
   - Mobile: 400x260px (50% scale)

2. **Format Priority**:
   - WebP (primary format)
   - JPG (fallback format)
   - Avoid PNG unless transparency is required

3. **Compression Settings**:
   - WebP: Quality 80-85%
   - JPG: Quality 85-90%
   - Enable progressive loading

4. **File Naming Convention**:
   ```
   project-name-800x520.webp
   project-name-800x520.jpg (fallback)
   ```

### Why These Specifications?
1. **Size (800x520px)**:
   - Matches our card dimensions (aspect ratio)
   - Large enough for retina displays
   - Small enough for fast loading
   - Maintains quality when scaled down

2. **File Size Target (100KB)**:
   - Balances quality and performance
   - Ensures fast page load times
   - Works well with lazy loading

3. **WebP Format**:
   - Better compression than JPG/PNG
   - Supports transparency if needed
   - Wide browser support (with JPG fallback)

## Missing Images
The following images need to be replaced with proper images following these guidelines:

1. Healthcare Dashboard
2. Food Delivery App
3. Video Streaming Platform
4. Virtual Reality Training

## Placeholder Images
Until proper images are provided, we're using optimized placeholder images from Unsplash. These should be replaced with actual project images following the above specifications.

## Image Optimization Tools
Recommended tools for image optimization:
1. Squoosh.app - For manual optimization
2. Sharp - For automated optimization
3. ImageMagick - For batch processing

## Implementation Notes
- Always use the `next/image` component for automatic optimization
- Implement lazy loading for better performance
- Use blur placeholder for better UX during loading
- Consider implementing responsive images using srcset
