/**
 * Utility functions for handling project images
 */

/**
 * Returns the directory path for a specific project
 * @param projectId The project ID (1-12)
 * @returns Directory path for the project
 */
export const getProjectDirectory = (projectId: number): string => {
  return `/projects/project${projectId}`;
};

/**
 * Creates a URL for an image in a project's folder
 * @param projectId The project ID (1-12)
 * @param filename The image filename
 * @returns Full URL to the image
 */
export const getProjectImageUrl = (projectId: number, filename: string): string => {
  return `${getProjectDirectory(projectId)}/${filename}`;
};

/**
 * Returns the path to a project's main image (used in gallery view)
 * @param projectId The project ID (1-12)
 * @returns URL to the main image
 */
export const getProjectMainImage = (projectId: number): string => {
  // For consistency, we'll look for main.jpg as a convention
  return getProjectImageUrl(projectId, 'main.jpg');
};

/**
 * Hardcoded image lists for each project
 * This is a workaround for not being able to scan directories client-side
 */
const projectImageMap: Record<number, string[]> = {
  1: [
    '/projects/project1/Apt- Living Room.jpg',
    '/projects/project1/Apt- Outdoor 2.jpg',
    '/projects/project1/Apt- Room.jpg',
    '/projects/project1/Exterior Closer - 24 de Julho.jpg',
    '/projects/project1/Exterior Sunset- 24 de Julho.jpg'
  ],
  2: [
    '/projects/project2/Marinha Guincho 01.jpg',
    '/projects/project2/Marinha Guincho 02.jpg',
    '/projects/project2/Marinha Guincho 03.jpg',
    '/projects/project2/Marinha Guincho 04.jpg',
    '/projects/project2/Marinha Guincho 05.jpg',
    '/projects/project2/Marinha Guincho 07.png',
    '/projects/project2/Marinha Guincho 08.jpg',
    '/projects/project2/Marinha Guincho 09.jpg'
  ],
  3: [
    '/projects/project3/Republica 51_View 01.jpg',
    '/projects/project3/Republica 51_View 02.jpg',
    '/projects/project3/Republica 51_View 03.jpg',
    '/projects/project3/Republica 51_View 04.jpg',
    '/projects/project3/Republica 51_View 05 02.jpg',
    '/projects/project3/Republica 51_View 06.jpg',
    '/projects/project3/Republica 51_View 07.jpg'
  ],
  4: [
    '/projects/project4/CAISL-View 01 01.jpg',
    '/projects/project4/IMG_7269.jpg',
    '/projects/project4/IMG_7301.jpg',
    '/projects/project4/IMG_7309.jpg',
    '/projects/project4/IMG_7316.jpg',
    '/projects/project4/IMG_7321.jpg',
    '/projects/project4/IMG_7323.jpg',
    '/projects/project4/IMG_7332.jpg',
    '/projects/project4/Render 2.jpg',
    '/projects/project4/View 02.jpg'
  ],
  5: [
    '/projects/project5/Nisa- Exterior 01 light.jpg',
    '/projects/project5/Nisa- Exterior 02 light 2.jpg',
    '/projects/project5/Nisa- Exterior 03.jpg',
    '/projects/project5/Nisa- Cozinha 02 (2).jpg',
    '/projects/project5/Nisa- Quarto 01 (2).jpg'
  ],
  6: [
    '/projects/project6/Luanda.PNG',
    '/projects/project6/Luanda 2.PNG'
  ],
  7: [
    '/projects/project7/Estoril- Outside View.png',
    '/projects/project7/Estoril- Pool.jpg',
    '/projects/project7/Estoril- Quarto 01.jpg',
    '/projects/project7/Estoril- Sala 01.jpg',
    '/projects/project7/Cozinha 02.jpg'
  ],
  8: [
    '/projects/project8/IMG_9220.JPEG',
    '/projects/project8/IMG_9230.JPEG',
    '/projects/project8/IMG_9242.JPEG',
    '/projects/project8/IMG_9246.JPEG',
    '/projects/project8/IMG_9248.JPEG',
    '/projects/project8/IMG_9262.JPEG'
  ],
  9: [
    '/projects/project9/Luxury Shops Angola.PNG',
    '/projects/project9/Luxury Shops Angola 2.PNG',
    '/projects/project9/Luxury Shops Angola 3.PNG'
  ],
  10: [
    '/projects/project10/Housing towers 1.PNG',
    '/projects/project10/Housing towers 2.PNG'
  ],
  11: [
    '/projects/project11/Loanda Towers.PNG',
    '/projects/project11/Loanda Towers 2.PNG',
    '/projects/project11/Loanda Towers 3.PNG',
    '/projects/project11/Loanda Towers 4.PNG'
  ],
  12: [
    '/projects/project12/car dealer.png'
  ]
};

/**
 * Helper function to update project image references in the Projects.tsx file
 * 
 * @param projectId The project ID (1-12)
 * @returns The recommended main image URL for the grid view
 */
export const getRecommendedMainImage = (projectId: number): string => {
  const images = projectImageMap[projectId];
  if (!images || images.length === 0) {
    return ''; // No images available
  }
  
  // By default, use the first image in the array, which is typically a good choice for the main image
  return images[0];
};

/**
 * Gets images for a project from manual configuration. Since we can't scan directories
 * client-side, we need to manually configure each project's images.
 * 
 * @param projectId The project ID (1-12)
 * @param fallbackGallery Optional fallback gallery if no images configured
 * @returns Array of image URLs
 */
export const getProjectImagesWithFallback = (projectId: number, fallbackGallery?: string[]): string[] => {
  // Check if we have images configured for this project
  const configuredImages = projectImageMap[projectId];
  
  // If we have configured images, return them, otherwise use the fallback gallery
  return configuredImages || fallbackGallery || [];
};
