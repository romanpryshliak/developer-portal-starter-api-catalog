import * as React from 'react';

import {
  useCatalog,
  FlexSection,
  Flex,
  WideTile,
  SectionHeader,
  LoadingAnimation,
} from '@redocly/developer-portal/ui';

export function Catalog() {
  const { apis, loadingRbac } = useCatalog({ offset: 0, limit: 10 });

  if (!apis.length) {
    return "You don't have access to any API";
  }

  return (
    <>
      <Flex flexDirection="row" alignItems="baseline">
        <SectionHeader> API Catalog</SectionHeader>
        {loadingRbac ? <LoadingAnimation size={20} /> : null}
      </Flex>
      <FlexSection justifyContent="space-around" flexWrap="wrap">
        {apis.map(api => (
          <WideTile to={api.link} header={api.title || api.link}>
            Tags: {api.defaultVersion.metadata?.tags?.map(tag => <span> {tag} </span>)}
          </WideTile>
        ))}
      </FlexSection>
    </>
  );
}