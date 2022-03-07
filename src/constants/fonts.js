/**
 * Following fonts will be loaded and cached in async while <AppLoading/>
 * Detail please check src/root.js
 */
const customFonts = {
    'Inter-Regular': require('./../../assets/fonts/Inter-Regular.otf'),
    'Inter-SemiBold': require('./../../assets/fonts/Inter-SemiBold.otf'),
    'SourceSansPro-Regular': require('./../../assets/fonts/SourceSansPro-Regular.ttf'),
    'SourceSansPro-SemiBold': require('./../../assets/fonts/SourceSansPro-SemiBold.ttf'),
    'Poppins-Regular': require('./../../assets/fonts/Poppins-Regular.ttf'),
    'Poppins-SemiBold': require('./../../assets/fonts/Poppins-SemiBold.ttf'),
    'Poppins-Medium': require('./../../assets/fonts/Poppins-Medium.ttf'),
    'Poppins-Bold': require('./../../assets/fonts/Poppins-Bold.ttf'),
    'Poppins-Black': require('./../../assets/fonts/Poppins-Black.ttf'),

};
const type = {
    primary: 'Poppins-Regular',
    secondary: 'Inter-Regular',
    black: 'Poppins-Black',
    medium: 'Poppins-Medium',
    bold: 'Poppins-Bold',
    semi: 'Poppins-SemiBold',
};

const Fonts = {customFonts, type};

export default Fonts;
