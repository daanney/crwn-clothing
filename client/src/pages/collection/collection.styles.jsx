import styled from 'styled-components'

export const CollectionPageContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const CollectionPageTitle = styled.h2`
  font-size: 38px;
  margin: 0 auto 30px;
`

export const CollectionPageItems = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 10px;
`
