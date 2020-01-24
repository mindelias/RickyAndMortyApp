import React from "react";
import { Grid, Card, Icon } from "semantic-ui-react";

const CardExampleCardEpisode = ({ item }) => (
  <Grid.Column>
    <Card>
      <Card.Content header={item.name} />
      <Card.Content description={item.air_date} />
      <Card.Content description={item.characters.length} />
      {/* description=
      {item.characters.map(items => (
        <li>{items}</li>
      ))} */}
      <Card.Content extra>
        <Icon name="user" />
        {item.episode}
      </Card.Content>
    </Card>
  </Grid.Column>
);

export default CardExampleCardEpisode;
