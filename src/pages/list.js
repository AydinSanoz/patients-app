import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { getPatients } from "../../lib/helper";

export default function List(props) {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    getPatients().then((res) => setPatients(res));
  }, []);

  const TR = ({ i, name, surname, email, diagnosis, treatment }) => (
    <tr key={i}>
      <td>{name}</td>
      <td>{surname}</td>
      <td>{email}</td>
      <td>{diagnosis}</td>
      <td>{treatment}</td>
    </tr>
  );

  return (
    <div>
      <Table>
        <thead>
          <tr>
            <td>name</td>
            <td>surname</td>
            <td>email</td>
            <td>diagnosis</td>
            <td>treatment</td>
          </tr>
        </thead>
        <tbody>
          {patients?.map((patient, i) => (
            <TR {...patient} key={i} />
          ))}
        </tbody>
      </Table>
    </div>
  );
}
