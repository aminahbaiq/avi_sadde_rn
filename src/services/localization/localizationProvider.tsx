//import React, { FC, PropsWithChildren, useCallback, useEffect } from 'react';
//import RNRestart from 'react-native-restart';
import { I18nManager } from 'react-native';
//import * as RNLocalize from 'react-native-localize';
//import moment from 'moment';
//import 'moment/locale/he';
import { EnumStringKeys } from './stringKeys';
import { heb } from './heb';
import { eng } from './eng';
//import { AsyncStorageFacade } from '../asyncStorage/asyncStorage.facade';
//import { AsyncStorageKey } from '../asyncStorage/asyncStorage.types';

export function GetString(key: EnumStringKeys) {
  return I18nManager.isRTL ? heb[key] : eng[key];
}
/*
export enum AppLanguage {
  English = 'en',
  Hebrew = 'he'
}

export type TranslateFunction = (key: StringKeys) => string;

export type TranslateWithArgsFunction = (key: StringKeys, ...args: (string | number)[]) => string;

export type ChangeLanguageFunction = (languageTag: string) => void;

export let currentLanguageTag: string = AppLanguage.English;

export interface LocalizationContext {
  currentLanguageTag: string;
  translate: TranslateFunction;
  translateWithArgs: TranslateWithArgsFunction;
  changeLanguage: ChangeLanguageFunction;
}

interface ILanguageConfig {
  languageTag: string;
  isRTL: boolean;
}

const translations: { [locale: string]: StringKeysDict } = {
  heb,
  eng
};

const getSavedLanguageTag = async (): Promise<string | undefined> => {
  const availableLanguageTags: string[] = Object.keys(translations);

  let savedLanguageTag: string | null = await AsyncStorageFacade.getString(
    AsyncStorageKey.LanguageTag
  );

  if (savedLanguageTag !== null && availableLanguageTags.includes(savedLanguageTag)) {
    return savedLanguageTag;
  }
};

const getLanguageConfig = (languageTag: string): ILanguageConfig => {
  switch (languageTag) {
    case AppLanguage.English: {
      return { languageTag, isRTL: false };
    }
    case AppLanguage.Hebrew: {
      return { languageTag, isRTL: true };
    }
    default: {
      throw Error('Unknown language!');
    }
  }
};

/*const updateMomentConfig = (): void => {
  const isHebrew: boolean = currentLanguageTag === AppLanguage.Hebrew;
  moment.locale(isHebrew ? AppLanguage.Hebrew : AppLanguage.English);
};

const setI18nConfig = async () => {
  let languageTag: string | undefined = await getSavedLanguageTag();

  if (languageTag === undefined) {
    const availableLanguageTags: string[] = Object.keys(translations);
    languageTag = RNLocalize.findBestAvailableLanguage(availableLanguageTags)?.languageTag;
  }

  if (languageTag === undefined) {
    languageTag = AppLanguage.English;
  }

  const languageConfig = getLanguageConfig(languageTag);
  currentLanguageTag = languageConfig.languageTag;

  updateMomentConfig();

  if (I18nManager.isRTL !== languageConfig.isRTL) {
    I18nManager.allowRTL(languageConfig.isRTL);
    I18nManager.forceRTL(languageConfig.isRTL);
    RNRestart.Restart();
  }
};

export const localizationContext = React.createContext<LocalizationContext>({
  currentLanguageTag: '',
  translate: () => '',
  translateWithArgs: () => '',
  changeLanguage: () => ''
});

const LocalizationContextWrapper: FC<PropsWithChildren> = ({ children }: PropsWithChildren) => {
  useEffect(() => {
    setI18nConfig();
  }, []);

const translate: TranslateFunction = useCallback((key: StringKeys) => {
  return translations[currentLanguageTag][key];
}, []);

const translateWithArgs: TranslateWithArgsFunction = useCallback(
  (key: StringKeys, ...args: (string | number)[]): string => {
    let string = translate(key);
    for (let i = 0; i < args.length; i++) {
      string = string.replace('%s', args[i].toString());
    }
    return string;
  },
  [translate]
);

  const changeLanguage: ChangeLanguageFunction = useCallback(async (languageTag: string) => {
    if (currentLanguageTag !== languageTag) {
      await AsyncStorageFacade.saveString(AsyncStorageKey.LanguageTag, languageTag);
      await setI18nConfig();
    }
  }, []);

  return (
    <localizationContext.Provider
      value={{
        currentLanguageTag: currentLanguageTag,
        translate,
        translateWithArgs,
        changeLanguage
      }}>
      {children}
    </localizationContext.Provider>
  );
};

export default LocalizationContextWrapper;
*/
