import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Courses = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const getCoursesFn = async () => {
    const response = await axios.get(
      "https://api-eduvila.onrender.com/courses",
      { params: { id: "jihihi" } }
    );
    setData(response.data);
  };

  useEffect(() => {
    getCoursesFn();
  }, []);

  return (
    <div>
      {data.map((course) => {
        return (
          <div onClick={() => navigate(`/courses/${course.id}`)}>
            {course.heading}
          </div>
        );
      })}
    </div>
  );
};

export default Courses;
