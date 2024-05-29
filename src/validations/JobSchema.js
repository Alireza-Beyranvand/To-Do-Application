import * as Yup from "yup";


export const JobSchema = Yup.object().shape({
    name : Yup.string().nullable().required("Pleace Enter Job Name"),
    Description : Yup.string().nullable().required("Pleace Enter Description")
});