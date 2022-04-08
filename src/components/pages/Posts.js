import { Container } from "@mui/material";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import styles from "./Posts.module.css";
import { useSelector } from "react-redux";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import EditIcon from "@material-ui/icons/Edit";

const deletePost = () => {
  alert("Do you want delete post?");
};

const editPost = () => {
  alert("Do you want edit post?");
};

function Post() {
  const postList = useSelector((state) => state.postList);

  return (
    <div>
      {postList.map((post) => (
        <form className={styles.postsForm}>
          <div key={post} className={styles.containerTitle}>
            <div className={styles.containerPostTitle}>
              <h4 className={styles.post_Title}>{post.titlePost}</h4>
            </div>
            <div className={styles.containerIcons}>
              <div className={styles.iconsClass}>
                <DeleteForeverIcon onClick={deletePost} />
              </div>
              <div className={styles.iconsClass}>
                <EditIcon onClick={editPost} />
              </div>
            </div>
          </div>
          <div>{<p>@{post.author}</p>}</div>
          <Container>
            <TextareaAutosize
              aria-label="minimum height"
              minRows={8}
              style={{
                width: "100%",
                marginTop: "20px",
                background: "#FFFFFF",
                border: "1px solid #777777",
                boxSizing: "borderBox",
                borderRadius: "4px",
                padding: "10px",
                fontFamily: "Roboto",
                fontStyle: "normal",
                fontWeight: "400px",
                fontSize: "16px",
                lineHeight: "16px",
                color: "#000000",
              }}
              value={post.postContent}
            />
          </Container>
        </form>
      ))}
    </div>
  );
}

export default Post;
