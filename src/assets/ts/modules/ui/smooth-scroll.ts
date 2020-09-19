import ss from 'smoothscroll-polyfill'

/**
 * 対象となる要素までスムーススクロールさせる
 * @param target 対象となる要素
 * @param buffer 画面上部とのバッファ
 */
export const smoothScroll = (target: string, buffer = 0): void => {
  ss.polyfill()

  const $target = document.querySelector(target)
  const rectTop = $target.getBoundingClientRect().top
  const offsetTop = window.pageYOffset
  const top = rectTop + offsetTop - buffer
  window.scrollTo({
    top,
    behavior: 'smooth',
  })
}
