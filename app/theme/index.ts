// Export all theme elements from a single file
import { colors } from './colors';
import { typography } from './typography';

export const theme = {
    colors,
    typography,
};

// For easier imports
export * from './colors';
export * from './typography';