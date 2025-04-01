import { useEffect } from 'react';

const useTheme = (theme) => {

    useEffect(() => {
        const rootColors = getComputedStyle(document.documentElement);
        const mainBackgroundColor = rootColors.getPropertyValue('--main-background-color');
        const mainFeedItemBackgroundColor = rootColors.getPropertyValue('--main-feeditem-background-color');
        const mainFeedItemImageBackgroundColor = rootColors.getPropertyValue('--main-feeditem-image-background-color');
        const mainTextColor = rootColors.getPropertyValue('--main-text-color');
        const mainAdditionalColor = rootColors.getPropertyValue('--main-additional-color');
        
        const root = document.documentElement;
        root.style.setProperty('--main-background-color', rootColors.getPropertyValue('--add-background-color'));
        root.style.setProperty('--add-background-color', mainBackgroundColor);
        
        root.style.setProperty('--main-feeditem-background-color', rootColors.getPropertyValue('--add-feeditem-background-color'));
        root.style.setProperty('--add-feeditem-background-color', mainFeedItemBackgroundColor);

        root.style.setProperty('--main-feeditem-image-background-color', rootColors.getPropertyValue('--add-feeditem-image-background-color'));
        root.style.setProperty('--add-feeditem-image-background-color', mainFeedItemImageBackgroundColor);

        root.style.setProperty('--main-text-color', rootColors.getPropertyValue('--add-text-color'));
        root.style.setProperty('--add-text-color', mainTextColor);
        
        root.style.setProperty('--main-additional-color', rootColors.getPropertyValue('--add-additional-color'));
        root.style.setProperty('--add-additional-color', mainAdditionalColor);
    }, [theme]);

};

export default useTheme;