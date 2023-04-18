
export function shareInit() {
  const shareButton = document.querySelector ('.share__ul');
  const overlay = document.querySelector(".overlay");
  const shareModal = document.querySelector(".share");
  const title = window.document.title;
  const url = window.document.location.href;
  shareButton.addEventListener("click", () => {
      navigator
        .share({
          title: `$(title)`,
          url: `$(url)`,
        })
        .then(() => {
          console.log("Thanks for sharing");
        })
        .catch(console.error);
        
        // console.log('hey');
      })
}
