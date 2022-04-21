import {
  Button,
  Container,
  inputLabelClasses,
  outlinedInputClasses,
  TextField,
} from "@mui/material";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import styles from "./Posts.module.css";
import { useDispatch, useSelector } from "react-redux";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import EditIcon from "@material-ui/icons/Edit";
import { useState } from "react";
import styled from "@emotion/styled";
import { deletePost, updatePost } from "../../redux/postListSlice";

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
  const [postToBeDeleted, setPostToBeDeleted] = useState(false);
  const [isEditModal, setIsEditModal] = useState(false);
  const [newPostTitle, setNewPostTitle] = useState("");
  const [newPostContent, setNewPostContet] = useState("");
  const postOwner = useSelector((state) => state.user.name);
  const postList = useSelector((state) => state.postList);

  const dispatch = useDispatch();

  const selectPostToBeDeleted = (idPost) => {
    setPostToBeDeleted(idPost);
  };

  const confirmDelete = () => {
    setPostToBeDeleted(undefined);
    dispatch(deletePost(postToBeDeleted));
  };

  const cancelDeletion = () => {
    setPostToBeDeleted(undefined);
  };
/*
  const saveEdit = () => {
   dispatch(updatePost(newPostTitle, newPostContent));
    setIsEditModal(false);
    console.log(postList);
  };
*/
  return (
    <div>
      <div>
        {postList.map((idPost) => (
          <form key={idPost.idPost} className={styles.postsForm}>
            <div className={styles.containerTitle}>
              <div className={styles.containerPostTitle}>
                <h4 className={styles.post_Title}>{idPost.titlePost}</h4>
              </div>
              {postOwner === idPost.author ? (
                <div className={styles.containerIcons}>
                  <div className={styles.iconsClass}>
                    <DeleteForeverIcon
                      onClick={() => selectPostToBeDeleted(idPost)}
                    />
                  </div>
                  <div className={styles.iconsClass}>
                    <EditIcon
                      onClick={() => {setIsEditModal(true); }}
                    />
                  </div>
                </div>
              ) : null}
            </div>



            {isEditModal ? (
              <div className={styles.bodyDeleteModal}>
                <div className={styles.editModal}>
                  <div className={styles.editConfirmation}>
                    <p>Edit item</p>
                  </div>

                  {/*    TEST     

                    vídeo: https://www.youtube.com/watch?v=bml92jhF4t8

                    */}
                  <div>
                    <StyledTextField
                      fullWidth={true}
                      variant="outlined"
                      label="Title"
                      name="title"
                      placeholder="Hello world"
                      onChange={(e) => setNewPostTitle(e.target.value)}
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
                      onChange={(e) => setNewPostContet(e.target.value)}
                    />
                  </div>

                  {/*  FINISH TEST     */}

                  <div className={styles.saveBtn}>
                    <Button onClick={() => {
                        dispatch(
                          updatePost({
                            idPost: idPost.idPost,
                            titlePost: newPostTitle,
                            postContent: newPostContent,
                          })
                        );
                        setIsEditModal(false);
                      }}>save</Button>
                  </div>
                </div>
              </div>
            ) : null}



            <div className={styles.containernameAndTime}>
              <div className={styles.containerAuthorName}>
                {<p>@{idPost.author}</p>}
              </div>
              <div className={styles.timePost}>
                <p>{idPost.postMoment}</p>
              </div>
            </div>
            <Container>
              <TextareaAutosize
                disabled
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
                value={idPost.postContent}
              />
            </Container>

            
          </form>
        ))}
      </div>
      {postToBeDeleted ? (
        <div className={styles.bodyDeleteModal}>
          <div className={styles.deleteModal}>
            <div className={styles.deleteConfirmation}>
              <p>Are you sure you want to delete this item?</p>
            </div>
            <div className={styles.deteleBtnBox}>
              <div className={styles.confirmationBtn}>
                <Button onClick={cancelDeletion}>cancelar</Button>
                <Button onClick={confirmDelete}>ok</Button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Post;
