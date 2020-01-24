import React, {useState} from "react";
import { useGet } from "restful-react";
import CardExampleCard from "./CharacterDisplay";
import PlaceholderExamplePlaceholder from "./PlaceHolder";
import { Grid, Pagination } from "semantic-ui-react";
import styled from 'styled-components'

 
export default function Character() {
    const[page ,setPage] = useState(0)
  const { loading, error, data } = useGet(
    `https://rickandmortyapi.com/api/character/?page=${page}`
  );
 
  if (error) return "...loading";

  if (loading) {
    return <PlaceholderExamplePlaceholder />;
  }

  const { info:{pages}, results } = data;
  const handlePaginationChange = (_, arg) => {
      setPage(arg.activePage)
  }
  
  const PaginationExamplePagination = () => (
    <Pagination defaultActivePage={1} onPageChange={handlePaginationChange} totalPages={pages} />
  )
  
//   export default PaginationExamplePagination

  return (
    <DIV>
      <h2 className="text-center mb-5">Character Page</h2>
      <Grid grid columns={4}>
        {results.map(item => (
          <CardExampleCard item={item} />
        ))}
      </Grid>
      <Grid centered>
        <PaginationExamplePagination />
      </Grid>
    </DIV>
  );


}
const DIV = styled.div`
  margin: 35px 0px 0px 40px;
`;