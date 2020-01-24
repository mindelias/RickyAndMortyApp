import React from "react";
import { Card, Icon, Image, Grid } from "semantic-ui-react";
import { Link } from "react-router-dom";

// onst CharacterMap = results.map(item =>(
//     <CardExampleCard/>
// ))
const CardExampleCard = ({ item }) => (
  <Grid.Column>
    <Card>
      <Image src={item.image} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{item.name}</Card.Header>
        <Card.Meta>
          <span className="date">Joined in 2015</span>
        </Card.Meta>
        <Card.Description>
          {item.name} is {item.status}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Link>
          <Icon name="user" />
          Episode:{item.episode.length}
        </Link>
      </Card.Content>
    </Card>
  </Grid.Column>
);

export default CardExampleCard;
