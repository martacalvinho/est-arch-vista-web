# Project Images Management

This directory contains folders for each of the 12 projects featured in the website. Add your images to the corresponding project folder and update the code to have them appear in the project's modal and grid view.

## Project Directory Structure

- **project1** - Luxury Apartments (Lisbon, Portugal)
- **project2** - Masterplan Guincho (Lisbon, Portugal)
- **project3** - Restaurant Republica 51 (Lisbon, Portugal)
- **project4** - American School of Lisbon (Lisbon, Portugal)
- **project5** - Nisa Boutique Hotel (Nisa, Portugal)
- **project6** - Apartments/Offices (Luanda, Angola)
- **project7** - Apartments (Estoril, Portugal)
- **project8** - Beloura Office Park (Sintra, Portugal)
- **project9** - Luxury Shops Talatona (Angola)
- **project10** - Housing Towers (Luanda, Angola)
- **project11** - Loanda Towers (Luanda, Angola)
- **project12** - Multi Brands Dealer (Torres Vedras, Portugal)

## How to Add Images

1. Navigate to the appropriate project folder (e.g., `project1` for Luxury Apartments)
2. Add your image files directly to that folder
3. Update the code to reference the images (see details below)

## Image Naming Conventions

For best results, consider following these naming conventions:

- Use descriptive filenames without special characters (except hyphens or underscores)
- Consider adding a sequence number at the beginning of the filename if you want to control the order (e.g., `01-living-room.jpg`, `02-kitchen.jpg`)

## How to Display Images in Your Project

After adding images to a project folder, you need to make two code changes:

### 1. Update the image list in `src/lib/imageUtils.ts`

Add your image filenames to the `projectImageMap` object for your project ID:

```typescript
const projectImageMap: Record<number, string[]> = {
  1: [
    '/projects/project1/Apt- Living Room.jpg',
    '/projects/project1/Apt- Outdoor 2.jpg',
    // Add all your image paths here
  ],
  // Add more projects as needed
};
```

### 2. Set a Grid Image in `src/pages/Projects.tsx`

To change which image appears in the main project grid, update the `imageSrc` property for that project:

```typescript
// Example for Project 1
{
  id: 1,
  title: 'Luxury Apartments',
  // ...
  imageSrc: '/projects/project1/Exterior Sunset- 24 de Julho.jpg',
  // ...
}
```

## Example for Project 1 (Luxury Apartments)

You've already added these images:
- `Apt- Living Room.jpg`
- `Apt- Outdoor 2.jpg`
- `Apt- Room.jpg`
- `Exterior Closer - 24 de Julho.jpg`
- `Exterior Sunset- 24 de Julho.jpg`

With "Exterior Sunset- 24 de Julho.jpg" being used in the main grid view.

## Notes

- Images will display in the order they're listed in the `projectImageMap` array
- The first image in the array will be shown first when opening the modal
- All images will appear in the thumbnail gallery at the bottom of the modal
