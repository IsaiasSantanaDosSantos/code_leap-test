função  Post ( )  {
  const  postList  =  useSelector ( ( state )  =  > state.postList ) ; _
  const  [ isDeleteModalVisible ,  setIsDeleteModalVisible ]  =  useState ( false ) ;
  const  [ isEditModal ,  setIsEditModal ]  =  useState ( false ) ;
  const  postOwner  =  useSelector ( ( estado )  =  > estado.usuário.nome ) ; _ _ _
  const  deletePost  =  ( )  =>  {
    setIsDeleteModalVisible ( true ) ;
  } ;
  const  confirmDelete  =  ( )  =>  {
    setIsDeleteModalVisible ( false ) ;
  } ;
  const  editPost  =  ( )  =>  {
    setIsEditModal ( true ) ;
  } ;
  const  salvarEdit  =  ( )  =>  {
    setIsEditModal ( false ) ;
  } ;
  retornar  (
    < div >
      < div >
        { postLista . mapa ( ( idPost )  =>  (
          < chave de formulário  = { idPost . idPost } className = { estilos . postsFormulário } > 
            < div  className = { estilos . containerTitle } >
              < div  className = { estilos . containerPostTitle } >
                < h4  className = { estilos . post_Title } > { idPost . titlePost } < / h4 >
              < / div >
              { postOwner  ===  idPost . autor ? (
                < div  className = { estilos . containerIcons } >
                  < div  className = { estilos . classe de ícones } >
                    < DeleteForeverIcon  onClick = { deletePost }  / >
                  < / div >
                  < div  className = { estilos . classe de ícones } >
                    < EditIcon  onClick = { editPost }  / >
                  < / div >
                < / div >
              ) : nulo }
            < / div >
            < div  className = { estilos . containernameAndTime } >
              < div  className = { estilos . containerAuthorName } >
                { < p > @ { idPost . autor } < / p > }
              < / div >
              < div  className = { estilos . horaPost } >
                < p > { idPost . data } < / p >
              < / div >
            < / div >
            < Contêiner >
              < TextareaAutosize
                Desativado
                aria-label = "altura mínima"
                minLinhas = { 8 }
                estilo = { {
                  largura : "100%" ,
                  fundo : "#FFFFFF" ,
                  border : "1px sólido #777777" ,
                  boxSizing : "borderBox" ,
                  borderRadius : "4px" ,
                  preenchimento : "10px" ,
                  fontFamily : "Roboto" ,
                  fontStyle : "normal" ,
                  fontWeight : "400px" ,
                  fontSize : "16px" ,
                  lineHeight : "16px" ,
                  cor : "#000000" ,
                } }
                valor = { idPost . postConteúdo }
              / >
            < / Contêiner >
          < / formulário >
        ) ) }
      < / div >
      { isDeleteModalVisible ? (
        < div  className = { estilos . bodyDeleteModal } >
          < div  className = { estilos . deleteModal } >
            < div  className = { estilos . deleteConfirmação } >
              < p > Tem certeza de que deseja excluir este item? < / p >
            < / div >
            < div  className = { estilos . deteleBtnBox } >
              < div  className = { estilos . confirmaçãoBtn } >
                < Button  onClick = { ( )  =>  setIsDeleteModalVisible ( false ) } >
                  cancelar
                < / Botão >
                < Button  onClick = { confirmDelete } > ok < / Button >
              < / div >
            < / div >
          < / div >
        < / div >
      ) : nulo }
      { éEditModal ? (
        < div  className = { estilos . bodyDeleteModal } >
          < div  className = { estilos . editModal } >
            < div  className = { estilos . editConfirmação } >
              < p > Editar item < / p >
            < / div >
            { /*{postList.map((idPost) => (*/ }
              < div  >
                < StyledTextField
                  fullWidth = { true }
                  variante = "delineado"
                  etiqueta = "Título"
                  nome = "nome"
                  placeholder = "Olá mundo"
                > < / StyledTextField >
                < TextareaAutosize
                  aria-label = "altura mínima"
                  minLinhas = { 8 }
                  placeholder = "Conteúdo aqui"
                  estilo = { {
                    largura : "100%" ,
                    marginTop : "20px" ,
                    fundo : "#FFFFFF" ,
                    border : "1px sólido #777777" ,
                    boxSizing : "borderBox" ,
                    borderRadius : "4px" ,
                    preenchimento : "10px" ,
                    fontFamily : "Roboto" ,
                    fontStyle : "normal" ,
                    fontWeight : "400px" ,
                    fontSize : "16px" ,
                    lineHeight : "16px" ,
                    cor : "#000000" ,
                  } }
                  nome = "conteúdo das postagens"
                > < / TextareaAutosize >
              < / div >
            { /*))}*/ }

            < div  className = { estilos . saveBtn } >
              < Button  onClick = { saveEdit } > save < / Button >
            < / div >
	@@ -182,4 +185,4 @@ function Post() {
  ) ;
}

exportar  postagem padrão  ;
