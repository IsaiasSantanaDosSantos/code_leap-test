import { Button, ButtonBase, Container } from "@mui/material";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import styles from "./Posts.module.css";
import { useSelector } from "react-redux";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import EditIcon from "@material-ui/icons/Edit";
import { useState } from "react";
import Form from "./Form";

function Post() {
  const postList = useSelector((state) => state.postList);
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
  const [isEditModal, setIsEditModal] = useState(false);
  const postOwner = useSelector((state) => state.user.name);
  const deletePost = () => {
    setIsDeleteModalVisible(true);
  };

  const confirmDelete = () => {
    console.log(postOwner);
  };

  //let item = JSON.parse(localStorage.getItem("postList"));
  /*let myArray = item;
    let newArray = myArray.filter((item) => post.titlePost !== nameSearch);
    localStorage.setItem("dadosPac", JSON.stringify(newArray)); */

  const editPost = () => {
    setIsEditModal(true);
  };

  return (
    <div>
      <div>
        {postList.map((post) => (
          <form className={styles.postsForm}>
            <div key={post} className={styles.containerTitle}>
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
        <div className={styles.bodyModal}>
          <div className={styles.editModal}>
            <div className={styles.editConfirmation}>
              <p>Edit item</p>
            </div>
            <Form />
            <div className={styles.saveBtn}>
              <Button>save</Button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Post;
