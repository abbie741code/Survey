// 取得所有 fix-color-option 元素，為每個元素加上 click 事件監聽器
document.querySelectorAll(".fix-color-option").forEach((cardElem, index) => {
  cardElem.addEventListener("click", (e) => {
    // 取得所有 fix-color-option 元素，如果不是當前被點擊的元素，就移除 active 狀態
    document
      .querySelectorAll(".fix-color-option")
      .forEach((cardElem, index) => {
        if (parseInt(e.currentTarget.dataset.index) !== index) {
          cardElem.classList.remove("active");
        }
      });
    // 切換被點擊元素的 active 狀態
    e.currentTarget.classList.toggle("active");
  });
});

// 加上全域 click 事件監聽器，當點擊在 fix-color-container 外的地方時，取消所有元素的 active 狀態
window.addEventListener("click", (e) => {
  // 取得 fix-color-container 元素和當前處於 active 狀態的 fix-color-option 元素
  const fixColorContainer = document.querySelector(".fix-color-container");
  const fixColorOption = document.querySelector(".fix-color-option.active");
  // 如果點擊的元素在 fix-color-container 元素範圍內，且不是當前處於 active 狀態的元素，就保留目前的 active 狀態
  if (fixColorContainer.contains(e.target) && e.target !== fixColorOption) {
    return;
  }
  // 否則取消所有元素的 active 狀態
  document.querySelectorAll(".fix-color-option").forEach((cardElem) => {
    if (cardElem !== fixColorOption) {
      cardElem.classList.remove("active");
    }
  });
}, { capture: true });
