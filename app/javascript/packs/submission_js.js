function handleEnter(e) {
    if(e.keyCode === 13){
      e.preventDefault();
      document.querySelector("form").submit();
      document.querySelector("#message_text").value = "";
      
    }
}
document.querySelector("#message_text").onkeydown = handleEnter;