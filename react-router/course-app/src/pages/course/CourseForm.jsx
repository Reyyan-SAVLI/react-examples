import { Form, useActionData, useNavigation } from "react-router";
import { redirect } from "react-router";
import { isRequiredCheck, isValidImage } from "../../utils/validations";

export default function CourseForm({ method, data }) {
  const navigation = useNavigation();

  const isSubmitting = navigation.state === "submitting";
  const result = useActionData();
  return (
    <Form method={method}>
        {result && result.errors && (
            <ul className="errors">
                {Object.values(result.errors).map((err)=>(
                    <li key={err}>{err}</li>
                ))}
            </ul>
        )}
      <div>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          name="title"
          id="title"
          defaultValue={data ? data.title : ""}
        />
        {result && result.title && <p>{result.title}</p>}
      </div>
      <div>
        <label htmlFor="image">Image:</label>
        <input
          type="text"
          name="image"
          id="image"
          defaultValue={data ? data.image : ""}
        />
        {result && result.image && <p>{result.image}</p>}
      </div>
      <div>
        <label htmlFor="description">Description: </label>
        <textarea
          rows={5}
          name="description"
          defaultValue={data ? data.description : ""}
        ></textarea>
        {result && result.description && <p>{result.description}</p>}
      </div>
      <button disabled={isSubmitting} type="submit">{isSubmitting ? "Submitting": "Submit"}</button>
    </Form>
  );
}

export async function courseAction({ request, params }) {
  const data = await request.formData();
  const method = request.method;

  let url = "http://localhost:5000/courses/";
  if (method === "PUT") {
    const courseid = params.courseid;
    url = url + "/" + courseid;
  }

  const eventData = {
    title: data.get("title"),
    image: data.get("image"),
    description: data.get("description"),
  };

  const errors = {};
  if (!isRequiredCheck(eventData.title)) {
    errors.title = "Required";
  }
    if (!isValidImage(eventData.image)) {
    errors.image = "Required";
  }
    if (!isRequiredCheck(eventData.description)) {
    errors.description = "Required";
  }

  if (Object.keys(errors).length) {
    console.log(errors);
    return errors;
 }

  const response = await fetch(url, {
    method: method,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(eventData),
  });
  if (response.status === 403) {
    return response;
  }
  if (response.ok) {
    return redirect("/courses");
  }
}
