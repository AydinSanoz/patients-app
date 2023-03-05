const BASE_URL = "http://localhost:3000";

// get all patients
export const getPatients = async () => {
  const response = await fetch(`${BASE_URL}/api/crud`);
  const json = await response.json();
  return json;
};

// get a patient
export const getPatient = async (patientId) => {
  console.log(patient._id);
  const response = await fetch(`${BASE_URL}/api/crud/${patientId}`);
  const json = response.json();
  return json;
};

// posting a new patient
export const postPatient = async (formData) => {
  console.log("🚀 ~ file: helper.js:20 ~ postPatient ~ formData:", formData);
  const Options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  };
  const response = await fetch(`${BASE_URL}/api/crud`, Options);
  const json = await response.json();
  return json;
};

// update a patient
export const updatePatient = async (patientId, formData) => {
  const Options = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  };
  const response = await fetch(`${BASE_URL}/api/crud/${patientId}`, Options);
  const json = await response.json();
  return json;
};

// delete all patients
export const deletePatients = async () => {
  const Options = {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  };
  const response = await fetch(`${BASE_URL}/api/crud`, Options);
  const json = await response();
  return json;
};

// delete a user
export const deletePatient = async (patientId) => {
  const Options = {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  };
  const response = await fetch(`${BASE_URL}/api/crud/${patientId}`, Options);
  const json = await response.json();
  if (json) return json;
  return {};
};
