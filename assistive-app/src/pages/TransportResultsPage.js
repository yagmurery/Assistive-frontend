import React, { useState } from "react";
import {
  Button,
  Column,
  Grid,
  Table,
  TableHead,
  TableRow,
  TableHeader,
  TableBody,
  TableCell
} from "carbon-components-react";
import "../css/TransportPage.css";

const TransportResultsPage = () => {

  const rows = [{
    id: 'travel-option-1',
    Name: 'Travel Option 1',
    departure: '10:22',
    arrival: '12:34',
    cost: '27€',
    buy: <Button type="submit"
    kind="primary"
    aria-label="buyButton"
    className="buttonBuy"
    href= "/ticket">Buy</Button>
  }, {
    id: 'travel-option-2',
    Name: 'Travel Option 2',
    departure: '11:30',
    arrival: '13:45',
    cost: '32€',
    buy: <Button type="submit"
    kind="primary"
    aria-label="buyButton"
    className="buttonBuy"
    href= "/ticket">Buy</Button>
  }, {
    id: 'travel-option-3',
    Name: 'Travel Option 3',
    departure: '11:45',
    arrival: '14:04',
    cost: '34',
    buy: <Button type="submit"
    kind="primary"
    aria-label="buyButton"
    className="buttonBuy"
    href= "/ticket">Buy</Button>
  }];

  const headers = ['Name', 'Departure', 'Arrival', 'Cost', 'Buy'];

  return (
    <div>
      <main role="main" className="transport-page">
        <h1>Travel Options</h1>
        <Grid>
          <Column>
              <p id="transport-form-title">You can view different public transport options here. </p>
                <Table size="lg" useZebraStyles={false} aria-label="transport options table" className="transport-table">
                    <TableHead>
                        <TableRow>
                        {headers.map(header => <TableHeader className ="tableheader" id={header.key} key={header}>
                            {header}
                            </TableHeader>)}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map(row => <TableRow key={row.id}>
                            {Object.keys(row).filter(key => key !== 'id').map(key => {
                        return <TableCell className="tablecell" key={key}>{row[key]}</TableCell>;
                        })}
                        </TableRow>)}
                    </TableBody>
                  </Table>
          </Column>
        </Grid>
      </main>
    </div>
  );
};

export default TransportResultsPage;