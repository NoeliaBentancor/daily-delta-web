import { definePreset } from '@primeuix/themes';
import Aura from '@primeuix/themes/aura';
export const materialTheme = definePreset(Aura, {
  semantic: {
    colorScheme: {
      light: {
        surface: {
          0: '#FFFFFF',
          50: '#F8FAFC',
          100: '#F1F5F9',
          900: '#0F172A' 
        },
        primary: {
          color: '#6366F1',
          contrastColor: '#FFFFFF'
        },
        text: {
          color: '#0F172A'
        }
      }
    }
  },
  
});
