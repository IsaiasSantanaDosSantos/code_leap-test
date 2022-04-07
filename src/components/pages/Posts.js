import { Container, Grid } from "@mui/material";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import styles from "./Posts.module.css";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/UserSlice";
import { selectTitle } from "../../redux/TitleSlice";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import EditIcon from "@material-ui/icons/Edit";

function deletePost() {
  alert("Do you want delete post?");
}

function editPost() {
  alert("Do you want edit post?");
}

function Post() {
  const { name } = useSelector(selectUser);
  //const { postTitle } = useSelector(selectTitle);
  const titlePost = useSelector((state) => state.title.name);
  const postsContent = useSelector((state) => state.content.name);

  return (
    <form className={styles.postsForm}>
      <div className={styles.containerTitle}>
        <div className={styles.containerPostTitle}>
          <h4 className={styles.post_Title}>{titlePost}</h4>
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
      <div>{<p>@{name}</p>}</div>
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
          value={postsContent}
        />
      </Container>
    </form>
  );
}

export default Post;
