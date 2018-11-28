import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import gql from "graphql-tag";
import { Query, compose, graphql } from "react-apollo";
import format from "date-fns/format";

export const DATA_SHARE_CONSENTS = gql`
  query dataShareConsents {
    dataShareConsents {
      id
      consentDate
      consentGivenTo
      collectionName
      legalBasis
      rangeOfConsentedData
      consentGivenBy
    }
  }
`;


class EditableTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      error: ""
    };
  }
  //props Column names
  // consentDate,
  // consentGivenTo,
  // collectionName,
  // legalBasis,
  // rangeOfConsenetedData,
  // consentGivenBy,
  // createdBy,
  // updatedBy,
  // createdAt,
  // updatedAt

  componentDidMount(){
    console.log(`Pre-execute phase is beginning...`);
    this.queryData;
    console.log(`Post-execute phase is beginning...`);
  };

  queryData = async () => {
    await this.props.dataShareConsents()
      .then(response => {
        console.log(`Response: ${response.data.dataShareConsents}`);
        this.setState({
          data: response.data.dataShareConsents
        });
      })
      .catch(e => {
        console.error(e);
        this.setState({
          error: e
        });
      });
  };

  render() {
    return (
      <Paper
     /* className={classes.root}*/
     >
      </Paper>

    );
  }
}
const styles = theme => ({
  root: { width: "100%", marginTop: theme.spacing.unit * 3, overflowX: "auto" },
  table: { minWidth: 700 }
});

function SimpleTable(props) {
  const { classes } = props;
  SimpleTable.propTypes = { classes: PropTypes.object.isRequired };
}

// const WrappedEditableTable = withStyles(styles)(SimpleTable);
// const MyTable=graphql(DATA_SHARE_CONSENTS)(EditableTable);
//   export default MyTable;
const withQuery = graphql(DATA_SHARE_CONSENTS,{name:'dataShareConsents'});
const EditableTableWithData = withQuery(EditableTable);
export default EditableTableWithData;

{/*
<Table
// className={classes.table}
>
  <TableHead>
    <TableRow onClick={e => { console.log(`I've been clicked`); }}>
      <TableCell>Data udostępnienia danych</TableCell>
      <TableCell>Podmiot, któremu udostępniono dane</TableCell>
      <TableCell>Nazwa zbioru, z którego udostępniono dane</TableCell>
      <TableCell>Podstawa prawna udostępnienia danych</TableCell>
      <TableCell>Zakres udostępnienia danych</TableCell>
      <TableCell>Nazwisko i imię pracownika dokonującego udostępnienia danych</TableCell>  <TableCell>Utworzone dnia</TableCell>
      <TableCell>Utworzone dnia</TableCell>
      <TableCell>Utworzone przez</TableCell>
      <TableCell>Aktualizowane dnia</TableCell>
      <TableCell>Aktualizowane przez</TableCell>
    </TableRow>
  </TableHead>
  <TableBody>

    {data.map(data => {
      return <TableRow key={data.id}>
        <TableCell component="th" scope="row">
          {data.consentDate}
        </TableCell>
        <TableCell>{data.consentGivenTo}</TableCell>
        <TableCell>{data.collectionName}</TableCell>
        <TableCell>{data.legalBasis}</TableCell>
        <TableCell>{data.rangeOfConsenetedData}</TableCell>
        <TableCell>{data.consentGivenBy}</TableCell>
        {/* <TableCell>{data.createdBy}</TableCell>
                  <TableCell>{data.updatedBy}</TableCell>
        <TableCell>{data.createdAt}</TableCell>
        <TableCell>{data.updatedAt}</TableCell>
      </TableRow>;
    })}
  </TableBody>
</Table>
  */}
