import React from 'react';
import { defaultSite } from '../config';

export type SiteContext = {
  currentSiteId: string;
  setSite: (site: string) => void;
};

const defaultState = {
  currentSiteId: defaultSite,
  setSite: () => {},
};

const siteContext = React.createContext(defaultState);

export { siteContext };
