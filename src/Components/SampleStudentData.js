import axios from "axios";
import { useFormik, FormikProvider, Form, Field, ErrorMessage } from "formik";
import { useEffect, useRef, useState } from "react";
import Swal from "sweetalert2";
import * as Yup from "yup";

const SampleStudentData = () => {
  // *********hooks*******
  const [stuId, setStuId] = useState("",)
  const formRef = useRef(null);
  // ******* validations*****
  const validationSchema = Yup.object({
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    dateOfBirth: Yup.date().required("Date of birth is required"),
    gender: Yup.string().required("Gender is required"),
    personalEmail: Yup.string().email("Invalid email").required("Email is required"),
    mobileNumber: Yup.string()
      .matches(/^[6-9]\d{9}$/, "Enter valid 10-digit mobile number")
      .required("Mobile number is required"),
    permanentAddress: Yup.string().required("Permanent address is required"),
    guardianName: Yup.string().required("Guardian name is required"),
    relationship: Yup.string().required("Relationship is required"),
    guardianOccupation: Yup.string().required("Guardian Occupation is required"),
    nationality: Yup.string().required("Nationality is required"),
    languages: Yup.array().min(1, "Select at least one language"),
  });
  // ********* formik**********
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      dateOfBirth: "",
      gender: "",
      personalEmail: "",
      mobileNumber: "",
      permanentAddress: "",
      guardianName: "",
      relationship: "",
      guardianOccupation: "",
      nationality: "",
      languages: [],
    },
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        const isUpdate = stuId !== "";
        const result = await Swal.fire({
          title:"Are You Sure ?",
          text: isUpdate ? "You want to update this student details?" : "You want to Save this student details?",
          icon: "question",
          showCancelButton: true,
          confirmButtonText: isUpdate ? "Yes, Update" : "Yes, Save",
          cancelButtonText: "Cancel",
        });
        if (!result.isConfirmed) return; // 🚫 user cancelled
        let response;
        if (isUpdate) {
          // ===== UPDATE =====
          response = await axios.put( `http://172.16.118.42:8080/student/update-student/${stuId}`, values );
        } else {
          // ===== SAVE =====
          response = await axios.post( "http://172.16.118.42:8080/student/save-student-data", values );
        }
        if (response?.data?.ResponseCode === "01") {
          await Swal.fire({ icon: "success", title: "Success 🎉", text: response.data.ResponseDesc, });
          resetForm();
          setStuId(null);
          getStudentData();
        } else {
          Swal.fire({ icon: "warning", title: "Warning ⚠️", text: response?.data?.ResponseDesc, });
        }
      } catch (error) {
        console.error("Submit error:", error);
        Swal.fire({ icon: "error", title: "Error ❌", text: "Failed to save student profile", });
      }
    }
  });
  // ******** get api******
  const [studentData, setStudentData] = useState([]);
  function getStudentData() {
    axios.get("http://172.16.118.42:8080/student/get-student-data").then((res) => {
      if (res.data) {
        if (res?.data?.status) {
          setStudentData(res?.data?.studentData)
        }
        else {
          setStudentData([]);
        }
      }

    })
  }
  useEffect(() => { getStudentData() }, [])

  // ******* Delete API with Confirmation *******
  const deleteStudentData = (studentId) => {
    if (!studentId) {
      Swal.fire({ icon: "error", title: "Error ❌", text: "Invalid Student ID", });
      return;
    }
    Swal.fire({
      title: "Are you sure? 🤔",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it 🗑️",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`http://172.16.118.42:8080/student/delete-student/${studentId}`)
          .then((res) => {
            if (res?.data?.ResponseCode === "01") {
              getStudentData();
              Swal.fire({ icon: "success", title: "Deleted! 🎉", text: res.data.ResponseDesc, });
            } else {
              Swal.fire({ icon: "warning", title: "Warning ⚠️", text: res?.data?.ResponseDesc || "Delete failed", });
            }
          })
          .catch((error) => {
            console.error("Delete API error:", error);
            Swal.fire({ icon: "error", title: "Error ❌", text: "Server error while deleting student", });
          });
      }
    });
  };

  // *********** Edit (scroll + set values) *********
  const editStudentData = (student) => {
    // Scroll to form
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "start", });
    // Set form values
    formik.setFieldValue("firstName", student.first_name || "");
    formik.setFieldValue("lastName", student.last_name || "");
    formik.setFieldValue(
      "dateOfBirth",
      student.date_of_birth ? student.date_of_birth.split("T")[0] : ""
    );
    formik.setFieldValue("gender", student.gender || "");
    formik.setFieldValue("personalEmail", student.personal_email || "");
    formik.setFieldValue("mobileNumber", student.mobile_number || "");
    formik.setFieldValue("permanentAddress", student.permanent_address || "");
    formik.setFieldValue("guardianName", student.guardian_name || "");
    formik.setFieldValue("relationship", student.relationship || "");
    formik.setFieldValue("guardianOccupation", student.guardian_occupation || "");
    formik.setFieldValue("nationality", student.nationality || "");

    // Optional: store ID for PUT later
    setStuId(student.student_id);
  };
  return (
    <>
      <div className="container mt-5">
        <div ref={formRef} className="card p-4 shadow-sm" style={{ borderRadius: "16px", margin: "auto" }}>
          <h3 className="text-start mb-4 text-primary">Student Profile Form</h3>
          <FormikProvider value={formik}>
            <Form>
              <div className="row mb-3">
                <div className="col-md-4">
                  <label className="form-label">First Name</label>
                  <Field name="firstName" className="form-control" />
                  <small className="text-danger"><ErrorMessage name="firstName" /></small>
                </div>
                <div className="col-md-4">
                  <label className="form-label">Last Name</label>
                  <Field name="lastName" className="form-control" />
                  <small className="text-danger"><ErrorMessage name="lastName" /></small>
                </div>
                <div className="col-md-4">
                  <label className="form-label d-block">Gender</label>
                  <Field type="radio" name="gender" value="M" /> Male
                  <Field type="radio" name="gender" value="F" className="ms-3" /> Female
                  <Field type="radio" name="gender" value="O" className="ms-3" /> Other
                  <div>
                    <small className="text-danger"><ErrorMessage name="gender" /></small>
                  </div>
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-md-4">
                  <label className="form-label">Date of Birth</label>
                  <Field type="date" name="dateOfBirth" className="form-control" />
                  <small className="text-danger"><ErrorMessage name="dateOfBirth" /></small>
                </div>
                <div className="col-md-4">
                  <label className="form-label">Personal Email</label>
                  <Field type="email" name="personalEmail" className="form-control" />
                  <small className="text-danger"><ErrorMessage name="personalEmail" /></small>
                </div>
                <div className="col-md-4">
                  <label className="form-label">Mobile Number</label>
                  <Field name="mobileNumber" className="form-control" />
                  <small className="text-danger"><ErrorMessage name="mobileNumber" /></small>
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-md-4">
                  <label className="form-label">Permanent Address</label>
                  <Field as="textarea" name="permanentAddress" className="form-control" rows="1" />
                  <small className="text-danger"><ErrorMessage name="permanentAddress" /></small>
                </div>
                <div className="col-md-4">
                  <label className="form-label">Guardian Name</label>
                  <Field name="guardianName" className="form-control" />
                  <small className="text-danger"><ErrorMessage name="guardianName" /></small>
                </div>
                <div className="col-md-4">
                  <label className="form-label">Relationship</label>
                  <Field as="select" name="relationship" className="form-select">
                    <option value="">Select</option>
                    <option value="Father">Father</option>
                    <option value="Mother">Mother</option>
                    <option value="Guardian">Legal Guardian</option>
                  </Field>
                  <small className="text-danger"><ErrorMessage name="relationship" /></small>
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-md-4">
                  <label className="form-label">Occupation</label>
                  <Field name="guardianOccupation" className="form-control" />
                  <small className="text-danger"><ErrorMessage name="guardianOccupation" /></small>
                </div>
                <div className="col-md-4">
                  <label className="form-label">Nationality</label>
                  <Field as="select" name="nationality" className="form-select">
                    <option value="">Select</option>
                    <option value="Indian">Indian</option>
                    <option value="Other">Other</option>
                  </Field>
                  <small className="text-danger"><ErrorMessage name="nationality" /></small>
                </div>
                <div className="col-md-4">
                  <label className="form-label d-block">Languages Spoken</label>
                  <Field type="checkbox" name="languages" value="English" /> English
                  <Field type="checkbox" name="languages" value="Telugu" className="ms-3" /> Telugu
                  <Field type="checkbox" name="languages" value="Hindi" className="ms-3" /> Hindi
                  <div>
                    <small className="text-danger"><ErrorMessage name="languages" /></small>
                  </div>
                </div>
              </div>
              {/* Submit */}
              <div className="text-end">
                <button type="submit" className="btn btn-primary px-5">
                  Submit
                </button>
              </div>
            </Form>
          </FormikProvider>
          <h3 className="text-start mb-4 text-primary">Student Profile Details</h3>
          <div className="table table-responsive">
            <table className="table table-striped table-bordered">
              <thead>
                <tr>
                  <th>S.No</th>
                  <th>Name</th>
                  <th>Student ID</th>
                  <th>Gender</th>
                  <th>Date of Birth</th>
                  <th>Personal Email</th>
                  <th>Mobile Number</th>
                  <th>Permanent Address</th>
                  <th>Guardian Name</th>
                  <th>Relationship</th>
                  <th>Occupation</th>
                  <th>Nationality</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {studentData.map((stu, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{stu?.first_name} {stu?.last_name}</td>
                    <td>{stu?.student_id}</td>
                    <td>{stu?.gender}</td>
                    <td>{stu?.date_of_birth}</td>
                    <td>{stu?.personal_email}</td>
                    <td>{stu?.mobile_number}</td>
                    <td>{stu?.permanent_address}</td>
                    <td>{stu?.guardian_name}</td>
                    <td>{stu?.relationship}</td>
                    <td>{stu?.guardian_occupation}</td>
                    <td>{stu?.nationality}</td>
                    <td className="d-flex gap-2">
                      <button type="submit" className="btn btn-secondary btn-sm"
                        onClick={() => { editStudentData(stu) }}
                      >
                        Edit
                      </button>
                      <button type="button" className="btn btn-danger btn-sm"
                        onClick={() => { deleteStudentData(stu?.student_id) }}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default SampleStudentData;
