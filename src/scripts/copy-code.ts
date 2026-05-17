function addCopyButtonToPre() {
  const preElements = document.querySelectorAll("article pre");

  preElements.forEach((pre) => {
    pre.addEventListener("click", (e) => {
      const target = e.target as HTMLElement;
      
      // Check if the click is on the ::after pseudo-element area (top-right)
      const rect = pre.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const clickY = e.clientY - rect.top;

      // Approximate area where the ::after pseudo-element is (top-right corner)
      const isClickOnPseudoElement =
        clickX > rect.width - 80 && clickY < 40;

      if (isClickOnPseudoElement) {
        const codeElement = pre.querySelector("code");
        if (codeElement) {
          const text = codeElement.textContent || "";
          navigator.clipboard.writeText(text).then(() => {
            // Add the "copied" class
            pre.classList.add("copied");

            // Remove the class after 2 seconds
            setTimeout(() => {
              pre.classList.remove("copied");
            }, 2000);
          });
        }
      }
    });
  });
}

// Run when DOM is ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", addCopyButtonToPre);
} else {
  addCopyButtonToPre();
}
