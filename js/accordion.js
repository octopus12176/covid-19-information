document.addEventListener('DOMContentLoaded', function () {
  // すべてのトグルボタンを取得
  const toggleButtons = document.querySelectorAll('.section-toggle');

  toggleButtons.forEach((button) => {
    button.addEventListener('click', function () {
      // アクティブ状態の切り替え
      this.classList.toggle('active');

      // コンテンツ要素を取得
      const content = this.nextElementSibling;

      // コンテンツの表示/非表示を切り替え
      if (this.classList.contains('active')) {
        content.classList.add('active');
        content.classList.remove('hidden');
        // アニメーション完了後に可視化
        setTimeout(() => {
          content.classList.add('visible');
        }, 10);
      } else {
        content.classList.remove('visible');
        content.classList.add('hidden');
        // フェードアウト後にアクティブ解除
        setTimeout(() => {
          content.classList.remove('active');
        }, 300);
      }
    });
  });
});
