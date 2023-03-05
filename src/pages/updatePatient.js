import UpdateForm from "../components/UpdateForm";
import { useRouter } from "next/router";

export default function updatePatient(props) {
  const router = useRouter();
  const patient = router.query;

  return (
    <div>
      <UpdateForm {...patient} />
    </div>
  );
}
