import {
  Button,
  Container,
  inputLabelClasses,
  outlinedInputClasses,
  TextField,
} from "@mui/material";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import styles from "./Posts.module.css";
import { useSelector } from "react-redux";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import EditIcon from "@material-ui/icons/Edit";
import { useState } from "react";
import styled from "@emotion/styled";

const StyledTextField = styled(TextField)({
  [`& .${outlinedInputClasses.root} .${outlinedInputClasses.notchedOutline}`]: {
    borderColor: "#777777",
  },
  [`& .${outlinedInputClasses.root}.${outlinedInputClasses.focused} .${outlinedInputClasses.notchedOutline}`]:
    {
      borderColor: "#777777",
    },
  [`&:hover .${outlinedInputClasses.input}`]: {
    color: "#000000",
  },
  [`& .${outlinedInputClasses.root}.${outlinedInputClasses.focused} .${outlinedInputClasses.input}`]:
    {
      color: "#777777",
    },
  [`& .${inputLabelClasses.outlined}`]: {
    color: "#000000",
  },
  [`&:hover .${inputLabelClasses.outlined}`]: {
    color: "#000000",
  },
  [`& .${inputLabelClasses.outlined}.${inputLabelClasses.focused}`]: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "16px",
    lineHeight: "19px",
    color: "#000000",
  },
});

function Post() {
  const postList = useSelector((state) => state.postList);
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
  const [isEditModal, setIsEditModal] = useState(false);

  const postOwner = useSelector((state) => state.user.name);

  const deletePost = () => {
    setIsDeleteModalVisible(true);
  };

  const confirmDelete = () => {
    setIsDeleteModalVisible(false);
  };

  const editPost = () => {
    setIsEditModal(true);
  };

  const saveEdit = () => {
    setIsEditModal(false);
  };

  return (
    <div>
      <div>
        {postList.map((post) => (
          <form key={post.date} className={styles.postsForm}>
            <div className={styles.containerTitle}>
              <div className={styles.containerPostTitle}>
                <h4 className={styles.post_Title}>{post.titlePost}</h4>
              </div>
              {postOwner === post.author ? (
                <div className={styles.containerIcons}>
                  <div className={styles.iconsClass}>
                    <DeleteForeverIcon onClick={deletePost} />
                  </div>
                  <div className={styles.iconsClass}>
                    <EditIcon onClick={editPost} />
                  </div>
                </div>
              ) : null}
            </div>
            <div className={styles.containernameAndTime}>
              <div className={styles.containerAuthorName}>
                {<p>@{post.author}</p>}
              </div>
              <div className={styles.timePost}>
                <p>{post.date}</p>
              </div>
            </div>
            <Container>
              <TextareaAutosize
                aria-label="minimum height"
                minRows={8}
                style={{
                  width: "100%",
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
      {isDeleteModalVisible ? (
        <div className={styles.bodyDeleteModal}>
          <div className={styles.deleteModal}>
            <div className={styles.deleteConfirmation}>
              <p>Are you sure you want to delete this item?</p>
            </div>
            <div className={styles.deteleBtnBox}>
              <div className={styles.confirmationBtn}>
                <Button onClick={() => setIsDeleteModalVisible(false)}>
                  cancelar
                </Button>
                <Button onClick={confirmDelete}>ok</Button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
      {isEditModal ? (
        <div className={styles.bodyDeleteModal}>
          <div className={styles.editModal}>
            <div className={styles.editConfirmation}>
              <p>Edit item</p>
            </div>
            <div>
              <StyledTextField
                fullWidth={true}
                variant="outlined"
                label="Title"
                name="name"
                placeholder="Hello world"
              />
              <TextareaAutosize
                aria-label="minimum height"
                minRows={8}
                placeholder="Content here"
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
                name="postsContent"
              />
              <div>
                <p></p>
              </div>
            </div>
            <div className={styles.saveBtn}>
              <Button onClick={saveEdit}>save</Button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Post;
