import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useLanguage } from "../contexts/LanguageContext";
import LanguageSelector from "../components/LaunguageSelector";

interface Blog {
  id: number;
  title: string;
  content: string;
}

const PostList: React.FC = () => {
  const { language } = useLanguage();
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(true);
    axios
      .post<Blog[]>("http://localhost:3000/posts", { lang: language })
      .then((response) => {
        setBlogs(response.data);
        setLoading(false);
      })
      .catch((error) => console.error(error));
  }, [language]);

  return (
    <div>
      <h2>Harvest Backend Challenge</h2>
      <LanguageSelector />
      {loading && <h4>Loading...</h4>}
      {!loading && (
        <ul>
          {blogs.map((blog) => (
            <li key={blog.id}>
              <Link to={`/blog/${blog.id}`}>{blog.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PostList;
