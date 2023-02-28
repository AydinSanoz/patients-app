import { patientModel } from "../model/patientModel";

export async function GET(req, res) {
  await patientModel
    .find()
    .then((datas) =>
      datas.length
        ? res.status(200).json(datas)
        : res.status(201).json({ data: "No data in database" })
    )
    .catch((err) => res.status(404).json({ err: err }));
}

export async function GETBYID(req, res) {
  const { id } = req.query;
  if (id) {
    patientModel
      .findById(id)
      .then((respond) => {
        return respond
          ? res.status(201).json(respond)
          : res.status(404).json({ error: "patient can not be selected" });
      })
      .catch((err) => {
        return res.status(404).json({ error: err.message });
      });
  } else {
    res.status(404).json({ error: "Patient can not provided" });
  }
}

export async function POST(req, res) {
  const formData = req.body;
  const new_patient = new patientModel(formData);
  await new_patient
    .save()
    .then((data) => res.status(200).json(data))
    .catch((err) => res.status(404).json(`not recorded : ${err.message}`));
}

export async function PUT(req, res) {
  const { id } = req.query;
  const formData = req.body;

  if (id && formData) {
    await patientModel
      .findByIdAndUpdate(id, formData)
      .then((respond) => {
        return res.status(200).json(respond);
      })
      .catch((err) => {
        return res.status(404).json({ error: err });
      });
  }
  res.status(404).json({ error: "Patient is not provided" });
}

export async function DELETE(req, res) {
  await patientModel
    .deleteMany()
    .then((respond) => res.status(200).json(respond))
    .catch((err) => res.status(404).json({ error: err }));
}

export async function DELETEBYID(req, res) {
  const { id } = req.query;
  if (id) {
    await patientModel
      .findByIdAndDelete(id)
      .then((respond) => {
        return respond
          ? res.status(200).json(respond)
          : res.status(404).json({ error: "patient is not selected" });
      })
      .catch((err) => res.status(404).json({ error: err }));
  }
}
