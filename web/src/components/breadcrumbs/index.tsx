import React from 'react';

import { BreadcrumbsContainer, BreadLink } from './style';

type Breadcrumb = {
  id: string;
  displayName: string;
  link: string;
};

type BreadcrumbsProps = {
  items: Breadcrumb[];
};

function Breadcrumbs(props: BreadcrumbsProps) {
  return (
    <BreadcrumbsContainer>
      {props.items.map((item) => (
        <BreadLink to={item.link} key={item.id}>
          {item.displayName}
        </BreadLink>
      ))}
    </BreadcrumbsContainer>
  );
}

export default Breadcrumbs;
