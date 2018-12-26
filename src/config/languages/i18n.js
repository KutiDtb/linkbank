import I18n from 'react-native-i18n';
import vi from './vi';
I18n.fallbacks = true;
I18n.defaultLocale ='vi'

I18n.translations = {
  vi
};
const Localization = (inputKey) => {
  return I18n.t(inputKey);
};

export default Localization