import { useState } from "react";

const useValidation = (callback) => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});

  function validateUrl(url) {
    const pattern =
      /^(?:https?:\/\/)?(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(?:\/[\w-]*)*\/?$/;
    return pattern.test(url);
  }

  const validate = (name, value) => {
    switch (name) {
      case "interviewer":
        if (!value || value.length === 0) {
          setErrors({ ...errors, interviewer: "Please select an option" });
        } else {
          let newObj = omit(errors, "interviewer");
          setErrors(newObj);
        }
        break;

      case "jobId":
        if (value === "select" || !value) {
          setErrors({ ...errors, jobId: "Please select an option" });
        } else {
          let newObj = omit(errors, "jobId");
          setErrors(newObj);
        }
        break;

      case "date":
        if (!value || value === "") {
          setErrors({ ...errors, date: "Please select date" });
        } else if (typeof value === "string") {
          let newObj = omit(errors, "date");
          setErrors(newObj);
        }
        break;

      case "applicantId":
        if (!value || value === "select") {
          setErrors({ ...errors, applicantId: "Please select an option" });
        } else if (typeof value === "string") {
          let newObj = omit(errors, "applicantId");
          setErrors(newObj);
        }
        break;

      case "interviewLevel":
        if (!value || value === "select") {
          setErrors({ ...errors, interviewLevel: "Please select an option" });
        } else if (typeof value === "string") {
          let newObj = omit(errors, "interviewLevel");
          setErrors(newObj);
        }
        break;
      case "interviewMode":
        if (!value || value === "select") {
          setErrors({ ...errors, interviewMode: "Please select an option" });
        } else if (typeof value === "string") {
          let newObj = omit(errors, "interviewMode");
          setErrors(newObj);
        }
        break;

      case "recruiter":
        if (!value || value === "select") {
          setErrors({ ...errors, recruiter: "Please select an option" });
        } else if (typeof value === "string") {
          let newObj = omit(errors, "recruiter");
          setErrors(newObj);
        }
        break;

      case "meetLink":
        if (!value) {
          setErrors({ ...errors, meetLink: "Please fill the details" });
        } else if (!/\S+@\S+\.\S+/.test(value)) {
          setErrors({ ...errors, meetLink: "Please enter valid email" });
        } else if (typeof value == "string") {
          let newObj = omit(errors, "meetLink");
          setErrors(newObj);
        }
        break;

      case "interviewEmail":
        if (!values[name]) {
          setErrors({
            ...errors,
            interviewEmail: "Please fill the details",
          });
        } else if (typeof values[name] === "string") {
          let newObj = omit(errors, "interviewEmail");
          setErrors(newObj);
        }

        break;

      case "phoneNumber":
        if (!value) {
          setErrors({
            ...errors,
            phoneNumber: "Please fill the details",
          });
        } else if (!/^\+91(\s?\d{5}){2}\s*$/.test(value)) {
          setErrors({
            ...errors,
            phoneNumber:
              "Please enter a valid 10-digit Mobile Number with country code (+91)",
          });
        } else {
          let newObj = omit(errors, "phoneNumber");
          setErrors(newObj);
        }
        break;
      case "alternateMobileNo":
        if (!value) {
          setErrors({
            ...errors,
            alternateMobileNo: "Please fill the details",
          });
        } else if (!/^\+91(\s?\d{5}){2}\s*$/.test(value)) {
          setErrors({
            ...errors,
            alternateMobileNo:
              "Please enter a valid 10-digit Mobile Number with country code (+91)",
          });
        } else {
          let newObj = omit(errors, "alternateMobileNo");
          setErrors(newObj);
        }
        break;
      case "fromtime":
        if (!value) {
          setErrors({
            ...errors,
            fromtime: "Please fill the details",
          });
        } else if (typeof value === "string") {
          let newObj = omit(errors, "fromtime");
          setErrors(newObj);
        }
        break;
      case "totime":
        if (!value) {
          setErrors({
            ...errors,
            totime: "Please fill the details",
          });
        } else if (typeof value === "string") {
          let newObj = omit(errors, "totime");
          setErrors(newObj);
        }
        break;
      case "meetingUrl":
        if (!value || !validateUrl(value)) {
          setErrors({
            ...errors,
            meetingUrl: "Please enter a valid website URL",
          });
        } else {
          let newObj = omit(errors, "meetingUrl");
          setErrors(newObj);
        }
        break;

      default:
        break;
    }
  };
  const handleChange = (e, value, newVal, label) => {
    let name = newVal === true ? label : e.target?.name;
    let val = newVal === true ? value : e.target?.value;
    validate(name, val);

    setValues({
      ...values,
      [name]: val,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const mandatoryFields = [
      "interviewer",
      "jobId",
      "applicantId",
      "interviewMode",
      "interviewLevel",
      "date",
      "recruiter",
      "fromtime",
      "totime",
    ];

    const emptyFields = mandatoryFields.filter((fieldName) => {
      const value = values[fieldName];
      if (
        fieldName === "totime" ||
        fieldName === "fromtime" ||
        fieldName === "jobId"
      ) {
        return !values.hasOwnProperty(fieldName) || !value;
      } else if (fieldName === "interviewer") {
        return !values.hasOwnProperty(fieldName) || value.length === 0;
      } else {
        // Handle other input fields
        return (
          !values.hasOwnProperty(fieldName) ||
          typeof value !== "string" ||
          value.trim() === ""
        );
      }
    });

    if (emptyFields.length > 0) {
      // Show toast message for empty fields
      toast(t("Please_fill"));

      // Set red borders for empty fields
      const emptyFieldErrors = emptyFields.reduce((acc, fieldName) => {
        return {
          ...acc,
          [fieldName]: "Please fill the details",
        };
      }, {});
      setErrors((prev) => {
        return {
          ...prev,
          ...emptyFieldErrors,
        };
      });

      return;
    }

    const newErrors = {};
    for (const [name, value] of Object.entries(values)) {
      const validationError = validate(name, value);
      if (validationError) {
        newErrors[name] = validationError;
      }
    }
    setErrors(newErrors);

    if (Object.keys(errors).length > 0) {
      toast(t("Please_Enter"));
      setErrors(errors);
    } else {
      callback();
    }
  };

  return {
    values,
    errors,
    handleChange,
    setErrors,
    handleSubmit,
    setValues,
  };
};

export default useInterviewScheduleValidation;
