import { useParams, useHistory } from "react-router-dom";
import useFetch from '../customize/fetch';
import './Blog.scss';

const DetailBlog = () => {
  let { id } = useParams();
  let history = useHistory();

  const handleBackData = () => {
    history.push("/blog");
  };
  console.log(">>> check use param: ", useParams());
  return (
    <>
      <div>
        {" "}
        <span onClick={handleBackData}>&lt;-- Back </span>
      </div>
      <h1> Hello detail blogs with id = {id}</h1>
    </>
  );
};

export default DetailBlog;
