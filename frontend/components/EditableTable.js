import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import format from "date-fns/format";

const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 700
  }
});

let id = 0;
function createData(
  consentDate,
  consentGivenTo,
  collectionName,
  legalBasis,
  rangeOfConsenetedData,
  consentGivenBy,
  createdBy,
  updatedBy,
  createdAt,
  updatedAt
) {
  id += 1;
  return {
    id, //1
    consentDate, //2
    consentGivenTo, //3
    collectionName, //4
    legalBasis, //5
    rangeOfConsenetedData, //6
    consentGivenBy, //7
    createdBy, //8
    createdAt, //9
    updatedBy, //10
    updatedAt //11
  };
}
const consentDateVar = new Date();
//2018-11-20T11:00:00+00:00
//2018-10-20T10:54:00+00:00
//2018-09-20T11:00:00+00:00
//2018-08-20T11:07:00+00:00
//2018-10-20T09:03:00+00:00
//2018-11-20T11:44:00+00:00
//2018-09-20T08:32:00+00:00
const rows = [
  createData(
    `${format(consentDateVar, "DD.MM.YYYY")}`, //2
    `ACME GmbH`, //3
    `Dane osobowe`, //4
    `RODO`, //5
    `Imię, nazwisko, data urodzenia, PESEL, Nr D.O., miejsce zamieszkania`, //6
    `Mariusz Niepomorski`, //7
    `Anna Master`, //8
    `${format(consentDateVar, "DD.MM.YYYY")}`, //9
    `Jan Kowalski`, //10
    `${format(consentDateVar + 3, "DD.MM.YYYY")}` //11
  ),
    createData(`${format(consentDateVar, "DD.MM.YYYY")}`, `ACME GmbH`, `Dane osobowe`, `RODO`, `Imię, nazwisko, data urodzenia, PESEL, Nr D.O., miejsce zamieszkania`, `Mariusz Niepomorski`, `Anna Master`, `${format(consentDateVar, "DD.MM.YYYY")}`, `Jan Kowalski`, `${format(consentDateVar + 3, "DD.MM.YYYY")}`),
    createData(`${format(consentDateVar, "DD.MM.YYYY")}`, `ACME GmbH`, `Dane osobowe`, `RODO`, `Imię, nazwisko, data urodzenia, PESEL, Nr D.O., miejsce zamieszkania`, `Mariusz Niepomorski`, `Anna Master`, `${format(consentDateVar, "DD.MM.YYYY")}`, `Jan Kowalski`, `${format(consentDateVar + 3, "DD.MM.YYYY")}`),
    createData(`${format(consentDateVar, "DD.MM.YYYY")}`, `ACME GmbH`, `Dane osobowe`, `RODO`, `Imię, nazwisko, data urodzenia, PESEL, Nr D.O., miejsce zamieszkania`, `Mariusz Niepomorski`, `Anna Master`, `${format(consentDateVar, "DD.MM.YYYY")}`, `Jan Kowalski`, `${format(consentDateVar + 3, "DD.MM.YYYY")}`),
    createData(`${format(consentDateVar, "DD.MM.YYYY")}`, `ACME GmbH`, `Dane osobowe`, `RODO`, `Imię, nazwisko, data urodzenia, PESEL, Nr D.O., miejsce zamieszkania`, `Mariusz Niepomorski`, `Anna Master`, `${format(consentDateVar, "DD.MM.YYYY")}`, `Jan Kowalski`, `${format(consentDateVar + 3, "DD.MM.YYYY")}`),
    createData(`${format(consentDateVar, "DD.MM.YYYY")}`, `ACME GmbH`, `Dane osobowe`, `RODO`, `Imię, nazwisko, data urodzenia, PESEL, Nr D.O., miejsce zamieszkania`, `Mariusz Niepomorski`, `Anna Master`, `${format(consentDateVar, "DD.MM.YYYY")}`, `Jan Kowalski`, `${format(consentDateVar + 3, "DD.MM.YYYY")}`),
    createData(`${format(consentDateVar, "DD.MM.YYYY")}`, `ACME GmbH`, `Dane osobowe`, `RODO`, `Imię, nazwisko, data urodzenia, PESEL, Nr D.O., miejsce zamieszkania`, `Mariusz Niepomorski`, `Anna Master`, `${format(consentDateVar, "DD.MM.YYYY")}`, `Jan Kowalski`, `${format(consentDateVar + 3, "DD.MM.YYYY")}`),
    createData(`${format(consentDateVar, "DD.MM.YYYY")}`, `ACME GmbH`, `Dane osobowe`, `RODO`, `Imię, nazwisko, data urodzenia, PESEL, Nr D.O., miejsce zamieszkania`, `Mariusz Niepomorski`, `Anna Master`, `${format(consentDateVar, "DD.MM.YYYY")}`, `Jan Kowalski`, `${format(consentDateVar + 3, "DD.MM.YYYY")}`),
    createData(`${format(consentDateVar, "DD.MM.YYYY")}`, `ACME GmbH`, `Dane osobowe`, `RODO`, `Imię, nazwisko, data urodzenia, PESEL, Nr D.O., miejsce zamieszkania`, `Mariusz Niepomorski`, `Anna Master`, `${format(consentDateVar, "DD.MM.YYYY")}`, `Jan Kowalski`, `${format(consentDateVar + 3, "DD.MM.YYYY")}`),
    createData(`${format(consentDateVar, "DD.MM.YYYY")}`, `ACME GmbH`, `Dane osobowe`, `RODO`, `Imię, nazwisko, data urodzenia, PESEL, Nr D.O., miejsce zamieszkania`, `Mariusz Niepomorski`, `Anna Master`, `${format(consentDateVar, "DD.MM.YYYY")}`, `Jan Kowalski`, `${format(consentDateVar + 3, "DD.MM.YYYY")}`),
    createData(`${format(consentDateVar, "DD.MM.YYYY")}`, `ACME GmbH`, `Dane osobowe`, `RODO`, `Imię, nazwisko, data urodzenia, PESEL, Nr D.O., miejsce zamieszkania`, `Mariusz Niepomorski`, `Anna Master`, `${format(consentDateVar, "DD.MM.YYYY")}`, `Jan Kowalski`, `${format(consentDateVar + 3, "DD.MM.YYYY")}`),
    createData(`${format(consentDateVar, "DD.MM.YYYY")}`, `ACME GmbH`, `Dane osobowe`, `RODO`, `Imię, nazwisko, data urodzenia, PESEL, Nr D.O., miejsce zamieszkania`, `Mariusz Niepomorski`, `Anna Master`, `${format(consentDateVar, "DD.MM.YYYY")}`, `Jan Kowalski`, `${format(consentDateVar + 3, "DD.MM.YYYY")}`),
    createData(`${format(consentDateVar, "DD.MM.YYYY")}`, `ACME GmbH`, `Dane osobowe`, `RODO`, `Imię, nazwisko, data urodzenia, PESEL, Nr D.O., miejsce zamieszkania`, `Mariusz Niepomorski`, `Anna Master`, `${format(consentDateVar, "DD.MM.YYYY")}`, `Jan Kowalski`, `${format(consentDateVar + 3, "DD.MM.YYYY")}`),
    createData(`${format(consentDateVar, "DD.MM.YYYY")}`, `ACME GmbH`, `Dane osobowe`, `RODO`, `Imię, nazwisko, data urodzenia, PESEL, Nr D.O., miejsce zamieszkania`, `Mariusz Niepomorski`, `Anna Master`, `${format(consentDateVar, "DD.MM.YYYY")}`, `Jan Kowalski`, `${format(consentDateVar + 3, "DD.MM.YYYY")}`),
    createData(`${format(consentDateVar, "DD.MM.YYYY")}`, `ACME GmbH`, `Dane osobowe`, `RODO`, `Imię, nazwisko, data urodzenia, PESEL, Nr D.O., miejsce zamieszkania`, `Mariusz Niepomorski`, `Anna Master`, `${format(consentDateVar, "DD.MM.YYYY")}`, `Jan Kowalski`, `${format(consentDateVar + 3, "DD.MM.YYYY")}`),
    createData(`${format(consentDateVar, "DD.MM.YYYY")}`, `ACME GmbH`, `Dane osobowe`, `RODO`, `Imię, nazwisko, data urodzenia, PESEL, Nr D.O., miejsce zamieszkania`, `Mariusz Niepomorski`, `Anna Master`, `${format(consentDateVar, "DD.MM.YYYY")}`, `Jan Kowalski`, `${format(consentDateVar + 3, "DD.MM.YYYY")}`),
    createData(`${format(consentDateVar, "DD.MM.YYYY")}`, `ACME GmbH`, `Dane osobowe`, `RODO`, `Imię, nazwisko, data urodzenia, PESEL, Nr D.O., miejsce zamieszkania`, `Mariusz Niepomorski`, `Anna Master`, `${format(consentDateVar, "DD.MM.YYYY")}`, `Jan Kowalski`, `${format(consentDateVar + 3, "DD.MM.YYYY")}`),
    createData(`${format(consentDateVar, "DD.MM.YYYY")}`, `ACME GmbH`, `Dane osobowe`, `RODO`, `Imię, nazwisko, data urodzenia, PESEL, Nr D.O., miejsce zamieszkania`, `Mariusz Niepomorski`, `Anna Master`, `${format(consentDateVar, "DD.MM.YYYY")}`, `Jan Kowalski`, `${format(consentDateVar + 3, "DD.MM.YYYY")}`),
    createData(`${format(consentDateVar, "DD.MM.YYYY")}`, `ACME GmbH`, `Dane osobowe`, `RODO`, `Imię, nazwisko, data urodzenia, PESEL, Nr D.O., miejsce zamieszkania`, `Mariusz Niepomorski`, `Anna Master`, `${format(consentDateVar, "DD.MM.YYYY")}`, `Jan Kowalski`, `${format(consentDateVar + 3, "DD.MM.YYYY")}`),
    createData(`${format(consentDateVar, "DD.MM.YYYY")}`, `ACME GmbH`, `Dane osobowe`, `RODO`, `Imię, nazwisko, data urodzenia, PESEL, Nr D.O., miejsce zamieszkania`, `Mariusz Niepomorski`, `Anna Master`, `${format(consentDateVar, "DD.MM.YYYY")}`, `Jan Kowalski`, `${format(consentDateVar + 3, "DD.MM.YYYY")}`),
    createData(`${format(consentDateVar, "DD.MM.YYYY")}`, `ACME GmbH`, `Dane osobowe`, `RODO`, `Imię, nazwisko, data urodzenia, PESEL, Nr D.O., miejsce zamieszkania`, `Mariusz Niepomorski`, `Anna Master`, `${format(consentDateVar, "DD.MM.YYYY")}`, `Jan Kowalski`, `${format(consentDateVar + 3, "DD.MM.YYYY")}`),
    createData(`${format(consentDateVar, "DD.MM.YYYY")}`, `ACME GmbH`, `Dane osobowe`, `RODO`, `Imię, nazwisko, data urodzenia, PESEL, Nr D.O., miejsce zamieszkania`, `Mariusz Niepomorski`, `Anna Master`, `${format(consentDateVar, "DD.MM.YYYY")}`, `Jan Kowalski`, `${format(consentDateVar + 3, "DD.MM.YYYY")}`),
    createData(`${format(consentDateVar, "DD.MM.YYYY")}`, `ACME GmbH`, `Dane osobowe`, `RODO`, `Imię, nazwisko, data urodzenia, PESEL, Nr D.O., miejsce zamieszkania`, `Mariusz Niepomorski`, `Anna Master`, `${format(consentDateVar, "DD.MM.YYYY")}`, `Jan Kowalski`, `${format(consentDateVar + 3, "DD.MM.YYYY")}`),
    createData(`${format(consentDateVar, "DD.MM.YYYY")}`, `ACME GmbH`, `Dane osobowe`, `RODO`, `Imię, nazwisko, data urodzenia, PESEL, Nr D.O., miejsce zamieszkania`, `Mariusz Niepomorski`, `Anna Master`, `${format(consentDateVar, "DD.MM.YYYY")}`, `Jan Kowalski`, `${format(consentDateVar + 3, "DD.MM.YYYY")}`),
    createData(`${format(consentDateVar, "DD.MM.YYYY")}`, `ACME GmbH`, `Dane osobowe`, `RODO`, `Imię, nazwisko, data urodzenia, PESEL, Nr D.O., miejsce zamieszkania`, `Mariusz Niepomorski`, `Anna Master`, `${format(consentDateVar, "DD.MM.YYYY")}`, `Jan Kowalski`, `${format(consentDateVar + 3, "DD.MM.YYYY")}`),
    createData(`${format(consentDateVar, "DD.MM.YYYY")}`, `ACME GmbH`, `Dane osobowe`, `RODO`, `Imię, nazwisko, data urodzenia, PESEL, Nr D.O., miejsce zamieszkania`, `Mariusz Niepomorski`, `Anna Master`, `${format(consentDateVar, "DD.MM.YYYY")}`, `Jan Kowalski`, `${format(consentDateVar + 3, "DD.MM.YYYY")}`),
    createData(`${format(consentDateVar, "DD.MM.YYYY")}`, `ACME GmbH`, `Dane osobowe`, `RODO`, `Imię, nazwisko, data urodzenia, PESEL, Nr D.O., miejsce zamieszkania`, `Mariusz Niepomorski`, `Anna Master`, `${format(consentDateVar, "DD.MM.YYYY")}`, `Jan Kowalski`, `${format(consentDateVar + 3, "DD.MM.YYYY")}`),
    createData(`${format(consentDateVar, "DD.MM.YYYY")}`, `ACME GmbH`, `Dane osobowe`, `RODO`, `Imię, nazwisko, data urodzenia, PESEL, Nr D.O., miejsce zamieszkania`, `Mariusz Niepomorski`, `Anna Master`, `${format(consentDateVar, "DD.MM.YYYY")}`, `Jan Kowalski`, `${format(consentDateVar + 3, "DD.MM.YYYY")}`),
];

function SimpleTable(props) {
  const { classes } = props;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow
            onClick={e => {
              console.log(`I've been clicked`);
            }}
          >
            <TableCell>Data udostępnienia danych</TableCell>
            <TableCell>Podmiot, któremu udostępniono dane</TableCell>
            <TableCell>Nazwa zbioru, z którego udostępniono dane</TableCell>
            <TableCell>Podstawa prawna udostępnienia danych</TableCell>
            <TableCell>Zakres udostępnienia danych</TableCell>
            <TableCell>
              Nazwisko i imię pracownika dokonującego udostępnienia danych
            </TableCell>
            <TableCell>Utworzone dnia</TableCell>
            <TableCell>Utworzone przez</TableCell>
            <TableCell>Aktualizowane dnia</TableCell>
            <TableCell>Aktualizowane przez</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => {
            return (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.consentDate}
                </TableCell>
                <TableCell>{row.consentGivenTo}</TableCell>
                <TableCell>{row.collectionName}</TableCell>
                <TableCell>{row.legalBasis}</TableCell>
                <TableCell>{row.rangeOfConsenetedData}</TableCell>
                <TableCell>{row.consentGivenBy}</TableCell>
                <TableCell>{row.createdBy}</TableCell>
                <TableCell>{row.updatedBy}</TableCell>
                <TableCell>{row.createdAt}</TableCell>
                <TableCell>{row.updatedAt}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  );
}

SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired
};

const EditableTable = withStyles(styles)(SimpleTable);

export default EditableTable;
