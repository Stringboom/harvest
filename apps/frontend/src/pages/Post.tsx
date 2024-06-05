import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useLanguage } from "../contexts/LanguageContext";
import LanguageSelector from "../components/LaunguageSelector";

interface Blog {
  id: number;
  title: string;
  content: string;
}

const Post: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { language } = useLanguage();
  const [blog, setBlog] = useState<Blog | null>(null);

  useEffect(() => {
    axios
      .post<Blog>(`http://localhost:3000/post/${id}`, { lang: language })
      .then((response) => setBlog(response.data))
      .catch((error) => console.error(error));
  }, [id, language]);

  return (
    <div>
      <h2>Harvest Backend Challenge</h2>
      <LanguageSelector />
      {(!blog && <h3>Loading...</h3>) || (
        <>
          <h2>{blog?.title}</h2>
          <p>{blog?.content}</p>
        </>
      )}
      <Link to={"/"}>{"< Back"}</Link>
    </div>
  );
};

export default Post;
