import React, { useRef } from 'react';

import { SiteDto } from '../../services/dto/sites';

import { IconButton, Input, InputContainer, SelectSites } from './style';

import searchIcon from '../../assets/search.png';

type SearchInputProps = {
  /** Selected site */
  currentSite: string;

  /** Search placeholder */
  placeholder: string;

  /** Meli sites */
  sites: SiteDto[];

  /** on submit */
  onSubmit: (query: string, siteId: string) => void;

  /** on change site */
  onSelectSite: (siteId: string) => void;
};

function SearchInput(props: SearchInputProps) {
  const searchInputRef = useRef<HTMLInputElement>(null);

  /** sites options and sort by name */
  const siteOpts = props.sites
    .sort((a, b) => a.name.localeCompare(b.name))
    .map((item) => (
      <option value={item.id} key={item.id}>
        {item.name}
      </option>
    ));

  return (
    <InputContainer
      onSubmit={(event) => {
        event.preventDefault();
        props.onSubmit(searchInputRef.current?.value || '', props.currentSite);
      }}
    >
      <SelectSites
        value={props.currentSite}
        onChange={(e) => props.onSelectSite(e.currentTarget.value)}
      >
        {siteOpts}
      </SelectSites>
      <Input type="text" ref={searchInputRef} placeholder={props.placeholder} />
      <IconButton aria-label="Buscar">
        <img src={searchIcon} alt="search" aria-label="Buscar" />
      </IconButton>
    </InputContainer>
  );
}

export default SearchInput;
