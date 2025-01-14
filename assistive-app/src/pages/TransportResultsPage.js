import React from "react";
import {
  Link,
  Column,
  Grid,
  Table,
  TableHead,
  TableRow,
  TableHeader,
  TableBody,
  TableCell,
  OrderedList,
  ListItem,
} from "carbon-components-react";
import "../css/TransportPage.css";

const TransportResultsPage = () => {

  const rows = [{
    id: 'travel-option-1',
    Name: 'Travel Option 1',
    departure: '10:22',
    arrival: '12:34',
    cost: '27€',
  }, {
    id: 'travel-option-2',
    Name: 'Travel Option 2',
    departure: '11:30',
    arrival: '13:45',
    cost: '32€',
  }, {
    id: 'travel-option-3',
    Name: 'Travel Option 3',
    departure: '11:45',
    arrival: '14:04',
    cost: '34',
  }];

  const headers = ['Name', 'Departure', 'Arrival', 'Cost', 'Buy'];

  return (
    <div>
      <main role="main" className="transport-page">
        <h1>Travel Options</h1>
            <div id="transport-form-title">You can view different public transport options here. </div>
              
            {/* Table - default display */}
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
                    <TableCell className="tablecell"> <Link href="/ticket">Go to purchase page</Link> </TableCell>
                    </TableRow>)}
                </TableBody>
              </Table>

              <OrderedList className="ordered-list">
              {rows.map((row, index) => (
                <ListItem key={row.id} className="ordered-list-item">
                  <strong>{row.Name}</strong><br />
                  <span>Departure: {row.departure}</span><br />
                  <span>Arrival: {row.arrival}</span><br />
                  <span>Cost: {row.cost}</span><br />
                  <Link href="/ticket">Go to purchase page</Link>
                </ListItem>
              ))}
            </OrderedList>
      </main>
    </div>
  );
};

export default TransportResultsPage;