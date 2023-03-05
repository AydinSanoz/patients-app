import { BiTrash, BiEdit, BiUserCheck, BiUserMinus } from "react-icons/bi";
import { Container, Table } from "react-bootstrap";
import { deletePatient, getPatients, updatePatient } from "../lib/helper";
import { useQuery } from "react-query";
import { useRouter } from "next/router";

export default function List(props) {
  const router = useRouter();
  const { isLoading, isError, data, error } = useQuery("patients", getPatients);
  if (isLoading) return <div>Patients is Loading... </div>;
  if (isError) return <div>Error : {error}</div>;

  const handleUpdate = (patient) => {
    router.push({
      pathname: `/updatePatient`,
      query: patient,
    });
  };
  const handleDelete = (id) => {
    deletePatient(id)
      .then((respond) => console.log(respond))
      .catch((err) => console.log(err));
  };

  const handleStatus = (i) => {
    console.log(i);
  };

  const TR = (patient) => (
    <tr key={patient._id}>
      <td>{patient.name}</td>
      <td>{patient.surname}</td>
      <td>{patient.email}</td>
      <td>{patient.diagnosis}</td>
      <td>{patient.treatment}</td>

      <td className="func">
        <span>Status</span>
        <BiEdit onClick={() => handleUpdate(patient)} />
        <BiTrash onClick={() => handleDelete(patient._id)} />
        <BiUserCheck onClick={handleStatus} />
      </td>
    </tr>
  );

  return (
    <Container className="my-5">
      <Table>
        <thead>
          <tr>
            <td>name</td>
            <td>surname</td>
            <td>email</td>
            <td>diagnosis</td>
            <td>treatment</td>
            <td>functions</td>
          </tr>
        </thead>
        <tbody>
          {data?.map((patient, i) => (
            <TR {...patient} key={i} />
          ))}
        </tbody>
      </Table>
    </Container>
  );
}
