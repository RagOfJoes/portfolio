const global = {
  styles: {
    global: () => {
      const backgroundKey = '--colors-background';
      const backgroundColor = '#35353D';

      const surfaceKey = '--colors-surface';
      const surfaceColor = '#26262e';

      const textKey = '--colors-text';
      const textColor = '#F1EBE6';

      const secondaryTextKey = '--colors-text-secondary';
      const secondaryTextColor = '#B1ABA5';

      const primaryKey = '--colors-primary';
      const primaryColor = '#E9B97D';

      return {
        // Workaround for responsive colors
        ':root': {
          [backgroundKey]: backgroundColor,
          [surfaceKey]: surfaceColor,

          [textKey]: textColor,
          [secondaryTextKey]: secondaryTextColor,
          [primaryKey]: primaryColor,
        },
        '::selection': {
          bg: primaryColor,
          color: 'white',
        },

        html: {
          scrollBehavior: 'smooth',
        },

        body: {
          bg: backgroundColor,
          color: textColor,
        },
      };
    },
  },
};

export default global;
