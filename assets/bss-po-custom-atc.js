const handleEnableATC = () => {
  const allBtnATC = document.querySelectorAll("button[data-add-to-cart].btn.btn--full.add-to-cart")
  allBtnATC.forEach(add_to_cart_btn => {
    add_to_cart_btn.removeAttribute('disabled');
  })
}
console.log("============== HAU DEP TRAI")
if (BSS_PO) {
console.log("============== HAU DEP TRAI BSS_PO")
    const BSS_isRenderOptionSetID = setInterval(() => {
        if (document.querySelector(".bss-po-product-page")) {
          clearInterval(BSS_isRenderOptionSetID);
          handleEnableATC()
        }
    }, 1000)
  
    setTimeout(()=> {
      clearInterval(BSS_isRenderOptionSetID)
      handleEnableATC()
    }, 5000)
} else handleEnableATC()