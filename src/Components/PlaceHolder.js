import React from "react";
import { Placeholder, Card } from "semantic-ui-react";

const PlaceholderExamplePlaceholder = () => (
  <Card.Group>
    {Array.from({ length: 10 })
      .fill(Math.random())
      .map(val => (
        <Card key={val}>
          <Placeholder>
            <Placeholder.Header image>
              <Placeholder.Line />
              <Placeholder.Line />
            </Placeholder.Header>
            <Placeholder.Paragraph>
              <Placeholder.Line />
              <Placeholder.Line />
              <Placeholder.Line />
              <Placeholder.Line />
            </Placeholder.Paragraph>
          </Placeholder>
        </Card>
      ))}
  </Card.Group>
);

export default PlaceholderExamplePlaceholder;
