import { Container, Grid } from "@mui/material";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import styles from "./Posts.module.css";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/User";
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

  return (
    <form className={styles.postsForm}>
      <Grid className={styles.containerTitle}>
        <Grid item xs={8} justifyItems={"flex-start"}>
          <h4 className={styles.postTitle}>Title</h4>
        </Grid>
        <Grid item xs={4} className={styles.iconsClass}>
          <DeleteForeverIcon onClick={deletePost} />
        </Grid>
        <Grid item xs={4} className={styles.iconsClass}>
          <EditIcon onClick={editPost} />
        </Grid>
      </Grid>
      <div>
        <p>@{name}</p>
      </div>
      <Container>
        <TextareaAutosize
          fullWidth={true}
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
        />
      </Container>
    </form>
  );
}

export default Post;
